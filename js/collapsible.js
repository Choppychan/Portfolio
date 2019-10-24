document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.collapsible');
   var instances = M.Collapsible.init(elems, {});
 });

 // Or with jQuery

 $(document).ready(function(){
   $('.collapsible').collapsible();
 });
