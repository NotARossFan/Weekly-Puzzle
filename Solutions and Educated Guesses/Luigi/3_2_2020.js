rough implementation of script

const openLockers = new Array(100)
  .fill({isOpen:true})
  .map((l,i) => {
    const locker = {
      isOpen:true,
      id: i+1
    }
    return locker;
  });

// iterate through lockers
// is id 100?
// index is the mod
// check to see if a loker is open and toggle it for all of the index
// recurse

const openedAndClosedLockers = openLockers.map(l => {
  l.isOpen = l.id % 2 === 0 ? false : true;
  return l;
});

let result = openedAndClosedLockers;

const recurse = (studentNumber) => {
  if(studentNumber <= 100) {
    return result.map(l => {
      if(
        (l.id > 2 && studentNumber > 2) &&
        l.id % studentNumber === 0 
      ) {
        // console.log('locker #', l.id, 'student#',studentNumber)
       l.isOpen = !l.isOpen;
     }
     return l;
    });
  }
}

openedAndClosedLockers
  .forEach(l => {
    recurse(l.id);
  });

console.log(result.filter(l=> l.isOpen));
