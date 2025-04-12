function buyDim(num)
{
    if(num==1 && !game.achievements.includes(13) && game.energy_dims.energy_dim1.amount>100 && game.energy_dims.buy_mode == 1){getAch(13,true)}
    let energyDim = game.energy_dims["energy_dim" + num]
    
    if (energyDim && game.atoms.amount > energyDim.cost && game.energy_dims.buy_mode == 0) {
        if (Math.floor(game.atoms.amount - energyDim.cost > 0.99999) && energyDim.level % 10 === 0) {
            energyDim.amount = add_logs(energyDim.amount, 1);
            energyDim.level += 10;
            game.atoms.amount = sub_logs(game.atoms.amount, energyDim.cost + 1);
        } else if (game.atoms.amount > energyDim.cost + Math.log10(10 - (energyDim.level % 10))) {
            let increase = Math.log10(10 - (energyDim.level % 10));
            energyDim.amount = add_logs(energyDim.amount, increase);
            energyDim.level += 10 - (energyDim.level % 10);
            game.atoms.amount = sub_logs(game.atoms.amount, energyDim.cost + increase);
        } else {
            let increase = Math.floor(Math.pow(10, game.atoms.amount - energyDim.cost));
            energyDim.amount = add_logs(energyDim.amount, Math.log10(increase));
            energyDim.level += increase;
            game.atoms.amount = sub_logs(game.atoms.amount, energyDim.cost + Math.log10(increase));
        }
    }
    else if(game.energy_dims.buy_mode == 1 && game.atoms.amount>energyDim.cost)
    {
        energyDim.amount = add_logs(energyDim.amount, 0);
        energyDim.level += 1;
        game.atoms.amount = sub_logs(game.atoms.amount, energyDim.cost);
        game.stats.timesBoughtWith1 ++
        if(game.stats.timesBoughtWith1>999 &&! game.sAchievements.includes(6)){getAch(6,false)}
    }
}

function buyExpanse()
{
    let enDim = game.energy_dims['energy_dim'+game.expanse.cost_type]
    if(enDim.level>game.expanse.cost-1 && !game.collapse.collapsing)
    {
        game.expanse.amount ++
        game.atoms.amount = -999
        game.energy.amount = 0
        game.atoms.atoms_s = -999
        game.energy.eff = 0
        game.energy.energy_s = -999
        game.energy_dims.energy_dim1.amount = -999
        game.energy_dims.energy_dim1.level = 0
        game.energy_dims.energy_dim2.amount = -999
        game.energy_dims.energy_dim2.level = 0
        game.energy_dims.energy_dim3.amount = -999
        game.energy_dims.energy_dim3.level = 0
        game.energy_dims.energy_dim4.amount = -999
        game.energy_dims.energy_dim4.level = 0
        game.energy_dims.energy_dim5.amount = -999
        game.energy_dims.energy_dim5.level = 0
        game.energy_dims.energy_dim6.amount = -999
        game.energy_dims.energy_dim6.level = 0
        game.energy_dims.energy_dim7.amount = -999
        game.energy_dims.energy_dim7.level = 0
        game.energy_dims.tickspeed.amount = 0
        game.energy_dims.tickspeed.eff = 0
        game.sacrifice.eff = 0
        game.expanse.eff2 = 0
        game.expanse.eff1 = 0
        if(game.achievements.includes(18)) {
            game.atoms.amount = Math.log10(300)
        }
    }
    else{collapse()}
}

