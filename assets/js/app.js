if (screen.width > 768) {
    $(window).scroll(function () {
        if ($("#menus").offset().top > 200) {
            $("#menus").addClass("bg-black");
        } else {
            $("#menus").removeClass("bg-black");
        }
    });
} else if (screen.width < 768) {
    $("#menus").addClass("bg-azul");
}