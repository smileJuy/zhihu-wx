// pages/question/question.js
var util = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto:'知乎-微信小程序版',
    userInfo:{}
  },
  // 事件处理函数
  bindItemTap:function(){
    wx.navigateTo({
      url:'../answer/answer'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    var that = this;
    // 调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tapName: function (event){
    console.log(event);
  },
 
})