function buyStar()
{
    if(!game.collapse.collapsing)
        {
            if(game.energy_dims.energy_dim7.level>game.stars.cost-1){
                game.stars.amount ++
                game.atoms.amount = -999
                game.energy.amount = 0
                game.atoms.atoms_s = -999
                game.energy.eff = 0
                game.energy.energy_s = -999
                game.energy_dims.energy_dim1.amount = -999
                game.energy_dims.energy_dim1.level = 0
                game.energy_dims.energy_dim2.amount = -999
                game.energy_dims.energy_dim2.level = 0
                game.energy_dims.energy_dim3.amount = -999
                game.energy_dims.energy_dim3.level = 0
                game.energy_dims.energy_dim4.amount = -999
                game.energy_dims.energy_dim4.level = 0
                game.energy_dims.energy_dim5.amount = -999
                game.energy_dims.energy_dim5.level = 0
                game.energy_dims.energy_dim6.amount = -999
                game.energy_dims.energy_dim6.level = 0
                game.energy_dims.energy_dim7.amount = -999
                game.energy_dims.energy_dim7.level = 0
                game.expanse.amount = 0
                game.energy_dims.tickspeed.amount = 0
                game.energy_dims.tickspeed.eff = 0
                game.sacrifice.eff = 0
                game.sacrifice.potential = 0
                if(game.achievements.includes(18)) {
                    game.atoms.amount = Math.log10(300)
                }
            }
        }else{collapse()}
}

function buyTickspeed()
{
    if(game.atoms.amount>game.energy_dims.tickspeed.cost)
    {
        game.energy_dims.tickspeed.amount ++
        game.atoms.amount = sub_logs(game.atoms.amount,game.energy_dims.tickspeed.cost)
    }
}

function buySacrifice()
{
    if(game.sacrifice.potential>Math.log10(1.5)&&game.energy_dims.energy_dim7.level>9)
    {
        game.sacrifice.eff += game.sacrifice.potential
        game.energy_dims.energy_dim1.amount = -999
        game.energy_dims.energy_dim2.amount = -999
        game.energy_dims.energy_dim3.amount = -999
        game.energy_dims.energy_dim4.amount = -999
        game.energy_dims.energy_dim5.amount = -999
        game.energy_dims.energy_dim6.amount = -999
    }
}

function changeMenu(a)
{
    game.menu = a

    if(a == 1)
    {
        document.getElementById('atoms_menu').style.display = 'inline-block'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('collapse_menu').style.display = 'none'
    }
    else if(a == 2)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'inline-block'
        document.getElementById('achDiv').style.display = 'inline-block'
        document.getElementById('sachDiv').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('collapse_menu').style.display = 'none'
    }
    else if(a == 3)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('stats_menu').style.display = 'inline-block'
        document.getElementById('stats_menu1').style.display = 'inline-block'
        document.getElementById('stats_menu2').style.display = 'none'
        document.getElementById('stats_menu3').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
        document.getElementById('collapse_menu').style.display = 'none'
    }
    else if(a == 4)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('options_menu').style.display = 'inline-block'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
        document.getElementById('collapse_menu').style.display = 'none'
    }
    else if(a == 5)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('collapse_menu').style.display = 'inline-block'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
    }

    if(a==5){document.body.style.backgroundColor = 'rgb(38, 0, 50)'}else{document.body.style.backgroundColor = 'rgb(0, 39, 39)'}

    if(game.menu == 1){
            document.getElementById('menus2').style.display = 'none'
        }else if(game.menu == 2){
            document.getElementById('menus2').style.display = 'inline-block'
            document.getElementById('subMenu1').textContent = 'Normal'
            document.getElementById('subMenu2').textContent = 'Secret'
            document.getElementById('subMenu3').textContent = 'Advanced info'

            document.getElementById('subMenu1.1').style.display = 'inline-block'
            document.getElementById('subMenu2.1').style.display = 'inline-block'
            document.getElementById('subMenu3.1').style.display = 'none'
            }else if(game.menu == 3){
                    document.getElementById('menus2').style.display = 'inline-block'
                    document.getElementById('subMenu1').textContent = 'General'
                    document.getElementById('subMenu2').textContent = 'Past runs'
                    document.getElementById('subMenu3').textContent = 'Advanced info'

                    document.getElementById('subMenu1.1').style.display = 'inline-block'
                    document.getElementById('subMenu2.1').style.display = 'inline-block'
                    document.getElementById('subMenu3.1').style.display = 'inline-block'
                }else if(game.menu == 4){
                        document.getElementById('menus2').style.display = 'none'
                    }else if(game.menu == 5){
                            document.getElementById('menus2').style.display = 'none'
                        }
}

