// JavaScript Document

var MainModule = function(){
	var init = function(){
		generalBuild();
	};
	var generalBuild = function(){

		//this is the call of the function for default language
		initWidgets();
		// This is the event and function for the validation of the checkbox
		$("#mylanguageSwitch").click( function (){
				//Checkbox for language
				var url;
				if($("#mylanguageSwitch").is(':checked')) {  
					// url = "../data/data.json";
					url = "../data/data.json";
				}else{
					// url = "../data/data_es.json";
					url = "../data/data_es.json";
				}
				urlValidation(url);
			});
		// Function to set english language by default
		function initWidgets(){
			urlValidation("../data/data.json");
		}
		//JSON DATA
		function urlValidation(url){
			var xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {
			    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			        var myArr = JSON.parse(xmlhttp.responseText);
			        widgetData(myArr);
			    }
			}
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}
		// This is function to build the structure of the widgets with the data that comes from json
		function widgetData(arr) {
			var chartData = [arr.chart.title,
							 arr.chart.files,
							 arr.chart.size,
							 arr.chart.audio,
							 arr.chart.video,
							 arr.chart.photo,
							 arr.chart.type 
							 ];
		    document.getElementById("chartTitle").innerHTML = chartData[0];
		    document.getElementById("centerChart").innerHTML = '<p>' + chartData[1] + '<br>' + chartData[6] + '</p><h1>' + chartData[2] + '</h1>';
		    var profileData = [arr.profile.name,
		    				   arr.profile.followers
		    ];
		    document.getElementById("infoProfile").innerHTML = '<h2>' + profileData[0] + '</h2><p>' + profileData[1] + '</p>';
		    var blogPostData = [arr.blogPost.name,
		    				   arr.blogPost.lead1,
		    				   arr.blogPost.lead2,
		    				   arr.blogPost.views,
		    				   arr.blogPost.comments,
		    				   arr.blogPost.likes
		    ];
		    document.getElementById("infoBlogPost").innerHTML = '<h2>' + blogPostData[0] + '</h2><p>' + blogPostData[1] + '</p><p>' + blogPostData[2] + '</p>';
		    document.getElementById("blogViews").innerHTML = blogPostData[3];
		    document.getElementById("blogComments").innerHTML = blogPostData[4];
		    document.getElementById("blogLikes").innerHTML = blogPostData[5];
		}
		//Functions to assign the "active-state" of the widgets with selective options

		}
		
		$( ".menu li" ).click(function() {
			var clicked = document.getElementsByClassName("active");
			$(clicked).removeClass("active");
			$(this).addClass("active");
		});
		$( ".bottom-menu li" ).click(function() {
			var clicked = document.getElementsByClassName("selected");
			$(clicked).removeClass("selected");
			$(this).addClass("selected");
		});
		$( ".selection li" ).click(function() {
			var clicked = document.getElementsByClassName("option");
			$(clicked).removeClass("option");
			$(this).addClass("option");
		});
		$( ".levels li" ).click(function() {
			var clicked = document.getElementsByClassName("levelsel");
			$(clicked).removeClass("levelsel");
			$(this).addClass("levelsel");
		});
		//This code is for the chart
		window.onload = function () {
		CanvasJS.addColorSet("colorpie",
		            [
		            "#4daf7b",
		            "#e55e3a",
		            "#ebc85e",
		            "#e8e8e8"
		            ]);
		var chart = new CanvasJS.Chart("chartContainer",
		{
			colorSet: "colorpie",
			toolTip:{
				enabled: true
			},
			animationEnabled: true,     
			data: [
			{        
				type: "doughnut",
				startAngle: 270,
				toolTipContent: "{y}% {legenText}",                      
				showInLegend: false,
				dataPoints: [
					{y: 40, legenText: "audio"},
					{y: 30, legenText: "video"},
					{y: 20, legenText: "photo"},
					{y: 10, legenText: "left"}			
				]
			}
			]
		});
		chart.render();
	};
	return {init:init};
}();

$(document).ready(function() {
    MainModule.init();    
});



