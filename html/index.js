$(document).ready(function () {
    let typeDatas = {
        success: {
            image: 'success.png',
            color: [19, 210, 86]
        },
        error: {
            image: 'error.png',
            color: [255, 0, 0]
        },
    }
    window.addEventListener("message", (event) => {
        let data = event.data
        let type = data.type
        if (!typeDatas[type]) return console.error("This type is not registered")

    })
});



// new js 


let addNotif = document.getElementById("allnotify");


// show notif General setting
let iconName = "success";
let title = "Success"
let massage = "This is a exampel alert for test and debug";
let color = "#8dfd9e";


function showNotfiyE() {
    const newNotify = document.createElement("div");
    newNotify.innerHTML = `
    <div class="notif" style="border-left: 5px solid ${color};">
        <div class="content">
            <img src="./images/${iconName}.png" style="background-color: ${color};">
            <div class="text-area">
                <h1>${title}</h1>
                <p id="showmsg">${massage}</p>
            </div>
        </div>
        <div class="loader"></div>
    </div>
    `;
    addNotif.appendChild(newNotify)

};

showNotfiyE()