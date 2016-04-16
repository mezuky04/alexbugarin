(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.tooltipped').tooltip({delay: 50});
        var options = [
            {selector: '.quote', offset: 200, callback: 'slideIn()' },
            {selector: '.favorite-color', offset: 200, callback: 'shakeFavoriteColorText()'},
            {selector: '.what-i-do', offset: 200, callback: 'slideWhatIDo()'},
            {selector: '.what-i-do-second-section', offset: 200, callback: 'slideWhatIDoSecondSection()'},
            {selector: '.freelance-work', offset: 200, callback: 'animateFreelanceWorkSection()'}
        ];
        Materialize.scrollFire(options);

    }); // end of document ready
})(jQuery); // end of jQuery name space

function slideWhatIDo() {
    $('.what-i-do-text').show().addClass('animated zoomIn');
    setTimeout(function() {
        $('.design-icon').show().addClass('animated slideInLeft');
        setTimeout(function() {
            $('.design-description').show().addClass('animated slideInRight')
        }, 600);
    }, 600);
}

function slideWhatIDoSecondSection() {
    $('.development-description').show().addClass('animated slideInLeft');
    setTimeout(function() {
        $('.development-icon').show().addClass('animated slideInRight');
    }, 600);
}

function slideIn() {
    $('.quote').show();
    $('.quote-text').addClass('animated bounceInLeft');
}

function shakeFavoriteColorText() {
    $('.favorite-color').addClass('animated shake');
}

function animateFreelanceWorkSection() {
    $('.currently-available').show().addClass('animated slideInRight');
    setTimeout(function() {
        $('.contact-description').show().addClass('animated slideInLeft');
        setTimeout(function() {
            $('.contact-button').show().addClass('animated fadeIn');
        }, 600);
    }, 600);
}