

var chart;
    $(document).ready(function() {
        
       chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart1',
                width:280,
                height:250
            },
            xAxis: {
                categories: ['ROI %', 'Conversion Rate', 'Subscription']
            },
             title: {
            text: null
        },
      yAxis:[{

                title: {
                    text: 'Percentage'
                }
            }
      ],

                legend: {
                    enabled: false
                },
            tooltip: {
                enabled: true,
               formatter: function() {
                    return  this.x +': '+this.y +'%'  +'';
                }
            },
            plotOptions: {
                series: {
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return this.y +'%' ;
                }
            }
        }
            },
            series: [{
                type: 'column',
                name: '',
                data:[20,23,41]
            }]
     
        });
    });

var chart;
    $(document).ready(function() {
       chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart2',
                width:280,
                height:250
            },

            title: {
    text: '',
    style: {
        display: 'none'
    }
},
            xAxis: {
                categories: ['Profit/Email', 'Avg.Rev/email', 'Cost Per Email']
            },
      yAxis:[{

                title: {
                    text: 'Dollar'
                }
            }
      ],
        legend: {
                    enabled: false
                },
            tooltip: {
                enabled: true,
                formatter: function() {
                    return this.x +': '+this.y +'$'  +'';
                }
            },
            plotOptions: {
                series: {
            dataLabels: {
                enabled: true,
               formatter: function() {
                    return this.y +'$' ;
                }
            }
                       
        }
            },
            series: [{
                type: 'column',
                name: '',
                data:[21.30,43.00,21.69]
            }]
     
        });
    });
//chart 1
