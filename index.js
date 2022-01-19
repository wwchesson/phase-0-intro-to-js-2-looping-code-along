const friends = ([ "Michael", "Charlie", "Will" ], "birthday") ;

function writeCards(friends) {
    for (let i = 0; i < friends.length; i++) {
    console.log (`Thank you, ${friends[i]}, for the wonderful birthday gift!`)
  debugger;
  }
  return friends;
}

function countDown( i ) {
    while (i > 0) {
        console.log(i);
        i -= 1;
    }
    console.log(i);
}
