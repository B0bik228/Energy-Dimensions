const achNames = [
    "HERE'S [Energy dimensions]",
    "100 is still alot, so pay up!",
    "Only 3 dimensions? Makes sense.",
    'Tesseract (but energy) (and rainbow)',
    "I can't count 'em all!",
    'What is a 6, but an upside down 9...',
    'Last dimension? Aw...',
    "3 different boosts?!?!",
    "Why is tickspeed so good?",
    "Just enough for an ENERGY drink!",
    'Skipped ahead',
    'Shine bright',
    'Have you heard of binary64 number types?',
    'Starting to get it, eh?',
    "Don't you dare sleep!",
    'Shine brighter',
    'Halfway there!',
    'The start of a new era',

    'Well, that was fast!',
    'Travelling beyond the hills',
    '"Time. Endless, looped, time."',
    'You must have waited, what, an hour for this?',
    'Getting too fast... too fast.',
    'Items are useful now?!',
    'Your first logarithmic thousand!',
    'TOO FAST!!',
    'Eh, who needed them anyway?',
    'Advanced collector',
    'A good pile',
    'Pro collector',
    'This is scaling FAST!',
    'Challen- oh, right. "Quadrants"...',
    "Huh. It wasn't THAT bad!",
    'Enough to crush an elephant',
    'Eh, who needed them anyway 2: The electric boogaloo',
    'Do you know how powerful a ^3.5 exponent is?',
    'Synergism reference?',
    'Exploration master',
    'Outpaced the decay',
    'This is getting ridicilous...',
    'WHO NEEDS THEM ANYWAY?!?!',
    "Beyond one's grasp",
    'Volumer than Earth i guess',
    'Back to square one',
    'The softcap is... kinda working?',
    'Addict',
    'Doubling at the speed of light',
    'This is getting REALLY ridicilous...',
    'Universe^10',
    'You know, maybe i do need them...',
    'True inflation',
    'My precious',
    '"B- but why are the quadrants capped at 2 completions?!"',
    'So big :O',
    'Winner!',
]

const achInfos = [
    "Get a 1st ED.",
    "Get a 2nd ED.",
    "Get a 3rd ED.",
    "Get a 4th ED.",
    "Get a 5th ED.",
    "Get a 6th ED.",
    "Get a 7th ED.",
    "Perform a dimensional expanse.",
    "Get 20 tickspeed upgrades.",
    "Get one billion (1B) energy.",
    'Buy a 5th ED with no other EDs. Reward: 5th EDs produce 3% more.',
    'Get a star.',
    'Buy a 1st ED when you have over 1.0e100 of them. Reward: 1st EDs produce 5% more.',
    'Play for 3 hours. Touch some grass!',
    'Be offline for 8 hours.',
    'Get a second star.',
    'Get 1.79e308 atoms, or half of what you need.',
    'Go supernova. Reward: Start all resets with 300 atoms.',

    'Go supernova a second time.',
    'Reach "The valley of stability" in the exploration tab.', //20
    'Unlock Timelines.',
    'Elongate a timeline to one hour.',
    'Go supernova in under 7 minutes.',
    'Buy the 6th supernova BOOST upgrade.',
    'Get 1.0e1000 atoms.', //25
    'Go supernova in under 2 minutes.',
    'Reach 1.0e2000 atoms without any stars',
    'Collect 15.0K items in an area',
    'Get 1,000 stardust.',
    'Collect 35.0K items in an area.', //30
    'Elongate a timeline to one month.',
    'Unlock Quadrants.',
    'Complete quadrant 1-1 once.',
    'Get 1.0M stardust.',
    'Reach 1.0e2000 atoms without stars, expanses nor Timelines. (ones from QoL do not count)', //35
    'Reach an energy exponent of ^3.5.',
    'Unlock Timeline synergising via a supernova upgrade.',
    'Get an exploration level of 100.',
    'Complete quadrant 2-2 once.',
    'Get 100T stardust.', //40
    'Go supernova for >100K stardust without Timelines, expanses, stars nor items. (ones from QoL do not count)',
    'Unlock Spacetime.',
    'Grow the universe to 1.0T km^3',
    'Condense the universe.',
    'Go supernova for >1.0Sx stardust.', //45
    'Play for 3 days.',
    'Reach a universe growth speed of x2/s.',
    'Get 1.0e50.0K atoms.',
    'Reach an universe size of 1.0e800 km^3',
    'Get 1.0e10.0K atoms without Timelines.', //50
    'Get 1.0QaDc stardust.',
    'Obtain a mythical item.',
    'Complete a total of 12 quadrant completions.',
    'Reach an universe size of 1.0e10.0K km^3',
    'Get 1.0e120K atoms. Congrats, this is the endgame! But you can push a bit further if you want...', //55
]

