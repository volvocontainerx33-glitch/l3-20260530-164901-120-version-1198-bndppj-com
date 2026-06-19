const SEARCH_MOVIES = [
  {
    "title": "深入：美国、捕鲸与世界",
    "url": "movie-0001.html",
    "cover": "./1.jpg",
    "year": "2019",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录 / 历史 / 环保",
    "tags": "捕鲸史 能源 全球化 生态"
  },
  {
    "title": "万字",
    "url": "movie-0002.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、悬疑、推理",
    "tags": "小说家 代笔 身份互换 心理战"
  },
  {
    "title": "欲盖弥彰",
    "url": "movie-0003.html",
    "cover": "./3.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 悬疑",
    "tags": "骗保 出轨 计中计 香港"
  },
  {
    "title": "宝贝小情人2",
    "url": "movie-0004.html",
    "cover": "./4.jpg",
    "year": "1994",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、家庭、喜剧",
    "tags": "童年 成长 友谊 生命教育"
  },
  {
    "title": "新学生",
    "url": "movie-0005.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "校园 / 奇幻",
    "tags": "转校生 超能力 治愈 青春"
  },
  {
    "title": "切·格瓦拉传：游击队",
    "url": "movie-0006.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "阿根廷 / 西班牙 / 美国",
    "type": "电影",
    "genre": "传记 / 战争",
    "tags": "革命者 丛林游击 理想主义 真实改编"
  },
  {
    "title": "超级马力欧兄弟大电影",
    "url": "movie-0007.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "美国 / 日本",
    "type": "电影",
    "genre": "动画 / 冒险 / 喜剧",
    "tags": "游戏改编 合家欢 彩蛋轰炸 奇幻世界"
  },
  {
    "title": "乜代宗师国语",
    "url": "movie-0008.html",
    "cover": "./8.jpg",
    "year": "2020",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作喜剧",
    "tags": "传统武术 打假 传承"
  },
  {
    "title": "宾果：晨光之王",
    "url": "movie-0009.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "奇幻、冒险、家庭",
    "tags": "会说话的狗 王位继承 印度神话 大象军团"
  },
  {
    "title": "骆驼复仇记",
    "url": "movie-0010.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 西部",
    "tags": "拉贾斯坦邦 动物视角 复仇 底层人民"
  },
  {
    "title": "功夫之爱的速递",
    "url": "movie-0011.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 动作",
    "tags": "外卖小哥 功夫喜剧 都市爱情 误会丛生"
  },
  {
    "title": "雏鸟的天空",
    "url": "movie-0012.html",
    "cover": "./12.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 儿童",
    "tags": "留守儿童 乡村教师 梦想 温暖"
  },
  {
    "title": "英雄威尔",
    "url": "movie-0013.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻冒险",
    "tags": "废柴英雄 苏格兰传说 反转英雄 黑马"
  },
  {
    "title": "两个火枪鼠",
    "url": "movie-0014.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 喜剧, 冒险",
    "tags": "动物拟人 搭档 搞笑"
  },
  {
    "title": "迷途人生",
    "url": "movie-0015.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 公路",
    "tags": "旅行 自我救赎 群像"
  },
  {
    "title": "推理之绊",
    "url": "movie-0016.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": "本格推理 双男主 天才对决"
  },
  {
    "title": "极品闺蜜2019粤语",
    "url": "movie-0017.html",
    "cover": "./17.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 都市",
    "tags": "港女 职场 塑料姐妹 爽剧"
  },
  {
    "title": "荒野重生",
    "url": "movie-0018.html",
    "cover": "./18.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险，生存，灾难",
    "tags": "无人区 求生 极端环境 人性 逆转"
  },
  {
    "title": "熊猫历险记",
    "url": "movie-0019.html",
    "cover": "./19.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "喜剧 / 冒险 / 家庭",
    "tags": "国宝 环保 成长 合家欢"
  },
  {
    "title": "坂本龙一的700天",
    "url": "movie-0020.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "日本",
    "type": "纪录片",
    "genre": "音乐, 传记",
    "tags": "艺术创作 抗癌 遗作"
  },
  {
    "title": "鬼租屋",
    "url": "movie-0021.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国台湾, 马来西亚",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": "凶宅 租屋 东南亚民俗 降头"
  },
  {
    "title": "烤肉店战国",
    "url": "movie-0022.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 历史",
    "tags": "穿越 战国 美食 搞笑"
  },
  {
    "title": "仙君有劫",
    "url": "movie-0023.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 仙侠 / 爱情",
    "tags": "虐恋 转世 师徒 仙魔大战 宿命"
  },
  {
    "title": "格鲁特码头",
    "url": "movie-0024.html",
    "cover": "./24.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画短片剧集",
    "genre": "喜剧 / 奇幻 / 冒险",
    "tags": "格鲁特 码头日常 默片风格"
  },
  {
    "title": "怆寿",
    "url": "movie-0025.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情奇幻",
    "tags": "时间循环 老年 家庭关系 救赎 离别"
  },
  {
    "title": "玩具当家",
    "url": "movie-0026.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "tags": "玩具 奇幻 亲情 儿童 脑洞"
  },
  {
    "title": "绝对控制2002",
    "url": "movie-0027.html",
    "cover": "./27.jpg",
    "year": "2002",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "tags": "越狱 芯片控制 硬汉 极限反杀 复古"
  },
  {
    "title": "我是外星人",
    "url": "movie-0028.html",
    "cover": "./28.jpg",
    "year": "2017",
    "region": "中国内地",
    "type": "电影",
    "genre": "喜剧, 科幻, 家庭",
    "tags": "儿童片 假外星人 亲情 留守儿童 荒诞"
  },
  {
    "title": "执爱",
    "url": "movie-0029.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "tags": "记忆删除 执念 心理惊悚"
  },
  {
    "title": "天空侵犯",
    "url": "movie-0030.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "悬疑, 动作, 科幻",
    "tags": "高空恐惧 生存游戏 面具人 摩天楼迷踪"
  },
  {
    "title": "赌王大骗局国语",
    "url": "movie-0031.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪，悬疑，动作",
    "tags": "赌博 千术 骗中骗 反转 港味"
  },
  {
    "title": "迷失太空",
    "url": "movie-0032.html",
    "cover": "./32.jpg",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 冒险 / 剧情",
    "tags": "硬科幻 家庭 求生 Netflix 太空灾难"
  },
  {
    "title": "儿媳记",
    "url": "movie-0033.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "家庭, 喜剧, 剧情",
    "tags": "婆媳 日常 女性群像 讽刺"
  },
  {
    "title": "钢琴之神",
    "url": "movie-0034.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情",
    "tags": "音乐 父子 天才 悲剧 欲望"
  },
  {
    "title": "亲爱的，看招",
    "url": "movie-0035.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 动作",
    "tags": "格斗情侣 欢喜冤家 假戏真做 女强男弱"
  },
  {
    "title": "巴图快跑",
    "url": "movie-0036.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 运动, 家庭",
    "tags": "蒙古马 草原 父子"
  },
  {
    "title": "唤醒2024",
    "url": "movie-0037.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻, 动作, 惊悚",
    "tags": "人体冷冻 阴谋论 觉醒 高燃"
  },
  {
    "title": "厄普肖一家第一季",
    "url": "movie-0038.html",
    "cover": "./38.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，家庭",
    "tags": "黑人家庭 代际冲突 返贫 生活方式博主"
  },
  {
    "title": "菜鸟老警第七季",
    "url": "movie-0039.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 犯罪, 动作",
    "tags": "警匪 中年危机 职场成长 团队合作"
  },
  {
    "title": "星际迷航：下层舰员第一季",
    "url": "movie-0040.html",
    "cover": "./40.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 科幻, 动画",
    "tags": "职场喜剧 粉丝向 彩蛋密集 星际迷航 草根视角"
  },
  {
    "title": "一个唱，一个不唱",
    "url": "movie-0041.html",
    "cover": "./41.jpg",
    "year": "1977",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 音乐 / 女性",
    "tags": "女性主义 友谊 70年代 瓦尔达"
  },
  {
    "title": "铬合金天使",
    "url": "movie-0042.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 赛博朋克, 动作",
    "tags": "义体人 人工智能 战斗女仆 反乌托邦"
  },
  {
    "title": "黑森灵",
    "url": "movie-0043.html",
    "cover": "./43.jpg",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "森林 邪教 民俗 窒息感"
  },
  {
    "title": "难测男人心",
    "url": "movie-0044.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情、伦理",
    "tags": "女性群像 婚姻关系 高智商博弈 反转"
  },
  {
    "title": "辉耀姬物语",
    "url": "movie-0045.html",
    "cover": "./45.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 奇幻",
    "tags": "神话改编 女性成长 治愈 手绘"
  },
  {
    "title": "巴黎窈窕熟女",
    "url": "movie-0046.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "genre": "喜剧 / 爱情",
    "tags": "中年危机 时尚圈 法式幽默 闺蜜情深"
  },
  {
    "title": "山楂树之恋 2025",
    "url": "movie-0047.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 科幻",
    "tags": "穿越 怀旧 纯爱 复活"
  },
  {
    "title": "虎口鸳鸯",
    "url": "movie-0048.html",
    "cover": "./48.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 爱情, 冒险",
    "tags": "民国 盗匪 虐恋 枪战"
  },
  {
    "title": "致命疑云",
    "url": "movie-0049.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑， 惊悚， 法庭",
    "tags": "罗生门 记忆碎片 心理医生 谋杀案 反转"
  },
  {
    "title": "偷窃法则",
    "url": "movie-0050.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "犯罪、悬疑",
    "tags": "高智商犯罪 师徒对决 反转"
  },
  {
    "title": "通灵女校",
    "url": "movie-0051.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "genre": "恐怖, 悬疑, 校园",
    "tags": "女校 通灵 校园怪谈 阶级 诅咒"
  },
  {
    "title": "猛鬼街",
    "url": "movie-0052.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": "经典重启 梦中杀人 青少年 血腥美学"
  },
  {
    "title": "海底总动员",
    "url": "movie-0053.html",
    "cover": "./53.jpg",
    "year": "2003",
    "region": "美国",
    "type": "动画电影",
    "genre": "动画 / 冒险 / 喜剧",
    "tags": "皮克斯 海洋 亲情 寻子 经典"
  },
  {
    "title": "小奏鸣曲",
    "url": "movie-0054.html",
    "cover": "./54.jpg",
    "year": "2023",
    "region": "法国 / 日本",
    "type": "电影",
    "genre": "音乐 / 剧情",
    "tags": "钢琴 自闭症 师生 治愈"
  },
  {
    "title": "熊出没·重返地球",
    "url": "movie-0055.html",
    "cover": "./55.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 科幻 / 冒险",
    "tags": "环保 家庭 外星人 机甲 合家欢"
  },
  {
    "title": "血海沉珠",
    "url": "movie-0056.html",
    "cover": "./56.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 武侠",
    "tags": "古装 潜水 珍珠 复仇 邵氏"
  },
  {
    "title": "破英文",
    "url": "movie-0057.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧， 剧情， 校园",
    "tags": "语言障碍 台式幽默 新住民议题 成长治愈"
  },
  {
    "title": "冰火魔厨",
    "url": "movie-0058.html",
    "cover": "./58.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻, 动作",
    "tags": "异世界 魔法烹饪 双属性修炼 热血战斗 食戟对决"
  },
  {
    "title": "芙烈达·卡萝的自画像",
    "url": "movie-0059.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "genre": "剧情 / 传记 / 艺术",
    "tags": "女画家 超现实主义 疼痛 爱情与革命"
  },
  {
    "title": "齐丑无艳之破镜重圆",
    "url": "movie-0060.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "古装喜剧",
    "tags": "女强男弱 先离后爱 宫廷政变"
  },
  {
    "title": "人质2016",
    "url": "movie-0061.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪/惊悚/剧情",
    "tags": "真实事件改编 绑架 谈判专家 时间赛跑 女性力量"
  },
  {
    "title": "一眼万年",
    "url": "movie-0062.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 科幻",
    "tags": "时间循环 宿命 唯美虐恋"
  },
  {
    "title": "大卫·戈尔的一生",
    "url": "movie-0063.html",
    "cover": "./63.jpg",
    "year": "2003",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": "死刑争议 哲学教授 以命殉道"
  },
  {
    "title": "巡回法官",
    "url": "movie-0064.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 律政",
    "tags": "基层 调解 人情法理 单元剧"
  },
  {
    "title": "宫廷斗鸡",
    "url": "movie-0065.html",
    "cover": "./65.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "古装、动作、喜剧",
    "tags": "宫廷 斗鸡 权谋 逆袭 荒诞"
  },
  {
    "title": "你瞧，网络世界的幻想",
    "url": "movie-0066.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "tags": "虚拟现实 身份 阴谋 近未来"
  },
  {
    "title": "无限春光在险峰",
    "url": "movie-0067.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，冒险",
    "tags": "登山 绝症 极限旅行 遗愿清单 青春残酷"
  },
  {
    "title": "诡扯",
    "url": "movie-0068.html",
    "cover": "./68.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 悬疑",
    "tags": "黑色幽默 分尸 黑帮 荒诞"
  },
  {
    "title": "完全精神手册",
    "url": "movie-0069.html",
    "cover": "./69.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 科幻 / 心理",
    "tags": "精神病院 脑机接口 记忆植入 反转神作 密室"
  },
  {
    "title": "早年的面包",
    "url": "movie-0070.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 年代",
    "tags": "二战 战后重建 面包店 兄弟情 成长"
  },
  {
    "title": "只看得见我吗",
    "url": "movie-0071.html",
    "cover": "./71.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑, 校园, 奇幻",
    "tags": "霸凌 透明人 治愈 反转"
  },
  {
    "title": "第三次浪潮",
    "url": "movie-0072.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻，惊悚，政治",
    "tags": "人工智能 民主实验 社会寓言 细思极恐"
  },
  {
    "title": "家常菜",
    "url": "movie-0073.html",
    "cover": "./73.jpg",
    "year": "2010",
    "region": "中国",
    "type": "电视剧",
    "genre": "剧情 / 家庭 / 年代",
    "tags": "知青 婚姻 亲情 四合院 写实"
  },
  {
    "title": "双杀",
    "url": "movie-0074.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 犯罪, 悬疑",
    "tags": "卧底 女杀手 俄罗斯轮盘 港式枪战"
  },
  {
    "title": "宫廷画师郎世宁",
    "url": "movie-0075.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史 / 传记",
    "tags": "清代宫廷 中西艺术 帝王心术 孤独"
  },
  {
    "title": "午夜之后狂恋",
    "url": "movie-0076.html",
    "cover": "./76.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "爱情, 剧情, 情色",
    "tags": "艺术片 出轨 心理"
  },
  {
    "title": "前往百老汇",
    "url": "movie-0077.html",
    "cover": "./77.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧(迷你剧)",
    "genre": "歌舞/剧情",
    "tags": "逐梦 幕后 种族 友谊"
  },
  {
    "title": "一切都是爱",
    "url": "movie-0078.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 同性",
    "tags": "老年同志 养老院 自我和解"
  },
  {
    "title": "女仁医国语",
    "url": "movie-0079.html",
    "cover": "./79.jpg",
    "year": "2019",
    "region": "印度",
    "type": "电影",
    "genre": "剧情、传记",
    "tags": "女性觉醒 历史真人 种姓制度 医学先驱 励志"
  },
  {
    "title": "一失足成千古恨",
    "url": "movie-0080.html",
    "cover": "./80.jpg",
    "year": "1999",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 犯罪",
    "tags": "错手杀人 逃亡 忏悔"
  },
  {
    "title": "当泰拉遇上比拉尔",
    "url": "movie-0081.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": "文化冲突 拼车 公路片 和解"
  },
  {
    "title": "陆贞传奇",
    "url": "movie-0082.html",
    "cover": "./82.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装权谋",
    "tags": "女官 宫斗 北齐"
  },
  {
    "title": "宝华尼车站",
    "url": "movie-0083.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": "车站 阶级 延时叙事 人性实验"
  },
  {
    "title": "末路狂花钱",
    "url": "movie-0084.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "黑色喜剧",
    "tags": "暴富 临终倒计时 报复性消费 人性考验"
  },
  {
    "title": "欲望都市第四季",
    "url": "movie-0085.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情 / 爱情",
    "tags": "熟女 纽约 友谊 重启"
  },
  {
    "title": "骇故事之凶宅",
    "url": "movie-0086.html",
    "cover": "./86.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "恐怖，悬疑",
    "tags": "凶宅 直播探险 民俗恐怖 细思极恐"
  },
  {
    "title": "暮光之城：暮色",
    "url": "movie-0087.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻，爱情，剧情",
    "tags": "吸血鬼 狼人 重置版 禁忌之恋 唯美"
  },
  {
    "title": "3分钟先生",
    "url": "movie-0088.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": "速战速决 中年废柴 父子关系 街头智慧"
  },
  {
    "title": "少年杰克与魔法使",
    "url": "movie-0089.html",
    "cover": "./89.jpg",
    "year": "2007",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻， 冒险",
    "tags": "童话改编 逆袭 魔法世界"
  },
  {
    "title": "依赖药水活下去！",
    "url": "movie-0090.html",
    "cover": "./90.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 剧情",
    "tags": "反乌托邦 药物依赖 阶层固化 系统反抗 黑色幽默"
  },
  {
    "title": "美国的儿子",
    "url": "movie-0091.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 战争 / 家庭",
    "tags": "越战 遗孤 寻根 身份 催泪"
  },
  {
    "title": "我醉了，我爱你",
    "url": "movie-0092.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "tags": "酒后真言 前任婚礼 乌龙"
  },
  {
    "title": "情遇曼哈顿",
    "url": "movie-0093.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "美国/中国大陆",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": "异国 都市 重逢 错过"
  },
  {
    "title": "芭比姐妹之追逐的小狗",
    "url": "movie-0094.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 儿童, 喜剧",
    "tags": "芭比 萌宠 城市冒险"
  },
  {
    "title": "一吻倾城",
    "url": "movie-0095.html",
    "cover": "./95.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 甜宠 / 喜剧",
    "tags": "欢喜冤家 替嫁 公主 将军 先婚后爱"
  },
  {
    "title": "拯救爱情",
    "url": "movie-0096.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 奇幻",
    "tags": "时间循环 错位恋爱 治愈搞笑"
  },
  {
    "title": "毛里求斯之旅",
    "url": "movie-0097.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "中国大陆 / 毛里求斯",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "tags": "社畜逃离 替身游戏 反转不断"
  },
  {
    "title": "鸽子哨",
    "url": "movie-0098.html",
    "cover": "./98.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 年代",
    "tags": "北京 胡同 时代变迁 青春"
  },
  {
    "title": "弗莱德大电影",
    "url": "movie-0099.html",
    "cover": "./99.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 恐怖 / 惊悚",
    "tags": "恶搞 猛鬼街 反类型 自嘲"
  },
  {
    "title": "32颗药丸：我姐姐的自杀",
    "url": "movie-0100.html",
    "cover": "./100.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": "社会议题 家庭创伤 密室推理"
  },
  {
    "title": "贫乏姐妹物语",
    "url": "movie-0101.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 治愈",
    "tags": "姐妹 贫穷 温情 励志"
  },
  {
    "title": "芭比公主三剑客",
    "url": "movie-0102.html",
    "cover": "./102.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动画/冒险/歌舞",
    "tags": "芭比 公主 剑客 女性友谊"
  },
  {
    "title": "歌王卡罗素",
    "url": "movie-0103.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "意大利, 美国",
    "type": "电影",
    "genre": "传记, 音乐",
    "tags": "歌剧 天才 传奇 嗓音"
  },
  {
    "title": "萨德侯爵夫人",
    "url": "movie-0104.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 历史 / 女性",
    "tags": "萨德 贵族女性 囚禁与等待 情欲与权力"
  },
  {
    "title": "借借妳人生",
    "url": "movie-0105.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻剧情",
    "tags": "交换人生 主妇困境 女性觉醒 平行选择"
  },
  {
    "title": "进口媳妇",
    "url": "movie-0106.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": "跨国婚姻 文化冲突 农村 女性成长 幽默"
  },
  {
    "title": "女战士艾菲菈&吉里鸥菈",
    "url": "movie-0107.html",
    "cover": "./107.jpg",
    "year": "2020",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻 / 动作 / 百合",
    "tags": "机械改造 双女主 末日"
  },
  {
    "title": "舌尖上的中国第二季",
    "url": "movie-0108.html",
    "cover": "./108.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "美食 / 人文",
    "tags": "食物 乡愁 劳作 人情"
  },
  {
    "title": "吞下宇宙的男孩",
    "url": "movie-0109.html",
    "cover": "./109.jpg",
    "year": "2019",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": "成长 边缘人 兄弟情 魔幻现实主义"
  },
  {
    "title": "魔法圣婴",
    "url": "movie-0110.html",
    "cover": "./110.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖 / 奇幻",
    "tags": "宗教惊悚 邪典 反生育隐喻"
  },
  {
    "title": "从21世纪安全撤离",
    "url": "movie-0111.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻，喜剧",
    "tags": "穿越 打工族 AI统治"
  },
  {
    "title": "他乡的童年",
    "url": "movie-0112.html",
    "cover": "./112.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "留守儿童 城乡迁徙 火车站候车室 泡面 玻璃弹珠"
  },
  {
    "title": "遥控战争",
    "url": "movie-0113.html",
    "cover": "./113.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "tags": "无人机 伦理 心理战"
  },
  {
    "title": "全都来斗阵",
    "url": "movie-0114.html",
    "cover": "./114.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "综艺 / 真人秀",
    "genre": "真人秀 / 游戏 / 竞技",
    "tags": "团综 电竞 搞笑 明星组队 实境"
  },
  {
    "title": "猪头汉堡饱",
    "url": "movie-0115.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧， 奇幻， 美食",
    "tags": "夜市 外星人 治愈"
  },
  {
    "title": "残缺格斗士",
    "url": "movie-0116.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 励志 / 剧情",
    "tags": "残疾人 MMA 真实改编 尊严"
  },
  {
    "title": "银河守护队2",
    "url": "movie-0117.html",
    "cover": "./117.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 动作",
    "tags": "漫威 太空喜剧 家庭主题 泪点"
  },
  {
    "title": "龙凤茶楼",
    "url": "movie-0118.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情，动作，喜剧",
    "tags": "卧底 茶餐厅 市井江湖 兄弟情"
  },
  {
    "title": "快乐妓女",
    "url": "movie-0119.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 喜剧, 女性",
    "tags": "女性觉醒 黑色幽默 存在主义 社会边缘"
  },
  {
    "title": "山羊和狼",
    "url": "movie-0120.html",
    "cover": "./120.jpg",
    "year": "1996",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情， 历史， 家庭",
    "tags": "知青 乡村 罪与罚 救赎"
  },
  {
    "title": "怒火英雄",
    "url": "movie-0121.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作、战争、主旋律",
    "tags": "抗日 飞虎队 民间抵抗"
  },
  {
    "title": "大魔域2",
    "url": "movie-0122.html",
    "cover": "./122.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "genre": "奇幻, 冒险",
    "tags": "异世界 童书改编 黑暗 怪物"
  },
  {
    "title": "孔雀的羽毛",
    "url": "movie-0123.html",
    "cover": "./123.jpg",
    "year": "2026",
    "region": "印度",
    "type": "电影",
    "genre": "奇幻, 剧情",
    "tags": "寓言 家族秘密 身份认同 神秘"
  },
  {
    "title": "银色快手",
    "url": "movie-0124.html",
    "cover": "./124.jpg",
    "year": "1986",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 运动",
    "tags": "华尔街 自行车快递 80年代 纽约 自我救赎"
  },
  {
    "title": "願望合夥人",
    "url": "movie-0125.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻, 喜剧",
    "tags": "许愿 代价 合伙创业 黑色幽默"
  },
  {
    "title": "疯狂马达加斯加",
    "url": "movie-0126.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧 / 冒险 / 动画",
    "tags": "动物 冒险 搞笑 友情"
  },
  {
    "title": "港湾第五季",
    "url": "movie-0127.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "加拿大",
    "type": "剧集",
    "genre": "奇幻, 悬疑",
    "tags": "超自然 小镇 重启 回归"
  },
  {
    "title": "大蟒蛇2：血兰花",
    "url": "movie-0128.html",
    "cover": "./128.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 冒险",
    "tags": "怪兽 丛林 血腥 B级片"
  },
  {
    "title": "富贵逼东人",
    "url": "movie-0129.html",
    "cover": "./129.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，家庭",
    "tags": "贺岁 暴发户 斗气 粤语 合家欢"
  },
  {
    "title": "宵星传说",
    "url": "movie-0130.html",
    "cover": "./130.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻 / 冒险",
    "tags": "异世界 魔法 剑与魔法 友情 冒险"
  },
  {
    "title": "巴黎来的女孩",
    "url": "movie-0131.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": "跨文化 成长 时尚 治愈"
  },
  {
    "title": "赦免",
    "url": "movie-0132.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 战争",
    "tags": "二战 反思 法庭 人性"
  },
  {
    "title": "风流铁汉黑天王",
    "url": "movie-0133.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧 / 警匪",
    "tags": "恶搞致敬 双雄模式 港式无厘头 怀旧梗"
  },
  {
    "title": "白痴5和哭喊的夫人",
    "url": "movie-0134.html",
    "cover": "./134.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 喜剧",
    "tags": "荒诞派 默片风格 神经喜剧"
  },
  {
    "title": "夜半凶铃",
    "url": "movie-0135.html",
    "cover": "./135.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖",
    "tags": "都市传说 诅咒媒介 时间循环"
  },
  {
    "title": "昭和64年",
    "url": "movie-0136.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "tags": "警察制度 媒体战争 悬案 社会派推理"
  },
  {
    "title": "天山雪",
    "url": "movie-0137.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 冒险 / 历史",
    "tags": "丝绸之路 寻根之旅 祖孙情 雪域奇观"
  },
  {
    "title": "宝贵的秘密",
    "url": "movie-0138.html",
    "cover": "./138.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，家庭",
    "tags": "亲情 绝症 守护 催泪"
  },
  {
    "title": "厨子·戏子·痞子",
    "url": "movie-0139.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "犯罪",
    "tags": "民国 乱世 黑吃黑 三段落"
  },
  {
    "title": "艳阳争春",
    "url": "movie-0140.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 年代",
    "tags": "民国 女性 家族 商战"
  },
  {
    "title": "仇情血痕",
    "url": "movie-0141.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 惊悚",
    "tags": "复仇 医疗 反转 女性 血腥"
  },
  {
    "title": "埋伏",
    "url": "movie-0142.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 剧情 / 历史",
    "tags": "抗美援朝 狙击战 雪林 孤军"
  },
  {
    "title": "红色天网",
    "url": "movie-0143.html",
    "cover": "./143.jpg",
    "year": "2009",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "刑侦，反特",
    "tags": "国安 潜伏 高层内鬼"
  },
  {
    "title": "来自长崎的女孩",
    "url": "movie-0144.html",
    "cover": "./144.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 历史",
    "tags": "战后创伤 跨文化 救赎"
  },
  {
    "title": "误杀3",
    "url": "movie-0145.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "瞒天过海 亲子 高智商"
  },
  {
    "title": "钢的琴",
    "url": "movie-0146.html",
    "cover": "./146.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": "东北下岗 父爱 工人阶级 黑色幽默"
  },
  {
    "title": "好好好推理社的聚会",
    "url": "movie-0147.html",
    "cover": "./147.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑，喜剧",
    "tags": "剧本杀 暴风雪山庄 反转 幽默"
  },
  {
    "title": "岁月神偷",
    "url": "movie-0148.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "移民 钟表 亲情"
  },
  {
    "title": "金缕霓裳",
    "url": "movie-0149.html",
    "cover": "./149.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 年代",
    "tags": "旗袍 传承 家族恩怨 上海滩"
  },
  {
    "title": "1995穿越时间",
    "url": "movie-0150.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 悬疑 / 爱情",
    "tags": "穿越 青春 磁带 蝴蝶效应"
  },
  {
    "title": "杀手密码",
    "url": "movie-0151.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": "密码学 连环杀手 大学教授 高智商对决"
  },
  {
    "title": "铁血战士：猎物",
    "url": "movie-0152.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 动作, 惊悚",
    "tags": "外星猎杀 硬核动作 丛林"
  },
  {
    "title": "舒克与桃花",
    "url": "movie-0153.html",
    "cover": "./3.jpg",
    "year": "2015",
    "region": "中国",
    "type": "电视剧",
    "genre": "爱情 / 喜剧 / 都市",
    "tags": "飞行员 设计师 同居 欢喜冤家 奋斗"
  },
  {
    "title": "警犬来啦",
    "url": "movie-0154.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "刑侦",
    "tags": "警犬 搭档 成长 案件"
  },
  {
    "title": "贝城歹徒",
    "url": "movie-0155.html",
    "cover": "./5.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": "南方哥特 黑帮火拼 兄弟情 血腥暴力 复仇循环"
  },
  {
    "title": "生活真美好",
    "url": "movie-0156.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 生活, 治愈",
    "tags": "群像 邻里 温暖"
  },
  {
    "title": "风之魂",
    "url": "movie-0157.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻 / 冒险 / 环保",
    "tags": "宫崎骏风 人与自然 飞行少女 治愈系"
  },
  {
    "title": "无欲不爱",
    "url": "movie-0158.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "无性恋 柏拉图 都市 探索"
  },
  {
    "title": "如今你已长大",
    "url": "movie-0159.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭 / 剧情",
    "tags": "留守儿童 亲情 催泪"
  },
  {
    "title": "爱我别走",
    "url": "movie-0160.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情，剧情，家庭",
    "tags": "失忆 重逢 救赎"
  },
  {
    "title": "目标一号",
    "url": "movie-0161.html",
    "cover": "./11.jpg",
    "year": "2020",
    "region": "加拿大",
    "type": "电影",
    "genre": "动作，惊悚",
    "tags": "暗网 刺客 反转"
  },
  {
    "title": "第一声枪响",
    "url": "movie-0162.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "军旅 / 悬疑",
    "tags": "狙击手 侦察连 抗美援朝 心理战"
  },
  {
    "title": "科西嘉兄弟",
    "url": "movie-0163.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 动作",
    "tags": "黑帮 兄弟情 科西嘉岛 连体婴"
  },
  {
    "title": "暴雪二夜情",
    "url": "movie-0164.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情，灾难，剧情",
    "tags": "暴风雪 一夜情 陌生人 生命倒计时"
  },
  {
    "title": "放学后的昴星团",
    "url": "movie-0165.html",
    "cover": "./15.jpg",
    "year": "2022",
    "region": "日本",
    "type": "TV剧集",
    "genre": "青春, 科幻, 悬疑",
    "tags": "天文部 时间循环 友情 秘密实验"
  },
  {
    "title": "外星幻想曲",
    "url": "movie-0166.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "科幻, 音乐, 爱情",
    "tags": "外星人 古典音乐 心灵感应 浪漫"
  },
  {
    "title": "捡来的孩子",
    "url": "movie-0167.html",
    "cover": "./17.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "家庭 / 伦理",
    "tags": "弃婴 养母 亲情"
  },
  {
    "title": "冷宫女刺客",
    "url": "movie-0168.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集 (网络剧)",
    "genre": "古装, 动作, 悬疑",
    "tags": "宫廷 反转 女性成长 权谋"
  },
  {
    "title": "篮球少年张",
    "url": "movie-0169.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动 / 剧情 / 青春",
    "tags": "篮球 小镇少年 梦想 逆袭 成长"
  },
  {
    "title": "什么也不是的爱恋",
    "url": "movie-0170.html",
    "cover": "./20.jpg",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 文艺",
    "tags": "虚无主义 都市空心症 反向甜宠"
  },
  {
    "title": "红色赞歌",
    "url": "movie-0171.html",
    "cover": "./21.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史/剧情",
    "tags": "革命 女性 信仰 牺牲"
  },
  {
    "title": "刀尖2023",
    "url": "movie-0172.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "谍战动作",
    "tags": "民国 特工 潜伏"
  },
  {
    "title": "危险的她第二季",
    "url": "movie-0173.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 女性",
    "tags": "女性群像 反杀 高智商 网暴 心理操控"
  },
  {
    "title": "爱情记事",
    "url": "movie-0174.html",
    "cover": "./24.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 青春",
    "tags": "校园恋爱 虐恋 失忆梗"
  },
  {
    "title": "隔窗恋爱：飘洋过海",
    "url": "movie-0175.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情, 青春, 剧情",
    "tags": "异地恋 成长 续作"
  },
  {
    "title": "赎罪之路",
    "url": "movie-0176.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "犯罪剧集",
    "genre": "犯罪、剧情、人性",
    "tags": "顶罪 兄弟情 刑满释放 救赎"
  },
  {
    "title": "棺材精",
    "url": "movie-0177.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "中国香港 / 泰国",
    "type": "电影",
    "genre": "恐怖 / 民俗",
    "tags": "东南亚 降头 家族诅咒 赶尸"
  },
  {
    "title": "夜游者",
    "url": "movie-0178.html",
    "cover": "./28.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑，犯罪，剧情",
    "tags": "夜景 记者 连环杀手 跟踪"
  },
  {
    "title": "面纱下的那不勒斯",
    "url": "movie-0179.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑， 爱情， 历史",
    "tags": "那不勒斯 圣血传说 神秘主义 家族秘密 双重身份"
  },
  {
    "title": "你想要的一切",
    "url": "movie-0180.html",
    "cover": "./30.jpg",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "tags": "许愿 黑魔法 代价 校园"
  },
  {
    "title": "胆破心惊",
    "url": "movie-0181.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "心理惊悚",
    "tags": "密室 极限运动 恐高症 复仇"
  },
  {
    "title": "宿命，吾爱：幕间曲",
    "url": "movie-0182.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "意大利 / 法国",
    "type": "电影",
    "genre": "剧情 / 音乐 / 爱情",
    "tags": "歌剧院 三角恋 二战背景 命运交响曲"
  },
  {
    "title": "亚当变奏曲",
    "url": "movie-0183.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "科幻、心理",
    "tags": "克隆 身份焦虑 三重人格"
  },
  {
    "title": "东德蕾丝的爱欲",
    "url": "movie-0184.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": "冷战 女同 蕾丝工厂 禁忌之恋"
  },
  {
    "title": "天竺山传奇",
    "url": "movie-0185.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠 / 悬疑",
    "tags": "寻宝 门派恩怨 反转 动作设计"
  },
  {
    "title": "梅府有女初长成",
    "url": "movie-0186.html",
    "cover": "./36.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 喜剧, 宅斗",
    "tags": "大小姐 商战 扮猪吃虎"
  },
  {
    "title": "白虎",
    "url": "movie-0187.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争、奇幻、悬疑",
    "tags": "二战 坦克 神话 复仇"
  },
  {
    "title": "看不见影子的少年",
    "url": "movie-0188.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑，剧情，奇幻",
    "tags": "校园 霸凌 超自然 心理"
  },
  {
    "title": "练胆儿",
    "url": "movie-0189.html",
    "cover": "./39.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚心理",
    "tags": "直播 闹鬼 心理战 反转 校园"
  },
  {
    "title": "荡寇滩",
    "url": "movie-0190.html",
    "cover": "./40.jpg",
    "year": "1975",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，武侠",
    "tags": "镖局 沙漠 兄弟情 背叛"
  },
  {
    "title": "超人：红色之子",
    "url": "movie-0191.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影 / 动画",
    "genre": "科幻, 超级英雄, 政治惊悚",
    "tags": "超人降落在苏联 乌托邦与反乌托邦 道德困境"
  },
  {
    "title": "只为那一刻与你相见",
    "url": "movie-0192.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情、悬疑、奇幻",
    "tags": "时间循环 双向奔赴 虐恋 宿命"
  },
  {
    "title": "锗之夜",
    "url": "movie-0193.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "德国/波兰",
    "type": "电影",
    "genre": "科幻文艺片",
    "tags": "半导体 冷战遗留 记忆删除 黑白摄影"
  },
  {
    "title": "李茶的姑妈",
    "url": "movie-0194.html",
    "cover": "./44.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 荒诞",
    "tags": "男扮女装 拜金 误会连环套"
  },
  {
    "title": "告白",
    "url": "movie-0195.html",
    "cover": "./45.jpg",
    "year": "2027",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "tags": "复仇 校园 反转"
  },
  {
    "title": "我的天才宝贝国语",
    "url": "movie-0196.html",
    "cover": "./46.jpg",
    "year": "1996",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭 / 教育",
    "tags": "神童困境 亲子关系 反内卷"
  },
  {
    "title": "耳朵大有福",
    "url": "movie-0197.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": "东北 小人物 退休生活 迷信 家庭"
  },
  {
    "title": "最后的时光",
    "url": "movie-0198.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": "临终 和解 父女 公路片"
  },
  {
    "title": "灵通姻缘线",
    "url": "movie-0199.html",
    "cover": "./49.jpg",
    "year": "2002",
    "region": "台湾",
    "type": "电视剧",
    "genre": "爱情, 奇幻, 喜剧",
    "tags": "月老 红线 错位 神明 恋爱"
  },
  {
    "title": "着魔2024",
    "url": "movie-0200.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 心理惊悚",
    "tags": "驱魔 反转 密室 信仰危机"
  },
  {
    "title": "黑山阻击战",
    "url": "movie-0201.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "genre": "战争 / 历史 / 动作",
    "tags": "解放战争 真实战役 惨烈 战术 英雄主义"
  },
  {
    "title": "丑闻1950",
    "url": "movie-0202.html",
    "cover": "./52.jpg",
    "year": "1950",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 黑色电影",
    "tags": "政治丑闻 记者调查 黑白片"
  },
  {
    "title": "我要是有了枪",
    "url": "movie-0203.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": "黑色幽默 底层困境 反转"
  },
  {
    "title": "情变",
    "url": "movie-0204.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 情色 / 心理",
    "tags": "婚姻危机 开放关系 巴黎 女性觉醒"
  },
  {
    "title": "粮食竞争",
    "url": "movie-0205.html",
    "cover": "./55.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻、剧情、灾难",
    "tags": "粮食危机 未来战争 生物科技 伦理 生存"
  },
  {
    "title": "阳光的味道",
    "url": "movie-0206.html",
    "cover": "./56.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭, 文艺",
    "tags": "亲情 治愈 美食 返乡 生活流"
  },
  {
    "title": "大说谎家",
    "url": "movie-0207.html",
    "cover": "./57.jpg",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 心理",
    "tags": "谎言 骗局 老年欺诈 高智商对决"
  },
  {
    "title": "异色国度",
    "url": "movie-0208.html",
    "cover": "./58.jpg",
    "year": "2022",
    "region": "尼日利亚 / 美国",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": "非洲 平行世界 肤色 身份认同"
  },
  {
    "title": "一切皆允",
    "url": "movie-0209.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作、冒险",
    "tags": "刺客组织 暗黑美学 权力游戏 虚构历史"
  },
  {
    "title": "囚徒",
    "url": "movie-0210.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪, 动作",
    "tags": "监狱 复仇 地下拳赛 黑警"
  },
  {
    "title": "笑一笑十年少",
    "url": "movie-0211.html",
    "cover": "./61.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 家庭 / 生活",
    "tags": "养老 代际 幽默 温情"
  },
  {
    "title": "滇西1944",
    "url": "movie-0212.html",
    "cover": "./62.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "战争 / 历史",
    "tags": "抗日战争 松山战役 远征军 真实改编"
  },
  {
    "title": "有组织的工作",
    "url": "movie-0213.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "剧集",
    "genre": "剧情 / 犯罪 / 黑色幽默",
    "tags": "职场 黑帮 讽刺 办公室政治"
  },
  {
    "title": "金海岸",
    "url": "movie-0214.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "海岸 父子 失智 和解"
  },
  {
    "title": "福禄双霸天2000",
    "url": "movie-0215.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/音乐/动作",
    "tags": "音乐剧 公路片 复古 警察追捕"
  },
  {
    "title": "风人物语",
    "url": "movie-0216.html",
    "cover": "./66.jpg",
    "year": "2020",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 奇幻 / 治愈",
    "tags": "风 都市传说 校园 治愈 奇幻"
  },
  {
    "title": "代号九耳犬",
    "url": "movie-0217.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "谍战 / 动作 / 冒险",
    "tags": "军犬搭档 生化危机 丛林谍战"
  },
  {
    "title": "一师亦友",
    "url": "movie-0218.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 校园 / 友情",
    "tags": "师生 治愈 乡村教育 代际冲突"
  },
  {
    "title": "招魂3",
    "url": "movie-0219.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 超自然",
    "tags": "华伦夫妇 恶魔附身 法庭驱魔 实体证据 真实事件改编"
  },
  {
    "title": "撼山河撼向世界",
    "url": "movie-0220.html",
    "cover": "./70.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "纪录片 / 音乐",
    "tags": "陈明章 月琴 台湾民谣 音乐纪录片"
  },
  {
    "title": "无名的电影",
    "url": "movie-0221.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": "元电影 身份认同 黑色幽默"
  },
  {
    "title": "香港人在北京粤语",
    "url": "movie-0222.html",
    "cover": "./72.jpg",
    "year": "2023",
    "region": "中国香港 / 中国大陆",
    "type": "剧集",
    "genre": "剧情, 喜剧, 爱情",
    "tags": "北漂 文化差异 京港 创业 温情"
  },
  {
    "title": "亲爱的冤家",
    "url": "movie-0223.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧， 爱情， 家庭",
    "tags": "斗气冤家 离婚不离家 中年浪漫 方言"
  },
  {
    "title": "为了新中国前进",
    "url": "movie-0224.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 历史",
    "tags": "抗美援朝 爆破 兄弟情"
  },
  {
    "title": "明天、我会成为谁的女友",
    "url": "movie-0225.html",
    "cover": "./75.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "社会伦理",
    "tags": "出租女友 女性群像 现实 孤独 选择"
  },
  {
    "title": "冤家兄弟",
    "url": "movie-0226.html",
    "cover": "./76.jpg",
    "year": "2028",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "乡土 亲情纠葛 继承之战 和解"
  },
  {
    "title": "金粉世家",
    "url": "movie-0227.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 爱情 / 历史",
    "tags": "民国 家族 女性觉醒 改编 新视角"
  },
  {
    "title": "超人前传第五季",
    "url": "movie-0228.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 科幻 / 冒险",
    "tags": "超级英雄 起源 青春 氪石"
  },
  {
    "title": "戆子记",
    "url": "movie-0229.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装，喜剧，家庭",
    "tags": "宅斗 装傻 扮猪吃老虎 嫡庶 反套路"
  },
  {
    "title": "金装律师第一季",
    "url": "movie-0230.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情 / 律政",
    "tags": "律政 双男主 天才 西装"
  },
  {
    "title": "完美父母",
    "url": "movie-0231.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 科幻",
    "tags": "基因编辑 亲情拷问 乌托邦"
  },
  {
    "title": "九龙笔之神兵觉醒",
    "url": "movie-0232.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 动作 / 冒险",
    "tags": "神话 法宝 觉醒 动作 特效大片"
  },
  {
    "title": "罪恶黑名单第十季",
    "url": "movie-0233.html",
    "cover": "./83.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 剧情",
    "tags": "最终季 红魔归来 终极黑名单 身份揭秘"
  },
  {
    "title": "女孩的夏日秘密",
    "url": "movie-0234.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 青春, 悬疑",
    "tags": "少女 海边 失踪 姐妹 成长伤痛"
  },
  {
    "title": "青春华丽丽",
    "url": "movie-0235.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春, 校园, 励志",
    "tags": "服装设计 职高 逆袭 姐妹情"
  },
  {
    "title": "谁偷了我的粉兔子",
    "url": "movie-0236.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "家庭悬疑",
    "tags": "儿童视角 邻里关系 小城秘密 治愈系解谜"
  },
  {
    "title": "伯爵夫人格拉茨",
    "url": "movie-0237.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "匈牙利 / 法国",
    "type": "电影",
    "genre": "历史, 剧情, 悬疑",
    "tags": "贵族 政治阴谋 女性力量"
  },
  {
    "title": "急诊男女泰版",
    "url": "movie-0238.html",
    "cover": "./88.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电视剧",
    "genre": "剧情、爱情、医疗",
    "tags": "泰剧 医院风云 破镜重圆 职场竞争"
  },
  {
    "title": "蓝百合",
    "url": "movie-0239.html",
    "cover": "./89.jpg",
    "year": "2016",
    "region": "荷兰",
    "type": "电影",
    "genre": "悬疑 / 同性",
    "tags": "冷案 女同 花语 记忆碎片"
  },
  {
    "title": "热与尘",
    "url": "movie-0240.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "爱情, 历史, 剧情",
    "tags": "殖民背景 禁忌之恋 印度独立"
  },
  {
    "title": "斯库达，呼！斯库达，嘿！",
    "url": "movie-0241.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争, 剧情, 动作",
    "tags": "车臣战争 战地民谣 号子与杀戮 黑色幽默"
  },
  {
    "title": "瘟疯之神",
    "url": "movie-0242.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "丹麦",
    "type": "电影",
    "genre": "恐怖、民俗",
    "tags": "北欧 邪教 瘟疫 仪式 小村庄"
  },
  {
    "title": "花之屋大电影",
    "url": "movie-0243.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "墨西哥",
    "type": "电影",
    "genre": "剧情喜剧",
    "tags": "家族纷争 葬礼 黑色幽默 LGBTQ"
  },
  {
    "title": "摩洛哥机智生活",
    "url": "movie-0244.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 冒险",
    "tags": "异国风情 职场 搞笑 文化冲突"
  },
  {
    "title": "魔女潜舰",
    "url": "movie-0245.html",
    "cover": "./95.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "战争，科幻，冒险",
    "tags": "二战 潜艇 魔法少女 时空穿越"
  },
  {
    "title": "阿富汗卢克",
    "url": "movie-0246.html",
    "cover": "./96.jpg",
    "year": "2012",
    "region": "芬兰",
    "type": "电影",
    "genre": "战争, 喜剧, 黑色幽默",
    "tags": "反战喜剧 芬兰电影 荒诞战争 小国视角"
  },
  {
    "title": "增血鬼果林",
    "url": "movie-0247.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画剧集",
    "genre": "喜剧, 奇幻, 校园",
    "tags": "吸血鬼 逆设定 增血 青春"
  },
  {
    "title": "清水湾，淡水湾",
    "url": "movie-0248.html",
    "cover": "./98.jpg",
    "year": "2028",
    "region": "香港",
    "type": "电影",
    "genre": "剧情 / 家庭 / 社会",
    "tags": "香港 公屋 移民"
  },
  {
    "title": "山海巨兽",
    "url": "movie-0249.html",
    "cover": "./99.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 奇幻, 冒险",
    "tags": "《山海经》 怪兽 生态保护 古代机关"
  },
  {
    "title": "趣味游戏美国版",
    "url": "movie-0250.html",
    "cover": "./100.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 剧情",
    "tags": "暴力美学 心理折磨 打破第四面墙 翻拍"
  },
  {
    "title": "九重紫",
    "url": "movie-0251.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 奇幻 / 爱情 / 悬疑",
    "tags": "重生 宅斗 权谋 紫微星 大女主"
  },
  {
    "title": "无证之爱",
    "url": "movie-0252.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "律政爱情",
    "tags": "律师 证据 婚姻法 职场博弈"
  },
  {
    "title": "四月碎片",
    "url": "movie-0253.html",
    "cover": "./103.jpg",
    "year": "2003",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 家庭",
    "tags": "感恩节 母女 底层生活 独立电影 凯蒂·霍尔姆斯"
  },
  {
    "title": "怪想售",
    "url": "movie-0254.html",
    "cover": "./104.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "奇幻, 悬疑, 都市",
    "tags": "单元剧 怪谈 二手商店 欲望交换 治愈系惊悚"
  },
  {
    "title": "丐世英豪",
    "url": "movie-0255.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "武侠, 动作, 喜剧",
    "tags": "丐帮 废柴逆袭 帮派斗争 无厘头 打狗棍法"
  },
  {
    "title": "照片里的伴娘",
    "url": "movie-0256.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 爱情, 奇幻",
    "tags": "穿越 婚礼 自我救赎 时光胶囊"
  },
  {
    "title": "当 一个人",
    "url": "movie-0257.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 文艺",
    "tags": "孤独 城市 中年危机 治愈"
  },
  {
    "title": "热那亚",
    "url": "movie-0258.html",
    "cover": "./108.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 家庭 / 文艺",
    "tags": "意式温情 隔代亲 城市漫游 治愈系"
  },
  {
    "title": "黑狱拳王2",
    "url": "movie-0259.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪",
    "tags": "监狱 地下拳赛 复仇"
  },
  {
    "title": "不老宝藏「猜、情、寻」",
    "url": "movie-0260.html",
    "cover": "./110.jpg",
    "year": "1997",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧， 冒险， 爱情",
    "tags": "刘镇伟 无厘头 寻宝 时间循环 致敬经典"
  },
  {
    "title": "淫缚学艳",
    "url": "movie-0261.html",
    "cover": "./111.jpg",
    "year": "2004",
    "region": "日本",
    "type": "电影",
    "genre": "情色 / 悬疑",
    "tags": "绳缚 校园 禁忌之恋"
  },
  {
    "title": "国宝山椒鱼",
    "url": "movie-0262.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭 / 社会",
    "tags": "动物 小村庄 防卫过当"
  },
  {
    "title": "麦积山的呼唤",
    "url": "movie-0263.html",
    "cover": "./113.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "留守儿童 支教 石窟 传承"
  },
  {
    "title": "进藏",
    "url": "movie-0264.html",
    "cover": "./114.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录 / 人文 / 旅行",
    "tags": "西藏 朝圣 公路 信仰"
  },
  {
    "title": "律政英雄新电影版粤语",
    "url": "movie-0265.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "律政、动作、犯罪",
    "tags": "原声粤语 法庭对决 热血"
  },
  {
    "title": "小鱼",
    "url": "movie-0266.html",
    "cover": "./116.jpg",
    "year": "2028",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭 / 治愈",
    "tags": "留守儿童 海边小镇 祖孙情 无声沟通"
  },
  {
    "title": "站立的人",
    "url": "movie-0267.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 运动 / 励志",
    "tags": "残障 马拉松 真实改编"
  },
  {
    "title": "檀香味的迷恋",
    "url": "movie-0268.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 悬疑",
    "tags": "病娇 香水调制 偏执爱恋 感官世界 复仇"
  },
  {
    "title": "疫起",
    "url": "movie-0269.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "医疗 / 灾难",
    "tags": "疫情 众生相 伦理抉择"
  },
  {
    "title": "勇敢的人",
    "url": "movie-0270.html",
    "cover": "./120.jpg",
    "year": "2022",
    "region": "印度",
    "type": "电影",
    "genre": "剧情，励志",
    "tags": "真实事件 抗争 勇气"
  },
  {
    "title": "丧尸禁区",
    "url": "movie-0271.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 动作",
    "tags": "丧尸 军事 孤岛 人性 病毒"
  },
  {
    "title": "魔窟喋血",
    "url": "movie-0272.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 战争 / 悬疑",
    "tags": "洞穴战 小队 背叛 极限生存"
  },
  {
    "title": "无名客栈之麒麟觉醒",
    "url": "movie-0273.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "武侠，奇幻，动作",
    "tags": "江湖 封印 神兽 反转卧底"
  },
  {
    "title": "尼罗河女儿",
    "url": "movie-0274.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "美国 / 英国",
    "type": "电视剧",
    "genre": "剧情, 历史, 爱情",
    "tags": "考古 古埃及 穿越 大女主"
  },
  {
    "title": "奇妙博物馆第二季",
    "url": "movie-0275.html",
    "cover": "./125.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑、奇幻、短剧",
    "tags": "单元剧 脑洞 文物 人性"
  },
  {
    "title": "一招半式闯江湖",
    "url": "movie-0276.html",
    "cover": "./126.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 动作",
    "tags": "市井英雄 扮猪吃老虎 功夫喜剧 小人物逆袭"
  },
  {
    "title": "谁是谁的菜",
    "url": "movie-0277.html",
    "cover": "./127.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 喜剧, 职场",
    "tags": "美食 相亲 欢喜冤家"
  },
  {
    "title": "逃劳三兄弟",
    "url": "movie-0278.html",
    "cover": "./128.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "黑色喜剧 / 犯罪",
    "tags": "越狱 荒诞 兄弟情 黑色幽默"
  },
  {
    "title": "时差五小时·破晓季",
    "url": "movie-0279.html",
    "cover": "./129.jpg",
    "year": "2026",
    "region": "韩国 / 中国",
    "type": "剧集",
    "genre": "爱情 / 奇幻",
    "tags": "双向穿越 国际恋 时间错位"
  },
  {
    "title": "天下第一拳",
    "url": "movie-0280.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "动作 / 武侠",
    "tags": "擂台 复仇 功夫 师徒"
  },
  {
    "title": "喜马拉雅",
    "url": "movie-0281.html",
    "cover": "./131.jpg",
    "year": "2026",
    "region": "中国大陆 / 尼泊尔",
    "type": "电影",
    "genre": "冒险 / 灾难 / 剧情",
    "tags": "登山 救援 人性 极限"
  },
  {
    "title": "苹果核战记α",
    "url": "movie-0282.html",
    "cover": "./132.jpg",
    "year": "2014",
    "region": "日本",
    "type": "电影/动画",
    "genre": "科幻, 动作",
    "tags": "3D 赛博朋克 生化人 战争"
  },
  {
    "title": "五月碧云天",
    "url": "movie-0283.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "乡土 癌症 和解 农事 季节"
  },
  {
    "title": "巴黎之恋",
    "url": "movie-0284.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "tags": "异国偶遇 错位身份 巴黎地标 一夜情变真爱"
  },
  {
    "title": "我们的家园（韩国电影）",
    "url": "movie-0285.html",
    "cover": "./135.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": "土地纠纷 村民 秘密 反转"
  },
  {
    "title": "迷雾追凶",
    "url": "movie-0286.html",
    "cover": "./136.jpg",
    "year": "2017",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "小镇 失踪案 警探 过去 暴风雪"
  },
  {
    "title": "台湾·一八九五",
    "url": "movie-0287.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "历史, 战争",
    "tags": "甲午 抗日 客家人 悲壮"
  },
  {
    "title": "阳光以西",
    "url": "movie-0288.html",
    "cover": "./138.jpg",
    "year": "2020",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情, 爱情, 公路",
    "tags": "末日 公路 孤独 追寻 治愈"
  },
  {
    "title": "富兰克林",
    "url": "movie-0289.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "美国 / 法国",
    "type": "剧集",
    "genre": "历史 / 传记 / 战争",
    "tags": "本杰明·富兰克林 美国独立 谍战 凡尔赛 老年政治家"
  },
  {
    "title": "人间世 第一季",
    "url": "movie-0290.html",
    "cover": "./140.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑奇幻",
    "tags": "单元探案 妖怪都市 善恶有报 道家文化"
  },
  {
    "title": "什么也没发生",
    "url": "movie-0291.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情悬疑",
    "tags": "哲学 存在主义 阿尔卑斯山 失踪 慢节奏"
  },
  {
    "title": "梦呓雨林",
    "url": "movie-0292.html",
    "cover": "./142.jpg",
    "year": "2019",
    "region": "巴西 / 哥伦比亚",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 冒险",
    "tags": "亚马逊 濒危语言 萨满 梦境探险"
  },
  {
    "title": "惠特妮",
    "url": "movie-0293.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "传记 / 剧情",
    "tags": "音乐传奇 自我救赎 家庭阴影 声音的力量"
  },
  {
    "title": "烈日狂风",
    "url": "movie-0294.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 犯罪, 剧情",
    "tags": "警匪 双雄 兄弟反目 枪战 宿命"
  },
  {
    "title": "暴力监狱第二季",
    "url": "movie-0295.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动画 / 喜剧 / 动作",
    "tags": "重口味 黑色幽默 监狱 血腥 疯狂"
  },
  {
    "title": "异哉女性",
    "url": "movie-0296.html",
    "cover": "./146.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/悬疑/女性",
    "tags": "女性群像 社会派 职场 复仇 反转"
  },
  {
    "title": "生而被杀",
    "url": "movie-0297.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "墨西哥 / 美国",
    "type": "剧集",
    "genre": "犯罪 / 剧情 / 悬疑",
    "tags": "墨西哥 毒品战争 宿命论 多线叙事 暴力美学"
  },
  {
    "title": "大唐双龙传粤语",
    "url": "movie-0298.html",
    "cover": "./148.jpg",
    "year": "2004",
    "region": "中国香港",
    "type": "剧集",
    "genre": "武侠 / 奇幻 / 冒险",
    "tags": "TVB 黄易 双主角 武功秘籍"
  },
  {
    "title": "你是骗子我是贼",
    "url": "movie-0299.html",
    "cover": "./149.jpg",
    "year": "1987",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "tags": "诈骗 盗窃 黑吃黑 复古"
  },
  {
    "title": "凡夫荡妇",
    "url": "movie-0300.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 情色 / 伦理",
    "tags": "禁忌 欲望 市井 挣扎 人性"
  },
  {
    "title": "危险年华",
    "url": "movie-0301.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪, 剧情",
    "tags": "青春 黑帮 残酷 真实改编 港产片"
  },
  {
    "title": "他，我们见过",
    "url": "movie-0302.html",
    "cover": "./2.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "tags": "都市传说 轮回 犯罪心理 对话体"
  },
  {
    "title": "被告",
    "url": "movie-0303.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 律政",
    "tags": "法庭 社会议题 弱势群体 真实事件改编 演技炸裂"
  },
  {
    "title": "黑森灵",
    "url": "movie-0304.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "瑞典 / 挪威",
    "type": "电影",
    "genre": "恐怖 / 民俗",
    "tags": "北欧神话 森林 邪教 心理恐怖"
  },
  {
    "title": "东京审判（电影）",
    "url": "movie-0305.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "中国大陆 / 日本",
    "type": "电影",
    "genre": "历史 / 剧情 / 法庭",
    "tags": "历史正剧 法庭辩论 战争罪行 民族情感 群像戏"
  },
  {
    "title": "奔跑吧·茶马古道篇",
    "url": "movie-0306.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺特别篇",
    "genre": "真人秀， 历史， 文化",
    "tags": "文化探险 体力与智慧 古道遗产 实景闯关"
  },
  {
    "title": "徐兆华",
    "url": "movie-0307.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 传记 / 现实主义",
    "tags": "基层干部 真人真事改编 时代楷模"
  },
  {
    "title": "严惩",
    "url": "movie-0308.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪 / 动作 / 惊悚",
    "tags": "私刑复仇 暴力美学 司法漏洞 爽片"
  },
  {
    "title": "越轨追击",
    "url": "movie-0309.html",
    "cover": "./9.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "tags": "高速列车 特工 阴谋"
  },
  {
    "title": "天下伊贺越 晓之血战",
    "url": "movie-0310.html",
    "cover": "./10.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "动作， 历史， 战争",
    "tags": "忍者 战国 复仇 冷兵器"
  },
  {
    "title": "抗联敢死队之红雪",
    "url": "movie-0311.html",
    "cover": "./11.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "战争, 动作, 历史",
    "tags": "东北抗联 敢死队 抗战 雪原"
  },
  {
    "title": "真爱不迟到",
    "url": "movie-0312.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情、奇幻、剧情",
    "tags": "时间循环 便利店爱情 治愈系 命中注定"
  },
  {
    "title": "黑猫白猫",
    "url": "movie-0313.html",
    "cover": "./13.jpg",
    "year": "1998",
    "region": "南斯拉夫",
    "type": "电影",
    "genre": "喜剧",
    "tags": "魔幻现实 吉普赛 狂欢 婚礼 荒诞"
  },
  {
    "title": "复活节星期一",
    "url": "movie-0314.html",
    "cover": "./14.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 恐怖 / 宗教",
    "tags": "时间循环 邪教献祭 血腥复活"
  },
  {
    "title": "少女十五十六时",
    "url": "movie-0315.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "青春 / 成长 / 家庭",
    "tags": "校园霸凌 母女和解 月经羞耻 台式清新"
  },
  {
    "title": "筑地鱼河岸三代目",
    "url": "movie-0316.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情 / 美食 / 职场",
    "tags": "筑地市场 鱼 传承 家族"
  },
  {
    "title": "青春三选一",
    "url": "movie-0317.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 悬疑 / 青春",
    "tags": "穿越 平行时空 校园 抉择"
  },
  {
    "title": "雷霆风暴",
    "url": "movie-0318.html",
    "cover": "./18.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作、科幻",
    "tags": "超级英雄 暴风女 团队分裂 视觉奇观"
  },
  {
    "title": "大卖空",
    "url": "movie-0319.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 商战",
    "tags": "期货诈骗 乡村骗局 黑色幽默 韭菜反杀"
  },
  {
    "title": "无法传递的三通讯件",
    "url": "movie-0320.html",
    "cover": "./20.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情， 战争",
    "tags": "朝鲜战争 离散家属 书信 历史"
  },
  {
    "title": "蜀山传",
    "url": "movie-0321.html",
    "cover": "./21.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 动作",
    "tags": "仙侠重启 剑道哲学 正邪模糊"
  },
  {
    "title": "七片海下：贞操篇",
    "url": "movie-0322.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻伦理",
    "tags": "克隆人 基因契约 深海实验室"
  },
  {
    "title": "你想沦陷于我",
    "url": "movie-0323.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情, 悬疑, 都市",
    "tags": "替身 心理博弈 反转 高智商恋爱"
  },
  {
    "title": "心动的信号第四季",
    "url": "movie-0324.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀， 爱情",
    "tags": "素人恋爱 观察室 修罗场"
  },
  {
    "title": "水怪传奇",
    "url": "movie-0325.html",
    "cover": "./25.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "奇幻，惊悚",
    "tags": "民间传说 水怪 环保 反转"
  },
  {
    "title": "软玉温香",
    "url": "movie-0326.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 剧情, 文艺",
    "tags": "怀旧 香水 疗愈 中年危机"
  },
  {
    "title": "性命交关",
    "url": "movie-0327.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 医疗, 黑色幽默",
    "tags": "医患关系 荒诞 多线叙事 小成本"
  },
  {
    "title": "今夜星光灿烂1988",
    "url": "movie-0328.html",
    "cover": "./28.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "怀旧 舞厅 时代变迁 富家女与穷小子"
  },
  {
    "title": "琴台三凤",
    "url": "movie-0329.html",
    "cover": "./29.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装，爱情",
    "tags": "姐妹 琴师 宫斗"
  },
  {
    "title": "我要你开花",
    "url": "movie-0330.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧, 奇幻",
    "tags": "北漂 压力 幻觉 励志"
  },
  {
    "title": "嘻哈女王组",
    "url": "movie-0331.html",
    "cover": "./31.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧",
    "tags": "音乐 女性 友情"
  },
  {
    "title": "地震鸟",
    "url": "movie-0332.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "日本 / 新西兰",
    "type": "电影",
    "genre": "灾难 / 剧情 / 文艺",
    "tags": "震后创伤 沉默少年 救赎 毛利文化"
  },
  {
    "title": "名模迷踪",
    "url": "movie-0333.html",
    "cover": "./33.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑，都市",
    "tags": "模特圈 失踪案 双面人生 女性悬疑"
  },
  {
    "title": "真假新闻",
    "url": "movie-0334.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 剧情 / 悬疑",
    "tags": "媒体伦理 deepfake 舆论杀人 反转王"
  },
  {
    "title": "热舞飞扬：舞出自由",
    "url": "movie-0335.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞 / 剧情",
    "tags": "街舞 监狱 自由 反抗"
  },
  {
    "title": "天国的孩子们",
    "url": "movie-0336.html",
    "cover": "./36.jpg",
    "year": "2026",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": "孤儿院 亡灵节 记忆 告别"
  },
  {
    "title": "豪华洗衣店",
    "url": "movie-0337.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧 / 犯罪 / 黑色幽默",
    "tags": "洗钱 家族企业 穷人翻身"
  },
  {
    "title": "爱海情潮",
    "url": "movie-0338.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情， 剧情",
    "tags": "海岛 虐恋 商战 家族恩怨"
  },
  {
    "title": "与魔鬼同行",
    "url": "movie-0339.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 悬疑",
    "tags": "连环杀手 心理战 记者 猫鼠游戏"
  },
  {
    "title": "老鼠也移民之西部历险记",
    "url": "movie-0340.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 喜剧 / 冒险",
    "tags": "动物拟人 西部淘金 鼠鼠兄弟 反种族歧视"
  },
  {
    "title": "神奇4侠：银魔现身",
    "url": "movie-0341.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 冒险",
    "tags": "超级英雄 宇宙能量 滑板冲浪"
  },
  {
    "title": "精灵宝可梦：洛奇亚爆诞",
    "url": "movie-0342.html",
    "cover": "./42.jpg",
    "year": "1999",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 冒险 / 奇幻",
    "tags": "神兽 童年回忆 环保 并肩作战 洛奇亚"
  },
  {
    "title": "额吉的承诺",
    "url": "movie-0343.html",
    "cover": "./43.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "母爱 草原 守护 承诺"
  },
  {
    "title": "自由落体",
    "url": "movie-0344.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": "高空恐惧 密室 时间循环"
  },
  {
    "title": "的士司机粤语",
    "url": "movie-0345.html",
    "cover": "./45.jpg",
    "year": "2020",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 黑色幽默",
    "tags": "夜班出租车 香港夜景 多故事串烧"
  },
  {
    "title": "神秘岛",
    "url": "movie-0346.html",
    "cover": "./46.jpg",
    "year": "2005",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻，冒险",
    "tags": "儒勒·凡尔纳 荒岛求生 神秘事件 蒸汽朋克"
  },
  {
    "title": "烟斗",
    "url": "movie-0347.html",
    "cover": "./47.jpg",
    "year": "1967",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "tags": "福尔摩斯式 遗产 庄园 秘密结社"
  },
  {
    "title": "套装",
    "url": "movie-0348.html",
    "cover": "./48.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 悬疑",
    "tags": "裁缝店 黑帮博弈 密室智斗 身份置换 老派反转"
  },
  {
    "title": "小公主艾薇拉与神秘王国",
    "url": "movie-0349.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画/儿童/冒险",
    "tags": "公主 冒险 友情 成长"
  },
  {
    "title": "南非三明治（电影）",
    "url": "movie-0350.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "南非",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": "街头美食 底层生存 种族和解 温情"
  },
  {
    "title": "狙魔女杰第一季",
    "url": "movie-0351.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻, 动作",
    "tags": "修女 枪械 驱魔 暗黑美学"
  },
  {
    "title": "卿何薄命",
    "url": "movie-0352.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "古装 / 悬疑 / 悲剧",
    "tags": "民国 探案 女性群像 宿命 歌女复仇"
  },
  {
    "title": "穿黄靴子的女孩",
    "url": "movie-0353.html",
    "cover": "./53.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "tags": "艺术 失踪案 小镇疑云 女性"
  },
  {
    "title": "逃之夭夭",
    "url": "movie-0354.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "tags": "公路 笨贼 乌龙 黑色幽默"
  },
  {
    "title": "长岛凶宅故事",
    "url": "movie-0355.html",
    "cover": "./55.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 纪录",
    "tags": "伪纪录片 探灵 反转 密室"
  },
  {
    "title": "秘密的爱",
    "url": "movie-0356.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情 / 同性",
    "tags": "暗恋 校园 书信 错过 重逢"
  },
  {
    "title": "夜落曼哈顿",
    "url": "movie-0357.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑, 犯罪",
    "tags": "一夜限定 追杀 纽约 计时器"
  },
  {
    "title": "比佛利山庄的死去女人",
    "url": "movie-0358.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑, 剧情",
    "tags": "豪宅 阶级冲突 女佣 双重叙事"
  },
  {
    "title": "渔家乐",
    "url": "movie-0359.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/喜剧",
    "tags": "乡村振兴 荒诞 方言 黑色幽默"
  },
  {
    "title": "奇异博士2：失控多重宇宙",
    "url": "movie-0360.html",
    "cover": "./60.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 奇幻 / 恐怖",
    "tags": "漫威 多元宇宙 黑暗 丧尸"
  },
  {
    "title": "大运河粤语",
    "url": "movie-0361.html",
    "cover": "./61.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "剧集",
    "genre": "历史、武侠、商战",
    "tags": "大运河 隋唐风云 TVB 港剧经典 恩怨情仇"
  },
  {
    "title": "初恋红豆冰",
    "url": "movie-0362.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "马来西亚",
    "type": "电影",
    "genre": "爱情 / 青春",
    "tags": "怀旧 华人 小镇 暗恋"
  },
  {
    "title": "恐龙物语: 回到未来",
    "url": "movie-0363.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "动画、冒险、家庭",
    "tags": "穿越 恐龙 亲情 环保"
  },
  {
    "title": "四十九天的食谱",
    "url": "movie-0364.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "治愈 丧亲 美食 成长 温情"
  },
  {
    "title": "奇异人生马戏团",
    "url": "movie-0365.html",
    "cover": "./65.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻、悬疑、青春",
    "tags": "超能力 马戏团 蝴蝶效应 怪诞美学"
  },
  {
    "title": "我的西游",
    "url": "movie-0366.html",
    "cover": "./66.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "奇幻，冒险，喜剧",
    "tags": "现代解构 废柴逆袭 传统文化"
  },
  {
    "title": "著魔的丽莎",
    "url": "movie-0367.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "恐怖 / 心理",
    "tags": "附身 宗教信仰 女性压抑 邪典"
  },
  {
    "title": "算计：7日死亡游戏",
    "url": "movie-0368.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": "密室 心理战 人性"
  },
  {
    "title": "沸腾的群山2024",
    "url": "movie-0369.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、乡村振兴、家庭",
    "tags": "矿业转型 兄弟阋墙 青山绿水 现实主义"
  },
  {
    "title": "2024山东春晚",
    "url": "movie-0370.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺 / 晚会",
    "genre": "歌舞 / 小品 / 戏曲",
    "tags": "春节 传统文化 明星云集 喜庆"
  },
  {
    "title": "劲道猪头肉",
    "url": "movie-0371.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情，喜剧",
    "tags": "美食 父子 传承 小人物"
  },
  {
    "title": "我的野蛮女教师",
    "url": "movie-0372.html",
    "cover": "./72.jpg",
    "year": "2003",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧",
    "tags": "师生 契约 搞笑 逆袭"
  },
  {
    "title": "爱欲布尔诺",
    "url": "movie-0373.html",
    "cover": "./73.jpg",
    "year": "2017",
    "region": "捷克",
    "type": "电影",
    "genre": "剧情, 情色, 文艺",
    "tags": "开放式关系 捷克新浪潮 城市孤独"
  },
  {
    "title": "细菌浩劫",
    "url": "movie-0374.html",
    "cover": "./74.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "tags": "生化危机 实验室泄漏 隔离 道德选择"
  },
  {
    "title": "看不见的房客",
    "url": "movie-0375.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": "密室推理 多层反转 寄生关系 高空惊魂"
  },
  {
    "title": "拴线的气球",
    "url": "movie-0376.html",
    "cover": "./76.jpg",
    "year": "2023",
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "儿童 社会隐喻 现实主义"
  },
  {
    "title": "余罪第一季",
    "url": "movie-0377.html",
    "cover": "./77.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "犯罪 / 悬疑",
    "tags": "卧底 痞子英雄 张一山 贩毒"
  },
  {
    "title": "斯塔比中士：一个美国英雄",
    "url": "movie-0378.html",
    "cover": "./78.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "动画",
    "tags": "战争 动物英雄 真实改编 一战 温情"
  },
  {
    "title": "海上倒计时",
    "url": "movie-0379.html",
    "cover": "./79.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作、悬疑、灾难",
    "tags": "国际邮轮 炸弹威胁 退休刑警 密室"
  },
  {
    "title": "东北不冷",
    "url": "movie-0380.html",
    "cover": "./80.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": "东北 黑色幽默 返乡 救赎"
  },
  {
    "title": "无意背叛",
    "url": "movie-0381.html",
    "cover": "./81.jpg",
    "year": "2027",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情/爱情/家庭",
    "tags": "婚姻危机 记忆失窃 身份认同 女性觉醒"
  },
  {
    "title": "盲情六分",
    "url": "movie-0382.html",
    "cover": "./82.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情悬疑",
    "tags": "盲人 限时恋爱 器官捐献 绝症 反转"
  },
  {
    "title": "苍穹浩瀚 第六季",
    "url": "movie-0383.html",
    "cover": "./83.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 冒险",
    "tags": "太空歌剧 最终季 原分子病毒"
  },
  {
    "title": "少战精英：爷爷的宝藏",
    "url": "movie-0384.html",
    "cover": "./84.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险， 喜剧",
    "tags": "少年 战争模拟 宝藏 爷孙情 成长"
  },
  {
    "title": "太空夺旗",
    "url": "movie-0385.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "科幻 / 冒险 / 动画",
    "tags": "少年 太空 冒险 反叛"
  },
  {
    "title": "你永远不会独行",
    "url": "movie-0386.html",
    "cover": "./86.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "运动, 剧情, 家庭",
    "tags": "足球 父子和解 阿尔茨海默"
  },
  {
    "title": "功夫厨神",
    "url": "movie-0387.html",
    "cover": "./87.jpg",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 喜剧",
    "tags": "美食对决 功夫喜剧 师徒传承 市井江湖 粤式幽默"
  },
  {
    "title": "老男孩",
    "url": "movie-0388.html",
    "cover": "./88.jpg",
    "year": "2003",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 剧情",
    "tags": "复仇 乱伦 暴力 经典"
  },
  {
    "title": "对我而言非常珍贵的你",
    "url": "movie-0389.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "催泪 失忆 亲情 治愈"
  },
  {
    "title": "快乐寻回犬",
    "url": "movie-0390.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "治愈 公路 人与动物 留守儿童 成长"
  },
  {
    "title": "尼罗河的新娘",
    "url": "movie-0391.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "埃及",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 历史",
    "tags": "古埃及 皇室 阴谋 诅咒"
  },
  {
    "title": "海外",
    "url": "movie-0392.html",
    "cover": "./92.jpg",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "tags": "偷渡 身份迷失 心理惊悚 异乡"
  },
  {
    "title": "没有妳的多重宇宙",
    "url": "movie-0393.html",
    "cover": "./93.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻，爱情，剧情",
    "tags": "平行宇宙 失去 执念 选择"
  },
  {
    "title": "天堂霓裳",
    "url": "movie-0394.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 时装 / 文艺",
    "tags": "旗袍 香港 母女 传承"
  },
  {
    "title": "吴清源",
    "url": "movie-0395.html",
    "cover": "./95.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "传记 / 历史",
    "tags": "围棋 昭和棋圣 精神苦旅 东方哲学"
  },
  {
    "title": "此生要去的100个地方",
    "url": "movie-0396.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "旅行，人文，风光",
    "tags": "治愈 远方 深度人文 视觉盛宴"
  },
  {
    "title": "芝加哥急救第二季",
    "url": "movie-0397.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 医疗",
    "tags": "急诊室 医生群像 芝加哥 高压"
  },
  {
    "title": "残杀",
    "url": "movie-0398.html",
    "cover": "./98.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 惊悚",
    "tags": "密闭空间 连环反转 复仇 社会派推理 本格"
  },
  {
    "title": "犹大与黑色弥赛亚",
    "url": "movie-0399.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "传记 / 历史 / 惊悚",
    "tags": "黑豹党 卧底 FBI 政治阴谋"
  },
  {
    "title": "捞世界",
    "url": "movie-0400.html",
    "cover": "./100.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "tags": "黑色幽默 小人物 发财梦 荒诞"
  },
  {
    "title": "不问苍生问鬼神",
    "url": "movie-0401.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 悬疑, 古装",
    "tags": "民国 降头 民俗 反转"
  },
  {
    "title": "替身传奇乐翻天",
    "url": "movie-0402.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动作",
    "tags": "替身演员 娱乐圈黑幕 错位 草根英雄"
  },
  {
    "title": "德尔苏·乌扎拉",
    "url": "movie-0403.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "俄罗斯/中国合拍",
    "type": "电影",
    "genre": "剧情/冒险",
    "tags": "荒野生存 人与自然 猎人口述史"
  },
  {
    "title": "渔家乐",
    "url": "movie-0404.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "老年爱情 渔村变迁 现实主义"
  },
  {
    "title": "狗假死之物",
    "url": "movie-0405.html",
    "cover": "./105.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭, 悬疑",
    "tags": "狗狗 谎言 治愈 返乡"
  },
  {
    "title": "天方艳史",
    "url": "movie-0406.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "古装, 奇幻, 爱情",
    "tags": "宫廷 妖妃 权力游戏"
  },
  {
    "title": "河岸杀手",
    "url": "movie-0407.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪, 悬疑, 动作",
    "tags": "连环杀手 河流 复仇 刑警 黑色电影"
  },
  {
    "title": "蓦然回首",
    "url": "movie-0408.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "剧情 / 青春",
    "tags": "漫画创作 友情 时空 藤本树"
  },
  {
    "title": "风流侠盗走天涯",
    "url": "movie-0409.html",
    "cover": "./109.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 冒险",
    "tags": "侠盗 易容 民国 夺宝"
  },
  {
    "title": "鬼魂西行",
    "url": "movie-0410.html",
    "cover": "./110.jpg",
    "year": "1935",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧, 奇幻",
    "tags": "黑白片 庄园 美国梦 遗产 闹鬼"
  },
  {
    "title": "瞒天凶嫌",
    "url": "movie-0411.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑惊悚",
    "tags": "反转 密室 替身 身份互换 高层阴谋"
  },
  {
    "title": "悠然见南山",
    "url": "movie-0412.html",
    "cover": "./112.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 农村",
    "tags": "返乡 种地 代际冲突 慢生活 治愈"
  },
  {
    "title": "这个男人来自地球",
    "url": "movie-0413.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 悬疑, 剧情",
    "tags": "永生者 谈话电影 知识考据 宗教颠覆 心理博弈"
  },
  {
    "title": "为此为止",
    "url": "movie-0414.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "德国",
    "type": "剧集",
    "genre": "剧情、悬疑、家庭",
    "tags": "代际创伤 纳粹往事 和解 层层反转"
  },
  {
    "title": "哦！我的皇帝陛下第二季",
    "url": "movie-0415.html",
    "cover": "./115.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "喜剧, 古装",
    "tags": "穿越 星座 沙雕甜宠"
  },
  {
    "title": "雀斑公主",
    "url": "movie-0416.html",
    "cover": "./116.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 青春 / 家庭",
    "tags": "容貌焦虑 母女关系 校园霸凌"
  },
  {
    "title": "小可爱娜斯佳 第二季",
    "url": "movie-0417.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "家庭，奇幻，儿童",
    "tags": "魔法 友谊 成长 冒险"
  },
  {
    "title": "天之娇女",
    "url": "movie-0418.html",
    "cover": "./118.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 宫廷 / 女性 / 权谋",
    "tags": "公主 和亲 复仇 女强"
  },
  {
    "title": "仙蒂奇缘",
    "url": "movie-0419.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "奇幻 / 爱情 / 喜剧",
    "tags": "现代童话 身份错位 豪门 灰姑娘改编"
  },
  {
    "title": "荣耀时刻",
    "url": "movie-0420.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "运动，剧情",
    "tags": "摔跤 女性 逆袭 真实改编"
  },
  {
    "title": "假面骑士电王",
    "url": "movie-0421.html",
    "cover": "./121.jpg",
    "year": "2007",
    "region": "日本",
    "type": "特摄",
    "genre": "动作/科幻/喜剧",
    "tags": "假面骑士 时间列车 异魔神 搞笑"
  },
  {
    "title": "掩耳盗邻第一季",
    "url": "movie-0422.html",
    "cover": "./122.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 喜剧",
    "tags": "黑色幽默 邻里关系 偷听与反偷听 单元剧"
  },
  {
    "title": "一个去了火星的男人",
    "url": "movie-0423.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 剧情, 冒险",
    "tags": "硬科幻 中年危机 孤独宇航 国产科幻新作"
  },
  {
    "title": "飞天怪兽",
    "url": "movie-0424.html",
    "cover": "./124.jpg",
    "year": "2026",
    "region": "日本 / 美国",
    "type": "电影",
    "genre": "科幻 / 灾难 / 惊悚",
    "tags": "怪兽 空中巨兽 城市毁灭 科幻设定 生存"
  },
  {
    "title": "奈德",
    "url": "movie-0425.html",
    "cover": "./125.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记 / 体育",
    "tags": "传记 极限游泳 女性 励志"
  },
  {
    "title": "但丁酒店",
    "url": "movie-0426.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "惊悚, 奇幻",
    "tags": "地狱 心理 罪与罚 密室"
  },
  {
    "title": "追凶20年",
    "url": "movie-0427.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": "连环杀人 旧案重查 警察群像 时代变迁"
  },
  {
    "title": "重点是，我爱你",
    "url": "movie-0428.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": "话痨电影 罗马假日 阴差阳错"
  },
  {
    "title": "食人族大屠杀2",
    "url": "movie-0429.html",
    "cover": "./129.jpg",
    "year": "1988",
    "region": "意大利",
    "type": "电影",
    "genre": "恐怖 / 冒险",
    "tags": "禁片 食人族 伪纪录片 血腥 争议"
  },
  {
    "title": "济公",
    "url": "movie-0430.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "奇幻 / 喜剧 / 动作",
    "tags": "疯癫 降妖 现代元素 反转"
  },
  {
    "title": "一袋大米",
    "url": "movie-0431.html",
    "cover": "./131.jpg",
    "year": "2004",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": "贫困 父爱 步行 城乡 生存"
  },
  {
    "title": "老人与小孩",
    "url": "movie-0432.html",
    "cover": "./132.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "公路 和解 留守 治愈"
  },
  {
    "title": "国家保安",
    "url": "movie-0433.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": "废柴搭档 黑人幽默 劫机"
  },
  {
    "title": "山无棱天地合",
    "url": "movie-0434.html",
    "cover": "./134.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 奇幻, 古装",
    "tags": "穿越 琼瑶梗 自然现象 反套路"
  },
  {
    "title": "真爱如血第二季",
    "url": "movie-0435.html",
    "cover": "./135.jpg",
    "year": "2010",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻 / 惊悚 / 爱情",
    "tags": "吸血鬼 狼人 血腥 南方哥特"
  },
  {
    "title": "拥有神之舌的男人",
    "url": "movie-0436.html",
    "cover": "./136.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑、美食、剧情",
    "tags": "味觉超能力 破案 料理对决 孤僻天才 人性"
  },
  {
    "title": "黑衣女孩",
    "url": "movie-0437.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑, 惊悚, 校园",
    "tags": "校园暴力 复仇 悬疑 双女主 反转"
  },
  {
    "title": "茜茜公主第二季",
    "url": "movie-0438.html",
    "cover": "./138.jpg",
    "year": "2023",
    "region": "奥地利 / 德国",
    "type": "电视剧",
    "genre": "历史 / 爱情",
    "tags": "宫廷 女性 抑郁 成长"
  },
  {
    "title": "容易受伤的玫瑰",
    "url": "movie-0439.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": "女性 成长 脆弱 法国"
  },
  {
    "title": "铁流1949",
    "url": "movie-0440.html",
    "cover": "./140.jpg",
    "year": "2009",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 历史",
    "tags": "解放战争 渡江战役 钢铁意志 主旋律 硬核战争"
  },
  {
    "title": "爸爸何在",
    "url": "movie-0441.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 家庭",
    "tags": "寻亲 身份认同 失忆 公路 真相"
  },
  {
    "title": "时间之子",
    "url": "movie-0442.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 奇幻, 冒险",
    "tags": "时间操控 少年救世 因果循环 视觉奇观"
  },
  {
    "title": "止战之殇",
    "url": "movie-0443.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争 / 剧情",
    "tags": "二战 钢琴 人性 反战"
  },
  {
    "title": "七十二家房客第九部粤语",
    "url": "movie-0444.html",
    "cover": "./144.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 喜剧",
    "tags": "粤语长片IP 市井群像 邻里 怀旧"
  },
  {
    "title": "旭日之家",
    "url": "movie-0445.html",
    "cover": "./145.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 犯罪, 西部",
    "tags": "贩毒家族 现代西部 兄妹情 暴力 末日感"
  },
  {
    "title": "风吹吧麦浪",
    "url": "movie-0446.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 文艺 / 乡村",
    "tags": "乡村振兴 女性成长 诗意美学"
  },
  {
    "title": "初代吸血鬼第二季",
    "url": "movie-0447.html",
    "cover": "./147.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电视剧",
    "genre": "奇幻, 惊悚, 剧情",
    "tags": "吸血鬼 家族 权力 超自然"
  },
  {
    "title": "我的麻吉女友",
    "url": "movie-0448.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "青春校园",
    "tags": "闺蜜 百合 成长"
  },
  {
    "title": "七月返归国语",
    "url": "movie-0449.html",
    "cover": "./149.jpg",
    "year": "2023",
    "region": "香港 / 中国大陆",
    "type": "电影",
    "genre": "恐怖、悬疑、剧情",
    "tags": "民俗 鬼节 返乡 心理惊悚"
  },
  {
    "title": "一磅肉",
    "url": "movie-0450.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 剧情 / 犯罪",
    "tags": "高利贷 复仇 器官 道德困境 黑色"
  },
  {
    "title": "魔鬼之谷",
    "url": "movie-0451.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "挪威 / 德国",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 惊悚",
    "tags": "北欧 noir 极地 邪教 失踪案"
  },
  {
    "title": "凭栏一片风云起",
    "url": "movie-0452.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代 / 战争 / 爱情",
    "tags": "民国 飞行员 家国情怀 群像 热血"
  },
  {
    "title": "他的摩托车，她的岛",
    "url": "movie-0453.html",
    "cover": "./3.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "机车 离岛 遗书"
  },
  {
    "title": "美国鼠谭2：西部历险记",
    "url": "movie-0454.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影 / 动画",
    "genre": "动画 / 冒险 / 家庭",
    "tags": "老鼠 西部 寻亲 音乐剧"
  },
  {
    "title": "魔法师的第五个冬天",
    "url": "movie-0455.html",
    "cover": "./5.jpg",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻, 剧情, 悬疑",
    "tags": "魔法 时间循环 老年 记忆 救赎"
  },
  {
    "title": "靓仔斗大鳄",
    "url": "movie-0456.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 犯罪 / 动作",
    "tags": "小人物 诈骗 地产商 港式幽默"
  },
  {
    "title": "神通魔法石",
    "url": "movie-0457.html",
    "cover": "./7.jpg",
    "year": "2001",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": "魔法 成长 友谊"
  },
  {
    "title": "钟楼怪人1996",
    "url": "movie-0458.html",
    "cover": "./8.jpg",
    "year": "1996",
    "region": "美国",
    "type": "动画电影",
    "genre": "动画, 剧情",
    "tags": "迪士尼 雨果 加西莫多 钟楼 社会边缘人"
  },
  {
    "title": "渔家乐续集",
    "url": "movie-0459.html",
    "cover": "./9.jpg",
    "year": "1964",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 歌舞",
    "tags": "粤语片 水上人家 团圆 怀旧"
  },
  {
    "title": "婚姻攻略",
    "url": "movie-0460.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 爱情, 悬疑",
    "tags": "夫妻博弈 心理战 出轨 反转 高智商"
  },
  {
    "title": "尼基",
    "url": "movie-0461.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "音乐 / 传记",
    "tags": "传奇歌手 女性成长 叛逆 巴黎"
  },
  {
    "title": "松药店的儿子们国语",
    "url": "movie-0462.html",
    "cover": "./12.jpg",
    "year": "2009",
    "region": "韩国",
    "type": "剧集",
    "genre": "家庭，喜剧，爱情",
    "tags": "家庭伦理 兄弟 婚姻 家长里短"
  },
  {
    "title": "夫妻报国捐躯",
    "url": "movie-0463.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 战争 / 爱情",
    "tags": "抗日 夫妻 牺牲 谍战 催泪"
  },
  {
    "title": "马特和玛拉",
    "url": "movie-0464.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "爱情、剧情、文艺",
    "tags": "信件 异地恋 错过 二十年"
  },
  {
    "title": "征服北极的人",
    "url": "movie-0465.html",
    "cover": "./15.jpg",
    "year": "2019",
    "region": "挪威",
    "type": "电影",
    "genre": "冒险 / 传记",
    "tags": "探险 北极 生存 真实故事改编"
  },
  {
    "title": "密使",
    "url": "movie-0466.html",
    "cover": "./16.jpg",
    "year": "2012",
    "region": "中国",
    "type": "电视剧",
    "genre": "谍战 / 悬疑",
    "tags": "双胞胎 潜伏 国共 身份互换 演技考验"
  },
  {
    "title": "灵驹续集",
    "url": "movie-0467.html",
    "cover": "./17.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": "白马 魔法 祖孙 守护 成长"
  },
  {
    "title": "创业玩家",
    "url": "movie-0468.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "tags": "创业 草根 金融诈骗 黑色幽默 港产"
  },
  {
    "title": "我叫侯美丽",
    "url": "movie-0469.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 都市 / 女性",
    "tags": "轻喜剧 职场 容貌焦虑 逆袭 爽剧"
  },
  {
    "title": "中国好声音2015",
    "url": "movie-0470.html",
    "cover": "./20.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐 / 真人秀",
    "tags": "选秀 导师 怀旧 翻唱"
  },
  {
    "title": "熊出没·逆转时空",
    "url": "movie-0471.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 科幻",
    "tags": "穿越 友情 环境保护 平行宇宙 喜剧"
  },
  {
    "title": "恶胎",
    "url": "movie-0472.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖 / 民俗",
    "tags": "民俗恐怖 婴灵 诅咒"
  },
  {
    "title": "胖子行动队",
    "url": "movie-0473.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": "特工 减肥 误打误撞 搭档 搞笑"
  },
  {
    "title": "玉女金声",
    "url": "movie-0474.html",
    "cover": "./24.jpg",
    "year": "1967",
    "region": "中国香港",
    "type": "电影",
    "genre": "歌舞 / 爱情",
    "tags": "黑胶唱片 代唱 舞台争锋"
  },
  {
    "title": "强哲",
    "url": "movie-0475.html",
    "cover": "./25.jpg",
    "year": "2013",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情，动作",
    "tags": "黑帮 亲情 底层挣扎 釜山"
  },
  {
    "title": "超次元学院2",
    "url": "movie-0476.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国",
    "type": "网剧",
    "genre": "科幻, 校园",
    "tags": "异能 学院 次元壁 中二"
  },
  {
    "title": "定理",
    "url": "movie-0477.html",
    "cover": "./27.jpg",
    "year": "1968",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情/哲学/先锋",
    "tags": "帕索里尼 神秘访客 资产阶级解体 全裸"
  },
  {
    "title": "我的人生冒险",
    "url": "movie-0478.html",
    "cover": "./28.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "冒险, 剧情",
    "tags": "老人 公路片 圆梦 温情"
  },
  {
    "title": "三五成群",
    "url": "movie-0479.html",
    "cover": "./29.jpg",
    "year": "2011",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/黑色幽默",
    "tags": "小人物 荒诞 多线叙事"
  },
  {
    "title": "金蛋宝鸭",
    "url": "movie-0480.html",
    "cover": "./30.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "喜剧 / 奇幻 / 冒险",
    "tags": "寻宝 萌宠 都市传说 幽默"
  },
  {
    "title": "白色相簿第二季",
    "url": "movie-0481.html",
    "cover": "./31.jpg",
    "year": "2013",
    "region": "日本",
    "type": "动漫",
    "genre": "爱情，剧情，心理",
    "tags": "胃痛番 多角恋 偶像与粉丝"
  },
  {
    "title": "凹凸世界第四季",
    "url": "movie-0482.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集 / 动画",
    "genre": "热血 / 战斗 / 科幻",
    "tags": "凹凸世界续作 大赛 机甲 少年漫"
  },
  {
    "title": "大国民之战",
    "url": "movie-0483.html",
    "cover": "./33.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "genre": "战争 / 历史 / 动作",
    "tags": "二战传奇 狙击对决 兄弟情义"
  },
  {
    "title": "地球上的生灵",
    "url": "movie-0484.html",
    "cover": "./34.jpg",
    "year": "2026",
    "region": "全球/多国合拍",
    "type": "纪录片",
    "genre": "自然生态纪录片",
    "tags": "环保 生命奇迹 视觉盛宴 宏大叙事"
  },
  {
    "title": "大人的防具店",
    "url": "movie-0485.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻， 日常， 喜剧",
    "tags": "防具 成人 铠甲 职业 奇幻世界"
  },
  {
    "title": "南瓜恶灵",
    "url": "movie-0486.html",
    "cover": "./36.jpg",
    "year": "1988",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 奇幻",
    "tags": "邪教 万圣节 诅咒 cult"
  },
  {
    "title": "蝴蝶效应3：启示",
    "url": "movie-0487.html",
    "cover": "./37.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "tags": "时间旅行 连环杀手 黑暗 悬疑"
  },
  {
    "title": "变脸英雄",
    "url": "movie-0488.html",
    "cover": "./38.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作， 科幻， 悬疑",
    "tags": "卧底 高科技面具 反转"
  },
  {
    "title": "对于艾玛和永远",
    "url": "movie-0489.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情、剧情、奇幻",
    "tags": "时间循环 选择 遗憾 小镇 唯美"
  },
  {
    "title": "失恋急让",
    "url": "movie-0490.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、喜剧、剧情",
    "tags": "房屋中介 假结婚 欢喜冤家 置业"
  },
  {
    "title": "武林风云",
    "url": "movie-0491.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "武侠, 悬疑, 权谋",
    "tags": "门派斗争 卧底 女性侠客 慢武侠"
  },
  {
    "title": "元祖观察之死无对证",
    "url": "movie-0492.html",
    "cover": "./42.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 科幻， 悬疑",
    "tags": "平行宇宙 刺客联盟 历史修正 暴力美学"
  },
  {
    "title": "燕娘",
    "url": "movie-0493.html",
    "cover": "./43.jpg",
    "year": "1978",
    "region": "香港",
    "type": "电影",
    "genre": "武侠",
    "tags": "邵氏 女侠 复仇 江湖恩怨 匕首"
  },
  {
    "title": "雷加利亚 三圣星",
    "url": "movie-0494.html",
    "cover": "./44.jpg",
    "year": "2016",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 机战",
    "tags": "机甲 姐妹 宗教 阴谋 百合"
  },
  {
    "title": "地下室惊魂",
    "url": "movie-0495.html",
    "cover": "./45.jpg",
    "year": "2012",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": "地下室 密室 记忆 人格分裂 反转"
  },
  {
    "title": "瓢虫 瓢虫",
    "url": "movie-0496.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 冒险",
    "tags": "赛车 倒霉蛋 公路 巧合 黑色幽默"
  },
  {
    "title": "黎明追剿",
    "url": "movie-0497.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "谍战, 动作, 悬疑",
    "tags": "反特 西南剿匪 双面间谍 兄弟情"
  },
  {
    "title": "泰山与狩猎者",
    "url": "movie-0498.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 冒险 / 生态惊悚",
    "tags": "丛林法则 反盗猎 野生救援 宿敌和解"
  },
  {
    "title": "黑街执法者",
    "url": "movie-0499.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": "私刑 复古 地下拳场 黑色电影 硬汉"
  },
  {
    "title": "大恋爱：与将我忘记的你",
    "url": "movie-0500.html",
    "cover": "./50.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情 / 科幻 / 医疗",
    "tags": "记忆丧失 绝症 倒叙恋爱"
  },
  {
    "title": "谁知女子心",
    "url": "movie-0501.html",
    "cover": "./51.jpg",
    "year": "2020",
    "region": "中国香港",
    "type": "剧集",
    "genre": "都市, 女性, 剧情",
    "tags": "职场 闺蜜 情感 独立"
  },
  {
    "title": "前男友成了我上司",
    "url": "movie-0502.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电视剧",
    "genre": "职场, 爱情, 喜剧",
    "tags": "办公室恋情 前任对决 破镜重圆"
  },
  {
    "title": "寻凶的幽灵轨迹",
    "url": "movie-0503.html",
    "cover": "./53.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 奇幻 / 犯罪",
    "tags": "通灵 铁路杀人 时间循环 复仇"
  },
  {
    "title": "东方秃鹰",
    "url": "movie-0504.html",
    "cover": "./54.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 战争 / 冒险",
    "tags": "特种部队 越战 硬核动作"
  },
  {
    "title": "巅峰拍档第三十季",
    "url": "movie-0505.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "真人秀 / 喜剧 / 运动",
    "tags": "汽车 冒险 恶搞 三贱客"
  },
  {
    "title": "生活重新开始",
    "url": "movie-0506.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "genre": "剧情 / 生活",
    "tags": "重启人生 治愈 中年危机 小镇"
  },
  {
    "title": "恋恋酒乡",
    "url": "movie-0507.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "美食，治愈",
    "tags": "清酒 酿酒 回乡 匠人"
  },
  {
    "title": "伊人制造",
    "url": "movie-0508.html",
    "cover": "./58.jpg",
    "year": "2000",
    "region": "香港",
    "type": "电影",
    "genre": "科幻, 爱情",
    "tags": "机器人 复制人 爱情 伦理 虚拟偶像"
  },
  {
    "title": "我的蓝鬼",
    "url": "movie-0509.html",
    "cover": "./59.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "tags": "经典 人鬼恋 怀旧 催泪"
  },
  {
    "title": "王牌赛手",
    "url": "movie-0510.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 运动",
    "tags": "赛车 兄弟情 复仇逆袭"
  },
  {
    "title": "阿宝的故事",
    "url": "movie-0511.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 家庭",
    "tags": "大熊猫 保育员 成长"
  },
  {
    "title": "漫漫翘家路",
    "url": "movie-0512.html",
    "cover": "./62.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 公路",
    "tags": "留守儿童 寻找 公路 情感"
  },
  {
    "title": "奥斯汀书会",
    "url": "movie-0513.html",
    "cover": "./63.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 爱情, 喜剧",
    "tags": "读书会 简·奥斯汀 文艺爱情 群像 治愈"
  },
  {
    "title": "亲吻亭3",
    "url": "movie-0514.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "爱情，青春",
    "tags": "大学 异地恋 闺蜜 成长 暑假"
  },
  {
    "title": "神犬出击",
    "url": "movie-0515.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 家庭 / 冒险",
    "tags": "萌宠 军犬 边境走私 正能量"
  },
  {
    "title": "流沙",
    "url": "movie-0516.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "沙漠 失踪 煤矿 真相 记者"
  },
  {
    "title": "至暴之年",
    "url": "movie-0517.html",
    "cover": "./67.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪, 剧情",
    "tags": "黑帮 宗教 文艺犯罪"
  },
  {
    "title": "最孤独的星球",
    "url": "movie-0518.html",
    "cover": "./68.jpg",
    "year": "2027",
    "region": "德国 / 美国",
    "type": "电影",
    "genre": "科幻 / 剧情 / 心理",
    "tags": "太空漂流 AI伴侣 存在主义"
  },
  {
    "title": "老头儿",
    "url": "movie-0519.html",
    "cover": "./69.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭喜剧",
    "tags": "养老 代际冲突 市井烟火 温情"
  },
  {
    "title": "一杯热奶茶的等待",
    "url": "movie-0520.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情，青春，校园",
    "tags": "校园 奶茶 暗恋 等待 温暖治愈"
  },
  {
    "title": "鲨海",
    "url": "movie-0521.html",
    "cover": "./71.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 冒险, 灾难",
    "tags": "深海 鲨鱼 潜水 逃生"
  },
  {
    "title": "出水美人",
    "url": "movie-0522.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 爱情",
    "tags": "美人鱼传说 环保 文艺爱情 身体恐怖"
  },
  {
    "title": "列兵查林",
    "url": "movie-0523.html",
    "cover": "./73.jpg",
    "year": "2015",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争/剧情",
    "tags": "车臣战争 新兵 人性 反战"
  },
  {
    "title": "妖怪合租屋电影版",
    "url": "movie-0524.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧, 奇幻",
    "tags": "妖怪 合租 治愈"
  },
  {
    "title": "圣诞老人快乐再疯狂",
    "url": "movie-0525.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 家庭",
    "tags": "圣诞恶搞 中年危机 元宇宙 合家欢"
  },
  {
    "title": "同学来了",
    "url": "movie-0526.html",
    "cover": "./76.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧, 校园, 青春",
    "tags": "同学会 谎言崩塌 怀旧 多线叙事"
  },
  {
    "title": "男人与鸡",
    "url": "movie-0527.html",
    "cover": "./77.jpg",
    "year": "2015",
    "region": "丹麦",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 黑色幽默",
    "tags": "荒诞 兄弟情 遗传学"
  },
  {
    "title": "邪恶力量第八季",
    "url": "movie-0528.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻，恐怖，剧情",
    "tags": "兄弟 驱魔 超自然 季播 神话线"
  },
  {
    "title": "血战余生",
    "url": "movie-0529.html",
    "cover": "./79.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "动作，战争",
    "tags": "特种兵 复仇 丛林 硬核"
  },
  {
    "title": "冰雪间谍",
    "url": "movie-0530.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "动作, 悬疑",
    "tags": "特工 极地 冷战"
  },
  {
    "title": "摇滚吸血鬼",
    "url": "movie-0531.html",
    "cover": "./81.jpg",
    "year": "2009",
    "region": "加拿大",
    "type": "电影",
    "genre": "喜剧, 音乐, 恐怖",
    "tags": "摇滚乐 恶搞 吸血鬼 B级"
  },
  {
    "title": "王冠的游戏：都铎家族",
    "url": "movie-0532.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 历史 / 宫斗",
    "tags": "都铎王朝 亨利八世 宗教改革 权谋"
  },
  {
    "title": "名侦探柯南国语版",
    "url": "movie-0533.html",
    "cover": "./83.jpg",
    "year": "1999",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 推理 / 悬疑",
    "tags": "国配 童年经典 单元探案 黑衣组织"
  },
  {
    "title": "诱人小恶魔",
    "url": "movie-0534.html",
    "cover": "./84.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情 / 喜剧 / 奇幻",
    "tags": "恶魔 契约 职场 反差萌 恋爱"
  },
  {
    "title": "安娜和狼",
    "url": "movie-0535.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": "人狼共生 荒野 女性觉醒"
  },
  {
    "title": "业余选手",
    "url": "movie-0536.html",
    "cover": "./86.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 运动",
    "tags": "电竞 老年 逆袭 搞笑"
  },
  {
    "title": "叔叔当家",
    "url": "movie-0537.html",
    "cover": "./87.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 家庭, 剧情",
    "tags": "亲情 中年危机 代际冲突 香港市井"
  },
  {
    "title": "她痴迷于我的丈夫",
    "url": "movie-0538.html",
    "cover": "./88.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑 / 爱情 / 惊悚",
    "tags": "不伦恋 跟踪狂 反转 家庭伦理"
  },
  {
    "title": "哭泣宝贝",
    "url": "movie-0539.html",
    "cover": "./89.jpg",
    "year": "1990",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、爱情、歌舞",
    "tags": "摇滚 少年犯 约翰·沃特斯"
  },
  {
    "title": "都市男女的爱情法则",
    "url": "movie-0540.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情，剧情，都市",
    "tags": "现实主义 群像 治愈 职场 约会"
  },
  {
    "title": "卡彼尼",
    "url": "movie-0541.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 传记",
    "tags": "音乐家 底层奋斗 意大利移民 手风琴"
  },
  {
    "title": "宵禁5分前",
    "url": "movie-0542.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "tags": "反乌托邦 极简美学 社会寓言"
  },
  {
    "title": "少年师爷之知礼万事通",
    "url": "movie-0543.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "喜剧 / 历史 / 益智",
    "tags": "古代 机智少年 礼仪故事 寓教于乐 民间智慧"
  },
  {
    "title": "疯狂的麦咭第八季",
    "url": "movie-0544.html",
    "cover": "./94.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀冒险",
    "tags": "麦咭 密室 闯关 明星 第八季"
  },
  {
    "title": "极速营救",
    "url": "movie-0545.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": "公交车 定时炸弹 密闭空间 限时救援"
  },
  {
    "title": "动态漫画·伏天圣主",
    "url": "movie-0546.html",
    "cover": "./96.jpg",
    "year": "2020",
    "region": "中国",
    "type": "剧集",
    "genre": "动作 / 奇幻 / 修仙",
    "tags": "动态漫画 重生 龙傲天 东方玄幻 逆袭"
  },
  {
    "title": "善良的夏吾冬",
    "url": "movie-0547.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "自闭症 藏族 牧区 治愈"
  },
  {
    "title": "身后仕",
    "url": "movie-0548.html",
    "cover": "./98.jpg",
    "year": "2012",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": "公务员 冥界 温情 手续"
  },
  {
    "title": "星河叛变",
    "url": "movie-0549.html",
    "cover": "./99.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作 / 惊悚",
    "tags": "太空歌剧 人工智能 政变 太空战"
  },
  {
    "title": "地狱无门",
    "url": "movie-0550.html",
    "cover": "./100.jpg",
    "year": "1980",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖， 奇幻， 动作",
    "tags": "徐克 cult 古典 人性"
  },
  {
    "title": "请让一让2000",
    "url": "movie-0551.html",
    "cover": "./101.jpg",
    "year": "2000",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧、爱情、都市",
    "tags": "千禧年 拥挤 缘分 疯狂 怀旧"
  },
  {
    "title": "五百万美元的大丈夫",
    "url": "movie-0552.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "香港 / 美国",
    "type": "电影",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": "黑帮 黑色幽默 契约精神"
  },
  {
    "title": "电器少女",
    "url": "movie-0553.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻/日常",
    "tags": "拟人化 治愈 合租 脑洞大开"
  },
  {
    "title": "地球：奇迹的一天",
    "url": "movie-0554.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片、自然、科普",
    "tags": "4K 动物 延时摄影 气候"
  },
  {
    "title": "龙泉路237号青春轶事",
    "url": "movie-0555.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春 / 剧情",
    "tags": "群像 城中村 90后 怀旧"
  },
  {
    "title": "藏獒情未了",
    "url": "movie-0556.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情家庭",
    "tags": "人与动物 忠诚 藏区 催泪"
  },
  {
    "title": "享受吧！罗马",
    "url": "movie-0557.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧, 爱情, 剧情",
    "tags": "美食 疗愈 喷泉许愿 人生重启"
  },
  {
    "title": "戏精宿舍",
    "url": "movie-0558.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 青春 / 校园",
    "tags": "宿舍生活 网红 直播 社恐 搞笑"
  },
  {
    "title": "歌剧理发师",
    "url": "movie-0559.html",
    "cover": "./109.jpg",
    "year": "2027",
    "region": "英国 / 法国",
    "type": "电影",
    "genre": "喜剧 / 悬疑 / 音乐剧",
    "tags": "改编名著 歌剧元素 伦敦暗黑 连环杀人"
  },
  {
    "title": "荣誉之季",
    "url": "movie-0560.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "运动，剧情，青春",
    "tags": "高中篮球 伤病 父子关系 小镇 绝杀"
  },
  {
    "title": "危险性直播",
    "url": "movie-0561.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 悬疑",
    "tags": "网络直播 社会讽刺 密室 极限反杀"
  },
  {
    "title": "冤鬼再见",
    "url": "movie-0562.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖, 喜剧, 同性",
    "tags": "都市传说 驱魔 灵异直播 搞笑"
  },
  {
    "title": "花蕊夫人",
    "url": "movie-0563.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 古装 / 爱情",
    "tags": "五代十国 传奇女性 宫斗 权谋"
  },
  {
    "title": "碎梦人生",
    "url": "movie-0564.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "tags": "梦境 解构 存在主义 非线性"
  },
  {
    "title": "香水2007",
    "url": "movie-0565.html",
    "cover": "./115.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "tags": "怀旧 连环案 气味"
  },
  {
    "title": "708090之深圳恋歌",
    "url": "movie-0566.html",
    "cover": "./116.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": "深圳 创业 代际 怀旧"
  },
  {
    "title": "谈酒说爱",
    "url": "movie-0567.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "爱情, 喜剧, 剧情",
    "tags": "精酿酒吧 失恋 醉酒坦白 一夜情变真爱 城市男女"
  },
  {
    "title": "海军特别年少兵",
    "url": "movie-0568.html",
    "cover": "./118.jpg",
    "year": "2001",
    "region": "日本",
    "type": "电影",
    "genre": "战争",
    "tags": "二战 少年兵 军舰 悲剧 反战"
  },
  {
    "title": "献给爱妻的歌",
    "url": "movie-0569.html",
    "cover": "./119.jpg",
    "year": "2012",
    "region": "英国",
    "type": "电影",
    "genre": "剧情，音乐",
    "tags": "老年 合唱团 丧偶 治愈"
  },
  {
    "title": "恐怖陷阱",
    "url": "movie-0570.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖，惊悚，密室",
    "tags": "陷阱屋 直播 极限求生 器官"
  },
  {
    "title": "行长 野崎修平",
    "url": "movie-0571.html",
    "cover": "./121.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 职场",
    "tags": "银行 不良债权 中小企业 正义 体制内反抗"
  },
  {
    "title": "权宠刁妃",
    "url": "movie-0572.html",
    "cover": "./122.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧（短剧）",
    "genre": "古装，甜宠，喜剧",
    "tags": "穿越 王妃 权谋 女频爽文"
  },
  {
    "title": "米奇欢乐多第五季",
    "url": "movie-0573.html",
    "cover": "./123.jpg",
    "year": "2026",
    "region": "美国",
    "type": "动画剧集",
    "genre": "喜剧、日常",
    "tags": "经典重制 无厘头 彩蛋密集 打破第四面墙"
  },
  {
    "title": "爱情公寓第一季",
    "url": "movie-0574.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市情景喜剧",
    "tags": "合租 年轻人 笑对生活 单元剧"
  },
  {
    "title": "恰克与巴克",
    "url": "movie-0575.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、公路、黑色幽默",
    "tags": "塑料兄弟 二手车 遗产争夺 假扮富豪"
  },
  {
    "title": "地球回音",
    "url": "movie-0576.html",
    "cover": "./126.jpg",
    "year": "2026",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "科幻 / 家庭",
    "tags": "时间循环 父女 末日 温情 烧脑"
  },
  {
    "title": "黄昏之恋",
    "url": "movie-0577.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情，剧情，青春",
    "tags": "高中毕业 傍晚电台 磁带录音 时间胶囊"
  },
  {
    "title": "仙王的日常生活第三季",
    "url": "movie-0578.html",
    "cover": "./128.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "搞笑 / 玄幻",
    "tags": "日常 修仙 校园 反差萌 国漫"
  },
  {
    "title": "鉴证实录",
    "url": "movie-0579.html",
    "cover": "./129.jpg",
    "year": "2019",
    "region": "中国",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪 / 法医",
    "tags": "女法医 冷案重启 连环凶杀 物证推理 师徒搭档"
  },
  {
    "title": "绝地枪王2",
    "url": "movie-0580.html",
    "cover": "./130.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作，战争",
    "tags": "抗战 狙击手 雪原"
  },
  {
    "title": "阴阳路10：宣言咒",
    "url": "movie-0581.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖惊悚",
    "tags": "都市传说 社交媒体 诅咒 誓言 罗生门"
  },
  {
    "title": "绑匪",
    "url": "movie-0582.html",
    "cover": "./132.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪 / 剧情",
    "tags": "绑架 反转 父爱 社会派"
  },
  {
    "title": "赎命24小时",
    "url": "movie-0583.html",
    "cover": "./133.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚, 犯罪",
    "tags": "倒计时 器官交易 极限救人"
  },
  {
    "title": "达利博尔",
    "url": "movie-0584.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "捷克",
    "type": "电影",
    "genre": "战争，剧情",
    "tags": "二战 儿童视角 孤独 音乐"
  },
  {
    "title": "秀逗小护士4",
    "url": "movie-0585.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "医疗喜剧",
    "tags": "护士 日常 搞笑 成长"
  },
  {
    "title": "人皮灯笼粤语",
    "url": "movie-0586.html",
    "cover": "./136.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 奇幻, 惊悚",
    "tags": "民俗恐怖 南洋邪术 粤语原声 港风回归"
  },
  {
    "title": "加菲猫2",
    "url": "movie-0587.html",
    "cover": "./137.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/动画",
    "tags": "加菲猫 猫咪 英伦 双胞胎"
  },
  {
    "title": "浴血突围1942",
    "url": "movie-0588.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争，历史，动作",
    "tags": "抗日战争 特种作战 绝境求生 兄弟情"
  },
  {
    "title": "美食无间",
    "url": "movie-0589.html",
    "cover": "./139.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧集",
    "genre": "剧情 / 悬疑 / 美食",
    "tags": "杀手 刑警 美食 双雄"
  },
  {
    "title": "初恋未满",
    "url": "movie-0590.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "初恋 遗憾 90年代 小城 暗恋"
  },
  {
    "title": "脆弱的英雄",
    "url": "movie-0591.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑剧情",
    "tags": "心理 反英雄 校园暴力 双面人生"
  },
  {
    "title": "凌天独尊",
    "url": "movie-0592.html",
    "cover": "./142.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装，仙侠，玄幻",
    "tags": "废材逆袭 宗门天才 上古血脉 修炼等级 打脸爽剧"
  },
  {
    "title": "绝密突围",
    "url": "movie-0593.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作, 战争, 悬疑",
    "tags": "特种兵 渗透 内鬼 海外行动"
  },
  {
    "title": "夏洛特眼中的简",
    "url": "movie-0594.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "传记, 剧情",
    "tags": "简·奥斯汀 姐妹 文学 历史"
  },
  {
    "title": "羞耻第一季",
    "url": "movie-0595.html",
    "cover": "./145.jpg",
    "year": "2015",
    "region": "挪威",
    "type": "电视剧",
    "genre": "青春、剧情、教育",
    "tags": "青少年 校园生活 LGBTQ+ 社交媒体"
  },
  {
    "title": "回到荒野",
    "url": "movie-0596.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "冒险 / 家庭",
    "tags": "野外求生 父子 狼孩 自然主义 治愈"
  },
  {
    "title": "情越万重山",
    "url": "movie-0597.html",
    "cover": "./147.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 冒险",
    "tags": "极限登山 绝症 遗愿清单 救援"
  },
  {
    "title": "牛角面包",
    "url": "movie-0598.html",
    "cover": "./148.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧，生活",
    "tags": "面包师 巴黎早晨 意外邂逅"
  },
  {
    "title": "我与丈夫及丈夫的男友",
    "url": "movie-0599.html",
    "cover": "./149.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情 / 家庭 / LGBTQ",
    "tags": "多元关系 同性 开放式婚姻 社会派 治愈"
  },
  {
    "title": "黑客",
    "url": "movie-0600.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪科技",
    "tags": "黑客 网络 攻防 溯源 正义"
  },
  {
    "title": "虎侠歼仇",
    "url": "movie-0601.html",
    "cover": "./1.jpg",
    "year": "1966",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 武侠",
    "tags": "黑白片 复仇 虎形拳"
  },
  {
    "title": "不要太期待世界末日",
    "url": "movie-0602.html",
    "cover": "./2.jpg",
    "year": "2023",
    "region": "罗马尼亚",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": "黑色幽默 社会讽刺 打工人 直播文化"
  },
  {
    "title": "街坊邻居",
    "url": "movie-0603.html",
    "cover": "./3.jpg",
    "year": "2002",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 家庭, 生活",
    "tags": "情景喜剧 市井生活 方言"
  },
  {
    "title": "魔犬",
    "url": "movie-0604.html",
    "cover": "./4.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": "狗 诅咒 小镇 血腥 超自然"
  },
  {
    "title": "青空 剧场版",
    "url": "movie-0605.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "青春, 奇幻",
    "tags": "治愈 毕业 蓝色 记忆"
  },
  {
    "title": "狄公灭鼠",
    "url": "movie-0606.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 古装",
    "tags": "狄仁杰 鼠患 连环案"
  },
  {
    "title": "神秘小镇",
    "url": "movie-0607.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "genre": "悬疑, 奇幻, 恐怖",
    "tags": "北欧小镇 失踪人口 全息投影 邪教献祭"
  },
  {
    "title": "成人式",
    "url": "movie-0608.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/剧情",
    "tags": "同学会 复仇 校园霸凌 反转"
  },
  {
    "title": "夜车",
    "url": "movie-0609.html",
    "cover": "./9.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "tags": "列车 一夜情 平行叙事 错过 时间循环"
  },
  {
    "title": "倚天屠龙记 下部",
    "url": "movie-0610.html",
    "cover": "./10.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠 / 动作 / 剧情",
    "tags": "屠狮大会 少林寺 明教 终极对决"
  },
  {
    "title": "迷路的大军",
    "url": "movie-0611.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "战争，悬疑",
    "tags": "二战 幽灵部队 超自然 失踪"
  },
  {
    "title": "戏子们：传闻操纵团",
    "url": "movie-0612.html",
    "cover": "./12.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 历史, 悬疑",
    "tags": "朝鲜王朝 舆论操控 底层反抗 反套路"
  },
  {
    "title": "深海利剑",
    "url": "movie-0613.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "军旅 / 动作 / 剧情",
    "tags": "潜艇 海军 热血 高科技战争 兄弟情"
  },
  {
    "title": "怒放的豆芽",
    "url": "movie-0614.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭，励志，剧情",
    "tags": "教育 单亲 创业 母爱 成长"
  },
  {
    "title": "情牵玫瑰园",
    "url": "movie-0615.html",
    "cover": "./15.jpg",
    "year": "1994",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情, 家庭",
    "tags": "豪门 身世之谜 继承人 花语 虐恋 复古"
  },
  {
    "title": "东北老炮儿2",
    "url": "movie-0616.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": "东北喜剧 老年热血 城乡结合部 退休江湖"
  },
  {
    "title": "温柔安静的女人们",
    "url": "movie-0617.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "女性群像 抑郁 母女 沉默的反抗 日常"
  },
  {
    "title": "玩家:暗影威胁",
    "url": "movie-0618.html",
    "cover": "./18.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 游戏改编",
    "tags": "VR游戏 暗影刺客 虚实结合 黑客"
  },
  {
    "title": "世界性爱奇趣录第四集",
    "url": "movie-0619.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "英国",
    "type": "纪录片",
    "genre": "纪录片, 社会, 人文",
    "tags": "性文化 人类学 奇闻 全球 科普"
  },
  {
    "title": "之后2",
    "url": "movie-0620.html",
    "cover": "./20.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": "青春 成长 爱而不得"
  },
  {
    "title": "歌台艳史",
    "url": "movie-0621.html",
    "cover": "./21.jpg",
    "year": "2017",
    "region": "新加坡, 马来西亚",
    "type": "电影",
    "genre": "剧情, 歌舞, 历史",
    "tags": "歌台 伶人 时代变迁"
  },
  {
    "title": "缅因姐妹",
    "url": "movie-0622.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 公路",
    "tags": "姐妹情 治愈 小镇生活"
  },
  {
    "title": "天使宝贝法兰丝",
    "url": "movie-0623.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "tags": "家庭 成长 亲情"
  },
  {
    "title": "我们唱着的歌",
    "url": "movie-0624.html",
    "cover": "./24.jpg",
    "year": "2023",
    "region": "新加坡 / 马来西亚",
    "type": "电影",
    "genre": "音乐 / 剧情 / 青春",
    "tags": "民歌 校园 时代变迁 合唱团"
  },
  {
    "title": "她与她的自画像",
    "url": "movie-0625.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情/同性",
    "tags": "艺术家传记 自我认同 跨性别"
  },
  {
    "title": "你好，树公主",
    "url": "movie-0626.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 爱情",
    "tags": "古装 精灵 甜虐 环境保护 前世今生"
  },
  {
    "title": "梦游人生",
    "url": "movie-0627.html",
    "cover": "./27.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑， 奇幻",
    "tags": "梦中梦 平行人生 身份认知 循环嵌套 哲学惊悚"
  },
  {
    "title": "爱上笨男人",
    "url": "movie-0628.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 喜剧",
    "tags": "姐弟恋 反差萌 职场 契约恋爱"
  },
  {
    "title": "无光岁月",
    "url": "movie-0629.html",
    "cover": "./29.jpg",
    "year": "2018",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情 / 战争 / 历史",
    "tags": "二战 盲人 抵抗运动 黑白影像"
  },
  {
    "title": "乱世桃花",
    "url": "movie-0630.html",
    "cover": "./30.jpg",
    "year": "1997",
    "region": "中国",
    "type": "电影",
    "genre": "爱情, 战争",
    "tags": "民国 虐恋 戏班"
  },
  {
    "title": "求爱行动",
    "url": "movie-0631.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "tags": "社恐追爱 网恋奔现 台式小清新"
  },
  {
    "title": "容基耶尔女士",
    "url": "movie-0632.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 历史， 爱情",
    "tags": "贵族 复仇 婚姻 18世纪"
  },
  {
    "title": "终极女郎",
    "url": "movie-0633.html",
    "cover": "./33.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 犯罪",
    "tags": "女特工 复仇 黑帮 爽剧"
  },
  {
    "title": "谁来为我摘月亮",
    "url": "movie-0634.html",
    "cover": "./34.jpg",
    "year": "2019",
    "region": "阿根廷",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "tags": "魔幻现实主义 治愈 星辰传说 寻爱之旅"
  },
  {
    "title": "燃情克利夫兰第三季",
    "url": "movie-0635.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧、情景、生活",
    "tags": "闺蜜日常 中年女性 毒舌台词 洛杉矶vs克利夫兰"
  },
  {
    "title": "蝶变计划",
    "url": "movie-0636.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 科幻, 惊悚",
    "tags": "基因突变 特工 反乌托邦 女性力量"
  },
  {
    "title": "骨肉无偿",
    "url": "movie-0637.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪, 家庭",
    "tags": "器官移植 黑市 兄弟反目"
  },
  {
    "title": "梦想职达2012",
    "url": "movie-0638.html",
    "cover": "./38.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 职场",
    "tags": "北漂 求职 怀旧 现实"
  },
  {
    "title": "解决师粤语",
    "url": "movie-0639.html",
    "cover": "./39.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "悬疑、动作",
    "tags": "职业杀手 黑吃黑 师徒 卧底"
  },
  {
    "title": "姜戈",
    "url": "movie-0640.html",
    "cover": "./40.jpg",
    "year": "1966",
    "region": "意大利",
    "type": "电影",
    "genre": "西部，动作",
    "tags": "棺材 快枪手 南北战争 小镇复仇"
  },
  {
    "title": "橘子不是唯一的水果第一季",
    "url": "movie-0641.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 同性 / 成长",
    "tags": "宗教家庭 少女觉醒 文学改编"
  },
  {
    "title": "霹雳皇龙纪",
    "url": "movie-0642.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "剧集",
    "genre": "武侠, 奇幻, 布袋戏",
    "tags": "霹雳 江湖 争霸 神话 宿命"
  },
  {
    "title": "新扎师妹2",
    "url": "movie-0643.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，动作",
    "tags": "警匪 卧底 乌龙"
  },
  {
    "title": "黑仔刑警",
    "url": "movie-0644.html",
    "cover": "./44.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "tags": "衰神 破案 暴力美学"
  },
  {
    "title": "菲洲征蛮记",
    "url": "movie-0645.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险",
    "tags": "雇佣兵 丛林 野兽 营救"
  },
  {
    "title": "权力的游戏第四季",
    "url": "movie-0646.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情 / 奇幻 / 战争",
    "tags": "史诗 多线叙事 权力斗争 龙 叛变"
  },
  {
    "title": "205:恐惧室",
    "url": "movie-0647.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": "密室 心理恐怖 反转 限时"
  },
  {
    "title": "复仇者联盟4",
    "url": "movie-0648.html",
    "cover": "./48.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "动作、科幻、奇幻",
    "tags": "漫威 终局之战 穿越时空 英雄集结 催泪结局"
  },
  {
    "title": "野兽男孩",
    "url": "movie-0649.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作、科幻、青春",
    "tags": "兽化士兵 校园卧底 暴力美学"
  },
  {
    "title": "关键奇迹",
    "url": "movie-0650.html",
    "cover": "./50.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 体育 / 励志",
    "tags": "篮球 真实改编 永不放弃 热血 高中联赛"
  },
  {
    "title": "七年之痒",
    "url": "movie-0651.html",
    "cover": "./51.jpg",
    "year": "1955",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、爱情、经典",
    "tags": "梦露经典 吹裙子的风 中年危机 幻想出轨"
  },
  {
    "title": "无间追缉",
    "url": "movie-0652.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪， 动作， 悬疑",
    "tags": "双雄对决 猫鼠游戏 连环杀手 复仇"
  },
  {
    "title": "光影之妓",
    "url": "movie-0653.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 艺术 / 历史",
    "tags": "电影史 默片女星 男性凝视 自我觉醒"
  },
  {
    "title": "再向虎山行",
    "url": "movie-0654.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，犯罪，剧情",
    "tags": "卧底 黑帮 兄弟情 港式枪战 复仇"
  },
  {
    "title": "狂飙掟煲团",
    "url": "movie-0655.html",
    "cover": "./55.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": "港式无厘头 分手大师 乌龙任务"
  },
  {
    "title": "包青天之诡墓空棺",
    "url": "movie-0656.html",
    "cover": "./56.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 悬疑 / 惊悚",
    "tags": "盗墓 空棺 诅咒 家族秘密"
  },
  {
    "title": "推小车的人",
    "url": "movie-0657.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 家庭",
    "tags": "父爱 拾荒 高考 底层 救赎"
  },
  {
    "title": "科克维尔的奇迹",
    "url": "movie-0658.html",
    "cover": "./58.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 历史, 宗教",
    "tags": "真实事件 校园枪击 信仰之力 绑匪赎罪"
  },
  {
    "title": "毛侠粤语",
    "url": "movie-0659.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 动作",
    "tags": "市井英雄 黑色幽默 草根逆袭 街头正义"
  },
  {
    "title": "种计粤语",
    "url": "movie-0660.html",
    "cover": "./60.jpg",
    "year": "1984",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑犯罪",
    "tags": "高智商犯罪 遗产 反杀"
  },
  {
    "title": "青年乌兰夫",
    "url": "movie-0661.html",
    "cover": "./61.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史, 传记",
    "tags": "革命 蒙汉团结 求学之路 信仰"
  },
  {
    "title": "太太从军去",
    "url": "movie-0662.html",
    "cover": "./62.jpg",
    "year": "1978",
    "region": "台湾",
    "type": "电影",
    "genre": "喜剧战争",
    "tags": "眷村 女扮男裝 烏龍軍營"
  },
  {
    "title": "第二梦",
    "url": "movie-0663.html",
    "cover": "./63.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻，古装",
    "tags": "戏班 梦境 替身 执念"
  },
  {
    "title": "企鹅宝贝2：极地的呼唤",
    "url": "movie-0664.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "法国, 美国",
    "type": "电影",
    "genre": "纪录片, 家庭, 冒险",
    "tags": "帝企鹅 气候变化 迁徙 母子亲情 极地风光"
  },
  {
    "title": "大街小瘪三",
    "url": "movie-0665.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": "底层 黑色幽默 街头 方言"
  },
  {
    "title": "蝙蝠侠与罗宾",
    "url": "movie-0666.html",
    "cover": "./66.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作、超级英雄、犯罪",
    "tags": "蝙蝠侠 罗宾 双面人 哥谭市 师徒反目"
  },
  {
    "title": "婚礼第二夜",
    "url": "movie-0667.html",
    "cover": "./67.jpg",
    "year": "2017",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧, 爱情, 剧情",
    "tags": "新婚 秘密 失忆 误会 治愈"
  },
  {
    "title": "花花性事",
    "url": "movie-0668.html",
    "cover": "./68.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 喜剧, 情色",
    "tags": "都市男女 性观念 单元剧 轻松"
  },
  {
    "title": "如果墙会说话2",
    "url": "movie-0669.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情 / 奇幻",
    "tags": "都市寓言 女性群像 旧楼出租 隔代和解 港岛情怀"
  },
  {
    "title": "号外！号外！",
    "url": "movie-0670.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑，犯罪，历史",
    "tags": "报纸 连环杀手 六十年代 记者"
  },
  {
    "title": "后宫：帝王之妾",
    "url": "movie-0671.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "历史, 剧情",
    "tags": "宫斗 禁忌之恋 视觉系"
  },
  {
    "title": "鬼宫",
    "url": "movie-0672.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 民俗",
    "tags": "废弃皇宫 古曼童 还愿 摄影队"
  },
  {
    "title": "索女·丧尸·机关枪",
    "url": "movie-0673.html",
    "cover": "./73.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 恐怖 / 喜剧",
    "tags": "丧尸 黑色幽默 女性主角 枪战 B级片"
  },
  {
    "title": "天使的眼睛第2季",
    "url": "movie-0674.html",
    "cover": "./74.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻/悬疑/犯罪",
    "tags": "超能力 宿敌 特警 瞳术"
  },
  {
    "title": "奔向太阳粤语",
    "url": "movie-0675.html",
    "cover": "./75.jpg",
    "year": "1989",
    "region": "香港",
    "type": "电视剧",
    "genre": "剧情, 家庭",
    "tags": "励志 经典 奋斗 粤语原声"
  },
  {
    "title": "第五空间",
    "url": "movie-0676.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": "虚拟现实 意识上传 密室逃脱 高概念 反乌托邦"
  },
  {
    "title": "彼得的龙",
    "url": "movie-0677.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "美国 / 澳大利亚",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": "重制版 暗黑童话 环保 龙 孤独"
  },
  {
    "title": "巴黎的天空",
    "url": "movie-0678.html",
    "cover": "./78.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": "浪漫 艺术 命运 巴黎 邂逅"
  },
  {
    "title": "正好的我们",
    "url": "movie-0679.html",
    "cover": "./79.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春， 爱情， 校园",
    "tags": "双向暗恋 治愈系 学霸x学渣 高甜"
  },
  {
    "title": "喋血丹盟",
    "url": "movie-0680.html",
    "cover": "./80.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": "卧底 兄弟反目 暴力美学"
  },
  {
    "title": "怪兽高中",
    "url": "movie-0681.html",
    "cover": "./81.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻 / 喜剧",
    "tags": "校园 变身 搞笑 青春"
  },
  {
    "title": "超能觉醒",
    "url": "movie-0682.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻",
    "tags": "超级英雄 街头暴力 反套路 黑马漫改"
  },
  {
    "title": "阿尔玛和奥斯卡",
    "url": "movie-0683.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "爱情 / 战争",
    "tags": "二战背景 禁忌之恋 音乐救赎"
  },
  {
    "title": "我才不要恋爱呢",
    "url": "movie-0684.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "浪漫喜剧",
    "tags": "反恋爱 契约 职场 真香"
  },
  {
    "title": "乘船而去",
    "url": "movie-0685.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "长江客轮 临终告别 父子和解"
  },
  {
    "title": "赌徒5150",
    "url": "movie-0686.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪、心理惊悚",
    "tags": "高利贷 极限赌局 人格分裂 反转"
  },
  {
    "title": "艾洛佛林的冒险",
    "url": "movie-0687.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 家庭",
    "tags": "时间跳跃 祖孙 钟表"
  },
  {
    "title": "呼吸之间",
    "url": "movie-0688.html",
    "cover": "./88.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 医疗",
    "tags": "渐冻症 医患 夫妻 放弃治疗"
  },
  {
    "title": "威震四方",
    "url": "movie-0689.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "动作 / 剧情",
    "tags": "泰拳 复仇 乡村 父子 暴力美学"
  },
  {
    "title": "豚鼠特攻队",
    "url": "movie-0690.html",
    "cover": "./90.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 动画 / 家庭",
    "tags": "特工动物 高科技装备 地底阴谋 团队作战"
  },
  {
    "title": "刁蛮娇妻苏小妹",
    "url": "movie-0691.html",
    "cover": "./91.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "古装喜剧",
    "tags": "宋朝 先婚后爱 才女 甜辣 家族斗"
  },
  {
    "title": "快闪杀手",
    "url": "movie-0692.html",
    "cover": "./92.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪 / 喜剧 / 动作",
    "tags": "精准刺杀 社交媒体 病毒营销 黑色幽默 替天行道"
  },
  {
    "title": "战利品第二季",
    "url": "movie-0693.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧, 剧情",
    "tags": "女富豪 慈善 黑色幽默"
  },
  {
    "title": "大雄的南极冰天雪地大冒险",
    "url": "movie-0694.html",
    "cover": "./94.jpg",
    "year": "2017",
    "region": "日本",
    "type": "动画电影",
    "genre": "冒险， 科幻， 亲情",
    "tags": "哆啦A梦 南极 冰下遗迹"
  },
  {
    "title": "猎场",
    "url": "movie-0695.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 刑侦 / 心理",
    "tags": "连环杀手 心理博弈 模拟画像 暗黑美学"
  },
  {
    "title": "象宫龙虎斗",
    "url": "movie-0696.html",
    "cover": "./96.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": "港产片 赌场混战 双雄戏 黑吃黑 象宫夜总会"
  },
  {
    "title": "海豚的故事2",
    "url": "movie-0697.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "家庭，剧情，冒险",
    "tags": "动物保护 海洋馆 治愈系"
  },
  {
    "title": "印度艳后",
    "url": "movie-0698.html",
    "cover": "./98.jpg",
    "year": "2026",
    "region": "印度",
    "type": "电影",
    "genre": "历史, 爱情, 战争, 歌舞",
    "tags": "史诗 宫廷 女性力量 王后"
  },
  {
    "title": "与神同行的少年",
    "url": "movie-0699.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情、青春、奇幻",
    "tags": "神学院 质疑信仰 友谊 奇迹"
  },
  {
    "title": "暴雨",
    "url": "movie-0700.html",
    "cover": "./100.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "连环杀手 暴风雪山庄 气象学 心理博弈"
  },
  {
    "title": "猎魔人：制作特辑",
    "url": "movie-0701.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集 / 特别篇",
    "genre": "纪录片 / 奇幻",
    "tags": "幕后 特效化妆 动作设计 花絮"
  },
  {
    "title": "四个孩子走进银行",
    "url": "movie-0702.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": "儿童 犯罪 反转 高智商 密室"
  },
  {
    "title": "摇滚青春",
    "url": "movie-0703.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、音乐、家庭",
    "tags": "校园乐队 代际冲突 老年摇滚 梦想传承"
  },
  {
    "title": "三個光頭佬",
    "url": "movie-0704.html",
    "cover": "./104.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "tags": "光头 乌龙 兄弟情 港式无厘头 绑架"
  },
  {
    "title": "我是海鸥",
    "url": "movie-0705.html",
    "cover": "./105.jpg",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 文艺",
    "tags": "契诃夫 戏中戏 抑郁症 西伯利亚"
  },
  {
    "title": "月光宫殿",
    "url": "movie-0706.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 古装",
    "tags": "宫斗 穿越 王室 诅咒"
  },
  {
    "title": "她对星星歌唱",
    "url": "movie-0707.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情，家庭，奇幻",
    "tags": "自闭症 亲情 治愈 童话 音乐"
  },
  {
    "title": "世纪大毒杀",
    "url": "movie-0708.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "犯罪, 历史, 悬疑",
    "tags": "真实事件改编 投毒 冷战 科学探案"
  },
  {
    "title": "高原",
    "url": "movie-0709.html",
    "cover": "./109.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 文艺",
    "tags": "藏族文化 生态移民 母子情 牦牛与信仰"
  },
  {
    "title": "醉乡艳史",
    "url": "movie-0710.html",
    "cover": "./110.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情",
    "tags": "香港 夜总会 江湖 女性"
  },
  {
    "title": "怪怪屋",
    "url": "movie-0711.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑",
    "tags": "童年 冒险 超自然 邻里 单元剧"
  },
  {
    "title": "冰血暴第三季",
    "url": "movie-0712.html",
    "cover": "./112.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集 (10集)",
    "genre": "犯罪 / 剧情 / 黑色幽默",
    "tags": "科恩兄弟风格 明尼苏达 罪案连环"
  },
  {
    "title": "世界属于你",
    "url": "movie-0713.html",
    "cover": "./113.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "犯罪，喜剧",
    "tags": "黑色幽默 劫匪 母子关系 荒诞"
  },
  {
    "title": "她不知道那些鸟的名字",
    "url": "movie-0714.html",
    "cover": "./114.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情，悬疑，女性",
    "tags": "不伦恋 谎言婚姻 鸟类隐喻 情感操控 多重反转"
  },
  {
    "title": "少林寺弟子",
    "url": "movie-0715.html",
    "cover": "./115.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "动作, 剧情, 武侠",
    "tags": "少林功夫 南北少林 门派纷争 武学传承"
  },
  {
    "title": "芒种",
    "url": "movie-0716.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺剧情",
    "tags": "农村留守 节气 母女关系 土地情结"
  },
  {
    "title": "花间一倾城",
    "url": "movie-0717.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装悬疑",
    "tags": "大唐 花艺 女仵作 探案"
  },
  {
    "title": "大肢解",
    "url": "movie-0718.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 悬疑, 犯罪",
    "tags": "分尸 记忆移植 变态杀手 高科技犯罪 血腥美学"
  },
  {
    "title": "湾湾暖辰光",
    "url": "movie-0719.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "台湾",
    "type": "剧集",
    "genre": "家庭 / 温情",
    "tags": "乡土 传承 美食 治愈"
  },
  {
    "title": "零号带原者",
    "url": "movie-0720.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "科幻 / 惊悚 / 悬疑",
    "tags": "丧尸变异 免疫者 阴谋论 医疗惊悚"
  },
  {
    "title": "瓦德勒",
    "url": "movie-0721.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 历史",
    "tags": "二战 人性 反思"
  },
  {
    "title": "孤胆保镖",
    "url": "movie-0722.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 犯罪",
    "tags": "硬汉 复仇 枪战"
  },
  {
    "title": "奶娘",
    "url": "movie-0723.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚， 悬疑， 民俗",
    "tags": "民国奇案 母性 婴灵 封建迷信"
  },
  {
    "title": "让爱飞翔",
    "url": "movie-0724.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 儿童 / 运动",
    "tags": "乡村 滑翔伞 留守儿童 梦想"
  },
  {
    "title": "两个只能活一个",
    "url": "movie-0725.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "犯罪, 悬疑",
    "tags": "密室 赌博 人性"
  },
  {
    "title": "驴得水",
    "url": "movie-0726.html",
    "cover": "./126.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": "黑色幽默 民国 讽刺 人性"
  },
  {
    "title": "小马宝莉：那部电影",
    "url": "movie-0727.html",
    "cover": "./127.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "动画奇幻",
    "tags": "友谊 魔法 冒险 音乐剧 合家欢"
  },
  {
    "title": "艳娃传",
    "url": "movie-0728.html",
    "cover": "./128.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 传记, 犯罪",
    "tags": "艳星 黑帮 70年代 女权 真实事件改编"
  },
  {
    "title": "火！",
    "url": "movie-0729.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "灾难、剧情、悬疑",
    "tags": "森林大火 人性试炼 灾难群像 环境议题"
  },
  {
    "title": "黑色弹珠",
    "url": "movie-0730.html",
    "cover": "./130.jpg",
    "year": "2012",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "tags": "童年创伤 友情 秘密 反转结局"
  },
  {
    "title": "罗密欧与朱丽叶1936",
    "url": "movie-0731.html",
    "cover": "./131.jpg",
    "year": "1936",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": "莎士比亚 经典改编 悲剧 复古"
  },
  {
    "title": "霹雳娇娃：全速进攻",
    "url": "movie-0732.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 喜剧 / 冒险",
    "tags": "女性特工 全球任务 高科技 飙车 姐妹情"
  },
  {
    "title": "成年人的友谊",
    "url": "movie-0733.html",
    "cover": "./133.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情 / 喜剧",
    "tags": "社会人 友情 中年人 温暖"
  },
  {
    "title": "中南海保镳",
    "url": "movie-0734.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/悬疑",
    "tags": "贴身护卫 政治阴谋 硬核打斗"
  },
  {
    "title": "罗曼蒂克大饭店",
    "url": "movie-0735.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电视剧",
    "genre": "剧情, 爱情",
    "tags": "酒店风云 多线叙事 法式优雅"
  },
  {
    "title": "狼牙魔咒",
    "url": "movie-0736.html",
    "cover": "./136.jpg",
    "year": "2027",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 奇幻",
    "tags": "民俗怪谈 诅咒反噬 山村祭祀"
  },
  {
    "title": "妖刀传",
    "url": "movie-0737.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影 (动画)",
    "genre": "奇幻, 动作",
    "tags": "玄幻 刀剑 复仇 宿命 国产动画"
  },
  {
    "title": "兰花香",
    "url": "movie-0738.html",
    "cover": "./138.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "年代 / 爱情",
    "tags": "民国 香水 家族恩怨 虐恋 重生"
  },
  {
    "title": "瑞雪飘飘",
    "url": "movie-0739.html",
    "cover": "./139.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭, 年代, 剧情",
    "tags": "知青 返城 岁月"
  },
  {
    "title": "反恐追缉令",
    "url": "movie-0740.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "动作 / 悬疑 / 惊悚",
    "tags": "反恐 卧底 间谍游戏 印度英雄 爆炸"
  },
  {
    "title": "母女争风",
    "url": "movie-0741.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭，喜剧，剧情",
    "tags": "母女 重组家庭 妒忌 和解 烘焙"
  },
  {
    "title": "激情犯罪",
    "url": "movie-0742.html",
    "cover": "./142.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "剧情犯罪",
    "tags": "悬疑推理 情感纠葛 庭审戏 蛇蝎美人"
  },
  {
    "title": "柒两人生",
    "url": "movie-0743.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 奇幻",
    "tags": "职场内卷 灵魂互换 人生重置 黑色幽默"
  },
  {
    "title": "风云决",
    "url": "movie-0744.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "动作， 武侠， 奇幻",
    "tags": "漫画改编 宿命 兄弟情 特效"
  },
  {
    "title": "毒沼亡魂",
    "url": "movie-0745.html",
    "cover": "./145.jpg",
    "year": "2014",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖、剧情",
    "tags": "乡村邪教 蛊术 环境污染 因果报应 民俗恐怖"
  },
  {
    "title": "销魂天师之古堡惊魂",
    "url": "movie-0746.html",
    "cover": "./146.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 喜剧 / 情色",
    "tags": "僵尸 天师 古堡 港式幽默 软色情"
  },
  {
    "title": "盗皇陵",
    "url": "movie-0747.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 冒险, 悬疑",
    "tags": "盗墓 机关术 家族恩怨 历史谜团"
  },
  {
    "title": "又一个星期五",
    "url": "movie-0748.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "时间循环 家庭噩梦 心理恐怖 密室逃脱"
  },
  {
    "title": "棺姬嘉依卡",
    "url": "movie-0749.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画, 奇幻, 冒险",
    "tags": "战斗 棺材 兄妹 魔法 废土"
  },
  {
    "title": "瓦尔蒙",
    "url": "movie-0750.html",
    "cover": "./150.jpg",
    "year": "1989",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 情色",
    "tags": "古典文学改编 危险关系 贵族堕落 悲剧收场"
  },
  {
    "title": "给茱丽叶的信",
    "url": "movie-0751.html",
    "cover": "./1.jpg",
    "year": "2023",
    "region": "意大利 / 美国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "书信 时间错位 浪漫"
  },
  {
    "title": "偶然的田园日记",
    "url": "movie-0752.html",
    "cover": "./2.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情，治愈，爱情",
    "tags": "律师返乡 农村生活 邻里温情 警察故事"
  },
  {
    "title": "五虎将之决裂",
    "url": "movie-0753.html",
    "cover": "./3.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、犯罪、剧情",
    "tags": "兄弟 背叛 黑帮 枪战"
  },
  {
    "title": "不死之人",
    "url": "movie-0754.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚",
    "tags": "永生实验 伦理困境 身份认同 反转结局"
  },
  {
    "title": "目标一",
    "url": "movie-0755.html",
    "cover": "./5.jpg",
    "year": "2026",
    "region": "法国 / 加拿大",
    "type": "电影",
    "genre": "动作 / 惊悚 / 政治",
    "tags": "狙击手 跨国追杀 秘密行动 道德困境 双面间谍"
  },
  {
    "title": "神枪客",
    "url": "movie-0756.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "西部，动作，惊悚",
    "tags": "枪手 复仇 小镇 快枪 孤胆"
  },
  {
    "title": "再生时间",
    "url": "movie-0757.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 爱情",
    "tags": "时间循环 记忆移植 伦理 日系美学"
  },
  {
    "title": "爱，死亡和机器人第一季",
    "url": "movie-0758.html",
    "cover": "./8.jpg",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 动画, 奇幻",
    "tags": "成人动画 短片集 寓言"
  },
  {
    "title": "命运快车粤语",
    "url": "movie-0759.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "香港",
    "type": "剧集",
    "genre": "剧情 / 奇幻 / 温情",
    "tags": "出租车 穿越 港味 单元故事"
  },
  {
    "title": "女高怪谈5：结伴自杀",
    "url": "movie-0760.html",
    "cover": "./10.jpg",
    "year": "2009",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": "校园 诅咒 友谊 自杀 轮回"
  },
  {
    "title": "玉米田的孩子：逃亡",
    "url": "movie-0761.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": "邪教 血腥 逃亡 经典改编 生存"
  },
  {
    "title": "粗犷派建筑师",
    "url": "movie-0762.html",
    "cover": "./12.jpg",
    "year": "2023",
    "region": "德国 / 波兰",
    "type": "电影",
    "genre": "剧情 / 传记",
    "tags": "粗犷主义 冷战时期 艺术与政治 建筑美学"
  },
  {
    "title": "变形金刚08动画版第一季",
    "url": "movie-0763.html",
    "cover": "./13.jpg",
    "year": "2008",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 动作 / 机甲",
    "tags": "复古画风 青春化 威震天复活 地球人搭档"
  },
  {
    "title": "豪客",
    "url": "movie-0764.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪、剧情",
    "tags": "赌场 黑帮 兄弟情 牺牲 港味"
  },
  {
    "title": "杀之恋",
    "url": "movie-0765.html",
    "cover": "./15.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，悬疑，惊悚",
    "tags": "病娇 危险关系 反转 宿命"
  },
  {
    "title": "以父亲的名义",
    "url": "movie-0766.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "父女 法律 平权 赚泪"
  },
  {
    "title": "地狱公路",
    "url": "movie-0767.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": "公路电影 恶魔契约 加油站 西部哥特 限时生存"
  },
  {
    "title": "中华熊猫",
    "url": "movie-0768.html",
    "cover": "./18.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动画",
    "tags": "熊猫 功夫 中医 搞笑 国粹"
  },
  {
    "title": "适婚女郎",
    "url": "movie-0769.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 生活",
    "tags": "三十岁 婚恋压力 独立女性"
  },
  {
    "title": "夜夜伴肥娇",
    "url": "movie-0770.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，喜剧",
    "tags": "胖女孩 自信 夜店 姐弟恋"
  },
  {
    "title": "最后的嬉皮",
    "url": "movie-0771.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "tags": "嬉皮士 老年 音乐治愈"
  },
  {
    "title": "正邪不两立",
    "url": "movie-0772.html",
    "cover": "./22.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作、惊悚",
    "tags": "双雄 警察 杀手 道德困境 飙车"
  },
  {
    "title": "家和万事兴",
    "url": "movie-0773.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 家庭",
    "tags": "家庭群像 遗产 反转 黑色幽默 亲情"
  },
  {
    "title": "变脸迷情",
    "url": "movie-0774.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": "换脸手术 卧底 身份认同 黑帮复仇"
  },
  {
    "title": "残酷青春",
    "url": "movie-0775.html",
    "cover": "./25.jpg",
    "year": "2007",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": "少年犯 教育缺失 小镇青年 写实主义 残酷物语"
  },
  {
    "title": "玩命杀手",
    "url": "movie-0776.html",
    "cover": "./26.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚",
    "tags": "反英雄 高速追杀 黑色幽默 器官交易"
  },
  {
    "title": "圆桌武士",
    "url": "movie-0777.html",
    "cover": "./27.jpg",
    "year": "2021",
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻 / 动作",
    "tags": "亚瑟王传说 骑士精神 魔法 史诗 颠覆性改编"
  },
  {
    "title": "暮光之城：破晓Ⅰ",
    "url": "movie-0778.html",
    "cover": "./28.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "tags": "吸血鬼 狼人 婚礼 怀孕 贝拉"
  },
  {
    "title": "考特尼斯医生的旅程",
    "url": "movie-0779.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 冒险, 传记",
    "tags": "医疗 19世纪 公路电影 理想主义"
  },
  {
    "title": "乐高大电影",
    "url": "movie-0780.html",
    "cover": "./30.jpg",
    "year": "2014",
    "region": "美国 / 丹麦",
    "type": "电影",
    "genre": "喜剧 / 动画 / 冒险",
    "tags": "乐高 积木 想象力 反乌托邦"
  },
  {
    "title": "附身",
    "url": "movie-0781.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "genre": "恐怖, 悬疑",
    "tags": "灵媒 仪式 家族秘密 民俗"
  },
  {
    "title": "光荣战役",
    "url": "movie-0782.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 历史 / 动作",
    "tags": "抗美援朝 狙击手 兄弟连"
  },
  {
    "title": "阿菠萝计划",
    "url": "movie-0783.html",
    "cover": "./33.jpg",
    "year": "2022",
    "region": "中国内地",
    "type": "电影",
    "genre": "喜剧 / 科幻",
    "tags": "外星人 精神病院 荒诞 黑色幽默 山寨科幻"
  },
  {
    "title": "冰海战记第一季",
    "url": "movie-0784.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "历史，冒险",
    "tags": "维京 复仇 史诗"
  },
  {
    "title": "全心交融",
    "url": "movie-0785.html",
    "cover": "./35.jpg",
    "year": "2026",
    "region": "加拿大 / 美国",
    "type": "电影",
    "genre": "科幻 / 爱情",
    "tags": "脑机接口 意识上传 伦理 虚实"
  },
  {
    "title": "选拔屋：猎头的做派",
    "url": "movie-0786.html",
    "cover": "./36.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电视剧",
    "genre": "职场 / 剧情",
    "tags": "猎头 商战 人性 日剧"
  },
  {
    "title": "新扎师妹粤语",
    "url": "movie-0787.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "tags": "警匪 卧底 港味"
  },
  {
    "title": "丛林野兽",
    "url": "movie-0788.html",
    "cover": "./38.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "tags": "存在主义 文学改编 等待 酒店 时光流逝"
  },
  {
    "title": "回光奏鸣曲",
    "url": "movie-0789.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情",
    "tags": "临终关怀 音乐疗愈 救赎"
  },
  {
    "title": "油毡",
    "url": "movie-0790.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 家庭 / 悬疑",
    "tags": "拆迁 黑钱 伪装 邻居 地下世界"
  },
  {
    "title": "怪血",
    "url": "movie-0791.html",
    "cover": "./41.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻 / 惊悚",
    "tags": "基因改造 血液病 家族秘密 器官农场 生物伦理"
  },
  {
    "title": "穿着鞋子的贝壳马塞尔",
    "url": "movie-0792.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 奇幻",
    "tags": "定格动画 治愈 微小世界 创意"
  },
  {
    "title": "艳妓春色",
    "url": "movie-0793.html",
    "cover": "./43.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装， 剧情",
    "tags": "青楼女性 晚清背景 女性互助 家国情怀 非典型女主"
  },
  {
    "title": "金钱强强滚",
    "url": "movie-0794.html",
    "cover": "./44.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧 / 剧情",
    "tags": "家族企业 台语 黑色幽默"
  },
  {
    "title": "莫斯科离大同不远",
    "url": "movie-0795.html",
    "cover": "./45.jpg",
    "year": "2022",
    "region": "中国大陆/俄罗斯",
    "type": "电影",
    "genre": "公路喜剧",
    "tags": "跨国恋情 文化碰撞 中年寻爱 幽默温情"
  },
  {
    "title": "青春之旅",
    "url": "movie-0796.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画剧集",
    "genre": "青春治愈",
    "tags": "公路片 校园 友情 成长"
  },
  {
    "title": "小鸟之翼第二季",
    "url": "movie-0797.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "genre": "运动， 剧情， 热血",
    "tags": "高尔夫 天才少女 复仇 友谊 职业竞技"
  },
  {
    "title": "儿女传奇之选美",
    "url": "movie-0798.html",
    "cover": "./48.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "家庭喜剧",
    "tags": "选美 母女代际 整容风波 县城故事 女性自爱"
  },
  {
    "title": "剑来",
    "url": "movie-0799.html",
    "cover": "./49.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 武侠 / 奇幻",
    "tags": "剑气 宗门 逆袭"
  },
  {
    "title": "爸爸去哪儿第四季",
    "url": "movie-0800.html",
    "cover": "./50.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀 / 家庭",
    "tags": "亲子 明星爸爸 户外冒险 代际互动"
  },
  {
    "title": "在西部的星空下",
    "url": "movie-0801.html",
    "cover": "./51.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺、公路、爱情",
    "tags": "西部风光 灵魂伴侣 沉默"
  },
  {
    "title": "明天，最后一天",
    "url": "movie-0802.html",
    "cover": "./52.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情，奇幻，家庭",
    "tags": "临终关怀 亲情和解 催泪 反转"
  },
  {
    "title": "高丽青瓷",
    "url": "movie-0803.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "古装悬疑",
    "tags": "瓷窑 王室秘辛 修复师 釉色杀人"
  },
  {
    "title": "蝙蝠女侠第一季",
    "url": "movie-0804.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作, 科幻, 冒险",
    "tags": "女英雄 哥谭 LGBT 斗篷"
  },
  {
    "title": "异形：隔离第一季",
    "url": "movie-0805.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/恐怖",
    "tags": "太空 生存 密闭空间 惊悚"
  },
  {
    "title": "血豹",
    "url": "movie-0806.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪 / 动作",
    "tags": "警匪 卧底 硬汉 枪战 兄弟情"
  },
  {
    "title": "东方秃鹰",
    "url": "movie-0807.html",
    "cover": "./57.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，战争",
    "tags": "洪金宝 越战 敢死队 暴力美学"
  },
  {
    "title": "跑路之王",
    "url": "movie-0808.html",
    "cover": "./58.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 动作, 犯罪",
    "tags": "周星驰式无厘头 黑帮卧底 逃脱大师 港式笑料"
  },
  {
    "title": "我们的田野",
    "url": "movie-0809.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": "知青 下乡 青春 时代伤痕 理想主义"
  },
  {
    "title": "在江边",
    "url": "movie-0810.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": "小城 父子 长江 临终关怀 沉默的爱"
  },
  {
    "title": "抢滩行动粤语",
    "url": "movie-0811.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "警匪 / 动作",
    "tags": "飞虎队 粤语原声 抢滩登陆 城市反恐"
  },
  {
    "title": "另一端",
    "url": "movie-0812.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "英国 / 德国",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 剧情",
    "tags": "平行宇宙 道德困境 伦理 烧脑 科幻剧"
  },
  {
    "title": "浪漫俏娇娃",
    "url": "movie-0813.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": "大女主 时尚 姐弟恋 都市"
  },
  {
    "title": "窥机警探侦查事件",
    "url": "movie-0814.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪 / 刑侦",
    "tags": "监控追踪 网络犯罪 黑客警探 社会派推理 硬核刑侦"
  },
  {
    "title": "与春同行",
    "url": "movie-0815.html",
    "cover": "./65.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "亲情 公路片 老年 和解 治愈"
  },
  {
    "title": "秋霞",
    "url": "movie-0816.html",
    "cover": "./66.jpg",
    "year": "1978",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情/文艺",
    "tags": "琼瑶式 师生恋 悲剧 绝症"
  },
  {
    "title": "贫乏神来了！",
    "url": "movie-0817.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 动画",
    "tags": "神明 贫穷 反差萌 日常 搞笑"
  },
  {
    "title": "地久天长",
    "url": "movie-0818.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 文艺",
    "tags": "失独家庭 三十年变迁 无声和解"
  },
  {
    "title": "恐怖和平",
    "url": "movie-0819.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "惊悚 / 悬疑",
    "tags": "平行世界 战争 恐怖袭击 政治惊悚"
  },
  {
    "title": "飞虎出征粤语",
    "url": "movie-0820.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，喜剧",
    "tags": "卧底 乌龙 兄弟情 粤语原声"
  },
  {
    "title": "谜圈",
    "url": "movie-0821.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "暗网 直播 密室逃脱 社会派"
  },
  {
    "title": "小森林2018",
    "url": "movie-0822.html",
    "cover": "./72.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 治愈",
    "tags": "田园生活 美食 自我救赎"
  },
  {
    "title": "重启之蛇骨佛蜕",
    "url": "movie-0823.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "冒险 / 悬疑",
    "tags": "盗墓 东南亚 密宗 蛇神 重启"
  },
  {
    "title": "表哥到国语",
    "url": "movie-0824.html",
    "cover": "./74.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "tags": "港式鬼片 国语配音 乌龙驱邪 家族秘事 老港味"
  },
  {
    "title": "哥第夫一家",
    "url": "movie-0825.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "喜剧, 家庭, 奇幻",
    "tags": "东北味 神仙下凡 反差萌 地方特色"
  },
  {
    "title": "怜悯的种类",
    "url": "movie-0826.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情，悬疑，惊悚",
    "tags": "人性实验 道德困境 反转 极寒环境"
  },
  {
    "title": "转动尘封的历史",
    "url": "movie-0827.html",
    "cover": "./77.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 奇幻",
    "tags": "时空穿越 古籍谜团 自我救赎"
  },
  {
    "title": "热浪球爱战",
    "url": "movie-0828.html",
    "cover": "./78.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "运动, 爱情",
    "tags": "沙滩排球 励志 热血"
  },
  {
    "title": "村路弯弯",
    "url": "movie-0829.html",
    "cover": "./79.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": "乡村振兴 驻村书记 山路"
  },
  {
    "title": "何塞2018",
    "url": "movie-0830.html",
    "cover": "./80.jpg",
    "year": "2018",
    "region": "菲律宾 / 中国台湾",
    "type": "电影",
    "genre": "剧情, 同性",
    "tags": "劳工 底层 爱情 压抑"
  },
  {
    "title": "喜剧 站前天神",
    "url": "movie-0831.html",
    "cover": "./81.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "tags": "生活 温情 市井"
  },
  {
    "title": "肖叮叮的剿匪记",
    "url": "movie-0832.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 战争, 动作",
    "tags": "草根英雄 民国 智斗 热血"
  },
  {
    "title": "与妖为邻",
    "url": "movie-0833.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻, 日常",
    "tags": "治愈 妖怪 人妖共存 小镇生活 温情"
  },
  {
    "title": "恋爱中的厨师",
    "url": "movie-0834.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 美食",
    "tags": "米其林 味觉爱情 欢喜冤家"
  },
  {
    "title": "让梦飞翔",
    "url": "movie-0835.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 运动",
    "tags": "梦想 高考 滑翔伞 父子 励志"
  },
  {
    "title": "捉个九尾狐做女友2",
    "url": "movie-0836.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情， 奇幻， 喜剧",
    "tags": "人妖恋 千年醋精 娱乐圈风云 沙雕甜宠"
  },
  {
    "title": "异国迷宫的十字路口",
    "url": "movie-0837.html",
    "cover": "./87.jpg",
    "year": "2011",
    "region": "日本",
    "type": "剧集",
    "genre": "动画, 历史, 日常",
    "tags": "明治 法国 少女 文化冲突"
  },
  {
    "title": "恐怖食人院",
    "url": "movie-0838.html",
    "cover": "./88.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 血腥",
    "tags": "地下机构 器官贩卖 血浆 密室逃生 社会隐喻"
  },
  {
    "title": "山花烂漫时1992",
    "url": "movie-0839.html",
    "cover": "./89.jpg",
    "year": "1992",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 历史",
    "tags": "乡村 教育 女性成长 时代变迁"
  },
  {
    "title": "母与女",
    "url": "movie-0840.html",
    "cover": "./90.jpg",
    "year": "2015",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "母女 遗言 三代女性 和解 秘密"
  },
  {
    "title": "鼹鼠之歌2：香港狂骚曲",
    "url": "movie-0841.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧、动作、黑帮",
    "tags": "卧底警察 无厘头 香港地标混战"
  },
  {
    "title": "爱与恨",
    "url": "movie-0842.html",
    "cover": "./92.jpg",
    "year": "2003",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭、剧情、社会",
    "tags": "父女 原住民 土地抗争 和解"
  },
  {
    "title": "天地一沙鸥",
    "url": "movie-0843.html",
    "cover": "./93.jpg",
    "year": "1984",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 运动",
    "tags": "滑翔翼 中年危机 追梦赤子心"
  },
  {
    "title": "黑潮",
    "url": "movie-0844.html",
    "cover": "./94.jpg",
    "year": "2014",
    "region": "英国 / 爱尔兰",
    "type": "电影",
    "genre": "剧情 / 冒险",
    "tags": "灾难 海难 人性"
  },
  {
    "title": "我的女官大人",
    "url": "movie-0845.html",
    "cover": "./95.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/甜宠",
    "tags": "穿越 宫斗 女强 契约婚姻"
  },
  {
    "title": "墨西哥太平间的九具尸体",
    "url": "movie-0846.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "墨西哥, 美国",
    "type": "电影",
    "genre": "恐怖, 悬疑, 惊悚",
    "tags": "密室 反转 验尸 超自然"
  },
  {
    "title": "石敢当之雄峙天东",
    "url": "movie-0847.html",
    "cover": "./97.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集 (共40集)",
    "genre": "古装 / 神话 / 奇幻",
    "tags": "泰山 石敢当 封神 除妖"
  },
  {
    "title": "吸血鬼猎人巴菲第四季",
    "url": "movie-0848.html",
    "cover": "./98.jpg",
    "year": "1999",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作, 奇幻, 恐怖",
    "tags": "吸血鬼 女巫 大学生活 恶魔"
  },
  {
    "title": "恶作剧之刎",
    "url": "movie-0849.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 恐怖, 校园",
    "tags": "校园霸凌 直播 复仇 密室"
  },
  {
    "title": "义务出席",
    "url": "movie-0850.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "tags": "职场 黑色幽默 团建 荒诞 打工人"
  },
  {
    "title": "关人矮事",
    "url": "movie-0851.html",
    "cover": "./101.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，犯罪，动作",
    "tags": "黑帮 绑架 乌龙"
  },
  {
    "title": "第60届韩国百想艺术大赏",
    "url": "movie-0852.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "综艺/晚会",
    "genre": "真人秀、颁奖礼、剧情",
    "tags": "伪纪录片 娱乐圈内幕 黑色喜剧 戏中戏"
  },
  {
    "title": "宝贝老板：重围商界第一季",
    "url": "movie-0853.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动画, 喜剧",
    "tags": "职场 阴谋 儿童 恶搞"
  },
  {
    "title": "从来没有开枪",
    "url": "movie-0854.html",
    "cover": "./104.jpg",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "tags": "老牌杀手 平成落幕 文戏武打 黑色幽默"
  },
  {
    "title": "六胞惊奇",
    "url": "movie-0855.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "tags": "多胞胎 认亲 闹剧"
  },
  {
    "title": "奇异博士2：疯狂多重宇宙",
    "url": "movie-0856.html",
    "cover": "./106.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": "多重宇宙 魔法 惊悚 视觉奇观 黑暗反转"
  },
  {
    "title": "来电狂响",
    "url": "movie-0857.html",
    "cover": "./107.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": "手机 人性 黑色幽默 翻拍"
  },
  {
    "title": "夜色暗涌时",
    "url": "movie-0858.html",
    "cover": "./108.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 爱情",
    "tags": "都市 换脸 复仇"
  },
  {
    "title": "儿女债粤语",
    "url": "movie-0859.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "亲情 现实题材 老人 社会"
  },
  {
    "title": "我最好的朋友死了",
    "url": "movie-0860.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/青春",
    "tags": "复仇 校园暴力 反转 暗黑"
  },
  {
    "title": "邪恶异灵",
    "url": "movie-0861.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 灵异 / 超自然",
    "tags": "恶灵 录音带 倒放 驱魔"
  },
  {
    "title": "二婶",
    "url": "movie-0862.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 家庭, 年代",
    "tags": "女性成长 农村改革 坚韧 时代变迁"
  },
  {
    "title": "眩：北斋之女",
    "url": "movie-0863.html",
    "cover": "./113.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "剧情， 传记， 历史",
    "tags": "浮世绘 女性艺术家 江户 视觉奇观"
  },
  {
    "title": "野性的邂逅",
    "url": "movie-0864.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "法国 / 加拿大",
    "type": "电影",
    "genre": "爱情、冒险、剧情",
    "tags": "荒野求生 摄影师 部落 文化冲突"
  },
  {
    "title": "冲击点",
    "url": "movie-0865.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作， 惊悚",
    "tags": "极限运动 恐怖分子 夺命直播"
  },
  {
    "title": "无敌机械人",
    "url": "movie-0866.html",
    "cover": "./116.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作 / 冒险",
    "tags": "机甲战争 AI觉醒 末日求生"
  },
  {
    "title": "加油吧实习生",
    "url": "movie-0867.html",
    "cover": "./117.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 爱情",
    "tags": "职场 青春 励志 成长 创业"
  },
  {
    "title": "鸳鸯佩",
    "url": "movie-0868.html",
    "cover": "./118.jpg",
    "year": "2005",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情 / 古装",
    "tags": "定情信物 错位姻缘 家族恩怨"
  },
  {
    "title": "丧子疑云",
    "url": "movie-0869.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "剧集",
    "genre": "悬疑 / 心理 / 剧情",
    "tags": "母亲视角 医疗黑幕 记忆碎片 复仇"
  },
  {
    "title": "天生大英雄",
    "url": "movie-0870.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作，喜剧，超级英雄",
    "tags": "反英雄 废柴 基因改造"
  },
  {
    "title": "星岛双树",
    "url": "movie-0871.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "新加坡 / 马来西亚",
    "type": "电影",
    "genre": "剧情, 悬疑, 家庭",
    "tags": "南洋家族 老宅秘密 双胞胎诅咒"
  },
  {
    "title": "冬后是樱花",
    "url": "movie-0872.html",
    "cover": "./122.jpg",
    "year": "2019",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情，同性，青春",
    "tags": "校园 BL 治愈"
  },
  {
    "title": "魔女的考验",
    "url": "movie-0873.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影（动画）",
    "genre": "奇幻 / 冒险",
    "tags": "魔法 成长 友谊 治愈 催泪"
  },
  {
    "title": "东京大饭店",
    "url": "movie-0874.html",
    "cover": "./124.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情",
    "tags": "美食 职场 励志 复仇 米其林"
  },
  {
    "title": "异域魔影",
    "url": "movie-0875.html",
    "cover": "./125.jpg",
    "year": "2023",
    "region": "韩国 / 日本",
    "type": "电影",
    "genre": "恐怖 / 古装",
    "tags": "朝鲜王朝 怪物 巫术 暗黑奇幻 宫廷阴谋"
  },
  {
    "title": "麻辣学院",
    "url": "movie-0876.html",
    "cover": "./126.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 校园",
    "tags": "反转 师生互换 荒诞 讽刺教育"
  },
  {
    "title": "一室皆春",
    "url": "movie-0877.html",
    "cover": "./127.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧",
    "tags": "情色 邻里 搞笑 群像"
  },
  {
    "title": "亚当之子：阿布",
    "url": "movie-0878.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "中东/以色列",
    "type": "电影",
    "genre": "战争、剧情、宗教",
    "tags": "以巴冲突 父子情 人肉炸弹 赎罪 现实主义"
  },
  {
    "title": "零号禁地",
    "url": "movie-0879.html",
    "cover": "./129.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，恐怖，悬疑",
    "tags": "神秘生物 实验室泄露 封闭空间 逃生"
  },
  {
    "title": "荒宅勿入",
    "url": "movie-0880.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "tags": "密室逃脱 民俗怪谈 多人视角 反转"
  },
  {
    "title": "那年夏天2025",
    "url": "movie-0881.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "青春",
    "tags": "怀旧 夏日 纯爱 遗憾"
  },
  {
    "title": "故事贩卖机",
    "url": "movie-0882.html",
    "cover": "./132.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑奇幻",
    "tags": "单元剧 都市传说 因果报应"
  },
  {
    "title": "阴阳路十二之美容尸",
    "url": "movie-0883.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 惊悚, 灵异",
    "tags": "中式恐怖 入殓师 美容整形 鬼魂复仇"
  },
  {
    "title": "风流强盗",
    "url": "movie-0884.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/犯罪",
    "tags": "侠盗 反转 罗曼史 骗局"
  },
  {
    "title": "特别搜查：死囚来信",
    "url": "movie-0885.html",
    "cover": "./135.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪, 悬疑, 剧情",
    "tags": "死刑犯 冤案翻查 连环杀人 刑侦对抗"
  },
  {
    "title": "亚瑟和莉莉",
    "url": "movie-0886.html",
    "cover": "./136.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "动画 / 家庭 / 奇幻",
    "tags": "法式浪漫 手绘 两小无猜 冒险 治愈"
  },
  {
    "title": "向小惠发誓",
    "url": "movie-0887.html",
    "cover": "./137.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": "誓言 乡村爱情 承诺 返乡"
  },
  {
    "title": "情迷窝心批",
    "url": "movie-0888.html",
    "cover": "./138.jpg",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": "香港 怀旧 美食 温情 市井"
  },
  {
    "title": "千谎百计粤语",
    "url": "movie-0889.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑, 律政, 剧情",
    "tags": "测谎 微表情 心理战 港剧"
  },
  {
    "title": "妻子的噩梦",
    "url": "movie-0890.html",
    "cover": "./140.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "tags": "心理操控 婚姻危机 身份置换 反转"
  },
  {
    "title": "何方神圣",
    "url": "movie-0891.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "奇幻动作",
    "tags": "神明转世 官僚主义 开挂 讽刺"
  },
  {
    "title": "案中案",
    "url": "movie-0892.html",
    "cover": "./142.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪 / 律政",
    "tags": "法庭 多层反转 冤案 复仇"
  },
  {
    "title": "美杜莎",
    "url": "movie-0893.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 恐怖",
    "tags": "神话改编 女性复仇 身体恐怖 唯美"
  },
  {
    "title": "最好的时代",
    "url": "movie-0894.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 年代",
    "tags": "改革开放 深圳 创业 群像 怀旧"
  },
  {
    "title": "曼谷任务",
    "url": "movie-0895.html",
    "cover": "./145.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "genre": "动作、惊悚、谍战",
    "tags": "特工 东南亚 极限反杀 背叛"
  },
  {
    "title": "石油风暴",
    "url": "movie-0896.html",
    "cover": "./146.jpg",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "惊悚, 剧情, 商战",
    "tags": "能源危机 金融阴谋 地缘政治 高智商博弈"
  },
  {
    "title": "志愿军：存亡之战",
    "url": "movie-0897.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 历史, 剧情",
    "tags": "抗美援朝 铁原阻击战 宏大场面 家国情怀"
  },
  {
    "title": "象牙博弈",
    "url": "movie-0898.html",
    "cover": "./148.jpg",
    "year": "2026",
    "region": "中国大陆 / 非洲",
    "type": "电视剧",
    "genre": "犯罪 / 悬疑",
    "tags": "象牙走私 跨国犯罪 双雄"
  },
  {
    "title": "机动战士高达 雷霆宙域",
    "url": "movie-0899.html",
    "cover": "./149.jpg",
    "year": "2016",
    "region": "日本",
    "type": "动画 / OVA",
    "genre": "科幻 / 战争 / 机甲",
    "tags": "高达 一年战争 爵士乐 残废 灰色道德"
  },
  {
    "title": "加德·艾尔马莱：美国梦",
    "url": "movie-0900.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "法国 / 美国",
    "type": "电影",
    "genre": "喜剧、剧情",
    "tags": "移民 脱口秀 文化冲突 追梦 中年危机"
  },
  {
    "title": "王者再临",
    "url": "movie-0901.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作、奇幻、冒险",
    "tags": "王者归来 中世纪 魔法对决 王座之争"
  },
  {
    "title": "初来乍到",
    "url": "movie-0902.html",
    "cover": "./2.jpg",
    "year": "2015",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，家庭",
    "tags": "华裔 文化冲突 成长 移民"
  },
  {
    "title": "半镜",
    "url": "movie-0903.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 恐怖",
    "tags": "双胞胎 身份互换 心理惊悚 镜子"
  },
  {
    "title": "说谎的女人",
    "url": "movie-0904.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": "女性 婚姻危机 罗生门 反转"
  },
  {
    "title": "更美好的事第一季",
    "url": "movie-0905.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧 / 家庭",
    "tags": "单亲妈妈 黑色幽默 日常治愈"
  },
  {
    "title": "孖生老虎",
    "url": "movie-0906.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，犯罪，剧情",
    "tags": "双胞胎 卧底 黑帮 替身 反转"
  },
  {
    "title": "偷吻",
    "url": "movie-0907.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": "法式浪漫 身份错位 文学改编感"
  },
  {
    "title": "约瑟夫 流亡人生",
    "url": "movie-0908.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "tags": "二战 犹太幸存者 身份认同 黑白摄影"
  },
  {
    "title": "古畑中学生",
    "url": "movie-0909.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑、推理、校园",
    "tags": "前传 天才少年 校园推理 日常之谜"
  },
  {
    "title": "私人担保有限公司",
    "url": "movie-0910.html",
    "cover": "./10.jpg",
    "year": "2019",
    "region": "新加坡",
    "type": "电影",
    "genre": "剧情 / 职场 / 黑色幽默",
    "tags": "社畜文学 企业黑暗 资本讽刺 新加坡"
  },
  {
    "title": "真假东宫粤语",
    "url": "movie-0911.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "古装 / 宫斗",
    "tags": "身份互换 粤语原声 狸猫换太子 姐妹反目 权谋"
  },
  {
    "title": "越爱越美丽",
    "url": "movie-0912.html",
    "cover": "./12.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭 / 喜剧",
    "tags": "重组家庭 中年恋爱 市井温情"
  },
  {
    "title": "私恶公善",
    "url": "movie-0913.html",
    "cover": "./13.jpg",
    "year": "1979",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，伦理，政治",
    "tags": "双面人生 腐败 道德困境 官员 黑色幽默"
  },
  {
    "title": "心跳",
    "url": "movie-0914.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "tags": "器官移植 记忆残留 替身 都市"
  },
  {
    "title": "在世界看见山谷",
    "url": "movie-0915.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 冒险",
    "tags": "徒步 心理疗愈 西藏"
  },
  {
    "title": "美国海军大闹日本",
    "url": "movie-0916.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "日本 / 美国",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": "文化冲突 越狱 宅文化 荒诞"
  },
  {
    "title": "匈牙利狂想曲",
    "url": "movie-0917.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "匈牙利",
    "type": "电影",
    "genre": "剧情, 音乐",
    "tags": "李斯特 钢琴 历史"
  },
  {
    "title": "飙风天王",
    "url": "movie-0918.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险",
    "tags": "赛车 亡命 兄弟 公路 爆炸"
  },
  {
    "title": "艾玛的机会",
    "url": "movie-0919.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 运动",
    "tags": "马术 残障励志 人与动物 女性力量"
  },
  {
    "title": "僵尸谷惊魂",
    "url": "movie-0920.html",
    "cover": "./20.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖，喜剧，动作",
    "tags": "僵尸 民俗 致敬 林正英"
  },
  {
    "title": "第八夜",
    "url": "movie-0921.html",
    "cover": "./21.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": "邪教 封印 反转 宗教恐怖 献祭"
  },
  {
    "title": "畸人艳迹",
    "url": "movie-0922.html",
    "cover": "./22.jpg",
    "year": "2028",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": "马戏团 畸形人 爱情 救赎"
  },
  {
    "title": "巴黎艳妹",
    "url": "movie-0923.html",
    "cover": "./23.jpg",
    "year": "2011",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，文艺",
    "tags": "姐妹 移民 身份认同 巴黎 成长"
  },
  {
    "title": "体育皇后",
    "url": "movie-0924.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "运动励志",
    "tags": "短跑 逆袭 性别偏见"
  },
  {
    "title": "二十不惑2",
    "url": "movie-0925.html",
    "cover": "./25.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，爱情",
    "tags": "青春 成长 职场 姐妹情"
  },
  {
    "title": "点止功夫咁简单",
    "url": "movie-0926.html",
    "cover": "./26.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧功夫",
    "tags": "功夫小子 市井生活 以小博大 励志"
  },
  {
    "title": "月亮与蛋糕",
    "url": "movie-0927.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "tags": "再婚家庭 养育 日常 温情"
  },
  {
    "title": "冲击天子门生",
    "url": "movie-0928.html",
    "cover": "./28.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": "黑帮 卧底 枪战 义气"
  },
  {
    "title": "埃菲尔铁塔",
    "url": "movie-0929.html",
    "cover": "./29.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 历史 / 剧情",
    "tags": "建筑 传奇 禁忌之恋 传记"
  },
  {
    "title": "假面骑士加布国语",
    "url": "movie-0930.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "特摄 / 动作 / 儿童",
    "tags": "假面骑士 国语配音 零食变身 搞笑"
  },
  {
    "title": "先驱",
    "url": "movie-0931.html",
    "cover": "./31.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史, 剧情",
    "tags": "建党 革命 信仰 青春 主旋律"
  },
  {
    "title": "模范大哥哥",
    "url": "movie-0932.html",
    "cover": "./32.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧，家庭",
    "tags": "废柴逆袭 兄妹关系 搞笑温情 奶爸养成 人生导师"
  },
  {
    "title": "恶少之声",
    "url": "movie-0933.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "诅咒录音 校园怪谈 声音恐怖 心理惊悚"
  },
  {
    "title": "宇宙小子第五季",
    "url": "movie-0934.html",
    "cover": "./34.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 动画, 冒险",
    "tags": "星际战争 青少年英雄 太空歌剧 最终季"
  },
  {
    "title": "十七岁2019",
    "url": "movie-0935.html",
    "cover": "./35.jpg",
    "year": "2020",
    "region": "中国台湾",
    "type": "电影",
    "genre": "青春 / 剧情",
    "tags": "校园 学运余波 成长阵痛 未完的毕业旅行"
  },
  {
    "title": "盲侠血洒无名街",
    "url": "movie-0936.html",
    "cover": "./36.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 武侠, 犯罪",
    "tags": "盲人刀客 街头复仇 黑帮火并 邵氏遗风 暴力美学"
  },
  {
    "title": "四个还神的少年",
    "url": "movie-0937.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "奇幻、冒险、青春",
    "tags": "神明下凡 校园喜剧 台味幽默 热血成长"
  },
  {
    "title": "大使阁下的料理人",
    "url": "movie-0938.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "日本 / 法国",
    "type": "电视剧",
    "genre": "美食 / 职场 / 外交",
    "tags": "料理 外交 法餐 文化冲突"
  },
  {
    "title": "海克力士：重生",
    "url": "movie-0939.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": "希腊神话 重生 神力觉醒 弑神之战"
  },
  {
    "title": "荒唐协议",
    "url": "movie-0940.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": "身份交换 黑色幽默 富豪游戏"
  },
  {
    "title": "爱得其所",
    "url": "movie-0941.html",
    "cover": "./41.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "伦理 互换 婚姻 心理 文艺"
  },
  {
    "title": "代号叫麻雀",
    "url": "movie-0942.html",
    "cover": "./42.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "谍战，悬疑",
    "tags": "卧底 特工 民国 反转"
  },
  {
    "title": "里克·斯坦的长周末",
    "url": "movie-0943.html",
    "cover": "./43.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "纪录片, 美食",
    "tags": "旅游 烹饪 慢生活 欧洲风情 治愈"
  },
  {
    "title": "致命筹码2013",
    "url": "movie-0944.html",
    "cover": "./44.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "tags": "赌场 复仇 卧底"
  },
  {
    "title": "一代妖后",
    "url": "movie-0945.html",
    "cover": "./45.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 悬疑 / 奇幻",
    "tags": "宫廷权谋 轮回转世 红颜祸水 祭祀诅咒"
  },
  {
    "title": "圣诞变身",
    "url": "movie-0946.html",
    "cover": "./46.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，奇幻，家庭",
    "tags": "互换身体 圣诞节 职场 讽刺 温情"
  },
  {
    "title": "情暖谊长",
    "url": "movie-0947.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 年代",
    "tags": "知青 支边 新疆 兵团"
  },
  {
    "title": "血泊飞车",
    "url": "movie-0948.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "动作, 犯罪",
    "tags": "公路追杀 复仇新娘 暴力美学"
  },
  {
    "title": "扑通扑通喜欢你",
    "url": "movie-0949.html",
    "cover": "./49.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春 / 爱情",
    "tags": "校园 双向暗恋 治愈 甜宠"
  },
  {
    "title": "爱在马德里",
    "url": "movie-0950.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "异国邂逅 老年恋爱 弗拉明戈"
  },
  {
    "title": "彩虹2022",
    "url": "movie-0951.html",
    "cover": "./51.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 同性 / 青春",
    "tags": "LGBTQ+ 青春 校园 成长 友情"
  },
  {
    "title": "爸爸来了",
    "url": "movie-0952.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "家庭 / 奇幻",
    "tags": "穿越时空 代际和解 小镇生活 父爱如山"
  },
  {
    "title": "公主嫁到国语",
    "url": "movie-0953.html",
    "cover": "./53.jpg",
    "year": "2010",
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装 / 喜剧",
    "tags": "港式无厘头 欢喜冤家 宫廷 女强男弱"
  },
  {
    "title": "新月",
    "url": "movie-0954.html",
    "cover": "./54.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 科幻",
    "tags": "月球 太空 伦理 治愈"
  },
  {
    "title": "猎鹰的兄弟",
    "url": "movie-0955.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作，犯罪，警匪",
    "tags": "卧底 缉毒 兄弟情"
  },
  {
    "title": "铁幕行动",
    "url": "movie-0956.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "tags": "冷战 特工 刺杀 政治阴谋 柏林墙"
  },
  {
    "title": "盖比的娃娃屋大电影",
    "url": "movie-0957.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 奇幻 / 儿童",
    "tags": "萌宠 手工DIY 解谜冒险 合家欢"
  },
  {
    "title": "兄弟2017",
    "url": "movie-0958.html",
    "cover": "./58.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "二胎 和解 亲情 现实主义 成长"
  },
  {
    "title": "彼得潘：恶夜游戏",
    "url": "movie-0959.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 奇幻",
    "tags": "暗黑童话 血腥 反英雄 永不岛 惊悚改编"
  },
  {
    "title": "还我河山",
    "url": "movie-0960.html",
    "cover": "./60.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史 / 战争",
    "tags": "抗战 水利 智斗 民众 悲壮"
  },
  {
    "title": "走出荒野",
    "url": "movie-0961.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 冒险",
    "tags": "创伤疗愈 徒步 女性独自上路"
  },
  {
    "title": "喜剧 站前竞马",
    "url": "movie-0962.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 剧情 / 运动",
    "tags": "昭和怀旧 小镇生活 人情味"
  },
  {
    "title": "住在我身体里的那个她",
    "url": "movie-0963.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "奇幻，爱情，喜剧",
    "tags": "性别互换 同居 娱乐圈"
  },
  {
    "title": "哪吒",
    "url": "movie-0964.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "genre": "动画 / 奇幻 / 动作",
    "tags": "神话改编 赛博朋克 反叛 父子情"
  },
  {
    "title": "多愁老爸",
    "url": "movie-0965.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "家庭, 喜剧",
    "tags": "父女 更年期 女儿出嫁 泪中带笑"
  },
  {
    "title": "家怨",
    "url": "movie-0966.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "genre": "惊悚/剧情",
    "tags": "心理惊悚 阶层对立 豪宅 寄生"
  },
  {
    "title": "车仔西游记",
    "url": "movie-0967.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 公路",
    "tags": "网约车 西游记 现代 师徒 香港"
  },
  {
    "title": "嗜血小红帽",
    "url": "movie-0968.html",
    "cover": "./68.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": "暗黑童话 狼人 血腥 女性反杀"
  },
  {
    "title": "秦始皇与万里长城",
    "url": "movie-0969.html",
    "cover": "./69.jpg",
    "year": "2015",
    "region": "中国",
    "type": "电影",
    "genre": "历史 / 剧情",
    "tags": "秦始皇 长城 暴政 宏大叙事"
  },
  {
    "title": "落花时节又逢君",
    "url": "movie-0970.html",
    "cover": "./70.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装，爱情",
    "tags": "仙侠虐恋 轮回转世 花神茶圣"
  },
  {
    "title": "2024元宵奇妙游",
    "url": "movie-0971.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻， 悬疑， 剧情",
    "tags": "时间循环 元宵民俗 都市传说 单元剧"
  },
  {
    "title": "易普症",
    "url": "movie-0972.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑, 心理, 医疗",
    "tags": "心理疾病 天才与疯子 连环杀手 脑科学 反转"
  },
  {
    "title": "各取所需",
    "url": "movie-0973.html",
    "cover": "./73.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情，喜剧，伦理",
    "tags": "开放关系 交换伴侣 度假别墅 中产危机 欲望游戏"
  },
  {
    "title": "春假狂欢节",
    "url": "movie-0974.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 惊悚",
    "tags": "春假 连环杀手 派对文化 反套路"
  },
  {
    "title": "别墅幽灵",
    "url": "movie-0975.html",
    "cover": "./75.jpg",
    "year": "2020",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": "别墅 幽灵 凶宅 泰式恐怖 反转"
  },
  {
    "title": "我如何争辩",
    "url": "movie-0976.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": "左翼父亲 右翼女儿 饭桌辩论 和解 知识份子喜剧"
  },
  {
    "title": "你不该杀人",
    "url": "movie-0977.html",
    "cover": "./77.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "tags": "东北叙事 连环杀手 替身 心理扭曲 暴风雪"
  },
  {
    "title": "偷渡金山",
    "url": "movie-0978.html",
    "cover": "./78.jpg",
    "year": "2019",
    "region": "美国 / 墨西哥",
    "type": "电影",
    "genre": "惊悚 / 剧情",
    "tags": "移民 地下世界 生存 父女情 绝望"
  },
  {
    "title": "表姐，你好嘢！2",
    "url": "movie-0979.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 动作, 家庭",
    "tags": "港式无厘头 表姐续集 跨国乌龙 怀旧"
  },
  {
    "title": "抽象画中的越南少女",
    "url": "movie-0980.html",
    "cover": "./80.jpg",
    "year": "2007",
    "region": "越南",
    "type": "电影",
    "genre": "恐怖, 悬疑, 剧情",
    "tags": "油画 诅咒 复仇 民俗"
  },
  {
    "title": "绝对占领",
    "url": "movie-0981.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻 / 政治",
    "tags": "近未来 意识控制 民主危机"
  },
  {
    "title": "天宝伏妖录",
    "url": "movie-0982.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "古装，奇幻",
    "tags": "捉妖 大唐 少年热血 双男主"
  },
  {
    "title": "奇迹女人",
    "url": "movie-0983.html",
    "cover": "./83.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 奇幻",
    "tags": "女性超级英雄 超能力觉醒 母女"
  },
  {
    "title": "形单影只",
    "url": "movie-0984.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 心理",
    "tags": "孤独 人工智能 社交恐惧 治愈 独角戏"
  },
  {
    "title": "灯火阑珊",
    "url": "movie-0985.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/家庭",
    "tags": "霓虹灯 手艺人 父女 城市变迁"
  },
  {
    "title": "吉星高照2015国语",
    "url": "movie-0986.html",
    "cover": "./86.jpg",
    "year": "2015",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "genre": "喜剧、爱情、贺岁",
    "tags": "赌神 穿越 怀旧 港风"
  },
  {
    "title": "山海伏魔之追月",
    "url": "movie-0987.html",
    "cover": "./87.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 动作",
    "tags": "山海经 神兽 东方玄幻"
  },
  {
    "title": "邻家兄弟",
    "url": "movie-0988.html",
    "cover": "./88.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情, 同性, 家庭",
    "tags": "竹马 青春 情感纠葛 社会写实"
  },
  {
    "title": "无耻之徒第二季",
    "url": "movie-0989.html",
    "cover": "./89.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 喜剧",
    "tags": "底层家庭 黑色幽默 群像剧"
  },
  {
    "title": "神圣之夜：恶魔猎人",
    "url": "movie-0990.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 奇幻",
    "tags": "圣诞节 反英雄 黑色幽默"
  },
  {
    "title": "合约男女",
    "url": "movie-0991.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "都市 / 爱情 / 喜剧",
    "tags": "契约恋爱 假戏真做 商战"
  },
  {
    "title": "比安布尔更黑",
    "url": "movie-0992.html",
    "cover": "./92.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": "心理惊悚 都市传说 反转"
  },
  {
    "title": "再见，总有一天",
    "url": "movie-0993.html",
    "cover": "./93.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "遗憾 错过 岁月 催泪"
  },
  {
    "title": "花月流情",
    "url": "movie-0994.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 文艺",
    "tags": "民国 歌女 富少 替身 复仇"
  },
  {
    "title": "不负天职",
    "url": "movie-0995.html",
    "cover": "./95.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑 / 刑侦",
    "tags": "法医 冤案 翻案 师徒"
  },
  {
    "title": "危险情人",
    "url": "movie-0996.html",
    "cover": "./96.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚, 爱情",
    "tags": "黑色电影 蛇蝎美人 反转"
  },
  {
    "title": "朱家花园",
    "url": "movie-0997.html",
    "cover": "./97.jpg",
    "year": "2020",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "年代, 家庭, 悬疑",
    "tags": "民国 家族恩怨 园林 宅斗 守墓"
  },
  {
    "title": "你是我的喜悦",
    "url": "movie-0998.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 音乐",
    "tags": "音乐疗愈 失忆 街头艺人 相遇"
  },
  {
    "title": "黑猫警长之翡翠之星",
    "url": "movie-0999.html",
    "cover": "./99.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画、科幻、动作",
    "tags": "童年经典 机甲 环保 硬核警匪"
  },
  {
    "title": "藏起你的笑脸",
    "url": "movie-1000.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、惊悚、社会",
    "tags": "网络暴力 面具 身份错位 群体疯狂"
  },
  {
    "title": "恐怖幻象",
    "url": "movie-1001.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖，心理，悬疑",
    "tags": "幻觉 诅咒录像带 都市传说 心理惊悚 诡异"
  },
  {
    "title": "德古拉之夜",
    "url": "movie-1002.html",
    "cover": "./102.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 奇幻",
    "tags": "吸血鬼 哥特 复古风 封闭空间"
  },
  {
    "title": "青春拉拉手",
    "url": "movie-1003.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 同性 / 校园",
    "tags": "少女漫改 双向救赎 小清新"
  },
  {
    "title": "少林英雄榜",
    "url": "movie-1004.html",
    "cover": "./104.jpg",
    "year": "1984",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 古装",
    "tags": "少林 复仇 硬桥硬马 师徒情"
  },
  {
    "title": "芒果新星班之了不起的艺能",
    "url": "movie-1005.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺/真人秀",
    "genre": "真人秀、选秀、竞技",
    "tags": "练习生 才艺比拼 淘汰制 成长 幕后花絮"
  },
  {
    "title": "人性记录",
    "url": "movie-1006.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "心理博弈 多重反转 陪审团"
  },
  {
    "title": "第5届中国电影华表奖",
    "url": "movie-1007.html",
    "cover": "./107.jpg",
    "year": "1999",
    "region": "中国",
    "type": "综艺 / 晚会",
    "genre": "真人秀 / 颁奖典礼",
    "tags": "华表奖 1999 怀旧 明星 红毯"
  },
  {
    "title": "化敌为友",
    "url": "movie-1008.html",
    "cover": "./108.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 惊悚, 犯罪",
    "tags": "双雄 心理战 复仇 宿敌"
  },
  {
    "title": "遇见莫妮卡",
    "url": "movie-1009.html",
    "cover": "./109.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "都市 网恋 身份错位 治愈"
  },
  {
    "title": "世界上最伟大的父亲",
    "url": "movie-1010.html",
    "cover": "./110.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 黑色喜剧",
    "tags": "父女关系 谎言代价 校园压力 媒体炒作"
  },
  {
    "title": "自由！",
    "url": "movie-1011.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": "监狱 重生 摇滚 救赎"
  },
  {
    "title": "吓到笑",
    "url": "movie-1012.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "新加坡",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "tags": "黑色幽默 南洋民俗 怪谈"
  },
  {
    "title": "百万个幸福现在",
    "url": "movie-1013.html",
    "cover": "./113.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 同性",
    "tags": "绝症 回忆录 漫画 爱与告别 催泪"
  },
  {
    "title": "恐吓",
    "url": "movie-1014.html",
    "cover": "./114.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 悬疑 / 心理",
    "tags": "电话诈骗 反转 全员恶人 烧脑 港味"
  },
  {
    "title": "我盛大的西班牙婚礼",
    "url": "movie-1015.html",
    "cover": "./115.jpg",
    "year": "2019",
    "region": "西班牙 / 美国",
    "type": "电影",
    "genre": "喜剧，爱情",
    "tags": "文化冲突 家庭闹剧 异国婚礼"
  },
  {
    "title": "白雪皇后的报复",
    "url": "movie-1016.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "奇幻 / 悬疑",
    "tags": "暗黑童话 复仇 冰雪 反转"
  },
  {
    "title": "头山2025",
    "url": "movie-1017.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 灾难",
    "tags": "脑移植 永生 伦理 身体恐怖"
  },
  {
    "title": "非常警事",
    "url": "movie-1018.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "刑侦, 喜剧",
    "tags": "派出所 日常 黑色幽默"
  },
  {
    "title": "陨石噩梦",
    "url": "movie-1019.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "tags": "天灾降临 密室逃生 倒计时"
  },
  {
    "title": "双子谜情",
    "url": "movie-1020.html",
    "cover": "./120.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑、爱情、科幻",
    "tags": "克隆 双胞胎 身份互换 婚姻"
  },
  {
    "title": "拯救天堂",
    "url": "movie-1021.html",
    "cover": "./121.jpg",
    "year": "2023",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情 / 冒险 / 环保",
    "tags": "珊瑚礁 父子 海洋探险 气候"
  },
  {
    "title": "风流水兵",
    "url": "movie-1022.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "同性、爱情、军旅",
    "tags": "海岸巡防 禁忌之恋 男性情谊 澎湖 文艺军旅"
  },
  {
    "title": "马塔琳基",
    "url": "movie-1023.html",
    "cover": "./123.jpg",
    "year": "2017",
    "region": "新西兰",
    "type": "电影",
    "genre": "剧情, 历史, 冒险",
    "tags": "毛利 部落 殖民 语言"
  },
  {
    "title": "金钱豹",
    "url": "movie-1024.html",
    "cover": "./124.jpg",
    "year": "1996",
    "region": "香港",
    "type": "电影",
    "genre": "犯罪，剧情",
    "tags": "黑帮 卧底 金盆洗手 豹纹 宿命"
  },
  {
    "title": "曾经的老伴",
    "url": "movie-1025.html",
    "cover": "./125.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 家庭",
    "tags": "老年 阿尔茨海默 陪伴 催泪"
  },
  {
    "title": "青春期撞上更年期2",
    "url": "movie-1026.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭 / 喜剧",
    "tags": "代际冲突 再婚家庭 搞笑"
  },
  {
    "title": "当福音再临",
    "url": "movie-1027.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 剧情",
    "tags": "第二次降临 AI 信仰 奇点"
  },
  {
    "title": "瞠目结舌",
    "url": "movie-1028.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑、惊悚",
    "tags": "直播 密室 人性实验 反转 视觉错觉"
  },
  {
    "title": "追着彩虹的我们",
    "url": "movie-1029.html",
    "cover": "./129.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春、校园、治愈",
    "tags": "青梅竹马 乡镇少年 音乐梦想 双向暗恋"
  },
  {
    "title": "海妲",
    "url": "movie-1030.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "挪威",
    "type": "电影",
    "genre": "惊悚 / 奇幻",
    "tags": "北欧 海洋 人鱼 邪教 身份认同"
  },
  {
    "title": "少妇怨",
    "url": "movie-1031.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭 / 伦理 / 剧情",
    "tags": "婚姻困局 代际冲突 女性觉醒 现实主义"
  },
  {
    "title": "阿拉斯加大淘金第八季",
    "url": "movie-1032.html",
    "cover": "./132.jpg",
    "year": "2017",
    "region": "美国",
    "type": "剧集",
    "genre": "真人秀，纪录",
    "tags": "淘金 冒险 荒野 机械"
  },
  {
    "title": "伊凡的冒险生活",
    "url": "movie-1033.html",
    "cover": "./133.jpg",
    "year": "2016",
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "冒险, 奇幻",
    "tags": "儿童视角 苏联时期 想象与现实 公路片"
  },
  {
    "title": "扁担·姑娘",
    "url": "movie-1034.html",
    "cover": "./134.jpg",
    "year": "1998",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 文艺",
    "tags": "第六代导演 底层叙事 武汉 青春迷茫"
  },
  {
    "title": "绝命战场",
    "url": "movie-1035.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作，战争，惊悚",
    "tags": "朝韩关系 密室逃生 高强度"
  },
  {
    "title": "第二次二十岁2015",
    "url": "movie-1036.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻喜剧",
    "tags": "穿越 校园 代际 笑中带泪"
  },
  {
    "title": "她和他的恋爱剧本",
    "url": "movie-1037.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "都市，甜宠",
    "tags": "编剧 演员 契约恋爱"
  },
  {
    "title": "木兰花",
    "url": "movie-1038.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "tags": "家族秘密 南方哥特 园艺疗法 遗嘱之谜"
  },
  {
    "title": "邪王追妻",
    "url": "movie-1039.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 爱情, 奇幻",
    "tags": "穿越 甜宠 爽文"
  },
  {
    "title": "勇者无敌",
    "url": "movie-1040.html",
    "cover": "./140.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "军事, 动作, 悬疑",
    "tags": "特种兵 卧底 海外安保 热血 兄弟情"
  },
  {
    "title": "甜蜜的谎言",
    "url": "movie-1041.html",
    "cover": "./141.jpg",
    "year": "2008",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧， 爱情",
    "tags": "骗局 身份错位 职场 浪漫 韩式搞笑"
  },
  {
    "title": "人生不要气馁",
    "url": "movie-1042.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "励志治愈",
    "tags": "老年 诗歌 真实改编"
  },
  {
    "title": "溺水的鱼",
    "url": "movie-1043.html",
    "cover": "./143.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺 / 家庭",
    "tags": "文艺 原生家庭 压抑 女性 隐喻"
  },
  {
    "title": "巴黎双傻",
    "url": "movie-1044.html",
    "cover": "./144.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧冒险",
    "tags": "公路喜剧 异国风情 阴差阳错"
  },
  {
    "title": "南征北战",
    "url": "movie-1045.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 历史",
    "tags": "解放战争 群像 战术 真实改编 硬核军事"
  },
  {
    "title": "珍妮·斯蕾特：怯场",
    "url": "movie-1046.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "美国",
    "type": "综艺",
    "genre": "喜剧，脱口秀",
    "tags": "单口喜剧 女性视角 焦虑 社会观察 个人叙事"
  },
  {
    "title": "一路爱情",
    "url": "movie-1047.html",
    "cover": "./147.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧，爱情，公路",
    "tags": "拼车 千里送情 治愈"
  },
  {
    "title": "谎言之城",
    "url": "movie-1048.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑, 剧情",
    "tags": "政治阴谋 记者 全员恶人"
  },
  {
    "title": "夜行骇传",
    "url": "movie-1049.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "都市传说 地铁惊魂 目击者"
  },
  {
    "title": "波普先生的企鹅",
    "url": "movie-1050.html",
    "cover": "./150.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，家庭",
    "tags": "企鹅 改造 父爱 温馨"
  },
  {
    "title": "唐人街探案2",
    "url": "movie-1051.html",
    "cover": "./1.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 悬疑, 动作",
    "tags": "唐仁 秦风 纽约 侦探 连环杀人案"
  },
  {
    "title": "我父我主",
    "url": "movie-1052.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情， 传记， 历史",
    "tags": "父子对抗 撒丁岛 文盲与文学 牧羊人 自由"
  },
  {
    "title": "斗罗大陆2绝世唐门第三季",
    "url": "movie-1053.html",
    "cover": "./3.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画",
    "genre": "玄幻, 冒险",
    "tags": "穿越 魂师 学院 热血"
  },
  {
    "title": "猫眼",
    "url": "movie-1054.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑犯罪",
    "tags": "窃听风云 酒店视角 女性复仇 密闭空间"
  },
  {
    "title": "逗阵ㄟ",
    "url": "movie-1055.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭，剧情，喜剧",
    "tags": "邻里关系 乌龙事件 亲情 和解 市井生活"
  },
  {
    "title": "彻底失败",
    "url": "movie-1056.html",
    "cover": "./6.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧 / 职场",
    "tags": "废柴逆袭 黑色幽默 倒闭公司 神反转 社畜"
  },
  {
    "title": "垄断者",
    "url": "movie-1057.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情 / 商战",
    "tags": "互联网 垄断 反垄断调查 天才"
  },
  {
    "title": "特级英雄黄继光",
    "url": "movie-1058.html",
    "cover": "./8.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 历史",
    "tags": "抗美援朝 英雄 真实改编 战斗 催泪"
  },
  {
    "title": "尘菌",
    "url": "movie-1059.html",
    "cover": "./9.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖、科幻、身体",
    "tags": "霉菌 公寓 传染 寄生 生物恐怖"
  },
  {
    "title": "他们是在玩火",
    "url": "movie-1060.html",
    "cover": "./10.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情惊悚",
    "tags": "婚外情 仙人跳 阶级冲突 反转 蛇蝎美人"
  },
  {
    "title": "魔鬼战警",
    "url": "movie-1061.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "tags": "卧底 警匪 硬汉"
  },
  {
    "title": "小熊 大个仔",
    "url": "movie-1062.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "香港",
    "type": "动画电影",
    "genre": "动画, 家庭, 剧情",
    "tags": "粤语原声 童年回忆 成长告别 催泪动画"
  },
  {
    "title": "人生得意衰尽欢",
    "url": "movie-1063.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": "中年危机 丧文化 重启 友谊 无厘头"
  },
  {
    "title": "男人转化出机器人铠装",
    "url": "movie-1064.html",
    "cover": "./14.jpg",
    "year": "2028",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 动作 / 惊悚",
    "tags": "赛博格 人体改造 反乌托邦 机甲战斗 身份危机"
  },
  {
    "title": "米芽米咕人",
    "url": "movie-1065.html",
    "cover": "./15.jpg",
    "year": "2020",
    "region": "法国",
    "type": "动画电影",
    "genre": "奇幻冒险",
    "tags": "生态 巨人 母女 秘境"
  },
  {
    "title": "流氓保镳",
    "url": "movie-1066.html",
    "cover": "./16.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "动作，喜剧",
    "tags": "黑帮 保镖 反差萌 爆笑 动作"
  },
  {
    "title": "晚餐蓝调",
    "url": "movie-1067.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 生活 / 美食",
    "tags": "治愈 深夜剧 家庭 日常"
  },
  {
    "title": "祇园姊妹",
    "url": "movie-1068.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "tags": "艺伎 京都 姐妹 传统 社会"
  },
  {
    "title": "锦绣令",
    "url": "movie-1069.html",
    "cover": "./19.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "古装 / 悬疑 / 权谋",
    "tags": "明朝 锦衣卫 绣女 宫廷刺绣 暗杀密码"
  },
  {
    "title": "慈膳救援",
    "url": "movie-1070.html",
    "cover": "./20.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 社会",
    "tags": "美食 公益 市井温情"
  },
  {
    "title": "性福拉警报",
    "url": "movie-1071.html",
    "cover": "./21.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "tags": "两性 婚姻咨询 爆笑"
  },
  {
    "title": "惊声尖笑4",
    "url": "movie-1072.html",
    "cover": "./22.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "tags": "恶搞 无厘头 串烧 血浆片 戏仿"
  },
  {
    "title": "羽毛耳环",
    "url": "movie-1073.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情 / 悬疑",
    "tags": "民国奇情 替身文学 女性觉醒"
  },
  {
    "title": "我是大赢家2017",
    "url": "movie-1074.html",
    "cover": "./24.jpg",
    "year": "2017",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "赌局 催眠 多重反转 高智商"
  },
  {
    "title": "家有钱坑",
    "url": "movie-1075.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 家庭",
    "tags": "遗产 反转 亲情 爆笑 拆迁"
  },
  {
    "title": "荞麦疯长",
    "url": "movie-1076.html",
    "cover": "./26.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 爱情",
    "tags": "小镇青年 大城市梦想 文艺 命运 疼痛"
  },
  {
    "title": "血色大地",
    "url": "movie-1077.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "乌克兰",
    "type": "剧集",
    "genre": "历史，战争，悬疑",
    "tags": "二战 UPA 历史悬疑 多视角叙事"
  },
  {
    "title": "父亲大地",
    "url": "movie-1078.html",
    "cover": "./28.jpg",
    "year": "2022",
    "region": "意大利 / 阿根廷",
    "type": "电影",
    "genre": "剧情, 家庭, 历史",
    "tags": "移民 父子关系 庄园 真相"
  },
  {
    "title": "瑞雪兆丰年",
    "url": "movie-1079.html",
    "cover": "./29.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "东北 农村 代际 土地情结 大雪"
  },
  {
    "title": "壹号皇庭粤语",
    "url": "movie-1080.html",
    "cover": "./30.jpg",
    "year": "2017",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "律政，剧情，悬疑",
    "tags": "律政 法庭 香港 粤语 案件"
  },
  {
    "title": "一触即发2024",
    "url": "movie-1081.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "tags": "炸弹 拆除专家 阴谋 限时"
  },
  {
    "title": "宫本武藏 一乘寺之决斗",
    "url": "movie-1082.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 历史 / 传记",
    "tags": "剑戟片 哲学对决 以一敌多 经典重拍"
  },
  {
    "title": "光阴",
    "url": "movie-1083.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "剧集",
    "genre": "剧情/家庭",
    "tags": "时代变迁 三代人 怀旧 催泪"
  },
  {
    "title": "鬼镇2008",
    "url": "movie-1084.html",
    "cover": "./34.jpg",
    "year": "2008",
    "region": "加拿大",
    "type": "电影",
    "genre": "恐怖",
    "tags": "隔离 病毒 幸存者"
  },
  {
    "title": "爱乱伴侣",
    "url": "movie-1085.html",
    "cover": "./35.jpg",
    "year": "2011",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "tags": "婚姻 伦理 对话 反转"
  },
  {
    "title": "老虎伍兹",
    "url": "movie-1086.html",
    "cover": "./36.jpg",
    "year": "2021",
    "region": "美国",
    "type": "纪录片 / 剧集",
    "genre": "传记 / 运动",
    "tags": "高尔夫 丑闻 励志 人性"
  },
  {
    "title": "失踪的国王",
    "url": "movie-1087.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 历史 / 悬疑",
    "tags": "真实事件改编 平民考古 理查三世 停车场下的王座"
  },
  {
    "title": "来自星星的少年",
    "url": "movie-1088.html",
    "cover": "./38.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 儿童",
    "tags": "自闭症 父子情 治愈 校园 励志"
  },
  {
    "title": "皇家酒店谋杀案",
    "url": "movie-1089.html",
    "cover": "./39.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑， 犯罪， 惊悚",
    "tags": "暴风雪山庄 多重反转 黑色幽默 复古美学"
  },
  {
    "title": "没谈过恋爱的我",
    "url": "movie-1090.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情、校园、青春",
    "tags": "母胎单身 双向暗恋 纯爱 大学校园"
  },
  {
    "title": "万花嬉春",
    "url": "movie-1091.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/爱情",
    "tags": "戏中戏 片场风云 港式无厘头 怀旧"
  },
  {
    "title": "窈窕主妇",
    "url": "movie-1092.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "都市 / 悬疑",
    "tags": "主妇 复仇 反转 女性群像 豪宅"
  },
  {
    "title": "永不我弃",
    "url": "movie-1093.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻伦理",
    "tags": "基因编辑 定制儿童 社会阶层"
  },
  {
    "title": "火山",
    "url": "movie-1094.html",
    "cover": "./44.jpg",
    "year": "2023",
    "region": "冰岛",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "父女 自然之力 自我和解 北欧冷峻"
  },
  {
    "title": "热血痴心",
    "url": "movie-1095.html",
    "cover": "./45.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情, 体育, 青春",
    "tags": "足球 假戏真做 逆袭"
  },
  {
    "title": "全世界最好的你",
    "url": "movie-1096.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 青春",
    "tags": "双向暗恋 校园到职场 治愈甜宠"
  },
  {
    "title": "噩夜酒店灵异诡店",
    "url": "movie-1097.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "genre": "恐怖 / 悬疑 / 惊悚",
    "tags": "都市怪谈 诅咒酒店 单元剧连环 泰式邪降 高能反转"
  },
  {
    "title": "预兆散步的侵略者电影版",
    "url": "movie-1098.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 恐怖, 悬疑",
    "tags": "外星入侵 家庭主妇 预知 缓慢恐惧"
  },
  {
    "title": "拉雅",
    "url": "movie-1099.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 奇幻",
    "tags": "东方奇幻 少女冒险 苗族文化 成长 自然崇拜"
  },
  {
    "title": "爱·从心开始",
    "url": "movie-1100.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 音乐",
    "tags": "老年恋爱 钢琴 阿尔茨海默"
  },
  {
    "title": "古村女人",
    "url": "movie-1101.html",
    "cover": "./51.jpg",
    "year": "2012",
    "region": "中国",
    "type": "电视剧",
    "genre": "剧情 / 乡土 / 女性",
    "tags": "农村女性 裹脚 时代变迁 三代人 苦难与坚韧"
  },
  {
    "title": "兔子",
    "url": "movie-1102.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "动画 / 奇幻",
    "tags": "成人寓言 水墨风格 自由意志"
  },
  {
    "title": "某僵尸少女的灾难",
    "url": "movie-1103.html",
    "cover": "./53.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧, 恐怖",
    "tags": "僵尸 校园 黑色幽默 少女"
  },
  {
    "title": "鲁邦三世：过去的监狱",
    "url": "movie-1104.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影 / 动画",
    "genre": "动作 / 冒险 / 喜剧",
    "tags": "怪盗 越狱 宿敌合作 经典IP重启"
  },
  {
    "title": "深夜小狗离奇事件",
    "url": "movie-1105.html",
    "cover": "./55.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑",
    "tags": "自闭症 侦探 邻里 温情 动物"
  },
  {
    "title": "眼镜蛇邪教",
    "url": "movie-1106.html",
    "cover": "./56.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 悬疑",
    "tags": "邪教 爬行动物 深山 洗脑 密室"
  },
  {
    "title": "夜孔雀",
    "url": "movie-1107.html",
    "cover": "./57.jpg",
    "year": "2016",
    "region": "法国 / 中国大陆",
    "type": "电影",
    "genre": "文艺爱情",
    "tags": "川剧 尺八 异国恋 宿命 传承"
  },
  {
    "title": "团结才能踢3",
    "url": "movie-1108.html",
    "cover": "./58.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "综艺",
    "genre": "真人秀，体育",
    "tags": "足球综艺 明星球队 热血搞笑"
  },
  {
    "title": "关键一票",
    "url": "movie-1109.html",
    "cover": "./59.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": "政治讽刺 小镇风云 民主议题"
  },
  {
    "title": "鹿兄鼠弟",
    "url": "movie-1110.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、动画、家庭",
    "tags": "兄弟情 动物冒险 体型反差 闹剧"
  },
  {
    "title": "圣殿奇妙夜",
    "url": "movie-1111.html",
    "cover": "./61.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 冒险",
    "tags": "博物馆 复活 历史人物 一夜"
  },
  {
    "title": "克莱曼婷",
    "url": "movie-1112.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 文艺 / 成长",
    "tags": "少女 寄宿学校 钢琴 秘密信件 缓慢电影"
  },
  {
    "title": "内裤队长吓鬼记",
    "url": "movie-1113.html",
    "cover": "./63.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 恐怖, 动画",
    "tags": "恶搞超级英雄 校园怪谈 另类驱魔"
  },
  {
    "title": "我相信独角兽",
    "url": "movie-1114.html",
    "cover": "./64.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 家庭",
    "tags": "儿童想象力 疾病 治愈 童话现实"
  },
  {
    "title": "双面男模之桃花期",
    "url": "movie-1115.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "喜剧 / 爱情",
    "tags": "男模 失忆 双重人格 土甜"
  },
  {
    "title": "有药",
    "url": "movie-1116.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "罕见病 药价 医患 真实事件改编"
  },
  {
    "title": "科技浩劫",
    "url": "movie-1117.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "tags": "末日 失控AI 量子计算 逃亡 意识上传"
  },
  {
    "title": "铁城奇案",
    "url": "movie-1118.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": "东北犯罪 硬汉侦探 国企改制 连环杀人 年代感"
  },
  {
    "title": "孤独的心",
    "url": "movie-1119.html",
    "cover": "./69.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "丧偶 忘年交 治愈 小成本 生活流"
  },
  {
    "title": "创世雄心",
    "url": "movie-1120.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 冒险, 史诗",
    "tags": "创世 神话 多时空 大制作"
  },
  {
    "title": "假面女仆",
    "url": "movie-1121.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "喜剧, 动作, 日常",
    "tags": "反差萌 女仆 保镖 搞笑战斗 宅邸日常"
  },
  {
    "title": "阿比阿弟大冒险",
    "url": "movie-1122.html",
    "cover": "./72.jpg",
    "year": "1989",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，科幻",
    "tags": "穿越 摇滚 乐天派 历史人物 cult"
  },
  {
    "title": "此时此刻",
    "url": "movie-1123.html",
    "cover": "./73.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 剧情 / 单元剧",
    "tags": "疫情背景 单元故事 都市情感 群像 治愈"
  },
  {
    "title": "子夜心跳",
    "url": "movie-1124.html",
    "cover": "./74.jpg",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "港产鬼片 因果报应 老港味 氛围"
  },
  {
    "title": "私恶公善",
    "url": "movie-1125.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": "双面人生 教师 暗网 私刑正义"
  },
  {
    "title": "俄罗斯玩偶",
    "url": "movie-1126.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "惊悚, 悬疑, 科幻",
    "tags": "套娃 平行宇宙 意识传输 冷战遗产"
  },
  {
    "title": "疯狂杀手理发师",
    "url": "movie-1127.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "tags": "血腥 黑色幽默 小镇怪谈"
  },
  {
    "title": "寂静计划",
    "url": "movie-1128.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 灾难",
    "tags": "声波武器 地下设施 限时求生 反乌托邦 密室逃生"
  },
  {
    "title": "飞吧！水班长",
    "url": "movie-1129.html",
    "cover": "./79.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": "校园 反霸凌 逆袭 游泳"
  },
  {
    "title": "灵异守夜",
    "url": "movie-1130.html",
    "cover": "./80.jpg",
    "year": "1992",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖、伪纪录片、惊悚",
    "tags": "鬼魂 电视台 直播 伪纪录片 BBC"
  },
  {
    "title": "日本的西多妮",
    "url": "movie-1131.html",
    "cover": "./81.jpg",
    "year": "2022",
    "region": "日本 / 法国",
    "type": "动画剧集",
    "genre": "奇幻 / 冒险 / 历史",
    "tags": "拟人化 明治维新 蒸汽朋克 女性主角"
  },
  {
    "title": "挑战",
    "url": "movie-1132.html",
    "cover": "./82.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": "冷战 体育竞技 民族荣誉 逆风翻盘"
  },
  {
    "title": "学徒2020",
    "url": "movie-1133.html",
    "cover": "./83.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，悬疑",
    "tags": "暗黑职场 师徒 心理战 反转 权力游戏"
  },
  {
    "title": "不要欺负我，长瀞同学",
    "url": "movie-1134.html",
    "cover": "./84.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 爱情, 校园",
    "tags": "恋爱喜剧 抖S女主 废柴男主 青春治愈 漫画改编"
  },
  {
    "title": "星际旅行4：抢救未来",
    "url": "movie-1135.html",
    "cover": "./85.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 冒险",
    "tags": "太空 时间穿越 团队 拯救"
  },
  {
    "title": "一切过后",
    "url": "movie-1136.html",
    "cover": "./86.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 灾难",
    "tags": "末日 重建 人性实验 慢热"
  },
  {
    "title": "萌系男友是燃燃的橘色",
    "url": "movie-1137.html",
    "cover": "./87.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "爱情，喜剧",
    "tags": "少女漫 消防员 年下 治愈"
  },
  {
    "title": "安东尼·帕森斯",
    "url": "movie-1138.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧 / 限定剧",
    "genre": "剧情 / 传记 / 犯罪",
    "tags": "诈骗犯 假贵族 伦敦 阶层跃迁 真实事件改编"
  },
  {
    "title": "红粉女海盗",
    "url": "movie-1139.html",
    "cover": "./89.jpg",
    "year": "2027",
    "region": "韩国/菲律宾",
    "type": "电影",
    "genre": "动作/冒险/喜剧",
    "tags": "全女性阵容 海上夺宝 爽片 奇观"
  },
  {
    "title": "保持黑暗",
    "url": "movie-1140.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "丹麦 / 冰岛",
    "type": "电影",
    "genre": "惊悚、心理、自然",
    "tags": "极夜 灯塔看守 精神崩溃"
  },
  {
    "title": "最终幻想女孩",
    "url": "movie-1141.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情，奇幻，青春",
    "tags": "穿越 游戏玩家 逆向追爱"
  },
  {
    "title": "笑脸杀人狂",
    "url": "movie-1142.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 犯罪",
    "tags": "连环杀手 小丑面具 直播杀人 心理博弈 城市传说"
  },
  {
    "title": "猫狗大战2：珍珠猫复仇",
    "url": "movie-1143.html",
    "cover": "./93.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 家庭, 动作",
    "tags": "宠物 特工 猫咪 复仇"
  },
  {
    "title": "最爱的你",
    "url": "movie-1144.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "绝症 替身 钢琴 米兰"
  },
  {
    "title": "新·假面骑士",
    "url": "movie-1145.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "动作, 科幻",
    "tags": "特摄 重启 改造人 庵野秀明"
  },
  {
    "title": "佛莱契历险记",
    "url": "movie-1146.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动作 / 冒险",
    "tags": "侦探 乌龙 连环案 话痨主角"
  },
  {
    "title": "时差五小时",
    "url": "movie-1147.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "tags": "异地恋 网恋 文化差异 奔现"
  },
  {
    "title": "今生今世",
    "url": "movie-1148.html",
    "cover": "./98.jpg",
    "year": "1995",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 家族",
    "tags": "苦情 虐恋 琼瑶式"
  },
  {
    "title": "凶铃刺客",
    "url": "movie-1149.html",
    "cover": "./99.jpg",
    "year": "1998",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "模仿犯 诅咒录像带 侦探推理 都市传说"
  },
  {
    "title": "漂泊者2016",
    "url": "movie-1150.html",
    "cover": "./100.jpg",
    "year": "2016",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情， 惊悚， 文艺",
    "tags": "后末日 荒野 孤独者 心理创伤 生存"
  },
  {
    "title": "叽哩咕与女巫",
    "url": "movie-1151.html",
    "cover": "./101.jpg",
    "year": "1998",
    "region": "法国",
    "type": "电影",
    "genre": "动画，奇幻，冒险",
    "tags": "非洲传说 小英雄 女巫 智慧取胜"
  },
  {
    "title": "女神之境：换魂游戏",
    "url": "movie-1152.html",
    "cover": "./102.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻, 悬疑, 剧情",
    "tags": "灵魂互换 娱乐圈 阶级复仇 演技大考验"
  },
  {
    "title": "少年忍师—司徒家2",
    "url": "movie-1153.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作，奇幻，青春",
    "tags": "忍者 家族秘术 少年热血 替身对决"
  },
  {
    "title": "死亡之吻",
    "url": "movie-1154.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": "连环杀手 法医 致命口红 反转"
  },
  {
    "title": "伊夫圣罗兰的手稿",
    "url": "movie-1155.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "传记, 爱情, 剧情",
    "tags": "时尚圈 禁恋 艺术与疯狂 天才陨落"
  },
  {
    "title": "木偶奇遇记",
    "url": "movie-1156.html",
    "cover": "./106.jpg",
    "year": "2026",
    "region": "意大利",
    "type": "电影",
    "genre": "奇幻 / 剧情",
    "tags": "匹诺曹 暗黑 成长 存在 父亲"
  },
  {
    "title": "天下父母心",
    "url": "movie-1157.html",
    "cover": "./107.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "家庭，剧情",
    "tags": "亲情 代际冲突 催泪 治愈"
  },
  {
    "title": "警匪较量珠三角",
    "url": "movie-1158.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪, 动作, 警匪",
    "tags": "卧底 枪战 珠三角 跨境犯罪"
  },
  {
    "title": "美丽的声音",
    "url": "movie-1159.html",
    "cover": "./109.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情、音乐、家庭",
    "tags": "盲人 合唱团 母爱 治愈 真实事件改编"
  },
  {
    "title": "校花的秘密花园",
    "url": "movie-1160.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春 / 悬疑 / 校园",
    "tags": "校园 校花 双面人生 日记"
  },
  {
    "title": "布拉芙夫人",
    "url": "movie-1161.html",
    "cover": "./111.jpg",
    "year": "2014",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情, 悬疑, 惊悚",
    "tags": "出轨 复仇 不伦 阴谋 反转"
  },
  {
    "title": "花月于飞",
    "url": "movie-1162.html",
    "cover": "./112.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 古装",
    "tags": "唐传奇 诗妓 侠客 悲剧美学"
  },
  {
    "title": "穿越者之异梦空间",
    "url": "movie-1163.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑，科幻，爱情",
    "tags": "穿越 梦境 平行时空 蝴蝶效应 记忆迷宫"
  },
  {
    "title": "穿梭梦美人",
    "url": "movie-1164.html",
    "cover": "./114.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "tags": "穿越 梦中情人 经典 浪漫"
  },
  {
    "title": "王者万岁",
    "url": "movie-1165.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史 / 权谋 / 战争",
    "tags": "开国皇帝 重生 基建 爽文"
  },
  {
    "title": "野马梅莎",
    "url": "movie-1166.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 西部",
    "tags": "荒野 女性成长 自由 马群 孤独"
  },
  {
    "title": "红色恋人",
    "url": "movie-1167.html",
    "cover": "./117.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 历史",
    "tags": "革命 跨国恋 张国荣 老上海 悲剧"
  },
  {
    "title": "美国派之昏礼",
    "url": "movie-1168.html",
    "cover": "./118.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 青春",
    "tags": "美国派 穆斯林婚礼 文化碰撞"
  },
  {
    "title": "云之彼端，约定的地方",
    "url": "movie-1169.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 动画 / 爱情",
    "tags": "平行世界 青春 新海诚风 催泪"
  },
  {
    "title": "一屋两火",
    "url": "movie-1170.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "tags": "猛鬼 合租 港式搞笑 风水 扎职"
  },
  {
    "title": "深海挑战",
    "url": "movie-1171.html",
    "cover": "./121.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "科幻， 动作",
    "tags": "深海怪物 人体改造 极限生存"
  },
  {
    "title": "欲海浮生",
    "url": "movie-1172.html",
    "cover": "./122.jpg",
    "year": "2026",
    "region": "西班牙",
    "type": "电视剧",
    "genre": "悬疑, 情色, 惊悚",
    "tags": "豪门换妻 记忆篡改 心理操控 全员有病"
  },
  {
    "title": "穆里爱",
    "url": "movie-1173.html",
    "cover": "./123.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "海滩小镇 失踪的女儿 代际和解 方言电影"
  },
  {
    "title": "勇敢的心3",
    "url": "movie-1174.html",
    "cover": "./124.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作，历史，战争",
    "tags": "苏格兰 独立战争 冷兵器 史诗 续集"
  },
  {
    "title": "这个男人很难搞",
    "url": "movie-1175.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情 / 喜剧 / 奇幻",
    "tags": "契约婚姻 狐仙 先婚后爱"
  },
  {
    "title": "好女人2011",
    "url": "movie-1176.html",
    "cover": "./126.jpg",
    "year": "2011",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 情色, 伦理",
    "tags": "家庭主妇 出轨 中年危机 现实主义"
  },
  {
    "title": "前世的谜样旅程",
    "url": "movie-1177.html",
    "cover": "./127.jpg",
    "year": "2002",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情 / 奇幻 / 悬疑",
    "tags": "轮回 宿命 催眠 前世今生"
  },
  {
    "title": "贫民英雄",
    "url": "movie-1178.html",
    "cover": "./128.jpg",
    "year": "2017",
    "region": "印度",
    "type": "电影",
    "genre": "剧情，动作",
    "tags": "孟买 贫民窟 复仇 励志"
  },
  {
    "title": "我去过你的未来",
    "url": "movie-1179.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "科幻, 爱情, 悬疑",
    "tags": "穿越 宿命 时光旅行者"
  },
  {
    "title": "红衣手记国语",
    "url": "movie-1180.html",
    "cover": "./130.jpg",
    "year": "2002",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情， 爱情， 医疗",
    "tags": "护士 成长 职场 友情"
  },
  {
    "title": "大佬攻略",
    "url": "movie-1181.html",
    "cover": "./131.jpg",
    "year": "2001",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "tags": "黑帮 无厘头 江湖"
  },
  {
    "title": "除了太阳",
    "url": "movie-1182.html",
    "cover": "./132.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 剧情, 灾难",
    "tags": "永夜 人性考验 末日求生 希望"
  },
  {
    "title": "贤妻乐坊",
    "url": "movie-1183.html",
    "cover": "./133.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装, 音乐, 家庭",
    "tags": "女子乐团 婆媳 逆袭"
  },
  {
    "title": "乐在其中",
    "url": "movie-1184.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀, 音乐, 旅行",
    "tags": "公路音乐 治愈系 明星重组 即兴演出"
  },
  {
    "title": "我们这一天第一季",
    "url": "movie-1185.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": "治愈 多线叙事 催泪 日常"
  },
  {
    "title": "毒魔",
    "url": "movie-1186.html",
    "cover": "./136.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、惊悚、超自然",
    "tags": "毒品恐怖 附身 小镇秘闻 身体变异 社会隐喻"
  },
  {
    "title": "心之触碰。",
    "url": "movie-1187.html",
    "cover": "./137.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/奇幻",
    "tags": "读心术 纯爱 治愈 校园 超能力"
  },
  {
    "title": "狄仁杰之幻涅魔蛾",
    "url": "movie-1188.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "悬疑, 奇幻, 古装, 动作",
    "tags": "狄仁杰 变异飞蛾 幻术 朝堂阴谋 反转"
  },
  {
    "title": "天外归客",
    "url": "movie-1189.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "美国 / 英国",
    "type": "电视剧",
    "genre": "科幻 / 悬疑 / 家庭",
    "tags": "外星人 失踪 回归 记忆裂痕 阴谋"
  },
  {
    "title": "野兽男孩的故事",
    "url": "movie-1190.html",
    "cover": "./140.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 动作 / 犯罪",
    "tags": "黑帮 卧底 兄弟情 悲剧"
  },
  {
    "title": "乌蒙深处",
    "url": "movie-1191.html",
    "cover": "./141.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，家庭，乡村",
    "tags": "留守儿童 公路 寻亲 教育"
  },
  {
    "title": "父与子的流亡旅程",
    "url": "movie-1192.html",
    "cover": "./142.jpg",
    "year": "2026",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 冒险",
    "tags": "公路片 难民 父子情 现实主义"
  },
  {
    "title": "踉跄的女孩",
    "url": "movie-1193.html",
    "cover": "./143.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚",
    "tags": "精神分裂 心理 悬疑"
  },
  {
    "title": "战火遗孤",
    "url": "movie-1194.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "乌克兰",
    "type": "电影",
    "genre": "战争剧情",
    "tags": "儿童视角 废墟 幸存者"
  },
  {
    "title": "大贵族：回醒",
    "url": "movie-1195.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "动画电影",
    "genre": "奇幻战斗",
    "tags": "贵族 觉醒 吸血鬼 异能 战斗"
  },
  {
    "title": "蓝宇",
    "url": "movie-1196.html",
    "cover": "./146.jpg",
    "year": "2001",
    "region": "中国大陆 / 中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情 / 同性",
    "tags": "北京 年代爱情 悲剧 经典"
  },
  {
    "title": "恨锁金瓶粤语",
    "url": "movie-1197.html",
    "cover": "./147.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 古装",
    "tags": "名著改编 女性悲剧 宅斗"
  },
  {
    "title": "超级索尼克第二季",
    "url": "movie-1198.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 动画 / 冒险",
    "tags": "音速 平行宇宙 蛋头博士 反英雄"
  },
  {
    "title": "哈努曼与假面五骑士",
    "url": "movie-1199.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "泰国 / 日本",
    "type": "电影",
    "genre": "动作、奇幻、特摄",
    "tags": "泰日合拍 超级英雄 神话改编 假面骑士 多语言"
  },
  {
    "title": "桑迪顿第三季",
    "url": "movie-1200.html",
    "cover": "./150.jpg",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "爱情, 历史",
    "tags": "简·奥斯汀 海边小镇 阶层 未完成遗作"
  },
  {
    "title": "深埋的宝藏",
    "url": "movie-1201.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "美国，墨西哥",
    "type": "电影",
    "genre": "冒险，悬疑，动作",
    "tags": "寻宝 玛雅文明 考古 解密 丛林"
  },
  {
    "title": "试播",
    "url": "movie-1202.html",
    "cover": "./2.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚",
    "tags": "录像带 灵异 电视台 一夜成名 代价"
  },
  {
    "title": "人鱼的传说",
    "url": "movie-1203.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻 / 爱情 / 剧情",
    "tags": "济州岛 海女 环保寓言 唯美悲剧 民俗恐怖"
  },
  {
    "title": "银河系大排档",
    "url": "movie-1204.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画 / 剧集",
    "genre": "科幻 / 美食 / 日常",
    "tags": "宇宙食堂 社畜外星人 治愈向"
  },
  {
    "title": "杰克魔方",
    "url": "movie-1205.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑，惊悚，奇幻",
    "tags": "魔方 平行宇宙 解谜 心理分裂"
  },
  {
    "title": "不能说的秘密2007",
    "url": "movie-1206.html",
    "cover": "./6.jpg",
    "year": "2007",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情， 奇幻， 悬疑",
    "tags": "穿越时空 钢琴情缘 校园纯爱 周杰伦"
  },
  {
    "title": "龙影侠粤语",
    "url": "movie-1207.html",
    "cover": "./7.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作 / 奇幻 / 武侠",
    "tags": "亚视 龙 异能 粤语经典"
  },
  {
    "title": "四平青年之喋血曼谷",
    "url": "movie-1208.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "动作，犯罪",
    "tags": "黑帮 异国 复仇 兄弟情 硬核打斗"
  },
  {
    "title": "唐山阿嫂粤语",
    "url": "movie-1209.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪，剧情，黑帮",
    "tags": "江湖大嫂 复仇 聋哑 手语 九龙城寨"
  },
  {
    "title": "平民教宗方济各",
    "url": "movie-1210.html",
    "cover": "./10.jpg",
    "year": "2019",
    "region": "阿根廷, 意大利",
    "type": "电影",
    "genre": "传记, 剧情",
    "tags": "宗教 人性 革新"
  },
  {
    "title": "乔布斯：最后一件事情",
    "url": "movie-1211.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "传记 / 剧情 / 悬疑",
    "tags": "乔布斯 遗愿谜团 商业阴谋 科技伦理"
  },
  {
    "title": "阿娘使道传",
    "url": "movie-1212.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "古装，悬疑，奇幻",
    "tags": "阴阳眼 朝鲜王朝 双男主 女鬼申冤 官场黑幕"
  },
  {
    "title": "色情狂",
    "url": "movie-1213.html",
    "cover": "./13.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "剧情、情色、伦理",
    "tags": "性成瘾 自我救赎 心理分析"
  },
  {
    "title": "敦煌",
    "url": "movie-1214.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装，悬疑",
    "tags": "探险 壁画 西域 文化盗宝"
  },
  {
    "title": "曲中情未了",
    "url": "movie-1215.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 音乐 / 剧情",
    "tags": "怀旧金曲 粤语老歌 中年爱情 遗憾美学"
  },
  {
    "title": "怒海潜将国语",
    "url": "movie-1216.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "中国台湾 / 美国",
    "type": "电影",
    "genre": "动作 / 剧情 / 传记",
    "tags": "潜水 海军 种族歧视 断腿 励志"
  },
  {
    "title": "槑头槑脑3",
    "url": "movie-1217.html",
    "cover": "./17.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 都市",
    "tags": "职场 傻人有傻福 东北幽默 逆袭"
  },
  {
    "title": "甜言蜜语粤语",
    "url": "movie-1218.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情， 剧情",
    "tags": "粤语原声 都市情感 暧昧 治愈 成人童话"
  },
  {
    "title": "北方警察",
    "url": "movie-1219.html",
    "cover": "./19.jpg",
    "year": "2005",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "刑侦 / 剧情 / 犯罪",
    "tags": "公安 东北 基层警察 纪实 打黑"
  },
  {
    "title": "成名机会",
    "url": "movie-1220.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "音乐 / 剧情 / 励志",
    "tags": "星探 选秀幕后 小人物 英伦摇滚"
  },
  {
    "title": "闯堂兔2疯狂马戏团",
    "url": "movie-1221.html",
    "cover": "./21.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "喜剧，冒险，动画",
    "tags": "兔子 马戏团 国产动画 合家欢"
  },
  {
    "title": "骇故事之无罪日",
    "url": "movie-1222.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、犯罪",
    "tags": "循环 审判 陪审团 推理 反转"
  },
  {
    "title": "向西去",
    "url": "movie-1223.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "公路 / 剧情",
    "tags": "西北 文艺 寻根 父子和解"
  },
  {
    "title": "蓝衣魔鬼",
    "url": "movie-1224.html",
    "cover": "./24.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪、黑色电影、心理惊悚",
    "tags": "洛杉矶 私家侦探 神秘女子 爵士时代 连环案"
  },
  {
    "title": "几度夕阳红",
    "url": "movie-1225.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 家庭 / 年代",
    "tags": "催泪 时代变迁 虐恋 重逢"
  },
  {
    "title": "菲德拉",
    "url": "movie-1226.html",
    "cover": "./26.jpg",
    "year": "2026",
    "region": "希腊",
    "type": "电影",
    "genre": "剧情 / 爱情 / 惊悚",
    "tags": "希腊神话改编 禁忌之恋 家族恩怨 心理惊悚 悲剧美学"
  },
  {
    "title": "巴山红浪",
    "url": "movie-1227.html",
    "cover": "./27.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": "三线建设 知青 群山"
  },
  {
    "title": "恋爱教主",
    "url": "movie-1228.html",
    "cover": "./28.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 校园",
    "tags": "理论派 实践派 打脸 高甜"
  },
  {
    "title": "生葬惊魂",
    "url": "movie-1229.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "tags": "活埋 心理惊悚 密室逃脱 反转"
  },
  {
    "title": "边城浪子粤语",
    "url": "movie-1230.html",
    "cover": "./30.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 动作, 武侠",
    "tags": "复仇 宿命 沙漠 兄弟情 经典改编"
  },
  {
    "title": "澳门营业中",
    "url": "movie-1231.html",
    "cover": "./31.jpg",
    "year": "2021",
    "region": "中国澳门 / 中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 爱情 / 商战",
    "tags": "澳门 赌场 家族纷争 回归 创业"
  },
  {
    "title": "父母的婚事",
    "url": "movie-1232.html",
    "cover": "./32.jpg",
    "year": "2022",
    "region": "印度",
    "type": "电影",
    "genre": "剧情， 喜剧， 家庭",
    "tags": "黄昏恋 子女阻挠 传统与现代 大型社死"
  },
  {
    "title": "电击疗法",
    "url": "movie-1233.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 悬疑",
    "tags": "记忆删除 科技伦理 阴谋 身份认同 反转"
  },
  {
    "title": "秘密关系台版",
    "url": "movie-1234.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情 / 剧情",
    "tags": "职场 婚外情 台剧 细腻"
  },
  {
    "title": "金婚",
    "url": "movie-1235.html",
    "cover": "./35.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭 / 爱情",
    "tags": "婚姻 年代剧 养老 子女 白头偕老"
  },
  {
    "title": "风流四美人",
    "url": "movie-1236.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 爱情, 悬疑",
    "tags": "渣女天团 骗局 姐妹情 高智商犯罪 复仇"
  },
  {
    "title": "情殷助学",
    "url": "movie-1237.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 乡村",
    "tags": "支教 真实事件改编 大爱"
  },
  {
    "title": "恐惧和欲望",
    "url": "movie-1238.html",
    "cover": "./38.jpg",
    "year": "1953",
    "region": "美国",
    "type": "电影",
    "genre": "战争, 剧情",
    "tags": "黑白 心理 库布里克 丛林"
  },
  {
    "title": "旗袍美探",
    "url": "movie-1239.html",
    "cover": "./39.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 年代 / 探案",
    "tags": "民国 上海滩 旗袍 女侦探 单元剧"
  },
  {
    "title": "小微风的愿望",
    "url": "movie-1240.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "奇幻、治愈",
    "tags": "人与自然 成长 冒险 环保"
  },
  {
    "title": "调查者：仅供执勤",
    "url": "movie-1241.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 职场",
    "tags": "监察部门 内部调查 职场权谋 黑马剧"
  },
  {
    "title": "怕听销魂曲",
    "url": "movie-1242.html",
    "cover": "./42.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 悬疑",
    "tags": "音乐 凶杀 前世今生 悲剧 鬼魅"
  },
  {
    "title": "长岛凶宅故事",
    "url": "movie-1243.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "tags": "鬼屋 真实事件改编 家庭 心理"
  },
  {
    "title": "都是正常的",
    "url": "movie-1244.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 社会",
    "tags": "精神健康 社区故事 群像剧 去污名化 治愈"
  },
  {
    "title": "导演对我下手了",
    "url": "movie-1245.html",
    "cover": "./45.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集 / 短剧",
    "genre": "喜剧 / 短片",
    "tags": "竖屏 单元剧 吐槽 无厘头 快节奏"
  },
  {
    "title": "恋爱关系",
    "url": "movie-1246.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情 / 喜剧",
    "tags": "办公室恋情 契约恋爱 假戏真做 甜宠"
  },
  {
    "title": "红伶泪",
    "url": "movie-1247.html",
    "cover": "./47.jpg",
    "year": "1962",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情、爱情、歌舞",
    "tags": "粤剧 花旦 军阀 痴情"
  },
  {
    "title": "夜游",
    "url": "movie-1248.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "tags": "夜行动物 失眠 都市奇观 梦境"
  },
  {
    "title": "夹缝中活着，小春",
    "url": "movie-1249.html",
    "cover": "./49.jpg",
    "year": "1949",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "战后庶民 悲喜剧 小津调"
  },
  {
    "title": "活人生吃",
    "url": "movie-1250.html",
    "cover": "./50.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "tags": "丧尸 生存 血腥"
  },
  {
    "title": "烙印",
    "url": "movie-1251.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": "二战 纳粹 犹太 身份认同"
  },
  {
    "title": "大贵族：回醒",
    "url": "movie-1252.html",
    "cover": "./52.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作, 奇幻, 动画",
    "tags": "吸血鬼贵族 觉醒 千年之战 友情与宿命"
  },
  {
    "title": "暗房",
    "url": "movie-1253.html",
    "cover": "./53.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 心理",
    "tags": "胶片 记忆 犯罪心理 密室"
  },
  {
    "title": "食人宴2：极度饥饿",
    "url": "movie-1254.html",
    "cover": "./54.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，惊悚，血腥",
    "tags": "密室 饥饿游戏 反转 生存 人性"
  },
  {
    "title": "怒发冲冠为红颜",
    "url": "movie-1255.html",
    "cover": "./55.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠 / 动作 / 爱情",
    "tags": "冲冠一怒为红颜 吴三桂 陈圆圆 港式武侠 篡改历史"
  },
  {
    "title": "超然芯动",
    "url": "movie-1256.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "科幻/爱情",
    "tags": "AI 意识上传 永生 哲学 道德困境"
  },
  {
    "title": "夜色",
    "url": "movie-1257.html",
    "cover": "./57.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": "巴黎 一夜情 邂逅 敏感"
  },
  {
    "title": "圣母颂",
    "url": "movie-1258.html",
    "cover": "./58.jpg",
    "year": "2023",
    "region": "意大利 / 法国",
    "type": "电影",
    "genre": "剧情 / 同性 / 历史",
    "tags": "修道院 宗教压抑 百合 中世纪 圣痕疑云"
  },
  {
    "title": "最后的亚历山大",
    "url": "movie-1259.html",
    "cover": "./59.jpg",
    "year": "2027",
    "region": "希腊",
    "type": "电影",
    "genre": "历史 / 动作 / 科幻",
    "tags": "改造人 亚历山大大帝 古典未来 战争哲学"
  },
  {
    "title": "关于阿斯特丽德",
    "url": "movie-1260.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "瑞典",
    "type": "剧集",
    "genre": "剧情 / 传记 / 家庭",
    "tags": "女性成长 小镇流言 母女关系 道德审判 北欧冷峻"
  },
  {
    "title": "宝贝老板：圣诞红利",
    "url": "movie-1261.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画剧集",
    "genre": "喜剧, 奇幻, 家庭",
    "tags": "圣诞特别篇 合家欢 恶搞 商业竞争"
  },
  {
    "title": "我家是个博物馆",
    "url": "movie-1262.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "纪录片/真人秀",
    "genre": "纪实/文化",
    "tags": "收藏癖 极繁主义 普通人故事 治愈"
  },
  {
    "title": "川岛芳子",
    "url": "movie-1263.html",
    "cover": "./63.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 历史, 传记",
    "tags": "间谍 悲剧女性 历史争议 格格"
  },
  {
    "title": "黄金时代1946",
    "url": "movie-1264.html",
    "cover": "./64.jpg",
    "year": "1946",
    "region": "美国",
    "type": "电影",
    "genre": "剧情， 历史， 战争",
    "tags": "二战 返乡 经典 奥斯卡"
  },
  {
    "title": "偷龙转猫",
    "url": "movie-1265.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "中国大陆 / 香港",
    "type": "电影",
    "genre": "喜剧 / 犯罪 / 动作",
    "tags": "盗宝 互换身份 闹剧 港式喜剧 猫鼠游戏"
  },
  {
    "title": "没人写信给上校",
    "url": "movie-1266.html",
    "cover": "./66.jpg",
    "year": "1999",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 战争 / 历史",
    "tags": "西班牙内战 退伍老兵 等待抚恤金 斗鸡 尊严"
  },
  {
    "title": "金刚战士",
    "url": "movie-1267.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "动作",
    "tags": "机甲 朝韩 科幻战争 兄弟 催泪"
  },
  {
    "title": "爱的守护",
    "url": "movie-1268.html",
    "cover": "./68.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭, 剧情, 治愈",
    "tags": "自闭症 兄弟情 烘焙 慢生活"
  },
  {
    "title": "热血尖兵",
    "url": "movie-1269.html",
    "cover": "./69.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "军旅, 青春, 动作",
    "tags": "新兵连 成长 兄弟情"
  },
  {
    "title": "棠棣血",
    "url": "movie-1270.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠、古装",
    "tags": "兄弟反目 王朝末年 权力斗争 兵器设计"
  },
  {
    "title": "卡维尔护士的殉难",
    "url": "movie-1271.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 历史",
    "tags": "宗教 战争 人性 黑白摄影 女性"
  },
  {
    "title": "非常90后",
    "url": "movie-1272.html",
    "cover": "./72.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧",
    "tags": "90后 校园 代际冲突 青春 成长"
  },
  {
    "title": "危险女婿",
    "url": "movie-1273.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "喜剧 / 悬疑 / 家庭",
    "tags": "见家长 身份乌龙 泰国元素"
  },
  {
    "title": "天堂孤影",
    "url": "movie-1274.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 科幻",
    "tags": "末世 人工智能 孤独 父子 救赎"
  },
  {
    "title": "生死桥",
    "url": "movie-1275.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代，悬疑，谍战",
    "tags": "重庆大轰炸 太平门 身份互换 人性考验"
  },
  {
    "title": "五月八月",
    "url": "movie-1276.html",
    "cover": "./76.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭, 文艺",
    "tags": "母亲节 父亲节 家庭秘密 书信 时代"
  },
  {
    "title": "鬼屋之影",
    "url": "movie-1277.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "鬼屋 直播 伪纪录片 反转 社会派恐怖"
  },
  {
    "title": "女神游戏室",
    "url": "movie-1278.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 奇幻",
    "tags": "密室逃脱 女神 人性考验 反杀"
  },
  {
    "title": "守门员面对罚点球时的焦虑",
    "url": "movie-1279.html",
    "cover": "./79.jpg",
    "year": "2019",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 心理, 运动",
    "tags": "足球 存在主义 黑色幽默 心理战 孤独"
  },
  {
    "title": "血之海滩",
    "url": "movie-1280.html",
    "cover": "./80.jpg",
    "year": "2021",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "海岛 邪教 献祭 密室逃脱"
  },
  {
    "title": "十日寻人",
    "url": "movie-1281.html",
    "cover": "./81.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": "绑架 时间限制 父亲 社会派"
  },
  {
    "title": "两傻大闹摄影场",
    "url": "movie-1282.html",
    "cover": "./82.jpg",
    "year": "1965",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": "黑白 港式闹剧 片场 乌龙 经典"
  },
  {
    "title": "毒蛇俱乐部",
    "url": "movie-1283.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "悬疑, 惊悚, 冒险",
    "tags": "邪教 密室逃脱 心理游戏 基因实验 大逃杀"
  },
  {
    "title": "曼图亚弄臣",
    "url": "movie-1284.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情, 历史, 音乐",
    "tags": "歌剧改编 宫廷阴谋 复仇悲歌"
  },
  {
    "title": "武馆",
    "url": "movie-1285.html",
    "cover": "./85.jpg",
    "year": "2029",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 剧情",
    "tags": "咏春 师徒 武德 港片 写实打斗"
  },
  {
    "title": "加菲猫的幸福生活第一季",
    "url": "movie-1286.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画剧集",
    "genre": "喜剧, 动画",
    "tags": "加菲猫 猫咪 搞笑 日常"
  },
  {
    "title": "红尘",
    "url": "movie-1287.html",
    "cover": "./87.jpg",
    "year": "1997",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情, 家庭, 年代",
    "tags": "乡土剧 苦情 大家族 台语发音"
  },
  {
    "title": "白夜追凶",
    "url": "movie-1288.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "犯罪，悬疑，剧情",
    "tags": "双胞胎 替身 刑侦 硬汉派 反转"
  },
  {
    "title": "洗屋大师",
    "url": "movie-1289.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "恐怖，喜剧，悬疑",
    "tags": "凶宅 驱鬼 搞笑恐怖 单元剧 治愈"
  },
  {
    "title": "浪漫爱婚头",
    "url": "movie-1290.html",
    "cover": "./90.jpg",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "爱情",
    "tags": "闪婚 婚前焦虑 喜剧 群像"
  },
  {
    "title": "能耐大了第二季",
    "url": "movie-1291.html",
    "cover": "./91.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 情景",
    "tags": "相声 职场 北京"
  },
  {
    "title": "泥之河",
    "url": "movie-1292.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": "底层 父子 赎罪 河流 现实主义"
  },
  {
    "title": "扶桑有狐",
    "url": "movie-1293.html",
    "cover": "./93.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、奇幻、爱情",
    "tags": "狐妖 民国 前世今生 悬案"
  },
  {
    "title": "钥匙孔",
    "url": "movie-1294.html",
    "cover": "./94.jpg",
    "year": "2026",
    "region": "西班牙/阿根廷",
    "type": "电影",
    "genre": "心理惊悚",
    "tags": "偷窥 公寓楼 邻居秘密 开放式结局"
  },
  {
    "title": "官方机密",
    "url": "movie-1295.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "谍战、政治、职场",
    "tags": "政府泄密 情报内斗 吹哨人 近未来 多线叙事"
  },
  {
    "title": "激情的颜色",
    "url": "movie-1296.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情, 剧情",
    "tags": "弗拉明戈 三角恋 嫉妒与创作"
  },
  {
    "title": "魔鬼亱",
    "url": "movie-1297.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "惊悚",
    "tags": "民俗 宗教 心理 乡村"
  },
  {
    "title": "开启玉盒时",
    "url": "movie-1298.html",
    "cover": "./98.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 悬疑",
    "tags": "考古 时间循环 末日 烧脑"
  },
  {
    "title": "密码46",
    "url": "movie-1299.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "英国 / 德国",
    "type": "电影",
    "genre": "科幻 / 惊悚 / 悬疑",
    "tags": "基因密码 反乌托邦 数字伦理"
  },
  {
    "title": "赛马娘第二季",
    "url": "movie-1300.html",
    "cover": "./100.jpg",
    "year": "2028",
    "region": "日本",
    "type": "TV 动画",
    "genre": "运动/励志",
    "tags": "偶像 改编 催泪 热血"
  },
  {
    "title": "淑女思春",
    "url": "movie-1301.html",
    "cover": "./101.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 爱情",
    "tags": "女性成长 怀春少女 家庭伦理 懵懂初恋 年代戏"
  },
  {
    "title": "辞郎洲国语",
    "url": "movie-1302.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国台湾 / 新加坡",
    "type": "电影",
    "genre": "历史, 战争, 戏曲改编",
    "tags": "南宋末 崖门之战 潮剧改编"
  },
  {
    "title": "神奇的水晶石",
    "url": "movie-1303.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "巴西",
    "type": "电视剧",
    "genre": "奇幻冒险",
    "tags": "亚马逊 生态保护 水晶 部落诅咒"
  },
  {
    "title": "杀出魔鬼镇",
    "url": "movie-1304.html",
    "cover": "./104.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "tags": "德州 邪教 活人祭祀 小镇"
  },
  {
    "title": "包青天之碧血丹心",
    "url": "movie-1305.html",
    "cover": "./105.jpg",
    "year": "2010",
    "region": "中国大陆 / 中国台湾",
    "type": "电视剧 / 剧集",
    "genre": "古装 / 悬疑 / 历史",
    "tags": "包青天 探案 忠臣 宋朝 权谋"
  },
  {
    "title": "如何入睡",
    "url": "movie-1306.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 奇幻 / 生活",
    "tags": "失眠 超现实 单元剧 脑洞大开"
  },
  {
    "title": "欢乐谷",
    "url": "movie-1307.html",
    "cover": "./107.jpg",
    "year": "1998",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 喜剧, 奇幻",
    "tags": "黑白世界 色彩觉醒 反乌托邦 自我意识"
  },
  {
    "title": "女孩罗塞玛莉",
    "url": "movie-1308.html",
    "cover": "./108.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 传记, 历史",
    "tags": "女权 精神病院 暗黑童话 抗争"
  },
  {
    "title": "冰属性男子与酷酷女同事",
    "url": "movie-1309.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 爱情, 奇幻",
    "tags": "职场恋爱 反差萌 神话转世"
  },
  {
    "title": "小魔女",
    "url": "movie-1310.html",
    "cover": "./110.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电视剧 (8集)",
    "genre": "奇幻 / 校园 / 黑色喜剧",
    "tags": "魔法少女 霸凌复仇 愿望代价 反转结局"
  },
  {
    "title": "我的夜晚比你的白天更美",
    "url": "movie-1311.html",
    "cover": "./111.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，爱情",
    "tags": "夜班护士 失眠 黑白颠倒 诗歌 出租车"
  },
  {
    "title": "北斗前锋粤语",
    "url": "movie-1312.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "警匪，科幻，动作",
    "tags": "粤语原声 未来警察 黑科技"
  },
  {
    "title": "黄花塘往事",
    "url": "movie-1313.html",
    "cover": "./113.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史 / 战争 / 剧情",
    "tags": "抗战后方 军民鱼水情 青春无悔"
  },
  {
    "title": "放学后海堤日记",
    "url": "movie-1314.html",
    "cover": "./114.jpg",
    "year": "2020",
    "region": "日本",
    "type": "动画 / 剧集",
    "genre": "日常 / 治愈",
    "tags": "钓鱼 萌系 社团 慢生活"
  },
  {
    "title": "思春少妇",
    "url": "movie-1315.html",
    "cover": "./115.jpg",
    "year": "1997",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 情色 / 文艺",
    "tags": "不伦 禁忌 日式美学 空镜 女性心理"
  },
  {
    "title": "饱餐秀色",
    "url": "movie-1316.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 美食",
    "tags": "巾帼御厨 宫廷权谋 舌尖美学"
  },
  {
    "title": "灵魂摆渡3",
    "url": "movie-1317.html",
    "cover": "./117.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻, 悬疑, 惊悚",
    "tags": "灵异 人性 公路 温情"
  },
  {
    "title": "我心狂野",
    "url": "movie-1318.html",
    "cover": "./118.jpg",
    "year": "1990",
    "region": "美国",
    "type": "电影",
    "genre": "爱情 / 犯罪 / 公路",
    "tags": "大卫·林奇 蛇皮外套 公路逃亡 狂热爱情"
  },
  {
    "title": "爱在711",
    "url": "movie-1319.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "tags": "便利店 时空滞留 小确幸 治愈"
  },
  {
    "title": "小淘气尼古拉的假期",
    "url": "movie-1320.html",
    "cover": "./120.jpg",
    "year": "2014",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "tags": "儿童 暑假 海边 捣蛋"
  },
  {
    "title": "恶棍追杀令",
    "url": "movie-1321.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "tags": "杀手 复仇 黑色电影 硬汉"
  },
  {
    "title": "致命一击",
    "url": "movie-1322.html",
    "cover": "./122.jpg",
    "year": "2017",
    "region": "德国",
    "type": "电影",
    "genre": "惊悚，犯罪，悬疑",
    "tags": "狙击手 政治阴谋 目击证人 高智商犯罪"
  },
  {
    "title": "迷途之狼",
    "url": "movie-1323.html",
    "cover": "./123.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 冒险",
    "tags": "荒野求生 自我救赎 狼群"
  },
  {
    "title": "北京的西瓜",
    "url": "movie-1324.html",
    "cover": "./124.jpg",
    "year": "1989",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "中日文化 家庭关系 日常温情"
  },
  {
    "title": "黄河浪",
    "url": "movie-1325.html",
    "cover": "./125.jpg",
    "year": "2006",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 历史",
    "tags": "黄河 家族 民国 抗战 航运"
  },
  {
    "title": "呖咕呖咕对对碰",
    "url": "movie-1326.html",
    "cover": "./126.jpg",
    "year": "2007",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧",
    "tags": "麻将 市井 搞笑 群像"
  },
  {
    "title": "哥吉拉的逆袭",
    "url": "movie-1327.html",
    "cover": "./127.jpg",
    "year": "1955",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 恐怖 / 怪兽",
    "tags": "东宝 特摄 社会寓言 核恐惧"
  },
  {
    "title": "拉瑞克劳",
    "url": "movie-1328.html",
    "cover": "./128.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 爱情",
    "tags": "中年危机 再就业 社区大学 汤姆·汉克斯 治愈系"
  },
  {
    "title": "怪医杜立德",
    "url": "movie-1329.html",
    "cover": "./129.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 喜剧",
    "tags": "动物语言 重生 南极 病毒 生态"
  },
  {
    "title": "恋恋铜锣烧",
    "url": "movie-1330.html",
    "cover": "./130.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 美食",
    "tags": "甜品 治愈 传承 人情味"
  },
  {
    "title": "浅坟",
    "url": "movie-1331.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚 / 犯罪",
    "tags": "黑色电影 背叛 密闭空间 暴雨"
  },
  {
    "title": "克里夫兰秀第四季",
    "url": "movie-1332.html",
    "cover": "./132.jpg",
    "year": "2012",
    "region": "美国",
    "type": "动漫",
    "genre": "喜剧 / 动画 / 成人向",
    "tags": "恶搞 美式动画 家庭 种族梗 无厘头"
  },
  {
    "title": "小麻雀",
    "url": "movie-1333.html",
    "cover": "./133.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 儿童 / 家庭",
    "tags": "留守儿童 乡村教师 合唱团 治愈"
  },
  {
    "title": "凯多湖的消失",
    "url": "movie-1334.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "tags": "社会隐喻 小镇迷雾 群体谎言"
  },
  {
    "title": "成真",
    "url": "movie-1335.html",
    "cover": "./135.jpg",
    "year": "2017",
    "region": "加拿大",
    "type": "电影",
    "genre": "恐怖、科幻",
    "tags": "梦境入侵 潜意识 虚实难辨 心理惊悚"
  },
  {
    "title": "高蒂2019",
    "url": "movie-1336.html",
    "cover": "./136.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "传记 / 犯罪",
    "tags": "黑帮 家族兴衰 真实人物 暴力美学"
  },
  {
    "title": "未来弑界：巴黎沦陷",
    "url": "movie-1337.html",
    "cover": "./137.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作 / 恐怖",
    "tags": "赛博朋克 丧尸变异 末世 法国"
  },
  {
    "title": "丘八艳史",
    "url": "movie-1338.html",
    "cover": "./138.jpg",
    "year": "1978",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧/战争",
    "tags": "荒诞 抗日 戏说"
  },
  {
    "title": "年度最佳学生",
    "url": "movie-1339.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "tags": "精英教育 校园悬疑 竞争 心理 反转"
  },
  {
    "title": "秦时明月之沧海横流",
    "url": "movie-1340.html",
    "cover": "./140.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "历史 / 武侠 / 玄幻",
    "tags": "诸子百家 秦朝 机关术 乱世 群像"
  },
  {
    "title": "火烧旧金山",
    "url": "movie-1341.html",
    "cover": "./141.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "灾难/动作",
    "tags": "地震 火灾 救援 特效"
  },
  {
    "title": "特工总裁小辣妹",
    "url": "movie-1342.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作 / 爱情",
    "tags": "霸总 女保镖 身份错位 扮猪吃老虎 爽剧"
  },
  {
    "title": "秘密警察的另一场舞会",
    "url": "movie-1343.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "德国 / 波兰",
    "type": "电影",
    "genre": "历史 / 剧情 / 同性",
    "tags": "冷战 暗战 真实事件改编"
  },
  {
    "title": "凯南·吉尔：此致敬礼",
    "url": "movie-1344.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "美国",
    "type": "综艺",
    "genre": "喜剧，脱口秀",
    "tags": "单口喜剧 政治讽刺 自嘲"
  },
  {
    "title": "星之子",
    "url": "movie-1345.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻 / 奇幻 / 家庭",
    "tags": "亲情 外星人 治愈 环保"
  },
  {
    "title": "辣手保姆 2",
    "url": "movie-1346.html",
    "cover": "./146.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 恐怖",
    "tags": "血腥搞笑 恶魔保姆 续集 青春期"
  },
  {
    "title": "纠结之旅",
    "url": "movie-1347.html",
    "cover": "./147.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，爱情",
    "tags": "公路 母女 相亲 成长"
  },
  {
    "title": "复仇者格林",
    "url": "movie-1348.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻, 动作, 惊悚",
    "tags": "童话黑化 穿越 赏金猎人 暗黑魔法"
  },
  {
    "title": "48小时追杀令",
    "url": "movie-1349.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作，惊悚",
    "tags": "限时 复仇 飙车 卧底 反转"
  },
  {
    "title": "高中锋，矮教练",
    "url": "movie-1350.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动， 喜剧， 励志",
    "tags": "篮球 身高差 师徒 乡镇 逆袭"
  },
  {
    "title": "英伦谜杀",
    "url": "movie-1351.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪",
    "tags": "本格推理 连环杀手 英伦风情"
  },
  {
    "title": "请吃红小豆吧",
    "url": "movie-1352.html",
    "cover": "./2.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画",
    "genre": "喜剧、日常、短片",
    "tags": "治愈 萌系 日常 搞笑 美食"
  },
  {
    "title": "约瑟芬",
    "url": "movie-1353.html",
    "cover": "./3.jpg",
    "year": "2013",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": "大龄剩女 法式浪漫 女主成长 职场喜剧"
  },
  {
    "title": "阴守忍者",
    "url": "movie-1354.html",
    "cover": "./4.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画剧集",
    "genre": "喜剧 / 动作 / 校园 / 恋爱",
    "tags": "忍者 暗恋 反差萌 日常番"
  },
  {
    "title": "虚拟的谎言",
    "url": "movie-1355.html",
    "cover": "./5.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻、悬疑、剧情",
    "tags": "元宇宙 记忆篡改 伦理困境 虚实结合"
  },
  {
    "title": "别理陌生人",
    "url": "movie-1356.html",
    "cover": "./6.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑、惊悚",
    "tags": "公寓恐怖 邻居偷窥 社交恐惧 反转结局"
  },
  {
    "title": "我的恋人有点迷",
    "url": "movie-1357.html",
    "cover": "./7.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情, 悬疑",
    "tags": "失忆 身份反转 同居 治愈"
  },
  {
    "title": "香江恩仇",
    "url": "movie-1358.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、黑帮、剧情",
    "tags": "江湖 兄弟 背叛 80年代 怀旧"
  },
  {
    "title": "荒岛欲艳",
    "url": "movie-1359.html",
    "cover": "./9.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "genre": "惊悚 / 剧情",
    "tags": "孤岛生存 心理惊悚 欲望博弈 女性视角"
  },
  {
    "title": "重力小丑",
    "url": "movie-1360.html",
    "cover": "./10.jpg",
    "year": "2009",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 家庭, 犯罪",
    "tags": "推理 兄弟情 基因 连环纵火案"
  },
  {
    "title": "盐湖城朋克",
    "url": "movie-1361.html",
    "cover": "./11.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 音乐",
    "tags": "朋克 青春 叛逆 信仰冲突 成长"
  },
  {
    "title": "青楼红杏",
    "url": "movie-1362.html",
    "cover": "./12.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 情色 / 历史",
    "tags": "邵氏风骨 胭脂扣质感 乱世花魁 侠义"
  },
  {
    "title": "鼠胆龙威",
    "url": "movie-1363.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "tags": "小人物 卧底 反差 爆笑"
  },
  {
    "title": "全家逃走中",
    "url": "movie-1364.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧，动作，家庭",
    "tags": "高利贷 逃亡 假扮富人家 爆笑"
  },
  {
    "title": "伟大的力量",
    "url": "movie-1365.html",
    "cover": "./15.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻惊悚",
    "tags": "超能力 觉醒 道德困境"
  },
  {
    "title": "湘江1934·向死而生",
    "url": "movie-1366.html",
    "cover": "./16.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争, 历史",
    "tags": "长征 惨烈 信仰 红军"
  },
  {
    "title": "丛林小屋",
    "url": "movie-1367.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "惊悚 / 冒险",
    "tags": "荒野求生 神秘力量 姐妹情 密室逃脱"
  },
  {
    "title": "国王的选择",
    "url": "movie-1368.html",
    "cover": "./18.jpg",
    "year": "2016",
    "region": "挪威 / 丹麦",
    "type": "电影",
    "genre": "历史, 战争, 剧情",
    "tags": "二战 挪威国王 纳粹 抉择 真实事件"
  },
  {
    "title": "监谍任务",
    "url": "movie-1369.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "tags": "监视 谍战 反转 师徒"
  },
  {
    "title": "他们回来了",
    "url": "movie-1370.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "tags": "克隆 伦理 悬疑"
  },
  {
    "title": "人力资源",
    "url": "movie-1371.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑, 职场",
    "tags": "裁员 AI面试 黑镜风格 反转"
  },
  {
    "title": "雷玛根大桥",
    "url": "movie-1372.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "德国 / 美国",
    "type": "电影",
    "genre": "战争 / 历史 / 剧情",
    "tags": "二战 桥梁攻防 真实事件改编 大场面 人性"
  },
  {
    "title": "临界点",
    "url": "movie-1373.html",
    "cover": "./23.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "科幻 / 悬疑 / 心理",
    "tags": "平行宇宙 精神分裂 量子纠缠 烧脑 轮回"
  },
  {
    "title": "魔字鬼谈",
    "url": "movie-1374.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "都市传说 诅咒文字 心理恐怖 校园"
  },
  {
    "title": "跟踪孔令学",
    "url": "movie-1375.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": "反侦查 小城故事 目击证人 心理阴影"
  },
  {
    "title": "邪恶之城",
    "url": "movie-1376.html",
    "cover": "./26.jpg",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪，悬疑",
    "tags": "腐败 警匪 双雄 黑暗"
  },
  {
    "title": "美国忍者",
    "url": "movie-1377.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 军事",
    "tags": "特种兵 暗杀 武术 复仇"
  },
  {
    "title": "黑蟹行动：无尽寒冬",
    "url": "movie-1378.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "瑞典",
    "type": "剧集",
    "genre": "动作 / 战争 / 科幻",
    "tags": "北欧 noir 末日战争 女兵 悬疑"
  },
  {
    "title": "巴登巴登",
    "url": "movie-1379.html",
    "cover": "./29.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情，文艺，公路",
    "tags": "温泉小镇 和解 德语片"
  },
  {
    "title": "鬼纳特归来",
    "url": "movie-1380.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "喜剧，奇幻",
    "tags": "鬼魂 政治讽刺 社会寓言 宝莱坞"
  },
  {
    "title": "霹雳霸王花",
    "url": "movie-1381.html",
    "cover": "./31.jpg",
    "year": "2026",
    "region": "香港 / 中国大陆",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "tags": "女特工 怀旧 搞笑 实战 姐妹情"
  },
  {
    "title": "系统之皇后养成记",
    "url": "movie-1382.html",
    "cover": "./32.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "古装，奇幻，喜剧",
    "tags": "穿越 系统 后宫 逆袭"
  },
  {
    "title": "当西红柿遇见瓦格纳",
    "url": "movie-1383.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "爱情, 音乐",
    "tags": "古典乐 农业 反差萌 治愈"
  },
  {
    "title": "低地",
    "url": "movie-1384.html",
    "cover": "./34.jpg",
    "year": "2023",
    "region": "荷兰",
    "type": "电影",
    "genre": "惊悚 / 灾难",
    "tags": "海平面上升 地下城 阶级密室"
  },
  {
    "title": "火车2020",
    "url": "movie-1385.html",
    "cover": "./35.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 灾难",
    "tags": "平行世界 火车 怪物 生存 反转"
  },
  {
    "title": "奥兹国的桃乐西",
    "url": "movie-1386.html",
    "cover": "./36.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻， 冒险",
    "tags": "暗黑 重制 平行世界 女性"
  },
  {
    "title": "新闻女王国语",
    "url": "movie-1387.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 职场",
    "tags": "新闻界 女强人 商战"
  },
  {
    "title": "爱幽的密室",
    "url": "movie-1388.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑，惊悚",
    "tags": "密室逃脱 心理博弈 复仇"
  },
  {
    "title": "冷暖人性",
    "url": "movie-1389.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑, 惊悚",
    "tags": "冬夏令时 双重人格 时间循环 社会派推理"
  },
  {
    "title": "初次，为了爱",
    "url": "movie-1390.html",
    "cover": "./40.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电视剧",
    "genre": "浪漫、喜剧、治愈",
    "tags": "母胎单身 契约恋爱 社恐 搞笑 真香定律"
  },
  {
    "title": "为梦想发车",
    "url": "movie-1391.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 运动, 青春",
    "tags": "赛车 父子情 留守儿童 乡村教育 逆袭"
  },
  {
    "title": "我想吃掉你的胰脏",
    "url": "movie-1392.html",
    "cover": "./42.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "动画, 爱情, 剧情",
    "tags": "绝症 治愈 青春"
  },
  {
    "title": "合理怀疑第二季",
    "url": "movie-1393.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 律政",
    "tags": "翻案 陪审团 程序正义 反转"
  },
  {
    "title": "六日闪电突击战",
    "url": "movie-1394.html",
    "cover": "./44.jpg",
    "year": "2027",
    "region": "德国/以色列",
    "type": "电影",
    "genre": "战争， 历史， 动作",
    "tags": "六日战争 突袭 真实改编 空中对决"
  },
  {
    "title": "反骗天下",
    "url": "movie-1395.html",
    "cover": "./45.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": "骗局 保险调查员 高智商犯罪 单元剧"
  },
  {
    "title": "克隆高校第一季",
    "url": "movie-1396.html",
    "cover": "./46.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 喜剧 / 悬疑",
    "tags": "克隆人 校园 身份认同 实验体 黑色幽默"
  },
  {
    "title": "终极一家",
    "url": "movie-1397.html",
    "cover": "./47.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "科幻 / 家庭 / 喜剧",
    "tags": "异能 多元宇宙 爆笑家庭 热血守护"
  },
  {
    "title": "白玉老虎",
    "url": "movie-1398.html",
    "cover": "./48.jpg",
    "year": "2018",
    "region": "中国内地",
    "type": "剧集",
    "genre": "武侠 / 悬疑 / 动作",
    "tags": "古装江湖 复仇谜局 兄弟情义"
  },
  {
    "title": "黑暗心灵",
    "url": "movie-1399.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "科幻, 悬疑",
    "tags": "超能力 反乌托邦 青春期 暗黑美学"
  },
  {
    "title": "屋顶上的小飞人",
    "url": "movie-1400.html",
    "cover": "./50.jpg",
    "year": "1977",
    "region": "瑞典",
    "type": "电影",
    "genre": "家庭 / 奇幻 / 喜剧",
    "tags": "儿童 童话 冒险 北欧 想象力"
  },
  {
    "title": "卡拉之歌",
    "url": "movie-1401.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "音乐传记",
    "tags": "民谣 北爱尔兰 抗争 母女"
  },
  {
    "title": "劫案迷云",
    "url": "movie-1402.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 悬疑",
    "tags": "高智商犯罪 警匪对决 连环反转 限时追凶"
  },
  {
    "title": "吓吓笑",
    "url": "movie-1403.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "tags": "民俗怪谈 鬼屋直播 搞笑 真鬼假鬼 讽刺"
  },
  {
    "title": "悬案判决",
    "url": "movie-1404.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 法律",
    "tags": "真实犯罪播客 冤案翻案 双时间线"
  },
  {
    "title": "逍遥法外班克斯",
    "url": "movie-1405.html",
    "cover": "./55.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情，喜剧，犯罪",
    "tags": "英式幽默 身份互换 越狱 智斗"
  },
  {
    "title": "万事胜意",
    "url": "movie-1406.html",
    "cover": "./56.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 喜剧",
    "tags": "高考 春节 和解 小镇 烟火气"
  },
  {
    "title": "余生有涯",
    "url": "movie-1407.html",
    "cover": "./57.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "tags": "绝症 倒计时 告别清单 母女 生活流"
  },
  {
    "title": "沟女棒棒堂",
    "url": "movie-1408.html",
    "cover": "./58.jpg",
    "year": "2007",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": "青春 校园 追女仔 港味"
  },
  {
    "title": "墓地鬼话",
    "url": "movie-1409.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖, 悬疑, 诗选剧",
    "tags": "守墓人 鬼故事 单元剧 反转 道德审判"
  },
  {
    "title": "死命必达",
    "url": "movie-1410.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 奇幻",
    "tags": "黑色幽默 冥界快递 职场讽刺 生死簿 社畜文化"
  },
  {
    "title": "史酷比鬼屋历险",
    "url": "movie-1411.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动画 / 冒险 / 悬疑",
    "tags": "史酷比 神秘公司 童年回忆 解谜 合家欢"
  },
  {
    "title": "血族第四季",
    "url": "movie-1412.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 科幻 / 恐怖",
    "tags": "吸血鬼末日 最终季 人类反抗军 黑暗史诗"
  },
  {
    "title": "恋如雨止",
    "url": "movie-1413.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "爱情、文艺、治愈",
    "tags": "忘年恋 雨季 疗愈 错过与重逢"
  },
  {
    "title": "握手者",
    "url": "movie-1414.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "日本",
    "type": "TV动画",
    "genre": "奇幻，战斗，群像剧",
    "tags": "契约 超能力 都市传说"
  },
  {
    "title": "轩辕大帝",
    "url": "movie-1415.html",
    "cover": "./65.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "历史， 史诗， 动作",
    "tags": "部落战争 神话起源 帝王崛起"
  },
  {
    "title": "少年手指虎",
    "url": "movie-1416.html",
    "cover": "./66.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧，音乐",
    "tags": "朋克 老人 巡演"
  },
  {
    "title": "军事禁区",
    "url": "movie-1417.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作，悬疑",
    "tags": "特种兵 阴谋 禁地 枪战 烧脑"
  },
  {
    "title": "破晓之翼",
    "url": "movie-1418.html",
    "cover": "./68.jpg",
    "year": "2020",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 奇幻 / 冒险",
    "tags": "宝可梦 短篇 伽勒尔 青春 治愈"
  },
  {
    "title": "泪桥",
    "url": "movie-1419.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "同性 桥梁工程师 记忆 遗憾"
  },
  {
    "title": "电车狂",
    "url": "movie-1420.html",
    "cover": "./70.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "自闭症 母子 日常"
  },
  {
    "title": "三位一体",
    "url": "movie-1421.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、惊悚",
    "tags": "克隆人 身份认同 基因实验 心理博弈"
  },
  {
    "title": "统营的一天",
    "url": "movie-1422.html",
    "cover": "./72.jpg",
    "year": "2014",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 生活",
    "tags": "韩式治愈 小人物 海边小镇 一日叙事"
  },
  {
    "title": "魔宫魅影",
    "url": "movie-1423.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 古装",
    "tags": "密室 连环杀人 古代机关 反转"
  },
  {
    "title": "国家之死：帝汶阴谋",
    "url": "movie-1424.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "迷你剧",
    "genre": "悬疑, 惊悚, 政治",
    "tags": "政治阴谋 间谍 历史解密 地缘政治"
  },
  {
    "title": "穿越无尽的海洋前往月球",
    "url": "movie-1425.html",
    "cover": "./75.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 科幻, 家庭",
    "tags": "阿尔茨海默 亲情 宇宙 记忆 告别"
  },
  {
    "title": "锦绣良缘国语",
    "url": "movie-1426.html",
    "cover": "./76.jpg",
    "year": "2001",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "古装 / 爱情 / 喜剧",
    "tags": "TVB 大家族 锦缎 先婚后爱 国语配音版"
  },
  {
    "title": "持续发力纵深推进",
    "url": "movie-1427.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "反腐、政治、悬疑",
    "tags": "扫黑除恶 双面官员 正邪较量"
  },
  {
    "title": "快乐掌掴",
    "url": "movie-1428.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 喜剧",
    "tags": "荒诞 治愈 反转"
  },
  {
    "title": "日本的青春",
    "url": "movie-1429.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "tags": "社会派 失业 代际沟通 平成怀旧"
  },
  {
    "title": "黑心公司",
    "url": "movie-1430.html",
    "cover": "./80.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情，职场",
    "tags": "职场霸凌 复仇 黑心企业 打工者"
  },
  {
    "title": "泰坦第三季",
    "url": "movie-1431.html",
    "cover": "./81.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "科幻, 灾难",
    "tags": "太空歌剧 政治阴谋 生存"
  },
  {
    "title": "广告狂人第五季",
    "url": "movie-1432.html",
    "cover": "./82.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 职场",
    "tags": "广告业 男性危机 创意战争"
  },
  {
    "title": "山水驿站",
    "url": "movie-1433.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 文艺",
    "tags": "驿站 公路 和解 父女"
  },
  {
    "title": "我出生的那一天",
    "url": "movie-1434.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 家庭",
    "tags": "出生秘密 领养 身份认同"
  },
  {
    "title": "暗夜杀人魔",
    "url": "movie-1435.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪，惊悚",
    "tags": "连环杀手 雨夜 犯罪侧写 女性警探"
  },
  {
    "title": "邪恶友谊",
    "url": "movie-1436.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 心理",
    "tags": "校园霸凌 PUA操控 人格分裂 反转结局 细思极恐"
  },
  {
    "title": "狂野西部喜剧秀",
    "url": "movie-1437.html",
    "cover": "./87.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 西部",
    "tags": "无厘头 恶搞 跨种族搭档 公路片"
  },
  {
    "title": "天使行动",
    "url": "movie-1438.html",
    "cover": "./88.jpg",
    "year": "2027",
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 科幻 / 警匪",
    "tags": "赛博朋克 女杀手 义体改造 近未来 暴力美学"
  },
  {
    "title": "剩男圣女嗨起来",
    "url": "movie-1439.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧，爱情",
    "tags": "相亲 反转 社恐 假戏真做"
  },
  {
    "title": "拉查西",
    "url": "movie-1440.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 历史, 战争",
    "tags": "原住民 赛德克族 猎首 同化"
  },
  {
    "title": "亡命之徒",
    "url": "movie-1441.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作，犯罪，公路",
    "tags": "逃狱 杀手 赎罪 单车"
  },
  {
    "title": "火乐焚城",
    "url": "movie-1442.html",
    "cover": "./92.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 音乐 / 悬疑",
    "tags": "乐队 唐朝 摇滚 权谋"
  },
  {
    "title": "泪洒相思地",
    "url": "movie-1443.html",
    "cover": "./93.jpg",
    "year": "1988",
    "region": "中国",
    "type": "电影",
    "genre": "剧情，爱情，悲剧",
    "tags": "民国 苦情 错嫁 绝症 绝笔信"
  },
  {
    "title": "你和我的小情歌",
    "url": "movie-1444.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "genre": "爱情/音乐",
    "tags": "音乐 青春 异地恋 梦想"
  },
  {
    "title": "暴龙世纪",
    "url": "movie-1445.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 科幻, 冒险",
    "tags": "恐龙 基因改造 废土 硬核动作"
  },
  {
    "title": "巴比伦艳后",
    "url": "movie-1446.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "历史 / 奇幻 / 史诗",
    "tags": "女权 神话改编 视觉系 宫廷斗争"
  },
  {
    "title": "希特勒：恶魔的崛起",
    "url": "movie-1447.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 传记 / 历史",
    "tags": "政治 心理 历史还原 独裁者"
  },
  {
    "title": "蒲公英的奇幻漂流",
    "url": "movie-1448.html",
    "cover": "./98.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 奇幻 / 家庭",
    "tags": "手绘风 治愈 灵魂旅程 成长"
  },
  {
    "title": "另一个天堂",
    "url": "movie-1449.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 奇幻, 剧情",
    "tags": "灵魂伴侣 平行宇宙 浪漫 催泪 时空"
  },
  {
    "title": "厄玛",
    "url": "movie-1450.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "阿根廷 / 智利",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "tags": "探戈 失子 复仇 舞蹈"
  },
  {
    "title": "师士传说",
    "url": "movie-1451.html",
    "cover": "./101.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻、机甲、冒险",
    "tags": "机甲师 宇宙流浪 废土 师徒传承"
  },
  {
    "title": "阿姆斯壮谎言",
    "url": "movie-1452.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记 / 悬疑",
    "tags": "登月 阴谋论 记者调查 心理博弈 历史重构"
  },
  {
    "title": "将军在上之极乐净土",
    "url": "movie-1453.html",
    "cover": "./103.jpg",
    "year": "2023",
    "region": "中国",
    "type": "网络电影",
    "genre": "古装 / 动作 / 奇幻",
    "tags": "女将军 幻境冒险 西域魔教 平行世界 夫妻联手"
  },
  {
    "title": "胡说霸道",
    "url": "movie-1454.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 犯罪, 剧情",
    "tags": "黑帮 脱口秀 反讽 身份错位 黑色幽默"
  },
  {
    "title": "珍妮宝贝",
    "url": "movie-1455.html",
    "cover": "./105.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "tags": "人工智能 母爱 伦理困境 科技惊悚"
  },
  {
    "title": "护卫者2022",
    "url": "movie-1456.html",
    "cover": "./106.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 犯罪",
    "tags": "退役特工 AI监控 女儿被绑"
  },
  {
    "title": "寿司女郎",
    "url": "movie-1457.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 美食",
    "tags": "寿司 女性成长 匠人精神 师徒"
  },
  {
    "title": "祭品",
    "url": "movie-1458.html",
    "cover": "./108.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖，惊悚",
    "tags": "民俗 巫术 诅咒 村庄 反转"
  },
  {
    "title": "惹鬼回路3",
    "url": "movie-1459.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 科幻",
    "tags": "都市传说 电子幽灵 信号恐惧 社交网络诅咒 赛博朋克怨灵"
  },
  {
    "title": "莫斯科来的香烟女孩",
    "url": "movie-1460.html",
    "cover": "./110.jpg",
    "year": "2017",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": "走私 父女 90年代 莫斯科"
  },
  {
    "title": "最后命令",
    "url": "movie-1461.html",
    "cover": "./111.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "tags": "末世 人工智能 孤胆英雄 硬核动作"
  },
  {
    "title": "长城",
    "url": "movie-1462.html",
    "cover": "./112.jpg",
    "year": "2016",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "genre": "动作 / 奇幻 / 历史",
    "tags": "怪兽 守城 宋朝 火药 饕餮"
  },
  {
    "title": "尖叫天空",
    "url": "movie-1463.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 灾难",
    "tags": "怪兽 空战 末日"
  },
  {
    "title": "尖端医疗的真相",
    "url": "movie-1464.html",
    "cover": "./114.jpg",
    "year": "2029",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑, 医疗, 剧情",
    "tags": "医药黑幕 职场 反转"
  },
  {
    "title": "烹煮历史",
    "url": "movie-1465.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情，美食，历史",
    "tags": "美食番 昭和时代 家族史 料理 治愈"
  },
  {
    "title": "古畑任三郎 公平的杀人者",
    "url": "movie-1466.html",
    "cover": "./116.jpg",
    "year": "2006",
    "region": "日本",
    "type": "电视剧SP",
    "genre": "悬疑 / 犯罪",
    "tags": "推理 绅士刑警 完美犯罪 反转"
  },
  {
    "title": "猎心之迷毒之罪",
    "url": "movie-1467.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 刑侦",
    "tags": "微表情测谎 高智商犯罪 心理攻防 无罪推定"
  },
  {
    "title": "峡江疑影",
    "url": "movie-1468.html",
    "cover": "./118.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "三峡 迷雾 心理 罪案"
  },
  {
    "title": "黑客帝国：矩阵重启",
    "url": "movie-1469.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、动作",
    "tags": "赛博朋克 哲学 续作 视觉盛宴"
  },
  {
    "title": "爱寓春光",
    "url": "movie-1470.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": "同性 养老院 黄昏恋 治愈 社会议题"
  },
  {
    "title": "我的秘密之花",
    "url": "movie-1471.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": "双重身份 家庭秘密 心理 反转 文艺"
  },
  {
    "title": "隔壁的女孩",
    "url": "movie-1472.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "tags": "偷窥 心理博弈 都市传说 反转 暗网直播"
  },
  {
    "title": "明与暗",
    "url": "movie-1473.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑惊悚",
    "tags": "双胞胎 心理操控 反转结局"
  },
  {
    "title": "大室家亲爱的姐妹们",
    "url": "movie-1474.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧、动画、日常",
    "tags": "百合 日常系 姐妹 温暖 搞笑"
  },
  {
    "title": "异虫咒",
    "url": "movie-1475.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/恐怖",
    "tags": "寄生 虫族 末日 生存"
  },
  {
    "title": "殊不简单",
    "url": "movie-1476.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "tags": "多重反转 智力对决 低配高能"
  },
  {
    "title": "第27章",
    "url": "movie-1477.html",
    "cover": "./127.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 心理",
    "tags": "作家 杀人狂 章节诅咒 元叙事"
  },
  {
    "title": "花心萝卜",
    "url": "movie-1478.html",
    "cover": "./128.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧、爱情",
    "tags": "都市 渣男 港式无厘头 浪子回头"
  },
  {
    "title": "强尼不是我",
    "url": "movie-1479.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 黑色幽默",
    "tags": "身份错位 存在主义 荒诞喜剧"
  },
  {
    "title": "我盛大的希腊婚礼",
    "url": "movie-1480.html",
    "cover": "./130.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": "家庭冲突 文化差异 浪漫喜剧"
  },
  {
    "title": "拳击少年",
    "url": "movie-1481.html",
    "cover": "./131.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/运动/家庭",
    "tags": "单亲家庭 校园霸凌 热血逆袭 温情催泪"
  },
  {
    "title": "不义联盟：人间之神",
    "url": "movie-1482.html",
    "cover": "./132.jpg",
    "year": "2023",
    "region": "美国",
    "type": "动画电影",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": "超级英雄 平行宇宙 反乌托邦 道德抉择"
  },
  {
    "title": "小蜜蜂 勇气的旋律",
    "url": "movie-1483.html",
    "cover": "./133.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 冒险 / 家庭",
    "tags": "蜜蜂 成长 环保 音乐"
  },
  {
    "title": "怜情蜜意",
    "url": "movie-1484.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 剧情",
    "tags": "治愈 契约恋爱 年下"
  },
  {
    "title": "敌对同谋",
    "url": "movie-1485.html",
    "cover": "./135.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 法律",
    "tags": "法庭 CIA 伦理困境"
  },
  {
    "title": "三时三餐渔村篇第六季",
    "url": "movie-1486.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "综艺",
    "genre": "真人秀",
    "tags": "慢生活 海岛自给自足 治愈系 老友重聚"
  },
  {
    "title": "耶稣的哭泣",
    "url": "movie-1487.html",
    "cover": "./137.jpg",
    "year": "2018",
    "region": "意大利 / 法国",
    "type": "电影",
    "genre": "剧情 / 宗教",
    "tags": "圣像 信仰危机 修复师 奇迹"
  },
  {
    "title": "这就是生活2020",
    "url": "movie-1488.html",
    "cover": "./138.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "疫情 武汉 邻里情深"
  },
  {
    "title": "真正的生活",
    "url": "movie-1489.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "喜剧, 剧情",
    "tags": "中产 讽刺 家庭"
  },
  {
    "title": "你好，之华",
    "url": "movie-1490.html",
    "cover": "./140.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": "书信 遗憾 治愈 散文式叙事 重逢"
  },
  {
    "title": "半镜",
    "url": "movie-1491.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 心理, 剧情",
    "tags": "镜像 双重人格 记忆碎片 密室"
  },
  {
    "title": "爱之物语",
    "url": "movie-1492.html",
    "cover": "./142.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情、奇幻、单元剧",
    "tags": "物拟人 治愈 每集一个物品 温柔丧气 短篇集"
  },
  {
    "title": "假偶成真",
    "url": "movie-1493.html",
    "cover": "./143.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情喜剧",
    "tags": "腐剧 契约情侣 娱乐圈 身份错位"
  },
  {
    "title": "深海巨灵大海龟",
    "url": "movie-1494.html",
    "cover": "./144.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 灾难, 怪兽",
    "tags": "特摄 环保 巨型生物 亲情 催泪"
  },
  {
    "title": "摘星的女人粤语",
    "url": "movie-1495.html",
    "cover": "./145.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "TV 剧集",
    "genre": "剧情， 爱情",
    "tags": "港姐 豪门 奋斗 粤语原声"
  },
  {
    "title": "小夜刀：最后的吸血鬼",
    "url": "movie-1496.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "动作、奇幻、恐怖",
    "tags": "吸血鬼猎人 女高中生 武士刀 末世 残酷美学"
  },
  {
    "title": "飞上枝头变乌鸦",
    "url": "movie-1497.html",
    "cover": "./147.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 奇幻, 爱情",
    "tags": "换身 贫富差距 港式幽默"
  },
  {
    "title": "杀手怨曲",
    "url": "movie-1498.html",
    "cover": "./148.jpg",
    "year": "2002",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 音乐",
    "tags": "巴黎 杀手宿命 爵士小号 存在主义"
  },
  {
    "title": "寂寞大街",
    "url": "movie-1499.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性",
    "tags": "深夜便利店 边缘人 散文诗 相遇"
  },
  {
    "title": "立功·东北旧事",
    "url": "movie-1500.html",
    "cover": "./150.jpg",
    "year": "2023",
    "region": "中国内地",
    "type": "剧集",
    "genre": "悬疑、犯罪、喜剧",
    "tags": "东北 下岗潮 黑色幽默 连环命案"
  },
  {
    "title": "飞翔的艺术",
    "url": "movie-1501.html",
    "cover": "./1.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 运动",
    "tags": "滑板 父子关系 街头文化 自由意志 成长伤痛"
  },
  {
    "title": "法医缉凶",
    "url": "movie-1502.html",
    "cover": "./2.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 法医",
    "tags": "法医探案 连环杀人 科技破案 心理博弈"
  },
  {
    "title": "谁的青春不叛逆",
    "url": "movie-1503.html",
    "cover": "./3.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春 / 校园 / 家庭",
    "tags": "学渣与学霸 身份互换 高考压力 代际冲突 轻喜剧"
  },
  {
    "title": "蜘蛛网",
    "url": "movie-1504.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "tags": "谍战 冷战 北韩 双面间谍"
  },
  {
    "title": "儿娃子2008",
    "url": "movie-1505.html",
    "cover": "./5.jpg",
    "year": "2008",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 运动",
    "tags": "西北农村 留守儿童 足球 励志"
  },
  {
    "title": "纯真消逝的年代",
    "url": "movie-1506.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 历史 / 青春",
    "tags": "二战 童年 创伤"
  },
  {
    "title": "魔术师和消失的女孩",
    "url": "movie-1507.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑犯罪",
    "tags": "魔术 绑架 密室逃脱 推理 反转"
  },
  {
    "title": "梦想成真粤语",
    "url": "movie-1508.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 奇幻",
    "tags": "粤语梗 市井小民 许愿反转"
  },
  {
    "title": "独角兽2017",
    "url": "movie-1509.html",
    "cover": "./9.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 奇幻",
    "tags": "创业 梦想 独角兽企业"
  },
  {
    "title": "赛马皮特",
    "url": "movie-1510.html",
    "cover": "./10.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "剧情冒险",
    "tags": "动物 公路片 少年成长 孤独"
  },
  {
    "title": "白色严冬",
    "url": "movie-1511.html",
    "cover": "./11.jpg",
    "year": "2023",
    "region": "挪威",
    "type": "电影",
    "genre": "灾难、生存",
    "tags": "极地 生存挑战 女性主角 真实事件改编"
  },
  {
    "title": "青涩禁果",
    "url": "movie-1512.html",
    "cover": "./12.jpg",
    "year": "2017",
    "region": "台湾地区",
    "type": "电影",
    "genre": "剧情， 爱情",
    "tags": "校园 未成年怀孕 社会议题"
  },
  {
    "title": "孤狼救援",
    "url": "movie-1513.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": "退役特警 雪地追击 孤胆英雄 人质解救"
  },
  {
    "title": "不朽真情",
    "url": "movie-1514.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 历史",
    "tags": "维多利亚时代 阶级差异 坚守 催泪"
  },
  {
    "title": "猫小姐寻真爱",
    "url": "movie-1515.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市、爱情、轻奇幻",
    "tags": "猫娘 治愈 单元故事"
  },
  {
    "title": "恐怖旅舍",
    "url": "movie-1516.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚, 犯罪",
    "tags": "背包客噩梦 东欧犯罪 血腥虐杀"
  },
  {
    "title": "我爱猫头鹰",
    "url": "movie-1517.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "家庭 / 喜剧 / 冒险",
    "tags": "猫头鹰 环保 少年 小镇 搞笑反派"
  },
  {
    "title": "天堂岛之外第三季",
    "url": "movie-1518.html",
    "cover": "./18.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电视剧",
    "genre": "悬疑， 犯罪",
    "tags": "孤岛凶案 双线叙事 新角色登场 殖民地历史 道德困境"
  },
  {
    "title": "欲海狂潮",
    "url": "movie-1519.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情，情色，犯罪",
    "tags": "欲望 禁忌 背叛 黑色电影 多线叙事"
  },
  {
    "title": "寻找绝配情人",
    "url": "movie-1520.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "美国",
    "type": "综艺",
    "genre": "真人秀, 恋爱",
    "tags": "素人 心理学实验 高概念 反转 社会实验"
  },
  {
    "title": "萌牛费迪南",
    "url": "movie-1521.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "美国",
    "type": "Movie",
    "genre": "动画，冒险，喜剧",
    "tags": "反战 和平主义 农场 竞技 友情"
  },
  {
    "title": "地雷战2015",
    "url": "movie-1522.html",
    "cover": "./22.jpg",
    "year": "2015",
    "region": "中国内地",
    "type": "电影",
    "genre": "战争, 动作",
    "tags": "民间智慧 爆破 抗日"
  },
  {
    "title": "少林兄弟",
    "url": "movie-1523.html",
    "cover": "./23.jpg",
    "year": "1977",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，剧情",
    "tags": "少林 兄弟情 复仇 武术"
  },
  {
    "title": "大八卦",
    "url": "movie-1524.html",
    "cover": "./24.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 黑色幽默",
    "tags": "八卦 自媒体 舆论杀人 反转"
  },
  {
    "title": "古剑奇谭之流月昭明",
    "url": "movie-1525.html",
    "cover": "./25.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻、动作",
    "tags": "游戏改编 仙侠 特效 热血 寻宝"
  },
  {
    "title": "姐妹情仇",
    "url": "movie-1526.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "悬疑 / 剧情 / 家庭",
    "tags": "双女主 复仇 豪门恩怨 身份之谜"
  },
  {
    "title": "命转情真粤语",
    "url": "movie-1527.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情 / 奇幻",
    "tags": "灵魂互换 粤语 爱情 悬疑"
  },
  {
    "title": "地厚天高",
    "url": "movie-1528.html",
    "cover": "./28.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 纪录片",
    "tags": "青春 迷茫 理想主义 当代青年 高校"
  },
  {
    "title": "魔偶奇谭6",
    "url": "movie-1529.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，奇幻，动作",
    "tags": "提线木偶 黑魔法 邪教 猎奇杀人"
  },
  {
    "title": "争妻起祸",
    "url": "movie-1530.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作犯罪",
    "tags": "黑帮伦理 兄弟反目 血腥复仇"
  },
  {
    "title": "蝴蝶公墓",
    "url": "movie-1531.html",
    "cover": "./31.jpg",
    "year": "2028",
    "region": "中国大陆 / 香港",
    "type": "电影",
    "genre": "悬疑 / 爱情 / 奇幻",
    "tags": "都市传说 基因 轮回"
  },
  {
    "title": "困扰婚姻",
    "url": "movie-1532.html",
    "cover": "./32.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情 / 悬疑 / 家庭",
    "tags": "婚姻危机 反转再反转 心理博弈"
  },
  {
    "title": "小鱼儿与花无缺",
    "url": "movie-1533.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "武侠 / 古装 / 喜剧",
    "tags": "古龙改编 双男主 江湖 宿命兄弟"
  },
  {
    "title": "白夜宸缘起三生",
    "url": "movie-1534.html",
    "cover": "./34.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 奇幻 / 爱情",
    "tags": "仙侠 三生三世 替身 虐恋 东方美学"
  },
  {
    "title": "青春末世物语",
    "url": "movie-1535.html",
    "cover": "./35.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 青春 / 生存",
    "tags": "末日 高中生 微缩文明 哲学寓言 群像剧"
  },
  {
    "title": "我们离婚吧",
    "url": "movie-1536.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧 / 家庭",
    "tags": "离婚 政治 婚姻制度 荒诞"
  },
  {
    "title": "无脸朋友",
    "url": "movie-1537.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻, 儿童, 亲情",
    "tags": "孤独 幻想朋友 成长 治愈"
  },
  {
    "title": "亲情回归",
    "url": "movie-1538.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭, 剧情",
    "tags": "寻亲 收养 代际和解 现实题材 催泪"
  },
  {
    "title": "夜行者",
    "url": "movie-1539.html",
    "cover": "./39.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪 / 惊悚",
    "tags": "黑色 新闻 道德沦丧 杰克·吉伦哈尔"
  },
  {
    "title": "失衡凶间之罪与杀",
    "url": "movie-1540.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚, 犯罪",
    "tags": "密室 心理 单元剧 因果 血腥"
  },
  {
    "title": "东京爱情动作故事",
    "url": "movie-1541.html",
    "cover": "./41.jpg",
    "year": "2023",
    "region": "日本",
    "type": "网剧",
    "genre": "剧情, 爱情, 职业",
    "tags": "业界 幕后 真实改编 成长"
  },
  {
    "title": "雅达布与波尔",
    "url": "movie-1542.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "印度",
    "type": "动画电影",
    "genre": "奇幻/冒险",
    "tags": "恒河 神话重构 兄弟情 手绘油画"
  },
  {
    "title": "恋爱的发现",
    "url": "movie-1543.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情 / 喜剧",
    "tags": "前任 同居 修罗场"
  },
  {
    "title": "白狗",
    "url": "movie-1544.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情, 心理, 惊悚",
    "tags": "人性隐喻 种族偏见 驯化与野性 女性觉醒"
  },
  {
    "title": "大地之源：西之岛",
    "url": "movie-1545.html",
    "cover": "./45.jpg",
    "year": "2022",
    "region": "日本",
    "type": "纪录片",
    "genre": "自然, 纪录",
    "tags": "火山岛 生态演变 无人区"
  },
  {
    "title": "锦绣宅心",
    "url": "movie-1546.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、家族、悬疑",
    "tags": "宅斗 刺绣 遗产 女性群像 反转"
  },
  {
    "title": "两次运球",
    "url": "movie-1547.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 运动",
    "tags": "篮球 亲情 救赎 街头"
  },
  {
    "title": "该隐的末裔",
    "url": "movie-1548.html",
    "cover": "./48.jpg",
    "year": "2023",
    "region": "英国 / 爱尔兰",
    "type": "电视剧",
    "genre": "剧情，悬疑，宗教惊悚",
    "tags": "神父侦探 乡村凶案 圣经隐喻 弑父"
  },
  {
    "title": "蜡像",
    "url": "movie-1549.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "博物馆 活体 维多利亚 哥特"
  },
  {
    "title": "黑暗复仇者",
    "url": "movie-1550.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 奇幻",
    "tags": "反超级英雄 暗黑宇宙 道德灰域 暴力美学"
  },
  {
    "title": "破碎我心",
    "url": "movie-1551.html",
    "cover": "./51.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": "失恋 拼图 记忆 疗伤 治愈"
  },
  {
    "title": "淘气飞行猴",
    "url": "movie-1552.html",
    "cover": "./52.jpg",
    "year": "2023",
    "region": "法国",
    "type": "动画片",
    "genre": "喜剧, 家庭, 冒险",
    "tags": "猴子 飞行 奇幻森林 亲子"
  },
  {
    "title": "东野圭吾推理系列",
    "url": "movie-1553.html",
    "cover": "./53.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "tags": "单元剧 烧脑 人性黑暗 神级改编"
  },
  {
    "title": "救世者",
    "url": "movie-1554.html",
    "cover": "./54.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，犯罪",
    "tags": "杀手 良心 宗教 街头"
  },
  {
    "title": "深夜前的五分钟",
    "url": "movie-1555.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 爱情",
    "tags": "时间循环 心理惊悚 钟表意象 未竟遗憾"
  },
  {
    "title": "水井边的初恋",
    "url": "movie-1556.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "纯爱 昭和风情 怀旧 错过与重逢"
  },
  {
    "title": "恋爱大战",
    "url": "movie-1557.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "喜剧, 爱情, 浪漫",
    "tags": "欢喜冤家 职场恋爱 互坑互爱 高甜"
  },
  {
    "title": "拳脚之路",
    "url": "movie-1558.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，剧情，体育",
    "tags": "打擂台 街头格斗 师徒 MMA 小人物逆袭"
  },
  {
    "title": "从你的全世界路过",
    "url": "movie-1559.html",
    "cover": "./59.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/剧情/青春",
    "tags": "电台情缘 异地恋 人生过客 治愈催泪"
  },
  {
    "title": "天使威士忌",
    "url": "movie-1560.html",
    "cover": "./60.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 喜剧, 励志",
    "tags": "苏格兰 威士忌 社区服务 救赎"
  },
  {
    "title": "幻影杀机",
    "url": "movie-1561.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 科幻",
    "tags": "特工 光学隐身 硬核打斗 阴谋"
  },
  {
    "title": "怪物史莱克外传：欢度圣诞",
    "url": "movie-1562.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "美国",
    "type": "短片/特别篇",
    "genre": "动画, 喜剧, 家庭",
    "tags": "圣诞 梦工厂 恶搞 温馨"
  },
  {
    "title": "白骨王后",
    "url": "movie-1563.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "瑞典 / 挪威",
    "type": "电影",
    "genre": "奇幻 / 恐怖 / 历史",
    "tags": "北欧神话 女巫 诅咒 王室 黑暗童话"
  },
  {
    "title": "夏日情人",
    "url": "movie-1564.html",
    "cover": "./64.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 奇幻",
    "tags": "海滩 夏日恋情 身份错位 互换身体 治愈"
  },
  {
    "title": "历史的进程",
    "url": "movie-1565.html",
    "cover": "./65.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史, 剧情, 年代",
    "tags": "国企改革 三代传承 工业史诗"
  },
  {
    "title": "刽乐假期",
    "url": "movie-1566.html",
    "cover": "./66.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，喜剧",
    "tags": "血腥 幽默 假期"
  },
  {
    "title": "纯真小镇的夫人",
    "url": "movie-1567.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 剧情",
    "tags": "小镇疑云 双面人生 女性觉醒 黑色幽默"
  },
  {
    "title": "雪孩子",
    "url": "movie-1568.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "奇幻 / 家庭",
    "tags": "经典改编 AI 孤独儿童 陪伴 催泪"
  },
  {
    "title": "大雄的宇宙小战争2021",
    "url": "movie-1569.html",
    "cover": "./69.jpg",
    "year": "2021",
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻, 冒险",
    "tags": "哆啦A梦 宇宙战争 童年"
  },
  {
    "title": "完全婚姻手册",
    "url": "movie-1570.html",
    "cover": "./70.jpg",
    "year": "2000",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": "婚姻 夫妻 互换 生活"
  },
  {
    "title": "吉尔伯特",
    "url": "movie-1571.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、心理",
    "tags": "多重人格 小镇秘密 自闭症兄弟 救赎"
  },
  {
    "title": "南国艳迹",
    "url": "movie-1572.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "新加坡 / 马来西亚",
    "type": "电影",
    "genre": "剧情 / 同性 / 历史",
    "tags": "南洋 粤剧 禁忌恋 殖民时代"
  },
  {
    "title": "奇怪的搭档日本版",
    "url": "movie-1573.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑, 喜剧, 律政",
    "tags": "翻拍 律师 欢喜冤家 案件推理"
  },
  {
    "title": "我是丽",
    "url": "movie-1574.html",
    "cover": "./74.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": "人格分裂 复仇 女性"
  },
  {
    "title": "寻金记",
    "url": "movie-1575.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "西部, 冒险, 剧情",
    "tags": "淘金热 荒野求生 资本 人性 历史"
  },
  {
    "title": "爱的终结",
    "url": "movie-1576.html",
    "cover": "./76.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 悬疑, 爱情",
    "tags": "婚姻危机 诺曼底 心理博弈"
  },
  {
    "title": "侦探拍档",
    "url": "movie-1577.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作喜剧",
    "tags": "搭档 冤家 退休警察 网络犯罪 爆笑"
  },
  {
    "title": "亲爱的德国医生",
    "url": "movie-1578.html",
    "cover": "./78.jpg",
    "year": "2018",
    "region": "阿根廷 / 德国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": "纳粹余生 心理操控 南方小镇"
  },
  {
    "title": "隔壁的护士助理",
    "url": "movie-1579.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "医疗 / 悬疑",
    "tags": "护士 偷听 医疗事故 复仇"
  },
  {
    "title": "落魄总裁",
    "url": "movie-1580.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 爱情",
    "tags": "身份反转 职场 逆袭 甜宠"
  },
  {
    "title": "喷气赛车",
    "url": "movie-1581.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻",
    "tags": "竞速 改装 未来 废土 兄弟情"
  },
  {
    "title": "过关斩将",
    "url": "movie-1582.html",
    "cover": "./82.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "tags": "未来反乌托邦 真人杀戮秀 硬汉 暴力美学"
  },
  {
    "title": "葡萄酒商的运气",
    "url": "movie-1583.html",
    "cover": "./83.jpg",
    "year": "2009",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": "乡村酿酒 天使交易 生命之酒"
  },
  {
    "title": "妖医",
    "url": "movie-1584.html",
    "cover": "./84.jpg",
    "year": "2021",
    "region": "泰国 / 中国香港",
    "type": "电影",
    "genre": "惊悚 / 奇幻 / 医学",
    "tags": "巫医 人体改造 伦理恐怖"
  },
  {
    "title": "毒舌大状",
    "url": "movie-1585.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "律政, 喜剧, 剧情",
    "tags": "律师 香港 法庭 嘴炮 逆转"
  },
  {
    "title": "海底世界寻宝大作战！",
    "url": "movie-1586.html",
    "cover": "./86.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影/动画",
    "genre": "动画/喜剧/冒险",
    "tags": "海洋生物 环保主题 宝藏猎人 青春期"
  },
  {
    "title": "欲望和智慧",
    "url": "movie-1587.html",
    "cover": "./87.jpg",
    "year": "2005",
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 历史",
    "tags": "宫廷 女性 权谋 哲学 情欲"
  },
  {
    "title": "娱乐之家",
    "url": "movie-1588.html",
    "cover": "./88.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 科幻",
    "tags": "密室逃脱 直播 科技伦理 反转"
  },
  {
    "title": "三天摄爱",
    "url": "movie-1589.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情, 同性, 奇幻",
    "tags": "失忆 倒计时 甜虐 三生三世"
  },
  {
    "title": "电表人生",
    "url": "movie-1590.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "现实主义 底层 代际 奋斗 催泪"
  },
  {
    "title": "土路都有盐味道",
    "url": "movie-1591.html",
    "cover": "./91.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺、乡村、现实",
    "tags": "留守儿童 盐碱地 亲情 归乡 平遥影展"
  },
  {
    "title": "在首领猎人的土地上",
    "url": "movie-1592.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "巴西",
    "type": "电影",
    "genre": "剧情，历史，冒险",
    "tags": "亚马逊部落 殖民者入侵 复仇 丛林法则"
  },
  {
    "title": "拆局专家粤语",
    "url": "movie-1593.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": "谈判专家 危机处理 粤语原声 职业剧"
  },
  {
    "title": "人之初",
    "url": "movie-1594.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情/伦理",
    "tags": "基因编辑 父母 选择 伦理"
  },
  {
    "title": "雷神奇侠4：爱与雷霆",
    "url": "movie-1595.html",
    "cover": "./95.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "超级英雄/动作喜剧",
    "tags": "北欧神话 家庭喜剧 中年危机 重金属"
  },
  {
    "title": "都是她的错",
    "url": "movie-1596.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑，惊悚",
    "tags": "罗生门 女性视角 社会派 多层反转"
  },
  {
    "title": "闪耀吧！中华文明",
    "url": "movie-1597.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "文化, 历史, 真人秀",
    "tags": "考古 国宝 明星体验 科普 沉浸式"
  },
  {
    "title": "超级英雄之死",
    "url": "movie-1598.html",
    "cover": "./98.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 反超级英雄",
    "tags": "解构 悬疑 政治隐喻 黑暗风"
  },
  {
    "title": "十年日本",
    "url": "movie-1599.html",
    "cover": "./99.jpg",
    "year": "2030",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 剧情",
    "tags": "近未来 老龄化 科技伦理 单元式"
  },
  {
    "title": "美国体育故事",
    "url": "movie-1600.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 运动",
    "tags": "励志 真实事件改编 种族 逆袭 热血"
  },
  {
    "title": "失恋399年",
    "url": "movie-1601.html",
    "cover": "./101.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻，爱情，喜剧",
    "tags": "长生不老 反复失恋 时间循环 黑色幽默 治愈"
  },
  {
    "title": "三个奶爸一个娃",
    "url": "movie-1602.html",
    "cover": "./102.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "tags": "闹剧 婴儿 室友 八十年代经典"
  },
  {
    "title": "志在出位",
    "url": "movie-1603.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 励志",
    "tags": "小人物 逆袭 荒诞 港式幽默 职场"
  },
  {
    "title": "醉乡民谣",
    "url": "movie-1604.html",
    "cover": "./104.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "tags": "民谣 科恩兄弟 60年代 失败者之歌"
  },
  {
    "title": "时空降魔录",
    "url": "movie-1605.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "genre": "奇幻 / 动作 / 悬疑",
    "tags": "穿越时空 降妖除魔 团队冒险"
  },
  {
    "title": "黑暗之家",
    "url": "movie-1606.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "凶宅 保险调查 童年阴影 诅咒 反转"
  },
  {
    "title": "双面生活",
    "url": "movie-1607.html",
    "cover": "./107.jpg",
    "year": "2026",
    "region": "法国",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 心理",
    "tags": "人格分裂 法官 巴黎 记忆 身份"
  },
  {
    "title": "玛诺欧斯",
    "url": "movie-1608.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "希腊",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 神话",
    "tags": "古希腊神话 牛头怪转世 迷宫隐喻 心理挣扎 宿命论"
  },
  {
    "title": "人鱼恋",
    "url": "movie-1609.html",
    "cover": "./109.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/奇幻/剧情",
    "tags": "人鱼 渔村 哑女 治愈 韩式催泪"
  },
  {
    "title": "第一课",
    "url": "movie-1610.html",
    "cover": "./110.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 运动 / 青春",
    "tags": "电竞 师生 成长 现实题材 逆袭"
  },
  {
    "title": "炽恋",
    "url": "movie-1611.html",
    "cover": "./111.jpg",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "LGBT 民俗 诅咒 轮回"
  },
  {
    "title": "绝命时钟2:22",
    "url": "movie-1612.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，悬疑",
    "tags": "时空循环 诅咒 数字强迫症 都市传说"
  },
  {
    "title": "结果1977",
    "url": "movie-1613.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史剧情",
    "tags": "高考 时代变迁 群像 命运"
  },
  {
    "title": "龙虎金刚",
    "url": "movie-1614.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 兄弟情",
    "tags": "香港电影 硬核动作 双雄 黑帮卧底"
  },
  {
    "title": "月光下，我记得",
    "url": "movie-1615.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "女性 乡愁 亲情"
  },
  {
    "title": "梦十夜",
    "url": "movie-1616.html",
    "cover": "./116.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻， 悬疑， 文艺",
    "tags": "单元剧 潜意识 梦境解析 大师原作"
  },
  {
    "title": "欢喜一甲亲",
    "url": "movie-1617.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 剧情",
    "tags": "亲情 误会 返乡 温情"
  },
  {
    "title": "淘金杀手",
    "url": "movie-1618.html",
    "cover": "./118.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "西部 / 犯罪 / 黑色幽默",
    "tags": "杀手 淘金热 兄弟 反转 黑色幽默"
  },
  {
    "title": "六人帮",
    "url": "movie-1619.html",
    "cover": "./119.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情",
    "tags": "校园 友情 成长 社会 叛逆"
  },
  {
    "title": "畸变",
    "url": "movie-1620.html",
    "cover": "./120.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、恐怖、惊悚",
    "tags": "身体恐怖 基因实验 太空变异 密室逃生"
  },
  {
    "title": "未来时速",
    "url": "movie-1621.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "犯罪, 科幻",
    "tags": "快递 时间流速 阴谋"
  },
  {
    "title": "失控犯罪：山谷金百合",
    "url": "movie-1622.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "tags": "推理 小镇 百合花 复仇"
  },
  {
    "title": "鱼缸",
    "url": "movie-1623.html",
    "cover": "./123.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭 / 心理",
    "tags": "单亲家庭 青春期 沉默 城市孤独"
  },
  {
    "title": "真田幸村的谋略",
    "url": "movie-1624.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "历史、战争、权谋",
    "tags": "战国 真田幸村 大阪之阵 以少胜多 悲情英雄"
  },
  {
    "title": "瘦皮猴外传",
    "url": "movie-1625.html",
    "cover": "./125.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 传记",
    "tags": "怀旧 小人物 温情 粤语"
  },
  {
    "title": "成龙的特技",
    "url": "movie-1626.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "香港",
    "type": "纪录片",
    "genre": "纪录片, 动作, 传记",
    "tags": "成龙幕后 特技揭秘 香港动作片黄金时代 片场故事"
  },
  {
    "title": "近亲",
    "url": "movie-1627.html",
    "cover": "./127.jpg",
    "year": "2021",
    "region": "丹麦, 瑞典",
    "type": "电影",
    "genre": "剧情, 伦理, 悬疑",
    "tags": "家族 秘密 北欧 冷峻 反转"
  },
  {
    "title": "2001太空漫游",
    "url": "movie-1628.html",
    "cover": "./128.jpg",
    "year": "1968",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，哲学",
    "tags": "人工智能 进化 太空 史诗"
  },
  {
    "title": "龙之诞生",
    "url": "movie-1629.html",
    "cover": "./129.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 传记",
    "tags": "李小龙 少林 好莱坞 功夫"
  },
  {
    "title": "爱在初心",
    "url": "movie-1630.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情、文艺、家庭",
    "tags": "老年恋爱 阿尔茨海默症 初恋重逢 日系治愈"
  },
  {
    "title": "地球：奇迹的一天",
    "url": "movie-1631.html",
    "cover": "./131.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片， 自然",
    "tags": "自然 一日 生命奇迹"
  },
  {
    "title": "巴黎急诊中",
    "url": "movie-1632.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "genre": "医疗纪实风",
    "tags": "极速救援 夜间急诊室 难民问题 多线叙事"
  },
  {
    "title": "荡寇滩",
    "url": "movie-1633.html",
    "cover": "./133.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠, 西部",
    "tags": "黄沙复仇 双刀客 荒漠客栈"
  },
  {
    "title": "桃花绽放",
    "url": "movie-1634.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧 (剧集)",
    "genre": "剧情 / 家庭 / 年代",
    "tags": "女性成长 民国往事 家族恩怨"
  },
  {
    "title": "最灿烂的我们",
    "url": "movie-1635.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 青春",
    "tags": "时空穿越 校园 遗憾 治愈"
  },
  {
    "title": "苏格兰场大侦探",
    "url": "movie-1636.html",
    "cover": "./136.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑犯罪",
    "tags": "本格推理 伦敦迷雾 高智商对决"
  },
  {
    "title": "隐形药追追追",
    "url": "movie-1637.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、喜剧",
    "tags": "意外隐身 全民目击 药物失控"
  },
  {
    "title": "8号展品",
    "url": "movie-1638.html",
    "cover": "./138.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、悬疑、心理惊悚",
    "tags": "博物馆惊魂 时间循环 高概念"
  },
  {
    "title": "纵欲",
    "url": "movie-1639.html",
    "cover": "./139.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 伦理",
    "tags": "禁忌 沉沦 救赎"
  },
  {
    "title": "风火飞轮",
    "url": "movie-1640.html",
    "cover": "./140.jpg",
    "year": "1995",
    "region": "中国台湾",
    "type": "电影",
    "genre": "动作 / 运动 / 青春",
    "tags": "单车竞速 兄弟情 街头 热血"
  },
  {
    "title": "拿破仑情史",
    "url": "movie-1641.html",
    "cover": "./141.jpg",
    "year": "1954",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "爱情/传记/历史",
    "tags": "手写信 政治联姻 约瑟芬 法兰西第一帝国"
  },
  {
    "title": "校草是女生",
    "url": "movie-1642.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 校园 / 喜剧",
    "tags": "女扮男装 偶像 反转 青春"
  },
  {
    "title": "被遗忘的女人",
    "url": "movie-1643.html",
    "cover": "./143.jpg",
    "year": "2021",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "tags": "阿尔茨海默 记忆谜团 女性视角 反转"
  },
  {
    "title": "纯纯的小时光",
    "url": "movie-1644.html",
    "cover": "./144.jpg",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "genre": "青春，爱情",
    "tags": "校园暗恋 青梅竹马 夏日"
  },
  {
    "title": "瓦解",
    "url": "movie-1645.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 心理",
    "tags": "人格分裂 记忆迷宫 犯罪心理"
  },
  {
    "title": "天下太忙",
    "url": "movie-1646.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市喜剧",
    "tags": "职场 多线叙事 社畜 荒诞"
  },
  {
    "title": "乱世情鸳",
    "url": "movie-1647.html",
    "cover": "./147.jpg",
    "year": "1998",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情，年代，战争",
    "tags": "民国虐恋 国共内战 失忆重逢 家族恩仇"
  },
  {
    "title": "爱，来的刚好",
    "url": "movie-1648.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 都市 / 治愈",
    "tags": "大龄剩女 失忆 时间循环 咖啡店"
  },
  {
    "title": "村主任和他的女友",
    "url": "movie-1649.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 乡村 / 喜剧",
    "tags": "乡村振兴 基层干部 驻村生活 南北差异"
  },
  {
    "title": "啦啦队的反击",
    "url": "movie-1650.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 运动",
    "tags": "女性力量 逆袭 校园"
  },
  {
    "title": "抹黑",
    "url": "movie-1651.html",
    "cover": "./1.jpg",
    "year": "2022",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 黑色幽默",
    "tags": "网络暴力 乡村荒诞 真相反转"
  },
  {
    "title": "三个拥抱",
    "url": "movie-1652.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "三代女性 和解 拥抱 情感压抑"
  },
  {
    "title": "曼哈顿女佣",
    "url": "movie-1653.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": "身份错位 灰姑娘故事 现代童话 女性独立"
  },
  {
    "title": "继承2020",
    "url": "movie-1654.html",
    "cover": "./4.jpg",
    "year": "2026",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "惊悚，剧情",
    "tags": "遗产 豪宅 家族秘密 密室 心理战"
  },
  {
    "title": "魅力四射2",
    "url": "movie-1655.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 音乐 / 歌舞",
    "tags": "啦啦队 高校对决 姐妹情 反向激励 意外教练"
  },
  {
    "title": "敢问路在何方",
    "url": "movie-1656.html",
    "cover": "./6.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "纪录片、音乐、传记",
    "tags": "西游记 六小龄童 幕后故事 文化传承"
  },
  {
    "title": "汤姆利特",
    "url": "movie-1657.html",
    "cover": "./7.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚，剧情",
    "tags": "心理 小镇 邪教 秘密"
  },
  {
    "title": "欢喜姻缘",
    "url": "movie-1658.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧, 古装, 爱情",
    "tags": "先婚后爱 欢喜冤家 宅斗"
  },
  {
    "title": "怪从底出",
    "url": "movie-1659.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "公寓 地下 怪物 阶级 韩式惊悚"
  },
  {
    "title": "我们差点丧命",
    "url": "movie-1660.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 冒险",
    "tags": "登山 真实事件改编 求生"
  },
  {
    "title": "眠狂四郎女妖剑",
    "url": "movie-1661.html",
    "cover": "./11.jpg",
    "year": "1966",
    "region": "日本",
    "type": "电影",
    "genre": "动作",
    "tags": "时代剧 剑戟 孤独英雄 情色"
  },
  {
    "title": "哭泣杀神2：风声鹤唳",
    "url": "movie-1662.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "动作犯罪",
    "tags": "杀手 宿命对决 成人向"
  },
  {
    "title": "反击罗曼史",
    "url": "movie-1663.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 剧情",
    "tags": "甜宠 反套路 职场 逆袭 女性"
  },
  {
    "title": "我的朋友是萌鲨",
    "url": "movie-1664.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "喜剧, 冒险, 家庭",
    "tags": "鲨鱼 友情 海洋 环保"
  },
  {
    "title": "饥渴小淫娃",
    "url": "movie-1665.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "情色， 剧情， 心理",
    "tags": "大尺度 心理惊悚 欲望 畸恋 女性视角"
  },
  {
    "title": "禁房情变",
    "url": "movie-1666.html",
    "cover": "./16.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": "禁忌 家族 复仇 伦理"
  },
  {
    "title": "那些年，我们一起追的女孩",
    "url": "movie-1667.html",
    "cover": "./17.jpg",
    "year": "2011",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 青春",
    "tags": "校园 暗恋 成长 怀旧"
  },
  {
    "title": "小新郎2",
    "url": "movie-1668.html",
    "cover": "./18.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 奇幻",
    "tags": "童婚 时空穿越 反讽 萌娃"
  },
  {
    "title": "圣母峰消失之谜",
    "url": "movie-1669.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "美国 / 尼泊尔",
    "type": "电影",
    "genre": "冒险 / 悬疑 / 灾难",
    "tags": "珠峰 登山探险 神秘失踪 科学VS传说 生存"
  },
  {
    "title": "森林女王2024",
    "url": "movie-1670.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "英国 / 美国",
    "type": "电视剧",
    "genre": "纪录片 / 自然 / 剧情式纪录",
    "tags": "动物 母系社会 黑猩猩 非洲 拟人化叙事"
  },
  {
    "title": "战血染征袍",
    "url": "movie-1671.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史战争",
    "tags": "三国 同人 动作"
  },
  {
    "title": "她在梦中跳舞",
    "url": "movie-1672.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻, 爱情, 剧情",
    "tags": "梦境 芭蕾 抑郁症 双向救赎"
  },
  {
    "title": "拯救地球！",
    "url": "movie-1673.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "tags": "黑色幽默 荒诞 伪纪录片 环保 讽刺"
  },
  {
    "title": "中国大门",
    "url": "movie-1674.html",
    "cover": "./24.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "历史/社会",
    "tags": "改革开放 经济特区 贸易 时代变迁"
  },
  {
    "title": "拉贝日记",
    "url": "movie-1675.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "德国, 中国大陆",
    "type": "电影",
    "genre": "历史, 战争, 传记",
    "tags": "拉贝 南京 人性光辉 真实改编"
  },
  {
    "title": "斯普利特的美妙夜晚",
    "url": "movie-1676.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "克罗地亚",
    "type": "电影",
    "genre": "剧情，爱情",
    "tags": "一夜情 陌生人 海风 治愈"
  },
  {
    "title": "中国鸟人",
    "url": "movie-1677.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 悬疑",
    "tags": "环保 超现实 民间传说 黑色幽默"
  },
  {
    "title": "隔壁的吸血鬼美眉",
    "url": "movie-1678.html",
    "cover": "./28.jpg",
    "year": "2018",
    "region": "日本",
    "type": "TV动画",
    "genre": "喜剧 / 日常 / 奇幻",
    "tags": "吸血鬼 百合 萌系 日常搞笑"
  },
  {
    "title": "生机",
    "url": "movie-1679.html",
    "cover": "./29.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难，剧情",
    "tags": "疫病 孤岛 人性 希望"
  },
  {
    "title": "我的队长不对劲",
    "url": "movie-1680.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧 / 剧情",
    "tags": "职场 体育 排球 热血 反差萌"
  },
  {
    "title": "女校风波",
    "url": "movie-1681.html",
    "cover": "./31.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、青春、校园",
    "tags": "女子学校 阶级 友谊 霸凌 成长"
  },
  {
    "title": "魔晶猎人第一季",
    "url": "movie-1682.html",
    "cover": "./32.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻 / 冒险 / 热血",
    "tags": "国产动画 御兽 竞技 水晶 少年热血"
  },
  {
    "title": "继承者风云",
    "url": "movie-1683.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 商战 / 悬疑",
    "tags": "财阀 继承人 复仇 豪门争夺"
  },
  {
    "title": "邪恶一代",
    "url": "movie-1684.html",
    "cover": "./34.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "剧集",
    "genre": "犯罪",
    "tags": "黑帮 世代 腐败 反转 悲情"
  },
  {
    "title": "亲密的陌生人",
    "url": "movie-1685.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "tags": "心理惊悚 邻居 双重身份 窥视"
  },
  {
    "title": "寡妇之恋",
    "url": "movie-1686.html",
    "cover": "./36.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 爱情 / 社会",
    "tags": "寡妇 禁忌之恋 种姓制度 乡村 觉醒"
  },
  {
    "title": "在卡萨布兰卡的一晚",
    "url": "movie-1687.html",
    "cover": "./37.jpg",
    "year": "2023",
    "region": "美国 / 摩洛哥",
    "type": "电影",
    "genre": "爱情，剧情，文艺",
    "tags": "一夜情 偶遇 中年危机"
  },
  {
    "title": "金发女郎",
    "url": "movie-1688.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "tags": "身份置换 心理操控 黑色电影 女性复仇"
  },
  {
    "title": "我的师兄太强了",
    "url": "movie-1689.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装， 奇幻",
    "tags": "修仙 搞笑 师弟 反套路"
  },
  {
    "title": "时雨之记",
    "url": "movie-1690.html",
    "cover": "./40.jpg",
    "year": "1998",
    "region": "日本",
    "type": "电影",
    "genre": "爱情、剧情、唯美",
    "tags": "京都 雨 和服 错过 老年"
  },
  {
    "title": "绑架游戏2024",
    "url": "movie-1691.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑，犯罪",
    "tags": "高智商 反转 局中局"
  },
  {
    "title": "蒙面达虎",
    "url": "movie-1692.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 音乐",
    "tags": "摇滚 乡村音乐 身份错位 追梦"
  },
  {
    "title": "不合适也要有个限度！",
    "url": "movie-1693.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 家庭",
    "tags": "代际冲突 社会议题 治愈"
  },
  {
    "title": "后备主厨",
    "url": "movie-1694.html",
    "cover": "./44.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 美食 / 励志",
    "tags": "料理职场 师徒传承 逆袭成长 日式匠心 隐藏身份"
  },
  {
    "title": "人间至味是清欢",
    "url": "movie-1695.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 美食",
    "tags": "美食 治愈 城市变迁"
  },
  {
    "title": "冲撞乐队的沉浮",
    "url": "movie-1696.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "音乐, 传记, 剧情",
    "tags": "朋克 乐队 70年代 成名 堕落"
  },
  {
    "title": "蚝民",
    "url": "movie-1697.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 纪实",
    "tags": "渔村 拆迁 父子 传统"
  },
  {
    "title": "没礼貌的家伙们",
    "url": "movie-1698.html",
    "cover": "./48.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电视剧",
    "genre": "喜剧，剧情",
    "tags": "邻里 毒舌 反差萌 治愈"
  },
  {
    "title": "十年泰国",
    "url": "movie-1699.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情， 爱情， 文艺",
    "tags": "时间跨度 异国漂泊 身份认同 遗憾美学"
  },
  {
    "title": "永恒的少女",
    "url": "movie-1700.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 女性",
    "tags": "不老症 母女 时间囚笼 拉美魔幻 衰老焦虑"
  },
  {
    "title": "前科者",
    "url": "movie-1701.html",
    "cover": "./51.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 犯罪, 社会",
    "tags": "更生保护 边缘人群 女性视角 社会派悬疑 救赎"
  },
  {
    "title": "双世美姬",
    "url": "movie-1702.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 奇幻 / 爱情",
    "tags": "双人格 戏子 前世今生 军阀 虐恋"
  },
  {
    "title": "第九名乘客",
    "url": "movie-1703.html",
    "cover": "./53.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "游轮 失踪 灵异 密闭空间 反转"
  },
  {
    "title": "十八年后的终极告白国语",
    "url": "movie-1704.html",
    "cover": "./54.jpg",
    "year": "2028",
    "region": "中国香港",
    "type": "剧集",
    "genre": "犯罪、悬疑、剧情",
    "tags": "旧案重启 兄弟反目 配音版 道德困境"
  },
  {
    "title": "黄面老虎",
    "url": "movie-1705.html",
    "cover": "./55.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": "港产片 黑帮 卧底 拳拳到肉"
  },
  {
    "title": "音乐2023",
    "url": "movie-1706.html",
    "cover": "./56.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "音乐剧情",
    "tags": "摇滚 中年危机 梦想"
  },
  {
    "title": "霹雳皇龙纪",
    "url": "movie-1707.html",
    "cover": "./57.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "武侠 / 奇幻 / 布袋戏",
    "tags": "布袋戏 皇权争斗 神魔对决"
  },
  {
    "title": "非关性爱",
    "url": "movie-1708.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/爱情",
    "tags": "无性恋 亲密关系 社会实验 内心独白"
  },
  {
    "title": "恋爱漫游地",
    "url": "movie-1709.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情, 剧情, 公路",
    "tags": "公路 怀旧 成长 治愈"
  },
  {
    "title": "伊凡",
    "url": "movie-1710.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情, 战争, 奇幻",
    "tags": "二战 返老还童 老兵 村小"
  },
  {
    "title": "再闯魔域",
    "url": "movie-1711.html",
    "cover": "./61.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 奇幻 / 恐怖",
    "tags": "续集 恶魔 硬核战斗 黑暗英雄 血腥美学"
  },
  {
    "title": "请神灯1",
    "url": "movie-1712.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻/喜剧",
    "tags": "神话 反套路 搞笑"
  },
  {
    "title": "海军罪案调查处 第二十季",
    "url": "movie-1713.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 剧情 / 悬疑",
    "tags": "长寿剧 军旅 探案 团队"
  },
  {
    "title": "女警事业",
    "url": "movie-1714.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "刑侦, 剧情",
    "tags": "女警 职场 案件 成长"
  },
  {
    "title": "老处女1939",
    "url": "movie-1715.html",
    "cover": "./65.jpg",
    "year": "1939",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 民国",
    "tags": "民国 女性 黑白电影 时代悲剧 文学改编"
  },
  {
    "title": "成为你",
    "url": "movie-1716.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、剧情",
    "tags": "身份认同 意识上传 家庭伦理 反转结局"
  },
  {
    "title": "舍不得哥哥",
    "url": "movie-1717.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "兄弟情 自闭症 成长 离别"
  },
  {
    "title": "跃动火鹤",
    "url": "movie-1718.html",
    "cover": "./68.jpg",
    "year": "2019",
    "region": "西班牙",
    "type": "电影",
    "genre": "歌舞 / 剧情",
    "tags": "弗拉明戈 女性觉醒 复仇 红裙"
  },
  {
    "title": "大雄的海底鬼岩城",
    "url": "movie-1719.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动画, 科幻, 冒险",
    "tags": "哆啦A梦 海底 亚特兰蒂斯"
  },
  {
    "title": "琵琶怨",
    "url": "movie-1720.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "genre": "古装 / 悬疑 / 爱情",
    "tags": "唐代 琵琶 宫廷秘闻 替身"
  },
  {
    "title": "法国万岁",
    "url": "movie-1721.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧，历史，讽刺",
    "tags": "荒诞 中世纪 奥运会 民族自豪 戏仿"
  },
  {
    "title": "年轻的丈夫们",
    "url": "movie-1722.html",
    "cover": "./72.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 家庭, 喜剧",
    "tags": "早婚 兄弟情 育儿压力 成长阵痛"
  },
  {
    "title": "约瀚与洞",
    "url": "movie-1723.html",
    "cover": "./73.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 剧情 / 心理",
    "tags": "独立电影 寓言 神秘主义 青少年 压抑"
  },
  {
    "title": "酷爸的疯狂假期",
    "url": "movie-1724.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧， 家庭， 冒险",
    "tags": "法式幽默 父子情 乌龙事件 温馨 搞笑"
  },
  {
    "title": "日常～恋之声～",
    "url": "movie-1725.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情， 日常， 音乐",
    "tags": "声优职场 电台恋爱 生活流 治愈"
  },
  {
    "title": "迷离杀",
    "url": "movie-1726.html",
    "cover": "./76.jpg",
    "year": "2026",
    "region": "中国香港 / 台湾",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": "记忆删除 连环杀手 罗生门 精神分析"
  },
  {
    "title": "丹麦娇妻",
    "url": "movie-1727.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "丹麦",
    "type": "剧集",
    "genre": "剧情/悬疑",
    "tags": "北欧 家庭 秘密 心理惊悚 女性"
  },
  {
    "title": "玛拉与盗火者",
    "url": "movie-1728.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "北欧",
    "type": "电影",
    "genre": "冒险, 奇幻, 史诗",
    "tags": "北欧神话 女性英雄 盗火 成长 视觉系"
  },
  {
    "title": "更美好的事第一季",
    "url": "movie-1729.html",
    "cover": "./79.jpg",
    "year": "2016",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，剧情",
    "tags": "单亲妈妈 成长 日常 幽默 温情"
  },
  {
    "title": "游荡街头",
    "url": "movie-1730.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，青春",
    "tags": "街头少年 移民二代 一夜游荡 马赛"
  },
  {
    "title": "女奴",
    "url": "movie-1731.html",
    "cover": "./81.jpg",
    "year": "1976",
    "region": "巴西",
    "type": "剧集",
    "genre": "剧情",
    "tags": "经典 爱情 反抗 苦难 传奇"
  },
  {
    "title": "温柔生物",
    "url": "movie-1732.html",
    "cover": "./82.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，奇幻",
    "tags": "环保 隐喻 诗意 怪物"
  },
  {
    "title": "信心主宰",
    "url": "movie-1733.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "新加坡",
    "type": "电视剧",
    "genre": "剧情 / 商战 / 律政",
    "tags": "新加坡法律 金融诈骗 精英对决 反转"
  },
  {
    "title": "诅咒之刃",
    "url": "movie-1734.html",
    "cover": "./84.jpg",
    "year": "2005",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 历史",
    "tags": "妖刀 宿命 战国 血腥美学"
  },
  {
    "title": "微笑",
    "url": "movie-1735.html",
    "cover": "./85.jpg",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖",
    "tags": "诅咒 传染 心理"
  },
  {
    "title": "珍妮，日与夜",
    "url": "movie-1736.html",
    "cover": "./86.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 心理",
    "tags": "双重人格 职场女性 童年创伤 身份认同 英伦冷静风"
  },
  {
    "title": "拜托小姐国语",
    "url": "movie-1737.html",
    "cover": "./87.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧、爱情、剧情",
    "tags": "国语配音 豪门千金 忠犬管家 欢喜冤家"
  },
  {
    "title": "第三次世界大战",
    "url": "movie-1738.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 战争",
    "tags": "政治 惊悚 末日 群像 国际"
  },
  {
    "title": "三个少年第二季",
    "url": "movie-1739.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀, 旅行, 青春",
    "tags": "少年 旅行 成长 真实 友谊"
  },
  {
    "title": "在越南最后的日子",
    "url": "movie-1740.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "美国，越南",
    "type": "电影",
    "genre": "历史，剧情",
    "tags": "越战 撤侨 记者 人道主义"
  },
  {
    "title": "无尽",
    "url": "movie-1741.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "tags": "循环 时间 哲学 孤独"
  },
  {
    "title": "夏日之恋",
    "url": "movie-1742.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "南法 暑假 富家女 穷小子 阶级"
  },
  {
    "title": "红酒烩鸡2",
    "url": "movie-1743.html",
    "cover": "./93.jpg",
    "year": "2020",
    "region": "德国",
    "type": "电影",
    "genre": "喜剧, 家庭, 美食",
    "tags": "烹饪 父女 乌龙事件 续集 温情"
  },
  {
    "title": "强者的新传说",
    "url": "movie-1744.html",
    "cover": "./94.jpg",
    "year": "2022",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻战斗",
    "tags": "勇者 重生 龙傲天 反套路"
  },
  {
    "title": "冒冒风险",
    "url": "movie-1745.html",
    "cover": "./95.jpg",
    "year": "1967",
    "region": "法国",
    "type": "电影",
    "genre": "犯罪，剧情，冒险",
    "tags": "黑帮 逃亡 亦敌亦友 杀手温情"
  },
  {
    "title": "爆笑虫子之冒险岛大电影",
    "url": "movie-1746.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动画， 喜剧， 冒险",
    "tags": "无对白 昆虫 搞笑 合家欢"
  },
  {
    "title": "以父子之名",
    "url": "movie-1747.html",
    "cover": "./97.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭, 剧情",
    "tags": "亲情 误解 和解"
  },
  {
    "title": "夜访吸血鬼第一季",
    "url": "movie-1748.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "恐怖、奇幻、剧情",
    "tags": "吸血鬼 路易斯安那 访谈 改编"
  },
  {
    "title": "敬！人生",
    "url": "movie-1749.html",
    "cover": "./99.jpg",
    "year": "2019",
    "region": "智利 / 墨西哥",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "葡萄酒 父亲 和解 庄园 临终"
  },
  {
    "title": "家有蛇仙美貌妻",
    "url": "movie-1750.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "奇幻 / 喜剧 / 爱情",
    "tags": "白蛇传改编 仙妖 先婚后爱 爆笑 甜剧"
  },
  {
    "title": "饿虎扑羊",
    "url": "movie-1751.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "tags": "卧底 师徒对决 硬核格斗"
  },
  {
    "title": "搞定岳父大人",
    "url": "movie-1752.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "tags": "婚姻 见家长 农村 城乡差距 搞笑"
  },
  {
    "title": "女恶魔人",
    "url": "movie-1753.html",
    "cover": "./103.jpg",
    "year": "1998",
    "region": "日本",
    "type": "OVA",
    "genre": "奇幻, 恐怖, 动作, 心理",
    "tags": "恶魔 女性主角 暴力美学 存在主义"
  },
  {
    "title": "疯狂婚礼周",
    "url": "movie-1754.html",
    "cover": "./104.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 爱情",
    "tags": "婚礼 家庭闹剧 婚前焦虑 公路喜剧"
  },
  {
    "title": "甲骨文密码",
    "url": "movie-1755.html",
    "cover": "./105.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 冒险 / 历史",
    "tags": "考古 解谜 甲骨文 阴谋 动作"
  },
  {
    "title": "炙热纠缠",
    "url": "movie-1756.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚，悬疑，剧情",
    "tags": "情欲 谎言 别墅迷局 危险关系"
  },
  {
    "title": "炼狱机器",
    "url": "movie-1757.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": "赛博朋克 意识上传 反乌托邦 伦理困境"
  },
  {
    "title": "臭小子与美丽世界",
    "url": "movie-1758.html",
    "cover": "./108.jpg",
    "year": "2009",
    "region": "日本",
    "type": "电影",
    "genre": "青春, 剧情",
    "tags": "叛逆 街头 流浪 救赎"
  },
  {
    "title": "四季如秋",
    "url": "movie-1759.html",
    "cover": "./109.jpg",
    "year": "2022",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "亲情 和解 暮年 情感"
  },
  {
    "title": "孽欲人魔",
    "url": "movie-1760.html",
    "cover": "./110.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "心理惊悚",
    "tags": "畸恋 人格分裂 连环案 反转 雨夜"
  },
  {
    "title": "夺标27秒",
    "url": "movie-1761.html",
    "cover": "./111.jpg",
    "year": "1996",
    "region": "香港",
    "type": "电影",
    "genre": "动作运动",
    "tags": "跑步 黑帮 复仇 街头 反套路"
  },
  {
    "title": "职场心计文学梦",
    "url": "movie-1762.html",
    "cover": "./112.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 喜剧",
    "tags": "文学 代笔 职场 梦想"
  },
  {
    "title": "泣残红",
    "url": "movie-1763.html",
    "cover": "./113.jpg",
    "year": "1934",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/爱情",
    "tags": "民国 女性 悲剧"
  },
  {
    "title": "世界上最强大的男人",
    "url": "movie-1764.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻, 剧情, 悬疑",
    "tags": "超能力 代价 身体恐怖"
  },
  {
    "title": "小夜曲",
    "url": "movie-1765.html",
    "cover": "./115.jpg",
    "year": "2026",
    "region": "奥地利",
    "type": "电影",
    "genre": "剧情, 音乐, 历史",
    "tags": "莫扎特 代笔 古典音乐 悬疑"
  },
  {
    "title": "歹徒们",
    "url": "movie-1766.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪， 剧情， 动作",
    "tags": "黑色电影 兄弟情 末路狂徒"
  },
  {
    "title": "大鹰啸",
    "url": "movie-1767.html",
    "cover": "./117.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 战争, 冒险",
    "tags": "空军 王牌飞行员 夺宝 二战"
  },
  {
    "title": "青春纪录",
    "url": "movie-1768.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情、青春、时代",
    "tags": "倒叙 中年危机 年少日记 和解"
  },
  {
    "title": "药神皇太子：龙之刺",
    "url": "movie-1769.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "奇幻 / 动作 / 冒险",
    "tags": "中药国风 龙族太子 解毒救人 热血成长"
  },
  {
    "title": "维瓦",
    "url": "movie-1770.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 音乐 / 青春",
    "tags": "那不勒斯 歌剧少年 声带病变 最后的咏叹调"
  },
  {
    "title": "与君相恋100次",
    "url": "movie-1771.html",
    "cover": "./121.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻, 爱情, 青春",
    "tags": "时间循环 校园纯爱 日式催泪"
  },
  {
    "title": "欲海凡夫",
    "url": "movie-1772.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "剧情， 爱情， 悬疑",
    "tags": "欲望 婚姻 出轨 心理惊悚 都市"
  },
  {
    "title": "乘风而上的她",
    "url": "movie-1773.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 运动",
    "tags": "帆船 励志 女性 职业"
  },
  {
    "title": "电话情杀案",
    "url": "movie-1774.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": "高智商犯罪 录音 反转 密室"
  },
  {
    "title": "上错老豆身",
    "url": "movie-1775.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "tags": "灵魂互换 父女亲情 爆笑 温情"
  },
  {
    "title": "惊天巨浪",
    "url": "movie-1776.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "灾难, 动作",
    "tags": "海啸 核电站 孤胆英雄"
  },
  {
    "title": "舞动全城粤语",
    "url": "movie-1777.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情 / 歌舞",
    "tags": "街舞 粤语 传承 亲情"
  },
  {
    "title": "桃源春色",
    "url": "movie-1778.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 乡村 / 家庭",
    "tags": "乡村振兴 代际冲突 返乡青年 治愈"
  },
  {
    "title": "安娜贝尔2：诞生",
    "url": "movie-1779.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "tags": "温子仁 招魂宇宙 玩偶 邪灵"
  },
  {
    "title": "超级冰气",
    "url": "movie-1780.html",
    "cover": "./130.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 灾难",
    "tags": "极寒 超能力 末日 生存 少年"
  },
  {
    "title": "性福满路",
    "url": "movie-1781.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧， 爱情， 剧情",
    "tags": "两性 婚姻 情趣用品 邻里"
  },
  {
    "title": "来自亚塞诺瓦茨的达拉",
    "url": "movie-1782.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "塞尔维亚",
    "type": "电影",
    "genre": "剧情, 历史, 战争",
    "tags": "二战 集中营 儿童视角 残酷史诗"
  },
  {
    "title": "杀手迷情",
    "url": "movie-1783.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，爱情，悬疑",
    "tags": "杀手 卧底 致命女人 双面人生 城市霓虹"
  },
  {
    "title": "日式面包王",
    "url": "movie-1784.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧, 奇幻, 美食",
    "tags": "面包 竞技 热血"
  },
  {
    "title": "伊万·艾尔",
    "url": "movie-1785.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情, 战争, 人性",
    "tags": "二战 战俘 德国"
  },
  {
    "title": "暴基枪手",
    "url": "movie-1786.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "动作，犯罪，警匪",
    "tags": "枪战场面 卧底风云 兄弟反目 硬核格斗 华南取景"
  },
  {
    "title": "一秒拳王国语",
    "url": "movie-1787.html",
    "cover": "./137.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 运动, 喜剧",
    "tags": "拳击 穿越 热血 普通话"
  },
  {
    "title": "义警神威",
    "url": "movie-1788.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚, 犯罪",
    "tags": "黑夜法官 以暴制暴 地铁杀手 面具英雄 爽片"
  },
  {
    "title": "最后一次心动",
    "url": "movie-1789.html",
    "cover": "./139.jpg",
    "year": "2019",
    "region": "德国",
    "type": "电影",
    "genre": "爱情/剧情",
    "tags": "心脏移植 换心 宿命之爱 遗愿"
  },
  {
    "title": "黑色的风采",
    "url": "movie-1790.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "剧情、励志、传记",
    "tags": "盲聋哑 教育 师生情 奇迹 改编自海伦·凯勒"
  },
  {
    "title": "河谷镇第一季",
    "url": "movie-1791.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "悬疑 / 青春 / 惊悚",
    "tags": "小镇疑云 高中生活 秘密社团 双胞胎 暗黑校园"
  },
  {
    "title": "银河系守卫",
    "url": "movie-1792.html",
    "cover": "./142.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 冒险",
    "tags": "太空歌剧 反英雄 视觉特效"
  },
  {
    "title": "不负热爱",
    "url": "movie-1793.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，运动",
    "tags": "电竞 励志 青春 热血 成长"
  },
  {
    "title": "白老虎",
    "url": "movie-1794.html",
    "cover": "./144.jpg",
    "year": "2021",
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 犯罪, 惊悚",
    "tags": "阶级跨越 黑色讽刺 社会写实 逆袭 智斗"
  },
  {
    "title": "同班同学",
    "url": "movie-1795.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "剧集",
    "genre": "剧情, 悬疑, 校园",
    "tags": "校园霸凌 时空轮回 百合 社会派 致郁"
  },
  {
    "title": "艾尔文紫",
    "url": "movie-1796.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "tags": "AI觉醒 心理操控 密闭空间 反转"
  },
  {
    "title": "女才男貌",
    "url": "movie-1797.html",
    "cover": "./147.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 喜剧, 都市",
    "tags": "女强男弱 姐弟恋 职场"
  },
  {
    "title": "迷失海湾 第二季",
    "url": "movie-1798.html",
    "cover": "./148.jpg",
    "year": "2022",
    "region": "英国",
    "type": "电视剧 / 剧集",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": "英剧 海滨小镇 连环失踪 女警探 家庭秘密"
  },
  {
    "title": "一切都从与你相逢开始",
    "url": "movie-1799.html",
    "cover": "./149.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "爱情剧情",
    "tags": "治愈 失物招领 慢节奏"
  },
  {
    "title": "吊颈绳",
    "url": "movie-1800.html",
    "cover": "./150.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖、惊悚",
    "tags": "都市传说 因果报应 心理折磨 港式恐怖"
  },
  {
    "title": "另一个美丽妻子",
    "url": "movie-1801.html",
    "cover": "./1.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 剧情",
    "tags": "婚姻危机 双面妻子 心理操控 反转再反转"
  },
  {
    "title": "界限2024",
    "url": "movie-1802.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪 / 悬疑 / 科幻",
    "tags": "平行世界 追凶 伦理困境 烧脑"
  },
  {
    "title": "神警奇偷",
    "url": "movie-1803.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑犯罪",
    "tags": "高智商犯罪 警匪博弈 盗窃题材 反转 单元探案"
  },
  {
    "title": "黑月光法则",
    "url": "movie-1804.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻悬疑",
    "tags": "吸血鬼 法学院 秘密社团 契约"
  },
  {
    "title": "鬼魂出没",
    "url": "movie-1805.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖, 悬疑, 奇幻",
    "tags": "都市传说 灵异 规则怪谈 单元剧 细思极恐"
  },
  {
    "title": "瑞克和莫蒂第八季",
    "url": "movie-1806.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 动画 / 喜剧",
    "tags": "瑞克和莫蒂 脑洞 黑色幽默 多元宇宙 哲学"
  },
  {
    "title": "动态漫画·战鼎第三季",
    "url": "movie-1807.html",
    "cover": "./7.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "动态漫画",
    "genre": "玄幻, 热血, 冒险",
    "tags": "动态漫画 修仙 逆袭 战鼎"
  },
  {
    "title": "唇（电影）",
    "url": "movie-1808.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 悬疑, 文艺",
    "tags": "口红 替身 记忆移植 都市传说"
  },
  {
    "title": "小猪佩奇第一季",
    "url": "movie-1809.html",
    "cover": "./9.jpg",
    "year": "2004",
    "region": "英国",
    "type": "剧集",
    "genre": "动画， 家庭， 儿童",
    "tags": "学前启蒙 家庭日常 幽默短剧 粉红猪"
  },
  {
    "title": "隔壁的吸血鬼美眉",
    "url": "movie-1810.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 日常",
    "tags": "百合 合租 不死族 搞笑"
  },
  {
    "title": "大桥梁",
    "url": "movie-1811.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代史诗",
    "tags": "基建 家族传承 长江"
  },
  {
    "title": "电幻国度",
    "url": "movie-1812.html",
    "cover": "./12.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 冒险 / 剧情",
    "tags": "废土世界 人机共存 少女与机器人 反乌托邦"
  },
  {
    "title": "夏威夷风云",
    "url": "movie-1813.html",
    "cover": "./13.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "genre": "罪案悬疑",
    "tags": "度假胜地 凶杀案 警探 种族冲突"
  },
  {
    "title": "树妖",
    "url": "movie-1814.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖，奇幻",
    "tags": "民俗 乡村 寄生"
  },
  {
    "title": "草人",
    "url": "movie-1815.html",
    "cover": "./15.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚, 悬疑",
    "tags": "民俗恐怖 乡村 因果报应"
  },
  {
    "title": "女心理师之暗夜重生",
    "url": "movie-1816.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 心理",
    "tags": "女性 催眠 连环案 创伤"
  },
  {
    "title": "白色猎人黑色心",
    "url": "movie-1817.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚 / 剧情 / 冒险",
    "tags": "非洲狩猎 双面猎人 殖民反思 心理博弈 人性黑暗"
  },
  {
    "title": "决斗",
    "url": "movie-1818.html",
    "cover": "./18.jpg",
    "year": "1971",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 动作",
    "tags": "公路追杀 卡车 心理压迫 斯皮尔伯格 无对话"
  },
  {
    "title": "春暖花开的时候",
    "url": "movie-1819.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代 / 家庭",
    "tags": "知青 改革开放 乡土中国 群像剧"
  },
  {
    "title": "手册",
    "url": "movie-1820.html",
    "cover": "./20.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑，奇幻",
    "tags": "超自然 规则怪谈 日记 恐怖 哲学"
  },
  {
    "title": "十段生命的律动",
    "url": "movie-1821.html",
    "cover": "./21.jpg",
    "year": "2023",
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情 / 艺术",
    "tags": "女性 生命 诗意"
  },
  {
    "title": "游戏时间",
    "url": "movie-1822.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 家庭, 温情",
    "tags": "游戏 祖孙 治愈 成长 任天堂"
  },
  {
    "title": "追梦实习手册",
    "url": "movie-1823.html",
    "cover": "./23.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "职场，青春，励志",
    "tags": "互联网大厂 实习生 00后整顿职场 女性互助 轻喜剧"
  },
  {
    "title": "唯我独尊2",
    "url": "movie-1824.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 武术",
    "tags": "地下拳赛 父子对决 拳拳到肉 独臂拳法"
  },
  {
    "title": "顽童182",
    "url": "movie-1825.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "青春, 喜剧",
    "tags": "高中生 机车 热血 台湾乡土味"
  },
  {
    "title": "女友的男友",
    "url": "movie-1826.html",
    "cover": "./26.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "爱情喜剧",
    "tags": "互换伴侣 都市情感 误会重重 法式幽默"
  },
  {
    "title": "阿洛伊丝",
    "url": "movie-1827.html",
    "cover": "./27.jpg",
    "year": "2017",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 悬疑",
    "tags": "梦境现实 孤独者 灯塔看守人 海鸟意象 手风琴"
  },
  {
    "title": "星期三消失了",
    "url": "movie-1828.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/奇幻",
    "tags": "时间轮回 身份认知 孤独感"
  },
  {
    "title": "繁荣小镇",
    "url": "movie-1829.html",
    "cover": "./29.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情, 犯罪",
    "tags": "小镇疑云 石油 资本入侵 群像 黑色幽默"
  },
  {
    "title": "脏话连篇",
    "url": "movie-1830.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": "语言 粗口 文学 荒诞"
  },
  {
    "title": "从前的我们",
    "url": "movie-1831.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": "前任 北漂 现实向 十年"
  },
  {
    "title": "月光男孩",
    "url": "movie-1832.html",
    "cover": "./32.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 同性",
    "tags": "黑人 同性 成长 诗意 三段式"
  },
  {
    "title": "洛城少女二十五岁",
    "url": "movie-1833.html",
    "cover": "./33.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "tags": "青春 梦想 巴黎 成长 女性"
  },
  {
    "title": "超级鲨大战机器鲨",
    "url": "movie-1834.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 怪兽",
    "tags": "B级片 鲨鱼 机甲 爽片"
  },
  {
    "title": "伦敦来的男人",
    "url": "movie-1835.html",
    "cover": "./35.jpg",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑, 剧情, 惊悚",
    "tags": "间谍 身份互换 冷战 公寓谜局"
  },
  {
    "title": "玩转全家福",
    "url": "movie-1836.html",
    "cover": "./36.jpg",
    "year": "2019",
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧, 家庭",
    "tags": "春节 公路片 团圆 搞笑"
  },
  {
    "title": "玛丽的白色连衣裙",
    "url": "movie-1837.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "tags": "心理恐怖 都市传说 细节恐惧"
  },
  {
    "title": "回旋镖",
    "url": "movie-1838.html",
    "cover": "./38.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 犯罪",
    "tags": "复仇 时间循环 反转 因果报应"
  },
  {
    "title": "55步",
    "url": "movie-1839.html",
    "cover": "./39.jpg",
    "year": "2017",
    "region": "美国 / 德国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "tags": "法律 精神病院 女权 真实改编"
  },
  {
    "title": "甜蜜的家乡",
    "url": "movie-1840.html",
    "cover": "./40.jpg",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "返乡 治愈 亲情 美食"
  },
  {
    "title": "恶趣味",
    "url": "movie-1841.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑, 犯罪, 黑色幽默",
    "tags": "多重反转 直播杀人 网络暴力 以恶制恶 爽片"
  },
  {
    "title": "悲惨世界：没有终点的旅途",
    "url": "movie-1842.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "历史/犯罪",
    "tags": "名著改编 复仇 警察 救赎"
  },
  {
    "title": "铁拳无敌",
    "url": "movie-1843.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 武侠, 科幻",
    "tags": "功夫 机甲 反乌托邦 硬核"
  },
  {
    "title": "启航",
    "url": "movie-1844.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "tags": "代际冲突 航海 和解"
  },
  {
    "title": "健将联盟",
    "url": "movie-1845.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧, 运动, 励志",
    "tags": "残奥会 逆袭 热血 群像"
  },
  {
    "title": "舞出人生2025",
    "url": "movie-1846.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "歌舞 / 科幻 / 剧情",
    "tags": "近未来 街舞 全息投影 竞赛 人体增强"
  },
  {
    "title": "激情的岁月",
    "url": "movie-1847.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代 / 剧情",
    "tags": "两弹一星 科学家 青春报国 家国情怀"
  },
  {
    "title": "阴阳眼马斯",
    "url": "movie-1848.html",
    "cover": "./48.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 喜剧",
    "tags": "通灵 侦探 搞笑"
  },
  {
    "title": "纸之月2023",
    "url": "movie-1849.html",
    "cover": "./49.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "犯罪剧情",
    "tags": "银行 挪用公款 女性欲望"
  },
  {
    "title": "萨米温与达西玛",
    "url": "movie-1850.html",
    "cover": "./50.jpg",
    "year": "2020",
    "region": "印度",
    "type": "电影",
    "genre": "动作， 爱情， 歌舞",
    "tags": "印度 复仇 村庄 剑术 婚礼"
  },
  {
    "title": "幸福的婚姻",
    "url": "movie-1851.html",
    "cover": "./51.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 剧情",
    "tags": "婚姻 反转 心理惊悚 家庭暴力"
  },
  {
    "title": "烧饼皇后",
    "url": "movie-1852.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国香港 / 中国大陆",
    "type": "电视剧",
    "genre": "古装 / 喜剧 / 商战",
    "tags": "烧饼摊 女扮男装 逆袭皇后 市井智慧"
  },
  {
    "title": "自燃",
    "url": "movie-1853.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 悬疑, 奇幻",
    "tags": "社会议题 压抑 爆发"
  },
  {
    "title": "山丘之外",
    "url": "movie-1854.html",
    "cover": "./54.jpg",
    "year": "2019",
    "region": "以色列",
    "type": "电影",
    "genre": "战争，剧情",
    "tags": "狙击手 创伤 老兵"
  },
  {
    "title": "犹太狮子",
    "url": "movie-1855.html",
    "cover": "./55.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 历史 / 战争",
    "tags": "二战 抵抗运动 身份认同 信仰 生存"
  },
  {
    "title": "肥猫正传粤语",
    "url": "movie-1856.html",
    "cover": "./56.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 家庭",
    "tags": "智力障碍 市井温情 街坊 粤语原声"
  },
  {
    "title": "军医2014",
    "url": "movie-1857.html",
    "cover": "./57.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "军旅, 医疗",
    "tags": "战地医生 人性 抉择"
  },
  {
    "title": "明月照沟渠",
    "url": "movie-1858.html",
    "cover": "./58.jpg",
    "year": "2022",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑 / 爱情 / 犯罪",
    "tags": "替身 情感骗局 烧脑反转 黑色电影"
  },
  {
    "title": "游乐园",
    "url": "movie-1859.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "tags": "成长 亲子 治愈 时间轮回"
  },
  {
    "title": "地心引力",
    "url": "movie-1860.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/灾难",
    "tags": "太空 孤独 求生 母女"
  },
  {
    "title": "兴奋不已",
    "url": "movie-1861.html",
    "cover": "./61.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 剧情 / 奇幻",
    "tags": "情绪失控 荒诞 药物 人性"
  },
  {
    "title": "带兵的人",
    "url": "movie-1862.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "军旅 / 剧情",
    "tags": "军营 成长 热血 传承"
  },
  {
    "title": "捷径",
    "url": "movie-1863.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": "捷径 欲望 连环杀局 反转"
  },
  {
    "title": "宾果地狱",
    "url": "movie-1864.html",
    "cover": "./64.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧，恐怖",
    "tags": "荒诞 黑色幽默 游戏杀人 人性之恶"
  },
  {
    "title": "坏小子们",
    "url": "movie-1865.html",
    "cover": "./65.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": "警匪搭档 以暴制暴 爽片"
  },
  {
    "title": "世纪大毁灭",
    "url": "movie-1866.html",
    "cover": "./66.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 灾难",
    "tags": "全球灾难 特效大片 末日 军武 牺牲"
  },
  {
    "title": "有情感的机器人",
    "url": "movie-1867.html",
    "cover": "./67.jpg",
    "year": "2027",
    "region": "中国",
    "type": "电影",
    "genre": "科幻 / 剧情",
    "tags": "人工智能 伦理 温情 人性"
  },
  {
    "title": "重返1993第二季",
    "url": "movie-1868.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "剧情 / 穿越",
    "tags": "年代 商战 逆袭 怀旧"
  },
  {
    "title": "冯梦龙传奇",
    "url": "movie-1869.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装传记",
    "tags": "明代文学家 知县 三言"
  },
  {
    "title": "偷猎者",
    "url": "movie-1870.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，犯罪",
    "tags": "环保 偷猎 护林员 道德灰色地带"
  },
  {
    "title": "非人哉第三季",
    "url": "movie-1871.html",
    "cover": "./71.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "动画, 喜剧, 奇幻",
    "tags": "神话 日常 神仙妖怪 职场 搞笑"
  },
  {
    "title": "榫卯",
    "url": "movie-1872.html",
    "cover": "./72.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "古建筑 父子情 文化传承 匠心"
  },
  {
    "title": "药命真相",
    "url": "movie-1873.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 惊悚, 律政",
    "tags": "医药黑幕 官司 绝症患者 良知"
  },
  {
    "title": "魔镜奇缘2",
    "url": "movie-1874.html",
    "cover": "./74.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻 / 喜剧",
    "tags": "童话颠覆 女性友谊 魔法物品 冒险 反套路"
  },
  {
    "title": "最后的木琴师",
    "url": "movie-1875.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "柬埔寨 / 法国",
    "type": "电影",
    "genre": "剧情 / 音乐 / 历史",
    "tags": "红色高棉 传统音乐 传承 高棉文化"
  },
  {
    "title": "迦南圣诞",
    "url": "movie-1876.html",
    "cover": "./76.jpg",
    "year": "2017",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 音乐",
    "tags": "合唱团 孤儿 圣诞 治愈"
  },
  {
    "title": "回廊亭杀人事件",
    "url": "movie-1877.html",
    "cover": "./77.jpg",
    "year": "2011",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": "本格推理 东野圭吾 豪门恩怨 复仇"
  },
  {
    "title": "京北的我们",
    "url": "movie-1878.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "北漂 现实向 破镜重圆 成长阵痛"
  },
  {
    "title": "恐怖食人院",
    "url": "movie-1879.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，惊悚，血腥",
    "tags": "废弃精神病院 病态收藏 人肉宴 极限生存 反转结局"
  },
  {
    "title": "肉体的代价",
    "url": "movie-1880.html",
    "cover": "./80.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 悬疑, 体育",
    "tags": "芭蕾 整容 欲望 惊悚 身体恐怖"
  },
  {
    "title": "绿海迷踪",
    "url": "movie-1881.html",
    "cover": "./81.jpg",
    "year": "2025",
    "region": "巴西 / 美国",
    "type": "电影",
    "genre": "冒险 / 悬疑 / 惊悚",
    "tags": "亚马逊 生态 失踪 科考 未知生物"
  },
  {
    "title": "自私的医生",
    "url": "movie-1882.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情, 医疗, 伦理",
    "tags": "反英雄 器官移植 黑市交易 人性拷问"
  },
  {
    "title": "美丽的黄昏",
    "url": "movie-1883.html",
    "cover": "./83.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "养老院之恋 晚年激情 时间与记忆"
  },
  {
    "title": "三超人与女霸王",
    "url": "movie-1884.html",
    "cover": "./84.jpg",
    "year": "1975",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 奇幻 / 喜剧",
    "tags": "功夫喜剧 邵氏早期 女权反讽 大力士"
  },
  {
    "title": "妈妈向前冲2015",
    "url": "movie-1885.html",
    "cover": "./85.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 运动",
    "tags": "马拉松 中年危机 减肥 励志 亲情"
  },
  {
    "title": "嘿！客栈",
    "url": "movie-1886.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "情景喜剧",
    "tags": "民宿 年轻人 创业 治愈"
  },
  {
    "title": "天谕第二季：苍古之绊",
    "url": "movie-1887.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻，仙侠，动作",
    "tags": "国风 宿命 羁绊 异世界 高燃"
  },
  {
    "title": "圣域第二季",
    "url": "movie-1888.html",
    "cover": "./88.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 惊悚",
    "tags": "地下城 教派 权力斗争"
  },
  {
    "title": "攀岩女孩儿",
    "url": "movie-1889.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动 / 剧情 / 家庭",
    "tags": "女性成长 无腿励志 真实改编"
  },
  {
    "title": "黑洞2021",
    "url": "movie-1890.html",
    "cover": "./90.jpg",
    "year": "2021",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "tags": "黑洞 量子物理 末世 伦理困境"
  },
  {
    "title": "颠倒乾坤",
    "url": "movie-1891.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 动作 / 悬疑",
    "tags": "港产片 黑吃黑 身份互换 限时营救 双雄"
  },
  {
    "title": "激情．别动",
    "url": "movie-1892.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 惊悚 / 情色",
    "tags": "禁忌之恋 精神控制 外遇 反转"
  },
  {
    "title": "女士们",
    "url": "movie-1893.html",
    "cover": "./93.jpg",
    "year": "2017",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 女性 / 群像",
    "tags": "女性群像 日本社会 职场妈妈 不婚主义 撕标签"
  },
  {
    "title": "沙克尔顿",
    "url": "movie-1894.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "历史，冒险",
    "tags": "极地探险 生存 领导力 真人真事"
  },
  {
    "title": "财富、年轻和美貌",
    "url": "movie-1895.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "tags": "财阀 整容复仇 阶级对抗 高能反转"
  },
  {
    "title": "我坦白",
    "url": "movie-1896.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑、刑侦、心理",
    "tags": "测谎 心理攻防 审讯室 高智商犯罪"
  },
  {
    "title": "猛鬼大学",
    "url": "movie-1897.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖惊悚",
    "tags": "校园怪谈 民俗恐怖 诅咒 社团活动 新生"
  },
  {
    "title": "青春大反抗",
    "url": "movie-1898.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": "校园 朋克 代际冲突"
  },
  {
    "title": "调皮蛋",
    "url": "movie-1899.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画，家庭",
    "tags": "皮影戏 成长 恶作剧 非遗"
  },
  {
    "title": "德国，苍白的母亲",
    "url": "movie-1900.html",
    "cover": "./100.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "tags": "二战 创伤 母女 悬疑 黑白"
  },
  {
    "title": "爱情蜜语",
    "url": "movie-1901.html",
    "cover": "./101.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情, 青春",
    "tags": "电台 深夜节目 双向暗恋 治愈系 慢节奏"
  },
  {
    "title": "丝绒完恋",
    "url": "movie-1902.html",
    "cover": "./102.jpg",
    "year": "2001",
    "region": "香港",
    "type": "电影",
    "genre": "剧情， 爱情， 悬疑",
    "tags": "王家卫风 回忆 失踪 丝绒旗袍 碎片叙事"
  },
  {
    "title": "四面三角",
    "url": "movie-1903.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "tags": "心理战 密室 背叛 反转 烧脑"
  },
  {
    "title": "白色大厦",
    "url": "movie-1904.html",
    "cover": "./104.jpg",
    "year": "2022",
    "region": "柬埔寨",
    "type": "电影",
    "genre": "剧情",
    "tags": "拆迁 家庭 城市变迁"
  },
  {
    "title": "夏普的战斗",
    "url": "movie-1905.html",
    "cover": "./105.jpg",
    "year": "2006",
    "region": "英国",
    "type": "电视剧",
    "genre": "战争 / 历史 / 动作",
    "tags": "拿破仑时代 英军步枪兵 硬汉主角 殖民地战争 冷兵器接战"
  },
  {
    "title": "这些与二战",
    "url": "movie-1906.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集，迷你剧",
    "genre": "战争，剧情，历史",
    "tags": "多线叙事 平民 士兵 后方"
  },
  {
    "title": "五虎传",
    "url": "movie-1907.html",
    "cover": "./107.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作, 武侠, 历史",
    "tags": "TVB 五虎将 三国改编 兄弟情 权谋"
  },
  {
    "title": "电影之爱：美国电影批评史",
    "url": "movie-1908.html",
    "cover": "./108.jpg",
    "year": "2019",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录片, 历史, 文化",
    "tags": "影评 电影理论 媒体变迁 口水战"
  },
  {
    "title": "寂寞的中尉",
    "url": "movie-1909.html",
    "cover": "./109.jpg",
    "year": "2027",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 战争, 同性",
    "tags": "一战 战壕 书信情缘 孤独"
  },
  {
    "title": "特遣队出击",
    "url": "movie-1910.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 战争",
    "tags": "特种部队 营救 兄弟情"
  },
  {
    "title": "帝一之国",
    "url": "movie-1911.html",
    "cover": "./111.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧、校园、政治",
    "tags": "学生会选举 阶级 反转 青春 荒诞"
  },
  {
    "title": "这个大叔不太囧",
    "url": "movie-1912.html",
    "cover": "./112.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 公路",
    "tags": "大叔 少女 寻亲 乌龙"
  },
  {
    "title": "沙弗的情与欲",
    "url": "movie-1913.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "法国 / 突尼斯",
    "type": "电影",
    "genre": "剧情 / 情欲 / 伦理",
    "tags": "沙漠 考古学家 禁忌婚姻 撒哈拉"
  },
  {
    "title": "穷友记第四季",
    "url": "movie-1914.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧",
    "tags": "英式幽默 底层生活 损友 颓废"
  },
  {
    "title": "侦探洪吉童：消失的村庄",
    "url": "movie-1915.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作， 悬疑， 犯罪",
    "tags": "硬核推理 义贼后裔 社会暗面 拳拳到肉"
  },
  {
    "title": "七剑下天山之修罗眼",
    "url": "movie-1916.html",
    "cover": "./116.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠 / 动作 / 奇幻",
    "tags": "七剑 梁羽生 大IP 特效 情仇"
  },
  {
    "title": "虎豹喋血战",
    "url": "movie-1917.html",
    "cover": "./117.jpg",
    "year": "1986",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "tags": "港式动作 兄弟反目 枪战 复仇"
  },
  {
    "title": "一路向暖",
    "url": "movie-1918.html",
    "cover": "./118.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧集",
    "genre": "剧情， 家庭， 治愈",
    "tags": "春运 返乡 群像剧 现实主义 温情"
  },
  {
    "title": "光影造梦师Ⅱ",
    "url": "movie-1919.html",
    "cover": "./119.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 爱情, 奇幻",
    "tags": "造梦 情感修复 虚拟现实 续集"
  },
  {
    "title": "脱线神话",
    "url": "movie-1920.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "英国 / 美国",
    "type": "剧集（限定剧）",
    "genre": "喜剧, 奇幻, 冒险",
    "tags": "神话解构 现代改编 众神 荒诞"
  },
  {
    "title": "主教之妻",
    "url": "movie-1921.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情，悬疑",
    "tags": "宗教 权力 谋杀 秘密 女性"
  },
  {
    "title": "复仇者联盟",
    "url": "movie-1922.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 冒险",
    "tags": "超级英雄 平行宇宙 终极之战 时间穿越 牺牲"
  },
  {
    "title": "黑道家族",
    "url": "movie-1923.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "剧集",
    "genre": "犯罪 / 家庭",
    "tags": "黑手党 父女 权力交接 暗杀"
  },
  {
    "title": "威尔和格蕾丝第九季",
    "url": "movie-1924.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 同性",
    "tags": "情景喜剧 老友重聚 当代议题"
  },
  {
    "title": "1950他们正年轻",
    "url": "movie-1925.html",
    "cover": "./125.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史、战争、剧情",
    "tags": "抗美援朝 青春与战争 老兵回忆 现实主义"
  },
  {
    "title": "东京无国籍少女",
    "url": "movie-1926.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 悬疑, 文艺",
    "tags": "移民二代 身份认同 东京 孤独"
  },
  {
    "title": "闪灵",
    "url": "movie-1927.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "tags": "心理惊悚 酒店怪谈 通灵 经典翻拍"
  },
  {
    "title": "金馆长对金馆长对金馆长",
    "url": "movie-1928.html",
    "cover": "./128.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 动作 / 武侠",
    "tags": "同名冤家 跆拳道馆 搞笑决斗"
  },
  {
    "title": "盖亚",
    "url": "movie-1929.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "德国 / 法国",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 哲学",
    "tags": "生态 AI 造神 末日"
  },
  {
    "title": "笑看人心",
    "url": "movie-1930.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 人性",
    "tags": "抑郁症患者 脱口秀舞台 笑着哭 社会群像"
  },
  {
    "title": "时间之旅",
    "url": "movie-1931.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 剧情",
    "tags": "时间循环 亲情 抉择 悬疑"
  },
  {
    "title": "死于枪战",
    "url": "movie-1932.html",
    "cover": "./132.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 爱情, 犯罪",
    "tags": "黑帮 宿命 罗密欧与朱丽叶 枪战 悲剧"
  },
  {
    "title": "播音人粤语",
    "url": "movie-1933.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情 / 职场",
    "tags": "电台 粤语 行业剧 怀旧"
  },
  {
    "title": "菲丽希缇",
    "url": "movie-1934.html",
    "cover": "./134.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 音乐",
    "tags": "单亲妈妈 刚果 生存"
  },
  {
    "title": "斗气亲家",
    "url": "movie-1935.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧，家庭",
    "tags": "亲家大战 退休生活 黄昏恋 学区房 中老年群像"
  },
  {
    "title": "密西西比赌徒",
    "url": "movie-1936.html",
    "cover": "./136.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "tags": "赌博 父子情 救赎"
  },
  {
    "title": "费德拉",
    "url": "movie-1937.html",
    "cover": "./137.jpg",
    "year": "2022",
    "region": "希腊 / 法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "tags": "古希腊悲剧 现代改编 伦理 禁忌之恋"
  },
  {
    "title": "旅行吧！井底之蛙",
    "url": "movie-1938.html",
    "cover": "./138.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 冒险 / 喜剧",
    "tags": "励志 寓言改编 美景 治愈"
  },
  {
    "title": "盛夏和她的未婚夫",
    "url": "movie-1939.html",
    "cover": "./139.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "婚前焦虑 现实主义 都市爱情 心理"
  },
  {
    "title": "游行",
    "url": "movie-1940.html",
    "cover": "./140.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情，家庭",
    "tags": "地方祭典 父子和解 小镇衰退"
  },
  {
    "title": "孝庄秘史",
    "url": "movie-1941.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史 / 古装 / 权谋",
    "tags": "大玉儿 多尔衮 女性视角 翻拍"
  },
  {
    "title": "法国大革命",
    "url": "movie-1942.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "genre": "历史 / 剧情 / 动作",
    "tags": "史诗巨制 群像戏 断头台 攻占巴士底狱 罗伯斯庇尔"
  },
  {
    "title": "三宝闹深圳",
    "url": "movie-1943.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动作",
    "tags": "小人物 深圳 追梦 乌龙"
  },
  {
    "title": "乔蒂的烦恼2",
    "url": "movie-1944.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 青春",
    "tags": "续集 身体焦虑 大学新生"
  },
  {
    "title": "蓝色乐章",
    "url": "movie-1945.html",
    "cover": "./145.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "tags": "肖邦 乔治桑 传记 艺术"
  },
  {
    "title": "历劫蔷薇",
    "url": "movie-1946.html",
    "cover": "./146.jpg",
    "year": "1977",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭 / 女性",
    "tags": "女性苦难史 童养媳 民国 逆袭 苦情"
  },
  {
    "title": "李欧·伯曼",
    "url": "movie-1947.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 传记",
    "tags": "作曲家 二战背景 流亡艺术"
  },
  {
    "title": "构想完美",
    "url": "movie-1948.html",
    "cover": "./148.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 科幻 / 心理",
    "tags": "人工智能 婚姻危机 记忆编辑 伦理困境"
  },
  {
    "title": "谁先说分手",
    "url": "movie-1949.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 剧情 / 喜剧",
    "tags": "情侣 冷战 心理战 首尔 黑色幽默"
  },
  {
    "title": "找数圣诞节",
    "url": "movie-1950.html",
    "cover": "./150.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 剧情 / 家庭",
    "tags": "高利贷讨债 圣诞温情 市井小人 浪子回头"
  },
  {
    "title": "末代启示录",
    "url": "movie-1951.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "剧集",
    "genre": "历史奇幻",
    "tags": "古罗马 时间循环 预言家 政治惊悚"
  },
  {
    "title": "圆月映花都",
    "url": "movie-1952.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "tags": "迷惘一代 多角恋 巴黎 侯麦式美学"
  },
  {
    "title": "逐爱之旅",
    "url": "movie-1953.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情，剧情",
    "tags": "公路 救赎 错位时空"
  },
  {
    "title": "开心三傻组",
    "url": "movie-1954.html",
    "cover": "./4.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧",
    "tags": "搞笑 整蛊 友情 市井 怀旧"
  },
  {
    "title": "治疗",
    "url": "movie-1955.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情、心理、医疗",
    "tags": "心理诊所 医患反转 创伤处理 每集一个病人 主线索悬疑"
  },
  {
    "title": "维拉·德雷克",
    "url": "movie-1956.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情传记",
    "tags": "真实事件 女权 堕胎 二战 良心"
  },
  {
    "title": "送赞雪橇犬",
    "url": "movie-1957.html",
    "cover": "./7.jpg",
    "year": "2014",
    "region": "美国 / 加拿大",
    "type": "电影",
    "genre": "冒险 / 家庭",
    "tags": "狗狗 南极 极地求生 忠诚 真实事件改编"
  },
  {
    "title": "战云鸳梦",
    "url": "movie-1958.html",
    "cover": "./8.jpg",
    "year": "1959",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，战争",
    "tags": "黑白片 乱世情缘 粤语长片"
  },
  {
    "title": "印度女孩",
    "url": "movie-1959.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "剧情，体育",
    "tags": "女性成长 板球 种姓"
  },
  {
    "title": "疑云疑雨",
    "url": "movie-1960.html",
    "cover": "./10.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑, 爱情, 犯罪",
    "tags": "奇情 蛇蝎美人 骗保 心理战"
  },
  {
    "title": "刺青2015",
    "url": "movie-1961.html",
    "cover": "./11.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 动作 / 剧情",
    "tags": "黑帮 卧底 身体符号学 暴力美学 兄弟背叛"
  },
  {
    "title": "袋鼠丝苗为两餐粤语",
    "url": "movie-1962.html",
    "cover": "./12.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧, 家庭, 生活",
    "tags": "市井生活 粤语俚语 草根奋斗"
  },
  {
    "title": "飞奔的高卓人",
    "url": "movie-1963.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 西部",
    "tags": "草原 摩托车 复仇 硬汉 极速"
  },
  {
    "title": "雪云",
    "url": "movie-1964.html",
    "cover": "./14.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "tags": "文艺 社会 救赎"
  },
  {
    "title": "死亡邮件",
    "url": "movie-1965.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "tags": "诅咒 网络 都市传说 循环"
  },
  {
    "title": "天降美囍",
    "url": "movie-1966.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧",
    "tags": "奇幻 彩礼 婚姻 爆笑"
  },
  {
    "title": "空中监狱",
    "url": "movie-1967.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 灾难",
    "tags": "劫机 越狱 孤胆英雄 高空"
  },
  {
    "title": "好东西",
    "url": "movie-1968.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "tags": "黑色幽默 小人物 欲望 荒诞"
  },
  {
    "title": "小女巫碧碧2",
    "url": "movie-1969.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "家庭 / 奇幻 / 冒险",
    "tags": "魔法学校 环保主题 宠物精灵"
  },
  {
    "title": "超国度",
    "url": "movie-1970.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 冒险",
    "tags": "平行宇宙 异能 政府阴谋"
  },
  {
    "title": "飞渡魔鬼海",
    "url": "movie-1971.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 冒险",
    "tags": "航海 心理惊悚 失踪 幻觉 商战"
  },
  {
    "title": "归来",
    "url": "movie-1972.html",
    "cover": "./22.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/爱情",
    "tags": "失忆 车站 等待 文革"
  },
  {
    "title": "海底小纵队：火焰之环",
    "url": "movie-1973.html",
    "cover": "./23.jpg",
    "year": "2023",
    "region": "英国 / 中国",
    "type": "电影",
    "genre": "动画 / 冒险",
    "tags": "海洋 环保 火山"
  },
  {
    "title": "布基乌基",
    "url": "movie-1974.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 音乐, 年代",
    "tags": "昭和 女性成长 爵士 励志 晨间剧"
  },
  {
    "title": "求救眨眨眼",
    "url": "movie-1975.html",
    "cover": "./25.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": "密室逃脱 高智商犯罪 直播 极限生存"
  },
  {
    "title": "三个人在新德里",
    "url": "movie-1976.html",
    "cover": "./26.jpg",
    "year": "2019",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "tags": "印度 出租车 陌生人相遇 社会阶层 一夜温情"
  },
  {
    "title": "伏妖白鱼镇2",
    "url": "movie-1977.html",
    "cover": "./27.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 悬疑 / 惊悚",
    "tags": "捉妖 民国 道士 续集 民间传说"
  },
  {
    "title": "亲密梦魇",
    "url": "movie-1978.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 心理",
    "tags": "婚姻谎言 记忆替换 多重人格"
  },
  {
    "title": "黑色1847",
    "url": "movie-1979.html",
    "cover": "./29.jpg",
    "year": "2018",
    "region": "爱尔兰 / 英国",
    "type": "电影",
    "genre": "剧情 / 战争 / 西部",
    "tags": "大饥荒 复仇 爱尔兰 西部片"
  },
  {
    "title": "妙药春情",
    "url": "movie-1980.html",
    "cover": "./30.jpg",
    "year": "1954",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，科幻",
    "tags": "老电影 误食 变年轻"
  },
  {
    "title": "派特森与芬达猫：生日奇闻",
    "url": "movie-1981.html",
    "cover": "./31.jpg",
    "year": "2023",
    "region": "瑞典",
    "type": "动画电影",
    "genre": "家庭、喜剧、冒险",
    "tags": "手绘风格 北欧幽默 老人与猫 发明家 生日惊喜"
  },
  {
    "title": "秋日节拍",
    "url": "movie-1982.html",
    "cover": "./32.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "音乐、爱情、文艺",
    "tags": "手风琴 老年大学 黄昏恋 治愈"
  },
  {
    "title": "穷友记第六季",
    "url": "movie-1983.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧， 剧情",
    "tags": "底层生活 黑色幽默 友情 谢菲尔德"
  },
  {
    "title": "东京24区",
    "url": "movie-1984.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑、科幻、犯罪",
    "tags": "近未来 模拟灾害 道德困境 政治阴谋"
  },
  {
    "title": "虚假的爱情",
    "url": "movie-1985.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑, 爱情",
    "tags": "骗局 复仇 狗血"
  },
  {
    "title": "新活死人之夜",
    "url": "movie-1986.html",
    "cover": "./36.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，僵尸，动作",
    "tags": "丧尸重启 B级片 血腥暴力 幸存者群像 翻拍"
  },
  {
    "title": "天神魔煞",
    "url": "movie-1987.html",
    "cover": "./37.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": "吸血鬼 神父 蒸汽朋克 暴力美学"
  },
  {
    "title": "陌生的西班牙",
    "url": "movie-1988.html",
    "cover": "./38.jpg",
    "year": "2013",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑，惊悚",
    "tags": "失忆 身份 异乡"
  },
  {
    "title": "虎胆忠魂",
    "url": "movie-1989.html",
    "cover": "./39.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "动作， 历史， 战争",
    "tags": "朝鲜战争 长津湖 美军视角 兄弟连"
  },
  {
    "title": "世上只有爸爸好",
    "url": "movie-1990.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "香港 / 中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "tags": "父爱 公路片 寻亲 现实主义 治愈"
  },
  {
    "title": "国风",
    "url": "movie-1991.html",
    "cover": "./41.jpg",
    "year": "2023",
    "region": "中国",
    "type": "综艺",
    "genre": "文化， 真人秀",
    "tags": "国潮 非遗 竞赛 青春"
  },
  {
    "title": "葛兰特·莫里森：与神对话",
    "url": "movie-1992.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片 / 奇幻 / 传记",
    "tags": "漫画改编 哲学思辨 虚实结合 作家生平"
  },
  {
    "title": "大口女争夫",
    "url": "movie-1993.html",
    "cover": "./43.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "喜剧 / 爱情",
    "tags": "乡土剧 家族斗争 欢喜冤家 女性群像"
  },
  {
    "title": "变形计第十八季",
    "url": "movie-1994.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "中国",
    "type": "综艺 / 真人秀",
    "genre": "社会 / 体验 / 教育",
    "tags": "城乡互换 素人 代际冲突 互联网世代 真人秀操控"
  },
  {
    "title": "登峰酷儿",
    "url": "movie-1995.html",
    "cover": "./45.jpg",
    "year": "2026",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "剧情, 同性, 冒险",
    "tags": "登山 LGBTQ+ 真实事件改编 禁忌之恋"
  },
  {
    "title": "梅普尔索普",
    "url": "movie-1996.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "传记， 同性， 艺术",
    "tags": "摄影 争议 80年代"
  },
  {
    "title": "青春乐事",
    "url": "movie-1997.html",
    "cover": "./47.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "喜剧 / 青春 / 校园",
    "tags": "高中 音乐社 友谊 轻喜剧"
  },
  {
    "title": "狂风暴雨群芳刦",
    "url": "movie-1998.html",
    "cover": "./48.jpg",
    "year": "1977",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪, 女性",
    "tags": "邵氏风月 女囚复仇 监狱风云 剥削电影"
  },
  {
    "title": "康涅狄格圣诞",
    "url": "movie-1999.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "爱情, 家庭",
    "tags": "假日电影 治愈 返乡 烘焙"
  },
  {
    "title": "火星时代 第二季",
    "url": "movie-2000.html",
    "cover": "./50.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 生存",
    "tags": "火星殖民 水资源 独立运动 硬科幻"
  }
];
