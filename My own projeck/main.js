const body = document.body;

const pageLoad = () => {
    //adding navbar
    let navbar = createNavbar();
    body.appendChild(navbar);
}

const createNavbar = () => {
    let tabs = ["Home","About","Contact","Blog","FAQ"];

    const nav = new Navbar(tabs,"My Blog","fa-solid fa-music");

    return nav.generateNavbar();
}

pageLoad(); 