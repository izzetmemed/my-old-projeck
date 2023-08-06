class Navbar extends CommonParts {
    constructor(tabs, brandName, brandLogoUrl) {
        super();
        this.tabs = tabs;
        this.brandName = brandName;
        this.brandLogoUrl = brandLogoUrl;

    }

    generateNavbar(_headerStyle) {
        // creating header
        const header = document.createElement('header');

        //set header styles

        header.className = 'bg-dark py-2'


        // generating header component
        this.generateHeaderComponents(header);

        // finally return header
        return header;
    }

    generateHeaderComponents(header) {
        const container = this.createContainer("");
        const row = this.createRow();

        const col_3 = this.createColumn(3);
        const col_9 = this.createColumn(9);

        col_9.classList.add("d-flex","justify-content-end","align-items-center");

        //appending columns into row
        row.appendChild(col_3);
        row.appendChild(col_9);

        //appending row into container
        container.appendChild(row);

        //appending container into header
        header.appendChild(container);

        //creating menu and brand side
        const brandSide = this.createBrandSide();
        const menuSide = this.createMenuSide();

        // append all elements into specific columns
        col_3.appendChild(brandSide.icon);
        col_3.appendChild(brandSide.link);
        col_9.appendChild(menuSide);
    }

    createBrandSide() {
        const icon = this.createIcon(this.brandLogoUrl, {
            fontSize: "2rem",
            color: "#fff",
            padding: 0,
            margin: 0,
        });

        const brandAnchor = this.createLink(this.brandName, "#", {
            textDecoration: 'none',
            color: "#fff",
            fontSize: "2rem",
            margin: 0,
            padding: 0,
        });

        return { icon: icon, link: brandAnchor };

    }

    createMenuSide() {
        let menuObject= new Map();
        
        this.tabs.forEach((tab,index)=>{
            menuObject.set(index,tab);
        });

        const ul = this.createUl(menuObject,{
            textDecoration: 'none',
            color: "#fff",
            fontSize: "1.5rem",
            margin: 0,
            padding: 0,
        },"d-flex list-unstyled gap-4 mb-0");

        return ul;
    }
}