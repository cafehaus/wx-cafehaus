const coffee = [
  { name: '平顺', nameEn: 'Smooth', phonetic: "[smuːð]" },
  { name: '深度', nameEn: 'Depth', phonetic: "[depθ]" },
  { name: '风味', nameEn: 'Flavor', phonetic: "[ˈfleɪvər]" },
  { name: '醇度', nameEn: 'Body', phonetic: "[ˈbɑːdi]" },
  { name: '酸度', nameEn: 'Acidity', phonetic: "[əˈsɪdəti]" },
  { name: '苦味', nameEn: 'Bitter', phonetic: "[ˈbɪtər]" },
  { name: '甘度', nameEn: 'Sweet', phonetic: "[swiːt]" },
  { name: '香气', nameEn: 'Aroma', phonetic: "[əˈroʊmə]" },
  { name: '干净', nameEn: 'Clean', phonetic: "[kliːn]" },
  { name: '平衡', nameEn: 'Balance', phonetic: "[ˈbæləns]" },
  { name: '口感', nameEn: 'Body', alias: 'Mouthfeel', phonetic: "[ˈbɑːdi]" },
  { name: '复杂度', nameEn: 'Complexity', phonetic: "[kəmˈpleksəti]" },
  { name: '清淡', nameEn: 'Bland', phonetic: "[blænd]" },
  { name: '咸味', nameEn: 'Briny', phonetic: "[ˈbraɪni]" },
  { name: '泥土的芳香', nameEn: 'Earthy', phonetic: "[ˈɜːrθi]" },
  { name: '独特性', nameEn: 'Exotic', phonetic: "[ɪɡˈzɑːtɪk]" },
  { name: '芳醇', nameEn: 'Mellow', phonetic: "[ˈmeloʊ]" },
  { name: '温和的', nameEn: 'Mild', phonetic: "[maɪld]" },
  { name: '柔润的', nameEn: 'Soft', phonetic: "[sɔːft]" },
  { name: '香辛', nameEn: 'Spicy', phonetic: "[ˈspaɪsi]" },
  { name: '发酸', nameEn: 'Sour', phonetic: "[ˈsaʊər]" },
  { name: '浓郁的', nameEn: 'Strong', phonetic: "[strɔːŋ]" },
  { name: '狂野的', nameEn: 'Wild', phonetic: "[waɪld]" },
  { name: '葡萄酒味儿', nameEn: 'Winy', phonetic: "" },
  { name: '黄油味', nameEn: 'Buttery', phonetic: "[ˈbʌtəri]" },
  { name: '乳脂状', nameEn: 'Creamy', phonetic: "[ˈkriːmi]" },
  { name: '厚重', nameEn: 'Heavy', phonetic: "[ˈhevi]" },
  { name: '轻', nameEn: 'Light', phonetic: "[laɪt]" },
  { name: '稠', nameEn: 'Thick', phonetic: "[θɪk]" },
  { name: '薄', nameEn: 'Thin', phonetic: "[θɪn]" },
  { name: '水味', nameEn: 'Watery', phonetic: "[ˈwɔːtəri]" }
].map(m => {
  m.parentId = '9' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee
