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
  if (childNodes) {
    childNodes.forEach(treeWalk); //loop through all children
  }
}
treeWalk(abe);

function treeFind(node, target) {
  if (node.value === target) {
    return true;
  }
  if (node.descendents === null) {
    return false;
  } else {
    let childNodes = node.descendents;
    for (let anode of childNodes) {
      if (treeFind(anode, target)) {
        return true;
      }
    }
  }
  return false;
}

console.log("should be true for Lisa:", treeFind(abe, "Lisa"));
console.log("should be false for Crusty:", treeFind(abe, "Crusty"));

function findSubtree(node, target) {
  if (node.value === target) {
    return node;
  }
  if (node.descendents === null) {
    return null;
  } else {
    let childNodes = node.descendents;
    for (let anode of childNodes) {
      const foundNode = findSubtree(anode, target);
      if (foundNode) {
        return foundNode;
      }
    }
  }
  return null;
}

console.log("should return Lisa node: ", findSubtree(abe, "Lisa"));
console.log("should return null: ", findSubtree(abe, "Crusty"));

class ListNode {
  constructor(value, link) {
    this.value = value;
    this.next = link;
  }
}

const maggiel = new ListNode("Maggie", null);
const lisal = new ListNode("Lisa", maggiel);
const bartl = new ListNode("Bart", lisal);
const homerl = new ListNode("Homer", bartl);
const abel = new ListNode("Abe", homerl);

function findListNode(node, target) {
  if (node.value === target) {
    return node;
  }
  if (node.next === null) {
    return null;
  } else {
    let found = findListNode(node.next, target);
    if (found !== null) {
      return found;
    }
  }
  return null;
}

console.log("findListNode should be Lisa node: ");
console.log(findListNode(abel, "Lisa"));
console.log("findListNode should be Homer node: ");
console.log(findListNode(abel, "Homer"));
console.log("findListNode should be null: " + findListNode(abel, "Crusty"));

function treeModifier(node, modifierFunc) {
  modifierFunc(node);
  if (node.descendents.length > 0) {
    for (let anode of node.descendents) {
      treeModifier(anode, modifierFunc);
    }
  }
}

function addStars(node) {
  node.value = "***" + node.value + "***";
}

const abeClone = JSON.parse(JSON.stringify(abe));
treeModifier(abeClone, addStars);
treeWalk(abeClone);
