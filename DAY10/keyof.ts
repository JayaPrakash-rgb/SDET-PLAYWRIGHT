// using keyof 

type user = {
  id: number;
  username: string;
  admin?: boolean;
  email?: string;
}                                                        
type UserKeys = keyof user;                                        // Using keyof to ensure a variable can ONLY be a valid property name of 'user'
let propertyToUpdate: UserKeys;
propertyToUpdate = "username";                                     // Valid
propertyToUpdate = "id";                                          // Valid
// propertyToUpdate = "age";                                      // Error: "age" does not exist in type 'user'

const newuser: user = {
  id: 1,
  username: "jaya prakash",
  admin: true,
  email: "jp@example.com"
}
function getUserProperty(u: user, key: UserKeys) {
  return u[key];
}

console.log(getUserProperty(newuser, "username")); // Output: "jaya prakash"
console.log(getUserProperty(newuser, "id"));       // Output: 1