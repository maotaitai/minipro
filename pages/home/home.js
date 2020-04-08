// js文件中存放的是 逻辑相关的代码。
Page({
  data: {
    name: 'whisper',
    age: 18,
    books:[
      {id:10,name:"《岛上书店》",price:35},
      {id:11,name:"《你今天真好看》",price:76},
      {id:12,name:"《外婆的道歉信》",price:90}
    ],
    count:9,
    counter:0
  },
  handleBtnClickAdd(){
    this.setData({
      count:this.data.count+1
    })
  },
  handleBtnClickDec(){
    this.setData({
      count:this.data.count-1
    })
  },
  handleIncrement(){
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleTabClick(event){
    console.log(event)
  },
  selectClick(){
    // 修改组件my-select的数据
    // 1. 获取组件对象
    // this.selectComponent('#selectid')
    const my_select = this.selectComponent('.selectclass')
    // console.log(my_select)
    // 2. 通过组件对象的setData修改组件内的数据(不合理,不推荐使用这种方法)
    // my_select.setData({
    //   amount: my_select.data.amount+10
    // })
    // 3. 通过调用组件内的方法,修改数据
    my_select.handleSelect(10)
  }
})
