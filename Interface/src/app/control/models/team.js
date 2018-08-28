
class Team {
    constructor(name, acr) {
        this.name = name,
        this.acr = acr
    }

    getName() {
        return this.name
    }

    getAcronym() {
        return this.acr
    }

    getTeam() {
        return {
            name: this.name,
            acr: this.acr
        }
    }

    setName(name) {
        this.name = name
    }

    setAcronym(acr) {
        this.acr = acr
    }
}

export default Team;