/*!
=========================================================
* FoodHut Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

new WOW().init();

function initMap() {
    var uluru = {lat: 37.227837, lng: -95.700513};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
 }




            $(".desplegable > span").click(function() {      
      $(this).next(".contenido").toggle(500);
    });

    $(".triCheckbox").click(function() {
      var estado = Number($(this).attr("data-estado"));
      if (estado == 1)
        estado = -2;

      estado += 1;
      //Comprobar si estamos en padre o en hijo.
      var liPadre = $(this).parent("li");

      if (liPadre.parents('ul').length >= 2) {
        //Entonces el elemento es un hijo   
        //Si estamos en el hijo dando permisos, darselos al padre.
        var permisoPadre = liPadre.parent("ul").parent("li").children(".triCheckbox");
        if (estado != -1 && permisoPadre.attr("data-estado") == -1)
          liPadre.parent("ul").parent("li").children(".triCheckbox").attr("data-estado", 0);

      } else {
        //Si estamos quitando permisos, quitar a los hijos
        if (estado == -1)
          liPadre.find(".triCheckbox").attr("data-estado", estado);
      }
      $(this).attr("data-estado", estado);
    });
