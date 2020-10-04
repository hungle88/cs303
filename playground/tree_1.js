"use strict";
let node4 = {
    name: "label",
    value: "Name", 
    children: null
};

let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};

let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};

let node1 = {
    name: "body",
    children:  [node2, node3],
    value: null,
};


function treeWalk(node) {
console.log(node.name +": "+node.value);

let childNodes = node.children;
if(childNodes !== null) {

    childNodes.forEach(treeWalk);
        
    }

} 

treeWalk(node1);