var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $product = document.querySelector('.product');

/* Iteration 1 */
function updateSubtot($product) {
  let $price = $product.querySelector('.pu > span').innerHTML;
  let $quantity = $product.querySelector('.qty > label > input').value;
  let $subtot = $product.querySelector('.subtot > span');

  let subtotal = $price * $quantity;
  $subtot.textContent = subtotal;

  return subtotal;
}

/* Iterations 2 & 3 */
function calcAll() {
  let $allProducts = document.querySelectorAll('.product');
  let $finalPrice = document.querySelector('h2 > span');
  let totalPrice = 0;

  $allProducts.forEach(element => {
    updateSubtot(element);
    totalPrice += updateSubtot(element);
  });

  $finalPrice.textContent = totalPrice;
}

$calc.onclick = calcAll;

/* Iteration 4 */
let $deleteBtns = document.querySelectorAll('.btn-delete');
console.log($deleteBtns);
    

$deleteBtns.forEach(element => {
  element.onclick = function (e) {
    console.log(e.currentTarget);

    let $productContainer = element.parentNode.parentNode.parentNode;
   
    console.log($productContainer);

    // $productContainer.removeChild();
  }
});


// let liTags = document.getElementsByTagName('li');

// for(let i=0; i < liTags.length; i++){
//   liTags[i].onclick = function(e){
//     console.log(e.currentTarget.innerHTML);
//   }
// }
