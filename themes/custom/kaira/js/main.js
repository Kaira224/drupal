function myFunction(x) {
  let check = document.getElementById('check');
  let nav_items = document.getElementById('main-nav');
  if (x.matches) { // If media query matches
    if (check.checked === false) {
      console.log(check.checked);
      nav_items.children[2].style.left = "0";
    }else {
      nav_items.children[2].style.left = "-100%";
    }
  }
}
let x = window.matchMedia("(max-width: 850px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on
