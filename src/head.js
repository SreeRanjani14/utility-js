var list = [1, 2, 3]
const head = (list) => {
    if(list.length == 0)
        return null;
    else
        return list[0];
}
module.exports = head;