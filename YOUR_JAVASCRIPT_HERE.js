// Write your JS here

const hero = {};
hero.name = 'Frodo';
hero.heroic = true;
hero.inventory = [];
hero.health = 10;
hero.weapon = {
    type: 'Golden Stick',
    damage: 2,
}

// creating a handler that reaches an existing element in the DOM
const container = document.getElementById('container');

// INN
// create an element inn
const inn = document.createElement('IMG');
// assign it an id
inn.id = 'inn';
// append the inn to the container 
container.append(inn);
// create a event handler that waits for the click event
inn.addEventListener('click', function() { rest(hero)});

// DAGGER
const dagger = document.createElement('IMG');
dagger.id = 'dagger';
container.append(dagger);
dagger.addEventListener('click', function() {
    pickUpItem(hero, {type: 'dagger', damage: 2})
});

// BAG
const bag = document.createElement('IMG');
bag.id = 'bag';
container.append(bag);
bag.addEventListener('click', function() {
    equipWeapon(hero);
})




function rest(hero) {
    hero.health = 10;
    return hero;
}

function pickUpItem(hero, item){
    hero.inventory.push(item);
}

function equipWeapon(hero){
    if (hero.inventory.length === 0) {
        console.log ('Inventory is empty');
        return undefined;
        
    } else {
        hero.weapon = hero.inventory[0]
    }
}


// ## Section 4 - Bonus: Show me what you got




// - Implement fighting an enemy. (how you do it is up to you!)

// - When an enemy or weapon gets clicked it gets deleted from the page


const tryOut = {};

function displayStats() {
    const heroName = document.createElement('p');
    heroName.id = 'heroName';
    heroName.innerText = `Hero Name: ${hero.name}`
    const details = document.createElement('p');
    details.id = 'otherDetails';
    details.innerText = `Hero Health: ${hero.health}\n Hero Weapon Type: ${hero.weapon.type}\n Hero Weapon Damage: ${hero.weapon.damage} `;
    container.append(heroName);
    container.append(details); 
}

displayStats();

function displayForm() {
    const form = document.getElementById('invisible');
    form.setAttribute('id', 'visible');
}


// const button = document.createElement('button');

function changeHeroName() {
    event.preventDefault();
    const newHeroName = document.getElementById('userHeroName');
    hero.name = newHeroName.value;
    const oldHeroName = document.getElementById('heroName');
    oldHeroName.innerText = `Hero Name: ${hero.name}`;
    const form = document.getElementById('visible');
    form.setAttribute('id', 'invisible');
    newHeroName.value = null;
    
}
