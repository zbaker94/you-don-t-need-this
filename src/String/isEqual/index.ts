const isStringEqual = (firstString: string, secondString: string) => {
    if(typeof firstString !== "string"){
        throw new Error("First argument should be a string.");
    }

    if(typeof secondString !== "string"){
        throw new Error("Second argument should be a string.");
    }

    return firstString === secondString;
}

export default isStringEqual;