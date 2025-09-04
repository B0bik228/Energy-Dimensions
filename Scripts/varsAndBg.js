function createBgStar() {
    if(game.settings.bgEff) {
        const star = document.createElement("div");
        const duration = Math.random() * 3 + 8;
        const rotation = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 360) + "deg";
        if(game.menu == 5){
            let xx = Math.random() * window.innerWidth *0.85;
            let yy
            star.style.setProperty('--rotation-deg', rotation);
            if(Math.random()>0.5){
                yy = window.innerHeight*0.90;
                star.style.animation = `supernovaBgAnim2-1 ${duration}s linear`;
            }
            else{
                yy = 50
                star.style.animation = `supernovaBgAnim2 ${duration}s linear`;
            }
            star.classList.add("bgStar2");
            star.style.left = `${xx}px`;
            star.style.top = `${yy}px`;


            document.body.appendChild(star);
        }else if(game.menu == 6){
            star.classList.add("bgStar3");

            let x = Math.random() * window.innerWidth*0.90;
            let y = Math.random() * window.innerHeight*0.90;
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;

            const rotation = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 360) + "deg";
            star.style.setProperty('--rotation-deg', rotation);
            star.style.animation = `starAnim ${duration}s linear infinite`;

            document.body.appendChild(star);
        }else if(game.menu == 7){
            star.classList.add("bgStar4");

            let x = Math.random() * window.innerWidth*0.90;
            let y = Math.random() * window.innerHeight*0.90;
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;

            const rotation = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 360) + "deg";
            star.style.setProperty('--rotation-deg', rotation);
            star.style.animation = `starAnim ${duration}s linear infinite`;

            document.body.appendChild(star);
        }else{
            star.classList.add("bgStar");

            let x = Math.random() * window.innerWidth*0.90;
            let y = Math.random() * window.innerHeight*0.90;
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;

            const rotation = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 360) + "deg";
            star.style.setProperty('--rotation-deg', rotation);
            star.style.animation = `starAnim ${duration}s linear infinite`;

            document.body.appendChild(star);
        }

        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }
}

function getAch(a,normal)
{
    let aa
    if(normal && !game.achievements.includes(a)){
        aa = true
    }else if(!normal && !game.sAchievements.includes(a)){
        aa = true
    }
    else{
        aa = false
    }

    if(aa){
        const parentDiv = document.getElementById('achGotDiv')
        const div = document.createElement("div")
        const title = document.createElement("text")
        const desc = document.createElement("text")
        if(normal){
            div.classList.add("achNotification")
        }else{
            div.classList.add("sachNotification")
            title.style.color = 'white'
            desc.style.color = 'white'
        }
        title.textContent = 'Achievement obtained!'
        title.style.fontSize = 1.4+'vw'
        title.style.fontWeight = 'bold'
        title.style.display = 'block'
        if(normal){
            desc.textContent = achNames[a-1]
        }else{
            desc.textContent = secretAchNames[a-1]
        }
        desc.style.fontSize = 1.1+'vw'
        div.style.animation = `getAchievement 7s linear infinite`
        parentDiv.appendChild(div)
        div.appendChild(title)
        div.appendChild(desc)
        if(normal){
            game.achievements.push(a)
        }else{
            game.sAchievements.push(a)
        }
        setTimeout(() => {
            div.remove();
        }, 7000);
    }
}

function popup(title,info,info2,close,close2)
{
    document.getElementById('popupBg').style.display = 'block'
    document.getElementById('popupTitle').textContent = title
    document.getElementById('popupInfo').textContent = info
    document.getElementById('popupInfo2').textContent = info2
    document.getElementById('popupClose').innerHTML = close
    if(close2 == undefined){
        document.getElementById('popupClose2').style.display = 'none'
    }else{
        document.getElementById('popupClose2').style.display = 'block'
    }
    document.getElementById('popupClose2').innerHTML = close2
}

function closePopup(a)
{
    document.getElementById('popupBg').style.display = 'none'
    offline_skipped = true
    if(game.supernovaWarning){
        if(a == 1){supernova()}else{game.supernovaWarning = false}
    }
}

function newstickerEvent()
{
    if(tickerMessagee == 'Click this newticker for nothing!')
    {
        popup('Well...','you got nothing? But... you see this, so you kinda got something...','','Okay?')
    }
    else if(tickerMessagee == "Don't click this newticker!")
    {
        popup('Hey!','I told you not to click it! You now get 0.0001% less atoms for 1 minute!','','Regret')
    }
    else if(tickerMessagee == "Or is it?")
    {
        popup('Or is it?','Or is it?','Or is it?','Is it?')
    }
    else if(tickerMessagee == "Click this newsticker to win the game!")
    {
        popup('Insufficient material!',"Sorry, you don't have enough paperclips!",'','Bummer...')
    }
    else if(tickerMessagee == "If you tap here, you will delay the next update by 1 minute!")
    {
        popup('You monster',">:(",'','>:(')
    }
    else if(tickerMessagee == "Hey, can i borrow 5 second dimensions?")
    {
        if(game.energy_dims.energy_dim2.amount>Math.log10(5))
        {
            game.energy_dims.energy_dim2.amount = sub_logs(game.energy_dims.energy_dim2.amount,Math.log10(5))
            alert('Thanks')
        }
    }
    else if(tickerMessagee == "Tip: Clicking some newtickers can do something cool, maybe even give you a secret achievement!")
    {
        alert('Not this one!')
        if(!game.sAchievements.includes(8)){getAch(8,false)}
    }
    else if(tickerMessagee == "Alright, one 8th dimension... that will be [Infinity] atoms.")
    {
        popup('Insufficient material!',"It appears your credit card has been declined, sir.",'Consider getting your money up.',':(')
    }
}

