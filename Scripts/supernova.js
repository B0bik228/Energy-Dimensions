const supernovaPrices = [
    0,
    0,
    0,
    0,
    Math.log10(3),
    Math.log10(7),
    Math.log10(12),
    Math.log10(26),
    Math.log10(35),
    Math.log10(200),
    Math.log10(1600),
    Math.log10(2e6),
    11,
    24,
    9999,
    9999,
    9999,
    9999,
    9999,
    9999,
    9999,
    9999,
    9999,
]

const supernovaQOLPrices = [
    Math.log10(8),
    Math.log10(24),
    2,
    Math.log10(900),
    5,
    9.30101,
    Math.log10(1.5e17),
    49,
    55,
    9999,
    9999,
]

const supernovaUnlockPrices = [
    0,
    Math.log10(4),
    Math.log10(30000),
    19,
    2100000000,
]

const supernovaUpgs = document.querySelectorAll('.supernovaUpgrade');
const supernovaQOLUpgs = document.querySelectorAll('.supernovaQOLUpgrade');
const supernovaUnlockUpgs = document.querySelectorAll('.supernovaUnlockUpgrade');

supernovaUpgs.forEach(div => {
    let order = div.getAttribute('order')
    div.addEventListener('click', () => {
        if(game.Supernova.SupernovaPoints>supernovaPrices[order]-0.001 && !game.SupernovaUpg.includes(order)){
            game.Supernova.SupernovaPoints = sub_logs(game.Supernova.SupernovaPoints,supernovaPrices[order])
            game.SupernovaUpg.push(order)
        }
    });
});

supernovaQOLUpgs.forEach(div => {
    let order = div.getAttribute('order')
    div.addEventListener('click', () => {
        if(game.Supernova.SupernovaPoints>supernovaQOLPrices[order]-0.001 && !game.SupernovaUpg.includes(order+'Q')){
            game.Supernova.SupernovaPoints = sub_logs(game.Supernova.SupernovaPoints,supernovaQOLPrices[order])
            game.SupernovaUpg.push(order+'Q')
        }
    });
});

supernovaUnlockUpgs.forEach(div => {
    let order = div.getAttribute('order')
    div.addEventListener('click', () => {
        if(game.Supernova.totalSupernovaPoints>supernovaUnlockPrices[order]-0.001 && !game.SupernovaUpg.includes(order+'U')){
            game.SupernovaUpg.push(order+'U')
        }
    });
});


setInterval(() => {
    supernovaUpgs.forEach(div => {
        let order = div.getAttribute('order')
        if(game.SupernovaUpg.includes(order)){
            div.style.backgroundColor = 'rgb(8, 91, 0)'
            div.style.borderColor = 'rgb(14, 167, 0)'
            div.style.color = 'white'
        }else if(game.Supernova.SupernovaPoints>supernovaPrices[order]-0.001){
            div.style.backgroundColor = 'rgb(62, 0, 82)'
            div.style.borderColor = 'rgb(96, 0, 126)'
            div.style.color = 'white'
        }else{
            div.style.backgroundColor = 'rgb(31, 0, 41)'
            div.style.borderColor = 'rgb(69, 0, 90)'
            div.style.color = 'white'
        }
    });

    
    supernovaQOLUpgs.forEach(div => {
        let order = div.getAttribute('order')
        if(game.SupernovaUpg.includes(order+'Q')){
            div.style.backgroundColor = 'rgb(8, 91, 0)'
            div.style.borderColor = 'rgb(14, 167, 0)'
            div.style.color = 'white'
        }else if(game.Supernova.SupernovaPoints>supernovaQOLPrices[order]-0.001){
            div.style.backgroundColor = 'rgb(62, 0, 82)'
            div.style.borderColor = 'rgb(96, 0, 126)'
            div.style.color = 'white'
        }else{
            div.style.backgroundColor = 'rgb(31, 0, 41)'
            div.style.borderColor = 'rgb(69, 0, 90)'
            div.style.color = 'white'
        }
    });


    supernovaUnlockUpgs.forEach(div => {
        let order = div.getAttribute('order')
        if(game.SupernovaUpg.includes(order+'U')){
            div.style.backgroundColor = 'rgb(8, 91, 0)'
            div.style.borderColor = 'rgb(14, 167, 0)'
            div.style.color = 'white'
        }else if(game.Supernova.totalSupernovaPoints>supernovaUnlockPrices[order]-0.001){
            div.style.backgroundColor = 'rgb(62, 0, 82)'
            div.style.borderColor = 'rgb(96, 0, 126)'
            div.style.color = 'white'
        }else{
            div.style.backgroundColor = 'rgb(31, 0, 41)'
            div.style.borderColor = 'rgb(69, 0, 90)'
            div.style.color = 'white'
        }
    });
    

}, 250);

