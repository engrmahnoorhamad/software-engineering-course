const accountId = 144553
let accountEmail = "mahnoor@gmail.com"
var accountPassword = "12345"
accountCity = "skt"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ha@gmail.com"
accountPassword = "21212121"
accountCity = "ibd"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])