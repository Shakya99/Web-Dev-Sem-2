// 1.Function Declaration

function Declaration(quantity) {
    let price = 500;
    let total = price * quantity;

    
    if (quantity >= 10) {
        total = total * 0.9; 
    }    //discounted by 10%

    
    total = total * 1.18; //18% gst

    return total;
}

console.log(Declaration(1)); 

const Expression = function(quantity)
   {
    let price = 500;
    let total = price * quantity;

    
    if (quantity >= 10) {
        total = total * 0.9; 
    }    //discounted by 10%

    
    total = total * 1.18; //18% gst

    return total;

}
console.log(Expression(1)); 
