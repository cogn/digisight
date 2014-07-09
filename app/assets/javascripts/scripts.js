$(document).ready(function(){
          $("#tab1").show();
$(".tab1link").click(function(){
        $("#tab2").hide();
        $("#tab1").show();
        $(".tabButtons li:first-child").addClass('active');
        $(".tabButtons li:last-child").removeClass('active');   
        
    
    });
    $(".tab2link").click(function(){
        $("#tab1").hide();
        $("#tab2").show();
        $(".tabButtons li:last-child").addClass('active');
        $(".tabButtons li:first-child").removeClass('active');
    
    });
});
var chart;
    $(document).ready(function() {
        
     chart = new Highcharts.Chart({
            chart: {
                 renderTo: 'graph1',
                type: 'column',
                  width:570 ,
                height:350
            },
            title: {
                text: 'Vendor Partner - Media Spends'
            },
            xAxis: {
                categories: ['3-May-13','10-May-13','17-May-13','24-May-13','31-May-13','7-Jun-13','14-Jun-13','21-Jun-13','28-Jun-13']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Media Cost'
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Vendor Partner 01',
                data: [1288,0,24747.62,7623.55,14333,11230.12,8434.43,8853.34,9255.86]
            }, {
                name: 'Vendor Partner 02',
                data: [3269,3024,5222,5629.75,149,2811.49,3824.5,3363.75,4355.74]
            }, {
                name: 'Vendor Partner 03',
                data: [7855.04,7869.6,7464.8,8305.19,8460.28,8234.52,6040.5,5959.52,7332.5]
            }, {
                name: 'Vendor Partner 04',
                data: [4916,4485,5265,6465,6193,3442,5943,2645,7486]
            }, {
                name: 'Vendor Partner 05',
                data: [7904,4987,3860,4113,4207,7822,4555,6007,6385]
            }, {
                name: 'Vendor Partner 06',
                data: [7606,4549,6042,2556,4171,6548,8736,6281,4492]
            }]
        });
            
    });




var chart;
    $(document).ready(function() {
        
     chart = new Highcharts.Chart({
            chart: {
                 renderTo: 'graph2',
                type: 'column',
                  width:570 ,
                height:350
            },
            title: {
                text: 'Vendor Partner  - Impressions'
            },
            xAxis: {
                categories: ['3-May-13','10-May-13','17-May-13','24-May-13','31-May-13','7-Jun-13','14-Jun-13','21-Jun-13','28-Jun-13']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Impressions'
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Vendor Partner 01',
                data: [101353,13616,585968,180281,458121,290977,210850,1396293,1372700]
            }, {
                name: 'Vendor Partner 02',
                data: [44307,31778,114566,184531,20564,35058,56854,50527.75,62583]
            }, {
                name: 'Vendor Partner 03',
                data: [196377,196766,186620,208899,211507,205863,151786,148988,114393]
            }, {
                name: 'Vendor Partner 04',
                data: [28033,21851,127632,161365,45556,162697,93058,161907,123203]
            }, {
                name: 'Vendor Partner 05',
                data: [45476,26037,61789,162661,85913,77486,141645,29187,63011]
            }, {
                name: 'Vendor Partner 06',
                data: [175639,129868,26477,62126,80683,126824,12024,152541,92994]
            }]
        });
            
    });








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
