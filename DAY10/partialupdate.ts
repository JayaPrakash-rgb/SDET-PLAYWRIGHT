//  partial update

interface user{
    id: number;
    name: string;
    email:string;
    age:number;
}
const u1:user = {
    id:1,
    name:"jp",
    email:"",
    age:0
}
const u2:user = {
    id:101,
    name:"",
    email:"xzxzxgmail.com",
    age:23
}
function updateuser(existinguser:user , updates:Partial<user>){
    return{...existinguser,...updates}
}
const upuser = updateuser(u1,{email:"vcbn@gmail,com",age:25,id:100})
const upuser1=updateuser(u2,{name:"jayaprakash"})
console.log(upuser);
console.log(upuser1);
