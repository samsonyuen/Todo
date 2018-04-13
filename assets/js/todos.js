// Check off specific Todos By Clicking

$("li").on("click", function () {
    $(this).toggleClass("completed");
});