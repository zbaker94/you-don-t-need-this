import isEqualNumber from "../isEqual"

const isNotEqualNumber = (firstNumber: number, secondNumber: number) => {
    return !isEqualNumber(firstNumber, secondNumber);
}

export default isNotEqualNumber;