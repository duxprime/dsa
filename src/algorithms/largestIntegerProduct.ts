/**
 * Mathematically finds the largest integer in a product.
 */
export function getLargestInProductModulus(num1:number, num2:number){
    const factor = 10;
    let product = num1 * num2;
    let largest = 0;

    while(product > 0){
        let current  = product % factor;
        product = Math.floor(product/factor);
        if(current > largest){
            largest = current;
        }
    }

    return largest;
}

export function getLargestInProductString(num1:number, num2:number){
    const productParts = (num1 * num2).toString().split('');
    let largest = 0;

    while(productParts.length > 0){
        let currentString = productParts.pop();
        if(!currentString){
            break;
        }

        let current = +currentString;
        if(current > largest){
            largest = current;
        }
    }

    return largest;
}