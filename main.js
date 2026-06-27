/*
==========================================
THE MEENA ARCHIVE
main.js
Version 1.0
==========================================
*/

// =========================
// Navbar Scroll Effect
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(8,8,8,0.92)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.padding = "18px 8%";

    } else {

        navbar.style.background = "rgba(0,0,0,0.45)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.padding = "24px 8%";

    }

});


// =========================
// Fade In Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card,.section-title,.hero-content").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// =========================
// Scroll To Top Button
// =========================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="scrollTop";

document.body.appendChild(topButton);

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.opacity="1";
        topButton.style.pointerEvents="auto";

    }else{

        topButton.style.opacity="0";
        topButton.style.pointerEvents="none";

    }

});


// =========================
// Smooth Anchor Scrolling
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// =========================
// Console Welcome
// =========================

console.log("%cTHE MEENA ARCHIVE","font-size:24px;color:#C9A86A;font-weight:bold;");
console.log("History • Civilization • Heritage");