function toggleDropdown(a) {
    let menu = document.getElementById("stats_effectsDrop"+a);
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function change_buy_mode() {
    if(game.energy_dims.buy_mode == 0)
    {
        game.energy_dims.buy_mode = 1
    }
    else
    {
        game.energy_dims.buy_mode = 0
    }
}

function ED_buy_all() {
    buyDim(1)
    buyDim(2)
    buyDim(3)
    buyDim(4)
    buyDim(5)
    buyDim(6)
    buyDim(7)
    buyTickspeed()
}

function options_change_font_size(a) {
    document.getElementById('dimExpanse1').style.fontSize = 1.1*a+'vw'
    document.getElementById('dimExpanse2').style.fontSize = 1*a+'vw'
    document.getElementById('dimExpanse3').style.fontSize = 1.2*a+'vw'
    document.getElementById('dimExpanse4').style.fontSize = 0.9*a+'vw'
    document.getElementById('dimExpanse5').style.fontSize = 0.9*a+'vw'
    document.getElementById('dimExpanse6').style.fontSize = 0.9*a+'vw'
    document.getElementById('tickspeed1').style.fontSize = 1*a+'vw'
    document.getElementById('tickspeed2').style.fontSize = 1*a+'vw'
    document.getElementById('tickspeed3').style.fontSize = 1*a+'vw'
    document.getElementById('buyDimCost1').style.fontSize = 0.9*a+'vw'
    document.getElementById('buyDimCost2').style.fontSize = 0.9*a+'vw'
    document.getElementById('buyDimCost3').style.fontSize = 0.9*a+'vw'
    document.getElementById('buyDimCost4').style.fontSize = 0.9*a+'vw'
    document.getElementById('buyDimCost5').style.fontSize = 0.9*a+'vw'
    document.getElementById('buyDimCost6').style.fontSize = 0.9*a+'vw'
    document.getElementById('buyDimCost7').style.fontSize = 0.9*a+'vw'
    document.getElementById('energy_dim1').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim2').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim3').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim4').style.fontSize = 0.8*a+'vw'//what am i doing here
    document.getElementById('energy_dim5').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim6').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim7').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim1.1').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim2.1').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim3.1').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim4.1').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim5.1').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim6.1').style.fontSize = 0.8*a+'vw'
    document.getElementById('energy_dim7.1').style.fontSize = 0.8*a+'vw'
    document.getElementById('buy10-sacrifice').style.fontSize = 0.9*a+'vw'
    document.getElementById('sacrifice1').style.fontSize = 1*a+'vw'
    document.getElementById('energy_eff1').style.fontSize = 0.9*a+'vw'
    document.getElementById('energy_eff2').style.fontSize = 1.3*a+'vw'
    document.getElementById('energy_eff3').style.fontSize = 0.9*a+'vw'
    document.getElementById('energy_eff4').style.fontSize = 1.3*a+'vw'
    document.getElementById('energy_eff5').style.fontSize = 0.9*a+'vw'
    document.getElementById('energy1').style.fontSize = 0.9*a+'vw'
    document.getElementById('energy2').style.fontSize = 1.3*a+'vw'
    document.getElementById('energy3').style.fontSize = 0.9*a+'vw'
    document.getElementById('energy4').style.fontSize = 1.3*a+'vw'
    document.getElementById('energy5').style.fontSize = 0.9*a+'vw'
    document.getElementById('atoms_s1').style.fontSize = 1*a+'vw'
    document.getElementById('atoms_s2').style.fontSize = 1.3*a+'vw'
    document.getElementById('atoms_s3').style.fontSize = 1*a+'vw'
    document.getElementById('atoms1').style.fontSize = 1.4*a+'vw'
    document.getElementById('atoms2').style.fontSize = 1.9*a+'vw'
    document.getElementById('atoms3').style.fontSize = 1.4*a+'vw'
    document.getElementById('stars1').style.fontSize = 1.1*a+'vw'
    document.getElementById('stars2').style.fontSize = 1*a+'vw'
    document.getElementById('stars3').style.fontSize = 1.2*a+'vw'
    document.getElementById('tickerMessage').style.fontSize = 1.2*a+'vw'
    document.getElementById('ED_buy_mode').style.fontSize = 0.8*a+'vw'
    document.getElementById('ED_buy_mode2').style.fontSize = 0.8*a+'vw'
    document.getElementById('collapse_info1').style.fontSize = 1.3*a+'vw'
    document.getElementById('collapse_info2').style.fontSize = 1.5*a+'vw'
    document.getElementById('collapse_info3').style.fontSize = 1.3*a+'vw'
}

