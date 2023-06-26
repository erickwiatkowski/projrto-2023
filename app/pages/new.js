'use strict';
// funcoes de onfocus e onblur
function meds() {
   $('#medicamento').addClass('blue lighten-4');
 }
 
 function medn() {
   $('#medicamento').removeClass('blue');
 }

   document.getElementById('fabricante').onfocus = function(){
      this.classList.add('blue');
      this.classList.add('lighten-4');
   } 
  

function fabn(){
   document.getElementById('fabricante').classList.remove('blue');}

function dats() {   
  document.getElementById('data-de-compra').classList.add('green');
  document.getElementById('data-de-compra').classList.add('lighten-4');
}
function datn(){
   document.getElementById('data-de-compra').classList.remove('green');}
