function UItick() //good luck
{
    document.getElementById('tickerMessage').textContent = tickerMessage
    document.getElementById('tickerMessage').style.left = tickerX+'%'
    if(tickerX<(tickerMessage == 'oops sorry wrong direction'?(100+tickerMessage.length*1.3):(0-tickerMessage.length*1.3)) && game.settings.topBar == 0)
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
            tickerMessage = Math.floor(Math.random()*254+1)+'.'+Math.floor(Math.random()*254+1)+'.'+Math.floor(Math.random()*254+1)+'.'+Math.floor(Math.random()*254+1)+' <- This you?'//you just found a comment. can you find all of them?
        }
        if(tickerMessage == 'You just rolled a [NOT GENERATED, CONSIDER YOURSELF VERY LUCKY]')
        {
            tickerMessage = 'You just rolled a '+Math.floor(Math.random()*1000)+'. If that number is above 950, consider yourself lucky!'
        }
    }

    if(game.settings.topBar == 1)
    {
        tickerMessage = Math.floor(game.atoms.amount/6.165*100)/100+'% to Collapse'
        document.getElementById('tickerMessage').style.left = 0+'%'
    }
    else if(game.settings.topBar == 2)
    {
        tickerMessage = format(game.atoms.amount,true)+' atoms; '+format(game.energy.amount,true)+' energy'
        document.getElementById('tickerMessage').style.left = 0+'%'
    }
    else if(game.settings.topBar == 3)
    {
        tickerMessage = 'Energy dimensions: A new cycle'
        document.getElementById('tickerMessage').style.left = 0+'%'
    }
    else if(game.settings.topBar == 4)
    {
        tickerMessage = ''
        document.getElementById('tickerMessage').style.left = 0+'%'
    }

    if(game.settings.topBar == 5)
    {
        document.getElementById('newsticker').style.display = 'none'
    }
    else
    {
        document.getElementById('newsticker').style.display = 'block'
    }
    document.getElementById('atoms1').textContent = 'You have '
    document.getElementById('atoms2').textContent = format(game.atoms.amount, true)
    document.getElementById('atoms3').textContent = ' atoms.'
    document.getElementById('atoms_s1').textContent = 'You are making '
    document.getElementById('atoms_s2').textContent = format(game.atoms.atoms_s, true)
    document.getElementById('atoms_s3').textContent = ' every second.'
    document.getElementById('energy1').textContent = 'Your dimensions produced '
    document.getElementById('energy2').textContent = format(game.energy.amount, true)
    document.getElementById('energy3').textContent = ' energy. (+'
    document.getElementById('energy4').textContent = format(game.energy.energy_s, true)
    document.getElementById('energy5').textContent = '/s)'
    document.getElementById('energy_eff1').textContent = 'Energy raised by '
    let energyExpRounded = game.energy.exp
    document.getElementById('energy_eff2').textContent = '^'+energyExpRounded.toFixed(game.settings.decimalPlaces)
    document.getElementById('energy_eff3').textContent = ' generates '
    document.getElementById('energy_eff4').textContent = format(game.energy.eff, true)
    document.getElementById('energy_eff5').textContent = ' atoms per second.'
    if(game.energy_dims.energy_dim7.level<10){
        document.getElementById('sacrifice1').textContent = 'LOCKED ('+game.energy_dims.energy_dim7.level+'x / 10x 7th EDs)'
    }else if(game.sacrifice.potential>Math.log10(1.5)){
        document.getElementById('sacrifice1').textContent = 'Sacrifice (x'+format(game.sacrifice.potential,true)+')'
    }else{
        document.getElementById('sacrifice1').textContent = 'LOCKED (x'+format(game.sacrifice.potential,true)+' / x1.5)'
    }
    let buy10MultRounded = game.energy_dims.buy10mult
    document.getElementById('buy10-sacrifice').textContent = 'Buy 10: x'+buy10MultRounded.toFixed(game.settings.decimalPlaces)+' | Sacrifice: x'+format(game.sacrifice.eff,true)
    document.getElementById('energy_dim1').textContent = '('+game.energy_dims.energy_dim1.level+') Energy dimension 1: x'+format(game.energy_dims.energy_dim1.mult,true)
    document.getElementById('energy_dim2').textContent = '('+game.energy_dims.energy_dim2.level+') Energy dimension 2: x'+format(game.energy_dims.energy_dim2.mult,true)
    document.getElementById('energy_dim3').textContent = '('+game.energy_dims.energy_dim3.level+') Energy dimension 3: x'+format(game.energy_dims.energy_dim3.mult,true)
    document.getElementById('energy_dim4').textContent = '('+game.energy_dims.energy_dim4.level+') Energy dimension 4: x'+format(game.energy_dims.energy_dim4.mult,true)
    document.getElementById('energy_dim5').textContent = '('+game.energy_dims.energy_dim5.level+') Energy dimension 5: x'+format(game.energy_dims.energy_dim5.mult,true)
    document.getElementById('energy_dim6').textContent = '('+game.energy_dims.energy_dim6.level+') Energy dimension 6: x'+format(game.energy_dims.energy_dim6.mult,true)
    document.getElementById('energy_dim7').textContent = '('+game.energy_dims.energy_dim7.level+') Energy dimension 7: x'+format(game.energy_dims.energy_dim7.mult,true)
    document.getElementById('energy_dim1.1').textContent = format(game.energy_dims.energy_dim1.amount,true)
    document.getElementById('energy_dim2.1').textContent = format(game.energy_dims.energy_dim2.amount,true)
    document.getElementById('energy_dim3.1').textContent = format(game.energy_dims.energy_dim3.amount,true)
    document.getElementById('energy_dim4.1').textContent = format(game.energy_dims.energy_dim4.amount,true)
    document.getElementById('energy_dim5.1').textContent = format(game.energy_dims.energy_dim5.amount,true)
    document.getElementById('energy_dim6.1').textContent = format(game.energy_dims.energy_dim6.amount,true)
    document.getElementById('energy_dim7.1').textContent = format(game.energy_dims.energy_dim7.amount,true)
    document.getElementById('buyDimCost1').textContent = format(game.energy_dims.energy_dim1.cost,true)+' atoms'
    document.getElementById('buyDimCost2').textContent = format(game.energy_dims.energy_dim2.cost,true)+' atoms'
    document.getElementById('buyDimCost3').textContent = format(game.energy_dims.energy_dim3.cost,true)+' atoms'
    document.getElementById('buyDimCost4').textContent = format(game.energy_dims.energy_dim4.cost,true)+' atoms'
    document.getElementById('buyDimCost5').textContent = format(game.energy_dims.energy_dim5.cost,true)+' atoms'
    document.getElementById('buyDimCost6').textContent = format(game.energy_dims.energy_dim6.cost,true)+' atoms'
    document.getElementById('buyDimCost7').textContent = format(game.energy_dims.energy_dim7.cost,true)+' atoms'
    document.getElementById('tickspeed1').textContent = '('+game.energy_dims.tickspeed.amount+') Increase tickspeed by x'+format(game.energy_dims.tickspeed.base,true)
    document.getElementById('tickspeed2').textContent = 'Cost: '+format(game.energy_dims.tickspeed.cost,true)+' atoms'
    document.getElementById('tickspeed3').textContent = 'Tickspeed: '+format(game.energy_dims.tickspeed.eff,true)+'/s'
    document.getElementById('dimExpanse1').textContent = '('+game.expanse.amount+') Dimensional expanse'
    if(game.expanse.amount == 0)
    {
        document.getElementById('dimExpanse2').textContent = 'Reset your dimensions to unlock a new dimension and increase all expanse bonuses.'
        document.getElementById('dimExpanse3').textContent = 'Cost: '+game.expanse.cost+' 3rd EDs'
    }
    else if(game.expanse.amount == 1)
    {
        document.getElementById('dimExpanse2').textContent = 'Reset your dimensions to unlock a new dimension and increase all expanse bonuses.'
        document.getElementById('dimExpanse3').textContent = 'Cost: '+game.expanse.cost+' 4th EDs'
    }
    else if(game.expanse.amount == 2)
    {
        document.getElementById('dimExpanse2').textContent = 'Reset your dimensions to unlock a new dimension and increase all expanse bonuses.'
        document.getElementById('dimExpanse3').textContent = 'Cost: '+game.expanse.cost+' 5th EDs'
    }
    else if(game.expanse.amount == 3)
    {
        document.getElementById('dimExpanse2').textContent = 'Reset your dimensions to unlock a new dimension and increase all expanse bonuses.'
        document.getElementById('dimExpanse3').textContent = 'Cost: '+game.expanse.cost+' 6th EDs'
    }
    else if(game.expanse.amount > 3)
    {
        document.getElementById('dimExpanse2').textContent = 'Reset your dimensions to unlock a new dimension and increase all expanse bonuses.'
        document.getElementById('dimExpanse3').textContent = 'Cost: '+game.expanse.cost+' 7th EDs'
    }
    document.getElementById('dimExpanse4').textContent = 'Odd: x'+format(game.expanse.eff1,true)+' all ED mults'
    document.getElementById('dimExpanse5').textContent = 'Even: x'+format(game.expanse.eff2,true)+' atoms'
    let expanseEff3Rounded = game.expanse.eff3
    document.getElementById('dimExpanse6').textContent = 'Multiple of 5: +'+expanseEff3Rounded.toFixed(game.settings.decimalPlaces)+' buy 10 mult'
    if(game.expanse.amount%5==0)
    {
        document.getElementById('dimExpanse4').style.opacity = 0.6
        document.getElementById('dimExpanse5').style.opacity = 0.6
        document.getElementById('dimExpanse6').style.opacity = 1
    }
    else if(game.expanse.amount%2==1)
    {
        document.getElementById('dimExpanse4').style.opacity = 1
        document.getElementById('dimExpanse5').style.opacity = 0.6
        document.getElementById('dimExpanse6').style.opacity = 0.6
    }
    else if(game.expanse.amount%2==0)
    {
        document.getElementById('dimExpanse4').style.opacity = 0.6
        document.getElementById('dimExpanse5').style.opacity = 1
        document.getElementById('dimExpanse6').style.opacity = 0.6
    }
    document.getElementById('stars1').textContent = '('+game.stars.amount+') Energy star'
    document.getElementById('stars2').textContent = 'Reset all progress to improve the energy exponent.'
    document.getElementById('stars3').textContent = 'Cost: '+game.stars.cost+' 7th EDs'
    document.getElementById('stats1').textContent = 'You have made a total of '+format(game.atoms.total,true)+' atoms'
    document.getElementById('stats1.1').textContent = 'The most amount of atoms you ever had was '+format(game.stats.bestPoints,true)
    document.getElementById('stats2').textContent = 'You have spent '+format(game.stats.playtime,false)+' playing this game.'
    document.getElementById('stats3').textContent = 'You have seen '+game.stats.tickers_seen+' news messages in total.'
    document.getElementById('stats4').textContent = 'You have unlocked '+game.achievements.length+' normal achievements...'
    document.getElementById('stats5').textContent = '...and '+game.sAchievements.length+' secret ones.'
    document.getElementById('stats5.5').textContent = 'You clicked the 2nd secret achievement '+game.stats.sAch2Clicks+' times.'
    if(game.stats.sAch2Clicks>99){document.getElementById('stats5.5').style.display = 'block'}else{document.getElementById('stats5.5').style.display = 'none'}
    if(game.atoms.amount<10){document.getElementById('stats6').textContent = 'If your atoms were, well, atoms, you would have enough to build '+format(game.atoms.amount-Math.log10(24),true)+' glucose molecules.'}
    else if(game.atoms.amount<23){document.getElementById('stats6').textContent = 'With your atoms you could build '+format(game.atoms.amount-Math.log10(6.0e9),true)+' human DNA molecules.'}
    else if(game.atoms.amount<28){document.getElementById('stats6').textContent = 'With your atoms you could make '+format(game.atoms.amount-23,true)+' water droplets.'}
    else if(game.atoms.amount<50){document.getElementById('stats6').textContent = 'With your atoms you could make '+format(game.atoms.amount-28.301,true)+' 2003 Nissan Muranos.'}
    else if(game.atoms.amount<1000){document.getElementById('stats6').textContent = 'With your atoms you could cause about '+format(game.atoms.amount-50,true)+' supernovae. (probably)'}
    else if(game.atoms.amount<1.0e300){document.getElementById('stats6').textContent = 'If writing out your atom amount at 3 digits/s was a job paying 8$ an hour, by the end you would earn '+Math.floor(game.atoms.amount/3/3600*8000)/1000+' dollary-doos.'}
    if(game.collapse.bestCollapsePoints>-2){
        document.getElementById('stats7.0').textContent = 'COLLAPSE'
        document.getElementById('stats7').textContent = 'You spent '+format(game.stats.timeInCollapse,false)+' in this collapse.'
        document.getElementById('stats8').textContent = 'The best amount of CP you ever had was '+format(game.collapse.bestCollapsePoints,true)+'.'
        document.getElementById('stats9').textContent = 'You have earned a total of '+format(game.collapse.totalCollapsePoints,true)+' CP.'
    }//MADE BY MAMKAGOD!
    else{
        document.getElementById('stats7.0').textContent = ''
        document.getElementById('stats7').textContent = ''
        document.getElementById('stats8').textContent = ''
        document.getElementById('stats9').textContent = ''
    }
    if(game.stars.best>0){
        document.getElementById('ED_buy_mode2').style.display = 'inline-block'
        document.getElementById('stats_effects1.3').style.display = 'inline'
    }else{
        document.getElementById('ED_buy_mode2').style.display = 'none'
        document.getElementById('stats_effects1.3').style.display = 'none'
    }
    document.getElementById('stats_effects1.1').textContent = 'Energy: +'+format(game.energy.eff,true)
    document.getElementById('stats_effects1.2').textContent = 'Dim. expanses: x'+format(game.expanse.eff2,true)
    document.getElementById('stats_effects1.3').textContent = 'Stars: x'+format(Math.log10(2)*game.stars.amount,true)
    document.getElementById('stats_effects2.1').textContent = 'Energy dimension 1: +'+format(game.energy_dims.energy_dim1.amount+game.energy_dims.energy_dim1.mult-Math.log10(50),true)
    document.getElementById('stats_effects3.1').textContent = 'Tickspeed: x'+format(game.energy_dims.tickspeed.eff,true)
    document.getElementById('stats_effects3.2').textContent = 'Dim. expanses: x'+format(game.expanse.eff1,true)
    document.getElementById('stats_effects4.1').textContent = 'Above 10 expanses: ^1 | ^'+Math.floor(game.expanse.amount/10+1)+' | x1'
    document.getElementById('ach_boost').textContent = 'Achievements boost EDs by x'+format(game.achievement_boost1,true)
    document.getElementById('progressBar').textContent = 'Progress to collapse: '+Math.floor(game.atoms.amount/6.165*100)/100+'%'
    document.getElementById('progressBar2').style.width = Math.floor(game.atoms.amount/6.165*100)/100+'%'
    document.getElementById('UIoption1').textContent = 'UI update rate: '+game.settings.UIrate+'ms'
    document.getElementById('UIoption2').textContent = 'News speed: '+game.settings.newsSpeed*100+'%'
    document.getElementById('UIoption3').textContent = 'Font size: '+game.settings.fontSize*100+'%'
    document.getElementById('UIoption4').textContent = 'Precision: '+game.settings.decimalPlaces+' digits'
    document.getElementById('UIoption5').textContent = 'Max offline ticks: '+game.settings.offlineTicks
    document.getElementById('options_topBarbtn').textContent = 'Top bar: '+game.settings.topBartext[game.settings.topBar]
    document.getElementById('options_notation').textContent = 'Notation: '+game.settings.notationNames[game.settings.notation]
    document.getElementById('collapse_info1').textContent = 'Your atoms are condensing by /'
    document.getElementById('collapse_info2').textContent = format(game.collapse.collapseSpeed,true)
    document.getElementById('collapse_info3').textContent = ' every second! Beware!'
    if(game.collapse.collapsing){
        document.getElementById('collapse_info').style.display = 'inline-block'
    }else{
        document.getElementById('collapse_info').style.display = 'none'
    }
    if(game.energy_dims.buy_mode==0)
    {
        document.getElementById('ED_buy_mode').innerHTML = 'Buying max'
    }
    else
    {
        document.getElementById('ED_buy_mode').innerHTML = 'Buying 1'
    }
    if(game.expanse.best>0)
    {
        document.getElementById('stats_effects1.2').style.display = 'block'
    }
    else
    {
        document.getElementById('stats_effects1.2').style.display = 'none'
    }
    if(game.atoms.amount>game.energy_dims.energy_dim1.cost)
    {
        document.getElementById('buyDim1').style.borderColor = 'green'
    }
    else
    {
        document.getElementById('buyDim1').style.borderColor = 'red'
    }

    if(game.atoms.amount>game.energy_dims.energy_dim2.cost)
        {
            document.getElementById('buyDim2').style.borderColor = 'green'
        }
        else
        {
            document.getElementById('buyDim2').style.borderColor = 'red'
        }

        if(game.atoms.amount>game.energy_dims.energy_dim3.cost)
            {
                document.getElementById('buyDim3').style.borderColor = 'green'
            }
            else
            {
                document.getElementById('buyDim3').style.borderColor = 'red'
            }

            if(game.atoms.amount>game.energy_dims.energy_dim4.cost)
                {
                    document.getElementById('buyDim4').style.borderColor = 'green'
                }
                else
                {
                    document.getElementById('buyDim4').style.borderColor = 'red'
                }

                if(game.atoms.amount>game.energy_dims.energy_dim5.cost)
                    {
                        document.getElementById('buyDim5').style.borderColor = 'green'
                    }
                    else
                    {
                        document.getElementById('buyDim5').style.borderColor = 'red'
                    }

                    if(game.atoms.amount>game.energy_dims.energy_dim6.cost)
                        {
                            document.getElementById('buyDim6').style.borderColor = 'green'
                        }
                        else
                        {
                            document.getElementById('buyDim6').style.borderColor = 'red'
                        }

                        if(game.atoms.amount>game.energy_dims.energy_dim7.cost)
                            {
                                document.getElementById('buyDim7').style.borderColor = 'green'
                            }
                            else
                            {
                                document.getElementById('buyDim7').style.borderColor = 'red'
                            }

    if(game.expanse.best>0)
    {
        document.getElementById('dim4').style.display = 'block'
    }
    else
    {
        document.getElementById('dim4').style.display = 'none'
    }

    if(game.expanse.best>1)
        {
            document.getElementById('dim5').style.display = 'block'
        }
        else
        {
            document.getElementById('dim5').style.display = 'none'
        }
        if(game.expanse.best>9)
            {
                document.getElementById('stats_effects4.1').style.display = 'block'
            }
            else
            {
                document.getElementById('stats_effects4.1').style.display = 'none'
            }

        if(game.expanse.best>2)
            {
                document.getElementById('dim6').style.display = 'block'
                document.getElementById('buyStar').style.display = 'inline-block'
                document.getElementById('stars1').style.display = 'inline'
                document.getElementById('stats_effectsDiv5').style.display = 'block'
            }
            else
            {
                document.getElementById('dim6').style.display = 'none'
                document.getElementById('buyStar').style.display = 'none'
                document.getElementById('stars1').style.display = 'none'
                document.getElementById('stats_effectsDiv5').style.display = 'none'
            }

            if(game.expanse.best>3)
                {
                    document.getElementById('dim7').style.display = 'block'
                    document.getElementById('sacrifice-stuff').style.display = '-block'
                }
                else
                {
                    document.getElementById('dim7').style.display = 'none'
                    document.getElementById('sacrifice-stuff').style.display = 'none'
                }

    if(game.atoms.total>2)
    {
        document.getElementById('tickspeed-stuff').style.display = 'block'
    }
    else
    {
        document.getElementById('tickspeed-stuff').style.display = 'none'
    }

    if(game.atoms.total>4)
        {
            document.getElementById('buyExpanse').style.display = 'inline-block'
            document.getElementById('dimExpanse1').style.display = 'inline'
            document.getElementById('dimExpanse3.5').style.display = 'inline'
            document.getElementById('dimExpanse4').style.display = 'inline'
            document.getElementById('dimExpanse5').style.display = 'inline'
            document.getElementById('dimExpanse6').style.display = 'inline'
            document.getElementById('stats_effectsDiv4').style.display = 'block'
            document.getElementById('stats_effectsDiv3').style.display = 'block'
        }
        else
        {
            document.getElementById('buyExpanse').style.display = 'none'
            document.getElementById('dimExpanse1').style.display = 'none'
            document.getElementById('dimExpanse3.5').style.display = 'none'
            document.getElementById('dimExpanse4').style.display = 'none'
            document.getElementById('dimExpanse5').style.display = 'none'
            document.getElementById('dimExpanse6').style.display = 'none'
            document.getElementById('stats_effectsDiv4').style.display = 'none'
            document.getElementById('stats_effectsDiv3').style.display = 'none'
        }
    
    let enDim = game.energy_dims['energy_dim'+game.expanse.cost_type]
    if(enDim.level>game.expanse.cost-1)
    {
        document.getElementById('buyExpanse').style.borderColor = 'green'
    }
    else
    {
        document.getElementById('buyExpanse').style.borderColor = 'red'
    }
    if(game.atoms.amount>game.energy_dims.tickspeed.cost)
        {
            document.getElementById('buyTickspeed').style.borderColor = 'green'
        }
        else
        {
            document.getElementById('buyTickspeed').style.borderColor = 'red'
        }
        if(game.energy_dims.energy_dim7.level>game.stars.cost-1)
            {
                document.getElementById('buyStar').style.borderColor = 'green'
            }
            else
            {
                document.getElementById('buyStar').style.borderColor = 'red'
            }

    if(game.collapse.bestCollapsePoints>-999){
        document.getElementById('menu5').style.display = 'block'
    } else{
        document.getElementById('menu5').style.display = 'none'
    }
    if(game.atoms.total>4){
        document.getElementById('stats_effectsDiv4').style.display = 'block'
    } else{
        document.getElementById('stats_effectsDiv4').style.display = 'none'
    }
        if(game.expanse.best>2){
            document.getElementById('stats_effectsDiv5').style.display = 'block'
        } else{
            document.getElementById('stats_effectsDiv5').style.display = 'none'
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
