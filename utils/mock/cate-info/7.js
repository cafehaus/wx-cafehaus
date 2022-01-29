const coffee = [
  { name: '磨盘式/锯齿式磨豆机', nameEn: 'Burr Grinder', phonetic: "[bɜːr ˈɡraɪndər]" },
  { name: '刀盘/刀片式磨豆机', nameEn: 'Blade Grinder', phonetic: "[bleɪd ˈɡraɪndər]" },
  { name: '粗研磨', nameEn: 'Coarse', des: '颗粒如粗盐大小，适合法压式、过滤式咖啡', phonetic: "[kɔːrs]" },
  { name: '中研磨', nameEn: 'Medium', des: '颗粒如砂砾状，适合平底滤壶的滴滤式咖啡', phonetic: "[ˈmiːdiəm]" },
  { name: '细研磨', nameEn: 'Fine', des: '颗粒如一般的糖或盐，适合锥状滤壶的滴滤式咖啡', phonetic: "[faɪn]" },
  { name: '浓缩咖啡式研磨', nameEn: 'Finer', alias: 'Espresso', des: '颗粒比一般糖再更细一些，适合浓缩咖啡', phonetic: "[ˈfaɪnər]" },
  { name: '极细研磨', nameEn: 'Finest', alias: 'Turkish', phonetic: "[ˈfaɪnəst]" },
  { name: 'Mazzer', nameEn: 'Mazzer', phonetic: "" },
  { name: '迈赫迪', nameEn: 'MAHLKÖNIG', phonetic: "" },
  { name: '司令官', nameEn: 'Comandante', phonetic: "" },
].map(m => {
  m.parentId = '7' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee
