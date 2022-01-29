const coffee = [
  { name: '烘焙工坊', nameEn: 'Roastery', phonetic: "" },
  { name: '烘焙师', nameEn: 'Roaster', phonetic: "[ˈroʊstər]" },
  { name: '咖啡师', nameEn: 'Barista', phonetic: "[bəˈriːstə]" },
  { name: '杯测师（咖啡品质鉴定师）', nameEn: 'Cupper', alias: 'Q-Grader', phonetic: "" },
  { name: '咖啡烘焙机', nameEn: 'Coffee Roaster', phonetic: "[ˈkɔːfi ˈroʊstər]" },
  { name: '鼓式 / 滚筒式烘焙机', nameEn: 'Drum Roaster', phonetic: "[drʌm ˈroʊstər]" },
  { name: '浮风床式烘焙机', nameEn: 'Fluid-Bed Roaster', phonetic: "[ˈfluːɪd bed ˈroʊstər]" },
  { name: '切线式烘焙机', nameEn: 'Tangential Roaster', phonetic: "[tænˈdʒenʃl ˈroʊstər]" },
  { name: '球式离心力烘焙机', nameEn: 'Centrifugal Roaster', phonetic: "[senˈtrɪfjəɡl ˈroʊstər]" },
  { name: '烘焙咖啡豆 / 熟豆', nameEn: 'Roasted Coffee', phonetic: "[ˈroʊstɪd ˈkɔːfi]" },
  { name: '极浅烘焙', nameEn: 'Light Roast', phonetic: "[laɪt roʊst]" },
  { name: '肉桂色烘焙', nameEn: 'Cinnamon Roast', phonetic: "[ˈsɪnəmən roʊst]" },
  { name: '中度烘焙', nameEn: 'Medium Roast', phonetic: "[ˈmiːdiəm roʊst]" },
  { name: '中高度烘焙', nameEn: 'High Roast', phonetic: "[haɪ roʊst]" },
  { name: '都市烘焙', nameEn: 'City Roast', phonetic: "[ˈsɪti roʊst]" },
  { name: '深都市烘焙', nameEn: 'Full City Roast', phonetic: "[fʊl ˈsɪti roʊst]" },
  { name: '法式烘焙', nameEn: 'French Roast', phonetic: "[frentʃ roʊst]" },
  { name: '意式烘焙', nameEn: 'Italian Roast', phonetic: "[ɪˈtæliən roʊst]" },
  { name: '重焙', nameEn: 'Deep Roast', phonetic: "[diːp roʊst]" },
  { name: '深焙', nameEn: 'Dark Roast', phonetic: "[dɑːrk roʊst]" },
].map(m => {
  m.parentId = '8' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee
