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
                <div class="title-area">
                    <h1>${title}</h1>
                    <img src="./images/${iconName}" style="background-color: ${color};">
                </div>
                <div class="text-area">
                    <p id="showmsg">${message}</p>
                </div>
            </div>
            <div class="loader" style="background-color: ${color};"></div>
        </div>
        `;
        if (sound) {
            let audio = new Audio(sound)
            audio.volume = 0.2
            audio.play()
        }
        addNotif.appendChild(newNotify)
    
    };

    // For test
    // showNotf(typeDatas["success"].color, typeDatas["success"].image, "Innvox", "notify loaded ! -Team", "./sounds/success.ogg")
    // showNotf(typeDatas["error"].color, typeDatas["error"].image, "Innvox", "notify loaded ! -Team", "./sounds/error.ogg")
    // showNotf(typeDatas["warn"].color, typeDatas["warn"].image, "Innvox", "notify loaded ! -Team", "./sounds/warn.ogg")
    // showNotf(typeDatas["info"].color, typeDatas["info"].image, "Innvox", "notify loaded ! -Team", "./sounds/info.ogg")
    // showNotf(typeDatas["system"].color, typeDatas["system"].image, "Innvox", "notify loaded ! -Team", "./sounds/system.ogg")
    // showNotf(typeDatas["announce"].color, typeDatas["announce"].image, "Innvox", "notify loaded ! -Team ", "./sounds/announce.ogg")
    
    
    window.addEventListener("message", (event) => {
        let data = event.data
        let type = data.type
        if (!typeDatas[type]) return console.error("This type is not registered")
        showNotf(typeDatas[type].color, typeDatas[type].image, data.title, data.message, typeDatas[type].sound)
    })
});
