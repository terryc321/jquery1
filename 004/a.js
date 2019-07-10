
$(document).ready(function() {
    $('#letter-b a').click(function(event) {
	event.preventDefault();
	$.getJSON('b.json', {} , function(data) {
	    console.log("beginning json ... ");
	    
	    var html = '';
	    $.each(data, function(entryIndex, entry) {
		html += '<div class="entry">';
		html += '<h3 class="term">' + entry.term + '</h3>';
		html += '<div class="part">' + entry.part + '</div>';
		html += '<div class="definition">';
		html += entry.definition;
		html += '</div>';
		html += '</div>';
	    });
	    $('#dictionary').html(html);
	    console.log("completed");
	    
	});
    });
});

