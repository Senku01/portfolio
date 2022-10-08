const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")
/*=============== SHOW MENU ===============*/
if(navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}
/*============== MENU HIDDEN ===============*/
if(navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")
function linkAction(){

    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n=> n.addEventListener('click',linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById("header")
    if (this.scrollY>80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")

}
window.addEventListener("scroll", scrollHeader)
/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer =document.querySelector(".portfolio-filter-inner"),
    filterBtns = filterContainer.children,
    totalFilerBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;
    console.log(totalPortfolioItem)

    for(let i = 0; i<totalFilerBtn;i++)
    {
        filterBtns[i].addEventListener('click',function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let k=0; k<totalPortfolioItem; k++)
            {
                if(filterValue === portfolioItems[k].getAttribute("data-category"))
                {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else if(filterValue ==="all")
                {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else
                {
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                }
            }
        })
    }
/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/

/*===== FONTS =====*/

/*===== PRIMARY COLORS =====*/

/*===== THEME BACKGROUNDS =====*/

