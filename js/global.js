function runBelow1440() {
    console.log("Viewport less then 1440!");
    // your code here

    let sidebarContainer = document.getElementById('sidebar_container')
    let logoContainer = document.getElementById('logo_container')
    let largeNav = document.getElementById('lg_nav')
    let smallNav = document.getElementById('small_nav')
    let bottomOptions = document.getElementById('bottom_options')


    sidebarContainer.classList.add("w-28");
    sidebarContainer.classList.remove("w-80");
    sidebarContainer.classList.remove("4xl:min-w-80");
    sidebarContainer.setAttribute('aria-expanded', 'false');

    // logo
    logoContainer.classList.add("hidden");
    logoContainer.classList.remove("block");

    // large nav 
    largeNav.classList.add("hidden");
    largeNav.classList.remove("block");

    //small nav
    smallNav.classList.remove("hidden");
    smallNav.classList.add("block");

    // bottom options
    bottomOptions.classList.add("hidden");
    bottomOptions.classList.remove("flex");

}

function runUpper440() {
    console.log("Viewport more then 1440!");
    // your code here
    let sidebarContainer = document.getElementById('sidebar_container')
    let logoContainer = document.getElementById('logo_container')
    let largeNav = document.getElementById('lg_nav')
    let smallNav = document.getElementById('small_nav')
    let bottomOptions = document.getElementById('bottom_options')

    console.log(sidebarContainer)

    sidebarContainer.classList.add("w-80");
    sidebarContainer.classList.add("4xl:min-w-80");
    sidebarContainer.classList.remove("w-28");
    sidebarContainer.setAttribute('aria-expanded', 'true');


    // logo
    logoContainer.classList.remove("hidden");
    logoContainer.classList.add("block");


    // large nav 
    largeNav.classList.remove("hidden");
    largeNav.classList.add("block");

    //small nav
    smallNav.classList.add("hidden");
    smallNav.classList.remove("block");

    
    // bottom options
    bottomOptions.classList.remove("hidden");
    bottomOptions.classList.add("flex");
}

function checkWidth() {
    if (window.innerWidth < 1440) {
        runBelow1440();
    } else {
        runUpper440();
    }
}

window.addEventListener("resize", checkWidth);
window.addEventListener("load", checkWidth);
