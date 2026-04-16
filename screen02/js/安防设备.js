var myChart = echarts.init(document.getElementById('aleftboxtmidd'));
option = {
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#8B4513' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#CD853F' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#800000' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#A0522D' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#2F4F4F' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#708090' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#556B2F' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#8FBC8F' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }],
    backgroundColor: 'rgba(139,69,19,.2)',
    title: [{ 
        text: '监测点数量',
        textStyle: {
            color: '#a0b3c7',
            fontWeight: 'normal',
            fontSize: 14
        },
        top: 'top',
        left: '15%'
    },{
        text: '监测状态',
        textStyle: {
            color: '#a0b3c7',
            fontWeight: 'normal',
            fontSize: 14
        },
        top: 'top',
        left: '65%'
    }],
    grid: {
        left: 10,
        right: 40,
        top: 20,
        bottom: 0,
        containLabel: true
    },
    legend: {
        x: 'center',
        y: '70%',
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
        },
        data: ['建筑监测点', '环境监测点', '正常运行', '异常监测']
    },
    calculable: true,
    series: [

        {
            name: '面积模式',
            type: 'pie',
            radius: [5, 50],
            center: ['25%', '40%'],
            roseType: 'area',
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            data: [{
                value: 120,
                name: '建筑监测点'
            }, {
                value: 80,
                name: '环境监测点'
            }]
        }, {
            name: '面积模式',
            type: 'pie',
            radius: [5, 50],
            center: ['75%', '40%'],
            roseType: 'area',
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            data: [
                { value: 195, name: '正常运行' },
                { value: 5, name: '异常监测' },
            ]
        }
    ]
};



myChart.setOption(option);