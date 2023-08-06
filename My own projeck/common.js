class CommonParts {
    createContainer(size) {
        const container = document.createElement('div');
        // switch (size) {
        //     case "sm":
        //         container.className = "container-sm";
        //         break;
        //     case "md":
        //         container.className = "container-md";
        //         break;
        //     case "lg":
        //         container.className = "container-lg";
        //         break;
        //     case "xl":
        //         container.className = "container-xl";
        //         break;
        //     case "fluid":
        //         container.className = "container-fluid";
        //         break;
        //     default:
        //         container.className = "container";
        //         break;
        //}

        container.className = size === "" ? "container" : `container-${size}`;

        return container;
    }
    createRow() {
        const row = document.createElement('div');
        row.classList.add('row');
        return row;
    }

    createColumn(size) {

        if (size > 12) {
            throw TypeError("Col size exceeded");
        }

        const div = document.createElement('div');
        div.className = `col-${size}`;
        return div;
    }

    createIcon(_class, _style) {
        const icon = document.createElement('i');

        // setting classname
        icon.className = _class;

        // setting manual styles

        icon.style.fontSize = _style.fontSize;
        icon.style.color = _style.color;
        icon.style.padding = _style.padding;
        icon.style.margin = _style.margin;

        //return created icon
        return icon;
    }

    createLink(_name, _url, _style) {
        const link = document.createElement('a');
        link.href = _url;
        link.textContent = _name;

        //adding manual styles
        link.style.textDecoration = _style.textDecoration;
        link.style.color = _style.color;
        link.style.fontSize = _style.fontSize;
        link.style.margin = _style.margin;
        link.style.padding = _style.padding;
        link.style.backgroundColor = _style.backgroundColor;

        return link;
    }

    createUl(menuObject, _linkStyle,className) {
        let ul = document.createElement('ul');
        ul.className = className;
        menuObject.forEach(item => {
            let li = document.createElement('li');
            let a = this.createLink(item, "#", _linkStyle);
            li.appendChild(a);
            ul.appendChild(li);
        });

        return ul;
    }


}