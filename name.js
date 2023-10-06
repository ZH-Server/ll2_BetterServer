ll.registerPlugin('头顶信息显示','头顶信息显示');

let none,red,yellow,gold,green;
none = Format.Clear;
red = Format.DarkRed;
yellow = Format.Yellow;
gold = Format.Gold;
green = Format.Green;

mc.listen('onJoin', function (pl) {
        let tm = setInterval(function () {
                let name, ping, pingl, plh, plb;
                name = dy.name(pl);
                ping = dy.ping(pl);
                pingl = dy.pingl(pl);
                plh = dy.plh(pl);
                plb = dy.plb(pl);
        },250);
    }
)

let dy = {
    "name": function (pl) {
        let name = pl.realName;
        switch (true) {
            case name:
                return name
                break;
            default:
                return name
                break;
        };
    },
    "ping": function (pl) {
        let ping = pl.getDevice().lastPing;
        switch (true) {
            case ping <= 40:
                //绿色
                return green + ping + none
                break;
            case ping <= 70:
                //橙黄色
                return yellow + ping + none
                break;
            default:
                //红色
                return red + ping + none
                break;
        };
    },
    "pingl": function (pl) {
        let pingl = pl.getDevice().lastPacketLoss;
        switch (true) {
            case pingl <= 5:
                //绿色
                return green + parseInt(pingl) + none
                break;
            case pingl <= 1:
                //橙黄色
                return yellow + parseInt(pingl) + none
                break;
            default:
                //红色
                return red + parseInt(pingl) + none
                break;
        };
    },
    "plh": function (pl) {
        let plh = pl.health;
        switch (true) {
            case plh <= 20:
                //绿色
                return green + plh + none
                break;
            case plh <= 15:
                //橙黄色
                return yellow + plh + none
                break;
            case plh <= 10:
                //黄色
                return gold + plh + none
                break;
            case plh <= 5:
                //红色
                return red + plh + none
                break;
            default:
                //原色
                return plh + none
                break;
        };
    },
    "plb": function (pl) {
        let plb = pl.getAttributes()[9]["Current"];
        switch (true) {
            case plb <= 20:
                //绿色
                return green + plb + none
                break;
            case plb <= 15:
                //橙黄色
                return yellow + plb + none
                break;
            case plb <= 10:
                //黄色
                return gold + plb + none
                break;
            case plb <= 5:
                //红色
                return red + plb + none
                break;
            default:
                //原色
                return plb + none
                break;
        };
    }
};
    
mc.listen("onPlayerCmd", function (pl, cmd) {
        if (pl.name != pl.realName) {
            pl.rename(`${pl.realName}`);
        }
    }
)