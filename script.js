

sideEl = document.getElementById("side-panel")
bannerEl = document.getElementById("banner")
bodyEl = document.getElementById("body")
timesEl = document.getElementById("timesx")
universalEl = document.querySelector("*")



function clicked() {
    sideEl.style.left = "0px";
    sideEl.style.opacity = "1"
    // bodyEl.style.opacity ="0.9"
    // bodyEl.style.collapse = "40px"
    bannerEl.style.opacity = "0.8";
    universalEl.style.overflow = "hidden"
}

function collapse() {
    sideEl.style.left = "-250px";
    bodyEl.style.opacity ="1";
    universalEl.style.overflow = "scroll"
}

