const coffee = [
  { name: '单品', nameEn: 'Single Estate', phonetic: "[ˈsɪŋɡl ɪˈsteɪt]" },
  { name: '综合', nameEn: 'Blend', phonetic: "[blend]" },
  { name: '爪哇', nameEn: 'Java', phonetic: "[ˈdʒɑvə]" },
  { name: '耶加雪菲', nameEn: 'Ethiopia Yirgacheffe', phonetic: "[ˌiθiˈoʊpiə]" },
  { name: '肯尼亚', nameEn: 'Kenya', phonetic: "[ˈkɛnjə]" },
  { name: '肯亚特极', nameEn: 'Kenya AA', phonetic: "[ˈkɛnjə ˌeɪ ˈeɪ]" },
  { name: '哥伦比亚', nameEn: 'Colombia', phonetic: "[kəˈlʌmbiə]" },
  { name: '曼特宁', nameEn: 'Sumatra Mandheling', phonetic: "[ˌsuˈmɑtrə]" },
  { name: '曼巴咖啡', nameEn: 'Mandeling & Brazilian Coffee', phonetic: "" },
  { name: '碳烧咖啡', nameEn: 'Charcoal Roasted Coffee', phonetic: "[ˈtʃɑːrkoʊl ˈroʊstɪd ˈkɔːfi]" },
  { name: '巴西咖啡', nameEn: 'Brazilian Coffee', phonetic: "[brəˈzɪliən ˈkɔːfi]" },
  { name: '哥伦比亚咖啡', nameEn: 'Colombian Coffee', phonetic: "[kəˈlʌmbiən ˈkɔːfi]" },
  { name: '夏威夷可娜咖啡', nameEn: 'Hawaiian Kona Coffee', phonetic: "[həˈwɑjən ˈkoʊnə ˈkɔːfi]" },
  { name: '蓝山咖啡', nameEn: 'Blue Mountain Coffee', phonetic: "[bluː ˈmaʊntn ˈkɔːfi]" },
  { name: '极品蓝山咖啡', nameEn: 'The Best Blue Mountain Coffee', phonetic: "" },
  { name: '猫屎咖啡', nameEn: 'Kopi Luwak', phonetic: "" },
  { name: '精品咖啡', nameEn: 'Specialty Coffee', phonetic: "[ˈspeʃəlti ˈkɔːfi]" },
  { name: '商品咖啡', nameEn: 'Commodity Coffee', phonetic: "[kəˈmɑːdəti ˈkɔːfi]" },
  { name: '咖啡树', nameEn: 'Coffee Tree', phonetic: "[ˈkɔːfi triː]" },
  { name: '咖啡樱桃', nameEn: 'Coffee Cherry', phonetic: "[ˈkɔːfi ˈtʃeri]" },
  { name: '咖啡生豆', nameEn: 'Green Coffee Bean', phonetic: "[ɡriːn ˈkɔːfi biːn]" },
  { name: '脱皮', nameEn: 'Process', phonetic: "[ˈprɑːses , prəˈses]" },
  { name: '摘果', nameEn: 'Harvest', phonetic: "[ˈhɑːrvɪst]" },
  { name: '发酵', nameEn: 'Fermentation', phonetic: "[ˌfɜːrmenˈteɪʃn]" },
  { name: '瑕疵豆', nameEn: 'Defect', phonetic: "[ˈdiːfekt , dɪˈfekt]" },
  { name: '银皮', nameEn: 'Silverskin', phonetic: "[ˈsɪlvər skɪn]" },
  { name: '咖啡豆', nameEn: 'Coffee Bean', phonetic: "[ˈkɔːfi biːn]" },
  { name: '蜜处理法', nameEn: 'Honey Process', phonetic: "[ˈhʌni ˈprɑːses]" },
  { name: '日晒处理法', nameEn: 'Natural Process', phonetic: "[ˈnætʃrəl ˈprɑːses]" },
  { name: '水处理法', nameEn: 'Washed Process', phonetic: "[wɑːʃt ˈprɑːses]" },
  { name: '季风处理法', nameEn: 'Monsooning', phonetic: "" },
  { name: '去果皮日晒处理法', nameEn: 'Pulped Natural Process', phonetic: "[pʌlpt ˈnætʃrəl ˈprɑːses]" },
  { name: '批次', nameEn: 'Lot', phonetic: "[lɑːt]" },
].map(m => {
  m.parentId = '4' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee