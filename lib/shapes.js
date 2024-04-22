class Shape {
    constructor() {
        // SVG Default Values
        this.xml = `<?xml version="1.0" standalone="no"?>`;
        this.version = '1.1';
        this.xmlns = 'http://www.w3.org/2000/svg';
        this.logoWidth = 300;
        this.logoHeight = 200;
        this.openSVG = `<svg width="${this.logoWidth}" height="${this.logoHeight}" version="${this.version}" xmlns="${this.xmlns}">`
        this.closeSVG = `</svg>`

        // Variables for text placement
        this.textX = 150;
        this.textY = 125;
        this.fontSize = 60;
        this.textBaseline = 'auto';

        // Default open/close shape tags
        this.openTag = `<`
        this.closeTag = ` />`;
    }

    // Set Color Method of Shape
    setColor(color) {
        return this.color = color ? ` fill="${color.toLowerCase()}"` : ``;
    }

    // Set Text to LOGO
    setText(text, color, fontFamily) {
        if (!text) { return this.text = '' }
        this.fontFamily = fontFamily ? `font-family="${fontFamily}" ` : ``;
        this.fontFill = color ? ` fill="${color.toLowerCase()}"` : ``;
        let openTag = `<text x="${this.textX}" y="${this.textY}" font-size="${this.fontSize}" ${this.fontFamily} dominant-baseline="${this.textBaseline}" text-anchor="middle"${this.fontFill}>`
        let closeTag = `</text>`

        return this.text = `${openTag}\n\t\t${text.toUpperCase()}\n\t${closeTag}`
    }

    // Return Shape Tag for SVG Logo
    render() {
        this.shape = `${this.openTag}${this.color}${this.closeTag}`;
        return this.shape;
    }

    // Return full SVG LOGO Output
    createLogo() {
        //console.log(this);
        return `${this.xml}
${this.openSVG}
    ${this.render()}
    ${this.text}
${this.closeSVG}
`;
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.openTag = `<circle cx="150" cy="100" r="80"`;
        this.render()
    }
}

class Triangle extends Shape {
    constructor() {
        super();
        this.textY = 155;
        this.textBaseline = 'middle'
        this.openTag = `<polygon points="150, 18 244, 182 56, 182"`;
        this.render();
    }
}

// rX/rY give the rect rounded corners, if not set default to 0
class Square extends Shape {
    constructor() {
        super();
        // Square Variables
        const width = 150;
        const height = width;
        const x = (this.logoWidth - width) / 2;
        const y = (this.logoHeight - height) / 2;

        this.openTag = `<rect x="${x}" y="${y}" width="${width}" height="${height}"`;
        this.render();
    }
}






module.exports = { Circle, Triangle, Square };
