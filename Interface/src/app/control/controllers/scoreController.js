import { store, updateScore, updateNotifier } from '../store';
import Score from '../models/score';

const startBtn = document.querySelector('#start-match-btn');
const scoreSwitch = document.querySelector('#score-switch');

const team1Title = document.querySelector('.team-left h3');
const team1Score = document.querySelector('.team-left p');

const team2Title = document.querySelector('.team-right h3');
const team2Score = document.querySelector('.team-right p');

const goalBtn1 = document.querySelector('#update-score-1');
const goalBtn2 = document.querySelector('#update-score-2');

let score = new Score();

if (startBtn) {
    startBtn.addEventListener('click', function() {
        team1Title.innerHTML = store.teams.team1.getAcronym();
        team1Score.innerHTML = "0";

        team2Title.innerHTML = store.teams.team2.getAcronym();
        team2Score.innerHTML = "0";

        goalBtn1.innerHTML = `GOAL ${store.teams.team1.getAcronym()}`;
        goalBtn2.innerHTML = `GOAL ${store.teams.team2.getAcronym()}`;

        let scoreObj = {
            readable: {
                team1: score.getTeam1Score(),
                team2: score.getTeam2Score()
            },
            score: score
        }

        updateScore(scoreObj);
    })
}

if (scoreSwitch) {
    scoreSwitch.addEventListener('click', function() {
        if (store.score.score.getState() === true) {
            store.score.score.setState(false);
            scoreSwitch.classList.remove('toggle-on');
            scoreSwitch.classList.add('toggle-off');
        } else {
            store.score.score.setState(true);
            scoreSwitch.classList.remove('toggle-off');
            scoreSwitch.classList.add('toggle-on');
        }

        updateNotifier(store, 'score-state-change');
    })
}

if (goalBtn1) {
    goalBtn1.addEventListener('click', function(e) {
        e.preventDefault();
        store.score.score.updateScore("team1");
        team1Score.innerHTML = store.score.score.getTeam1Score();
        updateNotifier(store, 'score-change');
    })

}

if (goalBtn2) {
    goalBtn2.addEventListener('click', function(e) {
        e.preventDefault();
        store.score.score.updateScore("team2");
        team2Score.innerHTML = store.score.score.getTeam2Score();
        updateNotifier(store, 'score-change');
    })

}