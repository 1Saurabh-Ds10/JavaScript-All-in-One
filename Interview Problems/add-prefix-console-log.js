/*
-------------------------------------------------------------------------------------------------------------
Add a prefix to console.log
___________________________

For every console log, add a prefix and show line number
From:
https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Question/blob/master/README.md
--------------------------------------------------------------------------------------------------------------

*/

const log = (...args) => {

  args.unshift(`My Cool App`);

  console.log.apply(console, args);
}

log("Success", "Log"); // Output: "My Cool App" "Success" "Log"



/*

With line number 

*/


var isDebug = true;
let log;
if (isDebug) {

  log = console.log.bind(window.console)
}
else {

  log = function () { }

}


log('yo man');