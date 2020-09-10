function multiplyNumeric(obj) {
    for (let key in obj) {

        if (isFinite(obj[key])) {
            obj[key] = obj[key] * 2;


        }
    }

    return obj;

}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let output = multiplyNumeric(menu);

console.log(output);