// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      // 自定义事件:向页面传递数据,传递当前索引值index和title
      this.triggerEvent('itemClick',{index,title:this.properties.titles[index]},{})
    },
  }
})
