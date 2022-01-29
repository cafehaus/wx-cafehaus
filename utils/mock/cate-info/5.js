const coffee = [
  { name: '摩卡壶', nameEn: 'Moka Maker', phonetic: "" },
  { name: '法压壶', nameEn: 'French Press', phonetic: "[frentʃ pres]" },
  { name: '爱乐压', nameEn: 'AeroPress', phonetic: "['eroʊ pres]" },
  { name: '蛋糕杯', nameEn: 'Kalita Wave', phonetic: "" },
  { name: '滴滤杯', nameEn: 'Dripper', phonetic: "[drɪpːər]" },
  { name: '美式滤泡壶', nameEn: 'Chemex', phonetic: "" },
  { name: '虹吸式咖啡壶', nameEn: 'Siphon', alias: 'syphon', phonetic: "[ˈsaɪfn]" },
  { name: '越南壶', nameEn: 'Vietnamese Pot', phonetic: "[viɛtnɑˈmis pɑːt]" },
  { name: '比利时皇家咖啡壶 / 平衡式塞风壶', nameEn: 'Balancing Syphon', phonetic: "[ˈbælənsɪŋ ˈsaɪfn]" },
  { name: '土耳其咖啡壶', nameEn: 'Cezve', phonetic: "" },
  { name: '美式滴漏咖啡壶', nameEn: 'Electric Coffee Maker', phonetic: "[ɪˈlektrɪk ˈkɔːfi ˈmeɪkər]" },
  { name: '那不勒斯壶', nameEn: 'Napoletana', phonetic: "" },
  { name: '咖啡细口壶', nameEn: 'Swan Neck Kettle', phonetic: "[swɑːn nek ˈketl]" },
  { name: '咖啡机', nameEn: 'Coffee Machine', phonetic: "[ˈkɔːfi məˈʃiːn]" },
  { name: '咖啡壶', nameEn: 'Coffee Pot', phonetic: "[ˈkɔːfi pɑːt]" },
  { name: '咖啡机(壶)', nameEn: 'Coffee Maker', phonetic: "[ˈkɔːfi ˈmeɪkər]" },
  { name: '咖啡磨豆机', nameEn: 'Coffee Grinder', phonetic: "[ˈkɔːfi ˈɡraɪndər]" },
  { name: '滤纸', nameEn: 'Coffee Paper Filter', phonetic: "[ˈkɔːfi ˈpeɪpər ˈfɪltər]" },
  { name: '粉层膨胀', nameEn: 'Bloom', phonetic: "[bluːm]" },
  { name: '水粉比例', nameEn: 'Brew Ratio', phonetic: "[bruː ˈreɪʃioʊ]" },
  { name: '冲煮时间', nameEn: 'Brew Time', phonetic: "[bruː taɪm]" },
  { name: '克丽玛/咖啡油脂', nameEn: 'Crema', phonetic: "" },
  { name: '杯测', nameEn: 'Cupping', phonetic: "[ˈkʌpɪŋ]" },
  { name: '品尝', nameEn: 'Tasting', phonetic: "[ˈteɪstɪŋ]" },
].map(m => {
  m.parentId = '5' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee
