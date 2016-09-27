
$(".ion-navicon").click(function() {
	$(this).toggleClass('ion-navicon ion-ios-close-outline')
        $(".left_bar").toggle("slide", {
            direction: "left"
        }, 500);
    });

