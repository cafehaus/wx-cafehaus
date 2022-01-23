const WechatSI = requirePlugin("WechatSI")
const Audio = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    from: 'zh_CN',
    to: 'en_US',
    txt: '',
    result: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  reset() {
    this.setData({
      from: 'zh_CN',
      to: 'en_US',
      txt: '',
      result: ''
    })
  },

  changeLang() {
    this.setData({
      from: this.data.to,
      to: this.data.from
    })
  }
})