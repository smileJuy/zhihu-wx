// pages/notify/notify.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab:["通知","赞与感谢","关注"],
    currentNavtab:"0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
// 选项卡的切换
  switchTab:function(e){
    this.setData({
      currentNavtab:e.currentTarget.dataset.idx
    })
  }
})