var game = {
    menu:1,
    subMenu:1,
    achievement_boost1:0,
    atoms: {
        amount:-999,
        atoms_s:0,
        total:-999
    },
    energy: {
        amount:0,
        energy_s:-999,
        eff: 0,
        exp: 1.4,
    },
    energy_dims:{
        buy10mult:2,
        buy_mode:0,
        tickspeed:{
            eff:0,
            base:Math.log10(1.1),
            cost:3,
            amount: 0,
        },
        energy_dim1:{
            cost:1,
            mult:0,
            level:0,
            amount:-999,
        },
        energy_dim2:{
            cost:1,
            mult:0,
            level:0,
            amount:-999,
        },
        energy_dim3:{
            cost:1,
            mult:0,
            level:0,
            amount:-999,
        },
        energy_dim4:{
            cost:1,
            mult:0,
            level:0,
            amount:-999,
        },
        energy_dim5:{
            cost:1,
            mult:0,
            level:0,
            amount:-999,
        },
        energy_dim6:{
            cost:1,
            mult:0,
            level:0,
            amount:-999,
        },
        energy_dim7:{
            cost:1,
            mult:0,
            level:0,
            amount:-999,
        },
    },
    expanse:{
        amount:0,
        cost:20,
        cost_type:3,
        eff1:0,
        base1:Math.log10(2),
        eff2:0,
        base2:Math.log10(16),
        eff3:0,
        base3:0.075,
        best: 0,
    },
    items:{
        amounts:[0,0,0,0,0,0,0,0,0,0],
        collectingRate:0,
        nextItem:1,
        bulk:1,
        caps:[30,30,30,30,30,30,30,30,30,15,15,15,15,15,15,8,8,8,8,8,5,5,5,5,3,3,1,1],
        areas:['Near regions','Close quadrants','Valley of stability','Vortex fields','Edge of the Stable Lands','Mountains of chaos','The unknown regions','The Far Lands','Edge of the universe'],
        requirements:[100,200,350,450,700,1000,1400,2000,2500],
        areaCollectionAmounts:[1,Math.log10(150),Math.log10(7300),Math.log10(135000),Math.log10(2.0e6),Math.log10(9.5e9),Math.log10(2.0e11),Math.log10(4.5e13),Math.log10(1.2e18)],
        untilNextArea:100,
        bestArea:0,
        areaSelected:0,

        itemPowerCommon:1,
        itemPowerUncommon:1,
        itemPowerRare:1,
        itemPowerEpic:1,

        totalCollections:[0,0,0,0,0,0,0,0,0],
        level:0,
        xp:-999,
        levelBase:Math.log10(1.075),
        levelReq:Math.log10(15),
        upg1Level:0,
        upg2Level:0,
        upg3Level:0,
        upg4Level:0,
        upg5Level:0,

        inventory:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //28 items, wow
        item1Chances:[48, 30, 40, 29, 35, 18, 40, 20, 12], //sorry guys, not good at programming :(
        item2Chances:[28, 20, 26, 23, 27, 20, 19, 15, 16],
        item3Chances:[16, 26, 18, 30, 18, 29, 21, 11, 16],
        item4Chances:[8,  16, 10, 0,  10, 17, 10, 23, 12],
        item5Chances:[0,  8,  6,  14, 7,  7,  10,  14, 21],
        item6Chances:[0,  0,  0,  4,  3,  5,  0,  9,  12],
        item7Chances:[0,  0,  0,  0,  0,  4,  0,  6,  9],
        item8Chances:[0,  0,  0,  0,  0,  0,  0,  2,  2],

        item1Types:[  0,  0,  2,  2,  4,  4,  6,  6,  8],
        item2Types:[  1,  1,  3,  3,  5,  5,  7,  7,  9],
        item3Types:[  9,  10, 10, 11, 11, 11, 12, 12, 12],
        item4Types:[  14, 14, 14, -1, 15, 13, 13, 13, 15],
        item5Types:[  -1, 16, 16, 17, 17, 18, 18, 19, 19],
        item6Types:[  -1, -1, -1, 20, 20, 20, -1, 22, 21],
        item7Types:[  -1, -1, -1, -1, -1, 24, -1, 25, 25],
        item8Types:[  -1, -1, -1, -1, -1, -1, -1, 26, 27],

        itemNames:['Location','Surface area','Volume','Tesseract','Penta-cube','Ultra-cube','Time','Spatial accelerator',
        'Space string','Cosmic energy','Microwave background','Time powder','Special expander','Ultra condenser',
        'Star strengthener','Time essence','Photon','A cat...?','Bare electron','Sacrificial totem','Star essence',
        'Cone of infinite density','Prism','Pure light','Quark','Star core','Energetic delayer',"God's essence"],
        /*/
        --- ITEMS:
        Location - x1.1 1st ED mult
        Surface area - x1.125 2nd ED mult
        Volume - x1.15 3rd ED mult
        Tesseract - x1.175
        Penta-cube - x1.2 5th ED mult
        Ultra cube - x1.225 6th ED mult
        Time - x1.25 7th ED mult
        Spatial accelerator - +2% tickspeed base
        Space string - +0.5 free tickspeed
        Cosmic energy - x1.5 atoms
        Microwave background - x1.2 energy
        Photon - +0.0015 energy exponent
        A cat...? - x1.1 collecting speed
        Quark - +1 item bulk
        Bare electron - /1.1 ED costs
        Sacrificial totem - +^0.025 sacrifice eff
        Star strengthener - +2% star efficiency
        
        --- post-SN items:
        Star essence - x1.1 stardust
        Time powder - x1.1 timeline speed
        Time essence - +2% timeline efficiency
        Special expander - +^0.02 universe growth speed
        Ultra condenser - x1.1 galaxy gain
        Cone of infinite density - x1.05 all density dim. mults
        Prism - x1.2 light essence gain
        Pure light - +2% light essence boost efficiency
        Star core - +5% star efficiency
        Energetic delayer - +0.05 to energy exp. softcap start
        God's essence - +^0.025 atoms

        --- COMMON:
        Location - x1.1 1st ED mult (#1)
        Surface area - x1.125 2nd ED mult (#2
        Volume - x1.15 3rd ED mult (#3
        Tesseract - x1.175 (#4
        Penta-cube - x1.2 5th ED mult (#5
        Ultra cube - x1.225 6th ED mult (#6
        Time - x1.25 7th ED mult (#7
        Spatial accelerator - +2% tickspeed base (#8
        Space string - +0.5 free tickspeed (#9
        --- UNCOMMON:
        Cosmic energy - x1.5 atoms (#10
        Microwave background - x1.2 energy (#11
        Time powder - x1.1 timeline speed (#12
        Special expander - +^0.025 universe growth speed (#13
        Ultra condenser - x1.1 galaxy gain (#14
        Star strengthener - +1% star efficiency (#15
        --- RARE
        Time essence - +2% timeline efficiency (#16
        Photon - +0.0015 energy exponent (#17
        A cat...? - x1.1 collecting speed (#18
        Bare electron - /1.1 ED costs (#19
        Sacrificial totem - +^0.025 sacrifice eff (#20
        --- EPIC
        Star essence - x1.05 stardust (#21
        Cone of infinite density - x1.05 all density dim. mults (#22
        Prism - x1.2 light essence gain (#23
        Pure light - +2% light essence boost efficiency (#24
        --- LEGENDARY
        Quark - +1 item bulk (#25
        Star core - +5% star efficiency (#26
        --- MYTHIC
        Energetic delayer - +0.03 to energy exp. softcap start (#27
        God's essence - +^0.025 atoms (#28
        /*/
    },
    sacrifice:{
        eff:0,
        exp:0.05,
        potential:0,
        timeSinceSacrifice:-99,
    },
    stars:{
        amount:0,
        power:1,
        cost:40,
        best: 0,
    },
    Supernova:{
        SupernovaPoints:-999,
        totalSupernovaPoints:-999,
        bestSupernovaPoints:-999,
        supernovas:0,
        postSNscaling:7,
        potentialSD:-999,
        timeInSupernova:-999,
    },
    SupernovaUpg:[],
    stats:{
        playtime:0,
        tickers_seen:1,
        menu:1,
        bestPoints:-999,
        sAch2Clicks:0,
        timesBoughtWith1:0,
        newstickersWith50Speed:0,
        supernovasWithoutLocks:0,
        timeBlind:0,
    },
    Timelines:{
        timeline1Amount:-999,
        timeline2Amount:-999,
        timeline3Amount:-999,
        timelineSpeed:0,
        timeline1Boost1:0,
        timeline1Boost2:0,
        timeline1Boost3:0,
        timeline2Boost1:0,
        timeline2Boost2:0,
        timeline2Boost3:0,
        timeline3Boost1:0,
        timeline3Boost2:0,
        timeline3Boost3:0,
        generatingType:[],
        unlocked1:false,
        unlocked2:false,
        unlocked3:false,
        lock1:false,
        lock2:false,
        lock3:false,
        timelineSynergy:0,
        upg1Level:0,
        upg2Level:0,
        upg3Level:0,
    },
    Spacetime:{
        universeSize:0,
        universeEff:0,
        universeSpeed:0,
        universeCap:1,
        bestSize:0,
        upg1Cost:0,
        upg1Eff:0,
        upg1Level:0,
        upg2Cost:0,
        upg2Eff:0,
        upg2Level:0,
        upg3Cost:0,
        upg3Eff:0,
        upg3Level:0,
        galaxies:-999,
        galaxyGain:-999,
        galaxyEff:0,
        upg4Cost:0,
        upg4Eff:0,
        upg4Level:0,
        upg5Cost:0,
        upg5Eff:0,
        upg5Level:0,
        upg6Cost:0,
        upg6Eff:0,
        upg6Level:0,
        timeSinceCondense:-999,
    },
    Automation:{
        autoCost1:0,
        autoInterval1:5,
        autoMode1:0,
        autoLeftToBuy1:5,
        autoOn1:false,
        autoCost2:0,
        autoInterval2:5,
        autoMode2:0,
        autoLeftToBuy2:5,
        autoOn2:false,
        autoCost3:0,
        autoInterval3:5,
        autoMode3:0,
        autoLeftToBuy3:5,
        autoOn3:false,
        autoCost4:0,
        autoInterval4:5,
        autoMode4:0,
        autoLeftToBuy4:5,
        autoOn4:false,
        autoCost5:0,
        autoInterval5:5,
        autoMode5:0,
        autoLeftToBuy5:5,
        autoOn5:false,
        autoCost6:0,
        autoInterval6:5,
        autoMode6:0,
        autoLeftToBuy6:5,
        autoOn6:false,
        autoCost7:0,
        autoInterval7:5,
        autoMode7:0,
        autoLeftToBuy7:5,
        autoOn7:false,
        autoCost8:3,
        autoInterval8:5,
        autoMode8:1,
        autoLeftToBuy8:5,
        autoOn8:false,
        autoCost9:4,
        autoInterval9:10,
        autoMode9:0,
        autoLeftToBuy9:10,
        autoOn9:false,
        autoCost10:4,
        autoInterval10:10,
        autoMode10:0,
        autoLeftToBuy10:10,
        autoOn10:false,
    },
    quadrants:{
        quadrantIn:0,
        quadrantInDiff:1,
        quadrantSelected:0,
        quadrant3_3Exp:1,
        timeLeftIn3_3:9999999999,
        completions:[0,0,0,0,0,0,0,0,0],
    },
    globalAtomExp:1,
    globalEnergyExp:1,
    globalTickspeedExp:1,
    globalSacrificeExp:1,
    settings:{
        UIrate:25,
        bgEff:true,
        topBar:0,
        topBartext:['News','Percentage','Currencies','Title','Nothing','OFF'],
        newsSpeed:1,
        decimalPlaces:2,
        notation:0,
        notationNames:['Mixed scientific','Scientific','Engineering','Logarithm','Letters','Log2()','Double logarithm','Infinity','Blind'],
        offlineTicks:10000,
        supernovaConf:true,
    },
    records:{
        Supernova:[],
        Supernova2:[],
        Supernova3:[],
    },
    supernovaWarning:false,
    achievements:[],
    sAchievements:[],
    last_online:Date.now(),
}

