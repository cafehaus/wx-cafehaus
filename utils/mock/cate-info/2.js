const coffee = [
  { name: '阿拉比卡', nameEn: 'Arabica', phonetic: "[əˈræbɪkə]" },
  { name: '罗布斯塔', nameEn: 'Robusta', phonetic: "[ˌrɔˈbʊstə]" },
  { name: '利比瑞卡', nameEn: 'Liberica', phonetic: "" },
  { name: '波旁', nameEn: 'Bourbon', phonetic: "[ˈbɜːrbən]" },
  { name: '卡杜拉', nameEn: 'Caturra', phonetic: "" },
  { name: '帝比卡', nameEn: 'Typica', phonetic: "" },
  { name: '蒙多诺沃', nameEn: 'Mundo Novo', phonetic: "[ˈmʌndoʊ ˈnoʊvoʊ]" },
  { name: '卡图文', nameEn: 'Catuai', phonetic: "" },
  { name: '马拉戈日皮', nameEn: 'Maragogype', phonetic: "" },
  { name: '瑰夏', nameEn: 'Geisha', alias: 'Gesha', phonetic: "[ˈɡeɪʃə]" },
  { name: '怕卡斯', nameEn: 'Pacas', phonetic: "[ˈpɑkəz]" },
  { name: '薇拉·萨尔奇', nameEn: 'Villa Sarchi', phonetic: "" },
  { name: '帕卡马拉', nameEn: 'Pacamara', phonetic: "" },
  { name: '肯特', nameEn: 'Kent', phonetic: "[kɛnt]" }
].map(m => {
  m.parentId = '2' // 父级id，直接拿索引做id,，跟文件名相同就行
  return m
})

module.exports = coffee
