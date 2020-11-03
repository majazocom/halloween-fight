let mt = document.getElementById('my-team');

fighters = [
    {
        id: 0,
        name: 'Smart and ripped monkey',
        speciality: 'rip your face off',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            //#my-team.innerHTML += <li>Smart and ripped monkey</li>
            let index = fighters.findIndex(x => x.id === 0);
            mt.innerHTML += `<li id="fighter0" onclick="remove(${index})">Smart and ripped monkey</li>`;
            yourFighters.push(fighters[0]);
            fighters.splice(index, 1);
            
            let el = document.getElementById('spook0');
            el.remove();
        }
    },
    {
        id: 1,
        name: 'Zombie snake',
        speciality: 'bite',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let index = fighters.findIndex(x => x.id === 1);
            mt.innerHTML += `<li id="fighter1">Zombie snake</li>`;
            yourFighters.push(fighters[1]);
            fighters.splice(index, 1);
            
            let el = document.getElementById('spook1');
            el.remove();
        }
    },
    {
        id: 2,
        name: 'Sociopathic ghost',
        speciality: 'manipulate',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let index = fighters.findIndex(x => x.id === 2);
            mt.innerHTML += `<li id="fighter2">Sociopathic ghost</li>`;
            yourFighters.push(fighters[2]);
            fighters.splice(index, 1);
            
            let el = document.getElementById('spook2');
            el.remove();
        }
    },
    {
        id: 3,
        name: 'A fast Frankenstein',
        speciality: 'like regular Frankenstein, but fast',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let index = fighters.findIndex(x => x.id === 3);
            mt.innerHTML += `<li id="fighter3">A fast Frankenstein</li>`;
            yourFighters.push(fighters[3]);
            fighters.splice(index, 1);
            
            let el = document.getElementById('spook3');
            el.remove();
        }
    },
    {
        id: 4,
        name: 'Count Dracula',
        speciality: 'sleep, spook, drink blood, repeat',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let index = fighters.findIndex(x => x.id === 4);
            mt.innerHTML += `<li id="fighter4">Count Dracula</li>`;
            yourFighters.push(fighters[4]);
            console.log(yourFighters);
            fighters.splice(index, 1);
            
            let el = document.getElementById('spook4');
            el.remove();
        }
    },
    {
        id: 5,
        name: 'Your crazy nazi aunt',
        speciality: 'make people uncomfortable',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let index = fighters.findIndex(x => x.id === 5);
            mt.innerHTML += `<li id="fighter5">Your crazy nazi aunt</li>`;
            yourFighters.push(fighters[5]);
            fighters.splice(index, 1);
            
            let el = document.getElementById('spook5');
            el.remove();
        }
    },
    {
        id: 6,
        name: 'A kid high on candy',
        speciality: 'give headaches',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let index = fighters.findIndex(x => x.id === 6);
            mt.innerHTML += `<li id="fighter6">A kid high on candy</li>`;
            yourFighters.push(fighters[6]);
            fighters.splice(index, 1);
            
            let el = document.getElementById('spook6');
            el.remove();
        }
    },
    {
        id: 7,
        name: 'That girl from Grudge',
        speciality: 'spook',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            
            let index = fighters.findIndex(x => x.id === 7);
            console.log(index)
            mt.innerHTML += `<li id="fighter${index}">That girl from Grudge</li>`;
            yourFighters.push(fighters[7]);
            fighters.splice(index, 1);

            let el = document.getElementById('spook7');
            el.remove();
        }
    },
]

let yourFighters = [];

//Del 1
//Lägg till eventlyssnare på fighter-knapparna
//Kalla på dess objekt-metod
document.getElementById('spook0').addEventListener('click', fighters[0].addFighter);
document.getElementById('spook1').addEventListener('click', fighters[1].addFighter);
document.getElementById('spook2').addEventListener('click', fighters[2].addFighter);
document.getElementById('spook3').addEventListener('click', fighters[3].addFighter);
document.getElementById('spook4').addEventListener('click', fighters[4].addFighter);
document.getElementById('spook5').addEventListener('click', fighters[5].addFighter);
document.getElementById('spook6').addEventListener('click', fighters[6].addFighter);
document.getElementById('spook7').addEventListener('click', fighters[7].addFighter);

//Del 2
//Skriv objekt-metoderna

//Lägg in vald fighter i listan 'yourFighters'
//Lägg in namnet i en <li> i HTML-en under 'Your Fighters'




//Some next level shit
//När du klickat på ett val ur den vänstra listan, 
//så ska det objektet försvinna ur den listan och från HTML'en