const  Discord = require('discord.js');
const  bot = new Discord.Client();
const config = require("./config.json");
bot.on('message', (message) => {
  bot.user.setActivity("(help = help || Ciężkie me życie jako moderator", { type: "WATCHING"})
  console.log('----------------')
  /// prefix
  const prefix = "("
  /// logi czatu
lastActivity = message.author.username
  console.log(`[${message.createdAt}]  ${lastActivity}: [${message.content}] na kanale: [${message.channel.name}] ID:[${message.author}] `);
  /// koniec logów

/// antyspam bota
if (message.author.bot) return;

/// antyspam koniec
/// setup ^
if (message.content == prefix+"help"){
const embed = new Discord.RichEmbed()
.setThumbnail("https://media.giphy.com/media/PmpA5ohOUl1xC/giphy.gif")
.setColor(ff0000)
.addField("MODERACJA:", "kick , ban ")
.addField("MATEMATYKA:", "+ , - , * , :   PRZYKŁAD: (+ 2 2")
.addField("UŻYTECZNE:", "ping")
.addField("ZABAWA:", "8ball, random, spam")
message.channel.send({embed})
}
/// ------------------------------
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
let rolw = message.guild.roles.find("name", "void");
/// ---------------------------------
/// kick
if (command === "kick") {
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.reply(":x: Nie mam permisji (KICK_MEMBER) aby tego zrobić. :x: Spróbuj dać mi role, która ma permisję do wyrzucania członków").catch(console.error);
    }

    if(message.mentions.users.size === 0) {
        return message.reply(" :x: Proszę oznacz osobę aby ją wyrzucić :x:").catch(console.error);
    }

    if(!message.member.roles.has(rolw.id)) {
    return message.channel.send(":x: Nie masz uprawnień do tej komendy! :x: ```UWAGA:``` Jeśli jesteś ``adminem`` tego serwera, zrób rangę `void` oraz daj ją sobie by uzyskać **uprawnienia!**")
    }
  member.kick(reason); + message.channel.sendMessage(`Wyrzucono gracza ${member} :white_check_mark:  :warning: z powodu: ${reason}`)

  }
  /// kick



  if (command === "ban") {
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.reply(":x: Nie mam permisji (KICK_MEMBER) aby tego zrobić. :x: Spróbuj dać mi role, która ma permisję do wyrzucania członków").catch(console.error);
    }

    if(message.mentions.users.size === 0) {
        return message.reply(" :x: Proszę oznacz osobę aby ją wyrzucić :x:").catch(console.error);
    }

    if(!message.member.roles.has(rolw.id)) {
    return message.channel.send(":x: Nie masz uprawnień do tej komendy! :x: ```UWAGA:``` Jeśli jesteś ``adminem`` tego serwera, zrób rangę `void` oraz daj ją sobie by uzyskać **uprawnienia!**")
    }
  member.ban(reason); + message.channel.sendMessage(`**Zbanowano** gracza ${member} :white_check_mark: |||  z opcjonalnego powodu: ${reason}`)

  }
/// ban
    // instrukcje
  let wpierdol = message.content.split(" ")[0];
  wpierdol = wpierdol.slice(prefix.length)
  let arguments = message.content.split(" ").slice(1);
  /// instrukcje


  /// dodawanie
  if (wpierdol == '+'){
  let numArray = args.map(n=> parseInt(n));
  let total = numArray.reduce( (p, c )  => p+c);
  message.channel.sendMessage(`**${total}** to wynik który obliczyłem :white_check_mark: Jeśli wypadł **NaN** to oznacza że wpisałeś coś nie tak.`)
  }
  /// dodawanie


  /// odejmowanie
  if (wpierdol == '-'){
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c )  => p-c);
    message.channel.sendMessage(`**${total}** to wynik który obliczyłem :white_check_mark:`)
    }
/// odejmowanie


/// mnożenie
if (wpierdol == '*'){
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c )  => p*c);
    message.channel.sendMessage(`**${total}** to wynik który obliczyłem :white_check_mark:`)
    }
/// mnożenie


/// dzielenie
if (wpierdol == ':'){
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c )  => p/c);
    message.channel.sendMessage(`**${total}** to wynik który obliczyłem :white_check_mark:`)
    }
if (command == "ping"){
message.channel.send(new Date().getTime() - message.createdTimestamp + " `ms` to ping serwerów discord")
}
if (command == "8ball"){
const eightbal = [
"**Magiczny** `8ball` mówi: *~Spróbuj jeszcze raz.*",
"**Magiczny** `8ball` mówi: *~Zdecydowanie tak jest.*",
"**Magiczny** `8ball` mówi: *~Spróbuj później.*",
"**Magiczny** `8ball` mówi: *~Odejdź, wiem skąd przybywasz.*",
"**Magiczny** `8ball` mówi: *~Nie próbuj.*",
"**Magiczny** `8ball` mówi: *~OH NIE! DZIKA ODPOWIEDŹ SIĘ POJAWIŁA*",
"**Magiczny** `8ball` mówi: *~Wyjdź stąd, jak najprędzej.*",
"**Magiczny** `8ball` mówi: *~Tylko prawdę*",
]
message.channel.send(`${eightbal[Math.floor(Math.random() * eightbal.length)]}`);
}

if (command == 'random') {
    Math.floor((Math.random() * 10) + 1);
    message.channel.sendMessage('Twój `random` wynosi: `' + Math.floor((Math.random() * 100) + 1) + '`');
    }
if (command == "spam"){
message.channel.sendMessage(Math.floor((Math.random() * 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) + 1));

}
var weirdStringNullableBoolean = message.content.replace(/\s/g,"").toLowerCase().match(/.*(vandex|vandex92|<@480108823185588227>).*/g); 
if (!!weirdStringNullableBoolean){
var patt1 = /./i;
var res = patt1.ignoreCase;
message.channel.send(`✅`, {
    files: 
    ["logo.jpg"]
  })}
});
bot.login(process.env.BOT_TOKEN);
