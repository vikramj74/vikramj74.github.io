function getDocHeight() {
	var height = Math.max($(window).height());
	console.log("The height of the document is :\n\t"+height+"px"); /* not working after adding work page */
	return height;
}

function maxify() {
    var docHeight = getDocHeight();
    $(".page").css("height",docHeight+"px");
    var save = docHeight;
    docHeight = 1.35 *docHeight;
    $(".page").animate({height:docHeight},20);
    $("#page3").animate({height:save},20);
    $("#maxify").remove();
    $("#box").scrollTop(0);
    $("#brand-link").trigger("click");
} 
function goToPageOne() {
    var p = $("#page1").position().top;
    console.log("P = "+p);
    /*$(document).scrollTop(p);*/
    var html = $('html,body');
    html.animate({scrollTop:p}, 750, 'swing', function() { console.log("Finished animating"); }) ; 
}
function goToPageTwo() {
    var p = $("#page2").position().top;
     console.log("P = "+p);
    /*$(document).scrollTop(p);*/
    var html = $('html,body');
    html.animate({scrollTop:p}, 750, 'swing', function() { console.log("Finished animating"); }) ; 
}

function goToPageThree() {
    var p = $("#page3").position().top;
    console.log("P = "+p);
    /*$(document).scrollTop(p);*/
    var html = $('html,body');
    html.animate({scrollTop:p}, 750, 'swing', function() { console.log("Finished animating"); }) ; 
}
function placeFooter() {
    $('footer').css('position','relative');
    $('footer').css('top','5em');
}
$(document).ready(
    function() {
        maxify();
        placeFooter();
        /* DEBUG BEGIN */
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
        $("#box").scroll(
            function() {
                var boxVertScrollPos = $("#box").scrollTop();                 
                var calculatedShift = ( boxVertScrollPos/150  ) ;
                console.log("Vertical Position of the box : "+boxVertScrollPos+"\nCalculated shift value : "+calculatedShift);
                $("box #page1").css("-webkit-transform","translateY("+calculatedShift+"em)");
                $("box #page2").css("-webkit-transform","translateY("+calculatedShift*1.5+"em)"); 
            }
        );
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

    }
);
