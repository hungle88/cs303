let bookSelection = [];

function add(evt) {
  let bookItem = library.bookItems.get(evt.target.parentNode.value);
  bookSelection.push(bookItem);
  updateBookSelection(bookItem);
}

function updateBookSelection(bookItem) {
  let table = document.getElementById("book_cart");
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");

  td1.innerHTML = bookItem.bookName;
  td2.innerHTML = bookItem.authorName;
  td3.innerHTML = bookItem.isbn;
  td4.innerHTML = bookItem.chargePerDay;



  row.append(td1);
  row.append(td2);
  row.append(td3);
  row.append(td4);



  table.append(row);
}

function displayInfo() {
  document.getElementById("info").innerHTML = `Hi ${currentStudent.name}`;
  let table = document.getElementById("book_cart");
  let row = document.createElement("tr");
  // let td2 = document.createElement("td");
  // td2.innerHTML = foodItem.price_in_points;    // row.append(td2);
}

// function makePurchase() {
//   if (!currentStudent) {
//     alert("Please select a student first.");
//     return;
//   }
//   let balance_before_purchase = currentStudent.mealCard.balance;
//   for (let item of shoppingCart) {
//     try {
//       currentStudent.buyFoodItem(item);
//     } catch (e) {
//       if (e instanceof ApplicationError) {
//         alert("Insufficient balance");
//         currentStudent.mealCard.balance = balance_before_purchase;
//         return;
//       }
//     }
//   }

//   alert(
//     `Thanks for the purchase, your remaining balance is ${currentStudent.mealCard.balance}`
//   );
//   displayInfo();
//   resetShoppingCart();
// }

// function resetShoppingCart() {
//   let table = document.getElementById("shopping_cart");
//   let rows = document.querySelectorAll("#shopping_cart>tr");
//   for (let i = rows.length; i > 0; i--) {
//     table.deleteRow(i);
//   }
//   shoppingCart = [];
// }
