// pages/textarea/textarea.js
Page({
  data: {
    inputtext:''
  },

  bindTextitle:function(e){
    this.setData({
      inputtext:e.detail.value
    })
  },

  save_and_back:function(e){
    console.log('submit',e.detail.value);
    var tempFilePaths = e.tempFilePaths;
    
    wx:wx.saveFile({
      tempFilePath: '../textarea/textarea',
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  deletetext:function(){
    console.log('deletetext')
  },

  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
  
  }
})