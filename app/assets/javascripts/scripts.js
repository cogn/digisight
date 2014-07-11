
var chart;
    $(document).ready(function() {
          chart = new Highcharts.Chart({
      chart: {
        renderTo: 'Executivepie1',
        width:300,
        height:250,
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'Vendorwise -CTR%'
        }
        ,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,

                    pointFormat: '{series.name}: <b>{point.y}%</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Vendorwise -CTR',
            data: [
                ['Vendor Partner 01',   2.6],
                ['Vendor Partner 02',   3.1],                
                ['Vendor Partner 03',    1.8],
                ['Vendor Partner 04',     2.0],
                ['Vendor Partner 05',   3.6],
                ['Vendor Partner 06',   1.5],
            ]
        }]
        });
     
            
    });




var chart;
        $(document).ready(function() {
          chart = new Highcharts.Chart({
      chart: {
        renderTo: 'Executivepie3',
        width:300,
        height:250,
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'Vendorwise - Total Cost'
        }
        ,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false

                    
                },showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Vendorwise -Total Cost',
            data: [
                ['Vendor Partner 01',   115258.87],
                ['Vendor Partner 02',   59455.42],                
                ['Vendor Partner 03',    107920.24],
                ['Vendor Partner 04',     74193.38],
                ['Vendor Partner 05',   86694.71],
                ['Vendor Partner 06',   82433.04],
            ]
        }]
        });
     
            
    });


var chart;
    $(document).ready(function() {
          chart = new Highcharts.Chart({
      chart: {
        renderTo: 'Executivepie2',
        width:300,
        height:250,
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'Vendorwise - Impressions'
        }
        ,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,

                    pointFormat: '{series.name}: <b>{point.y}%</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Vendorwise -Impressions',
            data: [
                ['Vendor Partner 01',   6211812],
                ['Vendor Partner 02',   3868387],                
                ['Vendor Partner 03',    1991547],
                ['Vendor Partner 04',     1348303],
                ['Vendor Partner 05',   1151728],
                ['Vendor Partner 06',   1454921],
            ]
        }]
        });
     
            
    });










var chart;
    
    $(document).ready(function() {
        
     chart = new Highcharts.Chart({
            chart: {
                 renderTo: 'execuitive3',
                type: 'column',
                  width:570 ,
                height:350
            },
            title: {
                text: 'Vendor Partner  - CTR%'
            },
            xAxis: {
                categories: ['3-May-13','10-May-13','17-May-13','24-May-13','31-May-13','7-Jun-13','14-Jun-13','21-Jun-13','28-Jun-13']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'CTR'
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y+'%' +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        },
                        formatter: function() {
                    return this.y+'%' ;
                }
                    }
                }
            },
            series: [{
                name: 'Vendor Partner 01',
                data: [0.2,0.0,0.1,0.1,0.2,0.1,0.1,0.1,0.0]
            }, {
                name: 'Vendor Partner 02',
                data: [4.2,5.4,2.7,1.8,0.4,4.4,3.8,3.7,4.2]
            }, {
                name: 'Vendor Partner 03',
                data: [0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,4.0]
            }, {
                name: 'Vendor Partner 04',
                data: [1.8,0.4,4.4,3.8,3.7,4.2,5.2,2.5,0.1]
            }, {
                name: 'Vendor Partner 05',
                data: [0.1,0.2,0.1,0.1,0.1,0.0,0.0,8.2,21.0]
            }, {
                name: 'Vendor Partner 06',
                data: [1.8,0.4,4.4,3.8,3.7,4.2,0.1,0.1,0.1]
            }]
        });
            
    });


var chart;
    $(document).ready(function() {
          chart = new Highcharts.Chart({
       chart: {
         renderTo: 'execuitive2',
         width:570 ,
                height:350,
                type: 'column'
            },
            title: {
                text: 'Sales Mix Value%'
            },
            xAxis: {
                categories: ['campaign 1', 'campaign2', 'campaign 3', 'campaign 4']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Sales Mix%'
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'$'+'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Q1',
                data: [181639 , 154418 , 118374 , 119841 ]
            }, {
                name: 'Q2',
                data: [125935 ,202573 ,100528 ,183163 ]
            }, {
                name: 'Q3',
                data: [179704 , 112844 , 111825 ,211478 ]
            }]
        });
     
            
    });







var chart;
    $(document).ready(function() {
          chart = new Highcharts.Chart({
        chart: {
             renderTo: 'execuitive1',
         width:570 ,
                height:350,
                type: 'column'
            },
            title: {
                text: 'Sales Mix %'
            },
            xAxis: {
                categories: ['campaign 1', 'campaign2', 'campaign 3', 'campaign 4']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Sales %'
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'%'+'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Q1',
                data: [29,18,18,34]
            }, {
                name: 'Q2',
                data: [21,33,16,30]
            }, {
                name: 'Q3',
                data: [32, 27,21,21]
            }]
        });
     
            
    });











var chart;
        $(document).ready(function() {
          chart = new Highcharts.Chart({
      chart: {
        renderTo: 'pie3',
        width:300,
        height:250,
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'Total Cost'
        }
        ,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false

                    
                },showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Total Cost',
            data: [
                ['Vendor Partner 01',   115258.87],
                ['Vendor Partner 02',   59455.42],                
                ['Vendor Partner 03',    107920.24],
                ['Vendor Partner 04',     74193.38],
                ['Vendor Partner 05',   86694.71],
                ['Vendor Partner 06',   82433.04],
            ]
        }]
        });
     
            
    });


