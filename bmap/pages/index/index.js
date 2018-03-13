// 引用百度地图微信小程序JSAPI模块   
var bmap = require('../../libs/bmap-wx.js');

Page({
  data: {
    ak: "pZX8rAxr7pP8QrjPCcdXhlrvlGALLNPd",
    currentWeather: '',
    futureWeather: [],
    weatherDetail:[]
  },
  onLoad: function (options) {
    var that = this;
    // 新建bmap对象   
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function (data) {
      console.log(data);
    };
    var success = function (data) {


      var currentWeather = data.currentWeather[0];
      var weatherDetail = data.originalData;
      var futureWeather = weatherDetail.results[0].weather_data;

     
      that.setData({
        currentWeather: currentWeather,
        futureWeather: futureWeather,
        weatherDetail: weatherDetail
      });
    }

    // 发起weather请求   
    BMap.weather({
      fail: fail,
      success: success
    });
  }

})  