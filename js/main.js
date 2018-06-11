var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    $(document).ready(function(){
    	$('#nav-icon2').click(function(){
    		$(this).toggleClass('open');
    	});

      var clicks = 0;

$('#nav-icon2').click(function() {
    if (clicks == 0){
        $('.navbar-nav').css('display', 'flex');
        clicks++
    } else{
$('.navbar-nav').css('display', 'none');
clicks--;

 }
});

    });


$(document).ready(function(){
    $("#leClic").click(function(){
        $("#formulaire").fadeIn(900);
  $("#formulaire").css("display", "flex");

    });
});

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});


function initMap()
{ var frejus = {lat: 43.425190, lng: 6.768370
};
 var map = new google.maps.Map(document.getElementById('map'), { zoom: 13, center: frejus
 });
 var marker = new google.maps.Marker({ position: frejus, map: map }); }



$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 1050; // Durée de l'animation (en ms)
			$('html, body').animate({ scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});
