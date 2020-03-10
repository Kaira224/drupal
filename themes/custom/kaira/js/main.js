function myFunction(x) {
  let check = document.getElementById('check');
  let nav_items = document.getElementById('main-nav');
  if (x.matches) { // If media query matches
    if (check.checked) {
      console.log("check.checked");
      nav_items.childNodes.item(1).style.display = "block";
      // nav_items.children[2].setAttribute('left', '0');
      console.log(nav_items.childNodes.item(1));
    }
  }
}
let x = window.matchMedia("(max-width: 850px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on