let intervalId;
function startUIupdateRate() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(UItick,game.settings.UIrate)
}
function changeUIupdateRate(a) {
    game.settings.UIrate = a;
    startUIupdateRate();
}

function change_topBar(a) {
    game.settings.topBar = a-1
    if(a==1)
    {
        tickerMessage = newsTickers[Math.floor(Math.random()*newsTickers.length)]
        tickerX = tickerMessage == 'oops sorry wrong direction'?-20:100
        game.stats.tickers_seen ++
        if(tickerMessage == 'You had that many atoms at the time of creating this newsticker ->')
        {
            tickerMessage = 'You had that many atoms at the time of creating this newsticker -> '+format(game.atoms.amount,true)
        }
        if(tickerMessage == 'x <- This you?')
        {
            tickerMessage = Math.floor(Math.random()*254+1)+'.'+Math.floor(Math.random()*254+1)+'.'+Math.floor(Math.random()*254+1)+'.'+Math.floor(Math.random()*254+1)+' <- This you?'
        }
        if(tickerMessage == 'You just rolled a [NOT GENERATED, CONSIDER YOURSELF VERY LUCKY]')
        {
            tickerMessage = 'You just rolled a '+Math.floor(Math.random()*1000)+'. If that number is above 950, consider yourself lucky!'
        }
    }
}

