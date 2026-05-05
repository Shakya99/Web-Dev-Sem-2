//take input from user and print it onClick of the button
const searchInput = document.querySelector("input");
const searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
    //alert("i was clicked");
    const query = searchInput.value;
    //Call API
    fetch(`https://api.weatherapi.com/v1/current.json?key=5c762cd24f654ca6aeb41652260302&q=${query}`)
        
    

    searchInput.value = "";

});
