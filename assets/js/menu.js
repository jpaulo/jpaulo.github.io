(function ($) {
  $(document).ready(function(){
    const setColors = () => {
      $("#logoTransparent").hide();
      $("#logoWhite").show();
      $(".navbar").removeClass("navbar-dark");
      $(".navbar").addClass("navbar-light");
      $(".nav-link-top-menu").css("color", "black");
      $(".navbar").css("background-color", "white");
    };

    const setTransparent = () => {
      $("#logoWhite").hide();
      $("#logoTransparent").show();
      $(".navbar").removeClass("navbar-light");
      $(".navbar").addClass("navbar-dark");
      $(".nav-link-top-menu").css("color", "white");
      $(".navbar").css("background-color", "transparent");
    };

    const controlMenuScroll = () => {
      let top = $(".hero").first().offset().top;
      let height = $(".hero").first().outerHeight();

      if ($(this).scrollTop() > (0.8 * (top + height))) {
        setColors();
      } else {
        setTransparent();
      }
    };

    controlMenuScroll();

    $(function () {
      $(window).scroll(function () {
        controlMenuScroll();
      });
    });
  });
}(jQuery));




