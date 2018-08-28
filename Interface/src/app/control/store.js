import { socket } from '../index';

export const store = {
    timer: '',
    teams: '',
    score: '',
    banner: {
        active: true,
        items: []
    },
    lowerThird: {
        active: ''
    },
    isSynced: ''
}

export function updateScore(val) {
    store.score = val;
    updateNotifier(store, 'score-change');
}

export function updateTimer(val) {
    store.timer = val;
    updateNotifier(store, 'timer-change');
}

export function updateTeams(val) {
    store.teams = val;
    updateNotifier(store, 'team-change');
}

export function updateBannerItems(val) {
    store.banner.items = val;
    updateNotifier(store, 'banner-change');
}

export function updateBannerState(val) {
    store.banner.active = val;
    updateNotifier(store, 'banner-state-change');
}

export function updateLowerThird(val) {
    store.lowerThird.active = val;
    updateNotifier(store, 'lt-fire');
}

export function updateNotifier(tree, event) {

    socket.emit(event, tree);
}


