"use strict";

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

/**
 *  Recursive solution
 * @param {object} node is part of tree
 * @returns {undefined} print out nodes
 */
function treeWalk(node) {
  console.log(node.name + ":  " + node.value);
  let childNodes = node.children;
  if (childNodes) {
    childNodes.forEach(treeWalk);
  }
}

treeWalk(node1);

/**
 *  iterative solution
 * @param {object} node is part of tree
 * @returns {undefined} print out nodes
 */
function treeIteration(node) {
  console.log(node.name + ": " + node.value);

  let childNodes = node.children;
  while (childNodes.length > 0) {
    let lastNode = childNodes.pop();
    console.log(lastNode.name + ": " + lastNode.value);
    if (lastNode.children !== null) {
      childNodes = [...childNodes, ...lastNode.children];
    }
  }
}

treeIteration(node1);
