// Check off specific Todos By Clicking
/*
$("li").on("click", function () {
    $(this).toggleClass("completed");
});
*/
// The above code won't work for new li elements added.
// The modification below is required because it is not
//    allowed to add listeners to elements not yet on the page.
// This fixed the problem because the listener is added to the ul
// The "li" inside the on() indicates this fires when an li inside
//    ul is clicked.
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Click on X to delete To-Do
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(200, function () {
        $(this).remove();
    });
    event.stopPropagation(); // Stop bubbling up to the li. (Only want to fire on the span (span is part of li, but we don't want to fire on li)

});

$("input[type='text']").on("keypress", function (event) {
    if (event.which === 13) {  // 13 corresponds to the enter key
        // Extract text
        var todoText = $(this).val();
        // Make new li and add to ul
        $("ul").append("<li><span>X </span>" + todoText + "</li>");
        $(this).val("");
    }
});