$(document).ready(function(){
	//datepicker
	$("div").has(".date").ready(function() {
		$('.date').datepicker({showOn: 'both', buttonImageOnly: true, buttonImage: 'images/datepicker.gif',dateFormat :'mm/dd/yy',changeMonth :true,changeYear :true,yearRange :'1890:2099'});
$('img.ui-datepicker-trigger').css( {'cursor' :'pointer',"vertical-align" :'middle'});
    });

	
	//tooltip
	//$(".priority_dot[title]").tooltip();
	
	//tab script
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
	
	//tab script Schedular summary input output
	
	$("#tab1").show();
	
	$(".tickettab1link").click(function(){
		$(".tabs").hide();
		$("#tab1").show();
		$(".tabButtons li").removeClass('active');
		$(this).parent().addClass('active');	
		
	
	});
	$(".tickettab2link").click(function(){
		$(".tabs").hide();
		$("#tab2").show();
		$(".tabButtons li").removeClass('active');
		$(this).parent().addClass('active');	
		
	
	});
	$(".tickettab3link").click(function(){
		$(".tabs").hide();
		$("#tab3").show();
		$(".tabButtons li").removeClass('active');
		$(this).parent().addClass('active');	
		
	
	});
	$(".tickettab4link").click(function(){
		$(".tabs").hide();
		$("#tab4").show();
		$(".tabButtons li").removeClass('active');
		$(this).parent().addClass('active');	
		
	
	});

	
	// Ticket Popup
	$(".bgcoloradd").focus(function(){
		$(".commentspopupbg").css({"display":"block"});
        $(".commentspopup").css({"display":"block"});
	});
	
	$(".bgcolorcommentpopup").click(function(){
		$(".commentspopupbg").css({"display":"none"});
        $(".commentspopup").css({"display":"none"});
	});
	
	//dropdown menu
	$('#topmenu li').has('ul').hover(
          function(){
            $(this).find('ul').slideDown();
          },
          function(){
            $(this).find('ul').slideUp();
      });
	  $('.help>li').has('ul').click(
          function(){
            $(this).find('ul').slideToggle();
       });	
	   
	   //dashboard popup  
	   $("li").has(".info").hover(function(){
			$(this).find(".info").show();   
		},
			function(){
			$(this).find(".info").hide();
		});
	   
	   $(".commentspopupbg").click(function(){$(".commentspopupbg").toggle();$("div.graph").show();}).children().click(function(e) {
			return false;
		});
		
		
		$(".currentstatus").click(function(){
			document.location.href="dashboard_status.html";
		});
});



//chart 1
var chart;
    $(document).ready(function() {
		Highcharts.setOptions({
        	colors: ['#0dca00', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    	});
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart1',
                type: 'line',
                marginRight: 40,
                marginBottom: 25,
				marginTop:50
            },
			title: {
                text: '',
                x: -20 //center
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {

                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#0dca00'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': $'+ this.y +'';
                }
            },
            legend: {
                verticalAlign: 'top',

            },
            series: [{
                name: 'Revenue',
                data: [51000, 50000, 52000, 58000, 65000, 63000]
            }]
        });
    });
    
//chart 2
var chart;
    $(document).ready(function() {
		Highcharts.setOptions({
        	colors: ['#0094d6', '#ff0000', '#0bca00', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
    	});
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'chart2'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
			yAxis:[{

                title: {
                    text: ''
                }
            }
			, { // Secondary yAxis
                title: {
                    text: 'Quality',
                    style: {
                        color: '#4572A7'
                    }
                },
                labels: {
                    formatter: function() {
                        return this.value +' %';
                    },
                    style: {
                        color: '#4572A7'
                    }
                },
                opposite: true
            }],
            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y +
                        (this.series.name == 'Quality' ? ' %' : '');
                }
            },
            
            series: [{
                type: 'column',
                name: 'Job Count',
                data: [25, 20, 27, 30, 20, 22]
            }, {
                type: 'column',
                name: 'Error Count',
                data: [3, 2, 3, 0, 1, 0]
            }, {
                name: 'Quality',
				 yAxis: 1,
                data: [92, 95, 93, 100, 96, 100]
            }],
			legend: {
                verticalAlign: 'top',

            }
        });
    });