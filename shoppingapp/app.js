// We create an empty array called 'cart' to store our products
let cart = [];

// This function adds a new product when the "Add to Cart" button is clicked
function addToCart() {
    // 1. Get the HTML elements for name and price
    let inputName = document.getElementById("product-name");
    let inputPrice = document.getElementById("product-price");

    // 2. Read what the user typed
    let name = inputName.value;
    let price = Number(inputPrice.value);

    // 3. Check if the user entered valid text and numbers
    if (name === "" || price <= 0 || isNaN(price)) {
        alert("Please enter a valid product name and a price greater than 0");
        return; // Stop the function here
    }

    // 4. Create a completely new item object
    let item = {
        id: Date.now(), // Generate a unique ID using the current time
        name: name,
        price: price,
        quantity: 1   // Start with 1 item
    };

    // 5. Add our new object to the 'cart' array
    cart.push(item);

    // 6. Clear the inputs so they are empty for the next product
    inputName.value = "";
    inputPrice.value = "";

    // 7. Update the screen
    showCart();
}

// This function goes through our cart array and updates the HTML page
function showCart() {
    // 1. Find the HTML elements we need to change
    let listHTML = document.getElementById("cart-list");
    let totalItemsHTML = document.getElementById("total-items");
    let totalPriceHTML = document.getElementById("total-price");

    // 2. Clear out the old list first
    listHTML.innerHTML = "";

    // 3. Create variables to hold our new totals
    let totalItems = 0;
    let totalPrice = 0;

    // 4. Loop through every single item inside our 'cart' array
    for (let i = 0; i < cart.length; i++) {
        let currentItem = cart[i];
        
        // Add to our totals mathematically
        totalItems = totalItems + currentItem.quantity;
        totalPrice = totalPrice + (currentItem.price * currentItem.quantity);

        // Create the HTML for this specific list item
        // We use string concatenation (adding strings together) for simplicity
        let listItem = "<li>";
        listItem += "<strong>" + currentItem.name + "</strong>";
        listItem += " - ₹" + currentItem.price + "<br><br>";
        
        // Buttons to change quantity and remove
        listItem += "<button onclick='decreaseQuantity(" + currentItem.id + ")'>-</button> ";
        listItem += "Quantity: " + currentItem.quantity + " ";
        listItem += "<button onclick='increaseQuantity(" + currentItem.id + ")'>+</button>";
        listItem += "<button onclick='removeItem(" + currentItem.id + ")' style='margin-left: 20px; color: red;'>Remove</button>";
        
        listItem += "</li>";

        // Add this list item HTML into our actual page
        listHTML.innerHTML += listItem;
    }

    // 5. Finally, put the new totals on the screen
    totalItemsHTML.innerText = totalItems;
    totalPriceHTML.innerText = totalPrice;
}

// Function to increase an item's quantity
function increaseQuantity(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity = cart[i].quantity + 1;
        }
    }
    // Update the screen after changing the data
    showCart();
}

// Function to decrease an item's quantity
function decreaseQuantity(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            // Only decrease if it's more than 1
            if (cart[i].quantity > 1) {
                cart[i].quantity = cart[i].quantity - 1;
            } else {
                // If it hits 0, just remove it entirely
                removeItem(id);
                return; // Stop the loop 
            }
        }
    }
    showCart();
}

// Function to delete an item completely
function removeItem(id) {
    // Create a brand new array
    let newCart = [];

    // Loop through old cart
    for (let i = 0; i < cart.length; i++) {
        // Only keep the items that don't match the ID we want to delete
        if (cart[i].id !== id) {
            newCart.push(cart[i]);
        }
    }
    
    // Replace old cart with the new cart
    cart = newCart;

    // Update the screen
    showCart();
}
