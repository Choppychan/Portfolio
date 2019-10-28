document.addEventListener('DOMContentLoaded', function() {
   var today = Date.now();
   var birth = new Date('1993-01-21');
   var age = new Date(today - birth);
   $('#age').text(Math.abs(age.getUTCFullYear() - 1970));
   var elems = document.querySelectorAll('.collapsible');
   var instances = M.Collapsible.init(elems, {});
 });
