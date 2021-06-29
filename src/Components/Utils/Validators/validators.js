export const requiredField = value => {
    if (value)
    return undefined;
    
    return "Field is Required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max allowed length is ${maxLength} symbols`;
    return undefined;
}
