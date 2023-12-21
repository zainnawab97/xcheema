const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoReading = false //auto recording (true to on, false to off)
global.autoTyping = false //auto tying (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)
global.autoread_status = false //auto view status/story (true to on, false to of)

//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.ownernomer = "923074060856" //ur owner number2
global.ownername = "𝐙𝐀𝐈𝐍✯𝐃𝐀𝐑𝐊🖤𝐇𝐄𝐀𝐑𝐓✯𝘽𝙊𝙏" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = "𝐙𝐀𝐈𝐍✯𝐃𝐀𝐑𝐊🖤𝐇𝐄𝐀𝐑𝐓✯𝘽𝙊𝙏"
global.ownernumber = '923074060856'
global.ownername = '🦄드림 가이 Xeon'
global.ownerNumber = ["923074060856@s.whatsapp.net"]
global.ownerweb = "https://youtu.be/TnUAvasM-1kn"
global.websitex = "https://youtu.be/TnUAvasM-1k"
global.wagc = "https://chat.whatsapp.com/Eytp018ACaSFOuBGXAreco"
global.themeemoji = '🪀'
global.wm = "✯𝐃𝐀𝐑𝐊🖤𝐇𝐄𝐀𝐑𝐓✯𝘽𝙊𝙏 Inc."
global.botscript = 'https://i.imgur.com/j8Eqv2q.jpeg' //script link
global.packname = "𝐙𝐀𝐈𝐍✯𝐃𝐀𝐑𝐊🖤𝐇𝐄𝐀𝐑𝐓✯𝘽𝙊𝙏"
global.author = "𝐙𝐀𝐈𝐍✯𝐃𝐀𝐑𝐊🖤𝐇𝐄𝐀𝐑𝐓✯𝘽𝙊𝙏\n\n+923074060856"
global.creator = "923074060856@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})