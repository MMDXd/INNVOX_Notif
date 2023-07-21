local RegisteredTypes = {
    ["success"] = true,
    ["error"] = true,
    ["info"] = true,
}
function SendNotif(msg, type, lenght)
    if not msg then return end
    if not type or not RegisteredTypes[type] then
        type = "success"
    end
    if not lenght then
        lenght = 5000
    end
    SendNUIMessage({
        message = msg,
        type = type,
        lenght = lenght 
    }) 
end



exports("SendNotif", SendNotif)