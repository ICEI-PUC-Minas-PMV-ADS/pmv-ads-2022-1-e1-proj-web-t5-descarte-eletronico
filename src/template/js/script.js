const navbar = document.getElementById("collapseNavbar");


if (window.matchMedia("(min-height:800px)").matches && window.matchMedia("(min-width:1400px)").matches) {
    navbar.className="sidebar collapse show collapse-horizontal";
  } else {
    navbar.className="sidebar collapse collapse-horizontal";
}