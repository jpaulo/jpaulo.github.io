(function ($) {
  $(document).ready(function(){
    const scrollToAnchor = (id) => {
      let elem = $(id);
      $('html,body').animate({scrollTop: elem.offset().top - 120}, 'slow');
    };

    $(function () {
      $(".contact-button").click((e) => {
        e.preventDefault();
        scrollToAnchor("#contactSection");
      });

      $(".menu-button").click((e) => {
        e.preventDefault();
        scrollToAnchor("#menuSection");
      });

      $(".delivery-button").click((e) => {
        e.preventDefault();
        location.href = "https://wa.me/5511947418825";
      });

      $(".staff-button").click((e) => {
        e.preventDefault();
        scrollToAnchor("#staffSection");
      });

      $("#gallerySection").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
          enabled:true
        }
      });
    });
  });
}(jQuery));




