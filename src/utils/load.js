const loadIndex = (num, length) => {
    if (length > 3) {
        if (num - 1 < 0) {
            return [0, 1, length - 1]
        }
        if (num + 1 > length) {
            return [0, num, num + 1]
        }
        else {
            return [num - 1, num, num + 1]
        }
    }
    return num
};
   
export { loadIndex }