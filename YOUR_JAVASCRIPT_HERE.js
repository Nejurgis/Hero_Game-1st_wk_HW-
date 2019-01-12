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



// - Create a form that allow users to change the name of their hero.

// - Call `displayStats` when some data of the hero has change to update the page.

// - Implement fighting an enemy. (how you do it is up to you!)

// - When an enemy or weapon gets clicked it gets deleted from the page




function displayStats() {
    const details = document.createElement('p');
    console.log(details);
    details.innerText = `Hero Name: ${hero.name} \n Hero Health: ${hero.health}\n Hero Weapon Type: ${hero.weapon.type}\n Hero Weapon Damage: ${hero.weapon.damage} `;
    container.append(details);

}
displayStats();

const button = document.createElement('button');
button.innerText = 'I am a button!'
container.append(button);