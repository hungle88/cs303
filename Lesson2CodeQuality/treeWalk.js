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

// eslint-disable-next-line require-jsdoc
function treeWalk(node) {
    console.log(node.name + ":  " + node.value);
    let childNodes = node.children;
    if (childNodes) { 
        
        childNodes.forEach(treeWalk); //loop through all children

    }
}

treeWalk(node1);

/**
 *  iterative version of tree traversal
 * @param {object} node is part of tree
 * @returns {undefined} just prints out nodes
 */
function treeIteration(node) {
    console.log(node.name + ":  " + node.value);
    let childNodes = node.children;
    console.log(childNodes);
    while (childNodes && childNodes.length !== 0) {
        console.log(childNodes);
        let nextNode = childNodes.shift();  //remove the first node
        console.log(nextNode);
        console.log(nextNode.name + ":  " + nextNode.value);
        if (nextNode.children !== null) {
            /* get all children of nextNode and also node children other than nextNode */
            // const childNodes2 = childNodes.concat(nextNode.children); //2 ways of concatenating array elements into a single array
            childNodes = [ ...childNodes, ...nextNode.children];
        }
    }
}

console.log("iterative version");
treeIteration(node1);

    
