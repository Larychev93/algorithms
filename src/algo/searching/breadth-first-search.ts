
import {TreeNode} from '../../data-structures/binary-search-tree/node';
import {BinarySearchTree} from '../../data-structures/binary-search-tree/index';

/**
 * Advantages:
 *  - shortest path
 *  - Closer Nodes
 * Disadvantages:
 *  - More memory
 */
const breadthFirstSearch = (tree: TreeNode, target: number): number[] => {
  let currentNode: TreeNode | null = tree;
  let list: number[] = [];
  let queue = [];

  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift() || null;
    list.push(currentNode?.getValue() as number);

    if (currentNode?.getValue() === target) {
      break;
    }

    if (currentNode?.getLeft()) {
      queue.push(currentNode?.getLeft());
    }

    if (currentNode?.getRight()) {
      queue.push(currentNode?.getRight());
    }
  }

  return list;
}

const breadthFirstSearchRecursive = (queue: TreeNode[], list: number[], target: number): number[] => {
  if (!queue.length) {
    return list;
  }

  let currentNode = queue.shift() || null;
  list.push(currentNode?.getValue() as number);

  if (currentNode?.getValue() === target) {
    return list
  }

  if (currentNode?.getLeft()) {
    queue.push(currentNode?.getLeft() as TreeNode);
  }

  if (currentNode?.getRight()) {
    queue.push(currentNode?.getRight() as TreeNode);
  }

  return breadthFirstSearchRecursive(queue, list, target);
}

const bst = new BinarySearchTree();

bst.insert(9)
bst.insert(4)
bst.insert(20)
bst.insert(1)
bst.insert(6)
bst.insert(15)
bst.insert(170)

console.log(breadthFirstSearch(bst.root as TreeNode, 1))
console.log(breadthFirstSearchRecursive([bst.root as TreeNode],[], 1))
