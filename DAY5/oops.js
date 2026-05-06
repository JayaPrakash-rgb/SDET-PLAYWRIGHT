class Animal 
{
    constructor(name) 
    {
        this.name = name;
    }

    speak()
     {
        console.log(`${this.name} makes a sound.`);
    }
}
 
const dog = new Animal("Jhonny");
const cat = new Animal("Whiskers");
dog.speak();
cat.speak();

// example -1

class car{
    constructor( brand){
this.brand = brand;
    }
    performance(){
        console.log(`${this.brand} mad performance.`);
    }
}
const wheel=new car("TATA");
const beast=new car("mahinddra");
wheel.performance();
beast.performance();
