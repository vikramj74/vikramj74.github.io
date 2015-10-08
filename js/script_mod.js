function getDocHeight() {
	var height = Math.max($(window).height());
	return height;
}

/*function maxify() {
    var docHeight = getDocHeight();
    $(".page").css("height",docHeight+"px");
    var save = docHeight;
    docHeight = 1.35 *docHeight;
    $(".page").animate({height:docHeight},20);
    $("#page3").animate({height:save},20);
    $("#box").scrollTop(0);
    $("#brand-link").trigger("click");
}*/ 
function goToPageOne() {
    var p = $("#page1").position().top;
    /*$(document).scrollTop(p);*/
    var html = $('html,body');
    html.animate({scrollTop:p}, 750, 'swing', function() { console.log("Finished animating"); }) ; 
}
function goToPageTwo() {
    var p = $("#page2").position().top;
    /*$(document).scrollTop(p);*/
    var html = $('html,body');
    html.animate({scrollTop:p}, 750, 'swing', function() { console.log("Finished animating"); }) ; 
}

function goToPageThree() {
    var p = $("#page3").position().top;
    /*$(document).scrollTop(p);*/
    var html = $('html,body');
    html.animate({scrollTop:p}, 750, 'swing', function() { console.log("Finished animating"); }) ; 
}
$(document).ready(
    function() {
        //maxify();
        /* DEBUG BEGIN *\/
        $('#page1').click(
        	function() {
        		var p = $(this).position();
        		console.log("Page 1 is at : \n\t"+p.top+"px");
        	}
        );
        $('#page2').click(
        	function() {
        		var p = $(this).position();
        		console.log("Page 2 is at : \n\t"+p.top+"px");
        	}
        );
        /* DEBUG END */ 
        
        $('.go-to-p1').click(goToPageOne);
        $('.go-to-p2').click(goToPageTwo);
        $('.go-to-p3').click(goToPageThree);
            
    
    
        /* Parallax script */
        //$(document).on("mousewheel DOMMouseScroll MozMousePixelScrolling", function(event, data) {
        /*$(window).scroll(function() { 
                console.log("It fucking works !!!! Yessssssssssss");
                var pageYOffset = window.pageYOffset;
                $("#page2").css("top", -pageYOffset*0.4 + "px");
            }
        );*/
        $("#contact-btn").mouseenter(
            function() {
                $("#contact-btn").toggleClass("focus");
            }
        );
        $("#contact-btn").mouseleave(
            function() {
                $("#contact-btn").toggleClass("focus");
            }
        );
        $("#projects-btn").mouseenter(
            function() {
                $("#projects-btn").toggleClass("focus");
            }
        );
        $("#projects-btn").mouseleave(
            function() {
                $("#projects-btn").toggleClass("focus");
            }
        );
         $(function(){ 
             var navMain = $("#navi");
             navMain.on("click", "li", null, function () {
                if($(document).width() < 768)
                    $("#hamburger").trigger('click');
             });
         });
    }
);
