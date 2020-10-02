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
  console.log(node.name + ":  " + node.value);
  let childNodes = node.children;
  console.log(childNodes);
  while (childNodes && childNodes.length !== 0) {
    console.log(childNodes);
    let nextNode = childNodes.shift();
    console.log(nextNode);
    console.log(nextNode.name + ":  " + nextNode.value);
    if (nextNode.children !== null) {
      childNodes = [...childNodes, ...nextNode.children];
    }
  }
}

treeIteration(node1);
