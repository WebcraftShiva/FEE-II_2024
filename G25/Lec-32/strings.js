let msg  = "    meet me at...   "

// Immutable:
msg[2]= 'x';
console.log(msg);


// 1.Trim:
newMsg = msg.trim();
console.log(newMsg);
console.log(msg);

// 2. toUpperCase:
uppercase = msg.toUpperCase()
console.log(uppercase);

// 3.toLowerCase:
let name = "HARRY"
lowercase = name.toLowerCase()
console.log(lowercase)

// 4.indexOf:

let textMsg = "sonam_bewafa_hai";
console.log(textMsg.indexOf("bewafa"))
console.log(textMsg.indexOf("_"))

// 5. method chaining:

let fruit = "   bananas";
let fruitTrim = fruit.trim()
console.log(fruitTrim)
let fruitUpper =fruitTrim.toUpperCase()
console.log(fruitUpper)
let fruitAfterChaining = fruit.trim().toUpperCase();
console.log(fruitAfterChaining)

// 6. slice: (n,n-1)

let mrngMsg = "kaalu kaliya";

console.log(mrngMsg.slice(3));
console.log(mrngMsg.slice(-3));

console.log(mrngMsg.slice(3,7))


// 7. Replace:
let txt = "i love moon";
console.log(txt);
let newtxt = txt.replace("moon","Yue")
console.log(newtxt)

//  8: Repeat:
let message = "An idiot in the class always do ruckus. ";
console.log(message.repeat(3));