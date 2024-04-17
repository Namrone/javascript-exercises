const findTheOldest = function(person) {
    const currentDate = new Date();
    const oldestName = person.map(function findAge(person){
        if(typeof person.yearOfDeath === 'undefined'){person.yearOfDeath = currentDate.getFullYear()};
        let age = person.yearOfDeath - person.yearOfBirth;
        return age;
    });
    let index = 0;
    let oldestPerson = oldestName[0];
    for(let i = 0; i < oldestName.length; i++){
        if(oldestPerson < oldestName[i+1]){
            oldestPerson = oldestName[i+1];
            index = i + 1;
        }
    }
    return person[index];
};

// Do not edit below this line
module.exports = findTheOldest;
