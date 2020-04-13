// components/w-sel/w-sel.js
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
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 暴露出一个方法，通过方法统一修改
    incrementCounter(num){
      this.setData({
        counter:this.data.counter + num
      })
    }
  }
})
