const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._addNode(this.rootNode, data);
  }
  _addNode(node, data) {
    if (!node) {
      return new Node(data);
    }
    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else {
      node.right = this._addNode(node.right, data);
    }
    return node;
  }
  has(data) {
    return this._hasNode(this.rootNode, data);
  }
  _hasNode(node, data) {
    if (!node) {
      return false;
    }
    if (data === node.data) {
      return true;
    }
    return data < node.data ? this._hasNode(node.left, data) : this._hasNode(node.right, data); // Recur
  }

  find(data) {
    return this._findNode(this.rootNode, data);
  }

  _findNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      return node;
    }
    return data < node.data ? this._findNode(node.left, data) : this._findNode(node.right, data); 
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left; 
      }
      node.data = this._minNode(node.right).data;
      node.right = this._removeNode(node.right, node.data);
    }
    return node;
  }
  min() {
    if (!this.rootNode) {
      return null;
    }
    return this._minNode(this.rootNode).data;
  }

  _minNode(node) {
    return node.left ? this._minNode(node.left) : node;
  }

  max() {
    if (!this.rootNode) {
      return null; // Tree is empty
    }
    return this._maxNode(this.rootNode).data;
  }

  _maxNode(node) {
    return node.right ? this._maxNode(node.right) : node;
  }
  }


module.exports = {
  BinarySearchTree
};