const numLoader = () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id)
        let curr = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));
        const timer = setInterval(() => {
            curr += increment
            obj.innerText = curr;
            if (curr == end) {
                clearInterval(timer)
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 110, 3000);
}

document.addEventListener("DOMContentLoaded", numLoader)


// active navbar
let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on")
    } else {
        nav.classList.remove("scroll-on")
    }
}

// navhide  on click
let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse")
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navcollapse.classList.remove("show")
        // console.log("click");
    })
})