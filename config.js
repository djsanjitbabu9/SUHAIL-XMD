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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_33_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAzMixcbiAgICAgICAgODYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDgyLFxuICAgICAgICA3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODEsXG4gICAgICAgIDExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0ajc0VjJXaWU5cTJTTmRLQkQzbzRPQndVNTU5NXU0aGs4RUl4d3VQZXJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODUxMzk2MDg3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjBCRUVENzJCREM4MEI5QTE1QTk0NzJFREY0M0I1NTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyOTkxNjE3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4NTEzOTYwODc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MjFEREQyRkIwNkQ0NzA4OThGMjQ5QTBGMEU5M0Y0QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI5OTE2MTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQVpRU1hieGhSckdFUjdFdHFjMkU4d1wiLFxuICBcInBob25lSWRcIjogXCJhODVmMGFlOC01NDEyLTQ4NDItYjRlZS0xMWVhMDk1MTc0NDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMTczLFxuICAgICAgMTkwLFxuICAgICAgMjExLFxuICAgICAgMTM4LFxuICAgICAgMTc1LFxuICAgICAgMTUzLFxuICAgICAgNDIsXG4gICAgICAyNDQsXG4gICAgICA1NSxcbiAgICAgIDI1MSxcbiAgICAgIDQsXG4gICAgICA1LFxuICAgICAgMjcsXG4gICAgICA2OCxcbiAgICAgIDY5LFxuICAgICAgNDAsXG4gICAgICAxMDcsXG4gICAgICA1OSxcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDgyLFxuICAgICAgMTE4LFxuICAgICAgMzksXG4gICAgICAyMCxcbiAgICAgIDE1NixcbiAgICAgIDQ3LFxuICAgICAgMTcsXG4gICAgICA2MixcbiAgICAgIDE4OSxcbiAgICAgIDI2LFxuICAgICAgMjE0LFxuICAgICAgMTY5LFxuICAgICAgMTk2LFxuICAgICAgMTYzLFxuICAgICAgMjYsXG4gICAgICAyNTEsXG4gICAgICAxMjQsXG4gICAgICAxNzgsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSNEpBQ0hFQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4NTEzOTYwODc0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJERUxUQSBWMTNcIixcbiAgICBcImxpZFwiOiBcIjg0MzE0MjM0NTkzODc6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLek8rS1FIRVBxMHJib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRjV0dSQk1ZRVlkcEM3dzUzSHAwQkVsZ2lKZkF6QTJmbkw2QUxIRmhwaXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL2FOS1c2bGozcXBOdzZOYmZ5UnpYNHpNM1daWm15b3hJYko1ZXZXeXoxOGJ0bVpsSUFiejVhMkRYWml5Mk05THFwRGZjR1Z2Q1dUZHhoRm9CUE9HQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZHQwZGVMZ2tzRHd1UFlzcm9kMUNpZWFuNHd3Tnp0dVp0a0RBa2dNUEhJdmxMR2daMUdLTFlLRDRPWVZWV2hxK1ZyMldNMEYyRWU0R3d5dDZZSStpQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NTEzOTYwODc0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyOTkxNjE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTBCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFMEIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmcTRjSHBBNGViYmRIblVidEprZm1LaDZDSnFpdXg5dVlEKytrR1g5QWRJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NTY1MjE3NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjk5MTYxNjY1MFwifSIKfQ=="  // PUT your SESSION_ID 


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
