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



let iconName = "";
let massage = "";
let color = "";