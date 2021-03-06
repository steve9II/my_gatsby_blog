const myMovies = [
  {
    title: "风骚律师",
    src: "https://movie.douban.com/subject/26748847/",
    img:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2442801582.jpg",
  },
  {
    title: "绝命毒师",
    src: "https://movie.douban.com/subject/6952149/",
    img:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1579021082.jpg",
  },
  {
    title: "美丽人生",
    src: "https://movie.douban.com/subject/1292063/",
    img:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg",
  },
  {
    title: "搏击俱乐部",
    src: "https://movie.douban.com/subject/1292000/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910926158.jpg",
  },
  {
    title: "国王的演讲",
    src: "https://movie.douban.com/subject/4023638/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p768879237.jpg",
  },
  {
    title: "触不可及",
    src: "https://movie.douban.com/subject/6786002/",
    img:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1454261925.jpg",
  },
  {
    title: "我的大叔",
    src: "https://movie.douban.com/subject/27602137/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520568437.jpg",
  },
  {
    title: "寄生虫",
    src: "https://movie.douban.com/subject/27010768/",
    img:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561439800.jpg",
  },
  {
    title: "你好布拉德",
    src: "https://movie.douban.com/subject/26981174/",
    img:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2497190395.jpg",
  },
  {
    title: "花樣年華",
    src: "https://movie.douban.com/subject/1291557/",
    img:
      "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1910828286.jpg",
  },
  {
    title: "重慶森林",
    src: "https://movie.douban.com/subject/1291999/",
    img:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792381411.jpg",
  },
  {
    title: "Little Women",
    src: "https://movie.douban.com/subject/26348103/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2575325937.jpg",
    shortComment: "若害怕婚姻，那就选择爱情",
  },
  {
    title: "隐秘的角落",
    src: "https://movie.douban.com/subject/33404425/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2609064048.jpg",
    shortComment: "'爱'之花种恶之果",
  },
  {
    title: "情书",
    src: "https://movie.douban.com/subject/1292220/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p449897379.jpg",
    shortComment: "情书承载的青春似乎可以跨越时空，永不消逝",
  },
  {
    title: "fleabag",
    src: "https://movie.douban.com/subject/27053768/",
    img:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549814120.jpg",
    shortComment: "",
  },
  {
    title: "marriage story",
    src: "https://movie.douban.com/subject/27202818/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2571760178.jpg",
    shortComment:
      "一段真实而直白的婚姻故事背后是全世界夫妻都存在的困境————婚姻保存不了爱情",
  },
  {
    title: "出租车 تاکسی",
    src: "https://movie.douban.com/subject/26304167/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2236812017.jpg",
    shortComment: "帕纳西的叛逆",
  },
  {
    title: "He's Just Not That Into You",
    src: "https://movie.douban.com/subject/2161696/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p477821688.jpg",
    shortComment:
      "和喜欢的人在一起与被喜欢的人喜欢，似乎后者才是更多人追求的爱情",
  },
  {
    title: "Pride & Prejudice",
    src: "https://movie.douban.com/subject/1418200/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2016401659.jpg",
    shortComment: "在地位与财富不平等的土壤上，灰姑娘的故事将一直上演",
  },
  {
    title: "Portrait de la jeune fille en feu",
    src: "https://movie.douban.com/subject/30257175/",
    img:
      "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2568318727.jpg",
    shortComment: "俄耳普斯的回头是真爱也是无奈",
  },
  {
    title: "The Kite Runner",
    src: "https://movie.douban.com/subject/1937502/",
    img:
      "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p956325412.jpg",
    shortComment:
      "一部为阿富汗战争提供正当性的政治片,不过无法不动容于导演镜头下那对少年的友情",
  },
  {
    title: "Lord Of War",
    src: "https://movie.douban.com/subject/1419936/",
    img:
      "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792282381.jpg",
    shortComment: "敌人的敌人是朋友，你的天使可能是别人的恶魔",
  },
  {
    title: "The English Patient",
    src: "https://movie.douban.com/subject/1291853/",
    img: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2408623752.jpg",
    shortComment: "Every night I cut out my heart, but in the morning it was full again."
  },
  {
    title: "Whiplash",
    src: "https://movie.douban.com/subject/25773932/",
    img: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2220776342.jpg",
    shortComment: "你愿成为别人眼中的greatest，还是自己世界的unique"
  },
  {
    title: "1917",
    src: "https://movie.douban.com/subject/30252495/",
    img: "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2587146023.jpg",
    shortComment: "仿佛是在玩使命召唤"
  }
]

export default myMovies
