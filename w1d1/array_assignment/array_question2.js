let styles =["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.round(styles.length/2)] = "Classic";
console.log(styles);
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);