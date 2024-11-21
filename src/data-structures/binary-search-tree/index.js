"use strict";
exports.__esModule = true;
exports.BinarySearchTree = void 0;
var node_1 = require("./node");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var node = new node_1.TreeNode();
        node.setValue(value);
        if (this.root === null) {
            this.root = node;
            return;
        }
        this.insertNode(node, this.root);
    };
    /**
     *       9
     *     4   20
     *    1 6  15 170
     */
    BinarySearchTree.prototype.insertNode = function (newNode, currentNode) {
        var currentNodeValue = currentNode.getValue();
        var newNodeValue = newNode.getValue();
        console.log(newNodeValue, currentNodeValue);
        if (newNodeValue < currentNodeValue) {
            var currentNodeValueLeft = currentNode.getLeft();
            if (!currentNodeValueLeft) {
                currentNode.setLeft(newNode);
            }
            else {
                return this.insertNode(newNode, currentNodeValueLeft);
            }
        }
        if (newNodeValue > currentNodeValue) {
            var currentNodeValueRight = currentNode.getRight();
            if (!currentNodeValueRight) {
                currentNode.setRight(newNode);
            }
            else {
                this.insertNode(newNode, currentNodeValueRight);
            }
        }
    };
    BinarySearchTree.prototype.printTree = function () {
        console.log('ROOT', JSON.stringify(this.root));
    };
    BinarySearchTree.prototype.lookup = function (value, startingNode) {
        var currentNode = startingNode || this.root;
        if (!currentNode) {
            throw 'Empty Tree!';
        }
        if (currentNode.getValue() === value) {
            return currentNode;
        }
        if (value < currentNode.getValue()) {
            if (!currentNode.getLeft()) {
                throw 'No Search Result';
            }
            return this.lookup(value, currentNode.getLeft());
        }
        if (value > currentNode.getValue()) {
            if (!currentNode.getRight()) {
                throw 'No Search Result';
            }
            return this.lookup(value, currentNode.getRight());
        }
        throw 'No Search result';
    };
    BinarySearchTree.prototype.remove = function (value, startingNode) {
        if (!this.root) {
            throw 'Empty Tree!';
        }
        var currentNode = startingNode || this.root;
        /**
         * If value is not root*
         */
        if (value < currentNode.getValue()) {
            console.log('should enter', currentNode.getValue());
            this.remove(value, currentNode === null || currentNode === void 0 ? void 0 : currentNode.getLeft());
            return;
        }
        if (value > currentNode.getValue()) {
            this.remove(value, currentNode === null || currentNode === void 0 ? void 0 : currentNode.getRight());
            return;
        }
        /**
         * If value is root*
         */
        if (currentNode.getValue() === value) {
            /**
             * delete node without children*
             */
            if (!currentNode.getRight() && !currentNode.getLeft()) {
                console.log('should enter 2', currentNode.getValue());
                currentNode.setValue(null);
                currentNode = null;
                return;
            }
            if (!(currentNode === null || currentNode === void 0 ? void 0 : currentNode.getLeft())) {
                currentNode === null || currentNode === void 0 ? void 0 : currentNode.setLeft(currentNode === null || currentNode === void 0 ? void 0 : currentNode.getRight());
                currentNode = null;
                return;
            }
            if (!(currentNode === null || currentNode === void 0 ? void 0 : currentNode.getRight())) {
                currentNode === null || currentNode === void 0 ? void 0 : currentNode.setRight(currentNode === null || currentNode === void 0 ? void 0 : currentNode.getLeft());
                currentNode = null;
                return;
            }
            var minChildNode = this.findMinNode(currentNode);
            var currentRight = currentNode.getRight();
            currentRight === null || currentRight === void 0 ? void 0 : currentRight.setLeft(minChildNode);
            currentNode.setRight(null);
            currentNode.replace(currentRight);
        }
    };
    BinarySearchTree.prototype.findMinNode = function (node) {
        if (!node.getLeft()) {
            return node;
        }
        return this.findMinNode(node.getLeft());
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
//const bst = new BinarySearchTree();
//
//bst.insert(9)
//bst.insert(4)
//bst.insert(20)
//bst.insert(1)
//bst.insert(6)
//bst.insert(15)
//bst.insert(170)
//console.log(bst.printTree())
