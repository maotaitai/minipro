Page({
  data: {
    nowdate:new Date().toUTCString(),
    isShow:true
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowdate:new Date().toUTCString()
      })
    },1000)
  },
  handleShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  }

})