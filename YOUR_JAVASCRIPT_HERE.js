// Write your JS here

const hero = {};
hero.name = 'frodo';
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


function rest(hero) {
    hero.health = 10;
    return hero;
}

function pickUpItem(hero, item){
    hero.inventory.push(item);
}

function equipWeapon() {

}