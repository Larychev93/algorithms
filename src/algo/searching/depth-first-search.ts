import {BinarySearchTree} from '../../data-structures/binary-search-tree/index';
import {TreeNode} from '../../data-structures/binary-search-tree/node';

/**
 * Advantages:
 *  - Less memory
 * Disadvantages:
 *  - Can get slow
 */
export const depthFirstSearchInOrder = (node: TreeNode, list: number[]): number[] => {

  if (node.getLeft()) {
    depthFirstSearchInOrder(node.getLeft() as TreeNode, list)
  }

  list.push(node.getValue() as number)

  if (node.getRight()) {
    depthFirstSearchInOrder(node.getRight() as TreeNode, list)
  }

  return list;
}

export const depthFirstSearchPreOrder = (node: TreeNode, list: number[]): number[] => {
  list.push(node.getValue() as number)

  if (node.getLeft()) {
    depthFirstSearchInOrder(node.getLeft() as TreeNode, list)
  }

  if (node.getRight()) {
    depthFirstSearchInOrder(node.getRight() as TreeNode, list)
  }

  return list;
}

export const depthFirstSearchPostOrder = (node: TreeNode, list: number[]): number[] => {
  if (node.getLeft()) {
    depthFirstSearchInOrder(node.getLeft() as TreeNode, list)
  }

  if (node.getRight()) {
    depthFirstSearchInOrder(node.getRight() as TreeNode, list)
  }

  list.push(node.getValue() as number)

  return list;
}

const bst = new BinarySearchTree();

bst.insert(9)
bst.insert(4)
bst.insert(20)
bst.insert(1)
bst.insert(6)
bst.insert(15)
bst.insert(170)

console.log(depthFirstSearchInOrder(bst.root as TreeNode, []))
console.log(depthFirstSearchPreOrder(bst.root as TreeNode, []))
console.log(depthFirstSearchPostOrder(bst.root as TreeNode, []))
