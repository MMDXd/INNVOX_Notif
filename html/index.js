$(document).ready(function () {
        let typeDatas = {
        success: {
            image: 'success.png',
            color: '#8dfd9e',
            sound: "./sounds/success.ogg"
        },
        error: {
            image: 'error.png',
            color: '#E57373',
            sound: "./sounds/error.ogg"
        },
        warn: {
            image: 'warn.png',
            color: '#FFF176',
            sound: "./sounds/info.ogg"
        },
        info: {
            image: 'info.png',
            color: '#536DFE',
            sound: "./sounds/info.ogg"
        },
        system: {
            image: 'system.png',
            color: '#9CCC65',
            sound: "./sounds/system.ogg"
        },
        announce : {
            image: 'announce.png',
            color: '#E040FB',
            sound: "./sounds/announce.ogg"
        },
    }
    let addNotif = document.getElementById("allnotify");


    function showNotf(color, iconName, title, message, sound) {
        const newNotify = document.createElement("div");
        newNotify.innerHTML = `
        <div class="notif" style="border-left: 5px solid ${color};">
            <div class="content">
                <img src="./images/${iconName}" style="background-color: ${color};">
                <div class="text-area">
                    <h1>${title}</h1>
                    <p id="showmsg">${message}</p>
                </div>
            </div>
            <div class="loader"></div>
        </div>
        `;
        if (sound) {
            let audio = new Audio(sound)
            audio.volume = 1.0
            audio.play()
        }
        addNotif.appendChild(newNotify)
    
    };

    // showNotf(typeDatas["success"].color, typeDatas["success"].image, "Innvox", "notify loaded ! -Team", "./sounds/success.ogg")
    window.addEventListener("message", (event) => {
        let data = event.data
        let type = data.type
        if (!typeDatas[type]) return console.error("This type is not registered")
        showNotf(typeDatas[type].color, typeDatas[type].image, data.title, data.message, typeDatas[type].sound)
    })
});
