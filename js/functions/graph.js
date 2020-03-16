$(document).ready(function() {



    var fb = Math.floor(Math.random() * 31 + 1);
    var ig = Math.floor(Math.random() * 11 + 1);
    var tw = Math.floor(Math.random() * 11 + 1);
    var line = Math.floor(Math.random() * 11 + 1);

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'January',
            a: (fb + ig + tw + line),
            b: fb,
            c: ig,
            d: tw,
            e: line,
        }, {
            y: 'February',
            a: (fb + ig + tw + line) + 5,
            b: fb + 5,
            c: ig + 2,
            d: tw + 1,
            e: line + 1,
        }, {
            y: 'March',
            a: (fb + ig + tw + line) + 10,
            b: fb + 10,
            c: ig + 4,
            d: tw + 2,
            e: line + 2,
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c', 'd', 'e'],
        labels: ['All', 'Facebook', 'Instagram', 'Twitter', 'Line'],
        hideHover: 'auto',
        resize: true,
        barColors: ['#666666', '#3b5898', '#DD2A7B', '#00acee', '#00b900']
    });

    c3.generate({
        bindto: '#stocked',
        data: {
            columns: [
                ['All', (fb + ig + tw + line), (fb + ig + tw + line + 5), (fb + ig + tw + line + 10)],
                ['Facebook', fb, fb + 5, fb + 10],
                ['Instagram', ig, ig + 2, ig + 4],
                ['Twitter', tw, tw + 1, tw + 2],
                ['Line', line, line + 1, line + 2]
            ],
            colors: {
                All: '#BABABA',
                Facebook: '#005eb8',
                Instagram: '#f00c93',
                Twitter: '#00B8FF',
                Line: '#24ae24'
            },
            type: 'bar',
            groups: [
                ['All', 'Facebook', 'Instagram', 'Twitter', 'Line']
            ]
        }
    });

    var newmsg = document.getElementById("ranNum").innerHTML = document.getElementById("ranNo").innerHTML =
        Math.floor(Math.random() * 31);
    var pendmsg = document.getElementById("ranNum1").innerHTML =
        Math.floor(Math.random() * 11);
    var closemsg = document.getElementById("ranNum2").innerHTML =
        Math.floor(Math.random() * 11);
    var inbox = document.getElementById("ranNum3").innerHTML =
        Math.floor(Math.random() * 11);
    var userpost = document.getElementById("ranNum4").innerHTML =
        Math.floor(Math.random() * 11);
    var pagepost = document.getElementById("ranNum5").innerHTML =
        Math.floor(Math.random() * 11);

    // Morris.Donut({
    //     element: 'morris-donut-chart',
    //     data: [{
    //         label: "Facebook",
    //         value: fb
    //     }, {
    //         label: "Instagram",
    //         value: ig
    //     }, {
    //         label: "Twitter",
    //         value: tw
    //     }],
    //     resize: true,
    //     colors: ['#3b5998', '#DD2A7B', '#00acee'],

    // });

    var doughnutData = {
        labels: ["Facebook", "Instagram", "Twitter", "Line"],
        datasets: [{
            data: [fb, ig, tw, line],
            backgroundColor: ["#3b5998", "#DD2A7B", "#00acee", "#00b900"]
        }]
    };

    var doughnutOptions = {
        responsive: true,
    };

    var donutOp2 = {
        responsive: true,
        legend: {
            labels: {
                fontColor: 'gray'
            }
        }
    }

    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx4, {
        type: 'doughnut',
        data: doughnutData,
        options: doughnutOptions,
    });

    $('.s-skin-5').click(function() {
        let getBody = document.body.getElementsByClassName("skin-5");
        if (getBody) {
            var ctx4 = document.getElementById("doughnutChart").getContext("2d");
            new Chart(ctx4, {
                type: 'doughnut',
                data: doughnutData,
                options: donutOp2,
            });
        }
    })

});