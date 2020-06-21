export function findSmallestDivisor(s:string, t:string) {
    const chunks = s.split(t);
    const isDivisible = chunks.every(chunk => chunk === '');

    if(!isDivisible){ 
        return -1;
    }

    const chars = t.split('');
    let smallestDivisorLength = t.length;
    let divisor = '';
    
    for(let i = 0; i < chars.length; i++){
        divisor += chars[i];

        if(divisor === t){
            break;
        }

        const divisorLength = findSmallestDivisor(t, divisor);

        if(divisorLength > 0){
            smallestDivisorLength = divisorLength;
            break;
        }
    }

    return smallestDivisorLength;
}