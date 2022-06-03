//  get all links in header
let menuItems = document.getElementsByClassName('header__nav-link');


//  event listener of document. Its triggering when all page is loaded and computed
document.addEventListener('readystatechange', event => {
    if (document.readyState === 'complete') {
        checkLenght();
    }
})

//  count all links and run cycle for its lenght
function checkLenght() {
    for (let i = 0; i < menuItems.length; i++) {
        pathCompare(menuItems[i]);
    }
}

//  compare browser link with href in item. If they are identical then add class "active-menu" to it
function pathCompare(val) {
    let element = val;
    let location = window.location.href;
    let link = element.href;
    if (location === link) {
        element.classList.add('active-menu');
    }
}









