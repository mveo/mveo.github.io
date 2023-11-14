/*!
=========================================================
* Creative Design Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
	
	$('#char_talk').click(function(){
		var $p = $('#char_talk_p');
		if ($p.css('display') == 'none'){
			$p.css('display', 'block');
		} else {
			$p.css('display', 'none');
		}
	});
	
	$('#char_abs').click(function(){
		var $p = $('#char_abs_p');
		if ($p.css('display') == 'none'){
			$p.css('display', 'block');
		} else {
			$p.css('display', 'none');
		}
	});
	
	$('#ber_talk').click(function(){
		var $p = $('#ber_talk_p');
		if ($p.css('display') == 'none'){
			$p.css('display', 'block');
		} else {
			$p.css('display', 'none');
		}
	});
	
	$('#ber_abs').click(function(){
		var $p = $('#ber_abs_p');
		if ($p.css('display') == 'none'){
			$p.css('display', 'block');
		} else {
			$p.css('display', 'none');
		}
	});
	
	$('#paper1').click(function(){
		var $p = $('#paper1_p');
		if ($p.css('display') == 'none'){
			$p.css('display', 'block');
		} else {
			$p.css('display', 'none');
		}
	});
	
	$('#paper2').click(function(){
		var $p = $('#paper2_p');
		if ($p.css('display') == 'none'){
			$p.css('display', 'block');
		} else {
			$p.css('display', 'none');
		}
	});
	
	$('#paper3').click(function(){
		var $p = $('#paper3_p');
		if ($p.css('display') == 'none'){
			$p.css('display', 'block');
		} else {
			$p.css('display', 'none');
		}
	});
	
	$('#paper4').click(function(){
		var $p = $('#paper4_p');
		if ($p.css('display') == 'none'){
			$p.css('display', 'block');
		} else {
			$p.css('display', 'none');
		}
	});
	
}); 

