
var myChart = echarts.init(document.getElementById('aleftboxtbott'));
option = {
    color: ['#CD853F'],
    backgroundColor: 'rgba(139,69,19,.2)',
    title: {
        top: 5,
        left: 20,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.6)'
        },
        text: '环比类型：月环比'
    },
    legend: {
        right: 10,
        top: 5,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.6)'
        },
        data: ['2024年5月', '2024年6月']
    },
    grid: {
        left: 20,
        right: 20,
        top: 30,
        bottom: 2,
        containLabel: true
    },

    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,0)"
        },
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
    
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.5)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,.5)"
        },
        data: ['日游客量', '周游客量', '月游客量', '年游客量']
    },
    series: [{
        name: '2024年5月',
        type: 'bar',
        barWidth: 15,
        label: {
            show: true,
            position: 'inside'
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(139,69,19,.7)'
                    }, {
                        offset: 1,
                        color: 'rgba(205,133,63,.7)'
                    }]
                )
            }
        },
        data: [1200, 8400, 36000, 432000]
    }, {
        name: '2024年6月',
        type: 'bar',
        barWidth: 15,
        label: {
            show: true,
            position: 'inside'
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(128,0,0,.7)'
                    }, {
                        offset: 1,
                        color: 'rgba(160,82,45,.7)'
                    }]
                )
            }
        },
        data: [1500, 10500, 45000, 540000]
    }]
};
myChart.setOption(option);