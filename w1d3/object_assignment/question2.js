function isEmpty(obj) {

for (let key in obj) {

    return false;
}
return true;


}

let obj ={name: "hung",};

let output = isEmpty(obj);

console.log(output);