function format(a,normal)
{
    if(a==Infinity){return 'LOCKED'}
    if(game.settings.notation !== 8){
        let yay = game.settings.decimalPlaces
        if(normal)
        {
            if(a<3)
            {
                let sud = Math.pow(10,a)
                return sud.toFixed(yay)
            }
            else if(a<36)
            {
                if(game.settings.notation == 1){
                    let sud = Math.pow(10,a%1)
                    return sud.toFixed(yay)+'e'+Math.floor(a)
                }
                else if(game.settings.notation == 2){
                    let sud = Math.pow(10,a%3)
                    return sud.toFixed(yay)+'e'+Math.floor(a/3)*3
                }
                else if(game.settings.notation == 3){
                    let sud = a
                    return 'e'+sud.toFixed(yay)
                }
                else if(game.settings.notation == 4){
                    let sud = Math.pow(10,a%1)
                    return sud.toFixed(yay)+notation2[Math.floor(a/26/26)]+notation2[Math.floor((a/26)%27)]+notation2[Math.floor(a%27)]
                }
                else if(game.settings.notation == 5){
                    let sud = a/Math.log10(2)
                    return '2^'+sud.toFixed(yay)
                }
                else if(game.settings.notation == 6){
                    let sud = Math.log10(a)
                    return 'ee'+sud.toFixed(yay)
                }
                else if(game.settings.notation == 7){
                    let sud = a/308.253
                    return sud.toFixed(yay)+' inf'
                }
                else{
                    let sud = Math.pow(10,a%3)
                    return sud.toFixed(yay)+notation1[Math.floor(a/3)-1]
                }
            }
            else if(a<10000)
            {
                if(game.settings.notation == 3){
                    let sud = a
                    return 'e'+sud.toFixed(yay)
                }
                else if(game.settings.notation == 2){
                    let sud = Math.pow(10,a%3)
                    return sud.toFixed(yay)+'e'+Math.floor(a/3)*3
                }
                else if(game.settings.notation == 4){
                    let sud = Math.pow(10,a%1)
                    return sud.toFixed(yay)+notation2[Math.floor(a/26/26)]+notation2[Math.floor((a/26)%27)]+notation2[Math.floor(a%27)]
                }
                else if(game.settings.notation == 5){
                    let sud = a/Math.log10(2)
                    return '2^'+sud.toFixed(yay)
                }
                else if(game.settings.notation == 6){
                    let sud = Math.log10(a)
                    return 'ee'+sud.toFixed(yay)
                }
                else if(game.settings.notation == 7){
                    let sud = a/308.253
                    return sud.toFixed(yay)+' inf'
                }
                else{
                    let sud = Math.pow(10,a%1)
                    return sud.toFixed(yay)+'e'+Math.floor(a)
                }
            }
            else
            {
                let sud = Math.pow(10,a%1)
                let sud2 = Math.pow(10,Math.log10(a)%3)
                return sud.toFixed(yay)+'e'+sud2.toFixed(2)+notation1[Math.floor(Math.log10(a)/3)-1]
            }
        }
        else
        {
            if(a<60)
            {
                return Math.round(a*10)/10+'s'
            }
            else if(a<3600)
            {
                return Math.floor(a/60)+'m '+Math.round(a%60*10)/10+'s'
            }
            else if(a<3600*24)
            {
                return Math.floor(a/3600)+'h '+Math.floor(a%3600/60)+'m '+Math.round(a%60*10)/10+'s'
            }
            else
            {
                return Math.round(a/86400*100)/100+' days'
            }
        }
    } else {return ''}
}
tickerMessage = newsTickers[Math.floor(Math.random()*newsTickers.length)]

function add_logs(a,b)
{
    if(a>b)
    {
        return a+(Math.log10(1+Math.pow(10,b-a)))
    }
    else
    {
        return b+(Math.log10(1+Math.pow(10,a-b)))
    }
}

function sub_logs(a,b)
{
    if(a>b)
    {
        return a+(Math.log10(1+(0-Math.pow(10,b-a))))
    }
    else
    {
        return -Infinity
    }
}

function change_notation(a) {
    game.settings.notation = a
}

function hasNaN(obj) {
    // Iterate over each value of the object
    return Object.values(obj).some(value => {
        // If the value is an object, recursively check for NaN in its values
        if (typeof value === 'object' && value !== null) {
            return hasNaN(value);  // Recurse into the nested object
        }
        // Check if the current value is NaN
        return value !== value;
    });
}

function saveGame() {
    if(!hasNaN(game)){
        game.last_online = Date.now()
        localStorage.setItem('energyGameInfo',JSON.stringify(game))
    }
}

function exportGame() {
    let savedGame = localStorage.getItem('energyGameInfo')
    if(savedGame !== null){
        savedGame = btoa(savedGame)
        navigator.clipboard.writeText(savedGame).then(() => {
            alert('Copied to clipboard!');
        })
    }
    else{
        alert('No local saves found!')
    }
}


function versionHandler(savedGame) {
    for (let key in defaults) {
        if (savedGame[key] === undefined || savedGame[key] === null) {
            savedGame[key] = defaults[key];
        }
    }
    return savedGame;
}

