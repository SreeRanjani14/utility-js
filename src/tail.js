var list = [1,2,3]
const tail = (list) => {
    if(list.length == 0)
        return undefined;
    return list.slice(1);
}
module.exports = tail;