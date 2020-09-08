let styles =["Jazz", "Blues"];
alert(styles);
styles.push("Rock-n-Roll");
alert(styles);
styles[Math.round(styles.length/2)] = "Classic";
alert(styles);
alert(styles.shift());
styles.unshift("Rap", "Reggae");
alert(styles);