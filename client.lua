function SendNotif(msg, type, title)
    if not msg then return end
    if not type then
        type = "success"
    end
    for i = 0, 10, 1 do
        msg = msg:gsub("^"..i, "")
    end
    SendNUIMessage({
        message = msg,
        type = type,
        title = title or ""
    }) 
end



exports("SendNotif", SendNotif)
