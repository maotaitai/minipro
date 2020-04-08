// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      // 默认值.如果页面在使用这个组件的时候,没有传递过来数据的话
      value: "我是默认的标题",
      observer: function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    }
  },
  externalClasses:['titleclass']
})
