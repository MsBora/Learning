var people = [
    { firstname : 'Mahatma', lastname: 'Candhi', age: 78 }, 
    { firstname : 'Goutam', lastname: 'buddha', age: 80},
    { firstname : "Karan", lastname: 'shah', age: 50},
    { firstname : 'Kapil', lastname: 'pandey', age: 23},
    { firstname : 'Ravi', lastname: 'bhakuni', age: 43},
    { firstname : 'somesh', lastname: 'joshi', age: 63}
];
  var small=people[0].age;
  var index=0;
for(var i=0;i<people.length;i++)
{
    if(small>people[i].age)
    {
        index=i;
        small=people[i].age;
    }

}
console.log(`${people[index].firstname} ${people[index].lastname}`);