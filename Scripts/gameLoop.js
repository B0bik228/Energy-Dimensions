function UItick() //good luck
{
    let tickermsg = tickerMessagee
    if(dom.tickerMessage.textContent !== tickermsg){
        dom.tickerMessage.textContent = tickermsg
    }

    let tcrkX = tickerX+'%'
    if(dom.tickerMessage.style.left !== tcrkX){
        dom.tickerMessage.style.left = tcrkX
    }

    if(tickerX<(tickerMessagee == 'oops sorry wrong direction'?(100+tickerMessagee.length*1.3):(0-tickerMessagee.length*1.3)) && game.settings.topBar == 0){
        tickerMessagee = newsTickers[Math.floor(Math.random()*newsTickers.length)]
        tickerX = tickerMessagee == 'oops sorry wrong direction'?-20:100
        game.stats.tickers_seen ++
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
        tickerMessagee = Math.floor(game.atoms.amount/6.165*100)/100+'% to Collapse'
        dom.tickerMessage.style.left = 0+'%'
    }else if(game.settings.topBar == 2){
        tickerMessagee = format(game.atoms.amount,true)+' atoms; '+format(game.energy.amount,true)+' energy'
        dom.tickerMessage.style.left = 0+'%'
    }else if(game.settings.topBar == 3){
        tickerMessagee = 'Energy dimensions: A new cycle'
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

    let newText;
    if (game.energy_dims.energy_dim7.level < 10) {
        newText = `LOCKED (${game.energy_dims.energy_dim7.level}x / 10x 7th EDs)`;
    } else if (game.sacrifice.potential > Math.log10(1.5)) {
        newText = `Sacrifice (x${format(game.sacrifice.potential, true)})`;
    } else {
        newText = `LOCKED (x${format(game.sacrifice.potential, true)} / x1.5)`;
    }

    if(dom.sacrifice1.textContent !== newText){
        dom.sacrifice1.textContent = newText;
    }

    const ed = game.energy_dims;
    const settings = game.settings;

    const buy10MultRounded = ed.buy10mult.toFixed(settings.decimalPlaces);
    const sacrificeEffFormatted = format(game.sacrifice.eff, true);
    const buy10Text = `Buy 10: x${buy10MultRounded} | Sacrifice: x${sacrificeEffFormatted}`;
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
    const tickspeed1Text = `(${tick.amount}) Increase tickspeed by x${format(tick.base, true)}`;
    const tickspeed2Text = `Cost: ${format(tick.cost, true)} atoms`;
    const tickspeed3Text = `Tickspeed: ${format(tick.eff, true)}/s`;

    if (dom.tickspeed1.textContent !== tickspeed1Text) dom.tickspeed1.textContent = tickspeed1Text;
    if (dom.tickspeed2.textContent !== tickspeed2Text) dom.tickspeed2.textContent = tickspeed2Text;
    if (dom.tickspeed3.textContent !== tickspeed3Text) dom.tickspeed3.textContent = tickspeed3Text;

    const dimExpanseText = `(${game.expanse.amount}) Dimensional expanse`;
    if (dom.dimExpanse1.textContent !== dimExpanseText) dom.dimExpanse1.textContent = dimExpanseText;

        let dimExpTier = Math.min(game.expanse.amount + 3, 7);
        let dimExpcostText = `Cost: ${game.expanse.cost} ${dimExpTier}th EDs`;
        if(dom.dimExpanse3.textContent !== dimExpcostText){
            dom.dimExpanse3.textContent = dimExpcostText;
        }

    let dimExpInfo
    if(game.expanse.amount>3){
        dimExpInfo = 'Reset your dimensions increase all expanse bonuses.'
    }else{
        dimExpInfo = 'Reset your dimensions to unlock a new dimension and increase all expanse bonuses.'
    }
    if (dom.dimExpanse2.textContent !== dimExpInfo) {
        dom.dimExpanse2.textContent = dimExpInfo;
    }

    dom.dimExpanse4.textContent = 'Odd: x'+format(game.expanse.eff1,true)+' all ED mults'
    dom.dimExpanse5.textContent = 'Even: x'+format(game.expanse.eff2,true)+' atoms'
    let expanseEff3Rounded = game.expanse.eff3
    dom.dimExpanse6.textContent = 'Multiple of 5: +'+expanseEff3Rounded.toFixed(game.settings.decimalPlaces)+' buy 10 mult'
    if(game.expanse.amount%5==0){
        dom.dimExpanse4.style.opacity = 0.6
        dom.dimExpanse5.style.opacity = 0.6
        dom.dimExpanse6.style.opacity = 1
    }else if(game.expanse.amount%2==1){
        dom.dimExpanse4.style.opacity = 1
        dom.dimExpanse5.style.opacity = 0.6
        dom.dimExpanse6.style.opacity = 0.6
    }else if(game.expanse.amount%2==0){
        dom.dimExpanse4.style.opacity = 0.6
        dom.dimExpanse5.style.opacity = 1
        dom.dimExpanse6.style.opacity = 0.6
    }

    const starsText1 = `(${game.stars.amount}) Energy star`;
    if (dom.stars1.textContent !== starsText1) dom.stars1.textContent = starsText1;

    const starsText3 = `Cost: ${game.stars.cost} 7th EDs`;
    if (dom.stars3.textContent !== starsText3) dom.stars3.textContent = starsText3;

    if(game.menu == 3){
        const totalAtoms = format(game.atoms.total, true);
        const bestAtoms = format(game.stats.bestPoints, true);
        const playtime = format(game.stats.playtime, false);
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
    else if(game.atoms.amount<1.0e300){stats6TextContent = 'If writing out your atom amount at 3 digits/s was a job paying 8$ an hour, by the end you would earn '+Math.floor(game.atoms.amount/3/3600*8000)/1000+' dollary-doos.'}
    if(dom.stats6.textContent !== stats6TextContent){
        dom.stats6.textContent = stats6TextContent
    }
    
    if(game.collapse.bestCollapsePoints>-2){
        dom.stats7_0.textContent = 'COLLAPSE'
        if(dom.stats7_0.textContent !== 'COLLAPSE'){
            dom.stats7_0.textContent = 'COLLAPSE'
        }

        const timeCollapseSpent = 'You spent '+format(game.stats.timeInCollapse,false)+' in this collapse.'
        if(dom.stats7.textContent !== timeCollapseSpent){
            dom.stats7.textContent = timeCollapseSpent
        }

        const bestCPever = 'The best amount of CP you ever had was '+format(game.collapse.bestCollapsePoints,true)+'.'
        if(dom.stats8.textContent !== bestCPever){
            dom.stats8.textContent = bestCPever
        }

        const totalCPever = 'You have earned a total of '+format(game.collapse.totalCollapsePoints,true)+' CP.'
        if(dom.stats9.textContent !== totalCPever){
            dom.stats9.textContent = totalCPever
        }
    }//MADE BY MAMKAGOD!
    else{
        dom.stats7_0.textContent = ''
        if(dom.stats7_0.textContent !== ''){
            dom.stats7_0.textContent = ''
        }

        dom.stats7.textContent = ''
        if(dom.stats7.textContent !== ''){
            dom.stats7.textContent = ''
        }

        dom.stats8.textContent = ''
        if(dom.stats8.textContent !== ''){
            dom.stats8.textContent = ''
        }

        dom.stats9.textContent = ''
        if(dom.stats9.textContent !== ''){
            dom.stats9.textContent = ''
        }
    }
    if(game.stars.best>0){
        dom.ED_buy_mode2.style.display = 'inline-block'
        dom.stats_effects1_3.style.display = 'inline'
    }else{
        dom.ED_buy_mode2.style.display = 'none'
        dom.stats_effects1_3.style.display = 'none'
    }

    const energyEff = format(game.energy.eff, true);
    const expanseEff2 = format(game.expanse.eff2, true);
    const starEff = format(Math.log10(2) * game.stars.amount, true);
    const ed1Combined = format(game.energy_dims.energy_dim1.amount + game.energy_dims.energy_dim1.mult - Math.log10(50), true);
    const tickspeedEff = format(game.energy_dims.tickspeed.eff, true);
    const expanseEff1 = format(game.expanse.eff1, true);
    const expansePower = Math.floor(game.expanse.amount / 10 + 1);
    const achBoost = format(game.achievement_boost1, true);

    const statLines = [
    { el: dom.stats_effects1_1, text: `Energy: +${energyEff}` },
    { el: dom.stats_effects1_2, text: `Dim. expanses: x${expanseEff2}` },
    { el: dom.stats_effects1_3, text: `Stars: x${starEff}` },
    { el: dom.stats_effects2_1, text: `Energy dimension 1: +${ed1Combined}` },
    { el: dom.stats_effects3_1, text: `Tickspeed: x${tickspeedEff}` },
    { el: dom.stats_effects3_2, text: `Dim. expanses: x${expanseEff1}` },
    { el: dom.stats_effects4_1, text: `Above 10 expanses: ^1 | ^${expansePower} | x1` },
    { el: dom.ach_boost, text: `Achievements boost EDs by x${achBoost}` },
    ];

    for (const { el, text } of statLines) {
    if (el.textContent !== text) el.textContent = text;
    }

    const collapseProgress = Math.floor((game.atoms.amount / 6.165) * 100) / 100;
    const progressText = `Progress to collapse: ${collapseProgress}%`;
    const progressWidth = `${collapseProgress}%`;

    if (dom.progressBar.textContent !== progressText) dom.progressBar.textContent = progressText;
    if (dom.progressBar2.style.width !== progressWidth) dom.progressBar2.style.width = progressWidth;

    const UIrateText = `UI update rate: ${game.settings.UIrate}ms`;
    const newsSpeedText = `News speed: ${game.settings.newsSpeed * 100}%`;
    const fontSizeText = `Font size: ${game.settings.fontSize * 100}%`;
    const precisionText = `Precision: ${game.settings.decimalPlaces} digits`;
    const offlineTicksText = `Max offline ticks: ${game.settings.offlineTicks}`;
    const topBarText = `Top bar: ${game.settings.topBartext[game.settings.topBar]}`;
    const notationText = `Notation: ${game.settings.notationNames[game.settings.notation]}`;

    const optionLines = [
    { el: dom.UIoption1, text: UIrateText },
    { el: dom.UIoption2, text: newsSpeedText },
    { el: dom.UIoption3, text: fontSizeText },
    { el: dom.UIoption4, text: precisionText },
    { el: dom.UIoption5, text: offlineTicksText },
    { el: dom.options_topBarbtn, text: topBarText },
    { el: dom.options_notation, text: notationText },
    ];

    for (const { el, text } of optionLines) {
    if (el.textContent !== text) el.textContent = text;
    }

    const collapseText2 = format(game.collapse.collapseSpeed, true);
    if (dom.collapse_info2.textContent !== collapseText2) dom.collapse_info2.textContent = collapseText2;

    dom.collapse_info.style.display = game.collapse.collapsing ? 'inline-block' : 'none';

    const buyModeText = game.energy_dims.buy_mode === 0 ? 'Buying max' : 'Buying 1';
    if (dom.ED_buy_mode.innerHTML !== buyModeText) {
        dom.ED_buy_mode.innerHTML = buyModeText;
    }

    dom.stats_effects1_2.style.display = game.expanse.best > 0 ? 'block' : 'none';

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
        dim4StyleDisplay = 'block'
    }else{
        dim4StyleDisplay = 'none'
    }
    if(dom.dim4.style.display !== dim4StyleDisplay){
        dom.dim4.style.display = dim4StyleDisplay
    }

    let dim5StyleDisplay
    if(game.expanse.best>0){
        dim5StyleDisplay = 'block'
    }else{
        dim5StyleDisplay = 'none'
    }
    if(dom.dim5.style.display !== dim5StyleDisplay){
        dom.dim5.style.display = dim5StyleDisplay
    }

    let dim6StyleDisplay
    if(game.expanse.best>0){
        dim6StyleDisplay = 'block'
    }else{
        dim6StyleDisplay = 'none'
    }
    if(dom.dim6.style.display !== dim6StyleDisplay){
        dom.dim6.style.display = dim6StyleDisplay
    }
    if(dom.buyStar.style.display !== dim6StyleDisplay){
        dom.buyStar.style.display = dim6StyleDisplay
    }
    if(dom.stars1.style.display !== dim6StyleDisplay){
        dom.stars1.style.display = dim6StyleDisplay
    }
    if(dom.stats_effectsDiv5.style.display !== dim6StyleDisplay){
        dom.stats_effectsDiv5.style.display = dim6StyleDisplay
    }
    if(dom.sacrificeStuff.style.display !== dim6StyleDisplay){
        dom.sacrificeStuff.style.display = dim6StyleDisplay
    }

    let dim7StyleDisplay
    if(game.expanse.best>0){
        dim7StyleDisplay = 'block'
    }else{
        dim7StyleDisplay = 'none'
    }
    if(dom.dim7.style.display !== dim7StyleDisplay){
        dom.dim7.style.display = dim7StyleDisplay
    }

    if(game.atoms.total>2){
        dom.tickspeedStuff.style.display = 'block'
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
        if(dom.stats_effectsDiv4.style.display !== 'block'){
            dom.stats_effectsDiv4.style.display = 'block'
        }
        if(dom.stats_effectsDiv3.style.display !== 'block'){
            dom.stats_effectsDiv3.style.display = 'block'
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
        if(dom.stats_effectsDiv4.style.display !== 'none'){
            dom.stats_effectsDiv4.style.display = 'none'
        }
        if(dom.stats_effectsDiv3.style.display !== 'none'){
            dom.stats_effectsDiv3.style.display = 'none'
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

    if(game.collapse.bestCollapsePoints>-999){
        dom.menu5.style.display = 'block'
        if(dom.menu5.style.display !== 'block'){
            dom.menu5.style.display  = 'block'
        }
    } else{
        dom.menu5.style.display = 'none'
        if(dom.menu5.style.display !== 'none'){
            dom.menu5.style.display  = 'none'
        }
    }

    let stat4DivDisplay
    if(game.atoms.total>4){
        stat4DivDisplay = 'block'
    } else{
        stat4DivDisplay = 'none'
    }
    if(dom.stats_effectsDiv4.style.display !== stat4DivDisplay){
        dom.stats_effectsDiv4.style.display = stat4DivDisplay
    }

    let stat5DivDisplay
    if(game.expanse.best>2){
        stat5DivDisplay = 'block'
    }else{
        stat5DivDisplay = 'none'
    }
    if(dom.stats_effectsDiv5.style.display !== stat5DivDisplay){
        dom.stats_effectsDiv5.style.display = stat5DivDisplay
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
    game.stats.timeInCollapse += 0.025*Math.pow(10,offline_speed)
    game.atoms.amount = add_logs(game.atoms.amount,game.atoms.atoms_s-Math.log10(40))
    game.atoms.total = add_logs(game.atoms.total,game.atoms.atoms_s-Math.log10(40))
    game.atoms.atoms_s = game.energy.eff+game.expanse.eff2-game.collapse.collDivider+offline_speed+Math.log10(2)*game.stars.amount
    game.energy.eff = game.energy.amount*game.energy.exp
    game.energy.amount = add_logs(game.energy.amount,game.energy.energy_s-Math.log10(40))
    game.energy.exp = 1.4+Math.log10(game.stars.amount+1)/5
    game.energy.energy_s = game.energy_dims.energy_dim1.amount+game.energy_dims.energy_dim1.mult-Math.log10(100)
    game.energy_dims.tickspeed.eff = game.energy_dims.tickspeed.base*game.energy_dims.tickspeed.amount
    game.energy_dims.tickspeed.cost = (game.energy_dims.tickspeed.amount*Math.log10(20)+3)*(1+Math.max(0,game.energy_dims.tickspeed.amount-200)*0.01)
    game.energy_dims.energy_dim1.amount = add_logs(game.energy_dims.energy_dim1.amount,game.energy_dims.energy_dim2.amount+game.energy_dims.energy_dim2.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim2.amount = add_logs(game.energy_dims.energy_dim2.amount,game.energy_dims.energy_dim3.amount+game.energy_dims.energy_dim3.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim3.amount = add_logs(game.energy_dims.energy_dim3.amount,game.energy_dims.energy_dim4.amount+game.energy_dims.energy_dim4.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim4.amount = add_logs(game.energy_dims.energy_dim4.amount,game.energy_dims.energy_dim5.amount+game.energy_dims.energy_dim5.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim5.amount = add_logs(game.energy_dims.energy_dim5.amount,game.energy_dims.energy_dim6.amount+game.energy_dims.energy_dim6.mult-Math.log10(50)-Math.log10(40))
    game.energy_dims.energy_dim6.amount = add_logs(game.energy_dims.energy_dim6.amount,game.energy_dims.energy_dim7.amount+game.energy_dims.energy_dim7.mult-Math.log10(50)-Math.log10(40))
    let dimMultsAdd = game.energy_dims.tickspeed.eff+game.expanse.eff1+game.achievement_boost1+offline_speed
    game.energy_dims.energy_dim1.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim1.level/10)+dimMultsAdd
    if(game.achievements.includes(13)) {
        game.energy_dims.energy_dim3.mult += Math.log10(1.05)
    }
    game.energy_dims.energy_dim2.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim2.level/10)+dimMultsAdd
    game.energy_dims.energy_dim3.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim3.level/10)+dimMultsAdd
    game.energy_dims.energy_dim4.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim4.level/10)+dimMultsAdd
    game.energy_dims.energy_dim5.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim5.level/10)+dimMultsAdd
    game.energy_dims.energy_dim6.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim6.level/10)+dimMultsAdd
    if(game.achievements.includes(11)) {
        game.energy_dims.energy_dim6.mult += Math.log10(1.03)
    }
    game.energy_dims.energy_dim7.mult = Math.log10(game.energy_dims.buy10mult)*Math.floor(game.energy_dims.energy_dim7.level/10)+dimMultsAdd+game.sacrifice.eff
    let dimHelper = game.energy_dims
    game.energy_dims.energy_dim1.cost = (1+Math.floor(dimHelper.energy_dim1.level/10)*2)*(Math.pow(1+(Math.max(0,(1+Math.floor(dimHelper.energy_dim1.level/10)*2)-616))*0.02,0.5))
    game.energy_dims.energy_dim2.cost = (2+Math.floor(dimHelper.energy_dim2.level/10)*4)*(Math.pow(1+(Math.max(0,(2+Math.floor(dimHelper.energy_dim2.level/10)*4)-616))*0.02,0.5))
    game.energy_dims.energy_dim3.cost = (4+Math.floor(dimHelper.energy_dim3.level/10)*6)*(Math.pow(1+(Math.max(0,(4+Math.floor(dimHelper.energy_dim3.level/10)*6)-616))*0.02,0.5))
    game.energy_dims.energy_dim4.cost = (8+Math.floor(dimHelper.energy_dim4.level/10)*8)*(Math.pow(1+(Math.max(0,(8+Math.floor(dimHelper.energy_dim4.level/10)*8)-616))*0.02,0.5))
    game.energy_dims.energy_dim5.cost = (14+Math.floor(dimHelper.energy_dim5.level/10)*10)*(Math.pow(1+(Math.max(0,(14+Math.floor(dimHelper.energy_dim5.level/10)*10)-616))*0.02,0.5))
    game.energy_dims.energy_dim6.cost = (20+Math.floor(dimHelper.energy_dim6.level/10)*12)*(Math.pow(1+(Math.max(0,(20+Math.floor(dimHelper.energy_dim6.level/10)*12)-616))*0.02,0.5))
    game.energy_dims.energy_dim7.cost = (25+Math.floor(dimHelper.energy_dim7.level/10)*14)*(Math.pow(1+(Math.max(0,(25+Math.floor(dimHelper.energy_dim7.level/10)*14)-616))*0.02,0.5))
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
    game.sacrifice.potential = game.energy_dims.energy_dim1.amount*game.sacrifice.exp-game.sacrifice.eff
    if(game.expanse.amount>3){
        game.expanse.cost = 20+(game.expanse.amount-4)*15
    }else{
        game.expanse.cost = 20
    }
    game.stars.cost = 30+game.stars.amount*(20+(game.stars.amount-1)*5)
    if(game.expanse.amount == 0)
    {
        game.expanse.cost_type = 3
    }
    else if(game.expanse.amount == 1)
    {
        game.expanse.cost_type = 4
    }
    else if(game.expanse.amount == 2)
    {
         game.expanse.cost_type = 5
    }
    else if(game.expanse.amount == 3)
    {
        game.expanse.cost_type = 6
    }
    else
    {
        game.expanse.cost_type = 7
    }

    if(game.expanse.amount%5==0 && game.expanse.amount>0)
    {
        game.expanse.eff1 = 0
        game.expanse.eff2 = 0
        game.expanse.eff3 = 0.3*(1+game.expanse.amount*0.0125)
    }
    else if(game.expanse.amount%2==1 && game.expanse.amount>0)
    {
        game.expanse.eff1 = game.expanse.base1*game.expanse.amount
        game.expanse.eff2 = 0
        game.expanse.eff3 = 0
    }
    else if(game.expanse.amount>0)
    {
        game.expanse.eff1 = 0
        if(game.expanse.amount<10){
            game.expanse.eff2 = game.expanse.base2*game.expanse.amount
        }else{
            game.expanse.eff2 = (game.expanse.base2*Math.floor(game.expanse.amount/10+1))*game.expanse.amount
        }
        game.expanse.eff3 = 0
    }
    else
    {
        game.expanse.eff1 = 0
        game.expanse.eff2 = 0
        game.expanse.eff3 = 0
    }
    game.energy_dims.buy10mult = 2+game.expanse.eff3
    game.energy_dims.tickspeed.base = Math.log10(1.1)
    game.achievement_boost1 = game.achievements.length*Math.log10(1.02)

    if(game.atoms.amount>616.5 &&! game.collapse.collapsing) {
        game.collapse.collapsing = true
    }
    if(game.collapse.collapsing && game.atoms.amount>-1) {
        game.collapse.collapseSpeed += 0.0003*(1+(Math.log(Math.max(550,game.atoms.amount-550)))/5)*Math.pow(10,offline_speed)
        game.collapse.collapseSpeed *= 1+0.00075*(1+(Math.log(Math.max(610,game.atoms.amount-610)))/10)*Math.pow(10,offline_speed)
        game.collapse.collDivider += game.collapse.collapseSpeed/40*Math.pow(10,offline_speed)
        game.atoms.amount -= game.collapse.collapseSpeed/40*Math.pow(10,offline_speed)
                if(game.atoms.amount<-1){
                    game.collapse.collapsing = false
                    collapse()
                }
    }
    else {
        game.collapse.collDivider = 0
        game.collapse.collapseSpeed = 0
    }
    if(!game.sAchievements.includes(7) && game.atoms.atoms_s == 0 && game.atoms.amount>Math.log10(2000)){getAch(7,false)}
    if(game.atoms.amount>game.stats.bestPoints){game.stats.bestPoints = game.atoms.amount}
    if(game.expanse.amount>game.expanse.best){game.expanse.best = game.expanse.amount}
    if(game.stars.amount>game.stars.best){game.stars.best = game.stars.amount}
    if(game.collapse.collapsePoints>game.collapse.bestCollapsePoints){game.collapse.bestCollapsePoints = game.collapse.collapsePoints}
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
let newsSpeedSlider = document.getElementById('newsSpeedSlider');
newsSpeedSlider.addEventListener('input', function() {
    game.settings.newsSpeed = parseInt(newsSpeedSlider.value)/100;
});
let resetNewsSpeed = document.getElementById('resetNewsSpeed');
resetNewsSpeed.addEventListener('click', function() {
    game.settings.newsSpeed = 1;
});
let textSizeSlider = document.getElementById('fontSizeSlider');
textSizeSlider.addEventListener('input', function() {
    game.settings.fontSize = parseInt(textSizeSlider.value)/100;
    options_change_font_size(game.settings.fontSize)
});
let resetTextSize = document.getElementById('resetFontSize');
resetTextSize.addEventListener('click', function() {
    game.settings.fontSize = 1;
    textSizeSlider.value = 1
    options_change_font_size(game.settings.fontSize)
});
let precisionSlider = document.getElementById('precisionSlider');
precisionSlider.addEventListener('input', function() {
    game.settings.decimalPlaces = parseInt(precisionSlider.value);
});
let offlineTicksSlider = document.getElementById('offlineTicksSlider');
offlineTicksSlider.addEventListener('input', function() {
    game.settings.offlineTicks = parseInt(offlineTicksSlider.value);
});
let resetOfflineTicks = document.getElementById('resetOfflineTicks');
resetOfflineTicks.addEventListener('click', function() {
    game.settings.offlineTicks = 1000;
    offlineTicksSlider.value = 1000
});


function collapse(){ //My dear mod creators, i kindly ask you to not remove the following function from this peculiar location. I greatly appreciate your understandment. This little bug will probably be fixed in the following updates.
    const gameWindow = document.getElementById('theGame')
    gameWindow.style.animation = 'none';
    gameWindow.offsetHeight;
    gameWindow.style.animation = `collapseAnim 2s`;
    setTimeout(() => {
        gameWindow.style.animation = 'none';
        gameWindow.offsetHeight;
        game.collapse.collapsing = false
    game.collapse.collDivider = 0
    game.collapse.collapseSpeed = 0
    game.atoms.amount = -999
    game.expanse.amount = 0
    game.stars.amount = 0
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
    game.sacrifice.eff = 0
    game.sacrifice.potential = 0
    game.energy_dims.tickspeed.amount = 0
    game.collapse.collapsePoints = add_logs(game.collapse.collapsePoints,0)
    game.collapse.totalCollapsePoints = add_logs(game.collapse.collapsePoints,0)
    if(game.collapse.collapsePoints>game.collapse.bestCollapsePoints){game.collapse.bestCollapsePoints = game.collapse.collapsePoints}
    game.records.collapse.unshift(format(game.stats.timeInCollapse,false))
    game.records.collapse2.unshift(format(0,true))
    game.records.collapse3.unshift('Not implemented!')
    if(!game.achievements.includes(18))
        {
            getAch(18,true)
        }
    if(game.achievements.includes(18)) {
        game.atoms.amount = Math.log10(300)
    }
    if(game.records.length>10){game.records.collapse.pop();game.records.collapse2.pop();game.records.collapse3.pop()}
    for(let i = 0;i<10;i++){
        if(game.records.collapse[i]!==undefined){
            document.getElementById('record'+i).innerHTML = '#'+(i+1)+' | '+game.records.collapse[i]+' | +'+game.records.collapse2[i]+' CP | '+game.records.collapse3[i]+' CP/min'
        }else{
            document.getElementById('record'+i).innerHTML = '---'
        }
    }
    game.stats.timeInCollapse = 0
    }, 2000);
}
