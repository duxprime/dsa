/**
 * Mathematically finds the largest integer in a product.
 */
export function getLargestInProductModulus(num1:number, num2:number){
    const product = num1 * num2;
    const factor = 10;
    let largest = 0;
    let remaining = product;

    while(remaining > 0){
        let current  = remaining % factor;
        remaining = Math.floor(remaining/factor);
        if(current > largest){
            largest = current;
        }
    }

    return largest;
}