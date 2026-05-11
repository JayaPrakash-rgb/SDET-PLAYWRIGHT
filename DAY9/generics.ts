 // generics
 
 function identity<T>(arg: T): T {
    return arg;
}

 let output1= identity<number>(20);
 let output2=identity<string>("jp");
 let output3= identity<boolean>(true);

 console.log(output1,output2,output3);
console.log();



//  Generic interface for a bag that can hold any type of content
 interface Bag<T> {
    content: T;
}
 const stringBag: Bag<string> = {content: "Apple"};
 const numberBag: Bag<number> = {content: 5};

 console.log(stringBag, numberBag);
console.log();



 class Storage<T> {
    private items: T[] = [];

    addItems(item: T): void {                          // no return type
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index]!;       // non-null assertion operator to indicate that the item will exist at the given index
    }
}
const names = new Storage<string>();
names.addItems("jp");
names.addItems("bk");
names.addItems("arun");
console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3 because there is no data for index 3.
console.log();



//
interface HasLength {
    length: number;
}
 // generics with contraints | extends keyword

function logLength<T extends HasLength>(arg: T): void {            // T -> property .length --> string, arrays
    console.log(arg.length);
}

logLength("Aaryan"); // string --> length
logLength([1, 2, 3]); // array --> length
//logLength(10); // number --> X             // because here we given a number that which
