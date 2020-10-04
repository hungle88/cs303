"use strict";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }
}

const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");

abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function treeWalk(node) {
  console.log(node.value);
  let childNodes = node.descendents;
  if (childNodes.length > 0) {
    childNodes.forEach(treeWalk);
  }
}

treeWalk(abe);

function contains(node, target) {
  if (node.value === target) {
    return true;
  } else {
    let childNodes = node.descendents;
    if (childNodes.length > 0) {
      for (let anode of childNodes) {
        if (contains(anode, target)) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(contains(abe, "Lisa"));
console.log(contains(abe, "Ben"));

function nodeFind(node, target) {
  if (node.value === target) {
    return node;
  } else {
    let childNodes = node.descendents;
    if (childNodes.length > 0) {
      for (let anode of childNodes) {
          let foundNode = nodeFind(anode, target);
        if (foundNode) {
          return foundNode;
        }
      }
    }
  }

  return null;
}

console.log(nodeFind(abe, "Lisa"));
console.log(nodeFind(abe, "Ben"));
