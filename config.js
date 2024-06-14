const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348189057371";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_44_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDg5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICA0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICA3NixcbiAgICAgICAgMjI4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDc1LFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLbkVkRG9SQmpWVmRuaDdhUEY4ai9oUjdoU2RPVUVCT2c1dGNJVU9QT1JRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOcUtTUkdFQVFfYUFmenp4Qk5FNjZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjEwNTEyNjQ5LWQ0OTItNGNlNy1iMDA3LTk5YjE1YjU1M2NmOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDc5LFxuICAgICAgMTU2LFxuICAgICAgMTg5LFxuICAgICAgNzEsXG4gICAgICA3NyxcbiAgICAgIDEwNixcbiAgICAgIDgwLFxuICAgICAgMTQzLFxuICAgICAgMTkyLFxuICAgICAgMTcxLFxuICAgICAgOSxcbiAgICAgIDYzLFxuICAgICAgMTExLFxuICAgICAgMTEsXG4gICAgICAxMjEsXG4gICAgICAxNTUsXG4gICAgICA0MyxcbiAgICAgIDE0MixcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAyMDMsXG4gICAgICAzLFxuICAgICAgMTQ3LFxuICAgICAgNjAsXG4gICAgICAyMTcsXG4gICAgICAxNTYsXG4gICAgICAyMjcsXG4gICAgICAyMTEsXG4gICAgICA1MixcbiAgICAgIDE4MSxcbiAgICAgIDAsXG4gICAgICA2OCxcbiAgICAgIDE2MSxcbiAgICAgIDU1LFxuICAgICAgMTI0LFxuICAgICAgMTQ3LFxuICAgICAgNzMsXG4gICAgICAyMjgsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNMk0zQ0dSTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE4OTA1NzM3MTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0OTI3NjI5NDA1NDEyNzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mWWgrTUZFS3Z6c3JNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidVdXWjNuRVpNNE1CaUE3ditndVRKU1F4dWZib3c1aFdPL2xEc0gwWDkyZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVbUpzby8xV3hkaXJ3QTlBQm9vUE01NEttUk5CdUVRa2dmQ3BIVWwvK0VNeVExUlRLYzFybWMwaDhQQ25EVUpMalY1UHlXL2JWU2RsOGxhZ3lkcnVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1OFlwdDNhTHFsaFRvZ2pmS3BqMGlaTVEyMTBmRzNPY3NhTm1pNFNVWTFoaTFDOUxFbUtaZVhaS2xNOEtKSFFpdmkxbmlCbmZ2ZGNsaVJkQzBoblhpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTg5MDU3MzcxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODQwMTQ1NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
