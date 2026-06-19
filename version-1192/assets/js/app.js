(function () {
    var mobileToggle = document.querySelector('[data-mobile-toggle]');
    var mobilePanel = document.querySelector('[data-mobile-panel]');

    if (mobileToggle && mobilePanel) {
        mobileToggle.addEventListener('click', function () {
            mobilePanel.classList.toggle('is-open');
        });
    }

    document.querySelectorAll('[data-hero]').forEach(function (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
        var prev = hero.querySelector('[data-hero-prev]');
        var next = hero.querySelector('[data-hero-next]');
        var index = 0;
        var timer;

        function show(target) {
            if (!slides.length) {
                return;
            }
            index = (target + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle('is-active', i === index);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle('is-active', i === index);
            });
        }

        function restart() {
            window.clearInterval(timer);
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5000);
        }

        if (prev) {
            prev.addEventListener('click', function () {
                show(index - 1);
                restart();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                show(index + 1);
                restart();
            });
        }

        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                show(i);
                restart();
            });
        });

        show(0);
        restart();
    });

    document.querySelectorAll('[data-rail]').forEach(function (rail) {
        var track = rail.querySelector('[data-rail-track]');
        var prev = rail.querySelector('[data-rail-prev]');
        var next = rail.querySelector('[data-rail-next]');

        function scrollByCard(direction) {
            if (!track) {
                return;
            }
            var amount = direction === 'left' ? -420 : 420;
            track.scrollBy({ left: amount, behavior: 'smooth' });
        }

        if (prev) {
            prev.addEventListener('click', function () {
                scrollByCard('left');
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                scrollByCard('right');
            });
        }
    });

    var searchInput = document.querySelector('[data-search-input]');
    var filterButtons = Array.prototype.slice.call(document.querySelectorAll('[data-filter-value]'));
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-search-card]'));
    var params = new URLSearchParams(window.location.search);
    var queryFromUrl = params.get('q') || '';
    var activeFilter = 'all';

    if (searchInput && queryFromUrl) {
        searchInput.value = queryFromUrl;
    }

    function normalize(value) {
        return String(value || '').trim().toLowerCase();
    }

    function applySearch() {
        var query = normalize(searchInput ? searchInput.value : queryFromUrl);
        cards.forEach(function (card) {
            var haystack = normalize([
                card.getAttribute('data-title'),
                card.getAttribute('data-category'),
                card.getAttribute('data-tags'),
                card.getAttribute('data-year')
            ].join(' '));
            var category = card.getAttribute('data-category') || '';
            var matchesQuery = !query || haystack.indexOf(query) !== -1;
            var matchesFilter = activeFilter === 'all' || category === activeFilter;
            card.classList.toggle('is-hidden', !(matchesQuery && matchesFilter));
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', applySearch);
        var searchForm = document.querySelector('[data-search-form]');
        if (searchForm) {
            searchForm.addEventListener('submit', function (event) {
                event.preventDefault();
                applySearch();
            });
        }
    }

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            activeFilter = button.getAttribute('data-filter-value') || 'all';
            filterButtons.forEach(function (item) {
                item.classList.toggle('active', item === button);
            });
            applySearch();
        });
    });

    if (cards.length) {
        applySearch();
    }

    document.querySelectorAll('[data-player]').forEach(function (player) {
        var video = player.querySelector('video');
        var playButton = player.querySelector('[data-play]');
        var source = player.getAttribute('data-source');
        var hlsInstance = null;

        function attachSource() {
            if (!video || !source || video.dataset.loaded === 'true') {
                return;
            }

            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = source;
            } else if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hlsInstance.loadSource(source);
                hlsInstance.attachMedia(video);
            } else {
                video.src = source;
            }

            video.dataset.loaded = 'true';
        }

        function startPlayer() {
            if (!video) {
                return;
            }
            attachSource();
            var playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function () {});
            }
            player.classList.add('is-playing');
        }

        if (playButton) {
            playButton.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                startPlayer();
            });
        }

        player.addEventListener('click', function (event) {
            if (event.target === video && video.dataset.loaded === 'true') {
                return;
            }
            startPlayer();
        });

        if (video) {
            video.addEventListener('play', function () {
                player.classList.add('is-playing');
            });
            video.addEventListener('pause', function () {
                if (!video.seeking && video.currentTime === 0) {
                    player.classList.remove('is-playing');
                }
            });
            video.addEventListener('emptied', function () {
                if (hlsInstance) {
                    hlsInstance.destroy();
                    hlsInstance = null;
                }
            });
        }
    });
})();
