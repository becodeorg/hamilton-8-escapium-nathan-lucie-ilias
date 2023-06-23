

/****************  get name *******************************/
const postName = (new URLSearchParams(window.location.search)).get('name');

document.getElementsByTagName('h1')[0].innerText = postName;

let roomDatas;

let header = document.getElementById('room_header');

fetch("../json/rooms.json")
    .then(response => response.json())
    .then(json => {
        for(let room of json) { // pour chaque room du .json
            if(room['name'] === postName){
                roomDatas = room;
            }
        }


        header.style.backgroundImage = 'linear-gradient(to bottom, rgb(27 27 27 / 0%), rgb(27 27 27)),url("' + roomDatas['photos'][0] +'")';


        // creation difficulty
        let datas_difficulty = document.getElementById('datas_difficulty');

        let difficulty = document.createElement('div');
        difficulty.className = "room_difficulty";
        while (difficulty.children.length < 5) {
            let lock = document.createElement('i');
            lock.className = "fa-solid fa-lock";
            if (difficulty.children.length < roomDatas['difficulty']){
                lock.style.color = '#F60B0E';
            }
            difficulty.append(lock);
        }
        datas_difficulty.prepend(difficulty);


        // creation players

        let datas_players = document.getElementById('datas_players');

        let groupDiv = document.createElement('div');
        groupDiv.style.display = "flex";
        let groupIcon = document.createElement('i');
        groupIcon.className = "fa-solid fa-user-group";
        groupIcon.style.color = '#969696';
        let groupP = document.createElement('p');
        groupP.innerText = roomDatas['players'][0] + "-" + roomDatas['players'][1];
        groupDiv.append(groupIcon,groupP);

        datas_players.prepend(groupDiv);

        // creation time

        let datas_time = document.getElementById('datas_time');

        let timeDiv = document.createElement('div');
        timeDiv.style.display = 'flex';
        let timeIcon = document.createElement('i');
        timeIcon.className = "fa-regular fa-clock";
        timeIcon.style.color = '#969696';
        let timeP = document.createElement('p');
        timeP.innerText = roomDatas['minutes'];
        timeDiv.append(timeIcon,timeP);
        datas_time.prepend(timeDiv);

    });





/****************  insert footer nav ********************/

import {nav} from "./topNav.js";

addNav();
async function addNav() {
    const resp = await fetch("topNav.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
    //document.getElementsByTagName('header')[0].insertAdjacentHTML("afterbegin", html);
    nav();
}

addFooter();
async function addFooter() {
    const resp = await fetch("footer.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}

