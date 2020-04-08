// components/my-mulslot/my-mulslot.js
Component({
  options:{
    multipleSlots:true,
    // 定义样式的隔离性
    // styleIsolation: "shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 外界传过来的样式 []里写样式的类名
  externalClasses: [],

  //监听properties/data数据的改变
  observers: {
    title: function(newval){
      console.log(newval)
    },
    count: function(newval){
      console.log(newval)
    }
  },
  // ========组件中监听生命周期函数=========
  // 1. 监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件所在页面显示出来时")
    },
    hide() {
      console.log("监听组件所在页面隐藏出来时")
    },
    // 很少用
    resize() {
      console.log("监听组件所在页面尺寸大小的改变")
    }
  },
  // 2. 监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log("组件被创建出来时")
    },
    attached() {
      console.log("组件被添加到页面上时")
    },
    ready() {
      console.log("组件被渲染出来时")
    },
    moved() {
      console.log("组件被移动到另一个节点时")
    },
    detached() {
      console.log("组件被移除掉")
    }
  }


})
