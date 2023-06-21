

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
        header.style.backgroundImage = 'linear-gradient(to bottom, transparent, white),url("' + roomDatas['photos'][0] +'")'; // change white => rgba de #222222.
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

