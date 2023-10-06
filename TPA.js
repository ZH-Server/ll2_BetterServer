ll.registerPlugin(`TPA`,`Tp players to other players`);

mc.listen("onServerStarted",function(){
    mc.regPlayerCmd('tpa', '玩家传送', function (pl, args) {
        return tpamenu(pl);
        });
    });
    
function tpamenu(pl) {
    let pll = mc.getOnlinePlayers();
    let plname = [];
    let mo = ["自己→→→→别人", "别人→→→→自己"]
    for (let i in pll) {
        if (pll[i].realName != pl.realName) {
            plname.push(pll[i].realName);
        } 
        else {
            continue;
        }
    }
    let menu = mc.newCustomForm();
    menu.setTitle('传送菜单');
    menu.addDropdown('玩家选择', plname, 0);
    menu.addDropdown('模式选择', mo, 0);
    pl.sendForm(menu, function (pl, data) {
        let pla
        if (data != null && data != undefined) {
            if (plname[data[0]] != undefined && mo[data[1]] == "自己→→→→别人") {
                pla = mc.getPlayer(plname[data[0]]);
                tpaa(pl, pla);
            } 
            else if (plname[data[0]] != undefined && mo[data[1]] == "别人→→→→自己") {
                pla = mc.getPlayer(plname[data[0]]);
                tpal(pl, pla);
            } 
            else {
                pl.tell('玩家选择出错');
                return;
            }
        }
    });
};
    
function tpaa(pl, pla) {
    pla.sendModalForm('传送请求', `${pl.realName}请求传送到你这里`, '接受', '拒绝', function (pla, result) {
    switch (result) {
        case true:
            pl.teleport(pla.pos);
            break;
        default:
            pla.tell(`来自${pl.realName}的未接传送请求`);
            pl.tell('对方有事在忙,稍后再试');
            break;
        }
    })
};
    
function tpal(pl, pla) {
        pla.sendModalForm('传送请求', `${pl.realName}请求你传送到他(她)那里`, '接受', '拒绝', function (pla, result) {
        switch (result) {
            case true:
                pla.teleport(pl.pos);
                break;
            default:
                pla.tell(`来自${pl.realName}的未接传送请求`);
                pl.tell('对方有事在忙,稍后再试');
                break;
        }
    })
};