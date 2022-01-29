import CateInfo from '../../utils/mock/cate-info/index.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    from: 'zh_CN',
    to: 'en_US',
    txt: '',
    result: '',
    recordFile: '',

    curWord: {},
    options: [],
    lang: 'zh_CN', // zh_CN 中文  en_US 英文
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initWord()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onTranslate() {
    if (!this.data.txt) {
      wx.showToast({
        title: '请输入要翻译的内容',
        icon: 'none'
      })
      return
    }

    WechatSI.translate({
      lfrom: this.data.from,
      lto: this.data.to,
      content: this.data.txt,
      tts: true,
      success: (res) => {
          if(res.retcode == 0) {
              this.setData({
                result: res.result
              })
          } else {
              console.warn("翻译失败", res)
              wx.showToast({
                title: '翻译失败',
                icon: 'none'
              })
          }
      }
    })
  },

  onSpeak(e) {
    let { txt } = e.currentTarget.dataset
    if (this.data.curTxt === txt) {
      Audio.src = this.data.curAudio
      // Audio.title = this.data.curEng
      return
    }

    WechatSI.textToSpeech({
      lang: this.data.to,
      content: txt,
      success: (res) => {
        if(res.retcode == 0) {
          Audio.src = res.filename
          Audio.title = txt

          // 缓存一下
          this.data.curTxt = txt
          this.data.curAudio = res.filename
        }
      }
    })
  },

  onRecord() {
    Record.start()
  },

  onRecordStop() {
    Record.stop()
    Record.onStop = (res) => {
      // console.log("record file path", res.tempFilePath)
      // console.log("result", res.result)
      let txt = res.result || ''
      if (!txt) {
        wx.showToast({
          title: '未识别到您的语音，请长按重新录音',
          icon: 'none',
          duration: 3000,
        })
        return
      }
      this.setData({
        txt: res.result
      })
      this.onTranslate()
    }
  },

  reset() {
    this.setData({
      from: 'zh_CN',
      to: 'en_US',
      txt: '',
      result: ''
    })
  },

  changeLang() {
    let cur = this.data.lang
    let lang = cur === 'zh_CN' ? 'en_US' : 'zh_CN'

    this.setData({
      lang
    })
  },

  radioChange(e) {
    const options = this.data.options
    for (let i = 0, len = options.length; i < len; ++i) {
      options[i].checked = options[i].nameEn === e.detail.value
    }

    this.setData({
      options
    })
    console.log(options);
  },

  checkResult() {
    let word = this.data.curWord
    let isEng = this.data.lang === 'en_US'
    let answer = isEng ? word.nameEn : word.name

    let right = this.data.options.find(m => m.checked)
    let isRight = right && (right.name === word.name)
    let content = isRight ? '厉害了，word咖啡师!' : `正确答案：${answer}`

    if (!right) {
      wx.showToast({
        title: '请选择正确的选项',
        icon: 'none'
      })
      return
    }

    wx.showModal({
      title: isRight ? '恭喜答对了!' : '很遗憾，你不愧是个咖啡渣!',
      content,
      confirmText: '下一个',
      success: (res) => {
        if (res.confirm) {
          this.initWord()
        } else if (res.cancel) {
          return false
        }
      }
    })
  },

  initWord() {
    let keys = Object.keys(CateInfo)
    let index = Math.floor(Math.random()*keys.length)
    let curCate = CateInfo[index]

    let len = curCate.length < 4 ? curCate.length : 4
    let options = this.getRandomArrayElements(curCate, len)
    options = options.map(m => {
      m.checked = false
      return m
    })
    let idx = Math.floor(Math.random()*options.length)
    let curWord = options[idx]

    this.setData({
      curWord,
      options,
    })

  },

  // 从数组中随机取出几个元素
  getRandomArrayElements(arr, count) {
    let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random())
      temp = shuffled[index]
      shuffled[index] = shuffled[i]
      shuffled[i] = temp
    }
    return shuffled.slice(min)
  },
})