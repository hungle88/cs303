function ask(question, yes, no) {
if (confirm(question)) yes()
else no();
}
ask(
"Do you agree?",
() => Console.log("you agreed."),
() => Console.log("You canceled the execution")

)



