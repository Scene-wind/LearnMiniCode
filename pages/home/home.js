// pages/home/home.js
Page({
  data:{
    name:'姜晓峰',
    age:18,
    students:[
      {id:110,name:'coby1',age:30},
      {id:111,name:'coby2',age:31},
      {id:112,name:'coby3',age:32},
      {id:113,name:'coby4',age:33}
    ],
    count:0
  },
  handleBtnClickAdd(){
    // 1. 与vue不同，这样无法实现
  //  console.log('点击')
  //  this.data.count+=1
  //  console.log(this.data.count)
  //  2.  this.setData()
    this.setData({
      count:this.data.count+1
    })
  },
  handleBtnClickDec(){
    this.setData({
      count:this.data.count-1
    })
  }
})