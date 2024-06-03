import isMultipleOf from "../isMultipleOf";

const isEven = (num: number) => {
    return isMultipleOf(num, 2)
}

export default isEven;