const secretAchNames = [
    "The first one is always free.",
    "Second one? Not so much.",
    "Maximum accuracy",
    "Slow reader",
    "Bro, clear out your PC!",
    "You can't find the setting?",
    "For a rainy day.",
    'I lied!',
    'Maybe check the Help/Story menu?',
    'Ah. so close.',
    'Are you serious?',
    'A break from numbers.',
]

const secretAchInfos = [
    "Yeah, the first one IS free.",
    "Not that free this time.",
    "Automation worked better than ever before.",
    "Kindergarten is down the hall.",
    "Maybe buy a new PC?",
    "Maybe you switched it on accident.",
    "Equal to one.",
    'It is this one!',
    "I add features, and yet you don't use them!",
    'If only you pressed the right button.',
    'You cannot be this gullible.',
    'This is nice. But... why am i here then?',
]

const secretAchInfos2 = [
    "Click this achievement.",
    "Click this achievement 100 times.",
    "Be offline for long enough to get 100,000 offline ticks.",
    "Witness 50 newstickers at 50% news speed.",
    "Set the UI update to the max.",
    "Buy 1000 things with the 'Buying 1' option.",
    "Get 2000 atoms with atoms/s being equal to 1.",
    'Click on a newsticker telling you about clicking on newstickers.',
    'Go supernova 5 times (after unlocking Timelines) with active & generating timelines, but no locked ones.',
    'Exit a quadrant when you could have completed it. Given automatically upon reaching endgame.',
    'Type in "hard_reset" into the import box.',
    'Play for 10 minutes with the blind notation.',
]

var isNaNed = false

