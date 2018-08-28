import { store, updateBannerItems, updateBannerState, updateNotifier } from '../store';
import Banner from '../models/banner';

const bannerSwitch = document.querySelector('#banner-switch');
const bannerList = document.querySelector('#banner-selector');
const bannerUpdate = document.querySelector('#banner-update-text');
const bannerBtn = document.querySelector('#update-banner');

if (bannerSwitch) {
    bannerSwitch.addEventListener('click', function() {
        if (store.banner.active == true) {
            store.banner.active = false;
            bannerSwitch.classList.add('toggle-off');
            bannerSwitch.classList.remove('toggle-on');
        } else {
            store.banner.active = true;
            bannerSwitch.classList.add('toggle-on');
            bannerSwitch.classList.remove('toggle-off');
        }

        updateNotifier(store, 'banner-state-change');
    })
}

if (bannerBtn) {
    bannerBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let listIndex = bannerList.selectedIndex;
        let banner;
        
        
        if (listIndex == -1) {
            if (bannerUpdate.value != '' && bannerUpdate.value != null) {
                banner = new Banner(bannerUpdate.value);
                store.banner.items.push(banner.getContent());
                store.banner.activeItem = banner.getContent();
                updateNotifier(store, 'banner-change');

            } else {
                alert("Can't update store with empty value");
            }    
        } else {
            store.banner.activeItem = bannerList.value;
            updateNotifier(store, 'banner-change');

        }

        updateBannerList();
    })
}

function updateBannerList() {
    let list = store.banner.items;
    let listLength = bannerList.options.length;

    for (let i = 0; i < listLength; i++) {
        bannerList.remove(0);
    }

    for (let i = 0; i < list.length; i++) {
        let option = document.createElement("option");
        option.text = list[i]
        bannerList.add(option);
    }
    
}