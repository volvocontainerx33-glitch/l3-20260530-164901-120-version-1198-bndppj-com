const CinemaSite = {
  init() {
    this.menu();
    this.hero();
    this.search();
  },
  menu() {
    const button = document.querySelector("[data-menu-button]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (!button || !menu) return;
    button.addEventListener("click", () => {
      menu.classList.toggle("is-open");
      button.textContent = menu.classList.contains("is-open") ? "×" : "☰";
    });
  },
  hero() {
    const root = document.querySelector("[data-hero]");
    if (!root) return;
    const slides = Array.from(root.querySelectorAll(".hero-slide"));
    const dotWrap = root.querySelector("[data-hero-dots]");
    if (!slides.length || !dotWrap) return;
    let active = 0;
    const dots = slides.map((_, index) => {
      const dot = document.createElement("button");
      dot.className = "hero-dot" + (index === 0 ? " is-active" : "");
      dot.type = "button";
      dot.setAttribute("aria-label", "切换焦点" + (index + 1));
      dot.addEventListener("click", () => show(index));
      dotWrap.appendChild(dot);
      return dot;
    });
    const show = (index) => {
      slides[active].classList.remove("is-active");
      dots[active].classList.remove("is-active");
      active = index;
      slides[active].classList.add("is-active");
      dots[active].classList.add("is-active");
    };
    setInterval(() => show((active + 1) % slides.length), 5200);
  },
  search() {
    const forms = document.querySelectorAll("[data-search-form]");
    if (!forms.length || typeof SEARCH_MOVIES === "undefined") return;
    forms.forEach((form) => {
      const panel = form.closest(".search-card");
      const input = panel.querySelector("[data-search-input]");
      const type = panel.querySelector("[data-filter-type]");
      const year = panel.querySelector("[data-filter-year]");
      const results = panel.querySelector("[data-search-results]");
      const render = () => {
        const keyword = (input.value || "").trim().toLowerCase();
        const typeValue = type.value;
        const yearValue = year.value;
        const list = SEARCH_MOVIES.filter((movie) => {
          const haystack = [movie.title, movie.genre, movie.region, movie.tags, movie.year, movie.type].join(" ").toLowerCase();
          const okKeyword = !keyword || haystack.includes(keyword);
          const okType = !typeValue || movie.type === typeValue;
          const okYear = !yearValue || movie.year === yearValue;
          return okKeyword && okType && okYear;
        }).slice(0, 12);
        results.innerHTML = list.map((movie) => `
          <a class="search-result-card" href="./${movie.url}">
            <img src="${movie.cover}" alt="${escapeText(movie.title)}" loading="lazy">
            <span><strong>${escapeText(movie.title)}</strong>${escapeText(movie.year)} · ${escapeText(movie.region)}<br>${escapeText(movie.genre)}</span>
          </a>`).join("");
        results.classList.toggle("is-open", Boolean(keyword || typeValue || yearValue));
      };
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        render();
      });
      [input, type, year].forEach((item) => item.addEventListener("input", render));
      [type, year].forEach((item) => item.addEventListener("change", render));
    });
  }
};

const CinemaPlayer = {
  mount(videoId, overlayId, src) {
    const video = document.getElementById(videoId);
    const overlay = document.getElementById(overlayId);
    if (!video || !src) return;
    let ready = false;
    const attach = () => {
      if (ready) return;
      ready = true;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      } else if (window.Hls && window.Hls.isSupported()) {
        const hls = new Hls({ lowLatencyMode: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        video.hlsPlayer = hls;
      } else {
        video.src = src;
      }
    };
    const start = () => {
      attach();
      if (overlay) overlay.classList.add("is-hidden");
      const play = video.play();
      if (play && typeof play.catch === "function") {
        play.catch(() => {
          if (overlay) overlay.classList.remove("is-hidden");
        });
      }
    };
    if (overlay) overlay.addEventListener("click", start);
    video.addEventListener("click", () => {
      if (video.paused) start();
    });
    video.addEventListener("play", () => {
      if (overlay) overlay.classList.add("is-hidden");
    });
  }
};

function escapeText(value) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  };
  return String(value || "").replace(/[&<>'"]/g, (char) => map[char]);
}

document.addEventListener("DOMContentLoaded", () => CinemaSite.init());
