import isEven from "../isEven"

const isOdd = (num: number) => {
    return !isEven(num);
}

export default isOdd;