function loadGame(a) {
    if(a !== null && a !== ""){
        game = JSON.parse(localStorage.getItem('energyGameInfo'))
        game = versionHandler(game)
        localStorage.setItem('energyGameInfo',JSON.stringify(game))
    }
    changeMenu(game.menu)
    let time_offline = Date.now()-game.last_online
    game.last_online = Date.now()
    if(time_offline>12500){
        start_offline_progress(time_offline/125)
    }
}
//another comment here!
function importGame() {
    let imported = prompt('Put your savedata below, or leave empty to cancel.')
    if(imported !== null && imported !== ""){
        try{
            let decodedData = atob(imported);
            localStorage.setItem('energyGameInfo', decodedData);
            loadGame();

        }catch(e) {
            console.log('Error while importing safefile:', e,' Let there be dragons!');
        }
    }
}

function hardReset() {
    let answer = prompt("Are you sure? If yes, type in 'I do not care about my savefile'")
    if(answer == 'I do not care about my savefile'){
        localStorage.clear()
        window.location.reload()
    }
}

var iii = 0
function start_offline_progress(a) {
    let ticks
    if(a<game.settings.offlineTicks){
        ticks = Math.floor(a)
        offline_speed = Math.log10(5)
    }
    else if(a>game.settings.offlineTicks-1)
    {
        ticks = game.settings.offlineTicks
        offline_speed = Math.log10(Math.floor(a)/game.settings.offlineTicks)+Math.log10(5)
    }
    popup('Offline progress','Calculating... still calculating...','Time spent offline: idk','Skip')
    iii = 0
    offline_tick(ticks)
}
var offline_skipped = false
function offline_tick(ticks){
    iii ++
    setTimeout(function(){
        let sleptFor = ticks/40*Math.pow(10,offline_speed)
        if(sleptFor>28800 && !game.achievements.includes(15)){getAch(15,true)}

        document.getElementById('popupInfo').textContent = 'Calculating offline progress: '+iii+'/'+ticks+' ticks done.'
        document.getElementById('popupInfo2').textContent = 'Time spent offline: '+format(sleptFor,false)
        
        if(iii<ticks &&! offline_skipped){
            offline_tick(ticks)
        }
        else{
            offline_speed = 0
            iii = 0
            document.getElementById('popupClose').textContent = 'Play'
            offline_skipped = true
            if(ticks>4999 &&! game.sAchievements.includes(3)){getAch(3,false)}
        }
    },25)
}

function changeSubMenu(a){
    game.subMenu = a
    if(game.menu == 3 && game.subMenu == 1)
        {
            document.getElementById('stats_menu1').style.display = 'inline-block'
            document.getElementById('stats_menu2').style.display = 'none'
            document.getElementById('stats_menu3').style.display = 'none'
        }
        else if(game.menu == 2 && game.subMenu == 1)
        {
            document.getElementById('achDiv').style.display = 'inline-block'
            document.getElementById('sachDiv').style.display = 'none'
        }
        else if(game.menu == 2 && game.subMenu == 2)
        {
            document.getElementById('achDiv').style.display = 'none'
            document.getElementById('sachDiv').style.display = 'inline-block'
        }
        else if(game.menu == 3 && game.subMenu == 2)
        {
            document.getElementById('stats_menu2').style.display = 'inline-block'
            document.getElementById('stats_menu3').style.display = 'none'
            document.getElementById('stats_menu1').style.display = 'none'
        }
        else if(game.menu == 3 && game.subMenu == 3)
            {
                document.getElementById('stats_menu1').style.display = 'none'
                document.getElementById('stats_menu2').style.display = 'none'
                document.getElementById('stats_menu3').style.display = 'inline-block'
            }
}

function sAch2Click(){
    game.stats.sAch2Clicks ++
    if(game.stats.sAch2Clicks>99 &&! game.sAchievements.includes(2)){
        getAch(2,false)
    }
}

window.onload = function() {
    setTimeout(() => {
        startUIupdateRate()
        setInterval(gameTick, 25);
        setInterval(createBgStar, 500);
        changeMenu(1)
        options_change_font_size(game.settings.fontSize)
        loadGame(localStorage.getItem('energyGameInfo'))
        setInterval(saveGame,10000)
        setInterval(ach_tick,250)
    }, 1000);
};