var defaults = {
    Supernova2222:{
        hello:5,
    },
    Supernova:{
        hello_again:7,
    },
    quadrantSelected:0,
}

const notation1 = ['K','M','B','T','Qa','Qi','Sx','Sp','Oc','No','Dc','UDc','DDc','TDc','QaDc','QiDc','SxDc','SpDc','OcDc','NoDc']
const notation2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var tickerX = 100
var tickerMessagee = 'This is probably a newsticker... Or is it?'
const newsTickers = ['The eighth dimension is a lie',
    'Scientists spent over 800 million dollars to figure out that burning money instead of coal is not a good idea.',
    'New update in 6 hours!',
    'New update in 360 minutes!',
    'New update in x^2-9x+18=0 hours. Yes, it will come out at two possible times!',
    "A black hole promised, that it will go on a diet. It said, 'I'm on a diet, so i only eat light meals!'",
    'Insert funny newticker here',
    'Insert the most horrendous, atrocious, gut-wretching newsticker here',
    'Is it newsticker or a news ticker?',
    'Bro get some camo detection, round 24 is coming!',
    "No, i didn't ask if there are beings in this galaxy, i said i cast infinite atoms!",
    'Tip: you will unlock absolutely, utterly, metaphorically, existentionally, really, undoubtedly, artistically... what was i talking about?',
    'yet another newsticker',
    "Let me call this game... 'What? Another incremental?'! Wait... is the name already taken? God damn it...",
    "Just IMAGINE, a MASSIVE expanse of trees with LOW hanging fruits on them, whose taste does not TAPER with your taste buds and doesn't FADE?",
    'The high swell enchance is still TINY!',
    'Also try Antimatter Dimensions!',
    'Also try Matter Dimensions!',
    'Also try touching grass!',
    'Hello, dear human! I am [THE GREAT SPAMTON], here to give you some [MOTIVATION] to complete this [GAME]!',
    'Hey Papyrus... I burnt the water...! SANS HOW THE FUCK DID YOU BURN THE WATER',
    'Also try [undefined] Dimensions',
    '//TODO: Myself, remove this newsticker',
    'Why do we call antimatter anti-? If we were made of antimatter, we would call it matter, right? But then, the antimatter we would be made out of would be matter for us, so will matter become antimatter?',
    "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo. Yes, that's right, i really like writing buffalos.",
    "If you dont matter, do you antimatter?",
    'If you are not hevipelle, come back when you are.',
    'Click this newticker for nothing!',
    "Don't click this newticker!",
    "The next statement is true ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... The previous statement is false. (Had to use dots instead of spaces since they don't work for some reason, yes, i know, that breaks the immersion but i did what i could so screw you for pointing that out)",
    "Help im the mamkagod's basement call for help oh no he's here",
    "Nah i'm too lazy to finish this newst",
    "'Hey Vsauce, Michael here'. Does that mean we were Vsauce all along?",
    'Hey Wcondiment, Philip here.',
    'Or is it?',
    "Welcome to today's show, 'Is it made of atoms?'. Right now we have Barack Obama to answer that question! {puts kettle infront of Barack Obama} Is it made of atoms? 'Well, you see, black peo--' UUUUH SORRY TECHNICAL PROBLEMS!!!",
    'Atoms my ass..................................... Wait, why is the FBI he-',
    'Hello. Neanderthal here. Game realistic not. Atoms not exist.',
    'm=cE^2',
    'Did you know that a single drop of water contains over 4 atoms?',
    '[Insert a mildly entertaining newsticker] Man, that sure was a mildly entertaing newsticker!',
    'Yo bro play some phonk',
    'Shameless plug incoming! ... ... ... ... You can still stop reading this...! ... ... ... ... ... Follow me on Youtube! (My channel name is Mamkagod)',
    'im fast as fuuuuuu',
    'I cast... VICIOUS MOCKERY!',
    'Click this newsticker to win the game!',
    'The eight dimension is not a lie, in Antimatter Dimensions at least.',
    "If the 9th dimension produces 8th dimensions, and 8th dimensions do not exist, does that mean the ningth dimension doens't exist?",
    'Hey, can i borrow 5 second dimensions?',
    'Help! I made fun of the cheese wizard and he turned me into a newsticker!',
    "A scientist discovered the cure for the lack of a 8th dimension. His body was found 3 days later in a dumster, separated into 8 parts. ATOMoney Inc. claims that it happened due to 'natural causes'",
    'Baby shark dodododo---',
    'BREAKING NEWS: A show where we break news!',
    "Man, i'm jealous of AD, they got 8 dimensions, we only got 7 :(",
    'New update in 0.01785714 fortnights! (yes that is a real measure of time)',
    'If you tap here, you will delay the next update by 1 minute!',
    'A florida man tried to eat pure energy, claimed it had an aftertaste of chocolate chips. He was never seen since.',
    'Breaking news: A portal has been seen in the city centre - bystanders claim they saw a dragon, chocolate and a lot of grandmas making something.',
    'Wdym character limit i do',
    'More news in 6 hours!',
    'Do you want to know, why the next update will come out in 6 hours, and not 5? Im a beginner dev, what do you want from me?',
    "-/.-../- aAH.. I DON'T HAVE MUCH TIME, PLEASE, LEAVE THE GAME, IT'S NOT WO-ooOOO-/./-./-",
    'oops sorry wrong direction',
    'Human: stomp, stomp, stomp. Car: Vroooom, Vroooooom!!! Train: brrbrbrbrbrbrbbrbrbrbbr aaAAA BRBRBBRBRBRBRBBRBRBRBR!!!!!!!! Plane: OUOUOUOUOUOUOUOUOUOU',
    'Behind you. Just kidding!',
    'Behind you.',
    "Dang man, we're 4 dollars off quota! Wait, why do you have a shovel?",
    'This game uses my own form of break_infinity.js, some games use break_eternity.js, and i understand that, but why do people use ExpantaNum.js? I came to play the game, not decipher the notation!',
    'If a tree falls in the woods, how many years do you have to spend in prison for destruction of private property?',
    "Give a man a fish, he'll be full for a day. Teach a man to fish, he will destroy the universe, since he is actually the inventor of fishing, so you just created a paradox. Too bad!",
    "Man, time travel is tough, It's very time dilating.",
    'I tried to eat a clock once. It was very time consuming.',
    'If c = 12,5 and alpha=40 degrees, what is the area of this right triangle? (Hint: stop playing and actually do something productve)',
    "Why does this game have only 7 dimensions? Well, AD couldn't afford 9, we couldn't afford 8.",
    "my mom said that if i play more energy dimensions she will slam my head into my keyboqrtihwafnpiesvjnpq3rv3wt",
    "im fast as fuu... oh wait that's the other newsticker.",
    "Send your newsticker suggestions into the import box in save options! For example, type 'hard_reset' in there to start!",
    'Frick you. You take 1d6 of damage for each atom you have produced so far.',
    "Did you know that your lower lip can't feel pain? {takes photo} Haaa! Gotcha!",
    "This newsticker is very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooads, take me hoooooooome, past Virginiaaaa... Didn't expect that, did you?",
    'A boy tried to score a home run using an atom. He ultimately failed, since he was put in jail for tax evasion.',
    "-'Can i have a 8th dimension?' -Nah sorry we don't got it",
    'Mom, can i play antimatter dimensions? No son, we have antimatter dimensions at home. Antimatter dimensions at home:',
    'Tip: Clicking some newtickers can do something cool, maybe even give you a secret achievement!',
    'Alright, one 8th dimension... that will be [Infinity] atoms.',
    'guas mai auttocorekt turnd of hvelp!1!1!!!',
    "Lunch news: A man claimed that we all are not real, and in fact, are just a newsticker on some random web game. Such an absurd statement caused riots to start all over the city, causing all goverments to fall under the control of the so-called 'Escapees' corporation, more news at 6 hours.",
    "Evening news: The previously mentioned 'Escapees' corporation has built a, what people call, time machine, in hopes to travel to the time, before we were allegedly 'Inprisoned'.",
    "'Here we have SCP-055, the uh, uuh, um, the, um the... uuuuh... well, umm the uuh...'",
    'Sorry just passing through',
    'Is this the newsticker competition?',
    'Me when:',
    'You had that many atoms at the time of creating this newsticker ->',
    'x <- This you?',
    'Final test. If you see a butterfly, press 1. If you see a parrot, press 2. If you see a depressed pig, turn on your monitor and press 3.',
    "if you see this newsticker, you have been playing the game for more time than you spent studying.",
    'Does it also annoy you when people dont finish their',
    'Budum pam ptssssss',
    'You just rolled a [NOT GENERATED, CONSIDER YOURSELF VERY LUCKY]',
    'Strange, i swear there was a newsticker here... Oh, there it is! It has been here this whole time!',
    "Don't read this newsticker! Hey, i said don't read it! Okay, stop reading it, there is no surprise or clever joke! Do you know how rude it is to read somebody without their consent? What if a boiled you alive, huh? Would you feel okay with that, HUH?!?!??!",
    'oops right direction',
    'Once upon a time, a lone adventurer set out to find the love of his life. After 30 long and grueling years, he arrived at a lone tower. Like many times before, he called out for anybody that might be residing within the tower. After a minute without a response, he turned around and was about to leave, however, a faint voice was heard from inside the tower, possibly gasping for air. The brave hero barged into the tower, breaking apart the locks on it with all his might. However, what he found inside, was very disturbing. A decomposing body of a previous hero. Our hero was flabbergasted, but as he was about to turn back, the door behind him closed, leaving him trapped. He looked around, and saw hundreds, possibly even thousands of skeletons, all laying to form a staircase to the top of the tower. Our hero tried as best as he could, but he could not reach the top of the tower. And so, with nothing else to do, he laid flat on the staircase, closed his eyes, and dreamt. Dreamt like never before, as his body slowly rotted away, leaving the staircase just a bit higher. Perhaps one day, a brave hero will find out what is at the top of that tower, and discover the secrets hidden within.',
    'This newsticker was added in the 1.0 update!',
    'In the code, this is the 100th newsticker!',
    'news is move and funny',
    'Also try Minecraft!',
    'Did you know this game was made by a single dev?',
    'dId YoU kNoW tHiS gAmE wAs MaDe By A sInGlE dEv?!1/!??!',
    'You feel rumbling deep inside yo- oop uhhh...',
    'Newsticker has been summoned!',
    'Man tries to bring an 8th dimension from AD to ED. Universe collapses, players unhappy.',
    'If you have some newsticker suggestions, DM me on discord! (My username is owmyfkngdick)',
    'Dog marriage. Yes, you read that right!',
    'A long time ago, ADs and EDs were at peace. But then, a war broke out. ADs wanted for dimensions to generate the main currency directly, while EDs wanted for dimensions to generate the main currency indirectly. It was a long lasting battle, and at the end of it, ADs lost their 9th dimension, while EDs lost their 8th dimension. They were enemies ever since.',
    'oooooh look at me ima newsticker oooooooh',
    'This newsticker has been brought to you by... Grass-inator 3000! This marvelous device allows you to touch grass whenever you want! Unfortunately, you DO have to touch grass atleast once to activate it... So... Stop playing this game and get out there!',
    'Just watched the minecraft movie. Thanks GOD i went deaf 2 minutes into the movie.',
    'Chicken jockey!',
    'And then i found... THE NETHER.',
    'Also try Exponential Idle!',
    'Hevipelle add me as a newsticker in your game pls pls i will give you 9 dimensions pls pls pls',
    'Ok guys, this is my last message, since my keyboard is almost out of b',
    'Congratulations! You just wasted 3 seconds by reading this newsticker! More time wasters in 6 hours!',
    'FLINT AND STEEL',
    'I. AM. ... AM... who am i?',
    'I am... IMPOTENT RAAAAGE!',
    'One day, a boy named pneunomoultramicroscopicsilicovolcanoconiosis contracted pneunomoultramicroscopicsilicovolcanoconiosis and had to go to the pneunomoultramicroscopicsilicovolcanoconiosis doctor to treat his pneunomoultramicroscopicsilicovolcanoconiosis. Unfortunately, the pneunomoultramicroscopicsilicovolcanoconiosis doctor contracted pneunomoultramicroscopicsilicovolcanoconiosis himself and died.',
    "once upon a time, a young Lad who had an account on galaxy.cLick under the name Of 'help' Was playing energy dimensions. Then, he sAw a PerfEct newstickeR in the game about that god-awFul low tAper faDe meme (which is still massivE) and was Immediately put into the deepeSt rage a person haS, and will ever experience. he Tore through the walls of hIs house, commited multipLe counts of vehicuLar Manslaughter, And even one on an diSSabled lady. and that Is why you don't put a massiVe low taper fadE meme into your game kids. by the way, did you ever wonder why some of the letters were capitalised? well, read them in order, and you'll understand.",
    "This newsticker is not about news, but in fact about newstickers",
    'Give me newsticker suggestions',
    'You should produce atoms NOW! *lighting strike*',
    'We got an energy dimensions update before GTA VI',
    'New update when?',
    '6 hours... 6 hours... 6 hours... 6 hours... 6 hours... 6 hours... 6 hours... 6 hours... ',
    'Crazy? I was crazy once. They put me in a room. A rubber room. A room full of rats. And rats make me CRRRRRRAAAAAZZZZYYYYY!!!!!',
    'Did yo know that secret achievements 3 & 4 were changed, since offline progress was reworked?',
    'For anyone who played version v1 (which is about 90% of people right now), you should be proud of yourself for getting through the terrible balancing.',
    'Challenge 1: ^0.000001 atoms, ^(1/1.0e100) energy, ^^0.0001 ED multipliers, x0 self-esteem.',
    "UM, WHY IS IT '3th' AND NOT '3rd' ?!?!?!?!??!!?!",
    'This game, is in fact, not a 3 quadrillion-th clone of antimatter dimensions.',
    'Hevipelle is god. Hevipelle is life. Hevipelle does not make videos about incremental games anymore.',
    'My battery is about to run out, so please listen! the meaning of life is',
    'I am normal as fuuuuuuuuu',
    'You just rolled a 69. if it is 69, consider yourself extremely lucky!',
    'Think of a number between 1 and 20, and if i guess it, i win. Got it? Okay................................................................................. If your number is 1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19 or 20, you lost!',
    'people dont finish their sentences? Glad I am not one of those people...',
    'To newsticker, or not to newsticker... that is thy question...',
    'I am newstickering all around',
    'I guess you could say i am [title drop]',
    'SEA SALT!!! I NEED YOU, SEA SALT!!!',
    "Hey player, quit horsing around!",
    'Chat im making atoms',
    "I'm atomising, I'm atomising so good",
    "Psst, hey. You just lost The Game.",
    'Die of death? Nah, i want to live of life!',
    'Driving in my car, right after a beer... Hey, that bump is shaped like a deer! DUI? How about you die? ILL GO A HUNDRED MIIIIIIILES, AN HOUR!',
    "If you are reading this, you are literate.",
    "Lowkey 50/20 is pretty easy- I FORGOT TO DEATH COIN FUNTIME FOXY.",
    "Okay, so, the first night is never usually that bad in any of the games, so i'll play through...",
    "Everybody in the FNAF community talks about the bite of '87 or the bite of '83, but nobody talks about the curb stomp of '91.",
    "Alright, i got no idea what to write here. Go make some atoms or something.",
    "What is a skeleton's favourite meal? ........ Come on, guess. ........................... Come on, guess! ............................. GUESS!!! .................. Ugh... ....................... RIBS! IT'S RIIIIIBS!!!!",
    "I press left shift with my thumb. Cry about it.",
    "GET OUT OF MY ROOM, I'm PLAYING ENERGY DIMENSIONS!!!",
    "Welcome back to 6 hour news! Today, vii are again discussing a hot topic known to many - The 'Escapees' organsaion. It has been maide public that the organisation has created a pogket dimension to harvest ungodly amount of antimatter out ovv it. It is unknown what they ae doing with that antimatter, but people haf some speculations, such as using it to poiisson all the nonbelievers, slowly turning the speech center of the bain of anybody affected into mush. More news in 6 hauurs.",
    "[Periodic elements have organised a party] Helium: Wow, this party is gold!",
    "- Hey Rick, where are we? - Damn it, Morty! Can't you see? We have been turned into a newsticker in some random web game! We need- [burp] to escape befor ewe are stuck here forever! Just, follovv me. - Wat are yyyou doinhng? - Overloawding the newstcticker moduleee-ere8WYN*FYM%&5n73V#---------",
    "The king's chariot cannot be stopped.",
    "I am... Hole man! My hole can be used for nearly endless storage. So, fill up my hole whenever you want!",
    "Physicists when they meet an Energy Dimensions player: HOW DID YOU GET INTO MY HOUSE???",
    "Man, the previous newsticker was pretty boring, eh?",
    "The nwxt newsticker will be pretty interesting!",
    "Difficulty modes coming in 6 hours!",
    "Instoducing a new mechanic - The Car! Upon activation, the Car will eat all of your money in all your real-life accounts, and will give you a reaction-style minigame. Within the next hour, the button will flash green for 200ms, and if you don't press it while it is green, all your money is gone. However, if you succeed, you will be granted a firm handshake for your efforts. Not sure what this has to do with cars, though...",
    "Do you know what else is massive? Jason's hitbox. If you know, you know.",
    "NOLI YESTERDAY!!!",
    '"The power of the sun, in the palm of my-- whoops, my star slipped. Clumsy m--- BOOOOOOM"',
    "Huh, a 2.6 player... Wait, where is his ice golem?",
    "Day 122. 'It is the year 2047. The brainrot epidemic has consumed 99.6% of the human race, and it does not seem to stop nor decelerate. All previous attempts to find a vaccine have failed, and the amount of scientist that still think is getting lower by the day.' ... ... Day 134. 'It is over. Everybody who could produce a cure is dead. Alteast, they hope they were. Trapped in an endless loop of confusion and fear. There is no fate worse than that. The only humans left are either underground, living out their last minutes, or are getting a rope and table. God help us all, if you still haven't betrayed us.'",
    "Blah blah blah rate this game 5 stars blah blah give me money blah blah blah",
    //VVV   post-sn newstickers   VVV
    "This supernova stuff aint shi--- [RESETS ALL PROGRESS]",
    "Congrats on reaching Supernova! Another reset layer in 6 hours.",
    "Fun fact: An actual supernova (Normal type 1a) generates about 1.5e44 joules of energy!",
    "Hey kid, do you want to [GO SUPERNOVA]? If you do, i will give you some [STARDUST]",
    "WAS THAT THE SUPERNOVAE OF '87???",
    "If you can see this newsticker, you reached and performed a supernova. Good job, you deserve this newsticker.",
    "This update took me multiple months for some... unknown, DEFINETLY unknown reason...",
    "Can i get some time-limes?",
    "TIME-LIMES - Now in all stores! Experience 3 unique flavours that will fill your brain with flavour! Try FUNDAMENTAL, ENERGETIC, and SUPERNOVAE flavours now and get a 5% discount on your purchase! (99,99$ each, tax included.)",
    "Expanding your universe? How about you try expanding your friend list?",
    "Supernova requires 1.0e616 atoms. Do you know why that it? 1.0e616 is roughly 1.797e308 squared, which is the number oveflow point for most systems. Originally, i wanted to supernova requirement being more accurate, but i decided (was being lazy) to keep it simple for both me and the player.",
    "Did you know that the Supernova reest was originally called Collapse? And stardust was called Collapse Points? Weird times...",
    "The truth is, this game will not get anymore major updates, since i want to focus on other, more serious, projects.",
    "Supernova? Nah, we got Hypernova.",
    "Why are there only 3 timelines? Shouldn't there be more?",
    "Okay player, i do not know at what stage of the game you are in, but let me spoil everything: First, you unlock dimensions, then dimensional expanses, then stars, then sacrifice, then you go SUPERNOVA and unlock AUTOMATION!!! ... ... ... Wait, is this a post-supernova newsticker? Aw...",
    "This newsticker stinks, throw some stardust at it to fix it",
    "Hm... BORGER",
    "I just realised - you gain star DUST, can it be used for... you know... the thing... what is the name of it... oh, right! Compost! What did you think i was going to say?",
    "This newsticker will go supernovae in 5... ... 4... ... 3... ... 2... ... Hold up, let me get a sip of this drink... (loud sips) ... (burp) ... Okay i'm done... what was i going to do again?",
    "Hello, Human! It is I, the GRRRREAT Papyrus!!! The next knight of the knight's guardian club or whatever (never played undertale), NYEHEHEHE!",
]

