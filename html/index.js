$(document).ready(function () {
    let addNotif = document.getElementById("allnotify");


    function showNotf(color, iconName, title, message) {
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
        addNotif.appendChild(newNotify)
    
    };
    let typeDatas = {
        success: {
            image: 'success.png',
            color: '#8dfd9e'
        },
        error: {
            image: 'error.png',
            color: '#E57373'
        },
        warn: {
            image: 'warn.png',
            color: '#FFF176'
        },
        info: {
            image: 'info.png',
            color: '#536DFE'
        },
        system: {
            image: 'system.png',
            color: '#9CCC65'
        },
        announce : {
            image: 'announce.png',
            color: '#E040FB'
        },
    }
    showNotf(typeDatas["success"].color, typeDatas["success"].image, "Innvox", "notify loaded ! -Team")
    window.addEventListener("message", (event) => {
        let data = event.data
        let type = data.type
        if (!typeDatas[type]) return console.error("This type is not registered")
        showNotf(typeDatas[type].color, typeDatas[type].image, data.title, data.message)
    })
});