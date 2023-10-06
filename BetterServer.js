ll.registerPlugin("BetterServer","BetterServer",[1,0,9],{author:"FTS427"})

mc.runcmd("gamerule showcoordinates true") //显示坐标

colorLog("cyan",`
 ______   _      ____                           
|__  / | | |    / ___|  ___ _ ____   _____ _ __ 
  / /| |_| |____\\___ \\ / _ \\ '__\\ \\ / / _ \\ '__|
 / /_|  _  |_____|__) |  __/ |   \\ V /  __/ |
/____|_| |_|    |____/ \\___|_|    \\_/ \\___|_|  `);

mc.listen("onPreJoin",(player) => {
    colorLog("bt_blue",`${player.name}正在加入服务器...`)
})

mc.listen("onJoin", (player) => {
    colorLog("bt_blue",`${player.name}加入了服务器`),
    player.sendToast('Welcome！', '欢迎游玩ZH-Server！')
})

mc.listen("onLeft", (player) => {
    colorLog("bt_blue",`${player.name}退出了服务器`)
})

mc.listen("onPlayerDie",(player) =>{
    colorLog("red",`${player.name}在${player.pos}死亡`)
})

mc.listen("onRespawn",(player) =>{
    colorLog("yellow",`${player.name}在${player.pos}重生`),
    player.tell(`上次死亡坐标：${player.lastDeathPos}`, 5)
})

mc.listen("onBedEnter",(player) =>{
    if(mc.getTime(1)>=11834){
        log(`${player.name}在${player.pos}睡觉`),
        player.sendToast('晚安_(-w-)_...', '祝君好梦'),
        setTimeout(() => mc.runcmd("time set day"), 3000);
        return false;
    }
    else{
        log(`${player.name}在${player.pos}设置重生点`);
        return false;
    }
})

mc.listen("onServerStarted", () => {
    const cmd = mc.newCommand("stopserver", "关闭服务器");
    cmd.overload();
    cmd.setCallback((_cmd, ori, out, _res) => {
        out.success("关服命令执行成功");
        mc.broadcast(`${ori.player.name}执行了关服命令。服务器将在10秒之后关闭`,4);
        setTimeout(() => mc.runcmd("stop"), 10000);
    });
    cmd.setup();
})

mc.listen("onChat", (player, msg) => {
    if (msg.indexOf("set morning") != -1) {
        mc.runcmd("time set day");
        colorLog("yellow",`${player.name}将时间设为 白天`);
        return false;
    };
    return true;
})

mc.listen("onChat", (player, msg) => {
        if (msg.indexOf("set sunny") != -1) {
        mc.runcmd("weather clear");
        colorLog("yellow",`${player.name}将天气设为 晴天`);
        return false;
    };
    return true;
})

mc.listen("onChat", (player, msg) => {
    if (msg.indexOf("set night") != -1) {
        mc.runcmd("time set midnight");
        colorLog("yellow",`${player.name}将时间设为 夜晚`);
        return false;
    }
    return true;
})

mc.listen("onChat", (player, msg) => {
    if (msg.indexOf("set def") != -1) {
        mc.runcmd("difficulty hard");
        colorLog("yellow",`${player.name}设置为默认`);
        return false;
    }
    return true;
})

mc.listen("onUseRespawnAnchor", function (pl, pos) {
    if (pos.dimid == 0) {
        pl.tell("主世界不可使用重生锚!!!");
        return false;
    }
    else if (pos.dimid == 2) {
        pl.tell("末地不可使用重生锚!!!");
        return false;
    }
});
