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

class ListNode {
  constructor(value, link) {
    this.value = value;
    this.next = link;
  }
}

const maggieList = new ListNode("Maggie", null);
const lisaList = new ListNode("Lisa", maggieList);
const bartList = new ListNode("Bart", lisaList);
const homerList = new ListNode("Homer", bartList);
const abeList = new ListNode("Abe", homerList);

function findListNode(node, target) {
  if (node.value === target) {
    return node;
  } else {
    let foundNode = findListNode(node.next, target);
    if (foundNode) {
      return foundNode;
    }
  }
  return null;
}

console.log(findListNode(abeList, "Lisa"));

function treeModifier(node, modifierFunc) {
  modifierFunc(node);
  let childNodes = node.descendents;
  if (childNodes.length > 0) {
    for (let anode of childNodes) {
      treeModifier(anode, modifierFunc);
    }
  }
}

function addStars(node) {
  node.value = "***" + node.value + "***";
}

function upperCase(node) {
  node.value = node.value.toUpperCase();
}
function upperCase(node) {
  node.value = node.value.split("").reverse().join("");
}
treeModifier(abe, addStars);
treeWalk(abe);
treeModifier(abe, upperCase);
treeWalk(abe);
