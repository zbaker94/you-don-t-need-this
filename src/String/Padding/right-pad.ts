import isString from "../isString";

const rightPad = (string: string, length: number, char: string = " ") : string => {
    if(!isString(string)){
        throw new Error("String to pad must be of type string.")
    }

    // TODO check if length is number

    // TODO check that length is greater than string.length

    const padding = paddingString(length - string.length, char);
    return string + padding;
}

export default rightPad;