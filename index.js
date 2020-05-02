var TelegramBot = require('node-telegram-bot-api');
var TOKEN = '1294511706:AAGrODagk3YleJkwKrI29KT9gMB0yhORlcc';
var bot = new TelegramBot(TOKEN, {polling: true});

bot.onText(/\/echo (.+)/, function(msg, match){
    var chatId = msg.chat.id;
    var echo = match[1];
    bot.sendMessage(chatId, echo);
});
