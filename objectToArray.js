function objectToArray(obj) {
    // return Object.keys(obj).map(x => [x,obj[x]]);
    return Object.entries(obj);
}