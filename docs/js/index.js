/**
 * @ngdoc directive
 * @name eg.module.directive:egDirective
 * @element button
 * @function
 *
 * @description
 * Alert when element is clicked.
 *
 * **Note:** Calls native `alert()` function
 * @example
   <example module="eg.module">
    <file name="index.html">
      <button eg-directive>click me</button>
    </file>
   </example>
 */
angular.module('eg.module',[])
  .directive('egDirective',function(){
    return {
      restrict: 'A',
      link: function(s,e,a) {
        e.bind('click',function(){
          alert('clicked');
        });
      }
    };
  })
;
