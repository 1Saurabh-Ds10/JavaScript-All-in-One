/*
-------------------------------------------------------------------------------------------------------------
Deep Clone Object
_________________

Copy every properties and nested objects to another object
From:
https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Question/blob/master/README.md
--------------------------------------------------------------------------------------------------------------

*/



/*

const obj = {
  name: 'Yoman',
  version: '1.0',
  type: {
    support: ['react']
  }
}

console.log(obj == deepClone(obj)); // false

*/
const deepClone = (obj) => {

  const cloneObj = {};

  for (let o in obj) {

    let prop = obj[o];

    if (typeof prop === 'object' && prop !== null) {
      cloneObj[o] = deepClone(prop);
    } else {
      cloneObj[o] = prop;
    }

  }

  return cloneObj;

}

