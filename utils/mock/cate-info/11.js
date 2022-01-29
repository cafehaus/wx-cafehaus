const coffee = [
  { name: '星巴克', nameEn: 'Starbucks', phonetic: "" },
  { name: '瑞幸咖啡', nameEn: 'Luckin Coffee', phonetic: "" },
  { name: 'Manner咖啡', nameEn: 'Manner Coffee', phonetic: "" },
  { name: 'Seesaw咖啡', nameEn: 'Seesaw Coffee', phonetic: "" },
  { name: '代数学家咖啡', nameEn: 'Algebraist Coffee', phonetic: "" },
  { name: '连咖啡', nameEn: 'Coffee Box', phonetic: "" },
  { name: '蓝瓶咖啡', nameEn: 'Blue Bottle', phonetic: "" },
  { name: '百分号咖啡', nameEn: '% Arabica', phonetic: "" },
  { name: '知识分子咖啡', nameEn: 'Intelligentsia', phonetic: "" },
  { name: '树墩咖啡', nameEn: 'Stumptown', phonetic: "" },
  { name: '反文化咖啡', nameEn: 'Counter Culture', phonetic: "" },
  { name: '雀巢咖啡', nameEn: 'Nestlé', phonetic: "" },
  { name: '麦咖啡', nameEn: 'McCafe', phonetic: "" },
  { name: '太平洋咖啡', nameEn: 'Pacific Coffee', phonetic: "" },
  { name: '咖世家', nameEn: 'Costa', phonetic: "" },
  { name: '漫咖啡', nameEn: 'Maan Coffee', phonetic: "" },
  { name: '动物园咖啡', nameEn: 'Zoo Coffee', phonetic: "" },
  { name: '上岛咖啡', nameEn: 'UBC Coffee', phonetic: "" },
  { name: '雕刻时光咖啡', nameEn: 'Sculpting in Time', phonetic: "" },
  { name: '咖啡店', nameEn: 'Coffee Bar', alias: 'Coffee Shop', phonetic: "" },
  { name: '咖啡角', nameEn: 'Coffee Corner', phonetic: "" },
  { name: '咖啡控', nameEn: 'Coffee Lover', phonetic: "" },
  { name: '咖啡桌', nameEn: 'Coffee Table', phonetic: "" },
  { name: '喝杯咖啡休息一会', nameEn: 'Coffee Break', phonetic: "" },
].map(m => {
  m.parentId = '11' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee
