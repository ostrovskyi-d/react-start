// export const required = value => {
//     if (value) return undefined;
//     return console.error("Field is required");
// };
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `You can't insert more than ${maxLength} symbols`;
    return undefined;
};

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

export const isLengthValid = (maxLength) => (value) =>
    value && value.length > maxLength ? `You cant't use more than ${maxLength} symbols` : undefined;

export const required = (string) => {
    if(string && string.length > 10) return "MORE THAN 10 SYMBOLS BLEAT0"
    else return undefined;
};