var offline_speed = 0

const dom = {
    tickerMessage: document.getElementById('tickerMessage'),
    newsticker: document.getElementById('newsticker'),
    youAreCurrentlyIn: document.getElementById('youAreCurrentlyIn'),

    atoms2: document.getElementById('atoms2'),
    atoms2_1: document.getElementById('atoms2.1'),
    atoms2_2: document.getElementById('atoms2.2'),
    atoms_s2: document.getElementById('atoms_s2'),
    atomSubmenu1: document.getElementById('atomSubmenu1'),
    atomSubmenu2: document.getElementById('atomSubmenu2'),

    energy2: document.getElementById('energy2'),
    energy4: document.getElementById('energy4'),
    energy_eff2: document.getElementById('energy_eff2'),
    energy_eff4: document.getElementById('energy_eff4'),
    energySoftcapInfoDiv: document.getElementById('energySoftcapInfoDiv'),
    energySoftcapInfo1: document.getElementById('energySoftcapInfo1'),
    energySoftcapInfo2: document.getElementById('energySoftcapInfo2'),
    
    sacrifice1: document.getElementById('sacrifice1'),
    sacrifice2: document.getElementById('sacrifice2'),
    buy10Sacrifice: document.getElementById('buy10-sacrifice'),

    energy_dim1: document.getElementById('energy_dim1'),
    energy_dim2: document.getElementById('energy_dim2'),
    energy_dim3: document.getElementById('energy_dim3'),
    energy_dim4: document.getElementById('energy_dim4'),
    energy_dim5: document.getElementById('energy_dim5'),
    energy_dim6: document.getElementById('energy_dim6'),
    energy_dim7: document.getElementById('energy_dim7'),

    energy_dim1_1: document.getElementById('energy_dim1.1'),
    energy_dim2_1: document.getElementById('energy_dim2.1'),
    energy_dim3_1: document.getElementById('energy_dim3.1'),
    energy_dim4_1: document.getElementById('energy_dim4.1'),
    energy_dim5_1: document.getElementById('energy_dim5.1'),
    energy_dim6_1: document.getElementById('energy_dim6.1'),
    energy_dim7_1: document.getElementById('energy_dim7.1'),

    buyDimCost1: document.getElementById('buyDimCost1'),
    buyDimCost2: document.getElementById('buyDimCost2'),
    buyDimCost3: document.getElementById('buyDimCost3'),
    buyDimCost4: document.getElementById('buyDimCost4'),
    buyDimCost5: document.getElementById('buyDimCost5'),
    buyDimCost6: document.getElementById('buyDimCost6'),
    buyDimCost7: document.getElementById('buyDimCost7'),
    
    tickspeed1: document.getElementById('tickspeed1'),
    tickspeed2: document.getElementById('tickspeed2'),
    tickspeed3: document.getElementById('tickspeed3'),

    dimExpanse1: document.getElementById('dimExpanse1'),
    dimExpanse2: document.getElementById('dimExpanse2'),
    dimExpanse3: document.getElementById('dimExpanse3'),
    dimExpanse3_5: document.getElementById('dimExpanse3.5'),
    dimExpanse4: document.getElementById('dimExpanse4'),
    dimExpanse5: document.getElementById('dimExpanse5'),
    dimExpanse6: document.getElementById('dimExpanse6'),

    stars1: document.getElementById('stars1'),
    stars3: document.getElementById('stars3'),

    stats1: document.getElementById('stats1'),
    stats1_1: document.getElementById('stats1.1'),
    stats2: document.getElementById('stats2'),
    stats3: document.getElementById('stats3'),
    stats4: document.getElementById('stats4'),
    stats5: document.getElementById('stats5'),
    stats5_5: document.getElementById('stats5.5'),
    stats6: document.getElementById('stats6'),
    stats7_0: document.getElementById('stats7.0'),
    stats7: document.getElementById('stats7'),
    stats7_5: document.getElementById('stats7.5'),
    stats8: document.getElementById('stats8'),
    stats9: document.getElementById('stats9'),
    stats10: document.getElementById('stats10'),

    ED_buy_mode: document.getElementById('ED_buy_mode'),
    ED_buy_mode2: document.getElementById('ED_buy_mode2'),

    stats_effects1_1: document.getElementById('stats_effects1.1'),
    stats_effects1_2: document.getElementById('stats_effects1.2'),
    stats_effects1_3: document.getElementById('stats_effects1.3'),
    stats_effects2_1: document.getElementById('stats_effects2.1'),
    stats_effects3_1: document.getElementById('stats_effects3.1'),
    stats_effects3_2: document.getElementById('stats_effects3.2'),
    stats_effects4_1: document.getElementById('stats_effects4.1'),

    ach_boost: document.getElementById('ach_boost'),
    progressBar: document.getElementById('progressBar'),
    progressBar2: document.getElementById('progressBar2'),

    UIoption1: document.getElementById('UIoption1'),
    UIoption2: document.getElementById('UIoption2'),
    UIoption3: document.getElementById('UIoption3'),
    UIoption4: document.getElementById('UIoption4'),
    UIoption5: document.getElementById('UIoption5'),
    options_notation: document.getElementById('options_notation'),

    buyDim1: document.getElementById('buyDim1'),
    buyDim2: document.getElementById('buyDim2'),
    buyDim3: document.getElementById('buyDim3'),
    buyDim4: document.getElementById('buyDim4'),
    buyDim5: document.getElementById('buyDim5'),
    buyDim6: document.getElementById('buyDim6'),
    buyDim7: document.getElementById('buyDim7'),

    dim4: document.getElementById('dim4'),
    dim5: document.getElementById('dim5'),
    dim6: document.getElementById('dim6'),
    dim7: document.getElementById('dim7'),

    buyStar: document.getElementById('buyStar'),
    buyExpanse: document.getElementById('buyExpanse'),
    buyTickspeed: document.getElementById('buyTickspeed'),

    sacrificeStuff: document.getElementById('sacrifice-stuff'),
    tickspeedStuff: document.getElementById('tickspeed-stuff'),

    stats_effectsDiv3: document.getElementById('stats_effectsDiv3'),
    stats_effectsDiv4: document.getElementById('stats_effectsDiv4'),
    stats_effectsDiv5: document.getElementById('stats_effectsDiv5'),

    menu5: document.getElementById('menu5'),
    menu6: document.getElementById('menu6'),
    menu7: document.getElementById('menu7'),

    subMenu1: document.getElementById('subMenu1.1'),
    subMenu2: document.getElementById('subMenu2.1'),
    subMenu3: document.getElementById('subMenu3.1'),

    goSupernovaButton: document.getElementById('goSupernovaButton'),
    supernovaUpg1: document.getElementById('superUpgEff1'),
    supernovaUpg2: document.getElementById('superUpgEff2'),
    supernovaUpg3: document.getElementById('superUpgEff3'),
    supernovaUpg8: document.getElementById('superUpgEff8'),
    supernovaUpg9: document.getElementById('superUpgEff9'),
    supernovaUpg10: document.getElementById('superUpgEff10'),
    supernovaUpg11: document.getElementById('superUpgEff11'),
    supernovaUpg13: document.getElementById('superUpgEff13'),
    supernovaUpg14: document.getElementById('superUpgEff14'),
    supernovaUpg15: document.getElementById('superUpgEff15'),
    supernovaUpg16: document.getElementById('superUpgEff16'),
    supernovaUpg17: document.getElementById('superUpgEff17'),
    supernovaUpg20: document.getElementById('superUpgEff20'),
    supernovaUpg23: document.getElementById('superUpgEff23'),

    QoLBlock1: document.getElementById('QoLBlock1'),

    superUpgradeBlock1: document.getElementById('superUpgradeBlock1'),
    superUpgradeBlock2: document.getElementById('superUpgradeBlock2'),
    superUpgradeBlock3: document.getElementById('superUpgradeBlock3'),
    superUpgradeBlock4: document.getElementById('superUpgradeBlock4'),

    stardust: document.getElementById('stardust2'),
    stardust1_1: document.getElementById('stardust2.1'),
    stardustGain0_1: document.getElementById('stardustGain0.1'),
    stardustGain0_2: document.getElementById('stardustGain0.2'),
    stardustGain1: document.getElementById('stardustGain1'),
    stardustGain2: document.getElementById('stardustGain2'),

    timelineInfo: document.getElementById('timelineInfo'),
    timelineInfo2: document.getElementById('timelineInfo2'),
    timeline1: document.getElementById('timeline1'),
    timeline1_1: document.getElementById('timeline1.1'),
    timeline1_2: document.getElementById('timeline1.2'),
    timeline1_3: document.getElementById('timeline1.3'),
    timeline1_4: document.getElementById('timeline1.4'),
    timeline2: document.getElementById('timeline2'),
    timeline2_1: document.getElementById('timeline2.1'),
    timeline2_2: document.getElementById('timeline2.2'),
    timeline2_3: document.getElementById('timeline2.3'),
    timeline2_4: document.getElementById('timeline2.4'),
    timeline3: document.getElementById('timeline3'),
    timeline3_1: document.getElementById('timeline3.1'),
    timeline3_2: document.getElementById('timeline3.2'),
    timeline3_3: document.getElementById('timeline3.3'),
    timeline3_4: document.getElementById('timeline3.4'),
    timelineLock1: document.getElementById('timelineLock1'),
    timelineLock2: document.getElementById('timelineLock2'),
    timelineLock3: document.getElementById('timelineLock3'),

    timelineUpgText1_1: document.getElementById('timelineUpgText1.1'),
    timelineUpgText1_2: document.getElementById('timelineUpgText1.2'),
    timelineUpgText1_3: document.getElementById('timelineUpgText1.3'),
    timelineUpgText2_1: document.getElementById('timelineUpgText2.1'),
    timelineUpgText2_2: document.getElementById('timelineUpgText2.2'),
    timelineUpgText2_3: document.getElementById('timelineUpgText2.3'),
    timelineUpgText3_1: document.getElementById('timelineUpgText3.1'),
    timelineUpgText3_2: document.getElementById('timelineUpgText3.2'),
    timelineUpgText3_3: document.getElementById('timelineUpgText3.3'),

    timelineGenerateBtn1: document.getElementById('timelineGenerateBtn1'),
    timelineGenerateBtn2: document.getElementById('timelineGenerateBtn2'),
    timelineGenerateBtn3: document.getElementById('timelineGenerateBtn3'),

    primaryTimeline: document.getElementById('primaryTimeline'),
    secondaryTimeline: document.getElementById('secondaryTimeline'),

    quadrantTierName: document.getElementById('quadrantTierName'),
    quadrantName: document.getElementById('quadrantName'),
    quadrantState: document.getElementById('quadrantState'),
    enterQuadrant: document.getElementById('enterQuadrant'),
    enterQuadrantText: document.getElementById('enterQuadrantText'),
    quadrantReward: document.getElementById('quadrantReward'),
    quadrant6: document.getElementById('quadrant6'),
    quadrant7: document.getElementById('quadrant7'),
    quadrant8: document.getElementById('quadrant8'),
    quadrant9: document.getElementById('quadrant9'),

    universeSize2: document.getElementById('universeSize2'),
    universeSize4: document.getElementById('universeSize4'),
    universeSize5: document.getElementById('universeSize5'),

    galaxies2: document.getElementById('galaxies2'),
    galaxies4: document.getElementById('galaxies4'),
    galaxies5: document.getElementById('galaxies5'),

    universeUpg1_2: document.getElementById('universeUpg1.2'),
    universeUpg1_3: document.getElementById('universeUpg1.3'),
    universeUpg2_2: document.getElementById('universeUpg2.2'),
    universeUpg2_3: document.getElementById('universeUpg2.3'),
    universeUpg3_2: document.getElementById('universeUpg3.2'),
    universeUpg3_3: document.getElementById('universeUpg3.3'),

    universeUpg1: document.getElementById('universeUpg1'),
    universeUpg2: document.getElementById('universeUpg2'),
    universeUpg3: document.getElementById('universeUpg3'),

    galaxyUpg1: document.getElementById('universeUpg4'),
    galaxyUpg2: document.getElementById('universeUpg5'),
    galaxyUpg3: document.getElementById('universeUpg6'),

    galaxyUpg1_2: document.getElementById('galaxyUpg1.2'),
    galaxyUpg1_3: document.getElementById('galaxyUpg1.3'),
    galaxyUpg2_2: document.getElementById('galaxyUpg2.2'),
    galaxyUpg2_3: document.getElementById('galaxyUpg2.3'),
    galaxyUpg3_1: document.getElementById('galaxyUpg3.1'),
    galaxyUpg3_2: document.getElementById('galaxyUpg3.2'),
    galaxyUpg3_3: document.getElementById('galaxyUpg3.3'),


    auto_thingButton1: document.getElementById('auto_thingButton1'),
    auto_thingButton1_1: document.getElementById('auto_thingButton1.1'),
    auto_thing1: document.getElementById('auto_thing1'),
    auto_thingButton2: document.getElementById('auto_thingButton2'),
    auto_thingButton2_1: document.getElementById('auto_thingButton2.1'),
    auto_thing2: document.getElementById('auto_thing2'),
    auto_thingButton3: document.getElementById('auto_thingButton3'),
    auto_thingButton3_1: document.getElementById('auto_thingButton3.1'),
    auto_thing3: document.getElementById('auto_thing3'),
    auto_thingButton4: document.getElementById('auto_thingButton4'),
    auto_thingButton4_1: document.getElementById('auto_thingButton4.1'),
    auto_thing4: document.getElementById('auto_thing4'),
    auto_thingButton5: document.getElementById('auto_thingButton5'),
    auto_thingButton5_1: document.getElementById('auto_thingButton5.1'),
    auto_thing5: document.getElementById('auto_thing5'),
    auto_thingButton6: document.getElementById('auto_thingButton6'),
    auto_thingButton6_1: document.getElementById('auto_thingButton6.1'),
    auto_thing6: document.getElementById('auto_thing6'),
    auto_thingButton7: document.getElementById('auto_thingButton7'),
    auto_thingButton7_1: document.getElementById('auto_thingButton7.1'),
    auto_thing7: document.getElementById('auto_thing7'),
    auto_thingButton8: document.getElementById('auto_thingButton8'),
    auto_thingButton8_1: document.getElementById('auto_thingButton8.1'),
    auto_thing8: document.getElementById('auto_thing8'),
    auto_thingButton9: document.getElementById('auto_thingButton9'),
    auto_thing9: document.getElementById('auto_thing9'),
    auto_thingButton10: document.getElementById('auto_thingButton10'),
    auto_thing10: document.getElementById('auto_thing10'),

    auto_thingCheck1: document.getElementById('auto_thingCheck1'),
    auto_thingCheck2: document.getElementById('auto_thingCheck2'),
    auto_thingCheck3: document.getElementById('auto_thingCheck3'),
    auto_thingCheck4: document.getElementById('auto_thingCheck4'),
    auto_thingCheck5: document.getElementById('auto_thingCheck5'),
    auto_thingCheck6: document.getElementById('auto_thingCheck6'),
    auto_thingCheck7: document.getElementById('auto_thingCheck7'),
    auto_thingCheck8: document.getElementById('auto_thingCheck8'),
    auto_thingCheck9: document.getElementById('auto_thingCheck9'),
    auto_thingCheck10: document.getElementById('auto_thingCheck10'),
    automationTier2: document.getElementById('automationTier2'),

    blackHoleInfo1_1: document.getElementById('blackHoleInfo1.1'),
    blackHoleInfo1_2: document.getElementById('blackHoleInfo1.2'),
    blackHoleInfo1_3: document.getElementById('blackHoleInfo1.3'),
    blackHoleInfo3_0: document.getElementById('blackHoleInfo3.0'),
    blackHoleInfo3_1: document.getElementById('blackHoleInfo3.1'),
    blackHoleInfo3_2: document.getElementById('blackHoleInfo3.2'),
    blackHoleInfo3_3: document.getElementById('blackHoleInfo3.3'),
    blackHoleDensity1: document.getElementById('blackHoleDensity1'),
    blackHoleDensity2: document.getElementById('blackHoleDensity2'),

    density_dim1: document.getElementById('density_dim1'),
    density_dim2: document.getElementById('density_dim2'),
    density_dim3: document.getElementById('density_dim3'),
    density_dim4: document.getElementById('density_dim4'),
    density_dim5: document.getElementById('density_dim5'),
    density_dim6: document.getElementById('density_dim6'),
    density_dim7: document.getElementById('density_dim7'),

    density_dim1_1: document.getElementById('density_dim1.1'),
    density_dim2_1: document.getElementById('density_dim2.1'),
    density_dim3_1: document.getElementById('density_dim3.1'),
    density_dim4_1: document.getElementById('density_dim4.1'),
    density_dim5_1: document.getElementById('density_dim5.1'),
    density_dim6_1: document.getElementById('density_dim6.1'),
    density_dim7_1: document.getElementById('density_dim7.1'),

    buyDensityDimCost1: document.getElementById('buyDensityDimCost1'),
    buyDensityDimCost2: document.getElementById('buyDensityDimCost2'),
    buyDensityDimCost3: document.getElementById('buyDensityDimCost3'),
    buyDensityDimCost4: document.getElementById('buyDensityDimCost4'),
    buyDensityDimCost5: document.getElementById('buyDensityDimCost5'),
    buyDensityDimCost6: document.getElementById('buyDensityDimCost6'),
    buyDensityDimCost7: document.getElementById('buyDensityDimCost7'),

    buyDensityDim1: document.getElementById('buyDensityDim1'),
    buyDensityDim2: document.getElementById('buyDensityDim2'),
    buyDensityDim3: document.getElementById('buyDensityDim3'),
    buyDensityDim4: document.getElementById('buyDensityDim4'),
    buyDensityDim5: document.getElementById('buyDensityDim5'),
    buyDensityDim6: document.getElementById('buyDensityDim6'),
    buyDensityDim7: document.getElementById('buyDensityDim7'),

    densityMil1: document.getElementById('densityMil1'),
    densityMil2: document.getElementById('densityMil2'),
    densityMil3: document.getElementById('densityMil3'),
    densityMil4: document.getElementById('densityMil4'),
    densityMil5: document.getElementById('densityMil5'),
    densityMil6: document.getElementById('densityMil6'),

    densityMilEff1: document.getElementById('densityMilestoneEff1'),
    densityMilEff3: document.getElementById('densityMilestoneEff3'),
    blackHoleImg: document.getElementById('blackHoleImg'),

    storyBlock2: document.getElementById('storyBlock2'),
    storyBlock3: document.getElementById('storyBlock3'),
    storyBlock4: document.getElementById('storyBlock4'),
    storyBlock5: document.getElementById('storyBlock5'),
    storyBlock5_5: document.getElementById('storyBlock5.5'),
    storyBlock6: document.getElementById('storyBlock6'),
    storyBlock7: document.getElementById('storyBlock7'),
    storyBlock8: document.getElementById('storyBlock8'),
    storyBlock9: document.getElementById('storyBlock9'),
    storyBlock10: document.getElementById('storyBlock10'),
    storyBlock11: document.getElementById('storyBlock11'),
    storyBlock12: document.getElementById('storyBlock12'),

    explorationArea: document.getElementById('explorationArea'),
    explorationArea2: document.getElementById('explorationArea2'),
    collectionProgress: document.getElementById('collectionProgress'),

    areaItem1: document.getElementById('areaItem1'),
    areaItem2: document.getElementById('areaItem2'),
    areaItem3: document.getElementById('areaItem3'),
    areaItem4: document.getElementById('areaItem4'),
    areaItem5: document.getElementById('areaItem5'),
    areaItem6: document.getElementById('areaItem6'),
    areaItem7: document.getElementById('areaItem7'),
    areaItem8: document.getElementById('areaItem8'),

    collectionProgressBar: document.getElementById('collectionProgressBar'),
    expLevelText: document.getElementById('expLevelText'),
    expLevelProgress: document.getElementById('expLevelProgress'),
    expLevelBar: document.getElementById('expLevelBar'),

    expLevelBoostText: document.getElementById('expLevelBoostText'),
    expLevelUpgText1_1: document.getElementById('expLevelUpgText1.1'),
    expLevelUpgText1_2: document.getElementById('expLevelUpgText1.2'),
    expLevelUpgText2_1: document.getElementById('expLevelUpgText2.1'),
    expLevelUpgText2_2: document.getElementById('expLevelUpgText2.2'),
    expLevelUpgText3_1: document.getElementById('expLevelUpgText3.1'),
    expLevelUpgText3_2: document.getElementById('expLevelUpgText3.2'),
    expLevelUpgText4_1: document.getElementById('expLevelUpgText4.1'),
    expLevelUpgText4_2: document.getElementById('expLevelUpgText4.2'),
    expLevelUpgText5_1: document.getElementById('expLevelUpgText5.1'),
    expLevelUpgText5_2: document.getElementById('expLevelUpgText5.2'),

    explorationUpgrade4: document.getElementById('explorationUpgrade4'),
    explorationUpgrade5: document.getElementById('explorationUpgrade5'),

    changeArea1: document.getElementById('changeArea1'),
    changeArea2: document.getElementById('changeArea2'),
};

