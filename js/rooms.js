/* récupération données rooms.json */
fetch("../json/rooms.json")
    .then(response => response.json())
    .then(json => {
        createRooms(json); // appel createRooms une fois les données récupérer
    });

let section = document.getElementById("rooms_rooms");

function createRooms(json) {

    for(let room of json) { // pour chaque room du .json

        // console.log(room['name']);

        // creation contener
        let contener = document.createElement('div');
        contener.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)),url("' + room["photos"][0] +'")';

        contener.style.backgroundPosition = 'center';
        contener.style.backgroundSize = 'cover';
        contener.className = 'room_card';

        // creation difficulty
        let difficulty = document.createElement('div');
        difficulty.className = "room_card_difficulty";
        while (difficulty.children.length < 5) {
            let lock = document.createElement('i');
            lock.className = "fa-solid fa-lock";
            if (difficulty.children.length < room['difficulty']){
                lock.style.color = '#F60B0E';
            }
            difficulty.append(lock);
        }
        contener.append(difficulty);

        // creation name
        let name = document.createElement('p');
        name.className = 'room_card_name';
        name.innerText = room['name'];
        contener.append(name);

        //creation infos
        let infos = document.createElement('div');
        infos.className = "room_card_infos";
        let groupIcon = document.createElement('i');
        groupIcon.className = "fa-solid fa-user-group";
        let groupP = document.createElement('p');
        groupP.innerText = room['players'][0] + "-" + room['players'][1];

        let timeIcon = document.createElement('i');
        timeIcon.className = "fa-regular fa-clock";
        let timeP = document.createElement('p');
        timeP.innerText = room['minutes'];


        let locationIcon = document.createElement('i');
        locationIcon.className = "fa-solid fa-location-dot";
        let locationP = document.createElement('p');
        locationP.innerText = room['location'];

        infos.append(groupIcon,groupP,timeIcon,timeP,locationIcon,locationP);

        contener.append(infos);

        section.append(contener);

    }
}
