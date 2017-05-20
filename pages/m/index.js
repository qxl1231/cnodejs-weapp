// pages/m/index.js
const app = getApp()
Page({
  signout() {
    app.globalData.token = ''
    app.globalData.account = null
    wx.removeStorage({
      key: 'token'
    })
    this.setData({
      sign: false,
      user: null
    })
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  onShow() {
    let self = this
    if (app.auth()) {
      app.getUser(app.globalData.account.loginname, user => {
        self.setData({
          sign: true,
          user
        })
      })
    }
  }
})