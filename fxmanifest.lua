lua54 "yes"
client_script '@F-AC/antiInjection/client.lua'
server_script '@F-AC/antiInjection/server.lua'

fx_version('cerulean')
games({ 'gta5' })
author "INNVOX Team"
client_scripts({
    "client.lua"
});
files({
    "html/index.html",
    "html/*.js",
    "html/style.css",
    "html/images/*.png",
    "html/sounds/*.ogg",
})
ui_page "html/index.html"