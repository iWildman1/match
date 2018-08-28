class Score {
    constructor() {
        this.active = true;
        this.team1Score = 0;
        this.team2Score = 0;
    }

    getState() {
        return this.active;
    }

    getTeam1Score() {
        return this.team1Score;
    }

    getTeam2Score() {
        return this.team2Score;
    }

    getScore() {
        return `${this.team1Score} - ${this.team2Score}`;
    }

    setState(state) {
        this.active = state;
    }

    updateScore(team) {
        if (team === "team1") {
            this.team1Score++;
            return true;
        } else if (team === "team2") {
            this.team2Score++;
            return true;
        } else {
            return false;
        }
    }
}

export default Score;