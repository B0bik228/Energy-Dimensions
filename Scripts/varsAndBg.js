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
                star.style.animation = `collapseBgAnim2-1 ${duration}s linear`;
            }
            else{
                yy = 50
                star.style.animation = `collapseBgAnim2 ${duration}s linear`;
            }
            star.classList.add("bgStar2");
            star.style.left = `${xx}px`;
            star.style.top = `${yy}px`;


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

function popup(title,info,info2,close)
{
    document.getElementById('popupBg').style.display = 'block'
    document.getElementById('popupTitle').textContent = title
    document.getElementById('popupInfo').textContent = info
    document.getElementById('popupInfo2').textContent = info2
    document.getElementById('popupClose').innerHTML = close
}

function closePopup()
{
    document.getElementById('popupBg').style.display = 'none'
    if(game.settings.offlineTicks == 100 &&! offline_skipped &&! game.sAchievements.includes(4)){getAch(4,false)}
    offline_skipped = true
}

function newstickerEvent()
{
    if(tickerMessage == 'Click this newticker for nothing!')
    {
        popup('Well...','you got nothing? But... you see this, so you kinda got something...','','Okay?')
    }
    else if(tickerMessage == "Don't click this newticker!")
    {
        popup('Hey!','I told you not to click it! You now get 0.0001% less atoms for 1 minute!','','Regret')
    }
    else if(tickerMessage == "Or is it?")
    {
        popup('Or is it?','Or is it?','Or is it?','Is it?')
    }
    else if(tickerMessage == "Click this newsticker to win the game!")
    {
        popup('Insufficient material!',"Sorry, you don't have enough paperclips!",'','Bummer...')
    }
    else if(tickerMessage == "If you tap here, you will delay the next update by 1 minute!")
    {
        popup('You monster',">:(",'','>:(')
    }
    else if(tickerMessage == "Hey, can i borrow 5 second dimensions?")
    {
        if(game.energy_dims.energy_dim2.amount>Math.log10(5))
        {
            game.energy_dims.energy_dim2.amount = sub_logs(game.energy_dims.energy_dim2.amount,Math.log10(5))
            alert('Thanks')
        }
    }
    else if(tickerMessage == "Tip: Clicking some newtickers can do something cool, maybe even give you a secret achievement!")
    {
        alert('Not this one!')
        if(!game.sAchievements.includes(8)){getAch(8,false)}
    }
    else if(tickerMessage == "Alright, one 8th dimension... that will be [Infinity] atoms.")
    {
        popup('Insufficient material!',"It appears your credit card has been declined, sir.",'Maybe try getting your money up.',':(')
    }
}

var game = {
    menu:1,
    subMenu:1,
    achievement_boost1:0,
    achievement_boost2:0,
    achievement_boost3:0,
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
    sacrifice:{
        eff:0,
        exp:0.05,
        potential:0
    },
    stars:{
        amount:0,
        power:1,
        cost:40,
        best: 0,
    },
    collapse:{
        collapseSpeed:0,
        collapsePoints:-999,
        totalCollapsePoints:-999,
        bestCollapsePoints:-999,
        collapsing:false,
        collDivider:0,
    },
    stats:{
        playtime:0,
        tickers_seen:1,
        menu:1,
        bestPoints:-999,
        timeInCollapse:0,
        sAch2Clicks:0,
        timesBoughtWith1:0,
    },
    settings:{
        UIrate:25,
        bgEff:true,
        topBar:0,
        topBartext:['News','Percentage','Currencies','Title','Nothing','OFF'],
        newsSpeed:1,
        fontSize:1,
        decimalPlaces:2,
        notation:0,
        notationNames:['Mixed scientific','Scientific','Engineering','Logarithm','Letters','Log2()','Double logarithm','Infinity','Blind'],
        offlineTicks:1000,
    },
    records:{
        collapse:[],
        collapse2:[],
        collapse3:[],
    },
    achievements:[],
    sAchievements:[],
    last_online:Date.now(),
}

var defaults = {
    test1:1,
}


const notation1 = ['K','M','B','T','Qa','Qi','Sx','Sp','Oc','No','Dc',]
const notation2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var tickerX = 100
var tickerMessage = 'This is probably a newsticker... Or is it?'
const newsTickers = ['The eighth dimension is a lie',
    'Scientists spent over 800 million dollars to figure out, that burning money instead of coal is not that effective.',
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
    'Also try [undefined] Dimensions',
    '//TODO: Myself, remove this newsticker',
    'Why do we call antimatter anti-? If we were made of antimatter, we would call it matter, right? But then, the antimatter we would be made out of would be matter for us, so will matter become antimatter?',
    "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo. Yes, that's right, i really like writing buffalos.",
    "If you dont matter, do you antimatter?",
    'If you are not hevipelle, come back when you are.',
    'Click this newticker for nothing!',
    "Don't click this newticker!",
    "The next newsticker is true.................................................................The previous newsticker is false. (Had to use dots instead of spaces since they don't work for some reason)",
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
    'Follow me on Youtube! (My channel name is Mamkagod btw)',
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
    'If a tree falls in the woods, how many years do you have to spend in prison for the destruction of private property?',
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
    'Once upon a time, a lone adventurer set out to find the love of his life. After 30 long and grueling years, he arrived at a lone tower. Like many times before, he called out for anybody that might be residing within the tower. After a minute without a response, he turned around and was about to leave, however, a faint voice was heard from inside the tower, possibly gasping for air. The brave hero barged into the tower, breaking apart the locks on it with all his might. However, what he found inside, was very disturbing. A decomposing body of a previous here. Our hero was flabbergasted, but as he was about to turn back, the door behind him closed, leaving him trapped. He looked around, and saw hundreds, possibly even thousands of skeletons, all laying to form a staircase to the top of the tower. Our hero tried as best as he could, but he could not reach the top of the tower. And so, with nothing else to do, he laid flat on the staircase, closed his eyes, and dreamt. Dreamt like never before, as his body slowly rotted away, leaving the staircase just a bit higher. Perhaps one day, a brave hero will find out what is at the top of that tower, and discover the secrets hidden within.',
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
    'oooooh look at me ima nesticker oooooooh',
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
]

var offline_speed = 0