

   





// funcion scrolling s,moth
$(function () {
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefaul();

            var gato = this.hash;

            $("html,body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {
                    window.location.hash = gato;

                });

        }
    });

    $('[data-toggle="popover"]').popover();


    $('[data-toggle="tooltip"]').tooltip()
      


});


