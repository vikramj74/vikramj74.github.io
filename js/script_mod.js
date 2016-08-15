function PageAnimator(pageIndex) {
    var pageAnimator = this;
    pageAnimator.DURATION = 750;
    pageAnimator.index = pageIndex;
    pageAnimator.animate = function() {
        $('html,body').animate(
            {
                scrollTop : $("#page"+pageAnimator.index).position().top
            },
            pageAnimator.DURATION,
            'swing',
            null
        );
    };
}

function bindFocusTogglers(elemIds) {
    var el = null;
    var focusToggler = null;
    elemIds.map(function(id) {
        elem = $(id);
        focusToggler = function() {
            elem.toggleClass('focus');
        };
        elem.mouseenter(focusToggler);
        elem.mouseleave(focusToggler);
    });
}

function bindPageAnimators(map) {
    for(var key in map) {
        $(key).click(new PageAnimator(map[key]).animate);    
    }
}

$(document).ready(
    function() {
        bindPageAnimators({
            '.go-to-p1' : 1,
            '.go-to-p2' : 2,
            '.go-to-p3' : 3
        });

        bindFocusTogglers([
                'contact-btn', 
                'projects-btn'
        ]);

        $("#navi").on("click", "li", null, function () {
            if($(document).width() < 768)
                $("#hamburger").trigger('click');
        });
    }
);
