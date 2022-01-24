import CateInfo from '../../utils/mock/cate-list/index.js'
import Cate from '../../utils/cate.js'

const WechatSI = requirePlugin("WechatSI")
const Audio = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // curId: '',
    // curEng: '',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let curId = options.id || ''
    let list = CateInfo[curId]
    let pageTitle = Cate.find(m => m.id === curId).title
    wx.setNavigationBarTitle({
      title: pageTitle
    })
    this.setData({
      list
    })
    this.data.curId = curId
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
  
  onSpeak(e) {
    let { txt } = e.currentTarget.dataset
    if (this.data.curEng === txt) {
      Audio.src = this.data.curAudio
      // Audio.title = this.data.curEng
      return
    }

    WechatSI.textToSpeech({
      lang:"en_US",
      content: txt,
      success: (res) => {
        if(res.retcode == 0) {
          Audio.src = res.filename
          Audio.title = txt

          // 缓存一下
          this.data.curEng = txt
          this.data.curAudio = res.filename
        }
      }
    })
  }

})