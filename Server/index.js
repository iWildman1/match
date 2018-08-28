var server = require('http').createServer();
var io = require('socket.io')(server);

let state = {};

io.on('connection', function(client) {

    client.on('team-change', function(data) {
        state = data;

        let team1Acr = data.teams.team1.acr;
        let team2Acr = data.teams.team2.acr;

        io.emit('overlay-team-change', {
            team1Name: team1Acr,
            team2Name: team2Acr
        })
    })

    client.on('score-change', function(data) {

        state = data;

        let team1Score = data.score.score.team1Score;
        let team2Score = data.score.score.team2Score;

        io.emit('overlay-score-change', {
            team1Score: team1Score,
            team2Score: team2Score
        })
    })

    client.on('score-state-change', function(data) {

        state = data;

        let scoreState = data.score.score.active;

        io.emit('overlay-score-state-change', {
            scoreState: scoreState
        })

    })


    client.on('timer-change', function(data) {
        state = data;

        let timerState = data.timer.status;
        let formattedTime = data.timer.formattedTime;

        io.emit('overlay-timer-change', {
            timerState: timerState,
            formattedTime: formattedTime
        })
    })

    client.on('banner-state-change', function(data) {
        state = data;

        let bannerState = data.banner.active;

        io.emit('overlay-banner-state-change', {
            bannerState: bannerState
        })
    })

    client.on('banner-change', function(data) {
        state = data;

        let activeItem = data.banner.activeItem;

        io.emit('overlay-banner-change', {
            activeItem: activeItem
        })
    })

    client.on('lt-fire', function(data) {
        state = data;

        let title = data.lowerThird.active.title;
        let subtitle = data.lowerThird.active.subtitle;
        let time = data.lowerThird.active.time;
        let colour = data.lowerThird.active.colour;
        let type = data.lowerThird.active.type;

        io.emit('overlay-lt-fire', {
            title: title,
            subtitle: subtitle,
            time: time,
            colour: colour,
            type: type
        })
    })
})

server.listen(5000);