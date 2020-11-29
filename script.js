$(document).ready(function () {

    if (screen.width < 550) {
        $(".merInfoBtn-produkt").text("köp");


        $(".merInfoBtn-produkt").hide();
        $(".mailBoxContainer").hide();
        // $(".h2Container-läsmer").hide();
    }
    else {

        $(".merInfoBtn-produkt").show();
        // $(".h2Container-läsmer").show();
    }

});

$(".mailATag").click(function () {
  $(".mailBoxContainer").toggle(120);
});
