// Check off specific Todos By Clicking

$("li").on("click", function () {
    $(this).toggleClass("completed");
});

// Click on X to delete To-Do
$("span").on("click", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation(); // Stop bubbling up to the li. (Only want to fire on the span (span is part of li, but we don't want to fire on li)

});