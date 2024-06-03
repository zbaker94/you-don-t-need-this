const isEqualNumber = (firstNumber: number, secondNumber: number) => {

    if(typeof firstNumber !== "number"){
        throw new Error("First argument must be a number");
    }

    if(typeof secondNumber !== "number"){
        throw new Error("Second argument must be a number");
    }

    return firstNumber === secondNumber;
}

export default isEqualNumber;