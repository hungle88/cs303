function isEmpty(obj) {

    for (let key in obj) {

        return false;
    }
    return true;


}

let obj = {};

let output = isEmpty(obj);

alert(output);