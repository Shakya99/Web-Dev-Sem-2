// Given String
let str = "Vedam is Knowledge and Wisdom";

// 1. Length
console.log("Length:", str.length);

// 2. Uppercase & Lowercase
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// 3. Substring (0 to 5)
console.log("Substring:", str.substring(0, 5));

// 4. Replace "Wisdom" with "Power"
let newStr = str.replace("Wisdom", "Power");
console.log("Replaced String:", newStr);

// 5. Palindrome Check ("Vedam")
let word = "Vedam";

let reversed = word.split("").reverse().join("");

if (word.toLowerCase() === reversed.toLowerCase()) {
    console.log("Palindrome");
} else {
    console.log("Vedam is not a palindrome");
}