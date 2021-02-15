let mt = document.getElementById('my-team');

fighters = [
    {
        id: 0,
        name: 'Smart and ripped monkey',
        speciality: 'rip your face off',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            mt.innerHTML += `<li id="spook${this.id}">${this.name}</li>`;
        }
    },
    {
        id: 1,
        name: 'Zombie snake',
        speciality: 'bite',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            mt.innerHTML += `<li id="spook${this.id}">${this.name}</li>`;
            
        }
    },
    {
        id: 2,
        name: 'Sociopathic ghost',
        speciality: 'manipulate',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            console.log('first fighter ready');
            yourFighters.push(fighters[this.id]);
            console.log(yourFighters);
            mt.innerHTML += `<li id="spook${this.id}">${this.name}</li>`;
            
        }
    },
    {
        id: 3,
        name: 'A fast Frankenstein',
        speciality: 'like regular Frankenstein, but fast',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            
        }
    },
    {
        id: 4,
        name: 'Count Dracula',
        speciality: 'sleep, spook, drink blood, repeat',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            
        }
    },
    {
        id: 5,
        name: 'Your crazy nazi aunt',
        speciality: 'make people uncomfortable',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            
        }
    },
    {
        id: 6,
        name: 'A kid high on candy',
        speciality: 'give headaches',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            
        }
    },
    {
        id: 7,
        name: 'That girl from Grudge',
        speciality: 'spook',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            
        }
    },
]

let yourFighters = [];

//Del 1
let spookList = document.getElementById('spook-list');
let listItem = spookList.getElementsByTagName('li');

let addEvent = function() {
    for(let i = 0; i < listItem.length; i++) {
        //Lägg till eventlyssnare på fighter-knapparna
        console.log(i);
        document.getElementById(`spook${i}`).addEventListener('click', () => {
            //Kalla på dess fighters objekt-metod
            fighters[i].addFighter();
            let element = document.getElementById(`spook${i}`);
            element.remove();
        });
    }
};

addEvent();

//Del 2
//Skriv objekt-metoderna

//Lägg in vald fighter i listan 'yourFighters'
//Lägg in namnet i en <li> i HTML-en under 'Your Fighters'




//Some next level shit
//När du klickat på ett val ur den vänstra listan, 
//så ska det objektet försvinna ur den listan och från HTML'en