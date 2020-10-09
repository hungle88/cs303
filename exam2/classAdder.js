/* eslint-disable require-jsdoc */
"use strict";

let node4 = { name: "label", children: null };
let node5 = { name: "input", children: null };
let node3 = { name: "p", children: null };
let node2 = { name: "div", children: [node4, node5] };
let node1 = { name: "body", children: [node2, node3] };

function classAdder(node) {
  node.class = "classNode";
  let childNode = node.children;
  if (childNode) {
    childNode.forEach(classAdder);
  }
}

classAdder(node1);
console.log(node1);
console.log(node2);
console.log(node3);
console.log(node4);
console.log(node5);
