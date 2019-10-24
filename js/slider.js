document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {});
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });
