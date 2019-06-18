//1. Public 

this.Table="Window table";
this.garage={
    Table:"Garage's Table"
}
this.garage.Table;


//2. private
let johnsroom={
    Table:"john's Table"
};

// this.johnsroom.Table;
// this code will not work as "johnsroom" is private...
//we can access the table using this
johnsroom.Table;   

//3. inside a method

let johnsroom={
    table:"john's Table",
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
}
// here "this" tells the method to specifically johns table as we are in john's room

//4. inside a Function
//here function will try to access the global object
// 'using strict';

const cleanTable=function(){
    console.log(`cleaning ${this.Table}`);
}
//---------cleanTable();
// this will not work as the function does not know what this is ...
// therefore we use "CALL" function
// it helps using someone else's function on someone else's object..
//like this 
cleanTable.call(this);
// if having arguments in function
//---------cleanTable.call(this,argument1,argument2,argument3)

//5. inside inner function
const cleanTable =function(soap1){
    const innerFunc =function(soap){
        console.log(`cleaning ${this.Table} with ${soap}`);
    }
    console.log(`cleaning ${this.Table} with ${soap1}`);
    innerFunc(soap);
}
cleanTable.call(this,"soap");

//this code will show error saying cannot read the property of table
//for insider functions usind "this" is not useful unless using "Call" "Apply" or "Bind"
//------------------------Sollutions
//    1. Supply "this" outside the innerFunction (in a variable)

const cleanTable =function(soap1){
    let that=this;
    const innerFunc =function(soap){
      
        console.log(`cleaning ${that.Table} with ${soap}`);
    }
    console.log(`cleaning ${that.Table} with ${soap1}`);
    innerFunc("soap");   //---------see below
}
cleanTable.call(this,"soap");

//     2.using "Call" and "Bind"

innerFunc.call(this,"soap");
innerFunc.bind(this)("soap"); 


//     3. Using Arrow functions

const cleanTable =function(soap1){
    
    const innerFunc =(soap)=>{
      
        console.log(`cleaning ${this.Table} with ${soap}`);
    }
    console.log(`cleaning ${this.Table} with ${soap1}`);
    innerFunc("soap");
}
cleanTable.call(this.garage,"soap");


//6. Inside a Constructor

let createRoom=function(name){
    this.table=`${name}'s table`;

}//constructor
const cleanTable=function(){
    console.log(`cleaning ${this.table}`);
}
const johnsroom=new createRoom("john");

cleanTable.call(johnsroom,"soap");

// we can use prototype it adds the function to the prototype of create room.
// it doesnot add it to createroom but to a space called prototype space 

let createRoom=function(name){
    this.table=`${name}'s table`;
}
createRoom.prototype.cleanTable=function(){
    console.log(`cleaning ${this.table}`);
}
const johnsroom=new createRoom("john");

johnsroom.cleanTable('soap')

//7. inside a Class

class CreateRoom {
    constructor(name){
        this.table=`${name}'s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table}`);
    }
}

const johnsroom= new CreateRoom("john");
johnsroom.cleanTable("some soap");
