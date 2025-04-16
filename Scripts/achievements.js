const achNames = [
    "The start of a new cycle",
    "100 is still alot",
    "Where are the other EDs?",
    'Tesseract (but energy)',
    "I can't count 'em all!",
    'What is a 6, but an upside down 9...',
    'Last dimension? Auh...',
    "ALTERNATING BOOSTS???",
    "Why is tickspeed so good?",
    "Enough for a cocktail",
    'Hip hop pims we dont need them dims',
    'Shine bright',
    'Again, no point in that...',
    'Starting to get it, eh?',
    "Don't you dare sleep!",
    'Shine brighter',
    'Go inf- nevermind...',
    'The start of a new era',
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
    'Buy a 6th ED with no other EDs. Reward: 6th EDs produce 3% more.',
    'Get a star.',
    'Buy a 1st ED when you have over 1.0e100 of them. Reward: 1st EDs produce 5% more.',
    'Play for 3 hours. Touch some grass!',
    'Be offline for 8 hours.',
    'Get a second star.',
    'Get 1.79e308 atoms.',
    'Go collapsal. Reward: Start all resets with 300 atoms.',
]

const secretAchNames = [
    "The first one is always free.",
    "Second one? Not so much.",
    "Very patient",
    "ADHD",
    "Bro, clear out your PC!",
    "You can't find the setting?",
    "For a rainy day",
    'I lied',
]

const secretAchInfos = [
    "Yeah, the first one IS free.",
    "Not that free this time.",
    "Something waiting related",
    "The opposite.",
    "Maybe buy a new PC?",
    "Maybe you switched it on accident.",
    "Equal to one.",
    'It is this one!',
]

const secretAchInfos2 = [
    "Click this achievement.",
    "Click this achievement 100 times.",
    "Sit through 5000 offline ticks.",
    "Skip offline progression with 100 maximum ticks.",
    "Set the UI update to the max",
    "Buy 1000 things with the 'Buying 1' option.",
    "Get 2000 atoms with atoms/s being equal to 1.",
    'Click on a newsticker telling you about clicking on newstickers.',
]

var isNaNed = false

function ach_tick()
{
    for(let i = 1;i<19;i++)
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
    for(let i = 1;i<9;i++)
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
    if(game.energy_dims.energy_dim6.level>0 && game.energy_dims.energy_dim5.level<1 && game.energy_dims.energy_dim4.level<1 && game.energy_dims.energy_dim3.level<1 && game.energy_dims.energy_dim2.level<1 && game.energy_dims.energy_dim1.level<1 && game.energy_dims.energy_dim7.level<1){
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
    if(1==2){
        getAch(18,true)
    }

    if(hasNaN(game) && !isNaNed){
        isNaNed = true
        let savedGame = localStorage.getItem('energyGameInfo')
        if(savedGame !== null){
            savedGame = btoa(savedGame)
            popup('The save is NaN?','Always has been.','You can report your bug with your save in the Galaxy comments!','Okay')
                const blob = new Blob([savedGame], { type: 'text/plain' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'Energy Dimensions Savefile';
                link.click();
            alert('Your save has been NaN-ed! The last autosave has been downloaded into a text file.');
        }
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
