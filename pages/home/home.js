// pages/home/home.js
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
// 注册一个页面
Page({
 
  data: {
    imagePath:''
  }, 
  handleChooseAlbum(){
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath : path
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /** 
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})