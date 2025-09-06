function UItick() //good luck
{
    let thing = Math.pow(10,game.settings.decimalPlaces)

    let tickermsg = tickerMessagee
    if(dom.tickerMessage.textContent !== tickermsg){
        dom.tickerMessage.textContent = tickermsg
    }

    let tcrkX = tickerX+'%'
    if(dom.tickerMessage.style.left !== tcrkX){
        dom.tickerMessage.style.left = tcrkX
    }

    if(tickerX<(tickerMessagee == 'oops sorry wrong direction'?(100+tickerMessagee.length*1.3):(0-tickerMessagee.length*1.3)) && game.settings.topBar == 0){
        tickerMessagee = newsTickers[Math.floor(Math.random()*178)]
        if(game.Supernova.bestSupernovaPoints>-1){tickerMessagee = newsTickers[Math.floor(Math.random()*newsTickers.length)]}
        tickerX = tickerMessagee == 'oops sorry wrong direction'?-20:100
        game.stats.tickers_seen ++
        if(game.settings.newsSpeed == 0.5){game.stats.newstickersWith50Speed ++}
        if(game.stats.newstickersWith50Speed > 49){getAch(4,false)}
        if(tickerMessagee == 'You had that many atoms at the time of creating this newsticker ->'){
            tickerMessageee = 'You had that many atoms at the time of creating this newsticker -> '+format(game.atoms.amount,true)
        }
        if(tickerMessagee == 'x <- This you?'){
            tickerMessagee = Math.floor(Math.random()*254+1)+'.'+Math.floor(Math.random()*254+1)+'.'+Math.floor(Math.random()*254+1)+'.'+Math.floor(Math.random()*254+1)+' <- This you?'}
        if(tickerMessagee == 'You just rolled a [NOT GENERATED, CONSIDER YOURSELF VERY LUCKY]'){
            tickerMessagee = 'You just rolled a '+Math.floor(Math.random()*1000)+'. If that number is above 950, consider yourself lucky!'
        }
    }

    if(game.settings.topBar == 1){
        tickerMessagee = Math.floor(Math.max(game.atoms.amount,0)/6.165*100)/100+'% to Supernova'
        if(game.atoms.total>616){
            tickerMessagee = Math.floor(Math.pow(10,game.Supernova.totalSupernovaPoints)/4*10000)/100+'% to Timeline unlock'
        }
        if(game.Supernova.totalSupernovaPoints>Math.log10(3.5)){
            tickerMessagee = Math.floor(Math.pow(10,game.Supernova.totalSupernovaPoints)/30000*10000)/100+'% to Quadrants unlock'
        }
        if(game.Supernova.totalSupernovaPoints>Math.log10(30000)){
            tickerMessagee = Math.floor(game.Supernova.totalSupernovaPoints/19*10000)/100+'% to Spacetime unlock'
        }
        if(game.Supernova.totalSupernovaPoints>19){
            tickerMessagee = Math.floor(game.atoms.total/1.2e5*10000)/100+'% to game completion'
        }
        dom.tickerMessage.style.left = 0+'%'
    }else if(game.settings.topBar == 2){
        tickerMessagee = format(game.atoms.amount,true)+' atoms; '+format(game.energy.amount,true)+' energy'
        dom.tickerMessage.style.left = 0+'%'
    }else if(game.settings.topBar == 3){
        tickerMessagee = 'Energy dimensions: The Supernova Update'
        dom.tickerMessage.style.left = 0+'%'
    }else if(game.settings.topBar == 4){
        tickerMessagee = ''
        dom.tickerMessage.style.left = 0+'%'
    }

    if(game.settings.topBar == 5){
        dom.newsticker.style.display = 'none'
    }else{
        dom.newsticker.style.display = 'block'
    }

    let atoms2Text = format(game.atoms.amount, true)
    let atoms_s2Text = format(game.atoms.atoms_s, true)
    let energy2Text = format(game.energy.amount, true)
    let energy4Text = format(game.energy.energy_s, true)
    let energyExpRounded = game.energy.exp
    let energy_eff2Text = '^'+energyExpRounded.toFixed(game.settings.decimalPlaces)
    let energy_eff4Text = format(game.energy.eff, true)
    if(dom.atoms2.textContent !== atoms2Text){
        dom.atoms2.textContent = atoms2Text;
        dom.atoms2_1.textContent = atoms2Text;
        dom.atoms2_2.textContent = atoms2Text;
    }
    if(dom.atoms_s2.textContent !== atoms_s2Text){
        dom.atoms_s2.textContent = atoms_s2Text;
    }
    if(dom.energy2.textContent !== energy2Text){
        dom.energy2.textContent = energy2Text;
    }
    if(dom.energy4.textContent !== energy4Text){
        dom.energy4.textContent = energy4Text;
    }
    if(dom.energy_eff2.textContent !== energy_eff2Text){
        dom.energy_eff2.textContent = energy_eff2Text;
    }
    if(dom.energy_eff4.textContent !== energy_eff4Text){
        dom.energy_eff4.textContent = energy_eff4Text;
    }

    let eneSoftInfo1 = 'Above ^2, the energy exponent is decreased by '
    if(dom.energySoftcapInfo1.textContent !== eneSoftInfo1){
        dom.energySoftcapInfo1.textContent = eneSoftInfo1;
    }
    let energyExp = 1.4+((game.stars.amount+game.Timelines.timeline2Boost3)*game.stars.power)/10
    if(game.SupernovaUpg.includes('11')){
        energyExp += 0.01*game.items.inventory[16]*game.items.itemPowerRare
    }else{
        energyExp += 0.0015*game.items.inventory[16]*game.items.itemPowerRare
    }
    energyExp += game.Timelines.timeline3Boost2
    if(game.SupernovaUpg.includes('4')){
        energyExp += 0.1
    }
    if(game.quadrants.quadrantIn !== 0){
        energyExp -= 0.25
    }
    if(game.quadrants.quadrantIn == 1 && game.quadrants.completions[0]>2){
        energyExp -= 0.25
    }
    if(game.quadrants.completions[7]>0){
        energyExp += game.Supernova.timeInSupernova/15
    }
    if(game.quadrants.quadrantIn == 9){
        energyExp -= game.energy_dims.energy_dim7.level/1500
    }
    if(game.quadrants.quadrantIn == 2 && game.quadrants.completions[1]>1){
        energyExp = Math.sqrt(game.energy.exp)
    }
    if(game.quadrants.quadrantIn == 5 && game.quadrants.completions[4] < 3){
        energyExp = Math.sqrt(energyExp)
        energyExp /= 3
    }
    if(game.quadrants.quadrantIn == 5 && game.quadrants.completions[4] > 2){
        energyExp = Math.pow(energyExp,0.3)
        energyExp /= 5
    }

    let expDecrease = Math.floor((1-game.energy.exp/energyExp)*100*Math.pow(10,game.settings.decimalPlaces))/Math.pow(10,game.settings.decimalPlaces)

    let eneSoftInfo2 = '-'+(expDecrease)+'%'
    if(dom.energySoftcapInfo2.textContent !== eneSoftInfo2){
        dom.energySoftcapInfo2.textContent = eneSoftInfo2;
    }

    let eneSoftInfoVis = 'none'
    if(game.energy.exp>2){
        eneSoftInfoVis = 'inline-block'
    }
    if(dom.energySoftcapInfoDiv.style.display !== eneSoftInfoVis){
        dom.energySoftcapInfoDiv.style.display = eneSoftInfoVis;
    }

    let newText;
    if (game.energy_dims.energy_dim7.level < 10) {
        newText = `LOCKED (${game.energy_dims.energy_dim7.level}x | 10x 7th EDs)`;
    } else if (game.sacrifice.potential > Math.log10(1.5)) {
        newText = `Sacrifice EDs 1-6 to cheapen all by /`;
    } else {
        newText = `Cannot sacrifice right now!`;
    }

    if(dom.sacrifice1.textContent !== newText){
        dom.sacrifice1.textContent = newText;
    }

    if (game.energy_dims.energy_dim7.level < 10) {
        newText = ''
    } else if (game.sacrifice.potential > Math.log10(1.5)) {
        newText = format(game.sacrifice.potential, true)
    } else {
        newText = ' ('+format(game.sacrifice.potential, true)+' / 1.5)'
    }
    if(dom.sacrifice2.textContent !== newText){
        dom.sacrifice2.textContent = newText;
    }

    const ed = game.energy_dims;
    const settings = game.settings;

    const buy10MultRounded = ed.buy10mult.toFixed(settings.decimalPlaces);
    const sacrificeEffFormatted = format(game.sacrifice.eff, true);
    let buy10Text = `Buy 10 multiplier: x${buy10MultRounded}`;
    if(game.stars.best > 0){
        buy10Text = `Buy 10 multiplier: x${buy10MultRounded} | Sacrifice: /${sacrificeEffFormatted}`;
    }
    if(game.quadrantIn == 8){
        buy10Text = `Buy 10 multiplier: x${buy10MultRounded} | Sacrifice: /${sacrificeEffFormatted} | Exponent: ^${Math.floor(game.quadrant3_3Exp*1000)/1000}`;
    }
    if (dom.buy10Sacrifice.textContent !== buy10Text) dom.buy10Sacrifice.textContent = buy10Text;

    for (let i = 1; i <= 7; i++) {
        const dim = ed[`energy_dim${i}`];
        
        const label = `(${dim.level}) Energy dimension ${i}: x${format(dim.mult, true)}`;
        const amount = format(dim.amount, true);
        const cost = `${format(dim.cost, true)} atoms`;

        const labelEl = dom[`energy_dim${i}`];
        const amountEl = dom[`energy_dim${i}_1`];
        const costEl = dom[`buyDimCost${i}`];

        if (labelEl.textContent !== label) labelEl.textContent = label;
        if (amountEl.textContent !== amount) amountEl.textContent = amount;
        if (costEl.textContent !== cost) costEl.textContent = cost;
    }

    const tick = ed.tickspeed;
    const tickspeed1Text = `(${tick.amount}) Tickspeed: x${format(tick.base, true)}/level`;
    const tickspeed2Text = `${format(tick.eff, true)}/s`;
    const tickspeed3Text = `${format(tick.cost, true)} atoms`;

    if (dom.tickspeed1.textContent !== tickspeed1Text) dom.tickspeed1.textContent = tickspeed1Text;
    if (dom.tickspeed2.textContent !== tickspeed2Text) dom.tickspeed2.textContent = tickspeed2Text;
    if (dom.tickspeed3.textContent !== tickspeed3Text) dom.tickspeed3.textContent = tickspeed3Text;

    let dimExpanseText = `(${game.expanse.amount}) Dimensional expanse`;
    if(game.SupernovaUpg.includes('1U')){
        dimExpanseText = `(${game.expanse.amount} + ${game.Timelines.timeline1Boost3}) Dimensional expanse`;
    }
    if (dom.dimExpanse1.textContent !== dimExpanseText) dom.dimExpanse1.textContent = dimExpanseText;

        let dimExpTier = Math.min(game.expanse.amount + 3, 7);
        let dimExpcostText = `Cost: ${game.expanse.cost} ${dimExpTier}th EDs`;
        if(dimExpTier == 3){dimExpcostText = `Cost: ${game.expanse.cost} 3rd EDs`;}
        if(dom.dimExpanse3.textContent !== dimExpcostText){
            dom.dimExpanse3.textContent = dimExpcostText;
        }

    let dimExpInfo
    if(game.expanse.amount>3){
        dimExpInfo = 'Reset your progress to gain several benefits.'
    }else{
        dimExpInfo = 'Reset your progress to unlock a new dimension and gain several benefits.'
    }
    if (dom.dimExpanse2.textContent !== dimExpInfo) {
        dom.dimExpanse2.textContent = dimExpInfo;
    }

    dom.dimExpanse4.textContent = 'x'+format(game.expanse.eff1)+' atoms (Next at '+(game.expanse.amount+(2-(game.expanse.amount+1)%2))+' expanses)'
    dom.dimExpanse5.textContent = 'x'+format(game.expanse.eff2)+' all ED mults (Next at '+(game.expanse.amount+(2-game.expanse.amount%2))+' expanses)'
    if(game.Supernova.totalSupernovaPoints > -1){
        dom.dimExpanse6.textContent = 'x'+format(game.expanse.eff3)+' collection speed (Next at '+(game.expanse.amount+(4-game.expanse.amount%4))+' expanses)'
    }else{
        dom.dimExpanse6.textContent = '???'
    }
    if((game.expanse.amount+1)%4==0){
        dom.dimExpanse6.style.opacity = 1
    }else{
        dom.dimExpanse6.style.opacity = 0.6
    }
    if((game.expanse.amount+1)%2==1){
        dom.dimExpanse4.style.opacity = 1
    }else{
        dom.dimExpanse4.style.opacity = 0.6
    }
    if((game.expanse.amount+1)%2==0){
        dom.dimExpanse5.style.opacity = 1
    }else{
        dom.dimExpanse5.style.opacity = 0.6
    }

    let starsText1 = `(${game.stars.amount}) Energy star`;
    if(game.SupernovaUpg.includes('1U')){
        starsText1 = `(${game.stars.amount} + ${game.Timelines.timeline2Boost3}) Energy star`;
    }
    if (dom.stars1.textContent !== starsText1) dom.stars1.textContent = starsText1;

    const starsText3 = `Cost: ${game.stars.cost} 7th EDs`;
    if (dom.stars3.textContent !== starsText3) dom.stars3.textContent = starsText3;

    const stardustText = format(game.Supernova.SupernovaPoints,true)
    if (dom.stardust.textContent !== stardustText) {dom.stardust.textContent = stardustText; dom.stardust1_1.textContent = stardustText;}

    if(game.menu == 3){
        const totalAtoms = format(game.atoms.total, true);
        const bestAtoms = format(game.stats.bestPoints, true);
        const playtime = formatTime(Math.floor(game.stats.playtime*100)/100,true);
        const tickersSeen = game.stats.tickers_seen;
        const achCount = game.achievements.length;
        const secretAchCount = game.sAchievements.length;
        const sAch2Clicks = game.stats.sAch2Clicks;

        const statsUpdates = [
            { el: dom.stats1, text: `You have made a total of ${totalAtoms} atoms` },
            { el: dom.stats1_1, text: `The most amount of atoms you ever had was ${bestAtoms}` },
            { el: dom.stats2, text: `You have spent ${playtime} playing this game.` },
            { el: dom.stats3, text: `You have seen ${tickersSeen} news messages in total.` },
            { el: dom.stats4, text: `You have unlocked ${achCount} normal achievements...` },
            { el: dom.stats5, text: `...and ${secretAchCount} secret ones.` },
            { el: dom.stats5_5, text: `You clicked the 2nd secret achievement ${sAch2Clicks} times.` },
        ];

        for (const { el, text } of statsUpdates) {
            if (el.textContent !== text) el.textContent = text;
        }

        dom.stats5_5.style.display = sAch2Clicks > 99 ? 'block' : 'none';
    }

    let stats6TextContent
    if(game.atoms.amount<10){stats6TextContent = 'If your atoms were, well, atoms, you would have enough to build '+format(game.atoms.amount-Math.log10(24),true)+' glucose molecules.'}
    else if(game.atoms.amount<23){stats6TextContent = 'With your atoms you could build '+format(game.atoms.amount-Math.log10(6.0e9),true)+' human DNA molecules.'}
    else if(game.atoms.amount<28){stats6TextContent = 'With your atoms you could make '+format(game.atoms.amount-23,true)+' water droplets.'}
    else if(game.atoms.amount<50){stats6TextContent = 'With your atoms you could make '+format(game.atoms.amount-28.301,true)+' 2003 Nissan Muranos.'}
    else if(game.atoms.amount<1000){stats6TextContent = 'With your atoms you could cause about '+format(game.atoms.amount-50,true)+' supernovae. (probably)'}
    else if(game.atoms.amount<1.0e9){stats6TextContent = 'If writing out your atom amount at 3 digits/s was a job paying 8.50$ an hour, by the end you would earn '+Math.floor(game.atoms.amount/3/3600*8500)/1000+' dollary-doos.'}
    else if(game.atoms.amount<1.0e300){stats6TextContent = 'In the event that your atom amount starts squaring itself every second, you would have to wait '+Math.floor(Math.log10(game.atoms.amount)/Math.log10(2)*1000)/1000+' seconds to reach your atom amount.'}
    if(dom.stats6.textContent !== stats6TextContent){
        dom.stats6.textContent = stats6TextContent
    }
    
    if(game.Supernova.bestSupernovaPoints>-2){
        dom.stats7_0.textContent = 'SUPERNOVA'
        if(dom.stats7_0.textContent !== 'SUPERNOVA'){
            dom.stats7_0.textContent = 'SUPERNOVA'
        }

        const timeSupernovaSpent = 'You spent '+formatTime(game.Supernova.timeInSupernova,false)+' in this Supernova.'
        if(dom.stats7.textContent !== timeSupernovaSpent){
            dom.stats7.textContent = timeSupernovaSpent
        }
        const totalSupernovas = 'You did a total of '+game.Supernova.supernovas+' supernovas.'
        if(dom.stats7_5.textContent !== totalSupernovas){
            dom.stats7_5.textContent = totalSupernovas
        }

        const bestCPever = 'The best amount of stardust you ever had was '+format(game.Supernova.bestSupernovaPoints,true)+'.'
        if(dom.stats8.textContent !== bestCPever){
            dom.stats8.textContent = bestCPever
        }

        const totalCPever = 'You have earned a total of '+format(game.Supernova.totalSupernovaPoints,true)+' stardust.'
        if(dom.stats9.textContent !== totalCPever){
            dom.stats9.textContent = totalCPever
        }
        let bestUniSize = "At it's peak, the universe was "+format(game.Spacetime.bestSize,true)+' km^3 big.'
        if(!game.SupernovaUpg.includes('3U')){
            bestUniSize = ''
        }
        if(dom.stats10.textContent !== bestUniSize){
            dom.stats10.textContent = bestUniSize
        }
    }//MADE BY MAMKAGOD!
    else{
        dom.stats7_0.textContent = ''
        dom.stats7.textContent = ''
        dom.stats7_5.textContent = ''
        dom.stats8.textContent = ''
        dom.stats9.textContent = ''
        dom.stats10.textContent = ''
    }

    const achBoost = format(game.achievement_boost1, true);

    const statLines = [
    { el: dom.ach_boost, text: `Achievements boost EDs by x${achBoost}` },
    ];

    for (const { el, text } of statLines) {
    if (el.textContent !== text) el.textContent = text;
    }

    let SupernovaProgress = Math.floor((Math.max(game.atoms.amount,0) / 6.16) * 100) / 100;
    if(game.atoms.total>616){
        SupernovaProgress = Math.floor((Math.pow(10,game.Supernova.totalSupernovaPoints) / 4) * 100) / 1;
    }
    if(game.Supernova.totalSupernovaPoints>Math.log10(3.5)){
        SupernovaProgress = Math.floor((Math.pow(10,game.Supernova.totalSupernovaPoints) / 30000) * 10000) / 100;
    }
    if(game.Supernova.totalSupernovaPoints>Math.log10(30000)){
        SupernovaProgress = Math.floor((Math.pow(10,game.Supernova.totalSupernovaPoints) / 1.0e7) * 10000) / 100;
    }
    if(game.Supernova.totalSupernovaPoints>19){
        SupernovaProgress = Math.floor((game.atoms.total / 1.2e5) * 10000) / 100;
    }
    let progressText = `Get ${format(616)} atoms to unlock Supernova (${SupernovaProgress}%)`;
    if(game.atoms.total>616){
        progressText = `Get a total of 4 stardust to be able to unlock Timelines (${SupernovaProgress}%)`;
    }
    if(game.Supernova.totalSupernovaPoints>Math.log10(3.5)){
        progressText = `Get a total of ${format(Math.log10(30000))} stardust to be able to unlock Quadrants (${SupernovaProgress}%)`;
    }
    if(game.Supernova.totalSupernovaPoints>Math.log10(30000)){
        progressText = `Get a total of ${format(19)} stardust to be able to unlock Spacetime (${SupernovaProgress}%)`;
    }
    if(game.Supernova.totalSupernovaPoints>19){
        progressText = `Get 1.0e120K atoms to beat the game! (${SupernovaProgress}%)`;
    }
    const progressWidth = `${SupernovaProgress}%`;

    if (dom.progressBar.textContent !== progressText) dom.progressBar.textContent = progressText;
    if (dom.progressBar2.style.width !== progressWidth) dom.progressBar2.style.width = progressWidth;

    const UIrateText = `UI update rate: ${game.settings.UIrate}ms`;
    const newsSpeedText = `News speed: ${Math.floor(game.settings.newsSpeed * 100)}%`;
    const precisionText = `Precision: ${game.settings.decimalPlaces} digits`;
    const offlineTicksText = `Max offline ticks: ${game.settings.offlineTicks}`;
    let confirmationText = `Supernova confirmation?`;
    if(game.Supernova.totalSupernovaPoints<-1){confirmationText = '???'}
    const notationText = `Notation: ${game.settings.notationNames[game.settings.notation]}`;

    const optionLines = [
    { el: dom.UIoption1, text: UIrateText },
    { el: dom.UIoption2, text: newsSpeedText },
    { el: dom.UIoption3, text: precisionText },
    { el: dom.UIoption4, text: offlineTicksText },
    { el: dom.UIoption5, text: confirmationText },
    { el: dom.options_notation, text: notationText },
    ];

    for (const { el, text } of optionLines) {
    if (el.textContent !== text) el.textContent = text;
    }

    const buyModeText = game.energy_dims.buy_mode === 0 ? 'Buying max' : 'Buying 1';
    if (dom.ED_buy_mode.innerHTML !== buyModeText) {
        dom.ED_buy_mode.innerHTML = buyModeText;
    }

    let EDBuyMode2Vis = 'none'
    if(game.stars.best>0){
        EDBuyMode2Vis = 'inline-block'
    }
    if (dom.ED_buy_mode2.style.display !== EDBuyMode2Vis) {
        dom.ED_buy_mode2.style.display = EDBuyMode2Vis;
    }


    for (let i = 1; i <= 7; i++) {
        const cost = game.energy_dims[`energy_dim${i}`].cost;
        const el = dom[`buyDim${i}`];
        const color = game.atoms.amount > cost ? 'green' : 'red';

        if (el.style.borderColor !== color) {
            el.style.borderColor = color;
        }
    }

    let dim4StyleDisplay
    if(game.expanse.best>0){
        dim4StyleDisplay = 'flex'
    }else{
        dim4StyleDisplay = 'none'
    }
    if(dom.dim4.style.display !== dim4StyleDisplay){
        dom.dim4.style.display = dim4StyleDisplay
    }

    let dim5StyleDisplay
    if(game.expanse.best>1){
        dim5StyleDisplay = 'flex'
    }else{
        dim5StyleDisplay = 'none'
    }
    if(dom.dim5.style.display !== dim5StyleDisplay){
        dom.dim5.style.display = dim5StyleDisplay
    }

    let dim6StyleDisplay
    let buyStarStyleDisplay
    if(game.expanse.best>2){
        dim6StyleDisplay = 'flex'
    }else{
        dim6StyleDisplay = 'none'
    }
    if(game.expanse.best>1){
        buyStarStyleDisplay = 'block'
    }else{
        buyStarStyleDisplay = 'none'
    }
    if(dom.dim6.style.display !== dim6StyleDisplay){
        dom.dim6.style.display = dim6StyleDisplay
    }
    if(dom.buyStar.style.display !== buyStarStyleDisplay){
        dom.buyStar.style.display = buyStarStyleDisplay
    }
    if(dom.stars1.style.display !== buyStarStyleDisplay){
        dom.stars1.style.display = buyStarStyleDisplay
    }
    if(game.stars.best>0){
        buyStarStyleDisplay = 'block'
    }else{
        buyStarStyleDisplay = 'none'
    }
    if(dom.sacrificeStuff.style.display !== buyStarStyleDisplay){
        dom.sacrificeStuff.style.display = buyStarStyleDisplay
    }

    let dim7StyleDisplay
    if(game.expanse.best>3){
        dim7StyleDisplay = 'flex'
    }else{
        dim7StyleDisplay = 'none'
    }
    if(dom.dim7.style.display !== dim7StyleDisplay){
        dom.dim7.style.display = dim7StyleDisplay
    }

    if(game.atoms.total>2){
        dom.tickspeedStuff.style.display = 'flex'
    }else{
        dom.tickspeedStuff.style.display = 'none'
    }

    if(game.atoms.total>4){
        if(dom.buyExpanse.style.display !== 'inline-block'){
            dom.buyExpanse.style.display = 'inline-block'
        }
        if(dom.dimExpanse1.style.display !== 'inline'){
            dom.dimExpanse1.style.display = 'inline'
        }
        if(dom.dimExpanse3_5.style.display !== 'inline'){
            dom.dimExpanse3_5.style.display = 'inline'
        }
        if(dom.dimExpanse4.style.display !== 'inline'){
            dom.dimExpanse4.style.display = 'inline'
        }
        if(dom.dimExpanse5.style.display !== 'inline'){
            dom.dimExpanse5.style.display = 'inline'
        }
        if(dom.dimExpanse6.style.display!== 'inline'){
            dom.dimExpanse6.style.display = 'inline'
        }
    }else{
        if(dom.buyExpanse.style.display !== 'none'){
            dom.buyExpanse.style.display = 'none'
        }
        if(dom.dimExpanse1.style.display !== 'none'){
            dom.dimExpanse1.style.display = 'none'
        }
        if(dom.dimExpanse3_5.style.display !== 'none'){
            dom.dimExpanse3_5.style.display = 'none'
        }
        if(dom.dimExpanse4.style.display !== 'none'){
            dom.dimExpanse4.style.display = 'none'
        }
        if(dom.dimExpanse5.style.display !== 'none'){
            dom.dimExpanse5.style.display = 'none'
        }
        if(dom.dimExpanse6.style.display!== 'none'){
            dom.dimExpanse6.style.display = 'none'
        }
    }
    
    let enDim = game.energy_dims['energy_dim'+game.expanse.cost_type]
    if(enDim.level>game.expanse.cost-1){
        dom.buyExpanse.style.borderColor = 'green'
        if(dom.buyExpanse.style.borderColor !== 'green'){
            dom.buyExpanse.style.borderColor = 'green'
        }
    }else{
        dom.buyExpanse.style.borderColor = 'red'
        if(dom.buyExpanse.style.borderColor !== 'red'){
            dom.buyExpanse.style.borderColor = 'red'
        }
    }

    if(game.atoms.amount>game.energy_dims.tickspeed.cost){
            dom.buyTickspeed.style.borderColor = 'green'
            if(dom.buyTickspeed.style.borderColor !== 'green'){
                dom.buyTickspeed.style.borderColor = 'green'
            }
        }else{
            dom.buyTickspeed.style.borderColor = 'red'
            if(dom.buyTickspeed.style.borderColor !== 'red'){
                dom.buyTickspeed.style.borderColor = 'red'
            }
        }

        if(game.energy_dims.energy_dim7.level>game.stars.cost-1){
                dom.buyStar.style.borderColor = 'green'
                if(dom.buyStar.style.borderColor !== 'green'){
                    dom.buyStar.style.borderColor = 'green'
                }
            }else{
                dom.buyStar.style.borderColor = 'red'
                if(dom.buyStar.style.borderColor !== 'red'){
                    dom.buyStar.style.borderColor = 'red'
                }
            }

    if(game.Supernova.bestSupernovaPoints>-999){
        dom.menu5.style.display = 'inline-block'
        if(dom.menu5.style.display !== 'inline-block'){
            dom.menu5.style.display  = 'inline-block'
        }
    } else{
        dom.menu5.style.display = 'none'
        if(dom.menu5.style.display !== 'none'){
            dom.menu5.style.display  = 'none'
        }
    }

    if(game.SupernovaUpg.includes('1U')){
        dom.menu6.style.display = 'inline-block'
        if(dom.menu6.style.display !== 'inline-block'){
            dom.menu6.style.display  = 'inline-block'
        }
    } else{
        dom.menu6.style.display = 'none'
        if(dom.menu6.style.display !== 'none'){
            dom.menu6.style.display  = 'none'
        }
    }

    if(game.SupernovaUpg.includes('0U')){
        dom.menu7.style.display = 'inline-block'
        if(dom.menu7.style.display !== 'inline-block'){
            dom.menu7.style.display  = 'inline-block'
        }
    } else{
        dom.menu7.style.display = 'none'
        if(dom.menu7.style.display !== 'none'){
            dom.menu7.style.display  = 'none'
        }
    }

    let supernovaUpgEff1 = 'x'+format(Math.log10(2+game.Supernova.supernovas*1),true)
    if(dom.supernovaUpg1.textContent !== supernovaUpgEff1){
        dom.supernovaUpg1.textContent = supernovaUpgEff1
    }
    let supernovaUpgEff2 = 'x'+format(Math.log10(4+game.Supernova.supernovas*2),true)
    if(dom.supernovaUpg2.textContent !== supernovaUpgEff2){
        dom.supernovaUpg2.textContent = supernovaUpgEff2
    }
    let supernovaUpgEff3 = 'x'+format(Math.log10(8+Math.pow(game.Supernova.supernovas+1,4.5)),true)
    if(dom.supernovaUpg3.textContent !== supernovaUpgEff3){
        dom.supernovaUpg3.textContent = supernovaUpgEff3
    }
    let supernovaUpgEff8 = '+'+Math.floor((Math.sqrt(game.Supernova.timeInSupernova+1)-1)*55*thing)/thing+'% power'
    if(dom.supernovaUpg8.textContent !== supernovaUpgEff8){
        dom.supernovaUpg8.textContent = supernovaUpgEff8
    }
    let snUpg9Eff = Math.min(game.sacrifice.eff*0.02,Math.log10(30))+Math.max(0,game.sacrifice.eff*0.02-Math.log10(30))*0.4 
    if(snUpg9Eff>27){
        snUpg9Eff = 27+(snUpg9Eff-27)*0.1
    }
    let supernovaUpgEff9 = 'x'+format(snUpg9Eff)
    if(dom.supernovaUpg9.textContent !== supernovaUpgEff9){
        dom.supernovaUpg9.textContent = supernovaUpgEff9
    }
    let supernovaUpgEff10 = 'x'+format( Math.log10(1.25)*game.SupernovaUpg.length,true)
    if(dom.supernovaUpg10.textContent !== supernovaUpgEff10){
        dom.supernovaUpg10.textContent = supernovaUpgEff10
    }
    let supernovaUpgEff13 = 'x'+format(game.Timelines.timelineSynergy)
    if(dom.supernovaUpg13.textContent !== supernovaUpgEff13){
        dom.supernovaUpg13.textContent = supernovaUpgEff13
    }
    let supernovaUpgEff14 = '^'+Math.floor((1.2+Math.max(game.Spacetime.timeSinceCondense/4,0))*thing)/thing
    if(dom.supernovaUpg14.textContent !== supernovaUpgEff14){
        dom.supernovaUpg14.textContent = supernovaUpgEff14
    }

    let superUpgradeBlock1
    if(game.SupernovaUpg.includes('1U')){
        superUpgradeBlock1 = 'inline-block'
    }else{
        superUpgradeBlock1 = 'none'
    }
    if(dom.superUpgradeBlock1.style.display !== superUpgradeBlock1){
        dom.superUpgradeBlock1.style.display = superUpgradeBlock1
    }

    let superUpgradeBlock2
    if(game.SupernovaUpg.includes('2U')){
        superUpgradeBlock2 = 'inline-block'
    }else{
        superUpgradeBlock2 = 'none'
    }
    if(dom.superUpgradeBlock2.style.display !== superUpgradeBlock2){
        dom.superUpgradeBlock2.style.display = superUpgradeBlock2
    }

    let spacetimeSubTabDisplay
    if(game.SupernovaUpg.includes('3U')){
        spacetimeSubTabDisplay = 'inline-block'
    }else{
        spacetimeSubTabDisplay = 'none'
    }
    if(dom.subMenu3.style.display !== spacetimeSubTabDisplay && game.menu == 5){
        dom.subMenu3.style.display = spacetimeSubTabDisplay
    }

    let potentialSDgain = '+'+format(game.Supernova.potentialSD,true)+' stardust'
    if(game.Supernova.potentialSD>18){
        potentialSDgain += ' [SOFTCAPPED]'
    }
    if(dom.stardustGain1.textContent !== potentialSDgain){
        dom.stardustGain1.textContent = potentialSDgain
    }
    let nextSDAt
    let supernovaAvail
    if(game.quadrants.quadrantIn !== 0){
        if(game.quadrants.quadrantIn == 1){
            if(game.quadrants.completions[0]==0){
                nextSDAt = `${format(1620)} atoms required.`
                if(game.atoms.amount > 1620){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[0]==1){
                nextSDAt = `${format(2050)} atoms required.`
                if(game.atoms.amount > 2050){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[0]==2){
                nextSDAt = `${format(5000)} atoms required.`
                if(game.atoms.amount > 5000){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[0]==3){
                nextSDAt = `${format(20000)} atoms required.`
                if(game.atoms.amount > 20000){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[0]==4){
                nextSDAt = 'Infinity atoms required.'
                if(game.atoms.amount > Infinity){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }
        }else if(game.quadrants.quadrantIn == 2){
            if(game.quadrants.completions[1]==0){
                nextSDAt = `${format(2025)} atoms required.`
                if(game.atoms.amount > 2025){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[1]==1){
                nextSDAt = `${format(5100)} atoms required.`
                if(game.atoms.amount > 5100){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[1]==2){
                nextSDAt = 'Infinity atoms required.'
                if(game.atoms.amount > Infinity){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }
        }else if(game.quadrants.quadrantIn == 3){
            if(game.quadrants.completions[2]==0){
                nextSDAt = `${format(2500)} atoms required.`
                if(game.atoms.amount > 2500){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[2]==1){
                nextSDAt = `${format(100000)} atoms required.`
                if(game.atoms.amount > 100000){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[2]==2){
                nextSDAt = 'Infinity atoms required.'
                if(game.atoms.amount > 10000000){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }
        }else if(game.quadrants.quadrantIn == 4){
            if(game.quadrants.completions[3]==0){
                nextSDAt = `${format(1750)} atoms required.`
                if(game.atoms.amount > 1750){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[3]==1){
                nextSDAt = `${format(14000)} atoms required.`
                if(game.atoms.amount > 14000){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[3]==2){
                nextSDAt = 'Infinity atoms required.'
                if(game.atoms.amount > Infinity){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }
        }else if(game.quadrants.quadrantIn == 5){
            if(game.quadrants.completions[4]==0){
                nextSDAt = `${format(25000)} atoms required.`
                if(game.atoms.amount > 25000){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[4]==1){
                nextSDAt = `${format(78000)} atoms required.`
                if(game.atoms.amount > 78000){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }else if(game.quadrants.completions[4]==2){
                nextSDAt = 'Infinity atoms required.'
                if(game.atoms.amount > Infinity){
                    nextSDAt = 'Go supernova to beat this quadrant!'
                    supernovaAvail = 'block'
                }
            }
        }
        supernovaAvail = 'none'
    }else if(game.Supernova.potentialSD>1){
        nextSDAt = ''
        supernovaAvail = 'block'
    }else if(game.Supernova.potentialSD<0){
        nextSDAt = `Next at ${format(616)} atoms.`
        supernovaAvail = 'none'
    }else{
        if(game.quadrants.quadrantIn !== 0){
            nextSDAt = 'Go supernova to beat this quadrant!'
        }else{
            nextSDAt = 'Next at '+format(Math.log10(Math.pow(10,Math.max(game.Supernova.potentialSD,0))+1)*616+616,true)+' atoms.'
        }
        supernovaAvail = 'block'
    }
    if(dom.stardustGain2.textContent !== nextSDAt){
        dom.stardustGain2.textContent = nextSDAt
    }
    if(dom.stardustGain0_1.style.display !== supernovaAvail){
        dom.stardustGain0_1.style.display = supernovaAvail
    }
    if(dom.stardustGain0_2.style.display !== supernovaAvail){
        dom.stardustGain0_2.style.display = supernovaAvail
    }
    if(dom.stardustGain1.style.display !== supernovaAvail){
        dom.stardustGain1.style.display = supernovaAvail
    }

    let timeline1Text = formatTime(game.Timelines.timeline1Amount,false)
    if(dom.timeline1.textContent !== timeline1Text){
        dom.timeline1.textContent = timeline1Text
    }
    let timeline1_1Text = 'x'+format(game.Timelines.timeline1Boost1,false)+' atoms'
    if(dom.timeline1_1.textContent !== timeline1_1Text){
        dom.timeline1_1.textContent = timeline1_1Text
    }
    let timeline1_2Text = '+'+Math.floor(game.Timelines.timeline1Boost2*1000)/1000+'% expanse efficiency'
    if(dom.timeline1_2.textContent !== timeline1_2Text){
        dom.timeline1_2.textContent = timeline1_2Text
    }
    let timeline1_3Text = '+'+game.Timelines.timeline1Boost3+' free expanses'
    if(dom.timeline1_3.textContent !== timeline1_3Text){
        dom.timeline1_3.textContent = timeline1_3Text
    }
    let timelineBoost3Amount = game.Timelines.timeline1Boost3+1
    let timeline1_4Text = 'Next at '+formatTime(2+timelineBoost3Amount*Math.log10(7),false)
    if(dom.timeline1_4.textContent !== timeline1_4Text){
        dom.timeline1_4.textContent = timeline1_4Text
    }

    let timelineInfo = 'x'+format(game.Timelines.timelineSpeed,false)

    let timelineSum = add_logs(game.Timelines.timeline1Amount,game.Timelines.timeline2Amount)
    timelineSum = add_logs(timelineSum,game.Timelines.timeline3Amount)
    let leftToDistr = sub_logs(Math.log(game.sacrifice.eff+1)*0.3+4,timelineSum)
    if(game.quadrantIn == 7){
        timelineInfo += ' | '+formatTime(leftToDistr,false)+' left to distribute'
    }
    if(dom.timelineInfo.textContent !== timelineInfo){
        dom.timelineInfo.textContent = timelineInfo
    }

    let timelineInfo2 = ' faster than real time.'
    if(game.SupernovaUpg.includes('12')){
        timelineInfo2 = ' faster than real time. Synergy: x'+format(game.Timelines.timelineSynergy,false)
    }
    if(dom.timelineInfo2.textContent !== timelineInfo2){
        dom.timelineInfo2.textContent = timelineInfo2
    }

    let supernovaResetUnlocked
    let supernovaResetCan
    if((game.Supernova.totalSupernovaPoints>-1 || game.atoms.amount>616) && (game.menu == 1 || game.menu == 5)){
        supernovaResetUnlocked = 'inline-block'
        if(game.quadrants.quadrantIn == 1){
            if(game.quadrants.completions[0]==0){
                if(game.atoms.amount>1620){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[0]==1){
                if(game.atoms.amount>2050){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[0]==2){
                if(game.atoms.amount>5000){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[0]==3){
                if(game.atoms.amount>20000){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[0]==4){
                if(game.atoms.amount>Infinity){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }
        }else if(game.quadrants.quadrantIn == 2){
            if(game.quadrants.completions[1]==0){
                if(game.atoms.amount>2025){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[1]==1){
                if(game.atoms.amount>5100){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[1]==2){
                if(game.atoms.amount>Infinity){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }
        }else if(game.quadrants.quadrantIn == 3){
            if(game.quadrants.completions[2]==0){
                if(game.atoms.amount>2500){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[2]==1){
                if(game.atoms.amount>100000){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[2]==2){
                if(game.atoms.amount>Infinity){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }
        }else if(game.quadrants.quadrantIn == 4){
            if(game.quadrants.completions[3]==0){
                if(game.atoms.amount>1750){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[3]==1){
                if(game.atoms.amount>14000){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[3]==1){
                if(game.atoms.amount>Infinity){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }
        }else if(game.quadrants.quadrantIn == 5){
            if(game.quadrants.completions[4]==0){
                if(game.atoms.amount>25000){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[4]==1){
                if(game.atoms.amount>78000){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }else if(game.quadrants.completions[4]==1){
                if(game.atoms.amount>Infinity){
                    supernovaResetCan = 1
                }else{
                    supernovaResetCan = 0.65
                }
            }
        }else{
            supernovaResetCan = 1
        }
    }else{
        supernovaResetUnlocked = 'none'
        supernovaResetCan = 0.65
    }
    if(dom.goSupernovaButton.style.display !== supernovaResetUnlocked){
        dom.goSupernovaButton.style.display = supernovaResetUnlocked
    }
    dom.goSupernovaButton.style.filter = `brightness(${supernovaResetCan})`

    let timeline2Text = formatTime(game.Timelines.timeline2Amount)
    if(dom.timeline2.textContent !== timeline2Text){
        dom.timeline2.textContent = timeline2Text
    }
    let timeline2_1Text = 'x'+format(game.Timelines.timeline2Boost1)+' energy'
    if(dom.timeline2_1.textContent !== timeline2_1Text){
        dom.timeline2_1.textContent = timeline2_1Text
    }
    let timeline2_2Text = 'x'+format(game.Timelines.timeline2Boost2)+' all ED mults'
    if(dom.timeline2_2.textContent !== timeline2_2Text){
        dom.timeline2_2.textContent = timeline2_2Text
    }
    let timeline2_3Text = '+'+game.Timelines.timeline2Boost3+' free stars'
    if(dom.timeline2_3.textContent !== timeline2_3Text){
        dom.timeline2_3.textContent = timeline2_3Text
    }
    let timeline2Boost3Amount = game.Timelines.timeline2Boost3+1
    let timeline2_4Text = 'Next at '+formatTime(2.5+timeline2Boost3Amount*Math.log10(7))
    if(dom.timeline2_4.textContent !== timeline2_4Text){
        dom.timeline2_4.textContent = timeline2_4Text
    }

    let timeline3Text = formatTime(game.Timelines.timeline3Amount)
    if(dom.timeline3.textContent !== timeline3Text){
        dom.timeline3.textContent = timeline3Text
    }
    let timeline3_1Text = '+'+Math.floor(game.Timelines.timeline3Boost1*thing)/thing+'% star efficiency'
    if(dom.timeline3_1.textContent !== timeline3_1Text){
        dom.timeline3_1.textContent = timeline3_1Text
    }
    let timeline3_2Text = '+'+Math.floor(game.Timelines.timeline3Boost2*thing)/thing+' energy exponent'
    if(dom.timeline3_2.textContent !== timeline3_2Text){
        dom.timeline3_2.textContent = timeline3_2Text
    }
    let timeline3Boost2Amount = Math.max(Math.floor(Math.max(game.Timelines.timeline3Amount-5,0)/Math.log10(30)),0)+1
    let timeline3_4Text = 'x'+format(game.Timelines.timeline3Boost3)+' collecting speed'
    if(dom.timeline3_4.textContent !== timeline3_4Text){
        dom.timeline3_4.textContent = timeline3_4Text
    }

    if(game.Timelines.generatingType.includes(1)){
        dom.timelineGenerateBtn1.style.backgroundColor = 'rgb(0, 80, 0)'
        dom.timelineGenerateBtn1.style.borderColor = 'cyan'
        dom.timelineGenerateBtn1.innerHTML = 'GENERATING'
        dom.timelineGenerateBtn1.style.color = 'lime'
    }else if(game.Timelines.generatingType.length>0){
        dom.timelineGenerateBtn1.style.backgroundColor = 'rgb(77, 0, 0)'
        dom.timelineGenerateBtn1.style.borderColor = 'red'
        dom.timelineGenerateBtn1.innerHTML = 'UNAVAILABLE'
        dom.timelineGenerateBtn1.style.color = 'red'
    }else{
        dom.timelineGenerateBtn1.style.backgroundColor = 'rgba(43, 43, 43)'
        dom.timelineGenerateBtn1.style.borderColor = 'gray'
        dom.timelineGenerateBtn1.innerHTML = 'IDLE'
        dom.timelineGenerateBtn1.style.color = 'white'
    }

    if(game.Timelines.generatingType.includes(2)){
        dom.timelineGenerateBtn2.style.backgroundColor = 'rgb(0, 80, 0)'
        dom.timelineGenerateBtn2.style.borderColor = 'cyan'
        dom.timelineGenerateBtn2.innerHTML = 'GENERATING'
        dom.timelineGenerateBtn2.style.color = 'lime'
    }else if(game.Timelines.generatingType.length>0){
        dom.timelineGenerateBtn2.style.backgroundColor = 'rgb(77, 0, 0)'
        dom.timelineGenerateBtn2.style.borderColor = 'red'
        dom.timelineGenerateBtn2.innerHTML = 'UNAVAILABLE'
        dom.timelineGenerateBtn2.style.color = 'red'
    }else{
        dom.timelineGenerateBtn2.style.backgroundColor = 'rgba(43, 43, 43)'
        dom.timelineGenerateBtn2.style.borderColor = 'gray'
        dom.timelineGenerateBtn2.innerHTML = 'IDLE'
        dom.timelineGenerateBtn2.style.color = 'white'
    }

    if(game.Timelines.generatingType.includes(3)){
        dom.timelineGenerateBtn3.style.backgroundColor = 'rgb(0, 80, 0)'
        dom.timelineGenerateBtn3.style.borderColor = 'cyan'
        dom.timelineGenerateBtn3.innerHTML = 'GENERATING'
        dom.timelineGenerateBtn3.style.color = 'lime'
    }else if(game.Timelines.generatingType.length>0){
        dom.timelineGenerateBtn3.style.backgroundColor = 'rgb(77, 0, 0)'
        dom.timelineGenerateBtn3.style.borderColor = 'red'
        dom.timelineGenerateBtn3.innerHTML = 'UNAVAILABLE'
        dom.timelineGenerateBtn3.style.color = 'red'
    }else{
        dom.timelineGenerateBtn3.style.backgroundColor = 'rgba(43, 43, 43)'
        dom.timelineGenerateBtn3.style.borderColor = 'gray'
        dom.timelineGenerateBtn3.innerHTML = 'IDLE'
        dom.timelineGenerateBtn3.style.color = 'white'
    }

    let timelineLock1Style1
    let timelineLock1Style2
    let timelineLock1Text
    if(!game.Timelines['unlocked1']){
        timelineLock1Style1 = 'rgb(39, 0, 0)'
        timelineLock1Style2 = 'red'
        timelineLock1Text = 'Disabled'
    }else{
        timelineLock1Style1 = 'rgba(8, 39, 0, 1)'
        timelineLock1Style2 = 'lime'
        if(game.Timelines.lock1){timelineLock1Text = 'Active & Locked'}else{timelineLock1Text = 'Active'}
    }
    dom.timelineLock1.style.backgroundColor = timelineLock1Style1
    dom.timelineLock1.style.borderColor = timelineLock1Style2
    dom.timelineLock1.textContent = timelineLock1Text
    
    let timelineLock2Style1
    let timelineLock2Style2
    let timelineLock2Text
    if(!game.Timelines['unlocked2']){
        timelineLock2Style1 = 'rgb(39, 0, 0)'
        timelineLock2Style2 = 'red'
        timelineLock2Text = 'Disabled'
    }else{
        timelineLock2Style1 = 'rgba(8, 39, 0, 1)'
        timelineLock2Style2 = 'lime'
        if(game.Timelines.lock2){timelineLock2Text = 'Active & Locked'}else{timelineLock2Text = 'Active'}
    }
    dom.timelineLock2.style.backgroundColor = timelineLock2Style1
    dom.timelineLock2.style.borderColor = timelineLock2Style2
    dom.timelineLock2.textContent = timelineLock2Text

    let timelineLock3Style1
    let timelineLock3Style2
    let timelineLock3Text
    if(!game.Timelines['unlocked3']){
        timelineLock3Style1 = 'rgb(39, 0, 0)'
        timelineLock3Style2 = 'red'
        timelineLock3Text = 'Disabled'
    }else{
        timelineLock3Style1 = 'rgba(8, 39, 0, 1)'
        timelineLock3Style2 = 'lime'
        if(game.Timelines.lock3){timelineLock3Text = 'Active & Locked'}else{timelineLock3Text = 'Active'}
    }
    dom.timelineLock3.style.backgroundColor = timelineLock3Style1
    dom.timelineLock3.style.borderColor = timelineLock3Style2
    dom.timelineLock3.textContent = timelineLock3Text

    let timeUpg1Eff = Math.pow(Math.max(game.Timelines.timeline1Amount,0)*17,0.7)
    let timelineUpgText1_1 = 'Boost PRIMARY timeline eff. by +'+Math.floor(timeUpg1Eff*thing)/thing+'% (based on timeline length)'
    if(dom.timelineUpgText1_1.textContent !== timelineUpgText1_1){
        dom.timelineUpgText1_1.textContent = timelineUpgText1_1
    }
    let timelineUpgText1_2 = '+'+Math.floor(timeUpg1Eff*game.Timelines.upg1Level*thing)/thing+'% -> +'+Math.floor((game.Timelines.upg1Level+1)*timeUpg1Eff*thing)/thing+'%'
    if(dom.timelineUpgText1_2.textContent !== timelineUpgText1_2){
        dom.timelineUpgText1_2.textContent = timelineUpgText1_2
    }
    let timelineUpgText1_3 = format(game.Timelines.upg1Level*Math.log10(3)+Math.log10(5))+' SD'
    if(dom.timelineUpgText1_3.textContent !== timelineUpgText1_3){
        dom.timelineUpgText1_3.textContent = timelineUpgText1_3
    }

    let timeUpg2Eff = (game.energy_dims.energy_dim1.level+game.energy_dims.energy_dim2.level+game.energy_dims.energy_dim3.level+game.energy_dims.energy_dim4.level+game.energy_dims.energy_dim5.level+game.energy_dims.energy_dim6.level+game.energy_dims.energy_dim7.level)/550
    let timelineUpgText2_1 = 'Boost ENERGETIC timeline eff. by +'+Math.floor(timeUpg2Eff*thing)/thing+'% (based on total ED levels)'
    if(dom.timelineUpgText2_1.textContent !== timelineUpgText2_1){
        dom.timelineUpgText2_1.textContent = timelineUpgText2_1
    }
    let timelineUpgText2_2 = '+'+Math.floor(game.Timelines.upg2Level*timeUpg2Eff*thing)/thing+'% -> +'+Math.floor((game.Timelines.upg2Level+1)*timeUpg2Eff*thing)/thing+'%'
    if(dom.timelineUpgText2_2.textContent !== timelineUpgText2_2){
        dom.timelineUpgText2_2.textContent = timelineUpgText2_2
    }
    let timelineUpgText2_3 = format(game.Timelines.upg2Level*Math.log10(3)+Math.log10(5))+' SD'
    if(dom.timelineUpgText2_3.textContent !== timelineUpgText2_3){
        dom.timelineUpgText2_3.textContent = timelineUpgText2_3
    }

    let timeUpg3Eff = Math.pow(Math.max(game.Supernova.SupernovaPoints*3,0)*40,0.45)
    let timelineUpg3Eff = game.Timelines.upg3Level*timeUpg3Eff
    let timelineUpg3Eff2 = (game.Timelines.upg3Level+1)*timeUpg3Eff
    let timelineUpgText3_1 = 'Boost SUPERNOVAE timeline eff. by +'+Math.floor(timeUpg3Eff*thing)/thing+'% (based on current stardust)'
    if(timelineUpg3Eff2>400){
        timelineUpgText3_1 += ' [SOFTCAPPED]'
    }
    if(dom.timelineUpgText3_1.textContent !== timelineUpgText3_1){
        dom.timelineUpgText3_1.textContent = timelineUpgText3_1
    }

    timelineUpg3Eff = game.Timelines.upg3Level*timeUpg3Eff
    if(timelineUpg3Eff > 400){
        timelineUpg3Eff = 400+(timelineUpg3Eff-400)*0.3
    }
    timelineUpg3Eff2 = (game.Timelines.upg3Level+1)*timeUpg3Eff
    if(timelineUpg3Eff2 > 400){
        timelineUpg3Eff2 = 400+(timelineUpg3Eff2-400)*0.3
    }

    let timelineUpgText3_2 = '+'+Math.floor(timelineUpg3Eff*thing)/thing+'% -> +'+Math.floor(timelineUpg3Eff2*thing)/thing+'%'
    if(dom.timelineUpgText3_2.textContent !== timelineUpgText3_2){
        dom.timelineUpgText3_2.textContent = timelineUpgText3_2
    }
    let timelineUpgText3_3 = format(game.Timelines.upg3Level*Math.log10(3)+Math.log10(5))+' SD'
    if(dom.timelineUpgText3_3.textContent !== timelineUpgText3_3){
        dom.timelineUpgText3_3.textContent = timelineUpgText3_3
    }


    let secondTierAutomationVis = 'none'
    if(game.SupernovaUpg.includes('4Q')){
        secondTierAutomationVis = 'inline-block'
    }
    if(dom.automationTier2.style.display !== secondTierAutomationVis){
        dom.automationTier2.style.display = secondTierAutomationVis
    }

    let QoLBlock1Vis = 'none'
    if(game.SupernovaUpg.includes('2U')){
        QoLBlock1Vis = 'inline-block'
    }
    if(dom.QoLBlock1.style.display !== QoLBlock1Vis){
        dom.QoLBlock1.style.display = QoLBlock1Vis
    }

    let expMenuVis = 'none'
    if(game.Supernova.totalSupernovaPoints>-1){
        expMenuVis = 'inline-block'
    }
    if(dom.atomSubmenu2.style.display !== expMenuVis){
        dom.atomSubmenu2.style.display = expMenuVis
        dom.atomSubmenu1.style.display = expMenuVis
    }

    let enterQuadrantButtonBgColor
    let enterQuadrantButtonBorderColor
    let enterQuadrantButtonHTML
    if(game.quadrants.quadrantIn == game.quadrants.quadrantSelected){
        enterQuadrantButtonBgColor = 'rgb(68, 68, 0)'
        enterQuadrantButtonBorderColor = 'yellow'
        enterQuadrantButtonHTML = 'Exit'
    }else if(game.quadrants.completions[game.quadrants.quadrantSelected-1]>3){
        enterQuadrantButtonBgColor = 'rgb(0, 52, 0)'
        enterQuadrantButtonBorderColor = 'lime'
        enterQuadrantButtonHTML = 'Completed'
    }else{
        enterQuadrantButtonBgColor = 'rgb(60, 0, 0)'
        enterQuadrantButtonBorderColor = 'red'
        enterQuadrantButtonHTML = 'Enter'
    }

    if(dom.enterQuadrant.style.backgroundColor !== enterQuadrantButtonBgColor){
        dom.enterQuadrant.style.backgroundColor = enterQuadrantButtonBgColor
    }
    if(dom.enterQuadrant.style.borderColor !== enterQuadrantButtonBorderColor){
        dom.enterQuadrant.style.borderColor = enterQuadrantButtonBorderColor
    }
    if(dom.enterQuadrantText.textContent !== enterQuadrantButtonHTML){
        dom.enterQuadrantText.textContent = enterQuadrantButtonHTML
    }

    let quadrantRewardText
    if(game.quadrants.quadrantSelected == 1){
        quadrantRewardText = `Stars are ${15+game.quadrants.completions[0]*10}% more effective.`
    }else if(game.quadrants.quadrantSelected == 2){
        quadrantRewardText = 'Raise the multiplier of the 7th ED by ^'+(1.3+game.quadrants.completions[1]*0.2)
    }else if(game.quadrants.quadrantSelected == 3){
        quadrantRewardText = 'ED mults are boosted by time spent in this supernova. (x'+format(Math.pow(Math.max(game.Supernova.timeInSupernova,0)*2,2.25)*(Math.max(game.quadrants.completions[2]-2,1))*Math.pow(1.5,(game.quadrants.completions[2]-1)))+')'
    }else if(game.quadrants.quadrantSelected == 4){
        quadrantRewardText = 'Increase the buy 10 multiplier by +0.5.'
    }else if(game.quadrants.quadrantSelected == 5){
        quadrantRewardText = 'Increase universe growth speed by ^'+Math.pow(3,game.quadrants.completions[4])
    }else if(game.quadrants.quadrantSelected == 6){
        quadrantRewardText = '1st ED is boosted by 6th EDs. (x'+format(game.energy_dims.energy_dim6.mult/4)+')'
    }else if(game.quadrants.quadrantSelected == 7){
        quadrantRewardText = 'Timelines are 40% stronger. '
    }else if(game.quadrants.quadrantSelected == 8){
        quadrantRewardText = 'Increase the energy exponent based on time spent in this supernova (+'+Math.floor(game.Supernova.timeInSupernova/15*100)/100+')'
    }else if(game.quadrants.quadrantSelected == 9){
        quadrantRewardText = 'Sacrifice is 35% stronger.'
    }

    if(dom.quadrantReward.textContent !== quadrantRewardText){
        dom.quadrantReward.textContent = quadrantRewardText
    }

    let universeSize2Text = format(game.Spacetime.universeSize)+' / '+format(game.Spacetime.universeCap)
    if(dom.universeSize2.textContent !== universeSize2Text){
        dom.universeSize2.textContent = universeSize2Text
    }
    let universeSize4Text = '+'+Math.floor(game.Spacetime.universeEff*Math.pow(10,game.settings.decimalPlaces))/Math.pow(10,game.settings.decimalPlaces)+'%'
    if(dom.universeSize4.textContent !== universeSize4Text){
        dom.universeSize4.textContent = universeSize4Text
    }
    let universeSize5Text = 'It grows by x'+format(game.Spacetime.universeSpeed)+' every second. ('+formatTime((game.Spacetime.universeCap-game.Spacetime.universeSize)/game.Spacetime.universeSpeed,true)+' until full)'
    if(dom.universeSize5.textContent !== universeSize5Text){
        dom.universeSize5.textContent = universeSize5Text
    }

    let galaxies2Text = format(game.Spacetime.galaxies)
    if(dom.galaxies2.textContent !== galaxies2Text){
        dom.galaxies2.textContent = galaxies2Text
    }
    let galaxies4Text = Math.floor(game.Spacetime.galaxyEff*thing)/thing
    if(dom.galaxies4.textContent !== galaxies4Text ){
        dom.galaxies4.textContent = galaxies4Text 
    }
    let galaxies5Text = '+'+format(game.Spacetime.galaxyGain)+' galaxies'
    if(dom.galaxies5.textContent !== galaxies5Text ){
        dom.galaxies5.textContent = galaxies5Text 
    }

    let universeUpg1_2 = 'x'+format(Math.log10(1+game.Spacetime.upg1Level*0.02)+game.Spacetime.upg1Level*Math.log10(1.005))+' -> x'+format(Math.log10(1+(game.Spacetime.upg1Level+1)*0.02)+(game.Spacetime.upg1Level+1)*Math.log10(1.005))
    if(dom.universeUpg1_2.textContent !== universeUpg1_2){
        dom.universeUpg1_2.textContent = universeUpg1_2
    }
    let universeUpg1_3 = format(game.Spacetime.upg1Cost)+' SD'
    if(dom.universeUpg1_3.textContent !== universeUpg1_3){
        dom.universeUpg1_3.textContent = universeUpg1_3
    }
    let universeUpg2_2 = '^'+Math.floor((1+game.Spacetime.upg2Level*0.5*Math.pow(1.115,game.Spacetime.upg2Level))*thing)/thing+' -> ^'+Math.floor((1+(game.Spacetime.upg2Level+1)*0.5*Math.pow(1.115,game.Spacetime.upg2Level+1))*thing)/thing
    if(dom.universeUpg2_2.textContent !== universeUpg2_2){
        dom.universeUpg2_2.textContent = universeUpg2_2
    }
    let universeUpg2_3 = format(game.Spacetime.upg2Cost)+' galaxies'
    if(dom.universeUpg2_3.textContent !== universeUpg2_3){
        dom.universeUpg2_3.textContent = universeUpg2_3
    }
    let universeUpg3_2 = 'x'+(1+game.Spacetime.upg3Level*0.1)+' -> x'+(1+(game.Spacetime.upg3Level+1)*0.1)
    if(dom.universeUpg3_2.textContent !== universeUpg3_2){
        dom.universeUpg3_2.textContent = universeUpg3_2
    }
    let universeUpg3_3 = format(game.Spacetime.upg3Cost)+' km^3 uni size'
    if(dom.universeUpg3_3.textContent !== universeUpg3_3){
        dom.universeUpg3_3.textContent = universeUpg3_3
    }

    let galaxyUpg1_2 = 'x'+format(game.Spacetime.upg4Level*Math.log10(2))+' -> x'+format((game.Spacetime.upg4Level+1)*Math.log10(2))
    if(dom.galaxyUpg1_2.textContent !== galaxyUpg1_2){
        dom.galaxyUpg1_2.textContent = galaxyUpg1_2
    }
    let galaxyUpg1_3 = format(game.Spacetime.upg4Cost)+' galaxies'
    if(dom.galaxyUpg1_3.textContent !== galaxyUpg1_3){
        dom.galaxyUpg1_3.textContent = galaxyUpg1_3
    }
    let galaxyUpg2_2 = 'x'+format(game.Spacetime.upg5Level*Math.log10(1.75))+' -> x'+format((game.Spacetime.upg5Level+1)*Math.log10(1.75))
    if(dom.galaxyUpg2_2.textContent !== galaxyUpg2_2){
        dom.galaxyUpg2_2.textContent = galaxyUpg2_2
    }
    let galaxyUpg2_3 = format(game.Spacetime.upg5Cost)+' galaxies'
    if(dom.galaxyUpg2_3.textContent !== galaxyUpg2_3){
        dom.galaxyUpg2_3.textContent = galaxyUpg2_3
    }
    let galaxyUpg3_1 = 'Sacrifice slightly boosts galaxies. ('+game.Spacetime.upg6Level+'/5)'
    if(dom.galaxyUpg3_1.textContent !== galaxyUpg3_1){
        dom.galaxyUpg3_1.textContent = galaxyUpg3_1
    }
    let galaxyUpg3_2 = 'x'+format(Math.max(game.sacrifice.eff*0.1*(1+game.Spacetime.upg6Level/3),0))+' -> x'+format(Math.max(game.sacrifice.eff*0.1*(1+(game.Spacetime.upg6Level+1)/3),0))
    if(game.Spacetime.upg6Level>4){
        galaxyUpg3_2 = 'x'+format(Math.max(game.sacrifice.eff*0.1*(1+game.Spacetime.upg6Level/3),0))
    }
    if(dom.galaxyUpg3_2.textContent !== galaxyUpg3_2){
        dom.galaxyUpg3_2.textContent = galaxyUpg3_2
    }
    let galaxyUpg3_3 = format(game.Spacetime.upg6Cost)+' galaxies'
    if(dom.galaxyUpg3_3.textContent !== galaxyUpg3_3){
        dom.galaxyUpg3_3.textContent = galaxyUpg3_3
    }

    let universeUpg1Avail
    if(game.Supernova.SupernovaPoints>game.Spacetime.upg1Cost){
        universeUpg1Avail = 'lime'
    }else{
        universeUpg1Avail = 'red'
    }
    if(dom.universeUpg1.style.borderColor !== universeUpg1Avail){
        dom.universeUpg1.style.borderColor = universeUpg1Avail
    }
    let universeUpg2Avail
    if(game.Spacetime.galaxies>game.Spacetime.upg2Cost-0.0001){
        universeUpg2Avail = 'lime'
    }else{
        universeUpg2Avail = 'red'
    }
    if(dom.universeUpg2.style.borderColor !== universeUpg2Avail){
        dom.universeUpg2.style.borderColor = universeUpg2Avail
    }
    let universeUpg3Avail
    if(game.Spacetime.universeSize>game.Spacetime.upg3Cost-0.0001){
        universeUpg3Avail = 'lime'
    }else{
        universeUpg3Avail = 'red'
    }
    if(dom.universeUpg3.style.borderColor !== universeUpg3Avail){
        dom.universeUpg3.style.borderColor = universeUpg3Avail
    }

    let galaxyUpg1Avail
    if(game.Spacetime.galaxies>game.Spacetime.upg4Cost-0.0001){
        galaxyUpg1Avail = 'lime'
    }else{
        galaxyUpg1Avail = 'red'
    }
    if(dom.galaxyUpg1.style.borderColor !== galaxyUpg1Avail){
        dom.galaxyUpg1.style.borderColor = galaxyUpg1Avail
    }
    let galaxyUpg2Avail
    if(game.Spacetime.galaxies>game.Spacetime.upg5Cost-0.0001){
        galaxyUpg2Avail = 'lime'
    }else{
        galaxyUpg2Avail = 'red'
    }
    if(dom.galaxyUpg2.style.borderColor !== galaxyUpg2Avail){
        dom.galaxyUpg2.style.borderColor = galaxyUpg2Avail
    }
    let galaxyUpg3Avail
    if(game.Spacetime.galaxies>game.Spacetime.upg6Cost-0.0001){
        galaxyUpg3Avail = 'lime'
    }else{
        galaxyUpg3Avail = 'red'
    }
    if(dom.galaxyUpg3.style.borderColor !== galaxyUpg3Avail){
        dom.galaxyUpg3.style.borderColor = galaxyUpg3Avail
    }

    let youAreCurrentlyInText
    if(game.quadrantIn == 8){
        youAreCurrentlyInText = 'You have '+formatTime(game.timeLeftIn3_3,true)+' to beat this quadrant! :)'
    }else if(game.quadrants.quadrantIn == 0){
        youAreCurrentlyInText = 'You are in the energy universe'
    }else{
        youAreCurrentlyInText = 'You are in quadrant '+quadrantNames[game.quadrants.quadrantIn-1]
    }
    if(dom.youAreCurrentlyIn.textContent !== youAreCurrentlyInText){
        dom.youAreCurrentlyIn.textContent = youAreCurrentlyInText
    }

    for (let i = 1; i <= 10; i++) {
        let autoCost = game.Automation['autoCost' + i];
        let autoInterval = game.Automation['autoInterval' + i];
        let autoMode = game.Automation['autoMode' + i];

        let upgradeText = 'Upgrade interval - ' + format(autoCost) + ' SD';
        if (autoInterval < 1 / 40) {
            upgradeText = 'Buying every tick!';
        }
        let button = dom['auto_thingButton' + i];
        if (button.innerHTML !== upgradeText) {
            button.innerHTML = upgradeText;
        }

        let modeText;
        if (autoMode === 0) {
            modeText = 'Buying until 10';
        } else if (autoMode === 1) {
            modeText = 'Buying singles';
        } else if (autoMode === 2) {
            modeText = 'Buying in bulk';
        }

        if(i<9){
            let modeButton = dom['auto_thingButton' + i + '_1'];
            if (modeButton.innerHTML !== modeText) {
                modeButton.innerHTML = modeText;
            }
        }

        let intervalText = 'Current interval: ' + Math.floor(autoInterval * 1000) / 1000 + 's';
        let intervalDom = dom['auto_thing' + i];
        if (intervalDom.innerHTML !== intervalText) {
            intervalDom.innerHTML = intervalText;
        }
    }

    let storyBlock2Vis = 'none'
    if(game.expanse.best > 0){storyBlock2Vis = 'block'}
    if (dom.storyBlock2.style.display !== storyBlock2Vis) {
        dom.storyBlock2.style.display = storyBlock2Vis
    }
    let storyBlock3Vis = 'none'
    if(game.stars.best > 0){storyBlock3Vis = 'block'}
    if (dom.storyBlock3.style.display !== storyBlock3Vis) {
        dom.storyBlock3.style.display = storyBlock3Vis
    }
    let storyBlock4Vis = 'none'
    if(game.stars.best > 0){storyBlock4Vis = 'block'}
    if (dom.storyBlock4.style.display !== storyBlock4Vis) {
        dom.storyBlock4.style.display = storyBlock4Vis
    }
    let storyBlock5Vis = 'none'
    if(game.Supernova.bestSupernovaPoints > -1){storyBlock5Vis = 'block'}
    if (dom.storyBlock5.style.display !== storyBlock5Vis) {
        dom.storyBlock5.style.display = storyBlock5Vis
        dom.storyBlock5_5.style.display = storyBlock5Vis
    }
    let storyBlock6Vis = 'none'
    if(game.SupernovaUpg.includes('0U')){storyBlock6Vis = 'block'}
    if (dom.storyBlock6.style.display !== storyBlock6Vis) {
        dom.storyBlock6.style.display = storyBlock6Vis
    }
    let storyBlock7Vis = 'none'
    if(game.SupernovaUpg.includes('1U')){storyBlock7Vis = 'block'}
    if (dom.storyBlock7.style.display !== storyBlock7Vis) {
        dom.storyBlock7.style.display = storyBlock7Vis
    }
    let storyBlock8Vis = 'none'
    if(game.SupernovaUpg.includes('2U')){storyBlock8Vis = 'block'}
    if (dom.storyBlock8.style.display !== storyBlock8Vis) {
        dom.storyBlock8.style.display = storyBlock8Vis
    }
    let storyBlock9Vis = 'none'
    if(game.SupernovaUpg.includes('3U')){storyBlock9Vis = 'block'}
    if (dom.storyBlock9.style.display !== storyBlock9Vis) {
        dom.storyBlock9.style.display = storyBlock9Vis
    }
    let storyBlock10Vis = 'none'
    if(game.Spacetime.bestSize>24.999){storyBlock10Vis = 'block'}
    if (dom.storyBlock10.style.display !== storyBlock10Vis) {
        dom.storyBlock10.style.display = storyBlock10Vis
    }
    let storyBlock11Vis = 'none'
    if(game.atoms.total>120000){storyBlock11Vis = 'block'}
    if (dom.storyBlock11.style.display !== storyBlock11Vis) {
        dom.storyBlock11.style.display = storyBlock11Vis
    }

    let explorationArea1 = game.items.areas[game.items.areaSelected]
    if (dom.explorationArea.textContent !== explorationArea1) {
        dom.explorationArea.textContent = explorationArea1
    }
    let explorationArea2 = game.items.untilNextArea+' collections left until next area'
    if(game.items.areaSelected<game.items.bestArea){
        explorationArea2 = game.items.totalCollections[game.items.areaSelected]+' items collected here'
    }
    if (dom.explorationArea2.textContent !== explorationArea2) {
        dom.explorationArea2.textContent = explorationArea2
    }

    let collectionProgress = format(game.items.nextItem)+' m^3 remaining (-'+format(game.items.collectingRate)+' m^3 /s)'
    if (dom.collectionProgress.textContent !== collectionProgress) {
        dom.collectionProgress.textContent = collectionProgress
    }

    for(let i = 1;i<9;i++){
        let areaItemText = '??? - '+game.items['item'+i+'Chances'][game.items.areaSelected]+'%'
        if(game.items['item'+i+'Chances'][game.items.areaSelected] == 0){areaItemText = ''}
        else if(game.items.inventory[game.items['item'+i+'Types'][game.items.areaSelected]]>0){
            areaItemText = game.items.itemNames[game.items['item'+i+'Types'][game.items.areaSelected]]+' - '+game.items['item'+i+'Chances'][game.items.areaSelected]+'%'
        }
        if (dom['areaItem'+i].textContent !== areaItemText) {
            dom['areaItem'+i].textContent = areaItemText
        }
    }

    for(let i = 1;i<29;i++){
        if(game.items.inventory[i-1] > 0){
            document.getElementById('inventoryItem'+i).style.display = 'flex'
        }else{
            document.getElementById('inventoryItem'+i).style.display = 'none'
        }
        document.getElementById('invText'+i+'.1').textContent = '('+game.items.inventory[i-1]+'/'+game.items.caps[i-1]+') '+game.items.itemNames[i-1]
        let secondText
        if(i==1){secondText = 'x'+Math.floor(Math.pow(1.1,game.items.itemPowerCommon)*thing)/thing+' 1st ED mult. each'}
        if(i==2){secondText = 'x'+Math.floor(Math.pow(1.125,game.items.itemPowerCommon)*thing)/thing+' 2nd ED mult. each'}
        if(i==3){secondText = 'x'+Math.floor(Math.pow(1.15,game.items.itemPowerCommon)*thing)/thing+' 3rd ED mult. each'}
        if(i==4){secondText = 'x'+Math.floor(Math.pow(1.175,game.items.itemPowerCommon)*thing)/thing+' 4th ED mult. each'}
        if(i==5){secondText = 'x'+Math.floor(Math.pow(1.1,game.items.itemPowerCommon)*thing)/thing+' 5th ED mult. each'}
        if(i==6){secondText = 'x'+Math.floor(Math.pow(1.1,game.items.itemPowerCommon)*thing)/thing+' 6th ED mult. each'}
        if(i==7){secondText = 'x'+Math.floor(Math.pow(1.075,game.items.itemPowerCommon)*thing)/thing+' 7th ED mult. each'}
        if(i==8){secondText = '+'+0.07*game.items.itemPowerCommon+'% to tickspeed base each'}
        if(i==9){secondText = '+'+0.5*game.items.itemPowerCommon+' free tickspeeds each'}
        if(i==10){secondText = 'x'+Math.floor(Math.pow(1.3,game.items.itemPowerUncommon)*thing)/thing+' atoms each'}
        if(i==11){secondText = 'x'+Math.floor(Math.pow(1.2,game.items.itemPowerUncommon)*thing)/thing+' energy each'}
        if(i==12){secondText = 'x'+Math.floor(Math.pow(1.05,game.items.itemPowerUncommon)*thing)/thing+' timeline speed'}
        if(i==13){secondText = '+^'+0.02*game.items.itemPowerUncommon+' universe growth speed'}
        if(i==14){secondText = 'x'+Math.floor(Math.pow(1.015,game.items.itemPowerUncommon)*thing)/thing+' galaxy gain'}
        if(i==15){secondText = '+'+1*game.items.itemPowerUncommon+'% star power each'}
        if(i==16){secondText = '+'+1*game.items.itemPowerRare+'% timeline power each'}
        if(i==17){secondText = '+'+0.0015*game.items.itemPowerRare+' energy exp. each'}
        if(i==17 && game.SupernovaUpg.includes('11')){secondText = '+'+0.01*game.items.itemPowerRare+' energy exp. each'}
        if(i==18){secondText = 'x'+Math.floor(Math.pow(1.05,game.items.itemPowerRare)*thing)/thing+' collecting speed each'}
        if(i==19){secondText = '/'+Math.floor(Math.pow(1.25,game.items.itemPowerRare)*thing)/thing+' all ED costs each'}
        if(i==20){secondText = '+^'+0.01*game.items.itemPowerRare+' sacrifice exp. each'}
        if(i==21){secondText = 'x'+Math.floor(Math.pow(1.05,game.items.itemPowerEpic)*thing)/thing+' stardust each'}
        if(i==22){secondText = 'This item has been scrapped.'}
        if(i==23){secondText = 'This item has been scrapped.'}
        if(i==24){secondText = 'This item has been scrapped.'}
        if(i==25){secondText = '+'+1+' item bulk each'}
        if(i==26){secondText = '+'+5+'% star power each'}
        if(i==27){secondText = '+'+5+"% to energy exp. after ALL softcaps"}
        if(i==28){secondText = '+^'+0.025+' atoms each'}

        let thirdText
        if(i==1){thirdText = 'Total: x'+format(Math.log10(1.1)*game.items.itemPowerCommon*game.items.inventory[i-1])}
        if(i==2){thirdText = 'Total: x'+format(Math.log10(1.125)*game.items.itemPowerCommon*game.items.inventory[i-1])}
        if(i==3){thirdText = 'Total: x'+format(Math.log10(1.15)*game.items.itemPowerCommon*game.items.inventory[i-1])}
        if(i==4){thirdText = 'Total: x'+format(Math.log10(1.175)*game.items.itemPowerCommon*game.items.inventory[i-1])}
        if(i==5){thirdText = 'Total: x'+format(Math.log10(1.1)*game.items.itemPowerCommon*game.items.inventory[i-1])}
        if(i==6){thirdText = 'Total: x'+format(Math.log10(1.1)*game.items.itemPowerCommon*game.items.inventory[i-1])}
        if(i==7){thirdText = 'Total: x'+format(Math.log10(1.075)*game.items.itemPowerCommon*game.items.inventory[i-1])}
        if(i==8){thirdText = 'Total: +'+0.07*game.items.itemPowerCommon*game.items.inventory[i-1]+'%'}
        if(i==9){thirdText = 'Total: +'+0.5*game.items.itemPowerCommon*game.items.inventory[i-1]}
        if(i==10){thirdText = 'Total: x'+format(Math.log10(1.3)*game.items.itemPowerUncommon*game.items.inventory[i-1])}
        if(i==11){thirdText = 'Total: x'+format(Math.log10(1.2)*game.items.itemPowerUncommon*game.items.inventory[i-1])}
        if(i==12){thirdText = 'Total: x'+format(Math.log10(1.05)*game.items.itemPowerUncommon*game.items.inventory[i-1])}
        if(i==13){thirdText = 'Total: +^'+(0.02*game.items.itemPowerUncommon*game.items.inventory[i-1])}
        if(i==14){thirdText = 'Total: x'+format(Math.log10(1.015)*game.items.itemPowerUncommon*game.items.inventory[i-1])}
        if(i==15){thirdText = 'Total: +'+1*game.items.itemPowerUncommon*game.items.inventory[i-1]+'%'}
        if(i==16){thirdText = 'Total: +'+1*game.items.itemPowerRare*game.items.inventory[i-1]+'%'}
        if(i==17){thirdText = 'Total: +^'+(0.0015*game.items.itemPowerRare*game.items.inventory[i-1])}
        if(i==17 && game.SupernovaUpg.includes('11')){thirdText = 'Total: +^'+(0.01*game.items.itemPowerRare*game.items.inventory[i-1])}
        if(i==18){thirdText = 'Total: x'+format(Math.log10(1.05)*game.items.itemPowerRare*game.items.inventory[i-1])}
        if(i==19){thirdText = 'Total: /'+format(Math.log10(1.25)*game.items.itemPowerRare*game.items.inventory[i-1])}
        if(i==20){thirdText = 'Total: +^'+(0.01*game.items.itemPowerRare*game.items.inventory[i-1])}
        if(i==21){thirdText = 'Total: x'+format(Math.log10(1.05)*game.items.itemPowerEpic*game.items.inventory[i-1])}
        if(i==22){thirdText = 'It does nothing.'}
        if(i==23){thirdText = 'It does nothing.'}
        if(i==24){thirdText = 'It does nothing.'}
        if(i==25){thirdText = 'Total: +'+game.items.inventory[i-1]}
        if(i==26){thirdText = 'Total: +'+5*game.items.inventory[i-1]+'%'}
        if(i==27){thirdText = 'Total: x'+(1+0.05*game.items.inventory[i-1])}
        if(i==28){thirdText = 'Total: +^'+(0.025*game.items.inventory[i-1])}

        document.getElementById('invText'+i+'.2').textContent = secondText
        document.getElementById('invText'+i+'.3').textContent = thirdText
    }

    let expLevelText = 'Exploration level '+game.items.level+' ('+Math.floor(100/Math.pow(10,game.items.levelReq-game.items.xp)*100)/100+'%)'
    if (dom.expLevelText.textContent !== expLevelText) {
        dom.expLevelText.textContent = expLevelText
    }
    let expLevelProgress = format(game.items.xp)+'/'+format(game.items.levelReq)+' XP (+'+format(game.items.areaCollectionAmounts[game.items.areaSelected]+game.items.areaSelected*Math.log10(1.2)-1)+'/collect)'
    if (dom.expLevelProgress.textContent !== expLevelProgress) {
        dom.expLevelProgress.textContent = expLevelProgress
    }
    let expLevelBoostText = 'Your proficiency speeds up collecting by x'+format(game.items.levelBase*game.items.level)
    if (dom.expLevelBoostText.textContent !== expLevelBoostText) {
        dom.expLevelBoostText.textContent = expLevelBoostText
    }

    dom.collectionProgressBar.style.width = (100-100/Math.pow(10,(game.items.areaCollectionAmounts[game.items.areaSelected]-game.items.nextItem)))+'%'
    dom.expLevelBar.style.width = (100/Math.pow(10,(game.items.levelReq-game.items.xp)))+'%'

    let expLevelUpgText1_1 = 'x'+format(game.items.upg1Level*Math.log10(1.05))+' -> x'+format((game.items.upg1Level+1)*Math.log10(1.05))+' collecting speed'
    if (dom.expLevelUpgText1_1.textContent !== expLevelUpgText1_1) {
        dom.expLevelUpgText1_1.textContent = expLevelUpgText1_1
    }
    let expLevelUpgText1_2 = 'Upgrade for '+format(Math.pow(1.35,game.items.upg1Level)+game.items.upg1Level*11+12)+' atoms'
    if (dom.expLevelUpgText1_2.textContent !== expLevelUpgText1_2) {
        dom.expLevelUpgText1_2.textContent = expLevelUpgText1_2
    }
    let expLevelUpgText2_1 = 'x'+format(game.items.upg2Level*Math.log10(1.05))+' -> x'+format((game.items.upg2Level+1)*Math.log10(1.05))+' collecting speed'
    if (dom.expLevelUpgText2_1.textContent !== expLevelUpgText2_1) {
        dom.expLevelUpgText2_1.textContent = expLevelUpgText2_1
    }
    let expLevelUpgText2_2 = 'Upgrade for '+format(Math.pow(1.35,game.items.upg2Level)+game.items.upg2Level*7+9)+' energy'
    if (dom.expLevelUpgText2_2.textContent !== expLevelUpgText2_2) {
        dom.expLevelUpgText2_2.textContent = expLevelUpgText2_2
    }
    let expLevelUpgText3_1 = 'x'+format(game.items.upg3Level*Math.log10(1.2))+' -> x'+format((game.items.upg3Level+1)*Math.log10(1.2))+' collecting speed'
    if (dom.expLevelUpgText3_1.textContent !== expLevelUpgText3_1) {
        dom.expLevelUpgText3_1.textContent = expLevelUpgText3_1
    }
    let expLevelUpgText3_2 = 'Requires '+(game.items.upg3Level*2+3)+' stars'
    if (dom.expLevelUpgText3_2.textContent !== expLevelUpgText3_2) {
        dom.expLevelUpgText3_2.textContent = expLevelUpgText3_2
    }
    let expLevelUpgText4_1 = 'x'+format(game.items.upg4Level*Math.log10(1.1))+' -> x'+format((game.items.upg4Level+1)*Math.log10(1.1))+' collecting speed'
    if (dom.expLevelUpgText4_1.textContent !== expLevelUpgText4_1) {
        dom.expLevelUpgText4_1.textContent = expLevelUpgText4_1
    }
    let expLevelUpgText4_2 = 'Requires /'+format(Math.pow(1.2,game.items.upg4Level)+game.items.upg4Level*5.5+6)+' sacrifice mult.'
    if (dom.expLevelUpgText4_2.textContent !== expLevelUpgText4_2) {
        dom.expLevelUpgText4_2.textContent = expLevelUpgText4_2
    }
    let expLevelUpgText5_1 = 'x'+format(game.items.upg5Level*Math.log10(1.125))+' -> x'+format((game.items.upg5Level+1)*Math.log10(1.125))+' collecting speed'
    if (dom.expLevelUpgText5_1.textContent !== expLevelUpgText5_1) {
        dom.expLevelUpgText5_1.textContent = expLevelUpgText5_1
    }
    let expLevelUpgText5_2 = 'Upgrade for '+format(Math.pow(1.25,game.items.upg5Level)+game.items.upg5Level*0.8+2)+' stardust'
    if (dom.expLevelUpgText5_2.textContent !== expLevelUpgText5_2) {
        dom.expLevelUpgText5_2.textContent = expLevelUpgText5_2
    }

    let explorationUpgrade4Vis = 'none'
    if(game.stars.best>0){
        explorationUpgrade4Vis = 'inline-block'
    }
    if (dom.explorationUpgrade4.style.display !== explorationUpgrade4Vis) {
        dom.explorationUpgrade4.style.display = explorationUpgrade4Vis
    }
    let explorationUpgrade5Vis = 'none'
    if(game.Supernova.totalSupernovaPoints>-1){
        explorationUpgrade5Vis = 'inline-block'
    }
    if (dom.explorationUpgrade5.style.display !== explorationUpgrade5Vis) {
        dom.explorationUpgrade5.style.display = explorationUpgrade5Vis
    }

    let changeArea1Vis = 0
    if(game.items.areaSelected>0){
        changeArea1Vis = 1
    }
    if (dom.changeArea1.style.opacity !== changeArea1Vis) {
        dom.changeArea1.style.opacity = changeArea1Vis
    }
    let changeArea2Vis = 0
    if(game.items.areaSelected<game.items.bestArea && game.items.areaSelected!==8){
        changeArea2Vis = 1
    }
    if (dom.changeArea2.style.opacity !== changeArea2Vis) {
        dom.changeArea2.style.opacity = changeArea2Vis
    }
}

function gameTick() {
    if(tickerMessage == 'oops sorry wrong direction')
        {
            tickerX += 0.2*game.settings.newsSpeed
        }
        else
        {
            tickerX -= tickerMessage == 'im fast as fuuuuuu'?0.4*game.settings.newsSpeed:0.2*game.settings.newsSpeed
        }
    game.stats.playtime += 0.025*Math.pow(10,offline_speed)
    game.Supernova.timeInSupernova = add_logs(game.Supernova.timeInSupernova,Math.log10(0.025*Math.pow(10,offline_speed)))
    game.Spacetime.timeSinceCondense = add_logs(game.Spacetime.timeSinceCondense,Math.log10(0.025*Math.pow(10,offline_speed)))
    game.sacrifice.timeSinceSacrifice = add_logs(game.sacrifice.timeSinceSacrifice,Math.log10(0.025*Math.pow(10,offline_speed)))
    if(game.settings.notation == 8){
        game.stats.timeBlind += 0.025*Math.pow(10,offline_speed)
    }
    game.atoms.amount = add_logs(game.atoms.amount,game.atoms.atoms_s-Math.log10(40))
    game.atoms.total = add_logs(game.atoms.total,game.atoms.atoms_s-Math.log10(40))
    game.atoms.atoms_s = game.energy.eff+game.expanse.eff1+offline_speed+(Math.log10(4)*game.stars.amount*game.stars.power)+game.Timelines.timeline1Boost1
    game.atoms.atoms_s += Math.log10(1.3)*game.items.inventory[9]*game.items.itemPowerUncommon
    game.atoms.atoms_s *= game.globalAtomExp
    if(game.atoms.atoms_s>100){
        game.atoms.atoms_s = 100+(game.atoms.atoms_s-100)*0.85
    }
    if(game.atoms.atoms_s>5000){
        game.atoms.atoms_s = 5000+(game.atoms.atoms_s-5000)*0.3
    }
    if(game.atoms.atoms_s>100000){
        game.atoms.atoms_s = 100000+(game.atoms.atoms_s-100000)*0.2
    }
    game.atoms.atoms_s *= 1+0.025*game.items.inventory[27]
    game.energy.eff = game.energy.amount*game.energy.exp
    game.energy.amount = add_logs(game.energy.amount,game.energy.energy_s-Math.log10(40))
    game.energy.exp = 1.4+((game.stars.amount+game.Timelines.timeline2Boost3)*game.stars.power)/10+game.Timelines.timeline3Boost2
    if(game.SupernovaUpg.includes('11')){
        game.energy.exp += 0.01*game.items.inventory[16]*game.items.itemPowerRare
    }else{
        game.energy.exp += 0.0015*game.items.inventory[16]*game.items.itemPowerRare
    }
    game.energy.exp += game.Timelines.timeline3Boost2
    if(game.quadrants.quadrantIn !== 0){
        game.energy.exp -= 0.25
    }
    if(game.quadrants.quadrantIn == 1 && game.quadrants.completions[0]>2){
        game.energy.exp -= 0.25
    }
    if(game.SupernovaUpg.includes('4')){
        game.energy.exp += 0.5
    }
    if(game.quadrants.completions[7]>0){
        game.energy.exp += game.Supernova.timeInSupernova/15
    }
    if(game.quadrants.quadrantIn == 9){
        game.energy.exp -= game.energy_dims.energy_dim7.level/1500
    }
    if(game.quadrants.quadrantIn == 2 && game.quadrants.completions[1]>1){
        game.energy.exp = Math.sqrt(game.energy.exp)
    }
    if(game.quadrants.quadrantIn == 5 && game.quadrants.completions[4] < 3){
        game.energy.exp = Math.sqrt(game.energy.exp)
        game.energy.exp /= 3
    }
    if(game.quadrants.quadrantIn == 5 && game.quadrants.completions[4] > 2){
        game.energy.exp = Math.pow(game.energy.exp,0.3)
        game.energy.exp /= 5
    }
    game.energy.exp = Math.min(game.energy.exp,2)+Math.sqrt(Math.max(game.energy.exp-1,1))-1
    if(game.energy.exp>6){
        game.energy.exp = 6+(game.energy.exp-6)*0.2
    }
    game.energy.exp *= 1+0.05*game.items.inventory[26]

    if(game.energy.exp<0){game.energy.exp = 0}
    game.energy.energy_s = game.energy_dims.energy_dim1.amount+game.energy_dims.energy_dim1.mult-Math.log10(100)+game.Timelines.timeline2Boost1
    game.energy.energy_s += Math.log10(1.2)*game.items.inventory[10]*game.items.itemPowerUncommon
    game.energy.energy_s *= game.globalEnergyExp
    if(game.energy.energy_s>100000){
        game.energy.energy_s = 100000+Math.sqrt(game.energy.energy_s-100000)
    }
    game.energy_dims.tickspeed.eff = game.energy_dims.tickspeed.base*(game.energy_dims.tickspeed.amount+0.5*game.items.inventory[8]*game.items.itemPowerCommon)*game.globalTickspeedExp
    game.energy_dims.tickspeed.cost = game.energy_dims.tickspeed.amount*Math.log10(20)+3
    if(game.energy_dims.tickspeed.amount>471){
        game.energy_dims.tickspeed.cost = 618+(game.energy_dims.tickspeed.amount-471)*Math.log10(20)*game.Supernova.postSNscaling
    }
    game.energy_dims.energy_dim1.amount = add_logs(game.energy_dims.energy_dim1.amount,game.energy_dims.energy_dim2.amount+game.energy_dims.energy_dim2.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim2.amount = add_logs(game.energy_dims.energy_dim2.amount,game.energy_dims.energy_dim3.amount+game.energy_dims.energy_dim3.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim3.amount = add_logs(game.energy_dims.energy_dim3.amount,game.energy_dims.energy_dim4.amount+game.energy_dims.energy_dim4.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim4.amount = add_logs(game.energy_dims.energy_dim4.amount,game.energy_dims.energy_dim5.amount+game.energy_dims.energy_dim5.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim5.amount = add_logs(game.energy_dims.energy_dim5.amount,game.energy_dims.energy_dim6.amount+game.energy_dims.energy_dim6.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim6.amount = add_logs(game.energy_dims.energy_dim6.amount,game.energy_dims.energy_dim7.amount+game.energy_dims.energy_dim7.mult-Math.log10(50)-Math.log10(40))

    let dimMultsAdd = game.energy_dims.tickspeed.eff+game.expanse.eff2+game.achievement_boost1+offline_speed
    if(game.quadrants.completions[2]>0){
        dimMultsAdd += Math.pow(Math.max(game.Supernova.timeInSupernova,0)*2,2.25)*(Math.max(game.quadrants.completions[2]-2,1))*Math.pow(1.5,(game.quadrants.completions[2]-1))
    }
    dimMultsAdd += game.Timelines.timeline2Boost2
    game.energy_dims.energy_dim1.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim1.level/10)+dimMultsAdd
    game.energy_dims.energy_dim2.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim2.level/10)+dimMultsAdd
    game.energy_dims.energy_dim3.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim3.level/10)+dimMultsAdd
    game.energy_dims.energy_dim4.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim4.level/10)+dimMultsAdd
    game.energy_dims.energy_dim5.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim5.level/10)+dimMultsAdd
    game.energy_dims.energy_dim6.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim6.level/10)+dimMultsAdd
    game.energy_dims.energy_dim7.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim7.level/10)+dimMultsAdd

    if(game.achievements.includes(13)) {
        game.energy_dims.energy_dim3.mult += Math.log10(1.05)
    }
    if(game.achievements.includes(11)) {
        game.energy_dims.energy_dim5.mult += Math.log10(1.03)
    }
    if(game.SupernovaUpg.includes('0')){
        game.energy_dims.energy_dim1.mult += Math.log10(2+game.Supernova.supernovas*1)
        game.energy_dims.energy_dim2.mult += Math.log10(2+game.Supernova.supernovas*1)
        game.energy_dims.energy_dim3.mult += Math.log10(2+game.Supernova.supernovas*1)
    }
    if(game.SupernovaUpg.includes('1')){
        game.energy_dims.energy_dim4.mult += Math.log10(4+game.Supernova.supernovas*2)
        game.energy_dims.energy_dim5.mult += Math.log10(4+game.Supernova.supernovas*2)
        game.energy_dims.energy_dim6.mult += Math.log10(4+game.Supernova.supernovas*2)
    }
    if(game.SupernovaUpg.includes('2')){
        game.energy_dims.energy_dim7.mult += Math.log10(8+Math.pow(game.Supernova.supernovas+1,4.5))
    }
    if(game.quadrants.completions[5]>0){
        game.energy_dims.energy_dim1.mult += game.energy_dims.energy_dim1.mult/4
    }
    game.energy_dims.energy_dim1.mult += Math.log10(1.1)*game.items.inventory[0]*game.items.itemPowerCommon
    game.energy_dims.energy_dim2.mult += Math.log10(1.125)*game.items.inventory[1]*game.items.itemPowerCommon
    game.energy_dims.energy_dim3.mult += Math.log10(1.15)*game.items.inventory[2]*game.items.itemPowerCommon
    game.energy_dims.energy_dim4.mult += Math.log10(1.175)*game.items.inventory[3]*game.items.itemPowerCommon
    game.energy_dims.energy_dim5.mult += Math.log10(1.1)*game.items.inventory[4]*game.items.itemPowerCommon
    game.energy_dims.energy_dim6.mult += Math.log10(1.1)*game.items.inventory[5]*game.items.itemPowerCommon
    game.energy_dims.energy_dim7.mult += Math.log10(1.075)*game.items.inventory[6]*game.items.itemPowerCommon
    if(game.quadrants.quadrantIn == 6){
        game.energy_dims.energy_dim1.mult -= game.energy_dims.energy_dim7.level/50
        game.energy_dims.energy_dim2.mult -= game.energy_dims.energy_dim6.level/50
        game.energy_dims.energy_dim3.mult -= game.energy_dims.energy_dim5.level/50
        game.energy_dims.energy_dim5.mult -= game.energy_dims.energy_dim3.level/50
        game.energy_dims.energy_dim6.mult -= game.energy_dims.energy_dim2.level/50
        game.energy_dims.energy_dim7.mult -= game.energy_dims.energy_dim1.level/50
    }
    if(game.quadrants.quadrantIn == 7 && game.quadrants.quadrantInDiff == 1){
        game.energy_dims.energy_dim1.mult *= 0.65
        game.energy_dims.energy_dim2.mult *= 0.65
        game.energy_dims.energy_dim3.mult *= 0.65
        game.energy_dims.energy_dim5.mult *= 0.65
        game.energy_dims.energy_dim6.mult *= 0.65
        game.energy_dims.energy_dim7.mult *= 0.65
    }
    if(game.quadrants.quadrantIn == 7 && game.quadrants.quadrantInDiff == 2){
        game.energy_dims.energy_dim1.mult *= 0.6
        game.energy_dims.energy_dim2.mult *= 0.6
        game.energy_dims.energy_dim3.mult *= 0.6
        game.energy_dims.energy_dim5.mult *= 0.6
        game.energy_dims.energy_dim6.mult *= 0.6
        game.energy_dims.energy_dim7.mult *= 0.6
    }
    if(game.quadrants.quadrantIn == 7 && game.quadrants.quadrantInDiff == 3){
        game.energy_dims.energy_dim1.mult *= 0.45
        game.energy_dims.energy_dim2.mult *= 0.45
        game.energy_dims.energy_dim3.mult *= 0.45
        game.energy_dims.energy_dim5.mult *= 0.45
        game.energy_dims.energy_dim6.mult *= 0.45
        game.energy_dims.energy_dim7.mult *= 0.45
    }
    if(game.quadrants.quadrantIn == 7 && game.quadrants.quadrantInDiff == 4){
        game.energy_dims.energy_dim1.mult *= 0.3
        game.energy_dims.energy_dim2.mult *= 0.3
        game.energy_dims.energy_dim3.mult *= 0.3
        game.energy_dims.energy_dim5.mult *= 0.3
        game.energy_dims.energy_dim6.mult *= 0.3
        game.energy_dims.energy_dim7.mult *= 0.3
    }
    if(game.quadrants.quadrantIn == 2 && game.quadrants.completions[1]>2){
        game.energy_dims.energy_dim1.mult *= 0.5
        game.energy_dims.energy_dim2.mult *= 0.5
        game.energy_dims.energy_dim3.mult *= 0.5
        game.energy_dims.energy_dim5.mult *= 0.5
        game.energy_dims.energy_dim6.mult *= 0.5
        game.energy_dims.energy_dim7.mult *= 0.5
    }
    game.energy_dims.energy_dim1.mult *= game.quadrants.quadrant3_3Exp
    game.energy_dims.energy_dim2.mult *= game.quadrants.quadrant3_3Exp
    game.energy_dims.energy_dim3.mult *= game.quadrants.quadrant3_3Exp
    game.energy_dims.energy_dim5.mult *= game.quadrants.quadrant3_3Exp
    game.energy_dims.energy_dim6.mult *= game.quadrants.quadrant3_3Exp
    game.energy_dims.energy_dim7.mult *= game.quadrants.quadrant3_3Exp

    if(game.quadrants.completions[1]>0){
        game.energy_dims.energy_dim7.mult *= 1.3+game.quadrants.completions[1]*0.2
    }

    let quadrant2_2Decrease

    if(game.quadrants.quadrantIn == 3 && game.quadrants.completions[2] == 0){
        quadrant2_2Decrease = Math.pow(Math.max(game.Supernova.timeInSupernova,0)*3,2)
    }
    if(game.quadrants.quadrantIn == 3 && game.quadrants.completions[2] == 1){
        quadrant2_2Decrease = Math.pow(Math.max(game.Supernova.timeInSupernova,0)*5,3)
    }
    if(game.quadrants.quadrantIn == 3 && game.quadrants.completions[2] == 2){
        quadrant2_2Decrease = Math.pow(Math.max(game.Supernova.timeInSupernova,0)*4,4)
    }
    if(game.quadrants.quadrantIn == 3 && game.quadrants.completions[2] == 3){
        quadrant2_2Decrease = Math.pow(Math.max(game.Supernova.timeInSupernova,0)*10,8)
    }
    if(game.quadrants.quadrantIn == 3 && game.quadrants.completions[2] == 4){
        quadrant2_2Decrease = Math.pow(Math.max(game.Supernova.timeInSupernova,0)*10,1000)
    }
    if(game.quadrants.quadrantIn == 3){
        game.energy_dims.energy_dim1.mult -= quadrant2_2Decrease
        game.energy_dims.energy_dim2.mult -= quadrant2_2Decrease
        game.energy_dims.energy_dim3.mult -= quadrant2_2Decrease
        game.energy_dims.energy_dim4.mult -= quadrant2_2Decrease
        game.energy_dims.energy_dim5.mult -= quadrant2_2Decrease
        game.energy_dims.energy_dim6.mult -= quadrant2_2Decrease
        game.energy_dims.energy_dim7.mult -= quadrant2_2Decrease
    }

    let quadrant2_2MinED
    if(game.quadrants.quadrantIn == 3 && game.quadrants.completions[2] == 0){quadrant2_2MinED = -1}
    else if(game.quadrants.quadrantIn == 3 && game.quadrants.completions[2] == 1){quadrant2_2MinED = -3}
    else if(game.quadrants.quadrantIn == 3 && game.quadrants.completions[2] == 2){quadrant2_2MinED = -5}
    else if(game.quadrants.quadrantIn == 3 && game.quadrants.completions[2] == 3){quadrant2_2MinED = -5}
    else{quadrant2_2MinED = -1.0e9}

    if(game.energy_dims.energy_dim1.mult < quadrant2_2MinED){game.energy_dims.energy_dim1.mult = quadrant2_2MinED}
    if(game.energy_dims.energy_dim2.mult < quadrant2_2MinED){game.energy_dims.energy_dim2.mult = quadrant2_2MinED}
    if(game.energy_dims.energy_dim3.mult < quadrant2_2MinED){game.energy_dims.energy_dim3.mult = quadrant2_2MinED}
    if(game.energy_dims.energy_dim4.mult < quadrant2_2MinED){game.energy_dims.energy_dim4.mult = quadrant2_2MinED}
    if(game.energy_dims.energy_dim5.mult < quadrant2_2MinED){game.energy_dims.energy_dim5.mult = quadrant2_2MinED}
    if(game.energy_dims.energy_dim6.mult < quadrant2_2MinED){game.energy_dims.energy_dim6.mult = quadrant2_2MinED}
    if(game.energy_dims.energy_dim7.mult < quadrant2_2MinED){game.energy_dims.energy_dim7.mult = quadrant2_2MinED}
    
    let dimHelper = game.energy_dims
    game.energy_dims.energy_dim1.cost = (1+Math.floor(dimHelper.energy_dim1.level/10)*2)
    if(dimHelper.energy_dim1.level > 3069){
        game.energy_dims.energy_dim1.cost = (1+Math.floor(616+((dimHelper.energy_dim1.level-3070)*game.Supernova.postSNscaling)/10*2))
    }
    game.energy_dims.energy_dim1.cost -= game.sacrifice.eff
    game.energy_dims.energy_dim1.cost -= Math.log10(1.25)*game.items.inventory[18]*game.items.itemPowerRare

    game.energy_dims.energy_dim2.cost = (2+Math.floor(dimHelper.energy_dim2.level/10)*4)
    if(dimHelper.energy_dim2.level > 1539){
        game.energy_dims.energy_dim2.cost = (2+Math.floor(616+((dimHelper.energy_dim2.level-1540)*game.Supernova.postSNscaling)/10*4))
    }
    game.energy_dims.energy_dim2.cost -= game.sacrifice.eff
    game.energy_dims.energy_dim2.cost -= Math.log10(1.25)*game.items.inventory[18]*game.items.itemPowerRare
    
    game.energy_dims.energy_dim3.cost = (4+Math.floor(dimHelper.energy_dim3.level/10)*6)
    if(dimHelper.energy_dim3.level > 1029){
        game.energy_dims.energy_dim3.cost = (4+Math.floor(618+((dimHelper.energy_dim3.level-1030)*game.Supernova.postSNscaling)/10*6))
    }
    game.energy_dims.energy_dim3.cost -= game.sacrifice.eff
    game.energy_dims.energy_dim3.cost -= Math.log10(1.25)*game.items.inventory[18]*game.items.itemPowerRare
    
    game.energy_dims.energy_dim4.cost = (8+Math.floor(dimHelper.energy_dim4.level/10)*8)
    if(dimHelper.energy_dim4.level > 759){
        game.energy_dims.energy_dim4.cost = (8+Math.floor(616+((dimHelper.energy_dim4.level-760)*game.Supernova.postSNscaling)/10*8))
    }
    game.energy_dims.energy_dim4.cost -= game.sacrifice.eff
    game.energy_dims.energy_dim4.cost -= Math.log10(1.25)*game.items.inventory[18]*game.items.itemPowerRare
    
    game.energy_dims.energy_dim5.cost = (14+Math.floor(dimHelper.energy_dim5.level/10)*10)
    if(dimHelper.energy_dim5.level > 599){
        game.energy_dims.energy_dim5.cost = (14+Math.floor(620+((dimHelper.energy_dim5.level-600)*game.Supernova.postSNscaling)/10*10))
    }
    game.energy_dims.energy_dim5.cost -= game.sacrifice.eff
    game.energy_dims.energy_dim5.cost -= Math.log10(1.25)*game.items.inventory[18]*game.items.itemPowerRare
    
    game.energy_dims.energy_dim6.cost = (20+Math.floor(dimHelper.energy_dim6.level/10)*12)
    if(dimHelper.energy_dim6.level > 499){
        game.energy_dims.energy_dim6.cost = (20+Math.floor(620+((dimHelper.energy_dim6.level-500)*game.Supernova.postSNscaling)/10*12))
    }
    game.energy_dims.energy_dim6.cost -= game.sacrifice.eff
    game.energy_dims.energy_dim6.cost -= Math.log10(1.25)*game.items.inventory[18]*game.items.itemPowerRare
    
    game.energy_dims.energy_dim7.cost = (25+Math.floor(dimHelper.energy_dim7.level/10)*17)
    if(dimHelper.energy_dim7.level > 419){
        game.energy_dims.energy_dim7.cost = (25+Math.floor(616+((dimHelper.energy_dim7.level-420)*game.Supernova.postSNscaling)/10*17))
    }
    game.energy_dims.energy_dim7.cost -= game.sacrifice.eff
    game.energy_dims.energy_dim7.cost -= Math.log10(1.25)*game.items.inventory[18]*game.items.itemPowerRare

    
    
    
    if(game.expanse.amount<1)
    {
        game.energy_dims.energy_dim4.cost = Infinity
    }
    if(game.expanse.amount<2)
        {
            game.energy_dims.energy_dim5.cost = Infinity
        }
        if(game.expanse.amount<3)
            {
                game.energy_dims.energy_dim6.cost = Infinity
            }
            if(game.expanse.amount<4)
                {
                    game.energy_dims.energy_dim7.cost = Infinity
                }
    game.sacrifice.exp = 0.085*(1+0.01*game.items.inventory[19]*game.items.itemPowerRare)
    if(game.quadrants.quadrantIn == 5 && game.quadrants.completions[4]<2){
        game.sacrifice.exp *= 3
    }
    if(game.quadrants.quadrantIn == 5){
        game.sacrifice.exp *= 1+Math.max(game.sacrifice.timeSinceSacrifice,0)/1.5
    }
    game.sacrifice.potential = (game.energy_dims.energy_dim1.amount*game.sacrifice.exp)*game.globalSacrificeExp-game.sacrifice.eff
    if(game.expanse.amount>3){
        game.expanse.cost = 20+(game.expanse.amount-4)*((game.expanse.amount-4)*5+15)
        if(game.SupernovaUpg.includes('10')){
            game.expanse.cost = Math.floor(15+(game.expanse.amount-4)*((game.expanse.amount-4)*2.5+10))
        }
    }else{
        game.expanse.cost = 20
    }
    if(game.quadrants.quadrantIn == 4 && game.quadrants.completions[3]<1){
        game.expanse.cost = Math.round(game.expanse.cost*0.9)
    }
    game.stars.cost = 40+game.stars.amount*(20+(game.stars.amount-1)*5)
    if(game.stars.amount>2){
        game.stars.cost = 40+game.stars.amount*(20+(game.stars.amount-1)*10)
    }
    if(game.quadrants.quadrantIn == 1){
        game.stars.cost = 50+game.stars.amount*(25+(game.stars.amount-1)*7)
    }
    if(game.quadrants.quadrantIn == 4){
        game.stars.cost = Math.round(game.stars.cost*0.9)
    }
    game.stars.power = 1+(game.Timelines.timeline3Boost1/100)
    game.stars.power *= 1+0.01*game.items.inventory[14]*game.items.itemPowerUncommon+0.03*game.items.inventory[25]
    if(game.quadrants.quadrantIn == 1 && game.quadrants.completions[0] == 0){
        game.stars.power *= 0.4
    }else if(game.quadrants.quadrantIn == 1 && game.quadrants.completions[0] == 1){
        game.stars.power *= 0.2
    }else if(game.quadrants.quadrantIn == 1 && game.quadrants.completions[0] > 1){
        game.stars.power = 0
    }
    if(game.quadrants.completions[0]>0 && game.quadrants.quadrantIn !== 1){
        game.stars.power *= 1.15+game.quadrants.completions[0]*0.1
    }
    if(game.quadrants.quadrantIn == 9 && game.quadrants.quadrantInDiff == 2){
        game.stars.power *= 0.5
    }
    if(game.quadrants.quadrantIn == 9 && game.quadrants.quadrantInDiff == 3){
        game.stars.power *= 0.25
    }
    if(game.quadrants.quadrantIn == 9 && game.quadrants.quadrantInDiff == 4){
        game.stars.power *= 0
    }
    if(game.stars.power>8){
        game.stars.power = 8+(game.stars.power-8)*0.1
    }

    if(game.expanse.amount == 0){
        game.expanse.cost_type = 3
    }
    else if(game.expanse.amount == 1){
        game.expanse.cost_type = 4
    }
    else if(game.expanse.amount == 2){
         game.expanse.cost_type = 5
    }
    else if(game.expanse.amount == 3){
        game.expanse.cost_type = 6
    }
    else{
        game.expanse.cost_type = 7
    }

    game.expanse.base1 = Math.log10(32)
    if(game.expanse.amount > 2){
        game.expanse.base1 = Math.log10(512)
    }
    game.expanse.base2 = Math.log10(2)
    game.expanse.base3 = Math.log10(1.25)
    if(game.SupernovaUpg.includes('3')){
        game.expanse.base1 *= 1.5
        game.expanse.base2 *= 1.5
    }
    if(game.SupernovaUpg.includes('9')){
        game.expanse.base2 *= 1.4
    }
    game.expanse.base1 *= 1+(game.Timelines.timeline1Boost2/100)
    game.expanse.base2 *= 1+(game.Timelines.timeline1Boost2/100)
    if(game.quadrants.completions[4]>0){
        game.expanse.base1 *= 1.5
        game.expanse.base2 *= 1.5
    }
    if(game.quadrants.quadrantIn == 1 && game.quadrants.completions[0]>1){
        game.expanse.base1 *= 0.3
        game.expanse.base2 *= 0.3
    }
    if(game.quadrants.quadrantIn == 1 && game.quadrants.completions[0]>2){
        game.expanse.base1 *= 0
        game.expanse.base2 *= 0
    }
    if(game.expanse.base1>200){
        game.expanse.base1= 200+(game.expanse.base1-200)*0.2
    }
    if(game.expanse.base2>30){
        game.expanse.base2= 30+(game.expanse.base2-30)*0.2
    }

    let expAmount = (game.expanse.amount+Math.floor(game.Timelines.timeline1Boost3))
    let boost1Amount = Math.floor((expAmount+1)/2)
    let boost2Amount = Math.floor(expAmount/2)
    let boost3Amount = Math.floor(expAmount/4)
    game.expanse.eff1 = game.expanse.base1*boost1Amount
    game.expanse.eff2 = game.expanse.base2*boost2Amount
    game.expanse.eff3 = game.expanse.base3*boost3Amount

    game.energy_dims.buy10mult = 2
    if(game.quadrants.completions[3]>0){
        game.energy_dims.buy10mult += 0.3+game.quadrants.completions[3]*0.2
    }
    if(game.quadrants.quadrantIn == 4 && game.quadrants.completions[3] == 0){
        game.energy_dims.buy10mult = 1
    }
    if(game.quadrants.quadrantIn == 4 && game.quadrants.completions[3] == 1){
        game.energy_dims.buy10mult = 0.1
    }
    if(game.quadrants.quadrantIn == 4 && game.quadrants.completions[3] == 2){
        game.energy_dims.buy10mult = 0.01
    }
    if(game.quadrants.quadrantIn == 4 && game.quadrants.completions[3] > 2){
        game.energy_dims.buy10mult = 0.0001
    }
    game.energy_dims.tickspeed.base = Math.log10(1.1)
    game.energy_dims.tickspeed.base *= 1+game.Spacetime.universeEff/100
    game.energy_dims.tickspeed.base *= 1+0.0007*game.items.inventory[7]*game.items.itemPowerCommon
    if(game.quadrants.quadrantIn == 6 && game.quadrants.quadrantInDiff == 2){
        game.energy_dims.tickspeed.base *= 0.6
    }
    if(game.quadrants.quadrantIn == 6 && game.quadrants.quadrantInDiff == 3){
        game.energy_dims.tickspeed.base *= 0.3
    }
    if(game.quadrants.quadrantIn == 6 && game.quadrants.quadrantInDiff == 4){
        game.energy_dims.tickspeed.base *= 0.1
    }
    if(game.SupernovaUpg.includes('17')){
        game.energy_dims.tickspeed.base += Math.log10(1.3)
    }
    game.Supernova.postSNscaling = 10
    if(game.SupernovaUpg.includes('6')){
        game.Supernova.postSNscaling -= 3
    }
    if(game.SupernovaUpg.includes('19')){
        game.Supernova.postSNscaling -= 1.5*(game.Spacetime.universeSize/game.Spacetime.universeCap)
    }
    
    let SDgainhelper = (game.atoms.amount/616-1)
    let snUpg9Eff = Math.min(game.sacrifice.eff*0.02,Math.log10(30))+Math.max(0,game.sacrifice.eff*0.02-Math.log10(30))*0.4
    if(snUpg9Eff>27){
        snUpg9Eff = 27+(snUpg9Eff-27)*0.1
    }
    if(game.SupernovaUpg.includes('8')){
        SDgainhelper += snUpg9Eff
    }
    if(game.SupernovaUpg.includes('15')){
        SDgainhelper += Math.pow(game.atoms.amount,0.05)
    }
    if(SDgainhelper>18){
        SDgainhelper = 18+(SDgainhelper-18)*0.5
    }
    if(SDgainhelper>21){
        SDgainhelper = 21+(SDgainhelper-21)*0.3
    }
    SDgainhelper += Math.log10(1.05)*game.items.inventory[20]*game.items.itemPowerEpic
    SDgainhelper += game.Spacetime.upg4Eff

    if(game.atoms.amount>616){
        if(SDgainhelper<6){
            game.Supernova.potentialSD = Math.log10(Math.floor(Math.pow(10,SDgainhelper)))
        }else{
            game.Supernova.potentialSD = SDgainhelper
        }
    }else{
        game.Supernova.potentialSD = -999
    }

    let canGenerateTimelines = true
    if(game.quadrants.quadrantIn == 7){
        let timelineSum = add_logs(game.Timelines.timeline1Amount,game.Timelines.timeline2Amount)
        timelineSum = add_logs(timelineSum,game.Timelines.timeline3Amount)
        let leftToDistr = sub_logs(Math.log(game.sacrifice.eff+1)*0.3+4,timelineSum)
        if(leftToDistr<0){canGenerateTimelines = false}
    }
    
    if(canGenerateTimelines && game.quadrants.quadrantIn !== 4){
        if(game.Timelines.generatingType.includes(1)){
            game.Timelines.timeline1Amount = add_logs(game.Timelines.timeline1Amount, game.Timelines.timelineSpeed-Math.log10(40)+offline_speed)
        }
        if(game.Timelines.generatingType.includes(2)){
            game.Timelines.timeline2Amount = add_logs(game.Timelines.timeline2Amount, game.Timelines.timelineSpeed-Math.log10(40)+offline_speed)
        }
        if(game.Timelines.generatingType.includes(3)){
            game.Timelines.timeline3Amount = add_logs(game.Timelines.timeline3Amount, game.Timelines.timelineSpeed-Math.log10(40)+offline_speed)
        }
    }

    let timelineStrength = 1
    if(game.SupernovaUpg.includes('7')){
        timelineStrength *= 1+((Math.sqrt(game.Supernova.timeInSupernova+1)-1)*0.55)
    }
    if(game.quadrants.quadrantIn == 7 && game.quadrants.quadrantInDiff == 1){
        timelineStrength *= 2
    }
    if(game.quadrants.quadrantIn == 7 && game.quadrants.quadrantInDiff > 1){
        timelineStrength *= 1.7
    }
    if(game.quadrants.completions[6]>0){
        timelineStrength *= 1.4
    }
    timelineStrength *= 1+0.01*game.items.inventory[15]*game.items.itemPowerRare

    let timeline1Power = 1
    let timeline2Power = 1
    let timeline3Power = 1
    timeline1Power *= 1+Math.pow(Math.max(game.Timelines.timeline1Amount,0)*17,0.7) * game.Timelines.upg1Level/100
    timeline2Power *= 1+(game.energy_dims.energy_dim1.level+game.energy_dims.energy_dim2.level+game.energy_dims.energy_dim3.level+game.energy_dims.energy_dim4.level+game.energy_dims.energy_dim5.level+game.energy_dims.energy_dim6.level+game.energy_dims.energy_dim7.level)/550 * game.Timelines.upg2Level/100
    timeline3Power *= 1+Math.pow(Math.max(game.Supernova.SupernovaPoints*3,0)*40,0.45) * game.Timelines.upg3Level / 100
    if(timeline3Power > 4){
        timeline3Power = 4+(timeline3Power-4)*0.3
    }

    game.Timelines.timeline1Boost1 = Math.max(game.Timelines.timeline1Amount,0)*(3*(1+Math.log(Math.max(1,game.Timelines.timeline1Amount+1))))*timelineStrength*timeline1Power
    game.Timelines.timeline1Boost2 = Math.max(game.Timelines.timeline1Amount,0)*20*timelineStrength*timeline1Power
    game.Timelines.timeline1Boost3 = Math.max(Math.floor(Math.max(game.Timelines.timeline1Amount-2,0)/Math.log10(7)),0)
    game.Timelines.timeline2Boost1 = Math.max(game.Timelines.timeline2Amount,0)*(2*(1+Math.log(Math.max(1,game.Timelines.timeline2Amount+1))/1.5))*timelineStrength*timeline2Power
    game.Timelines.timeline2Boost2 = Math.max(game.Timelines.timeline2Amount,0)*(0.5*(1+Math.log(Math.max(1,game.Timelines.timeline2Amount/3+1))))*timelineStrength*timeline2Power
    game.Timelines.timeline2Boost3 = Math.max(Math.floor(Math.max(game.Timelines.timeline2Amount-2.5,0)/Math.log10(7)),0)
    game.Timelines.timeline3Boost1 = Math.max(game.Timelines.timeline3Amount,0)*6*timelineStrength*timeline3Power
    game.Timelines.timeline3Boost2 = Math.max(game.Timelines.timeline3Amount,0)*0.02*timelineStrength*timeline3Power
    game.Timelines.timeline3Boost3 = Math.log(Math.max(game.Timelines.timeline3Amount+1,1))/5 * Math.sqrt(timelineStrength*timeline3Power) //collection speed shouldn't be too strong

    if(game.SupernovaUpg.includes('12')){
        game.Timelines.timelineSynergy = Math.sqrt(Math.max(0.4*(Math.max(game.Timelines.timeline1Amount,0)+Math.max(game.Timelines.timeline2Amount,0)+Math.max(game.Timelines.timeline3Amount,0))+1,1))-1
    }else{
        game.Timelines.timelineSynergy = 0
    }
    game.Timelines.timelineSpeed = game.Spacetime.upg5Eff
    game.Timelines.timelineSpeed += Math.log10(1.05)*game.items.inventory[11]*game.items.itemPowerUncommon
    game.Timelines.timelineSpeed += game.Timelines.timelineSynergy
    if(game.SupernovaUpg.includes('9')){
        game.Timelines.timelineSpeed += Math.log10(1.25)*game.SupernovaUpg.length
    }
    if(game.SupernovaUpg.includes('18')){
        game.Timelines.timelineSpeed += Math.log10(9)
        game.Timelines.timelineSpeed *= 1.1
    }
    if(game.quadrants.quadrantIn == 3){
        game.Timelines.timelineSpeed *= 0.1
    }

    game.globalAtomExp = 1
    game.globalEnergyExp = 1
    game.globalSacrificeExp = 1
    game.globalTickspeedExp = 1
    if(game.quadrants.quadrantIn == 2){
        game.globalAtomExp *= 0.5
    }
    if(game.quadrants.quadrantIn == 2 && game.quadrants.completions[1] > 0){
        game.globalEnergyExp *= 0.5
    }
    if(game.quadrants.quadrantIn == 6 && game.quadrants.quadrantInDiff == 1){
        game.globalAtomExp *= 0.4
    }
    if(game.quadrants.quadrantIn == 6 && game.quadrants.quadrantInDiff == 2){
        game.globalAtomExp *= 0.4
    }
    if(game.quadrants.quadrantIn == 6 && game.quadrants.quadrantInDiff == 3){
        game.globalAtomExp *= 0.3
    }
    if(game.quadrants.quadrantIn == 6 && game.quadrants.quadrantInDiff == 4){
        game.globalAtomExp *= 0.25
    }
    if(game.quadrants.quadrantIn == 5 && game.quadrants.completions[4]>0){
        game.globalEnergyExp *= 0.5
    }
    if(game.timeLeftIn3_3<0){
        game.globalAtomExp *= 0
        game.globalEnergyExp *= 0
        game.globalTickspeedExp *= 0
        game.quadrant3_3Exp = 0
    }
    if(game.quadrants.quadrantIn == 9){
        game.globalSacrificeExp *= 2
    }
    if(game.quadrants.completions[8]>0){
        game.globalSacrificeExp *= 1.35
    }

    game.Spacetime.universeSize += game.Spacetime.universeSpeed/40*Math.pow(10,offline_speed)
    if(game.Spacetime.universeSize<0){game.Spacetime.universeSize = 0}
    if(game.Spacetime.universeSize>game.Spacetime.universeCap){game.Spacetime.universeSize = game.Spacetime.universeCap}
    game.Spacetime.universeEff = Math.pow(3,Math.log10(Math.max(game.Spacetime.universeSize,0.0000001)))*20*game.Spacetime.upg3Eff
    if(game.Spacetime.universeEff>250){
        game.Spacetime.universeEff = 250+(game.Spacetime.universeEff-250)*0.35
    }
    game.Spacetime.universeSpeed = game.Spacetime.upg1Eff*game.Spacetime.galaxyEff
    game.Spacetime.universeSpeed *= 1+0.02*game.items.inventory[12]*game.items.itemPowerUncommon
    if(game.SupernovaUpg.includes('13')){
        game.Spacetime.universeSpeed *= 1.2+Math.max(game.Spacetime.timeSinceCondense/4,0)
    }
    if(game.SupernovaUpg.includes('16')){
        game.Spacetime.universeSpeed *= Math.max(Math.pow(game.atoms.amount/1000,0.55),1)
    }
    if(game.SupernovaUpg.includes('20')){
        game.Spacetime.universeSpeed *= 3
    }
    game.Spacetime.universeSpeed *= Math.pow(3,game.quadrants.completions[4])
    game.Spacetime.universeCap = 25*game.Spacetime.upg2Eff
    game.Spacetime.upg1Cost = game.Spacetime.upg1Level*Math.log10(3)+18+Math.log10(3)
    game.Spacetime.upg2Cost = game.Spacetime.upg2Level*Math.log10(2)
    game.Spacetime.upg3Cost = Math.pow(1.35,game.Spacetime.upg3Level)*(game.Spacetime.upg3Level*15)+30
    game.Spacetime.upg1Eff = Math.log10(1+game.Spacetime.upg1Level*0.02)+game.Spacetime.upg1Level*Math.log10(1.005)
    game.Spacetime.upg2Eff = 1+game.Spacetime.upg2Level*0.5*Math.pow(1.115,game.Spacetime.upg2Level)
    game.Spacetime.upg3Eff = 1+game.Spacetime.upg3Level*0.1
    if(game.Spacetime.universeSize>24.999){
        game.Spacetime.galaxyGain = (Math.log10(game.Spacetime.universeSize/99.99+0.75))/Math.log10(1.1)*Math.log10(2)+game.Spacetime.upg6Eff
    }else{
        game.Spacetime.galaxyGain = -9999
    }
    if(game.SupernovaUpg.includes('20')){
        game.Spacetime.galaxyGain += Math.log10(5)
    }
    game.Spacetime.galaxyGain += Math.log10(1.015)*game.items.inventory[13]*game.items.itemPowerUncommon
    if(game.Spacetime.galaxyGain>5){
        game.Spacetime.galaxyGain = 5+(game.Spacetime.galaxyGain-5)*0.5
    }
    game.Spacetime.galaxyEff = Math.max(Math.pow(Math.max((game.Spacetime.galaxies+0.75*1.65),1),0.85),1)
    game.Spacetime.upg4Cost = game.Spacetime.upg4Level*Math.log10(2+Math.floor(game.Spacetime.upg4Level/4))+Math.log10(4)
    game.Spacetime.upg5Cost = game.Spacetime.upg5Level*Math.log10(2+game.Spacetime.upg5Level)+Math.log10(15)
    game.Spacetime.upg6Cost = game.Spacetime.upg6Level*Math.log10(30)+300
    game.Spacetime.upg4Eff = Math.log10(2)*game.Spacetime.upg4Level
    game.Spacetime.upg5Eff = Math.log10(1.75)*game.Spacetime.upg5Level
    if(game.Spacetime.upg6Level>0){
        game.Spacetime.upg6Eff = Math.max(game.sacrifice.eff*0.1*(1+game.Spacetime.upg6Level/3),0)
    }else{
        game.Spacetime.upg6Eff = 0
    }

    game.items.collectingRate = 0-Math.log10(3)+offline_speed
    game.items.collectingRate += Math.log10(1.05)*game.items.inventory[17]*game.items.itemPowerRare
    game.items.collectingRate += game.items.level*game.items.levelBase
    game.items.collectingRate += game.expanse.eff3
    game.items.collectingRate += Math.log10(1.05)*game.items.upg1Level + Math.log10(1.05)*game.items.upg2Level + Math.log10(1.2)*game.items.upg3Level + Math.log10(1.1)*game.items.upg4Level + Math.log10(1.125)*game.items.upg5Level
    game.items.collectingRate += game.Timelines.timeline3Boost3
    if(game.SupernovaUpg.includes('10')){
        game.items.collectingRate += Math.log10(4)
    }
    if(game.quadrants.quadrantIn == 4){
        game.items.collectingRate *= 0.2
    }
    if(game.quadrants.quadrantIn == 3){
        game.items.collectingRate = -999
    }
    if(game.quadrants.quadrantIn == 1 && game.quadrants.completions[0]>2){
        game.items.collectingRate = -999
    }
    game.items.levelBase = Math.log10(1.05)

    game.items.bulk = 1+game.items.inventory[24]
    if(game.Supernova.totalSupernovaPoints > -1){
        game.items.nextItem = sub_logs(game.items.nextItem, game.items.collectingRate-Math.log10(40))
        if(game.items.nextItem<-2){
            game.items.xp = add_logs(game.items.xp,game.items.areaCollectionAmounts[game.items.areaSelected]+game.items.areaSelected*Math.log10(1.2)-1)

            game.items.nextItem = game.items.areaCollectionAmounts[game.items.areaSelected]
            if(game.items.areaSelected == game.items.bestArea){
                game.items.untilNextArea --
            }
            game.items.totalCollections[game.items.areaSelected] ++
            if(game.items.untilNextArea<1){
                game.items.untilNextArea = game.items.requirements[game.items.bestArea]
                game.items.bestArea ++
            }

            let yess = true
            let RNG = Math.round(Math.random()*100)
            RNG -= game.items.item8Chances[game.items.areaSelected]
            if(RNG<1 && yess){
                let id = game.items.item8Types[game.items.areaSelected]
                game.items.inventory[id] += game.items.bulk
                if(game.items.inventory[id] > game.items.caps[id]){game.items.inventory[id] = game.items.caps[id]}
                yess = false
                //obelisk
            }
            RNG -= game.items.item7Chances[game.items.areaSelected]
            if(RNG<1 && yess){
                let id = game.items.item7Types[game.items.areaSelected]
                game.items.inventory[id] += game.items.bulk
                if(game.items.inventory[id] > game.items.caps[id]){game.items.inventory[id] = game.items.caps[id]}
                yess = false
                //treasure
            }
            RNG -= game.items.item6Chances[game.items.areaSelected]
            if(RNG<1 && yess){
                let id = game.items.item6Types[game.items.areaSelected]
                game.items.inventory[id] += game.items.bulk
                if(game.items.inventory[id] > game.items.caps[id]){game.items.inventory[id] = game.items.caps[id]}
                yess = false
                //extraordinary
            }
            RNG -= game.items.item5Chances[game.items.areaSelected]
            if(RNG<1 && yess){
                let id = game.items.item5Types[game.items.areaSelected]
                game.items.inventory[id] += game.items.bulk
                if(game.items.inventory[id] > game.items.caps[id]){game.items.inventory[id] = game.items.caps[id]}
                yess = false
                //unique
            }
            RNG -= game.items.item4Chances[game.items.areaSelected]
            if(RNG<1 && yess){
                let id = game.items.item4Types[game.items.areaSelected]
                game.items.inventory[id] += game.items.bulk
                if(game.items.inventory[id] > game.items.caps[id]){game.items.inventory[id] = game.items.caps[id]}
                yess = false
                //advanced
            }
            RNG -= game.items.item3Chances[game.items.areaSelected]
            if(RNG<1 && yess){
                let id = game.items.item3Types[game.items.areaSelected]
                game.items.inventory[id] += game.items.bulk
                if(game.items.inventory[id] > game.items.caps[id]){game.items.inventory[id] = game.items.caps[id]}
                yess = false
                //advanced
            }
            RNG -= game.items.item2Chances[game.items.areaSelected]
            if(RNG<1 && yess){
                let id = game.items.item2Types[game.items.areaSelected]
                game.items.inventory[id] += game.items.bulk
                if(game.items.inventory[id] > game.items.caps[id]){game.items.inventory[id] = game.items.caps[id]}
                yess = false
                //basic
            }
            if(yess){
                let id = game.items.item1Types[game.items.areaSelected]
                game.items.inventory[id] += game.items.bulk
                if(game.items.inventory[id] > game.items.caps[id]){game.items.inventory[id] = game.items.caps[id]}
                //basic
            }
        }
    }
    if(game.quadrants.quadrantIn == 1){
        game.items.inventory[16] = 0
    }
    if(game.items.xp>game.items.levelReq-0.01){
        game.items.level ++
        game.items.xp = -999
    }
    game.items.levelReq = Math.log10(1.2)*game.items.level+Math.log10(15)
    game.items.caps[0] = 30
    game.items.caps[1] = 30
    game.items.caps[2] = 30
    game.items.caps[3] = 30
    game.items.caps[4] = 30
    game.items.caps[5] = 30
    game.items.caps[6] = 30
    game.items.caps[7] = 30
    game.items.caps[8] = 30
    game.items.caps[9] = 15
    game.items.caps[10] = 15
    game.items.caps[11] = 15
    game.items.caps[12] = 15
    game.items.caps[13] = 15
    game.items.caps[14] = 15
    game.items.caps[15] = 8
    game.items.caps[16] = 8
    game.items.caps[17] = 8
    game.items.caps[18] = 8
    game.items.caps[19] = 8
    game.items.caps[20] = 5
    game.items.caps[21] = 5
    game.items.caps[22] = 5
    game.items.caps[23] = 5
    game.items.caps[24] = 3
    game.items.caps[25] = 3
    game.items.caps[26] = 1
    game.items.caps[27] = 1
    game.items.itemPowerCommon = 1
    if(game.SupernovaUpg.includes('5')){
        game.items.itemPowerCommon *= 2
        game.items.caps[0] *= 10
        game.items.caps[1] *= 10
        game.items.caps[2] *= 10
        game.items.caps[3] *= 10
        game.items.caps[4] *= 10
        game.items.caps[5] *= 10
        game.items.caps[6] *= 10
        game.items.caps[7] *= 10
        game.items.caps[8] *= 10
    }
    if(game.SupernovaUpg.includes('11')){
        game.items.caps[9] *= 3
        game.items.caps[10] *= 3
        game.items.caps[11] *= 3
        game.items.caps[12] *= 3
        game.items.caps[13] *= 3
        game.items.caps[14] *= 3
        game.items.caps[15] *= 3
        game.items.caps[16] *= 3
        game.items.caps[17] *= 3
        game.items.caps[18] *= 3
        game.items.caps[19] *= 3
    }

    game.achievement_boost1 = game.achievements.length*Math.log10(1.02)
    if(game.achievement_boost1>Math.log10(1.75)){
        game.achievement_boost1 = Math.log10(1.75)+(game.achievement_boost1-Math.log10(1.75))*3
    }

    if(game.quadrants.quadrantIn == 8){
        if(game.quadrant3_3Exp<1){
            game.quadrant3_3Exp += 1/1200
        }
        if(game.timeLeftIn3_3>-0.1){game.timeLeftIn3_3 -= 1/40}
    }

    if(!game.sAchievements.includes(7) && game.atoms.atoms_s == 0 && game.atoms.amount>Math.log10(2000)){getAch(7,false)}
    if(game.atoms.amount>game.stats.bestPoints){game.stats.bestPoints = game.atoms.amount}
    if(game.expanse.amount>game.expanse.best){game.expanse.best = game.expanse.amount}
    if(game.stars.amount>game.stars.best){game.stars.best = game.stars.amount}
    if(game.Supernova.SupernovaPoints>game.Supernova.bestSupernovaPoints){game.Supernova.bestSupernovaPoints = game.Supernova.SupernovaPoints}
    if(game.Spacetime.universeSize>game.Spacetime.bestSize){game.Spacetime.bestSize = game.Spacetime.universeSize}


    (game.energy_dims.tickspeed.amount*Math.log10(20)+3)*(1+Math.max(0,game.energy_dims.tickspeed.amount-200)*0.01)*(1+Math.max(0,game.energy_dims.tickspeed.amount-1000)*0.05)

    for (let i = 1; i <= 8; i++) {
        if (dom[`auto_thingCheck${i}`].checked && (game.quadrants.quadrantIn == 0 || game.SupernovaUpg.includes('8Q'))) {
            game.Automation[`autoOn${i}`] = true;
            game.Automation[`autoLeftToBuy${i}`] -= 1 / 40 * Math.pow(10,offline_speed);
            if (game.Automation[`autoLeftToBuy${i}`] < 0) {
                game.Automation[`autoLeftToBuy${i}`] = game.Automation[`autoInterval${i}`];
                let C = game.atoms.amount;
                if (game.Automation[`autoMode${i}`] === 1) C++;
                let S = game.sacrifice.eff;
                let P = game.Supernova.postSNscaling;
                let I = Math.log10(1.25)*game.items.inventory[18]*game.items.itemPowerRare
                const baseSub = [1, 2, 4, 8, 14, 20, 25, 3];
                const div = [2, 4, 6, 8, 10, 12, 17, Math.log10(20)];
                const softcap = [308, 154, 103, 76, 60, 50, 42, 471];
                const expanseReq = [0, 0, 0, 1, 2, 3, 4, 0];
                const baseCostOffset = [616, 616, 618, 616, 620, 620, 620, 618];

                let base = baseSub[i - 1];
                let divisor = div[i - 1];
                let cap = softcap[i - 1];
                let expReq = expanseReq[i - 1];
                let costOffset = baseCostOffset[i - 1];

                let costCap = Math.max(-1, Math.ceil((C + S + I - base - 1) / divisor));
                let scaled = Math.ceil((C + S + I - 2 - costOffset) / divisor / P + cap);
                if(i>7){
                    costCap = Math.max(-1, Math.ceil((C + S + I - base) / divisor));
                }
                if ((i >= 4) && game.expanse.amount < expReq) costCap = 0;

                let level
                if(i<8){level = game.energy_dims[`energy_dim${i}`].level}else{
                    level = game.energy_dims.tickspeed.amount}

                let canBuy = false
                let didd
                if(i<8){didd = 10}else{didd = 1}
                if(costCap < cap){
                    if(level / didd < costCap){canBuy = true}
                }else{
                    if(level / didd < scaled){canBuy = true}
                }

                if (costCap < cap) {
                    if (i === 7 && i<8 && canBuy) {
                        game.energy_dims[`energy_dim${i}`].amount = Math.log10(game.energy_dims[`energy_dim${i}`].level);
                    } else if(i<8 && canBuy) {
                        if((game.Automation[`autoMode${i}`] == 0) && (game.energy_dims[`energy_dim${i}`].level<costCap*10)){
                            game.energy_dims[`energy_dim${i}`].amount = add_logs(game.energy_dims[`energy_dim${i}`].amount, 1);
                        }else if((game.Automation[`autoMode${i}`] == 1) && (game.energy_dims[`energy_dim${i}`].level<costCap*10)){
                            game.energy_dims[`energy_dim${i}`].amount = add_logs(game.energy_dims[`energy_dim${i}`].amount, 0);
                        }else if((game.Automation[`autoMode${i}`] == 2) && (game.energy_dims[`energy_dim${i}`].level<costCap*10)){
                            game.energy_dims[`energy_dim${i}`].amount = add_logs(game.energy_dims[`energy_dim${i}`].amount, Math.log10(costCap));
                        }
                    }

                    if(i<8){
                        if (game.Automation[`autoMode${i}`] === 0 && level / 10 < costCap) {
                            game.energy_dims[`energy_dim${i}`].level += 10;
                        } else if (game.Automation[`autoMode${i}`] === 1 && level / 10 < costCap) {
                            game.energy_dims[`energy_dim${i}`].level += 1;
                        } else if(canBuy) {
                            game.energy_dims[`energy_dim${i}`].level = 10 * costCap + 10;
                        }
                    } else{
                        if (game.Automation[`autoMode${i}`] === 0 && level < costCap) {
                           game.energy_dims.tickspeed.amount += 10;
                        } else if (game.Automation[`autoMode${i}`] === 1 && level < costCap) {
                            game.energy_dims.tickspeed.amount += 1;
                        } else if(canBuy) {
                            game.energy_dims.tickspeed.amount = costCap;
                        }
                    }
                } else {
                    if(i<8 && canBuy) {
                        if((game.Automation[`autoMode${i}`] == 0) && (game.energy_dims[`energy_dim${i}`].level<scaled*10)){
                            game.energy_dims[`energy_dim${i}`].amount = add_logs(game.energy_dims[`energy_dim${i}`].amount, 1);
                        }else if((game.Automation[`autoMode${i}`] == 1) && (game.energy_dims[`energy_dim${i}`].level<scaled*10)){
                            game.energy_dims[`energy_dim${i}`].amount = add_logs(game.energy_dims[`energy_dim${i}`].amount, 0);
                        }else if((game.Automation[`autoMode${i}`] == 2) && (game.energy_dims[`energy_dim${i}`].level<scaled*10)){
                            game.energy_dims[`energy_dim${i}`].amount = add_logs(game.energy_dims[`energy_dim${i}`].amount, Math.log10(scaled));
                        }
                    }

                    if(i<8){
                        if (game.Automation[`autoMode${i}`] === 0 && level / 10 < scaled) {
                            game.energy_dims[`energy_dim${i}`].level += 10;
                        } else if (game.Automation[`autoMode${i}`] === 1 && level / 10 < scaled) {
                            game.energy_dims[`energy_dim${i}`].level += 1;
                        } else if(canBuy) {
                            game.energy_dims[`energy_dim${i}`].level = Math.max(cap * 10, scaled * 10);
                        }
                    } else {
                        if (game.Automation[`autoMode${i}`] === 0 && level < scaled) {
                            game.energy_dims.tickspeed.amount += 10;
                        } else if (game.Automation[`autoMode${i}`] === 1 && level < scaled) {
                            game.energy_dims.tickspeed.amount += 1;
                        } else if(canBuy) {
                            game.energy_dims.tickspeed.amount = Math.max(cap, scaled);
                        }
                    }

                    if (i === 7 && i<8 && canBuy) {
                        game.energy_dims[`energy_dim${i}`].amount = Math.log10(game.energy_dims[`energy_dim${i}`].level);
                    }
                }
            }
        } else {
            game.Automation[`autoOn${i}`] = false;
        }
}

if(dom[`auto_thingCheck${9}`].checked && (game.quadrants.quadrantIn == 0 || game.SupernovaUpg.includes('8Q'))){
        game.Automation.autoOn9 = true;
        game.Automation.autoLeftToBuy9 -= 1/40
        if(game.Automation.autoLeftToBuy9<0){
            game.Automation.autoLeftToBuy9 = game.Automation.autoInterval9
            let level
            let dim7 = game.energy_dims.energy_dim7.level
            if(game.expanse.amount==0){
                level = Math.min(Math.floor(game.energy_dims.energy_dim3.level-20/20),1)}
            else if(game.expanse.amount==1){
                level = Math.min(Math.floor(game.energy_dims.energy_dim4.level-20/20),1)+1}
            else if(game.expanse.amount==2){
                level = Math.min(Math.floor(game.energy_dims.energy_dim5.level-20/20),1)+2}
            else if(game.expanse.amount==3){
                level = Math.min(Math.floor(game.energy_dims.energy_dim6.level-20/20),1)+3}
            else{
                if(game.SupernovaUpg.includes('10')){
                    level = Math.floor((10+Math.sqrt(10*dim7-50))/5)+1
                }else{
                    level = Math.floor((5+Math.sqrt(0.8*dim7-7))/2)
                }
            }
            if (game.expanse.amount < level) {
                buyExpanse()
            }
        }
    }else{game.Automation.autoOn9 = false;}

    if(dom[`auto_thingCheck${10}`].checked && (game.quadrants.quadrantIn == 0 || game.SupernovaUpg.includes('8Q'))){
        game.Automation.autoOn10 = true;
        game.Automation.autoLeftToBuy10 -= 1/40
        if(game.Automation.autoLeftToBuy10<0){
            game.Automation.autoLeftToBuy10 = game.Automation.autoInterval10
            let level
            let g = game.energy_dims.energy_dim7.level
            if(g<40){level = 0}else if(g<60){level = 1}else if(g<85){level = 2}else{
                level = Math.floor((-10+Math.sqrt(40*(game.energy_dims.energy_dim7.level-30)-300))/20)+1
            }
            if (game.stars.amount < level) {
                buyStar()
            }
        }
    }else{game.Automation.autoOn10 = false}
}//tryna cheat?

let UIrateSlider = document.getElementById('UIrateSlider');
UIrateSlider.addEventListener('input', function() {
    game.settings.UIrate = parseInt(UIrateSlider.value);
    changeUIupdateRate(game.settings.UIrate);
    if(game.settings.UIrate == 500 &&! game.sAchievements.includes(5)){getAch(5,false)}
});
let bgEffCheckbox = document.getElementById('bgEffCheckbox');
bgEffCheckbox.addEventListener('input', function() {
    game.settings.bgEff = bgEffCheckbox.checked
});
let supernovaConfCheckbox = document.getElementById('supernovaConfCheckbox');
supernovaConfCheckbox.addEventListener('input', function() {
    game.settings.supernovaConf = supernovaConfCheckbox.checked
});
let newsSpeedSlider = document.getElementById('newsSpeedSlider');
newsSpeedSlider.addEventListener('input', function() {
    game.settings.newsSpeed = parseInt(newsSpeedSlider.value)/100;
});
let precisionSlider = document.getElementById('precisionSlider');
precisionSlider.addEventListener('input', function() {
    game.settings.decimalPlaces = parseInt(precisionSlider.value);
});
let offlineTicksSlider = document.getElementById('offlineTicksSlider');
offlineTicksSlider.addEventListener('input', function() {
    game.settings.offlineTicks = parseInt(offlineTicksSlider.value);
});

function enterQuadrant(){
    let quadrantCompleted = false
                if(game.quadrants.quadrantIn == 1){
                    if(game.quadrants.completions[0]==0){
                        if(game.atoms.amount>1620){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[0]==1){
                        if(game.atoms.amount>2050){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[0]==2){
                        if(game.atoms.amount>5000){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[0]==3){
                        if(game.atoms.amount>20000){
                            quadrantCompleted = true
                        }
                    }
                }else if(game.quadrants.quadrantIn == 2){
                    if(game.quadrants.completions[1]==0){
                        if(game.atoms.amount>2025){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[1]==1){
                        if(game.atoms.amount>5100){
                            quadrantCompleted = true
                        }
                    }
                }else if(game.quadrants.quadrantIn == 3){
                    if(game.quadrants.completions[2]==0){
                        if(game.atoms.amount>2500){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[2]==1){
                        if(game.atoms.amount>100000){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[2]==2){
                        if(game.atoms.amount>10000000){
                            quadrantCompleted = true
                        }
                    }
                }else if(game.quadrants.quadrantIn == 4){
                    if(game.quadrants.completions[3]==0){
                        if(game.atoms.amount>1750){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[3]==1){
                        if(game.atoms.amount>14000){
                            quadrantCompleted = true
                        }
                    }
                }else if(game.quadrants.quadrantIn == 5){
                    if(game.quadrants.completions[4]==0){
                        if(game.atoms.amount>25000){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[4]==1){
                        if(game.atoms.amount>78000){
                            quadrantCompleted = true
                        }
                    }
                }


    let q = game.quadrants.quadrantSelected
    let comps = game.quadrants.completions[game.quadrants.quadrantSelected]

    if(q == 8 && comps == 1){
        game.timeLeftIn3_3 = 15*60
    }
    if(q == 8 && comps == 2){
        game.timeLeftIn3_3 = 12*60
    }
    if(q == 8 && comps == 3){
        game.timeLeftIn3_3 = 9*60
    }
    if(q == 8 && comps == 4){
        game.timeLeftIn3_3 = 6*60
    }
    if(game.quadrants.quadrantIn == 0){
        game.quadrants.quadrantIn = game.quadrants.quadrantSelected
    }else{
        game.quadrants.quadrantIn = 0
        if(quadrantCompleted){
            getAch(10,false)
        }
    }
    openQuadrant(game.quadrants.quadrantSelected)

    game.expanse.amount = 0
    game.expanse.eff1 = 0
    game.expanse.eff2 = 0
    game.expanse.eff3 = 0
    game.stars.amount = 0
    game.atoms.amount = -999
    game.atoms.atoms_s = -999
    game.energy.amount = 0
    game.energy.eff = 0
    game.energy.energy_s = -999
    game.energy_dims.energy_dim1.amount = -1.0e300
    game.energy_dims.energy_dim1.level = 0
    game.energy_dims.energy_dim2.amount = -1.0e300
    game.energy_dims.energy_dim2.level = 0
    game.energy_dims.energy_dim3.amount = -1.0e300
    game.energy_dims.energy_dim3.level = 0
    game.energy_dims.energy_dim4.amount = -1.0e300
    game.energy_dims.energy_dim4.level = 0
    game.energy_dims.energy_dim5.amount = -1.0e300
    game.energy_dims.energy_dim5.level = 0
    game.energy_dims.energy_dim6.amount = -1.0e300
    game.energy_dims.energy_dim6.level = 0
    game.energy_dims.energy_dim7.amount = -1.0e300
    game.energy_dims.energy_dim7.level = 0
    game.sacrifice.eff = 0
    game.sacrifice.potential = 0
    game.energy_dims.tickspeed.amount = 0
    game.Supernova.timeInSupernova = 0
    game.Timelines.timeline1Amount = -999
    game.Timelines.timeline2Amount = -999
    game.Timelines.timeline3Amount = -999
    game.Timelines.timeline1Boost1 = 0
    game.Timelines.timeline1Boost2 = 0
    game.Timelines.timeline1Boost3 = 0
    game.Timelines.timeline2Boost1 = 0
    game.Timelines.timeline2Boost2 = 0
    game.Timelines.timeline2Boost3 = 0
    game.Timelines.timeline3Boost1 = 0
    game.Timelines.timeline3Boost2 = 0
    game.Timelines.timeline3Boost3 = 0
    if(!game.Timelines.lock1){game.Timelines.unlocked1 = false}
    if(!game.Timelines.lock2){game.Timelines.unlocked2 = false}
    if(!game.Timelines.lock3){game.Timelines.unlocked3 = false}
    if(game.Timelines.lock1 && game.Timelines.generatingType.includes(1)){
        //lul
    }else if(game.Timelines.lock2 && game.Timelines.generatingType.includes(2)){
        //lul
    }else if(game.Timelines.lock3 && game.Timelines.generatingType.includes(3)){

    }else{game.Timelines.generatingType = []}
    game.items.inventory[0] = 0
    game.items.inventory[1] = 0
    game.items.inventory[2] = 0
    game.items.inventory[3] = 0
    game.items.inventory[4] = 0
    game.items.inventory[5] = 0
    game.items.inventory[6] = 0
    game.items.inventory[7] = 0
    game.items.inventory[8] = 0
    game.items.inventory[9] = 0
    game.items.inventory[10] = 0
    game.items.inventory[11] = 0
    game.items.inventory[12] = 0
    game.items.inventory[13] = 0
    game.items.inventory[14] = 0
    game.items.inventory[15] = 0
    game.items.inventory[16] = 0
    game.items.inventory[17] = 0
    game.items.inventory[18] = 0
    game.items.inventory[19] = 0
    game.items.inventory[20] = 0
    game.items.inventory[21] = 0
    game.items.inventory[22] = 0
    game.items.inventory[23] = 0
}


function supernova(){
    let quadrantCompleted = false
            if(game.quadrants.quadrantIn !== 0){
                if(game.quadrants.quadrantIn == 1){
                    if(game.quadrants.completions[0]==0){
                        if(game.atoms.amount>1620){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[0]==1){
                        if(game.atoms.amount>2050){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[0]==2){
                        if(game.atoms.amount>5000){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[0]==3){
                        if(game.atoms.amount>20000){
                            quadrantCompleted = true
                        }
                    }
                }else if(game.quadrants.quadrantIn == 2){
                    if(game.quadrants.completions[1]==0){
                        if(game.atoms.amount>2025){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[1]==1){
                        if(game.atoms.amount>5100){
                            quadrantCompleted = true
                        }
                    }
                }else if(game.quadrants.quadrantIn == 3){
                    if(game.quadrants.completions[2]==0){
                        if(game.atoms.amount>2500){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[2]==1){
                        if(game.atoms.amount>100000){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[2]==2){
                        if(game.atoms.amount>10000000){
                            quadrantCompleted = true
                        }
                    }
                }else if(game.quadrants.quadrantIn == 4){
                    if(game.quadrants.completions[3]==0){
                        if(game.atoms.amount>1750){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[3]==1){
                        if(game.atoms.amount>14000){
                            quadrantCompleted = true
                        }
                    }
                }else if(game.quadrants.quadrantIn == 5){
                    if(game.quadrants.completions[4]==0){
                        if(game.atoms.amount>25000){
                            quadrantCompleted = true
                        }
                    }else if(game.quadrants.completions[4]==1){
                        if(game.atoms.amount>78000){
                            quadrantCompleted = true
                        }
                    }
                }
            }else{quadrantCompleted = true}

    if(game.supernovaWarning || game.settings.supernovaConf == false){
        game.supernovaWarning = false
        if(quadrantCompleted){
            game.atoms.amount = -999
            game.expanse.amount = 0
            game.expanse.eff1 = 0
            game.expanse.eff2 = 0
            game.expanse.eff3 = 0
            game.stars.amount = 0
            game.energy.amount = 0
            game.atoms.atoms_s = -999
            game.energy.eff = 0
            game.energy.energy_s = -999
            game.energy_dims.energy_dim1.amount = -1.0e300
            game.energy_dims.energy_dim1.level = 0
            game.energy_dims.energy_dim2.amount = -1.0e300
            game.energy_dims.energy_dim2.level = 0
            game.energy_dims.energy_dim3.amount = -1.0e300
            game.energy_dims.energy_dim3.level = 0
            game.energy_dims.energy_dim4.amount = -1.0e300
            game.energy_dims.energy_dim4.level = 0
            game.energy_dims.energy_dim5.amount = -1.0e300
            game.energy_dims.energy_dim5.level = 0
            game.energy_dims.energy_dim6.amount = -1.0e300
            game.energy_dims.energy_dim6.level = 0
            game.energy_dims.energy_dim7.amount = -1.0e300
            game.energy_dims.energy_dim7.level = 0
            game.sacrifice.eff = 0
            game.sacrifice.potential = 0
            game.energy_dims.tickspeed.amount = 0
            game.Supernova.supernovas ++
            game.Supernova.SupernovaPoints = add_logs(game.Supernova.SupernovaPoints,game.Supernova.potentialSD)
            game.Supernova.totalSupernovaPoints = add_logs(game.Supernova.totalSupernovaPoints,game.Supernova.potentialSD)

            if(game.Timelines.generatingType.length > 0 && game.Timelines.lock1 == false && game.Timelines.lock2 == false && game.Timelines.lock3 == false && game.SupernovaUpg.includes('1U')){
                game.stats.supernovasWithoutLocks ++
                if(game.stats.supernovasWithoutLocks>4){
                    getAch(9,false)
                }
            }
            if(!game.Timelines.lock1){game.Timelines.unlocked1 = false}
            if(!game.Timelines.lock2){game.Timelines.unlocked2 = false}
            if(!game.Timelines.lock3){game.Timelines.unlocked3 = false}
            if(game.Timelines.lock1 && game.Timelines.generatingType.includes(1)){
                //lul
            }else if(game.Timelines.lock2 && game.Timelines.generatingType.includes(2)){
                //lul
            }else if(game.Timelines.lock3 && game.Timelines.generatingType.includes(3)){

            }else{game.Timelines.generatingType = []}
            game.records.Supernova.unshift(format(game.Supernova.timeInSupernova,false))
            game.records.Supernova2.unshift(format(0,true))
            game.records.Supernova3.unshift(format(game.Supernova.potentialSD-game.Supernova.timeInSupernova+Math.log10(60)))
            if(!game.achievements.includes(18)){
                getAch(18,true)
            }
            if(game.Supernova.supernovas>1){
                getAch(19,true)
            }
            if(game.Supernova.timeInSupernova<Math.log10(7*60)){
                getAch(23,true)
            }
            if(game.Supernova.timeInSupernova<Math.log10(120)){
                getAch(26,true)
            }
            if(game.Supernova.potentialSD>5 && game.stars.amount<2 && game.expanse.amount<5 && game.Timelines.timeline1Amount < -1 && game.Timelines.timeline2Amount < -1 && game.Timelines.timeline3Amount < -1){
                let can = true
                for(let i = 0; i<21; i++){
                    if(game.items.inventory[i] > 0){
                        can = false
                    }
                }
                if(can){
                    getAch(41,true)
                }
            }
            if(game.Supernova.potentialSD>21){
                getAch(45,true)
            }
            if(game.achievements.includes(18)) {
                game.atoms.amount = Math.log10(300)
            }
            if(game.SupernovaUpg.includes('8Q')) {
                game.atoms.amount = 20
            }
            if(game.records.length>10){game.records.Supernova.pop();game.records.Supernova2.pop();game.records.Supernova3.pop()}
            for(let i = 0;i<10;i++){
                if(game.records.Supernova[i]!==undefined){
                    document.getElementById('record'+i).innerHTML = '#'+(i+1)+' | '+formatTime(game.records.Supernova[i],true)+' | +'+game.records.Supernova2[i]+' SD | '+game.records.Supernova3[i]+' SD/min'
                }else{
                    document.getElementById('record'+i).innerHTML = '---'
                }
            }
            game.Supernova.timeInSupernova = 0
            if(game.SupernovaUpg.includes('0Q')){
                game.expanse.amount += 2
            }
            if(game.SupernovaUpg.includes('1Q')){
                game.expanse.amount += 2
            }
            if(game.SupernovaUpg.includes('3Q')){
                game.stars.amount += 1
            }
            game.Timelines.timeline1Amount = -999
            game.Timelines.timeline2Amount = -999
            game.Timelines.timeline3Amount = -999
            game.Timelines.timeline1Boost1 = 0
            game.Timelines.timeline1Boost2 = 0
            game.Timelines.timeline1Boost3 = 0
            game.Timelines.timeline2Boost1 = 0
            game.Timelines.timeline2Boost2 = 0
            game.Timelines.timeline2Boost3 = 0
            game.Timelines.timeline3Boost1 = 0
            game.Timelines.timeline3Boost2 = 0
            game.Timelines.timeline3Boost3 = 0

            game.items.inventory[0] = 0
            game.items.inventory[1] = 0
            game.items.inventory[2] = 0
            game.items.inventory[3] = 0
            game.items.inventory[4] = 0
            game.items.inventory[5] = 0
            game.items.inventory[6] = 0
            game.items.inventory[7] = 0
            game.items.inventory[8] = 0
            game.items.inventory[9] = 0
            game.items.inventory[10] = 0
            game.items.inventory[11] = 0
            game.items.inventory[12] = 0
            game.items.inventory[13] = 0
            game.items.inventory[14] = 0
            game.items.inventory[15] = 0
            game.items.inventory[16] = 0
            game.items.inventory[17] = 0
            game.items.inventory[18] = 0
            game.items.inventory[19] = 0
            game.items.inventory[20] = 0
            game.items.inventory[21] = 0
            game.items.inventory[22] = 0
            game.items.inventory[23] = 0

            game.quadrants.completions[game.quadrants.quadrantIn-1] ++
            game.quadrants.quadrantIn = 0
        }
    }else{
        if(quadrantCompleted){
            if(game.Supernova.totalSupernovaPoints < -1){
                game.supernovaWarning = true;popup('Are you sure?','This will reset all previous progress!','','Yes','No')
            }else{
                game.supernovaWarning = true;popup('Are you sure?','This will reset all previous progress!','You lose all pre-legendary items (yellow).','Yes','No')
            }
        }
    }
}

function forceSupernova() {
            game.atoms.amount = -999
            game.expanse.amount = 0
            game.expanse.eff1 = 0
            game.expanse.eff2 = 0
            game.expanse.eff3 = 0
            game.stars.amount = 0
            game.energy.amount = 0
            game.atoms.atoms_s = -999
            game.energy.eff = 0
            game.energy.energy_s = -999
            game.energy_dims.energy_dim1.amount = -1.0e300
            game.energy_dims.energy_dim1.level = 0
            game.energy_dims.energy_dim2.amount = -1.0e300
            game.energy_dims.energy_dim2.level = 0
            game.energy_dims.energy_dim3.amount = -1.0e300
            game.energy_dims.energy_dim3.level = 0
            game.energy_dims.energy_dim4.amount = -1.0e300
            game.energy_dims.energy_dim4.level = 0
            game.energy_dims.energy_dim5.amount = -1.0e300
            game.energy_dims.energy_dim5.level = 0
            game.energy_dims.energy_dim6.amount = -1.0e300
            game.energy_dims.energy_dim6.level = 0
            game.energy_dims.energy_dim7.amount = -1.0e300
            game.energy_dims.energy_dim7.level = 0
            game.sacrifice.eff = 0
            game.sacrifice.potential = 0
            game.energy_dims.tickspeed.amount = 0
            game.items.inventory[0] = 0
            game.items.inventory[1] = 0
            game.items.inventory[2] = 0
            game.items.inventory[3] = 0
            game.items.inventory[4] = 0
            game.items.inventory[5] = 0
            game.items.inventory[6] = 0
            game.items.inventory[7] = 0
            game.items.inventory[8] = 0
            game.items.inventory[9] = 0
            game.items.inventory[10] = 0
            game.items.inventory[11] = 0
            game.items.inventory[12] = 0
            game.items.inventory[13] = 0
            game.items.inventory[14] = 0
            game.items.inventory[15] = 0
            game.items.inventory[16] = 0
            game.items.inventory[17] = 0
            game.items.inventory[18] = 0
            game.items.inventory[19] = 0
            game.items.inventory[20] = 0
            game.items.inventory[21] = 0
            game.items.inventory[22] = 0
            game.items.inventory[23] = 0
            if(!game.Timelines.lock1){game.Timelines.unlocked1 = false}
            if(!game.Timelines.lock2){game.Timelines.unlocked2 = false}
            if(!game.Timelines.lock3){game.Timelines.unlocked3 = false}
            if(game.Timelines.lock1 && game.Timelines.generatingType.includes(1)){
                //lul
            }else if(game.Timelines.lock2 && game.Timelines.generatingType.includes(2)){
                //lul
            }else if(game.Timelines.lock3 && game.Timelines.generatingType.includes(3)){

            }else{game.Timelines.generatingType = []}
            if(game.achievements.includes(18)) {
                game.atoms.amount = Math.log10(300)
            }
            if(game.SupernovaUpg.includes('8Q')) {
                game.atoms.amount = 20
            }
            game.Supernova.timeInSupernova = 0
            if(game.SupernovaUpg.includes('0Q')){
                game.expanse.amount += 2
            }
            if(game.SupernovaUpg.includes('1Q')){
                game.expanse.amount += 2
            }
            if(game.SupernovaUpg.includes('3Q')){
                game.stars.amount += 1
            }
            game.Timelines.timeline1Amount = -999
            game.Timelines.timeline2Amount = -999
            game.Timelines.timeline3Amount = -999
            game.Timelines.timeline1Boost1 = 0
            game.Timelines.timeline1Boost2 = 0
            game.Timelines.timeline1Boost3 = 0
            game.Timelines.timeline2Boost1 = 0
            game.Timelines.timeline2Boost2 = 0
            game.Timelines.timeline2Boost3 = 0
            game.Timelines.timeline3Boost1 = 0
            game.Timelines.timeline3Boost2 = 0
            game.Timelines.timeline3Boost3 = 0
}

function buyExpanse(){
    let enDim = game.energy_dims['energy_dim'+game.expanse.cost_type]
        if(enDim.level>game.expanse.cost-1){
            game.expanse.amount ++
            if(!game.SupernovaUpg.includes('7Q')){
                game.atoms.amount = -999
                game.atoms.atoms_s = -999
                if(game.quadrants.quadrantIn !== 9){
                    game.energy.amount = 0
                    game.energy.eff = 0
                    game.energy.energy_s = -999
                }
                game.energy_dims.energy_dim1.amount = -1.0e300
                game.energy_dims.energy_dim1.level = 0
                game.energy_dims.energy_dim2.amount = -1.0e300
                game.energy_dims.energy_dim2.level = 0
                game.energy_dims.energy_dim3.amount = -1.0e300
                game.energy_dims.energy_dim3.level = 0
                game.energy_dims.energy_dim4.amount = -1.0e300
                game.energy_dims.energy_dim4.level = 0
                game.energy_dims.energy_dim5.amount = -1.0e300
                game.energy_dims.energy_dim5.level = 0
                game.energy_dims.energy_dim6.amount = -1.0e300
                game.energy_dims.energy_dim6.level = 0
                game.energy_dims.energy_dim7.amount = -1.0e300
                game.energy_dims.energy_dim7.level = 0
                game.energy_dims.tickspeed.amount = 0
                game.energy_dims.tickspeed.eff = 0
                game.expanse.eff2 = 0
                game.expanse.eff1 = 0
                if(game.achievements.includes(18)) {
                    game.atoms.amount = Math.log10(300)
                }
                if(game.SupernovaUpg.includes('8Q')) {
                    game.atoms.amount = 20
                }
                if(game.quadrants.quadrantIn == 8){
                    game.quadrant3_3Exp = 0
                }
            }
        }
}

function buyStar()
{
            if(game.energy_dims.energy_dim7.level>game.stars.cost-1){
                game.stars.amount ++
                game.atoms.amount = -999
                game.atoms.atoms_s = -999
                if(game.quadrants.quadrantIn !== 9){
                    game.energy.amount = 0
                    game.energy.eff = 0
                    game.energy.energy_s = -999
                }
                game.energy_dims.energy_dim1.amount = -1.0e300
                game.energy_dims.energy_dim1.level = 0
                game.energy_dims.energy_dim2.amount = -1.0e300
                game.energy_dims.energy_dim2.level = 0
                game.energy_dims.energy_dim3.amount = -1.0e300
                game.energy_dims.energy_dim3.level = 0
                game.energy_dims.energy_dim4.amount = -1.0e300
                game.energy_dims.energy_dim4.level = 0
                game.energy_dims.energy_dim5.amount = -1.0e300
                game.energy_dims.energy_dim5.level = 0
                game.energy_dims.energy_dim6.amount = -1.0e300
                game.energy_dims.energy_dim6.level = 0
                game.energy_dims.energy_dim7.amount = -1.0e300
                game.energy_dims.energy_dim7.level = 0
                game.expanse.amount = 0
                game.expanse.eff1 = 0
                game.expanse.eff2 = 0
                game.expanse.eff3 = 0
                game.energy_dims.tickspeed.amount = 0
                game.energy_dims.tickspeed.eff = 0
                if(!game.SupernovaUpg.includes('6Q')){
                    game.sacrifice.eff = 0
                }
                game.sacrifice.potential = 0
                if(game.achievements.includes(18)) {
                    game.atoms.amount = Math.log10(300)
                }
                if(game.SupernovaUpg.includes('2Q')) {
                    game.expanse.amount += 2
                }
                if(game.SupernovaUpg.includes('8Q')) {
                    game.atoms.amount = 20
                }
                if(game.quadrants.quadrantIn == 8){
                    game.quadrant3_3Exp = 0
                }
                if(game.SupernovaUpg.includes('5Q')){
                    game.expanse.amount += 2
                }
            }
}

function galaxyReset(){
    if(game.Spacetime.universeSize>25){
        game.Spacetime.universeSize = 0
        game.Spacetime.universeEff = 0
        game.Spacetime.galaxies = add_logs(game.Spacetime.galaxies,game.Spacetime.galaxyGain)
    }

}


// --- Visibility catch-up (no deltas, preserves 40 TPS) ---
let _hiddenAt = null;

function _markHidden() {
  if (_hiddenAt == null) _hiddenAt = Date.now();
}

function _catchUpNow() {
  if (_hiddenAt == null) return;

  const elapsed = Date.now() - _hiddenAt;
  _hiddenAt = null;
  if (elapsed < 50) return; // ignore tiny blips

  const msPerTick = 25; // 40 ticks/s
  const a = elapsed / msPerTick;

  // Reuse your offline model & cap, just like load-time offline calc
  let ticks;
  const prevOffline = offline_speed;
  if (a < game.settings.offlineTicks) {
    ticks = Math.floor(a);
    offline_speed = 0;
  } else {
    ticks = game.settings.offlineTicks;
    offline_speed = Math.log10(Math.floor(a) / game.settings.offlineTicks);
  }

  // Run in chunks so the UI doesn’t freeze
  const BATCH = 2000;
  while (ticks > 0) {
    const n = Math.min(BATCH, ticks);
    for (let i = 0; i < n; i++) gameTick();
    ticks -= n;
  }

  offline_speed = prevOffline;

  // Bring the UI up-to-date immediately
  try { UItick(); } catch {}
}

// Hidden/visible inside an iframe, tab switches, etc.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') _markHidden();
  else _catchUpNow();
});
window.addEventListener('blur', _markHidden);
window.addEventListener('focus', _catchUpNow);

