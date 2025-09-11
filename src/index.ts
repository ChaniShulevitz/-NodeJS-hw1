import pkg from 'lodash';
const { uniqBy, orderBy, minBy,map } = pkg;



interface User{
    name: string;
    id: string;
    yearOfBirth:number;
}
class Service {

  private users: User[];

 constructor() {
    this.users = []; }

    addUser(user:User):void{
       
        if(user.id.length==9&&user.yearOfBirth<2025&&user.yearOfBirth>1905){

            this.users.push(user);
        }
    }
   getTheOldest(){
const oldest= minBy(this.users,function(x){return x.yearOfBirth});
console.log(oldest);


 }
getAllNames() {
    return orderBy(uniqBy(this.users, 'name'), ['name'], ['asc']);
}


    
}

const ser= new Service();
ser.addUser({name:'chani',id:'214408144',yearOfBirth:2005});
ser.addUser({name:'tamar',id:'214408155',yearOfBirth:2006});
ser.addUser({name:'yossi',id:'111111111',yearOfBirth:1000});


console.log(ser.getAllNames());
ser.getTheOldest();



