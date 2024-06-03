const paddingString = (length: number, char: string) : string => {
    // TODO check that length is number
    // TODO check if char is char

    return Array(length).fill(char).join("")
}

export default paddingString;