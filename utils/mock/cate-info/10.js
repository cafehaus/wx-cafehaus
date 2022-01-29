const coffee = [
  { name: '雨林联盟', nameEn: 'Rainforest Alliance', phonetic: "[ˈreɪnfɔːrɪst əˈlaɪəns]" },
  { name: '卓越杯', abbr: 'COE', nameEn: 'Cup of Excellence', phonetic: "" },
  { name: '精品咖啡协会', abbr: 'SCA', nameEn: 'Specialty Coffee Association', phonetic: "" },
  { name: '美国精品咖啡协会', abbr: 'SCAA', nameEn: 'Specialty Coffee Association of American', phonetic: "" },
  { name: '欧洲精品咖啡协会', abbr: 'SCAE', nameEn: 'Specialty Coffee Association of Europe', phonetic: "" },
  { name: '世界咖啡师大赛', abbr: 'WBC', nameEn: 'World Barista Championship', phonetic: "" },
  { name: '世界咖啡拉花大赛', abbr: 'WLAC', nameEn: 'World Latte Art Championship', phonetic: "" },
  { name: '世界咖啡烘焙师大赛', abbr: 'WRC', nameEn: 'World Roasters Championship', phonetic: "" },
  { name: '世界咖啡冲煮大赛', abbr: 'WBCC', nameEn: 'World Brewers Cup Championship', phonetic: "" },
  { name: '世界咖啡调酒大赛', abbr: 'WCIGSC', nameEn: 'World Coffee In Good Spirits Championship', phonetic: "" },
  { name: '世界咖啡杯测大赛', abbr: 'WCTC', nameEn: 'World Cup Tasters Championship', phonetic: "" },
  { name: '世界爱乐压大赛', abbr: 'WAC', nameEn: 'World Aeropress Championship', phonetic: "" },
  { name: '专业咖啡大师竞技赛', abbr: 'P.C.A', nameEn: 'Professional Coffee Athletics', phonetic: "" },
].map(m => {
  m.parentId = '10' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee
