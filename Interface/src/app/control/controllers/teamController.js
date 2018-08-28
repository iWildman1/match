import Team from '../models/team';
import { store, updateTeams } from '../store';

const teamOverlay = document.querySelector('.modal-active');
let team1;
let team2;
export let teamObj;

if (teamOverlay) {
    let startBtn = document.querySelector('#start-match-btn');

    startBtn.addEventListener('click', function(e) {
        e.preventDefault();

        team1 = new Team(document.querySelector('#team-1-name').value, document.querySelector('#team-1-acr').value);
        team2 = new Team(document.querySelector('#team-2-name').value, document.querySelector('#team-2-acr').value);

        teamObj = {
            team1: team1,
            team2: team2,
            readable: {
                team1: team1.getTeam(),
                team2: team2.getTeam()
            }
        }

        updateTeams(teamObj);

        document.querySelector('body').classList.remove('modal-active');
    })
}