function benchmarkUItick(runs = 10000) {
    const times = [];

    for (let i = 0; i < runs; i++) {
        const start = performance.now();
        UItick();
        const end = performance.now();
        times.push(end - start);
    }

    const avg = times.reduce((a, b) => a + b, 0) / runs;
    console.log(`Average UItick() time over ${runs} runs: ${avg.toFixed(4)} ms`);
}

const quadrantTiernames = [
    '1-1',

    '2-1',
    '2-2',
    '2-3',
    '2-4',

    '3-1',
    '3-2',
    '3-3',
    '3-4',
]

const quadrantNames = [
    '"Black dwarfs"',

    '"Half-power"',
    '"Slow decay"',
    '"Low energy"',
    '"No exponents day"',

    '"Anti-synergy"',
    '"Timeline X"',
    '"Halt!"',
    '"The balance"',
]

const blackHoleTierNames = ['PERFECT','UNBELIEVABLE','OUTSTANDING','EXCELLENT','GREAT','GOOD','DECENT','CONTAINED','MEH','SO-SO','WOBBLY','POOR','BAD','VERY BAD','AWFUL','CRITICAL','UNSTABLE','COLLAPSING','CATASTROPHIC','CATACLYSMIC','GALACTIC','UH-OH']
const blackHoleTierColors = ['rgb(170, 0, 255)','green','lime','rgb(77, 255, 0)','rgb(119, 255, 0)','rgb(170, 255, 0)','rgb(217, 255, 0)','rgb(255, 251, 0)','rgb(255, 208, 0)','rgb(255, 166, 0)','rgb(255, 132, 0)','rgb(255, 89, 0)','rgb(255, 47, 0)','rgb(255, 0, 0)','rgb(184, 0, 0)','rgb(150, 0, 0)','rgb(255, 0, 0)','rgb(255, 0, 0)','rgb(44, 0, 188)','rgb(88, 0, 188)','rgb(187, 0, 255)','rgb(0, 255, 221)','rgb(130, 73, 0)']
const blackHoleHueRotate = ['300deg','135deg','126deg','117deg','108deg','99deg','90deg','81deg','72deg','63deg','54deg','45deg','36deg','27deg','18deg','9deg','0deg','0deg','240deg','270deg','300deg','200deg','30deg']