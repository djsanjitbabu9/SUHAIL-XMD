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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_57_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk4LFxuICAgICAgICA0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI2LFxuICAgICAgICA5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI2LFxuICAgICAgICA2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg4LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDc1LFxuICAgICAgICA3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3LFxuICAgICAgICAzMixcbiAgICAgICAgMjksXG4gICAgICAgIDExMixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZWVkZU9HTjBjN0ZIb3F2RjF1c2QveTlzMktSUENOd1VRUTZXajE4MlV5WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTg1MTM5NjA4NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJBOTc4NDY1NTI4RURBODdBMzIyN0I0NEIxMzNBNTBFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzAyMTgzNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODUxMzk2MDg3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjM0NEU4REMwNTk3QTUyREVCREI5OEUzMzVEQTQ5QkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMDIxODM1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVmN19JLURUUUZXS2ctTkVOX1VJLXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjdhOWFlNGEtY2JiYi00OTQ0LWFiYzAtN2E4YjQxMzA1ZjdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDYsXG4gICAgICAxMjgsXG4gICAgICAxMTEsXG4gICAgICAxMjIsXG4gICAgICA3OSxcbiAgICAgIDEwNixcbiAgICAgIDU5LFxuICAgICAgMTUsXG4gICAgICAyMTIsXG4gICAgICAxNDEsXG4gICAgICAyMzgsXG4gICAgICAxNzUsXG4gICAgICAyNDgsXG4gICAgICAyNDMsXG4gICAgICA2OCxcbiAgICAgIDIxNyxcbiAgICAgIDE3MyxcbiAgICAgIDQyLFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAyMCxcbiAgICAgIDQ3LFxuICAgICAgMTI4LFxuICAgICAgNTEsXG4gICAgICAxNzksXG4gICAgICAxNjYsXG4gICAgICAxNTAsXG4gICAgICA3NixcbiAgICAgIDI2LFxuICAgICAgMjE5LFxuICAgICAgNyxcbiAgICAgIDYsXG4gICAgICA3OCxcbiAgICAgIDEsXG4gICAgICAxNzYsXG4gICAgICAxNTUsXG4gICAgICAyNDcsXG4gICAgICA0OSxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZSNExDNjdTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg1MTM5NjA4NzQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRFTFRBIFYxNCAoUkBKKVwiLFxuICAgIFwibGlkXCI6IFwiODQzMTQyMzQ1OTM4Nzo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s3TytLUUhFSVdocjdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNGNXR1JCTVlFWWRwQzd3NTNIcDBCRWxnaUpmQXpBMmZuTDZBTEhGaHBpdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2UDYxZVJ6d1RiNWJPSytKd3lERmZ6MUpXTjFSd3MvTE9tZnpQWmxjTXBjNTRMMDRzWGthdDB0SGpRMEFtN3EwTmdDMm12bXdNeExzU240Vm40NlhDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBejBwWXFpQU1xbHRGY3JwcmlQekZXK29ES2FkVytwK2EvMGN6SG1hdzREMGhsdnp0RjlyMVJraFVyMW5wSHdLeTdvVVhZa1gzeXBjTmp0ZXF6ZmREZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg1MTM5NjA4NzQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwMjE4MzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFMEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUwRS5qc29uIjogIntcImtleURhdGFcIjpcImpmL0t5dTJabFo4ZlcyUzRUOUhSTE9KV3ZrUHRIL0RZdG1UYkY4c1NwdWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1NjUyMTc3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMDIxODM1NzEyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
