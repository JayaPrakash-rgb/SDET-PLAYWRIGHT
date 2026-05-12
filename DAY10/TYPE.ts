//using type in ts

type user = {
  id: number;
  username: string;
  admin?: boolean;
  email?: string;                                          // The '?' means this property is optional
}

const newuser: user = {
  id: 1,
  username: "jaya prakash",
  admin: true,
  email:""
}
const olduser:user={
    id:2,
    username:"karthik",
    admin: false  ,
        email:"xyz@gmial.com",
          
}

console.log(newuser);
console.log(olduser);