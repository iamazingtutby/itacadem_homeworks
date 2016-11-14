function addV() {
    var _name = prompt('Название коктейля', '');
    DrinkStorage.name = _name;

    var _alcohol = confirm('Алкогольный?');
    DrinkStorage.alcohol = (_alcohol) ? 'Да' : 'Нет';

    var _formula = prompt('Рецепт коктейля', '');
    DrinkStorage.formula = _formula;
}

function getV() {
    var _name = prompt('Название коктейля', '');
    // DrinkStorage.name = _name;
    if(DrinkStorage.name == _name){
        alert('Название: ' + DrinkStorage.name + '\n' + 'Алкогольный:  ' + DrinkStorage.alcohol + '\n' + 'Рецепт: ' + DrinkStorage.formula)
    } else {
        alert('Нет такого');
    }

    console.log(_name);
}