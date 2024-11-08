const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_03_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExLFxuICAgICAgICA1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDk0LFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNd2FxQVRMUkpTUHBtYzVJYStDK0IxUWovL2VIdVZkM1pPekovdmVlTDN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOck5Ya213SVRlMm9sQ21LNmZ1ZWhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM5YzE5MDJhLTA3MDQtNDdmMS1iMGVmLWExNGI3MGJmYmNhOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDE1OCxcbiAgICAgIDExNCxcbiAgICAgIDg1LFxuICAgICAgMTY1LFxuICAgICAgMSxcbiAgICAgIDE1OCxcbiAgICAgIDg3LFxuICAgICAgMTI3LFxuICAgICAgNDIsXG4gICAgICA1MyxcbiAgICAgIDEzNyxcbiAgICAgIDIwNyxcbiAgICAgIDIyMCxcbiAgICAgIDYxLFxuICAgICAgOTgsXG4gICAgICAxOTQsXG4gICAgICA0MCxcbiAgICAgIDExOSxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAxMTMsXG4gICAgICAzMSxcbiAgICAgIDMzLFxuICAgICAgNzAsXG4gICAgICAxNzgsXG4gICAgICA2MyxcbiAgICAgIDE1MSxcbiAgICAgIDIxOCxcbiAgICAgIDUzLFxuICAgICAgMTc0LFxuICAgICAgNDEsXG4gICAgICAzMCxcbiAgICAgIDE4NSxcbiAgICAgIDg2LFxuICAgICAgOCxcbiAgICAgIDc4LFxuICAgICAgMTE1LFxuICAgICAgNTgsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPclAyRzBRN0pxMnVRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNIS0U1eGRORmNjR2hRMGFUblk2R1RTeENEazlicGJRNllZdDVFWW8wQ1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMnZKMnRJZ0pES0tBTElmWUNPZUJvdUtxT21ycDZCL25tdldSWjYwUlArbEhxTDRGcTRnZnljZHE5RGI0eFhoS2tJS1BsWWFoeFN4NkZhVVVWeXFyQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSGRodHZpWVhoakNvd0hmbDZuait2Nm5NM0lQQUdNTHRaRGsvc0p0K0VkYUl5MlFwbTMwazlkUmNWRWxlYkU2SEQwS2ZKNGs5Q1pGbkhsY1Vnc0tKamc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzODAwOTc5Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDA2MzkyNTc3ODQ0NjE6OEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM4MDA5Nzk2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTAzODU3N1xufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🪐 𝙶𝙾𝚃𝙰𝚁 𝚆𝚁𝙻𝙳 🪐",
  ownername:process.env.OWNER_NAME|| "🪐 𝙶𝙾𝚃𝙰𝚁 𝚆𝚁𝙻𝙳 🪐",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
