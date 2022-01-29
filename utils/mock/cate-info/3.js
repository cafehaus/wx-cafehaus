const coffee = [
  { name: '咖啡带', nameEn: 'Coffee Zone', phonetic: "[ˈkɔːfi zoʊn]" },
  { name: '巴西', nameEn: 'Brazil', phonetic: "[brəˈzɪl]" },
  { name: '哥伦比亚', nameEn: 'Colombia', phonetic: "[kəˈlʌmbiə]" },
  { name: '哥斯达黎加', nameEn: 'Costa Rica', phonetic: "[ˈkɔstə ˈrikə]" },
  { name: '埃塞俄比亚', nameEn: 'Ethiopia', phonetic: "[ˌiθiˈoʊpiə]" },
  { name: '危地马拉', nameEn: 'Guatemala', phonetic: "[ˌgwɑtəˈmɑlə]" },
  { name: '印度尼西亚', nameEn: 'Indonesia', phonetic: "[ɪndəˈniːʒə]" },
  { name: '肯尼亚', nameEn: 'Kenya', phonetic: "[ˈkɛnjə]" },
  { name: '巴拿马', nameEn: 'Panama', phonetic: "[ˈpænəmɑː]" },
  { name: '坦桑尼亚', nameEn: 'Tanzania', phonetic: "[ˌtænzəˈniə]" },
  { name: '云南', nameEn: 'Yunnan', phonetic: "" },
  { name: '也门', nameEn: 'Yemen', phonetic: "[ˈjɛmən]" }
].map(m => {
  m.parentId = '3' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee
