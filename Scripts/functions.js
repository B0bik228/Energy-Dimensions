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
    if(game.quadrantIn == 8){
        game.quadrant3_3Exp = 0
    }
}

function buyTickspeed()
{
    if(dom[`auto_thingCheck8`].checked){return}
    if(game.atoms.amount>game.energy_dims.tickspeed.cost)
    {
        game.energy_dims.tickspeed.amount ++
        game.atoms.amount = sub_logs(game.atoms.amount,game.energy_dims.tickspeed.cost)
    }
    if(game.quadrantIn == 8){
        game.quadrant3_3Exp = 0
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
        game.sacrifice.timeSinceSacrifice = -99
    }
    if(game.quadrantIn == 8){
        game.quadrant3_3Exp = 0
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
        document.getElementById('supernova_menu').style.display = 'none'
        document.getElementById('time_menu').style.display = 'none'
        document.getElementById('automation_menu').style.display = 'none'
        document.getElementById('goSupernovaButton').style.display = 'inline-block'
        document.getElementById('story_menu').style.display = 'none'
    }
    else if(a == 2)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'inline-block'
        document.getElementById('achDiv').style.display = 'inline-block'
        document.getElementById('sachDiv').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('supernova_menu').style.display = 'none'
        document.getElementById('time_menu').style.display = 'none'
        document.getElementById('automation_menu').style.display = 'none'
        document.getElementById('goSupernovaButton').style.display = 'none'
        document.getElementById('story_menu').style.display = 'none'
    }
    else if(a == 3)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('stats_menu').style.display = 'inline-block'
        document.getElementById('stats_menu1').style.display = 'inline-block'
        document.getElementById('stats_menu2').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
        document.getElementById('supernova_menu').style.display = 'none'
        document.getElementById('time_menu').style.display = 'none'
        document.getElementById('automation_menu').style.display = 'none'
        document.getElementById('goSupernovaButton').style.display = 'none'
        document.getElementById('story_menu').style.display = 'none'
    }
    else if(a == 4)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('options_menu').style.display = 'inline-block'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
        document.getElementById('supernova_menu').style.display = 'none'
        document.getElementById('time_menu').style.display = 'none'
        document.getElementById('automation_menu').style.display = 'none'
        document.getElementById('goSupernovaButton').style.display = 'none'
        document.getElementById('story_menu').style.display = 'none'
    }
    else if(a == 5)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('supernova_menu').style.display = 'inline-block'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
        document.getElementById('time_menu').style.display = 'none'
        document.getElementById('automation_menu').style.display = 'none'
        document.getElementById('goSupernovaButton').style.display = 'inline-block'
        document.getElementById('story_menu').style.display = 'none'
    }
    else if(a == 6)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('supernova_menu').style.display = 'none'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
        document.getElementById('time_menu').style.display = 'inline-block'
        document.getElementById('automation_menu').style.display = 'none'
        document.getElementById('goSupernovaButton').style.display = 'none'
        document.getElementById('story_menu').style.display = 'none'
    }
    else if(a == 7)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('supernova_menu').style.display = 'none'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
        document.getElementById('time_menu').style.display = 'none'
        document.getElementById('automation_menu').style.display = 'inline-block'
        document.getElementById('goSupernovaButton').style.display = 'inline-block'
        document.getElementById('story_menu').style.display = 'none'
    }
    else if(a == 8)
    {
        document.getElementById('atoms_menu').style.display = 'none'
        document.getElementById('options_menu').style.display = 'none'
        document.getElementById('supernova_menu').style.display = 'none'
        document.getElementById('stats_menu').style.display = 'none'
        document.getElementById('ach_menu').style.display = 'none'
        document.getElementById('time_menu').style.display = 'none'
        document.getElementById('automation_menu').style.display = 'none'
        document.getElementById('goSupernovaButton').style.display = 'none'
        document.getElementById('story_menu').style.display = 'inline-block'
    }

    if(a==5){document.body.style.backgroundColor = 'rgba(26, 0, 34, 1)'}else if(game.menu == 6 && game.subMenu == 2){document.body.style.backgroundColor = 'black'}else if(game.menu == 6 &&! game.subMenu == 2){document.body.style.backgroundColor = 'rgba(2, 33, 0, 1)'}else if(game.menu == 7){document.body.style.backgroundColor = 'rgba(28, 28, 28, 1)'}else{document.body.style.backgroundColor = 'rgba(0, 25, 25, 1)'}

    if(game.menu == 1){
            document.getElementById('menus2').style.display = 'none'
        }else if(game.menu == 2){
            document.getElementById('menus2').style.display = 'flex'
            document.getElementById('subMenu1').textContent = 'Normal'
            document.getElementById('subMenu2').textContent = 'Secret'
            document.getElementById('subMenu1.1').style.backgroundImage = 'url(images/normalAchsBg.png)'
            document.getElementById('subMenu2.1').style.backgroundImage = 'url(images/secretAchsBg.png)'
            document.getElementById('subMenu1.1').style.borderColor = 'rgb(188, 179, 0)'
            document.getElementById('subMenu2.1').style.borderColor = 'rgb(76, 0, 96)'
            document.getElementById('subMenu1.1').style.backgroundSize = 85+'%'
            document.getElementById('subMenu2.1').style.backgroundSize = 85+'%'
            document.getElementById('subMenu1.1').style.color = 'black'
            document.getElementById('subMenu2.1').style.color = 'black'
            document.getElementById('subMenu2.1').style.animation = 'none'
            document.getElementById('subMenu3').textContent = 'seeing this is a bug'
            document.getElementById('subMenu3.1').style.display = 'none'

            document.getElementById('subMenu1.1').style.display = 'inline-block'
            document.getElementById('subMenu2.1').style.display = 'inline-block'
            document.getElementById('subMenu3.1').style.display = 'none'
            }else if(game.menu == 3){
                    document.getElementById('menus2').style.display = 'flex'
                    document.getElementById('subMenu1').textContent = 'General'
                    document.getElementById('subMenu2').textContent = 'Past runs'
                    document.getElementById('subMenu3').textContent = 'Advanced info'
                    document.getElementById('subMenu1.1').style.backgroundImage = 'url(images/popupBg.png)'
                    document.getElementById('subMenu2.1').style.backgroundImage = 'url(images/popupBg.png)'
                    document.getElementById('subMenu3.1').style.backgroundImage = 'url(images/popupBg.png)'
                    document.getElementById('subMenu1.1').style.color = 'white'
                    document.getElementById('subMenu2.1').style.color = 'white'
                    document.getElementById('subMenu3.1').style.color = 'white'
                    document.getElementById('subMenu1.1').style.borderColor = 'rgb(0, 73, 73)'
                    document.getElementById('subMenu2.1').style.borderColor = 'rgb(0, 73, 73)'
                    document.getElementById('subMenu3.1').style.borderColor = 'rgb(0, 73, 73)'
                    document.getElementById('subMenu2.1').style.animation = 'none'
                    document.getElementById('subMenu1.1').style.backgroundSize = 20+'%'
                    document.getElementById('subMenu2.1').style.backgroundSize = 20+'%'
                    document.getElementById('subMenu3.1').style.backgroundSize = 20+'%'

                    document.getElementById('subMenu1.1').style.display = 'inline-block'
                    document.getElementById('subMenu2.1').style.display = 'inline-block'
                    document.getElementById('subMenu3.1').style.display = 'none'
                }else if(game.menu == 4){
                        document.getElementById('menus2').style.display = 'none'
                    }else if(game.menu == 5){
                            document.getElementById('menus2').style.display = 'flex'
                            document.getElementById('subMenu1').textContent = 'Upgrades'
                            document.getElementById('subMenu2').textContent = 'Quadrants'
                            document.getElementById('subMenu3').textContent = 'Spacetime'
                            document.getElementById('subMenu1.1').style.backgroundImage = 'url(images/supernovaUpgBg.png)'
                            document.getElementById('subMenu2.1').style.backgroundImage = 'url(images/quadrantsBg.png)'
                            document.getElementById('subMenu3.1').style.backgroundImage = 'url(images/quadrantsBg.png)'
                            document.getElementById('subMenu1.1').style.color = 'white'
                            document.getElementById('subMenu2.1').style.color = 'white'
                            document.getElementById('subMenu3.1').style.color = 'white'
                            document.getElementById('subMenu1.1').style.borderColor = 'rgb(120, 0, 150)'
                            document.getElementById('subMenu2.1').style.borderColor = 'rgb(120, 0, 150)'
                            document.getElementById('subMenu3.1').style.borderColor = 'rgb(120, 0, 150)'
                            document.getElementById('subMenu1.1').style.backgroundSize = 75+'%'
                            document.getElementById('subMenu2.1').style.backgroundSize = 50+'%'
                            document.getElementById('subMenu3.1').style.backgroundSize = 50+'%'
                            document.getElementById('subMenu2.1').style.animation = 'quadrantSubMenuAnim 10s infinite'
                            if(game.SupernovaUpg.includes('2U')){
                                document.getElementById('subMenu2.1').style.display = 'inline'
                            }else{
                                document.getElementById('subMenu2.1').style.display = 'none'
                            }
                            if(game.SupernovaUpg.includes('3U')){
                                document.getElementById('subMenu3.1').style.display = 'inline'
                            }else{
                                document.getElementById('subMenu3.1').style.display = 'none'
                            }
                        }else if(game.menu == 6){
                            document.getElementById('menus2').style.display = 'none'
                        }else if(game.menu == 7){
                            document.getElementById('menus2').style.display = 'none'
                        }else if(game.menu == 8){
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

function format(a, normal) {
    if (a === Infinity) return 'LOCKED';

    const n = game.settings.notation;
    if (n === 8) return '';

    const dp = game.settings.decimalPlaces;

    if (a < 3) {
        return Math.pow(10, a).toFixed(dp);
    }

    if (a < 36) {
        if (n === 1) {
            return Math.pow(10, a % 1).toFixed(dp) + 'e' + Math.floor(a);
        }
        if (n === 2) {
            return Math.pow(10, a % 3).toFixed(dp) + 'e' + Math.floor(a / 3) * 3;
        }
        if (n === 3) {
            return 'e' + a.toFixed(dp);
        }
        if (n === 4) {
            return Math.pow(10, a % 1).toFixed(dp)
                + notation2[Math.floor(( (a - 3) / 26) % 26)]
                + notation2[Math.floor( (a - 3) % 26)];
        }
        if (n === 5) {
            return '2^' + (a / Math.log10(2)).toFixed(dp);
        }
        if (n === 6) {
            return 'ee' + Math.log10(a).toFixed(dp);
        }
        if (n === 7) {
            return (a / 308.253).toFixed(dp) + ' inf';
        }
        return Math.pow(10, a % 3).toFixed(dp) + notation1[Math.floor(a / 3) - 1];
    }

    if(a < 63 && n == 0){
         return Math.pow(10, a % 3).toFixed(dp) + notation1[Math.floor(a / 3) - 1];
    }

    if (a < 10000) {
        if (n === 2) {
            return Math.pow(10, a % 3).toFixed(dp) + 'e' + Math.floor(a / 3) * 3;
        }
        if (n === 3) {
            return 'e' + a.toFixed(dp);
        }
        if (n === 4) {
            return Math.pow(10, a % 1).toFixed(dp)
                + notation2[Math.floor( (a - 3) / 26 / 26)]
                + notation2[Math.floor(( (a - 3) / 26) % 26)]
                + notation2[Math.floor( (a - 3) % 26)];
        }
        if (n === 5) {
            return '2^' + (a / Math.log10(2)).toFixed(dp);
        }
        if (n === 6) {
            return 'ee' + Math.log10(a).toFixed(dp);
        }
        if (n === 7) {
            return (a / 308.253).toFixed(dp) + ' inf';
        }
        return Math.pow(10, a % 1).toFixed(dp) + 'e' + Math.floor(a);
    }

    const mantissa = Math.pow(10, a % 1).toFixed(dp);
    const expMantissa = Math.pow(10, Math.log10(a) % 3).toFixed(dp);
    const expIndex = Math.floor(Math.log10(a) / 3) - 1;
    return mantissa + 'e' + expMantissa + notation1[expIndex];
}

function formatTime(a,yup){
    const p = Math.pow(10,game.settings.decimalPlaces)
    if(yup){
        if(a<60)
            {
                return Math.round(a*p)/p+'s'
            }
            else if(a<3600)
            {
                return Math.floor(a/60)+'m '+Math.round(a%60*p)/p+'s'
            }
            else if(a<3600*24)
            {
                return Math.floor(a/3600)+'h '+Math.floor(a%3600/60)+'m '+Math.round(a%60*p)/p+'s'
            }
            else
            {
                return Math.round(a/86400*p)/p+' days'
            }
    }else{
        if(a<Math.log10(60))
            {
                let sud = Math.pow(10,a)
                return sud.toFixed(game.settings.decimalPlaces)+'s'
            }
            else if(a<Math.log10(3600))
            {
                let sud = Math.pow(10,a)%60
                return Math.floor(Math.pow(10,a)/60)+'m '+sud.toFixed(game.settings.decimalPlaces)+'s'
            }
            else if(a<Math.log10(3600*24))
            {
                let sud = Math.pow(10,a)%60
                return Math.floor(Math.pow(10,a)/3600)+'h '+Math.floor(Math.pow(10,a)/60)%60+'m '+sud.toFixed(game.settings.decimalPlaces)+'s'
            }
            else
            {
                let sud = Math.pow(10,a)/3600/24
                return format(a-Math.log10(3600*24))+' days'
            }
    }
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
        return -1.0e100
    }
}

function change_notation(a) {
    game.settings.notation = a
}

function saveGame() {
    game.last_online = Date.now()
    localStorage.setItem('energyGameInfo',JSON.stringify(game))
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
    if(savedGame.test1 !== undefined){localStorage.clear(); window.location.reload(); return}

    for (let key in defaults) {
    if (typeof savedGame[key] !== 'object' || savedGame[key] === null) {
        savedGame[key] = {};
    }
    for (let item in defaults[key]) {
        if (!(item in savedGame[key])) {
          savedGame[key][item] = defaults[key][item];
        }
    }
    return savedGame;

}
}


function loadGame(a) {
        if(a !== null && a !== ""){
            game = JSON.parse(localStorage.getItem('energyGameInfo'))
            game = versionHandler(game)
            changeMenu(game.menu)
            let time_offline = Date.now()-game.last_online
            game.last_online = Date.now()
            if(time_offline>12500){
                start_offline_progress(time_offline/25)
            }
            else{setInterval(gameTick,25)}
            setTimeout(() => {
                localStorage.setItem('energyGameInfo',JSON.stringify(game))
            }, 50);
        }
        else{setInterval(gameTick,25)}
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
            if(imported == 'hard_reset'){alert('Are you serious right now?'); getAch(11,false)}else{console.log('Error while importing safefile:', e,' Let there be dragons!');}
        }
    }
}

function hardReset() {
    let answer = prompt("Are you sure? If yes, type in 'I am sure'")
    if(answer == 'I am sure'){
        localStorage.clear();
        window.location.reload()
    }
}

var offline_skipped = false
function start_offline_progress(a) {
    let ticks
    if(a<game.settings.offlineTicks){
        ticks = Math.floor(a)
        offline_speed = 0
    }
    else if(a>game.settings.offlineTicks-1)
    {
        ticks = game.settings.offlineTicks
        offline_speed = Math.log10(Math.floor(a)/game.settings.offlineTicks)
    }
    popup('Offline progress','Calculating... still calculating...','Time spent offline: idk','Skip')
    let sleptFor = ticks/40*Math.pow(10,offline_speed)
    if(sleptFor>28800 && !game.achievements.includes(15)){getAch(15,true)}

    setTimeout(() => {
        for(let iii=0;iii<ticks+1;iii++){
            document.getElementById('popupInfo').textContent = 'Calculating offline progress: '+iii+'/'+ticks+' ticks done.'
            document.getElementById('popupInfo2').textContent = 'Time spent offline: '+formatTime(sleptFor,true)
            gameTick()
        }

        offline_speed = 0
        document.getElementById('popupClose').textContent = 'Play'
        offline_skipped = true
        if(ticks>99999 &&! game.sAchievements.includes(3)){getAch(3,false)}
        setInterval(gameTick, 25);
    });
};

function changeSubMenu(a){
    game.subMenu = a
    if(game.menu == 3 && game.subMenu == 1)
        {
            document.getElementById('stats_menu1').style.display = 'inline-block'
            document.getElementById('stats_menu2').style.display = 'none'
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
            document.getElementById('stats_menu1').style.display = 'none'
        }
        else if(game.menu == 5 && game.subMenu == 1)
        {
            document.getElementById('supernovaStuff').style.display = 'flex'
            document.getElementById('supernovaStuff2').style.display = 'flex'
            document.getElementById('quadrantStuff').style.display = 'none'
            document.getElementById('spacetimeStuff').style.display = 'none'
        }
        else if(game.menu == 5 && game.subMenu == 2)
        {
            document.getElementById('supernovaStuff').style.display = 'none'
            document.getElementById('supernovaStuff2').style.display = 'none'
            document.getElementById('quadrantStuff').style.display = 'flex'
            document.getElementById('spacetimeStuff').style.display = 'none'
        }
        else if(game.menu == 5 && game.subMenu == 3)
        {
            document.getElementById('supernovaStuff').style.display = 'none'
            document.getElementById('supernovaStuff2').style.display = 'none'
            document.getElementById('quadrantStuff').style.display = 'none'
            document.getElementById('spacetimeStuff').style.display = 'block'
        }
        else if(game.menu == 6 && game.subMenu == 1)
        {
            document.getElementById('time_menu').style.display = 'block'
            document.getElementById('blackHoleStuff').style.display = 'none'
        }
        else if(game.menu == 6 && game.subMenu == 2)
        {
            document.getElementById('time_menu').style.display = 'none'
            document.getElementById('blackHoleStuff').style.display = 'block'
        }
        if(game.menu == 6 && game.subMenu == 2){document.body.style.backgroundColor = 'black'}else if(game.menu == 6){document.body.style.backgroundColor = 'rgb(3, 45, 0)'}
}

function sAch2Click(){
    game.stats.sAch2Clicks ++
    if(game.stats.sAch2Clicks>99 &&! game.sAchievements.includes(2)){
        getAch(2,false)
    }
}

function changeTimelineGen(a){
    if(game.Timelines['unlocked'+a]){
        if(game.Timelines.generatingType.includes(a)){
            game.Timelines.generatingType.pop()
        }else{
            game.Timelines.generatingType.pop()
            game.Timelines.generatingType.push(a)
        }
    }
}

function changeTimelineState(a){
    let amount = 0
    if(game.Timelines.unlocked1){amount ++}
    if(game.Timelines.unlocked2){amount ++}
    if(game.Timelines.unlocked3){amount ++}

    if(amount<2 && !game.Timelines['unlocked'+a]){
        game.Timelines['unlocked'+a] = true
    }else if(game.Timelines['unlocked'+a]){
        if(game.Timelines['lock'+a]){
            game.Timelines['lock'+a] = false
        }else{
            game.Timelines['lock'+a] = true
        }
    }
}

function buyTimelineUpg(a) {
    let cost = game.Timelines[`upg${a}Level`]*Math.log10(3)+Math.log10(5)
    if(game.Supernova.SupernovaPoints>cost-0.01){
        game.Supernova.SupernovaPoints = sub_logs(game.Supernova.SupernovaPoints,cost)
        game.Timelines[`upg${a}Level`] ++
    }
}

function openQuadrant(a){
    game.quadrants.quadrantSelected = a
    dom.quadrantTierName.textContent = quadrantTiernames[a-1]
    dom.quadrantName.textContent = quadrantNames[a-1]

    let comps = game.quadrants.completions[a-1]
    if(comps == 0){
        document.getElementById(`quadrant${a}`).style.borderColor = 'darkred'
    }else if(comps == 1){
        document.getElementById(`quadrant${a}`).style.borderColor = 'red'
    }else if(comps == 2){
        document.getElementById(`quadrant${a}`).style.borderColor = 'orange'
    }else if(comps == 3){
        document.getElementById(`quadrant${a}`).style.borderColor = 'yellow'
    }else if(comps == 4){
        document.getElementById(`quadrant${a}`).style.borderColor = 'green'
    }
    let textPart1 = ''
    if(game.quadrantIn == (a)){
        textPart1 = 'In quadrant ('+comps+'/4)'
        document.getElementById(`quadrant${a}`).style.borderColor = 'cyan'
    }else if(game.quadrants.completions[a-1]>0){
        textPart1 = comps+'/4 completions'
    }else{
        textPart1 = 'No completions :('
    }
    document.getElementById('quadrantState').textContent = textPart1
    let texts = []
    document.getElementById('quadrantBuffs').style.display = 'inline-block'
    document.getElementById('quadrantDebuffs').style.display = 'inline-block'
    document.getElementById('quadrantBuffsText').style.display = 'inline-block'
    document.getElementById('quadrantDebuffsText').style.display = 'inline-block'
    document.getElementById('quadrantRewardText').style.display = 'inline-block'
    document.getElementById('quadrantReward').style.display = 'inline-block'

    if(a == 1){
        if(comps == 0){
            texts = ['- No buffs :(','','',
                    '- Stars are 60% weaker','- Stars are a bit more expensive','']
        }else if(comps == 1){
            texts = ['- No buffs :(','','',
                    '- Stars are 80% weaker','- Stars are more expensive','"Photon" is uncollectable.']
        }else if(comps == 2){
            texts = ['- No buffs :(','','',
                    '- Stars are useless','- Expanses are 70% weaker.','"Photon" is uncollectable.']
        }else if(comps == 3){
            texts = ['- No buffs :(','','',
                    '- Stars & Expanses are useless','- Exploration is disabled.','- Decrease the energy exponent by 0.25.']
        }else if(comps == 4){
            texts = ['- Completed!','','',
                    '','','']
        }
    }else if(a == 2){
        if(comps == 0){
            texts = ['- No buffs :(','','',
                    '- Atoms are square rooted','','']
        }else if(comps == 1){
            texts = ['- No buffs :(','','',
                    '- Atoms & Energy are square rooted','','']
        }else if(comps == 2){
            texts = ['- No buffs :(','','',
                    '- Atoms, Energy & the energy exponent are square rooted','','']
        }else if(comps == 3){
            texts = ['- No buffs :(','','',
                    '-^0.5 atoms, energy, ED mults & energy exponent','','']
        }else if(comps == 4){
            texts = ['- Completed!','','',
                    '','','']
        }
    }else if(a == 3){
        if(comps == 0){
            texts = ['- ED mults cannot go below x0.1','- Legendary+ items still work','',
                    '- ED mults decay over time','- Exploration is disabled','- Timeline speed is powered by ^0.1']
        }else if(comps == 1){
            texts = ['- ED mults cannot go below x0.001','- Legendary+ items still work','',
                    '- ED mults decay over time faster','- Exploration is disabled','- Timeline speed is powered by ^0.1']
        }else if(comps == 2){
            texts = ['- ED mults cannot go below x1/100K','- Legendary+ items still work','',
                    '- ED mults decay over time very fast','- Exploration is disabled','- Timeline speed is powered by ^0.1']
        }else if(comps == 3){
            texts = ['- Legendary+ items still work','','',
                    '- ED mults decay, like, REALLY fast','- Exploration is disabled','- Timeline speed is powered by ^0.1']
        }else if(comps == 4){
            texts = ['- Completed!','','',
                    '','','']
        }
    }else if(a == 4){
        if(comps == 0){
            texts = ['- Stars and expanses are a bit cheaper','','',
                    '- The buy 10 multiplier is always x1','- Timelines are disabled','- Exploration speed is powered by ^0.2']
        }else if(comps == 1){
            texts = ['- No buffs :(','','',
                    '- The buy 10 multiplier is always x0.1','- Timelines are disabled','- Exploration speed is powered by ^0.2']
        }else if(comps == 2){
            texts = ['- No buffs :(','','',
                    '- The buy 10 multiplier is always x0.01','-- Timelines are disabled','- Exploration speed is powered by ^0.2']
        }else if(comps == 3){
            texts = ['- No buffs :(','','',
                    '- The buy 10 multiplier is always x0.0001','- Timelines are disabled','- Exploration speed is powered by ^0.2']
        }else if(comps == 4){
            texts = ['- Completed!','','',
                    '','','']
        }
    }else if(a == 5){
        if(comps == 0){
            texts = ['- Sacrifice is stronger','- Sacrifice is stronger based on time since last sacrifice','',
                    '- The energy exponent is ^0.5 and then /3','','']
        }else if(comps == 1){
            texts = ['- Sacrifice is stronger','- Sacrifice is stronger based on time since last sacrifice','',
                    '- The energy exponent is ^0.5 and then /3','- Energy gain is ^0.5','']
        }else if(comps == 2){
            texts = ['- Sacrifice is stronger based on time since last sacrifice','','',
                    '- The energy exponent is ^0.5 and then /3','- Energy gain is ^0.5','']
        }else if(comps == 3){
            texts = ['- Sacrifice is stronger based on time since last sacrifice','','',
                    '- The energy exponent is ^0.3 and then /5','- Energy gain is ^0.5','']
        }else if(comps == 4){
            texts = ['- Completed!','','',
                    '','','']
        }
    }else if(a == 7){
        if(difficulty == 1){
                    document.getElementById('quadrantBuff1').textContent = '- Timelines are 100% stronger'
                    document.getElementById('quadrantBuff2').textContent = '- Sacrifice increases the maximum timeline length'
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Total timeline length is capped"
                    document.getElementById('quadrantDebuff2').textContent = '- ED multipliers are ^0.65'
                    document.getElementById('quadrantDebuff3').textContent = ''
                }else if(difficulty == 2){
                    document.getElementById('quadrantBuff1').textContent = '- Timelines are 70% stronger'
                    document.getElementById('quadrantBuff2').textContent = '- Sacrifice increases the maximum timeline length'
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Total timeline length is capped"
                    document.getElementById('quadrantDebuff2').textContent = '- ED multipliers are ^0.6'
                    document.getElementById('quadrantDebuff3').textContent = ''
                }else if(difficulty == 3){
                    document.getElementById('quadrantBuff1').textContent = '- Sacrifice increases the maximum timeline length'
                    document.getElementById('quadrantBuff2').textContent = '- Timelines are 70% stronger'
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Total timeline length is capped"
                    document.getElementById('quadrantDebuff2').textContent = '- ED multipliers are ^0.45'
                    document.getElementById('quadrantDebuff3').textContent = ''
                }else if(difficulty == 4){
                    document.getElementById('quadrantBuff1').textContent = '- Sacrifice increases the maximum timeline length'
                    document.getElementById('quadrantBuff2').textContent = '- Timelines are 70% stronger'
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Total timeline length is capped"
                    document.getElementById('quadrantDebuff2').textContent = '- ED multipliers are ^0.3'
                    document.getElementById('quadrantDebuff3').textContent = ''
                }
    }else if(a == 8){
        if(difficulty == 1){
                    document.getElementById('quadrantBuff1').textContent = '- No pros :('
                    document.getElementById('quadrantBuff2').textContent = ''
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Buying anything will halt all production, coming back after 30s"
                    document.getElementById('quadrantDebuff2').textContent = '- You only have 15 minutes to beat this :)'
                    document.getElementById('quadrantDebuff3').textContent = '- Automation is disabled'
                }else if(difficulty == 2){
                    document.getElementById('quadrantBuff1').textContent = '- No pros :('
                    document.getElementById('quadrantBuff2').textContent = ''
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Buying anything will halt all production, coming back after 30s"
                    document.getElementById('quadrantDebuff2').textContent = '- You only have 12 minutes to beat this :D'
                    document.getElementById('quadrantDebuff3').textContent = '- Automation is disabled'
                }else if(difficulty == 3){
                    document.getElementById('quadrantBuff1').textContent = '- No pros :('
                    document.getElementById('quadrantBuff2').textContent = ''
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Buying anything will halt all production, coming back after 30s"
                    document.getElementById('quadrantDebuff2').textContent = '- You only have 9 minutes to beat this XD'
                    document.getElementById('quadrantDebuff3').textContent = '- Automation is disabled'
                }else if(difficulty == 4){
                    document.getElementById('quadrantBuff1').textContent = '- No pros :('
                    document.getElementById('quadrantBuff2').textContent = ''
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Buying anything will halt all production, coming back after 30s"
                    document.getElementById('quadrantDebuff2').textContent = '- You only have 6 minutes to beat this >XD'
                    document.getElementById('quadrantDebuff3').textContent = '- Automation is disabled'
                }
    }else if(a == 9){
        if(difficulty == 1){
                    document.getElementById('quadrantBuff1').textContent = '- You keep your energy on all resets'
                    document.getElementById('quadrantBuff2').textContent = '- Sacrifice is much stronger'
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Buying 7th EDs decreases the energy exponent"
                    document.getElementById('quadrantDebuff2').textContent = ''
                    document.getElementById('quadrantDebuff3').textContent = ''
                }else if(difficulty == 2){
                    document.getElementById('quadrantBuff1').textContent = '- You keep your energy on all resets'
                    document.getElementById('quadrantBuff2').textContent = '- Sacrifice is much stronger'
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Buying 7th EDs decreases the energy exponent"
                    document.getElementById('quadrantDebuff2').textContent = '- Stars are 50% weaker'
                    document.getElementById('quadrantDebuff3').textContent = ''
                }else if(difficulty == 3){
                    document.getElementById('quadrantBuff1').textContent = '- You keep your energy on all resets'
                    document.getElementById('quadrantBuff2').textContent = '- Sacrifice is much stronger'
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Buying 7th EDs decreases the energy exponent"
                    document.getElementById('quadrantDebuff2').textContent = '- Stars are 75% weaker'
                    document.getElementById('quadrantDebuff3').textContent = ''
                }else if(difficulty == 4){
                    document.getElementById('quadrantBuff1').textContent = '- You keep your energy on all resets'
                    document.getElementById('quadrantBuff2').textContent = '- Sacrifice is much stronger'
                    document.getElementById('quadrantBuff3').textContent = ''
                    document.getElementById('quadrantDebuff1').textContent = "- Buying 7th EDs decreases the energy exponent"
                    document.getElementById('quadrantDebuff2').textContent = '- Stars dont increase the energy exponent'
                    document.getElementById('quadrantDebuff3').textContent = ''
                }
    }
        document.getElementById('quadrantBuff1').textContent = texts[0]
        document.getElementById('quadrantBuff2').textContent = texts[1]
        document.getElementById('quadrantBuff3').textContent = texts[2]
        document.getElementById('quadrantDebuff1').textContent = texts[3]
        document.getElementById('quadrantDebuff2').textContent = texts[4]
        document.getElementById('quadrantDebuff3').textContent = texts[5]

    for(let i = 1;i<10;i++){
            try{
                if(game.quadrants.quadrantIn == i){
                    document.getElementById(`quadrant${i}`).style.borderColor = 'cyan'
                }else{
                    if(game.quadrants.completions[i-1] == 0){
                        document.getElementById(`quadrant${i}`).style.borderColor = 'darkred'
                    }else if(game.quadrants.completions[i-1] == 1){
                        document.getElementById(`quadrant${i}`).style.borderColor = 'red'
                    }else if(game.quadrants.completions[i-1] == 2){
                        document.getElementById(`quadrant${i}`).style.borderColor = 'orange'
                    }else if(game.quadrants.completions[i-1] == 3){
                        document.getElementById(`quadrant${i}`).style.borderColor = 'yellow'
                    }else if(game.quadrants.completions[i-1] == 4){
                        document.getElementById(`quadrant${i}`).style.borderColor = 'green'
                    }
                }
            }catch{}
        }
}

function buySpacetimeUpg(a){
    if(a==1){
        if(game.Supernova.SupernovaPoints>game.Spacetime.upg1Cost){
            game.Spacetime.upg1Level ++
            game.Supernova.SupernovaPoints = sub_logs(game.Supernova.SupernovaPoints,game.Spacetime.upg1Cost)
        }
    }else if(a==2){
        if(game.Spacetime.galaxies>game.Spacetime.upg2Cost){
            game.Spacetime.upg2Level ++
            game.Spacetime.galaxies = sub_logs(game.Spacetime.galaxies,game.Spacetime.upg2Cost)
        }
    }else if(a==3){
        if(game.Spacetime.universeSize>game.Spacetime.upg3Cost){
            game.Spacetime.upg3Level ++
            game.Spacetime.universeSize = 0
        }
    }else if(a==4){
        if(game.Spacetime.galaxies>game.Spacetime.upg4Cost){
            game.Spacetime.upg4Level ++
            game.Spacetime.galaxies = sub_logs(game.Spacetime.galaxies,game.Spacetime.upg4Cost)
        }
    }else if(a==5){
        if(game.Spacetime.galaxies>game.Spacetime.upg5Cost){
            game.Spacetime.upg5Level ++
            game.Spacetime.galaxies = sub_logs(game.Spacetime.galaxies,game.Spacetime.upg5Cost)
        }
    }else if(a==6){
        if(game.Spacetime.galaxies>game.Spacetime.upg6Cost && game.Spacetime.upg6Level<5){
            game.Spacetime.upg6Level ++
            game.Spacetime.galaxies = sub_logs(game.Spacetime.galaxies,game.Spacetime.upg6Cost)
        }
    }
}

function galaxyReset(){
    game.Spacetime.galaxies = add_logs(game.Spacetime.galaxies,game.Spacetime.galaxyGain)
    game.Spacetime.universeSize = 0
    game.Spacetime.timeSinceCondense = -99
    getAch(44,true)
}

function upgradeAutomation(a){
    if(game.Supernova.SupernovaPoints>(game.Automation['autoCost'+a]) && game.Automation['autoInterval'+a]>1/40){
        game.Supernova.SupernovaPoints = sub_logs(game.Supernova.SupernovaPoints,game.Automation['autoCost'+a])
        game.Automation['autoInterval'+a] *= 0.8
        game.Automation['autoCost'+a] += Math.log10(2)
    }
}

function changeAutoMode(a){
    game.Automation['autoMode'+a] += 1
    if(a == 8){
        if(!game.SupernovaUpg.includes('4Q')){if(game.Automation['autoMode'+a]>1){game.Automation['autoMode'+a] = 1}}
        if(game.Automation['autoMode'+a]>2){game.Automation['autoMode'+a] = 1}
    }else{
        if(!game.SupernovaUpg.includes('4Q')){if(game.Automation['autoMode'+a]>1){game.Automation['autoMode'+a] = 0}}
        if(game.Automation['autoMode'+a]>2){game.Automation['autoMode'+a] = 0}
    }
}

function autoChangeAll(a){
    if(game.SupernovaUpg.includes('4Q')){
        for(let i = 1; i<11; i++){
            document.getElementById('auto_thingCheck'+i).checked = a
        }
    }else{
        for(let i = 1; i<9; i++){
            document.getElementById('auto_thingCheck'+i).checked = a
        }
    }
}

function buyDensityDim(a){
    if(game.Supernova.SupernovaPoints>game.BlackHole['densityDim'+a+'Cost']){
        game.BlackHole['densityDim'+a+'Level'] ++
        game.Supernova.SupernovaPoints = sub_logs(game.Supernova.SupernovaPoints, game.BlackHole['densityDim'+a+'Cost'])
        game.BlackHole['densityDim'+a+'Amount'] = add_logs(game.BlackHole['densityDim'+a+'Amount'], 0)
    }
}

function atomMenu(a){
    if(a==1){
        document.getElementById('atomMenu1').style.display = 'inline-block'
        document.getElementById('atomMenu2').style.display = 'inline-block'
        document.getElementById('atomMenu3').style.display = 'none'
    }else{
        document.getElementById('atomMenu1').style.display = 'none'
        document.getElementById('atomMenu2').style.display = 'none'
        document.getElementById('atomMenu3').style.display = 'flex'
    }
}

function expUpgrade(a){
    if(a==1){
        if(game.atoms.amount > Math.pow(1.35,game.items.upg1Level)+game.items.upg1Level*11+12){
            game.atoms.amount = sub_logs(game.atoms.amount, Math.pow(1.35,game.items.upg1Level)+game.items.upg1Level*11+12)
            game.items.upg1Level ++
        }
    }else if(a==2){
        if(game.energy.amount > Math.pow(1.35,game.items.upg2Level)+game.items.upg2Level*7+9){
            game.energy.amount = sub_logs(game.energy.amount, Math.pow(1.35,game.items.upg2Level)+game.items.upg2Level*7+9)
            game.items.upg2Level ++
        }
    }else if(a==3){
        if(game.stars.amount > game.items.upg3Level*2+3-1){
            game.items.upg3Level ++
        }
    }else if(a==4){
        if(game.sacrifice.eff > Math.pow(1.2,game.items.upg4Level)+game.items.upg4Level*5.5+6){
            game.items.upg4Level ++
        }
    }else if(a==5){
        if(game.Supernova.SupernovaPoints > Math.pow(1.25,game.items.upg5Level)+game.items.upg5Level*0.8+2){
            game.Supernova.SupernovaPoints = sub_logs(game.Supernova.SupernovaPoints, Math.pow(1.25,game.items.upg5Level)+game.items.upg5Level*0.8+2)
            game.items.upg5Level ++
        }
    }
}

function changeArea(a){
    if(game.items.areaSelected == 0 && a == -1){return}
    if(game.items.areaSelected == 8 && a == 1){return}
    if(game.items.areaSelected<game.items.bestArea){
        if(game.items.areaSelected>3 && a == 1){
            if(game.SupernovaUpg.includes('3U')){
                game.items.areaSelected += a
            }
        }else{
            game.items.areaSelected += a
        }
    }else if(a == -1){
        game.items.areaSelected += a
    }
    game.items.nextItem = game.items.areaCollectionAmounts[game.items.areaSelected]
}

window.onload = function() {
    setTimeout(() => {
        startUIupdateRate()
        setInterval(createBgStar, 500);
        changeMenu(1)
        loadGame(localStorage.getItem('energyGameInfo'))
        openQuadrant(1,1)
        setInterval(saveGame,10000)
        setInterval(ach_tick,500)

        document.getElementById('UIrateSlider').value = game.settings.UIrate
        document.getElementById('bgEffCheckbox').checked = game.settings.bgEff
        document.getElementById('supernovaConfCheckbox').checked = game.settings.supernovaConf
        document.getElementById('newsSpeedSlider').value = game.settings.newsSpeed
        document.getElementById('precisionSlider').value = game.settings.decimalPlaces
        document.getElementById('offlineTicksSlider').value = game.settings.offlineTicks

        for(let i = 0;i<10;i++){
            if(game.records.Supernova[i]!==undefined){
                document.getElementById('record'+i).innerHTML = '#'+(i+1)+' | '+formatTime(game.records.Supernova[i],true)+' | +'+game.records.Supernova2[i]+' SD | '+game.records.Supernova3[i]+' SD/min'
            }else{
                document.getElementById('record'+i).innerHTML = '---'
            }
        }

        for(let i = 1;i<=10;i++){
            if(game.Automation['autoOn'+i]){document.getElementById('auto_thingCheck'+i).checked = true}
        }
    }, 500);

};