var chart;
    $(document).ready(function() {
          chart = new Highcharts.Chart({
      chart: {
        renderTo: 'pie2',
        width:300,
        height:250,
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'Impressions'
        }
        ,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,

                    pointFormat: '{series.name}: <b>{point.y}%</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Impressions',
            data: [
                ['Vendor Partner 01',   6211812],
                ['Vendor Partner 02',   3868387],                
                ['Vendor Partner 03',    1991547],
                ['Vendor Partner 04',     1348303],
                ['Vendor Partner 05',   1151728],
                ['Vendor Partner 06',   1454921],
            ]
        }]
        });
     
            
    });




var chart;
    $(document).ready(function() {
          chart = new Highcharts.Chart({
      chart: {
        renderTo: 'pie1',
        width:300,
        height:250,
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false
        },
        title: {
            text: 'CTR'
        }
        ,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,

                    pointFormat: '{series.name}: <b>{point.y}%</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                },showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'CTR',
            data: [
                ['Vendor Partner 01',   2.6],
                ['Vendor Partner 02',   3.1],                
                ['Vendor Partner 03',    1.8],
                ['Vendor Partner 04',     2.0],
                ['Vendor Partner 05',   3.6],
                ['Vendor Partner 06',   1.5],
            ]
        }]
        });
     
            
    });









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
                        enabled: false,
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
                        enabled: false,
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
                 renderTo: 'graph3',
                type: 'column',
                  width:570 ,
                height:350
            },
            title: {
                text: 'Vendor Partner  - CTR%'
            },
            xAxis: {
                categories: ['3-May-13','10-May-13','17-May-13','24-May-13','31-May-13','7-Jun-13','14-Jun-13','21-Jun-13','28-Jun-13']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'CTR'
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y+'%' +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        },
                        formatter: function() {
                    return this.y+'%' ;
                }
                    }
                }
            },
            series: [{
                name: 'Vendor Partner 01',
                data: [0.2,0.0,0.1,0.1,0.2,0.1,0.1,0.1,0.0]
            }, {
                name: 'Vendor Partner 02',
                data: [4.2,5.4,2.7,1.8,0.4,4.4,3.8,3.7,4.2]
            }, {
                name: 'Vendor Partner 03',
                data: [0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,4.0]
            }, {
                name: 'Vendor Partner 04',
                data: [1.8,0.4,4.4,3.8,3.7,4.2,5.2,2.5,0.1]
            }, {
                name: 'Vendor Partner 05',
                data: [0.1,0.2,0.1,0.1,0.1,0.0,0.0,8.2,21.0]
            }, {
                name: 'Vendor Partner 06',
                data: [1.8,0.4,4.4,3.8,3.7,4.2,0.1,0.1,0.1]
            }]
        });
            
    });


var chart;
    $(document).ready(function() {
        
     chart = new Highcharts.Chart({
    chart: {
                 renderTo: 'graph4',
                type: 'column',
                  width:570 ,
                height:350
            },
            title: {
                text: 'Total Spends - Campaignwise'
            },
            xAxis: {
                categories: [
                     '3-May-13',
                    '10-May-13',
                    '17-May-13',
                    '24-May-13',
                    '31-May-13',
                    '7-Jun-13',
                    '14-Jun-13',
                    '21-Jun-13',
                    '28-Jun-13'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Campaignwise'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>${point.y} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Campaign 01',
                data: [ 7170 ,5451,30,979,15,054,0,0,0,]
    
            }, {
                name: 'Campaign 02',
                data: [ 0,0,0,0,20526 ,14672,14377,11498,16742]
    
            }, {
                name: 'Campaign 03',
                data: [11706,8544,0,0,0,0,0,0,12358]
    
            }, {
                name: 'Campaign 04',
                data: [15461,12419,22589,23223,17606,28654,26906,25065,14741]
    
            }]
        });
            
    });



var chart;
    $(document).ready(function() {
        
     chart = new Highcharts.Chart({
    chart: {
                renderTo: 'graph5',
                type: 'column',
                  width:570 ,
                height:350
            },
            title: {
                text: 'Vendor Partner  - Digital Spends , Impressions & CTR%'
            },
            xAxis: {
                categories: ['Total Cost', 'Impressions', 'CTR']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
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

                  stacking: 'percent', // 'normal'
            groupPadding: 0,
            pointPadding: 0,
            
                name: 'Vendor Partner 01',
                data: [115258.87,6211812,2.6]
            }, {
                name: 'Vendor Partner 02',
                data: [59455.42,868387,3.1]
            }, {
                name: 'Vendor Partner 03',
                data: [107920.24,1991547,1.9]
            }, {
                name: 'Vendor Partner 04',
                data: [74193.38,1348303,2.0]
            }
                     , {
                name: 'Vendor Partner 05',
                data: [86694.71,1151728,3.6]
            }, {
                name: 'Vendor Partner 06',
                data: [82433.04,1454921,1.5]
            }
                    ]
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
