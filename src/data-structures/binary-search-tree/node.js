"use strict";
exports.__esModule = true;
exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode() {
        this.left = null;
        this.right = null;
        return this;
    }
    TreeNode.prototype.setValue = function (value) { this.value = value; };
    TreeNode.prototype.getValue = function () { return this.value; };
    TreeNode.prototype.getRight = function () { return this.right; };
    TreeNode.prototype.getLeft = function () { return this.left; };
    TreeNode.prototype.setRight = function (value) { this.right = value; };
    TreeNode.prototype.setLeft = function (value) { this.left = value; };
    TreeNode.prototype.replace = function (node) {
        var value = node.value, right = node.right, left = node.left;
        this.value = value;
        this.right = right;
        this.left = left;
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
