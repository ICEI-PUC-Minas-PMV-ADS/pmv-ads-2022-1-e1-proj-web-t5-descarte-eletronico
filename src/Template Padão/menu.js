class Menu {
    constructor(menu, navList, navLinks) {
        this.menu = document.querySelector(menu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.changeMenuIcon();
        this.animateLinks();
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            const fadeInTime = index / this.navLinks.length + 0.2;

            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${fadeInTime}s`;
            }
        });
    }

    changeMenuIcon() {
        const menuIcons = document.querySelectorAll('.menu-icon');

        menuIcons.forEach((icon) => {
            icon.classList.toggle("disabled");
        });
    }

    addClickEvent() {
        this.menu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menu) {
            this.addClickEvent();
        }
        return this;
    }
}

const menuNavbar = new Menu(
    ".menu",
    ".nav-list",
    ".nav-list li"
);
menuNavbar.init();