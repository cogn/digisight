

var chart;
    $(document).ready(function() {
        
       chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart1',
                width:280,
                height:200
            },

            title: {
                text: ''
            },
            xAxis: {
                categories: ['ROI %', 'Conversion Rate', 'Subscription']
            },
      yAxis:[{

                title: {
                    text: 'Percentage'
                }
            }
      ],
            tooltip: {
                enabled: true,
               formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': '+this.y +'%'  +'';
                }
            },
            plotOptions: {
                series: {
            dataLabels: {
                enabled: true,
                format: ' {point.y} '+'%'
            }
        }
            },
            series: [{
                type: 'column',
                name: '',
                data:[48,20,71]
            }],
      legend: {
                verticalAlign: 'top',

            }
        });
    });

var chart;
    $(document).ready(function() {
       chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart2',
                width:280,
                height:200
            },

            title: {
                text: ''
            },
            xAxis: {
                categories: ['Profit/Email', 'Avg.Rev/email', 'Cost Per Email']
            },
      yAxis:[{

                title: {
                    text: 'Percentage'
                }
            }
      ],
            tooltip: {
                enabled: true,
                formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': '+this.y +'%'  +'';
                }
            },
            plotOptions: {
                series: {
            dataLabels: {
                enabled: true,
                format: ' {point.y} '+'%'
            }
        }
            },
            series: [{
                type: 'column',
                name: '',
                data:[48,20,71]
            }],
      legend: {
                verticalAlign: 'top',

            }
        });
    });
//chart 1
