class coffeemachine {
    #watertemp =60;

    #boilwater()
     { return `boil water at ${this.#watertemp} degrees`;

    }
    #grindbeans(){
        return `grind beans`;
    }
    brew(){
        const water=this.#boilwater();
        const beans=this.#grindbeans();
        return `${water} ${beans} brewing is done`;
    }
}
const mycoffee = new coffeemachine;
console.log(mycoffee.brew());

////////// my example
class mangojuice{
    #mango="yellow mangos";

#fruit(){
    return `collect ${this.#mango} and cut in to pices `;
}
#ice(){
    return `add sufficent ice and sugar`;
}
blend(){
    const selectfruit = this.#fruit();
    const process =this.#ice();
    return `${selectfruit} ${process} blend for your mangojuice `;
    }
}
const my= new  mangojuice;
console.log(my.blend());
