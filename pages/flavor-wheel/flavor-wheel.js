import * as echarts from '../../components/ec-canvas/echarts';
import option from './option.js' // 中文版数据
import optionEn from './optionEn.js' // 英文版数据

let chart
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: '您有一个咖啡风味轮待查收！',
      path: '/pages/flavor-wheel/flavor-wheel'
    }
  },
  data: {
    ec: {
      onInit: initChart
    },
    type: '1' // 1 中文  2 英文
  },

  onChange() {
    let t = this.data.type
    let type = t === '1' ? '2' : '1'
    let opt = type === '1' ? option : optionEn

    chart.setOption(opt)
    this.setData({ type })
  }
});
