$(function(){
    $('#dowebok').fullpage({

		scrollingSpeed: 500,
		css3: true,
		resize: false,
		anchors: ["page1","page2","page3","page4","page5"],
		verticalCentered: true,
		afterRender: function(){
			$("#home").css({"display":"block"}).addClass("home_zoom");
			$("aside").css({"top":($(".active").height()-$("aside").height())/2});
			$("header").before("<div id='header' style='opacity:0'></div>");	
			$("#home_head").css({"margin-top":"100px"});

			$("header").animate({opacity:"1"},1000,function(){
				
				$("#header").css({"opacity":"0.3"});

				$("#home_info1").fadeIn(700, function(){
					$(this).next().animate({width:"800px"}, 700, function(){
						$("#home_info2").fadeIn(450, function(){
							$(this).next().fadeIn(450, function(){
								$(this).next().fadeIn(450, function(){
									$(this).next().fadeIn(450, function(){
										$("aside").fadeIn(300);
									});
								});
							});
						});
					});
				});
			});	

			$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
		},
		afterLoad: function(anchorLink,index){
			if (index === 1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			if (index === 2){
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
			}
			if (index === 3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
			}
			if (index === 4){
				$("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
			}
			if (index === 5){
				$("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
			}
		}
	});
});
//顶部标题文字切换
	$("#header_p").mouseover(function(){
		$("#header_p1").html("Resume");
		$("#header_p2").html("前端实习");
	}).mouseout(function(){
		$("#header_p1").html("hyh");
		$("#header_p2").html("个人简历");	
	});

//侧边导航文字切换
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200);
	});

//侧边导航适应居中
	var size=$(function(){
		$("aside").css({"top":($(".active").height()-$("aside").height())/2});
	});
	$(window).resize(function(){
		size();
	});