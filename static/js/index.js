window.onload = function () {
    let
        nav = document.getElementsByClassName('nav-container')[0],
        initop = nav.style.top||100
    scrolled(nav,initop)
    let li  =document.getElementsByTagName('li')
    console.log(li)
    console.log(li[2].style)
    for (let i =0;i<li[2].style.length;i++) {
        if (li[0].style[i]) {
            console.log(li[2].style[i])
        }
    }
}

function scrolled(nav,initop) {
    document.body.onscroll = function () {
        let top = document.documentElement.scrollTop
        nav.style.top = initop+top+'px'
    }
}