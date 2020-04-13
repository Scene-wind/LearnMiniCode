// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleTabClick(event){
    console.log(event)
  },
  handleBtnClickSel(){
    // 最终目的：修改组件中data中数据
    // 1. 获取组件对象
    const my_sel = this.selectComponent('#sel-id')
    // console.log(my_sel)

    // 2. 通过setdata修改组件中的数据（不合理，因为直接修改了组件中的数据）
    // my_sel.setData({
    //   counter:my_sel.data.counter + 20
    // })
    // 3. 通过组件暴露出的方法修改数据
    my_sel.incrementCounter(10) 
  }

})