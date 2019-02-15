//index.js
//获取应用实例
const util = require('../../utils/util.js');
const app = getApp()

Page({
  data: {
    feed:[],
    feed_length:0
  },
  //事件处理函数
  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindQueTap:function(){
    wx.navigateTo({
      url:'../../question/question'
    })
  },
  // 加载
  onLoad: function () {
    console.log('onload');
    var that = this;
    this.refresh();
  },
  // 上拉
  upper:function(){
    wx.showNavigationBarLoading();
    this.refresh();
    console.log('upper');
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    },2000);
  },
  // 下拉
  lower:function(e){
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      that.nextLoad();
    },1000);
    console.log("lower");
  },
  // 网络请求数据，实现首页刷新
  refresh0:function(){
    var index_api = '';
    util.getData(index_api).then(function(data){
      console.log(data);
    })
  },
  // 使用本地fake数据实现刷新效果
  refresh:function(){
    var feed = util.getData2();
    console.log("loadData");
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length:feed_data.length
    })
  },
  // 使用本地fake数据实现继续加载效果
  nextLoad:function(){
    var next = util.getNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed:this.data.feed.concat(next_data),
      feed_length:this.data.feed_length + next_data.length
    })
  }
})
