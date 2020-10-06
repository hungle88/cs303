let node4 = {
  name: "label",
  value: "Name",
  children: null,
};
let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null,
};
let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null,
};
let node2 = {
  name: "div",
  value: null,
  children: [node4, node5],
};
let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};

function treeWalk(node) {
  console.log(node.name + ": " + node.value);
  let childNodes = node.children;
  if (childNodes) {
    childNodes.forEach(treeWalk);
  }
}

treeWalk(node1);

console.log("***iteration***");

function treeIteration(node) {
  console.log(node.name + ": " + node.value);
  let childNodes = node.children;
  while(childNodes.length > 0) {
      let anode = childNodes.pop();
      console.log(anode.name + ": " + anode.value)
      if (anode.children) {
          childNodes =[...childNodes, ...anode.children];
      }
  }
}

treeIteration(node1);