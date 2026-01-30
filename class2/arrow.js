let searchQuery = "  Learn JavaScript Functions Arrow IIFE  ";

// Trim
let cleanedQuery = searchQuery.trim();
console.log(cleanedQuery);
console.log(cleanedQuery.length);

// Case conversion
console.log(cleanedQuery.toLowerCase());
console.log(cleanedQuery.toUpperCase());

// Extract "JavaScript"
console.log(cleanedQuery.substring(6, 16));
console.log(cleanedQuery.slice(6, 16));

// Keyword checks
console.log(cleanedQuery.toLowerCase().includes("functions"));
console.log(cleanedQuery.toLowerCase().includes("arrow"));
console.log(cleanedQuery.toLowerCase().includes("iife"));

// Character & ASCII
console.log(cleanedQuery.charAt(6));
console.log(cleanedQuery.charCodeAt(0));

// Case-insensitive check
console.log(CleanedQuery.toLowerCase().includes("javascript"));
