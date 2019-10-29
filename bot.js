const Discord = require('discord.js');
const { Client, Util } = require('discord.js');  
const request = require('request');
const queue = new Map(); 
const client = new Discord.Client(); 
const fs = require("fs"); 
const moment = require("moment");
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const dateFormat = require('dateformat'); 
var Canvas = require('canvas')



client.on('ready', function(){
    var ms = 15000 ;
    var setGame = [''];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i]);
    }, ms);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




 client.on('message', message => {
var prefix = "!";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'gopbroezfherhtr')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});




client.on('message', message => {

    if(message.content.startsWith(prefix + 'id')) {
if(!message.channel.guild) return;
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
         var heg;
         if(men) {
             heg = men
         } else {
             heg = message.author
         }
       var mentionned = message.mentions.members.first();
          var h;
         if(mentionned) {
             h = mentionned
         } else {
             h = message.member
         }
  moment.locale('ar');
    const w = ['./id1.png','./id2.png','./id3.png','./id4.png','./id5.png']
        let Image = Canvas.Image,
            canvas = new Canvas(500, 500),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 500);

})
                let url = h.user.displayAvatarURL.endsWith(".webp") ? h.user.displayAvatarURL.slice(5, -20) + ".png" : h.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
  //time dateformet
  const millis = new Date().getTime() - h.user.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy');
  const stats2 = ['online', 'Low', 'Medium', 'Insane'];
  const days = millis / 1000 / 60 / 60 / 24;
            dateFormat(now, 'dddd, mmmm dS, yyyy');
            
        
                          //دخولك الديسكورد
                          var day = `${days.toFixed(0)} Days ago`
                          ctx.font = '27px Arial Bold';
                          ctx.fontSize = '30px';
                          ctx.fillStyle = "#ffffff";
                          ctx.textAlign = "center";
                          ctx.fillText(day, 109, 97)
              //wl
              var millis1;
        if(mentionned){
            var millis1 = new Date().getTime() - mentionned.joinedAt
        } else {
            var millis1 = new Date().getTime() - moment(message.member.joinedAt);;
            
        }

  const days1 = millis1 / 1000 / 60 / 60 / 24;
  
                        //دخولك السيرفر
                        var day2 = `${days1.toFixed(0)} Days ago`
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(day2, 388, 97); 

                        //ur name
                        ctx.font = '27px BlowBrush';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(h.user.username, 245, 365);
                        //tag
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '45px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`#${heg.discriminator}`, 120, 450);
                        
                        //حالتك
                           let status;
    if (h.presence.status === 'online') {
        status = 'online';
    } else if (h.presence.status === 'dnd') {
        status = 'dnd';
    } else if (h.presence.status === 'idle') {
        status = 'idle';
    } else if (h.presence.status === 'offline') {
        status = 'offline';
    }
                        ctx.font = '27px Arial Bold';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${status}`, 380, 450);
                        
                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(250, 238, 64, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 185, 172, 130, 130 );
                         
     message.channel.sendFile(canvas.toBuffer())
})
   })

} });

client.login(process.env.BOT_TOKEN);