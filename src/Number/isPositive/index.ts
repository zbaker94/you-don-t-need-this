import isNumber from "../isNumber";

const isPositive = (num : number) => {
    if(!isNumber(num)){
        throw new Error("to check isPositive, must pass a number")
    }
    return num > 0;
}

export default isPositive;