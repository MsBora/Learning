var database=[
    {
        userName:'max',
        password:'123'
    },
    {
        userName:'kapil',
        password:'789'
    },
    {
        userName:'somesh',
        password:'456'
    },
    {
        userName:'karan',
        password:'7645'
    }
];

var newsFeed=[
    {
        userName:"Mohneesh",
        timeline:"This is So cool"
    },
    {
        userName:"Suraj",
        timeline:"i am so bored"
    }
];

function IsValid(Usrname,Usrpass){
    for(var i=0;i<database.length;i++)
    {
        if(Usrname===database[i].userName && Usrpass===database[i].password)
        {
            return true;
        }
    }

    return false;
}

function signIn(user,pass){
    if(IsValid(user,pass))
    {
        console.log(newsFeed);
    }
    else
    { 
        alert('wrong username or password');
    }
}

var Uname = prompt("Enter User Name");
var Upass = prompt("Enter Password");

signIn(Uname,Upass)