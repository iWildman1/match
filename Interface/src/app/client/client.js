import io from 'socket.io-client';

const scoreOverlay = document.querySelector('.overlay-score');

let isOverlay = false;
let socket;

if (scoreOverlay) {
    isOverlay = true;

    socket = io('http://localhost:5000');

    socket.on('overlay-team-change', function(data) {
        let team1Name = data.team1Name;
        let team2Name = data.team2Name;

        let team1Dom = document.querySelector('.team-1-score .team-name');
        let team2Dom = document.querySelector('.team-2-score .team-name');

        team1Dom.innerHTML = team1Name;
        team2Dom.innerHTML = team2Name;
    });

    socket.on('overlay-score-change', function(data) {
        let team1Score = data.team1Score;
        let team2Score = data.team2Score;

        let team1ScoreDom = document.querySelector('.team-1-score .team-score');
        let team2ScoreDom = document.querySelector('.team-2-score .team-score');

        team1ScoreDom.innerHTML = team1Score;
        team2ScoreDom.innerHTML = team2Score;
    });

    socket.on('overlay-score-state-change', function(data) {
        let scoreState = data.scoreState;

        let scoreBlocks = document.querySelectorAll('.score-holder');

        for (let i = 0; i < scoreBlocks.length; i++) {
            if (scoreState == false) {
                scoreBlocks[i].classList.add('elem-disabled');
            } else {
                scoreBlocks[i].classList.remove('elem-disabled');
            }
        }
    });

    socket.on('overlay-timer-change', function(data) {
        let timerState = data.timerState;
        let formattedTime = data.formattedTime;

        let timerDom = document.querySelector('.overlay-timer');

        if (timerState == false) {
            timerDom.classList.add('elem-disabled');
        } else {
            timerDom.classList.remove('elem-disabled');
        }

        timerDom.innerHTML = formattedTime;
    })

    socket.on('overlay-banner-state-change', function(data) {
        let bannerState = data.bannerState;

        let bannerDom = document.querySelector('.overlay-lower-banner');

        if (bannerState == false) {
            bannerDom.classList.add('elem-disabled');
        } else {
            bannerDom.classList.remove('elem-disabled');
        }
    })

    socket.on('overlay-banner-change', function(data) {
        let activeItem = data.activeItem;

        let bannerDom = document.querySelector('.overlay-lower-banner');
        let bannerItem = document.querySelector('.lower-banner-scrolling-text .text-item');

        bannerItem.innerHTML = activeItem;

        bannerDom.classList.add('banner-in-use');

        setTimeout(function() {
            bannerDom.classList.remove('banner-in-use');
        }, 10000);
    });

    socket.on('overlay-lt-fire', function(data) {
        let title = data.title;
        let subtitle = data.subtitle;
        let time = data.time;
        let colour = data.colour;
        let type = data.type;

        let ltDom = document.querySelector('.overlay-lower-third');
        let ltTimeDom = document.querySelector('.overlay-lt-time');

        let ltTitle = document.querySelector('.overlay-lt-title');
        let ltSubtitle = document.querySelector('.overlay-lt-sub');
        let ltTime = document.querySelector('.overlay-lt-time-inner');

        ltTitle.innerHTML = title;
        ltSubtitle.innerHTML = subtitle;
        ltTime.innerHTML = time;
        ltDom.classList.add(`lt-type-${type}`);
        
        if (colour != "" && colour != null && colour != undefined) {
            ltDom.setAttribute("style", `background-color: ${colour}`);
        }


        ltDom.classList.add('lt-active');
        ltTimeDom.classList.add('lt-active');

        setTimeout(function() {
            ltDom.classList.remove('lt-active');
            ltTimeDom.classList.remove('lt-active');
        }, 10000)

        setTimeout(function() {
            ltDom.classList.remove(`lt-type-${type}`);
            ltDom.setAttribute("style", "background-color: ");
        }, 12000);

    })
}