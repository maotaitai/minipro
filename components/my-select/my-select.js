// components/my-select/my-select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    amount:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSelect(num){
      this.setData({
        amount:this.data.amount +num
      })
    }
  }
})
