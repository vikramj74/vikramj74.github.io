function getDocHeight() {
	var height = Math.max($(window).height());
	return height;
}

function goToPageOne() {
    var p = $("#page1").position().top;
    var html = $('html,body');
    html.animate({scrollTop:p}, 750, 'swing', function() { console.log("Finished animating"); }) ; 
}

function goToPageTwo() {
    var p = $("#page2").position().top;
    var html = $('html,body');
    html.animate({scrollTop:p}, 750, 'swing', function() { console.log("Finished animating"); }) ; 
}

function goToPageThree() {
    var p = $("#page3").position().top;
    var html = $('html,body');
    html.animate({scrollTop:p}, 750, 'swing', function() { console.log("Finished animating"); }) ; 
}

$(document).ready(
    function() {
                
        $('.go-to-p1').click(goToPageOne);
        $('.go-to-p2').click(goToPageTwo);
        $('.go-to-p3').click(goToPageThree);
            
    
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
