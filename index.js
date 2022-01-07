const recipients = (["Guadalupe", "Ollie", "Aki"], surprise);


function writeCards(recipients) {
    for (let i = 0; i < recipients.length; i++) {
        console.log(`Thank you, ${recipients[i]}, for the wonderful surprise gift!`);
        debugger;
    }

    return recipients;
}
writeCards(recipients);

function countDown( i ) {
    while (i > 0) {
        console.log(i);
        i -= 1;
    }
    console.log(i);
}
