

$( document ).ready(function() {
    $('#navigation').load('../partials/_navigation.html');
    $('#footer').load('../partials/_footer.html');
    $('#main').load('../partials/_home.html');
});

$( "html").on('click','#about', function() {
    $('#main').load('../partials/about.html');
});

$( "html").on('click','#team', function() {
    $('#main').load('../partials/team.html');
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
