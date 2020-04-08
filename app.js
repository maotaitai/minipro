// 注册小程序实例
App({
  // 生命周期函数：

  // 小程序初始化完成时，会执行的生命周期函数。
  // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function () {
    // 异步调用
    wx.getUserInfo({
      // 数据拿到之后，再进行回调。
      complete: (res) => {console.log(res)},
    })
  },

// 当小程序启动，或从后台进入前台显示，会触发 onShow
// 小程序界面显示出来的时候，会执行的生命周期函数
  onShow: function (options) {
    console.log("小程序界面显示出来:onshow")
  },

  // 当小程序从前台进入后台，会触发 onHide

  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  //globalData：全局数据。这里定义的数据，可以在其他页面共享
  globalData:{
    name:"whipser",
    age:3
  }
})
