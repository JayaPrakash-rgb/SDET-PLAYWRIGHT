

interface Person {
    id: number;
    name: string;
    age: number;
    role: Role;                                          // using enum for role 
    isAdmin?: boolean;                                    // optional property ?   denoted by ?
}

interface Person {
    email: string;                                         // merge interface to add email property
}

enum Role {
    User = "USER",                                     // enum allowed set of named constants.
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
}

const user: Person = {
    id: 1,
    name: "Aaryan",
    age: 25,
    role: Role.User,
    email: "aaryan@gmail.com"
};

const admin: Person = {
    id: 2,
    name: "Arush",
    age: 30,
    email: "arush@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin);


//  Tuple    ->>>>> fixed length arrays

  let height: [number ,number] = [6,5];          // here in tuple we can enter input  only how much size we have given in  delceration .
  console.log("height",height);

//array of numbers 
let arr: number[] = [1, 2, 3]; 
console.log("Array:", arr);