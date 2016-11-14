function THashStorage () {

    this.name;
    this.alcohol;
    this.formula;

    this.reset = function () {
        DrinkStorage = {};
    };
    
    this.addValue = function (Key, Value) {
        addV();
        console.log(DrinkStorage);
    };

    this.getValue = function (Key){
        // return DrinkStorage[Key];
        getV();
    };

    
    this.deleteValue = function (Key) {
        
    };
    
    this.getKeys = function () {
        
    }
}

var DrinkStorage = new THashStorage();