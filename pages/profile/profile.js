// pages/profile/profile.js
// 可以拿到app.js里面定义的globalData
// getApp()用于获取App()产生的实例对象
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
console.log(name+'---'+age)    // whipser---3

Page({

  data: {
    imagePath:''
  },
  handleChooseImage(){
    // 系统API,让用户在相册中选择图片或者拍照上传
    wx.chooseImage({
      complete: (res) => {
        //1. 取出图片
        const path = res.tempFilePaths[0]
        console.log(path)
        //2. 将图片地址设置到 profile.wxml 页面中
        this.setData({
          imagePath:path
        })
      },
    })
  },
  handleInput(event){
    console.log("获取输入内容:",event)
  },
  handleFocus(event){
    console.log("input获得焦点:",event)
  },
  handleBlur(event){
    console.log("input失去焦点:",event)
  }

})