function ach_tick()
{
    for(let i = 1;i<56;i++)
    {
        if(game.achievements.includes(i))
        {
            document.getElementById('achImg'+i).style.backgroundImage = `url(images/achievements/ach${i}.png)`
        }
        else
        {
            document.getElementById('achImg'+i).style.backgroundImage = 'url(images/achievements/lockedAchievement.png)'
        }
        document.getElementById('achImg'+i).style.backgroundSize = 100+'%'
    }
    for(let i = 1;i<13;i++)
    {
        if(game.sAchievements.includes(i))
        {
            document.getElementById('sachImg'+i).style.backgroundImage = `url(images/achievements/sAch${i}.png)`
        }
        else
        {
            document.getElementById('sachImg'+i).style.backgroundImage = 'url(images/achievements/lockedAchievement.png)'
        }
        document.getElementById('sachImg'+i).style.backgroundSize = 100+'%'
    }

    if(game.energy_dims.energy_dim1.level>0){
        getAch(1,true)
    }
    if(game.energy_dims.energy_dim2.level>0){
        getAch(2,true)
    }
    if(game.energy_dims.energy_dim3.level>0){
        getAch(3,true)
    }
    if(game.energy_dims.energy_dim4.level>0){
        getAch(4,true)
    }
    if(game.energy_dims.energy_dim5.level>0){
        getAch(5,true)
    }
    if(game.energy_dims.energy_dim6.level>0){
        getAch(6,true)
    }
    if(game.energy_dims.energy_dim7.level>0){
        getAch(7,true)
    }
    if(game.expanse.amount>0){
        getAch(8,true)
    }
    if(game.energy_dims.tickspeed.amount>19){
        getAch(9,true)
    }
    if(game.energy.amount>9){
        getAch(10,true)
    }
    if(game.energy_dims.energy_dim5.level>0 && game.energy_dims.energy_dim6.level<1 && game.energy_dims.energy_dim4.level<1 && game.energy_dims.energy_dim3.level<1 && game.energy_dims.energy_dim2.level<1 && game.energy_dims.energy_dim1.level<1 && game.energy_dims.energy_dim7.level<1){
        getAch(11,true)
    }
    if(game.stars.amount>0){
        getAch(12,true)
    }
    if(game.stats.playtime>3600*3){
        getAch(14,true)
    }
    if(game.stars.amount>1){
        getAch(16,true)
    }
    if(game.atoms.amount>308.25){
        getAch(17,true)
    }
    if(game.items.bestArea>1){
        getAch(20,true)
    }
    if(game.SupernovaUpg.includes('1U')){
        getAch(21,true)
    }
    if(game.Timelines.timeline1Amount>Math.log10(3600) || game.Timelines.timeline2Amount>Math.log10(3600) || game.Timelines.timeline3Amount>Math.log10(3600)){
        getAch(22,true)
    }
    if(game.SupernovaUpg.includes('5')){
        getAch(24,true)
    }
    if(game.atoms.amount>1000){
        getAch(25,true)
    }
    if(game.atoms.amount>2000 && game.stars.amount<2){
        getAch(27,true)
    }
    if(game.items.amounts[0]>15000 || game.items.amounts[1]>15000 || game.items.amounts[2]>15000){
        getAch(28,true)
    }
    if(game.Supernova.totalSupernovaPoints>3){
        getAch(29,true)
    }
    if(game.items.amounts[0]>35000 || game.items.amounts[1]>35000 || game.items.amounts[2]>35000){
        getAch(30,true)
    }
    if(game.Timelines.timeline1Amount>Math.log10(2628000) || game.Timelines.timeline2Amount>Math.log10(2628000) || game.Timelines.timeline3Amount>Math.log10(2628000)){
        getAch(31,true)
    }
    if(game.SupernovaUpg.includes('2U')){
        getAch(32,true)
    }
    if(game.quadrants.completions[0]>0){
        getAch(33,true)
    }
    if(game.Supernova.totalSupernovaPoints>6){
        getAch(34,true)
    }
    if(game.atoms.amount>2000 && game.stars.amount<2 && game.expanse.amount<5 && game.Timelines.timeline1Amount < -1 && game.Timelines.timeline2Amount < -1 && game.Timelines.timeline3Amount < -1){
        getAch(35,true)
    }
    if(game.energy.exp>3.5){
        getAch(36,true)
    }
    if(game.SupernovaUpg.includes('12')){
        getAch(37,true)
    }
    if(game.items.level>99){
        getAch(38,true)
    }
    if(game.quadrants.completions[2]>0){
        getAch(39,true)
    }
    if(game.Supernova.totalSupernovaPoints>14){
        getAch(40,true)
    }
    if(game.SupernovaUpg.includes('3U')){
        getAch(42,true)
    }
    if(game.Spacetime.universeSize>12){
        getAch(43,true)
    }
    if(game.stats.playtime>(3600*24*3)){
        getAch(46,true)
    }
    if(game.Spacetime.universeSpeed>Math.log10(2)){
        getAch(47,true)
    }
    if(game.atoms.amount>50000){
        getAch(48,true)
    }
    if(game.Spacetime.universeSize>800){
        getAch(49,true)
    }
    if(game.atoms.amount>10000 && game.Timelines.timeline1Amount < -1 && game.Timelines.timeline2Amount < -1 && game.Timelines.timeline3Amount < -1){
        getAch(50,true)
    }
    if(game.Supernova.totalSupernovaPoints>45){
        getAch(51,true)
    }
    if(game.items.inventory[26]>0 || game.items.inventory[27]>0){
        getAch(52,true)
    }
    if((game.quadrants.completions[0]+game.quadrants.completions[1]+game.quadrants.completions[2]+game.quadrants.completions[3]+game.quadrants.completions[4])>11){
        getAch(53,true)
    }
    if(game.Spacetime.universeSize>10000){
        getAch(54,true)
    }
    if(game.atoms.amount>120000){
        getAch(55,true)
    }

    if(game.achievements.includes(55)){
        getAch(10,false)
    }
    if(game.stats.timeBlind>600){
        getAch(12,false)
    }
}

    const smallDivs = document.querySelectorAll('.achievement');
    const smallDivs2 = document.querySelectorAll('.achievement2');

    smallDivs.forEach(div => {
        const infoBox = div.querySelector('.achInfo');
        const achTitle = div.querySelector('.achTitle');
        const achDesc = div.querySelector('.achDesc');
        
        div.addEventListener('mouseenter', () => {
            achTitle.textContent = achNames[div.getAttribute('order')]
            achDesc.textContent = achInfos[div.getAttribute('order')]
            infoBox.style.display = 'block';
        });

        div.addEventListener('mouseleave', () => {
            infoBox.style.display = 'none';
        });
    });

    smallDivs2.forEach(div => {
        const infoBox = div.querySelector('.achInfo');
        const achTitle = div.querySelector('.achTitle');
        const achDesc = div.querySelector('.achDesc');
        
        div.addEventListener('mouseenter', () => {
            const order = parseInt(div.getAttribute('order'))
            achTitle.textContent = secretAchNames[order]
            if(game.sAchievements.includes(order+1)){
                achDesc.textContent = secretAchInfos2[order]
            }else{
                achDesc.textContent = secretAchInfos[order]
            }
            infoBox.style.display = 'block';
        });

        div.addEventListener('mouseleave', () => {
            infoBox.style.display = 'none';
        });
    });