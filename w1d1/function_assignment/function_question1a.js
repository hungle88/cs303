function checkAge(age){
    age = prompt("How old are you?: ");
   return (age > 18) ? true : confirm('Did your parents allow you?');
}

alert(checkAge());