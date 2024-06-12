$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2024 Q1',
            sách: 1020,
        }, {
            period: '2023 Q2',
            sách: 2385,
        }, {
            period: '2021 Q3',
            sách: 2080,
        }, {
            period: '2020 Q4',
            sách: 2290,
        }, {
            period: '2019 Q1',
            sách: 2150,
        }, {
            period: '2018 Q2',
            sách: 2250,
        }],
        xkey: 'period',
        ykeys: ['sách',],
        labels: ['sách'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Người dùng mới",
            value: 12
        }, {
            label: "Sách được mượn",
            value: 30
        }, {
            label: "Sách được trả",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 't1',
            a: 160,
            b: 90
        }, {
            y: 't2',
            a: 172,
            b: 65
        }, {
            y: 't3',
            a: 134,
            b: 40
        }, {
            y: 't4',
            a: 188,
            b: 65
        }, {
            y: 't5',
            a: 150,
            b: 40
        }, {
            y: 't6',
            a: 186,
            b: 65
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Sách mượn', 'Người mượn'],
        hideHover: 'auto',
        resize: true
    });

});
