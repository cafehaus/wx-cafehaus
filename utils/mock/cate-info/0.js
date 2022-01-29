const coffee = [
  { name: '低因咖啡', nameEn: 'Decaffeinated Coffee', phonetic: "[ˌdiːˈkæfɪneɪtɪd ˈkɔːfi]" },
  { name: '半脱因咖啡', nameEn: 'Half-decaf Coffee', phonetic: "[hæf 'dikæf ˈkɔːfi]" },
  { name: '现磨咖啡', nameEn: 'Fresh Ground Coffee', phonetic: "[freʃ ɡraʊnd ˈkɔːfi]" },
  { name: '黑咖啡', nameEn: 'Black Coffee', phonetic: "[blæk ˈkɔːfi]" },
  { name: '速溶咖啡', nameEn: 'Instant Coffee', phonetic: "[ˈɪnstənt ˈkɔːfi]" },
  { name: '手冲咖啡', nameEn: 'Pour Over Coffee', phonetic: "[pɔːr ˈoʊvər ˈkɔːfi]" },
  { name: '冷萃咖啡', nameEn: 'Cold Brew Coffee', phonetic: "[koʊld bruː ˈkɔːfi]" },
  { name: '冰滴咖啡', nameEn: 'Cold Drip Coffee', alias: 'Dutch Coffee', phonetic: "[koʊld drɪp ˈkɔːfi]" },
  { name: '法式滴滤咖啡', nameEn: 'French Coffee', phonetic: "[frentʃ ˈkɔːfi]" },
  { name: '挂耳包', nameEn: 'Drip Bag Coffee', phonetic: "[drɪp bæɡ ˈkɔːfi]" },
  { name: '招牌咖啡', nameEn: 'Signature Coffee', phonetic: "[ˈsɪɡnətʃər ˈkɔːfi]" },
].map(m => {
  m.parentId = '0' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee
