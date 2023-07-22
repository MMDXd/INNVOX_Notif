local RegisteredTypes = {
    ["success"] = true,
    ["error"] = true,
    ["info"] = true,
}
function SendNotif(msg, type)
    if not msg then return end
    if not type or not RegisteredTypes[type] then
        type = "success"
    end
    SendNUIMessage({
        message = msg,
        type = type,
    }) 
end



exports("SendNotif", SendNotif)
