
var myChart = echarts.init(document.getElementById('arightboxbott'));

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
    title: [{
        top: 125,
        left: 80,
        textStyle: {
            fontSize: 18,
            color: 'rgba(255,255,255,.6)'
        },
        text: '古建筑\n数量'
    },{
        top: 125,
        right: 80,
        textStyle: {
            fontSize: 18,
            color: 'rgba(255,255,255,.6)'
        },
        text: '保护\n等级'
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        left: 10,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
        },
        data: ['古民居', '古官府', '古桥梁']
    },
    grid: {
        
        containLabel: true
    },
    series: [{
        name: '保护等级',
        type: 'pie',
        radius: ['45%', '65%'],
        center: ['75%', '55%'],
        avoidLabelOverlap: false,
        label: {
            // show: false,
            position: 'inner',
            formatter: '{b} {c} 处'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 5, name: '国家级' },
            { value: 12, name: '省级' },
            { value: 28, name: '市级' },
            { value: 45, name: '区级' }
        ]
    }, {
        name: '古建筑类型',
        type: 'pie',
        radius: ['45%', '65%'],
        center: ['25%', '55%'],
        avoidLabelOverlap: false,
        label: {
            // show: false,
            position: 'inner',
            formatter: '{b} {c} 处'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 35, name: '古民居' },
            { value: 20, name: '古官府' },
            { value: 15, name: '古桥梁' },
            { value: 20, name: '古桥梁' }
        ]
    }]
};

myChart.setOption(option);