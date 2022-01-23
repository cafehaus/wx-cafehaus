// pages/mine/mine.js
import CateInfo from '../../utils/mock/cate-list/index.js'
import Cate from '../../utils/cate.js'

let plugin = requirePlugin("WechatSI")
const Audio = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // curId: '',
    curEng: '',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(CateInfo)
    console.log(options)
    let curId = options.id || ''
    let list = CateInfo[curId]
    let pageTitle = Cate.find(m => m.id === curId).title
    wx.setNavigationBarTitle({
      title: pageTitle
    })
    this.setData({
      curId,
      list
    })
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
  
  /**
   * 翻译
   */
  onTranslate(e) {
    // console.log(e)
    let { info } = e.currentTarget.dataset
    let nameEn = info.nameEn
    if (this.data.curEng === nameEn) {
      Audio.src = this.data.curAudio
      // Audio.title = this.data.curEng
      return
    }
    

    plugin.textToSpeech({
      lang:"en_US",
      content: nameEn,
      success: (res) => {
          console.log(res)
          if(res.retcode == 0) {
              console.log("result", res.result)
              Audio.src = res.filename
              Audio.title = nameEn

              // 缓存一下
              this.data.curEng = nameEn
              this.data.curAudio = res.filename
          } else {
              console.warn("翻译失败", res)
          }
      },
      fail: function(res) {
          console.log("网络失败",res)
      }
    })
  }

})