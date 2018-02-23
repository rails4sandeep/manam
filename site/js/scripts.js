

$( document ).ready(function() {
    $('#navigation').load('../partials/_navigation.html');
    $('#footer').load('../partials/_footer.html');
    $('#main').load('../partials/_home.html');
    $('#carousel').load('../partials/_carousel.html');
});

$( "html").on('click','#about', function() {
    $('#main').load('../partials/about.html');
    $('#carousel').hide();
});

$( "html").on('click','#team', function() {
    $('#main').load('../partials/_team.html');
    $('#carousel').hide();
});

$( "html").on('click','#blog', function() {
    $('#main').load('../partials/blog.html');
    $('#carousel').hide();
});

$( "html").on('click','#events', function() {
    $('#main').load('../partials/events.html');
    $('#carousel').hide();
});

$( "html").on('click','#home', function() {
    $('#main').load('../partials/_home.html');
    $('#carousel').load('../partials/_carousel.html');
});

$( "html").on('click','#whatsapp', function() {
    $('#main').load('../partials/_whatsapp.html');
    $('#carousel').hide();
});

$( "html").on('click','#studentJobRegistration', function() {
    $('#main').load('../partials/_studentJobRegistration.html');
    $('#carousel').hide();
});

$( "html").on('click','#travelAssistance', function() {
    $('#main').load('../partials/_travelAssistance.html');
    $('#carousel').hide();
});

$( "html").on('click','#testimonials', function() {
    $('#main').load('../partials/_testimonials.html');
    $('#carousel').hide();
});

$( "html").on('click','#logo', function() {
    $('#main').load('../partials/_home.html');
    $('#carousel').load('../partials/_carousel.html');
});

$( "html").on('click','#sankranti', function() {
    $('#main').load('../partials/_sankranti.html');
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});