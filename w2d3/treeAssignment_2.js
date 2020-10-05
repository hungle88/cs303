"use strict";
/**
 * class constructor used to create a tree data structure
 */
class TreeNode {
      /**
     * 
     * @param {string} value is the value of the object
     */
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

console.log(lisa);

/**
 *  1. Log the value of each node to console
 * @param {object} node is the root of a tree
 * @returns {undefined} by default
 */
function treeWalk(node) {
  console.log(node.value);
  let childNodes = node.descendents;
  if (childNodes.length > 0) {
    childNodes.forEach(treeWalk);
  }
}
treeWalk(abe);

/**
 * 2. Find the target as the value of a node
 * @param {object} node that is the root of a tree or subtree
 * @param {string} target value that is searched for
 * @returns {boolean} true if the target is in the tree, else false
 */
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

/**
 * 3. Find the target as the value of a node and returns the node
 * @param {object} node that is the root of a tree or subtree
 * @param {string} target value that is searched for
 * @returns {object} returns the target if is in the tree, else null
 */
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


/**
 * 4.	Create a new class ListNode (based on TreeNode below) that generates a linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree.
 */
class ListNode {
   /**
     * 
     * @param {string} value to be given to value property
     * @param {object} link is object for the next link inlist
     */
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

/**
 * 5.	Given a target value in the list, return the node that contains the target value or null if no match. 
 * @param {object} node that is the head of a list
 * @param {string} target value that is searched for 
 * @returns {boolean} node in the list that matches the target, else null
 */
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

console.log(findListNode(abeList, "Lisa"));
console.log(findListNode(abeList, "Homer"));
console.log(findListNode(abeList, "Ben"));

/**
 * 6.  Apply the function to each node  
 * @param {object} node that is the root of a tree or subtree
 * @param {string} modifierFunc is a function to be applied to each node
 * @returns {undefined} no explicit return
 */
function treeModifier(node, modifierFunc) {
  modifierFunc(node);
  let childNodes = node.descendents;
  if (childNodes.length > 0) {
    for (let anode of childNodes) {
      treeModifier(anode, modifierFunc);
    }
  }
}

/**
 * puts *** around the value of an object with a value property
 * @param {object} node is an object that has a value property
 * @returns {undefined} no return
 */
function addStars(node) {
  node.value = "***" + node.value + "***";
}

/**
 * Upper case the value of an object with a value property
 * @param {object} node is an object that has a value property
 * @returns {undefined} no return
 */
function upperCase(node) {
  node.value = node.value.toUpperCase();
}
/**
 * Reverse the value of an object with a value property
 * @param {object} node is an object that has a value property
 * @returns {undefined} no return 
 */
function reverse(node) {
  node.value = node.value.split("").reverse().join("");
}
treeModifier(abe, addStars);
treeWalk(abe);
treeModifier(abe, upperCase);
treeWalk(abe);
treeModifier(abe, reverse);
treeWalk(abe);