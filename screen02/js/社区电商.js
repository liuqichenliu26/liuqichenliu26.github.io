
var myChart = echarts.init(document.getElementById('amiddboxtbott1'));

var cultural_spot_category = ['玉涵堂', '古戏台', '通贵桥', '山塘老街', '虎丘塔', '拙政园', '狮子林', '留园', '网师园', '沧浪亭', '耦园', '艺圃', '环秀山庄', '退思园', '同里古镇', '周庄古镇', '甪直古镇', '木渎古镇', '千灯古镇'];

var data = 
    [
        [28604, 77, 17099, '玉涵堂', '2024年6月'],
        [31163, 77.4, 2440, '古戏台', '2024年6月'],
        [1516, 68, 1605773, '通贵桥', '2024年6月'],
        [13670, 74.7, 10082, '山塘老街', '2024年6月'],
        [28599, 75, 49805, '虎丘塔', '2024年6月'],
        [29476, 77.1, 569499, '拙政园', '2024年6月'],
        [31476, 75.4, 789237, '狮子林', '2024年6月'],
        [28666, 78.1, 254830, '留园', '2024年6月'],
        [1777, 57.7, 870776, '网师园', '2024年6月'],
        [29550, 79.1, 129285, '沧浪亭', '2024年6月'],
        [2076, 67.9, 201954, '耦园', '2024年6月'],
        [12087, 72, 42954, '艺圃', '2024年6月'],
        [24021, 75.4, 33934, '环秀山庄', '2024年6月'],
        [43296, 76.8, 4240375, '退思园', '2024年6月'],
        [10088, 70.8, 381958, '同里古镇', '2024年6月'],
        [19349, 69.6, 1475652, '周庄古镇', '2024年6月'],
        [10670, 67.3, 53905, '甪直古镇', '2024年6月'],
        [26424, 75.7, 57117, '木渎古镇', '2024年6月'],
        [37062, 75.4, 252810, '千灯古镇', '2024年6月']
    ]
;

option = {
    backgroundColor: 'rgba(139,69,19,.2)',
    grid: {
        left: 40,
        right: 50,
        top: 30,
        bottom: 25,
    },
    xAxis: {
        name: '游客\n数量',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,.7)"
        }
    },
    yAxis: {
        name: '满意度',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,.7)"
        },
        scale: true
    },
    visualMap: [
        {
            show: false,
            dimension: 3,
            categories: cultural_spot_category,
            calculable: true,
            precision: 0,
            textGap: 30,
            textStyle: {
                color: '#ccc'
            },
            inRange: {
                color: (function () {
                    var colors = ['#8B4513', '#CD853F', '#800000', '#A0522D', '#2F4F4F', '#708090', '#556B2F', '#8FBC8F', '#D2B48C', '#DEB887'];
                    return colors.concat(colors);
                })()
            }
        }
    ],
    series: [{
        name: '2024年6月',
        data: data,
        type: 'scatter',
        symbolSize: function(data) {
            return Math.sqrt(data[2]) / 5e1;
        },
        label: {
            show: true,
            position: 'right',
            formatter: function(param){
                if (Math.sqrt(param.data[2]) / 5e1 > 10) {
                    return param.data[3];
                } else {
                    return '';
                }
            },
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'right'
            }
        },
        itemStyle: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
        }
    }]
};
myChart.setOption(option);


