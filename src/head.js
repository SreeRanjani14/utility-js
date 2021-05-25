var list = [1, 2, 3]
const head = (list) => {
    if(list.length == 0)
        return null;
    else
        return list[0];
}
module.exports = head;

const tail = (list) => {
    return list.slice(1);
}
module.exports = tail;