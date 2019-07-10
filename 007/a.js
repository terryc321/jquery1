

/*
$(document).ready(function() {
$('div.poem-stanza').addClass('highlight');
});
*/

$(document).ready(function() {
    $('#letter-a a').click(function(event) {
	event.preventDefault();
	$('#dictionary').load('a.html');
    });
});


