

$( document ).ready(function() {
    $('#navigation').load('../partials/_navigation.html');
    $('#footer').load('../partials/_footer.html');
    $('#main').load('../partials/_home.html');
});

$( "html").on('click','#about', function() {
    $('#main').load('../partials/about.html');
});

$( "html").on('click','#team', function() {
    $('#main').load('../partials/_team.html');
});

$( "html").on('click','#blog', function() {
    $('#main').load('../partials/blog.html');
});

$( "html").on('click','#events', function() {
    $('#main').load('../partials/events.html');
});

$( "html").on('click','#home', function() {
    $('#main').load('../partials/_home.html');
});

$( "html").on('click','#whatsapp', function() {
    $('#main').load('../partials/_whatsapp.html');
});

$( "html").on('click','#studentJobRegistration', function() {
    $('#main').load('../partials/_studentJobRegistration.html');
});

$( "html").on('click','#travelAssistance', function() {
    $('#main').load('../partials/_travelAssistance.html');
});

$( "html").on('click','#testimonials', function() {
    $('#main').load('../partials/_testimonials.html');
});

$( "html").on('click','#logo', function() {
    $('#main').load('../partials/_home.html');
});

$('.navbar-collapse div').click(function(){
    $(".navbar-collapse").collapse('hide');
});