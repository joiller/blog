$(function () {
    let nav = $(".head-nav")
    let menu = $(".menu-list")
    let ul = nav.find('ul')
    let as = ul.find('li');
    as.each(function (i,obj) {
        $(obj).mouseenter(function () {
            setTimeout(()=>{menu.show()},500)
        })
        $(obj).mouseleave(function () {
            menu.hide()
        })
    })
    menu.mouseenter(function () {
        menu.show()
    })
    menu.mouseleave(function () {
        menu.hide()
    })
    let slideIndex = 1
    showSlides(slideIndex)

    let prev = $(".prev")[0],
        next = $(".next")[0]

    $(prev).click(function () {
        plusSlides(-1)
    })
    $(next).click(function () {
        plusSlides(1)
    })
    
    $(".dot").each(function (i,obj) {
        $(obj).click(function () {
            currentSlide(i+1)
        })
    })

    function plusSlides(t) {
        showSlides(slideIndex += t)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    function showSlides(n) {
        let slides = $(".mySlides"),
            dots = $(".dot")
        if (n>slides.length) {
            slideIndex = 1
        }else if (n<1) {
            slideIndex = slides.length
        }
        for (let i =0;i<slides.length;i++) {
            $(slides[i]).hide()
        }
        for (let i=0;i<dots.length;i++) {
            dots[i].className = dots[i].className.replace(' active','')
        }
        $(slides[slideIndex-1]).show()
        dots[slideIndex-1].className += ' active'
        console.log('now show pic num'+slideIndex)
    }

    setInterval(function () {
        showSlides(slideIndex+=1)
    },3000)
    
})


