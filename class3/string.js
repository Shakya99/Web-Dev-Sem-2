let str = " Hello Developers cat dog "; // 0 based indexing.

console.log(str)
console.log(str.length)   // length
//
console.log(str.charAt(9));        // char at given index

console.log(str.charCodeAt(9));    // ASCII code at given index

// Substring
console.log(str.substring(10));    // startIdx only will print until the end.

// start < end
console.log(str.substring(10, 12)); // str[10], str[11]

// start > end
console.log(str.substring(12, 10)); // str[10], str[11] // behave as str.substring(10,12)

// -ve index
console.log(str.substring(-100));  // str.substring(0)


