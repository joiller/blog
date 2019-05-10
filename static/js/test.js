$(function () {
    let slideIndex = 1,
        prev = $(".prev"),
        next = $(".next")

    prev.click(function () {
        clickSlide(-1)
    })

    next.click(function () {
        clickSlide(1)
    })

    function clickSlide(t) {
        showSlide(slideIndex+=t)
    }

    function showSlide(n) {
        let slides = $(".slideShow"),
            dots = $(".dot")
        slides.each(function (i,obj) {
            obj.style.display = 'none'
        })
        dots.each(function (i,obj) {
            obj.className = obj.className.replace(' active','')
        })
        if (n>slides.length) {
            slideIndex = 1
        }
        if (n<1) {
            slideIndex = slides.length
        }
        slides[slideIndex-1].style.display = 'block'
        dots[slideIndex-1].className += ' active'
    }

    showSlide(1)

    setInterval(function () {
        showSlide(++slideIndex)
    },3000)
})