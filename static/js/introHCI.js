'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
        $("#testjs").text(`Text is changed.`);
        $(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);
}

function projectClick(e) {
    console.log("Project Clicked");
    // prevent the page from reloading
    e.preventDefault();

    // in an event handler, $(this) refers to the object triggered the event
    // $(this).css("background-color", "#7fff00");
    let projectTitle = $(this).find("p").text();
    // var testPro = $(".project");
    // console.log(jumbotronHeader.length);
    const jumbotronHeader = $('.jumbotron h1');
    jumbotronHeader.text(projectTitle);


    const containingProject = $(this).closest(".project");
    // containingProject.append("<div class='project-description'><p>Description of the project</p></div>");
    const description = $(containingProject).find(".project-description");
    if (description.length == 0) {
        $(containingProject).append("" +
            "<div class='project-description'><p>Description of the project.</p></div>"
        );
    } else {
        description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
        description.fadeToggle();
    }
}