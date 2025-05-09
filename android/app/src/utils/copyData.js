export const copyObject = (objectName) => {
    let item = {};

    for (let key in objectName) {
        item[key] = objectName[key];
    }

    return item;
};
