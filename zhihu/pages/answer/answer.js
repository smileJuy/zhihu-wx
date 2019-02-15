// pages/answer/answer.js
var util = require('../../utils/util.js');
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto:'知乎-微信小程序版',
    userInfo:{}
  },
  // 时间处理函数
  toQuestion:function(){
    wx.navigateTo({
      url:'../question/question'
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload');
    var that = this;
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tapName:function(event){
    console.log(event);
  }
})