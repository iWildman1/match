class LowerThird {
    constructor(title, subtitle, type, time, colour) {
        this.title = title,
        this.subtitle = subtitle,
        this.type = type,
        this.time = time,
        this.colour = colour
    }

    getTitle() {
        return this.title
    }

    getSubtitle() {
        return this.subtitle
    }

    getType() {
        return this.type
    }

    getTime() {
        return this.time
    }

    getColour() {
        return this.colour
    }

    setTitle(title) {
        this.title = title
    }

    setSubtitle(subtitle) {
        this.subtitle = subtitle
    }

    setType(type) {
        this.type = type
    }

    setTime(time) {
        this.time = time
    }

    setColour(colour) {
        this.colour = colour
    }

}


export default LowerThird;