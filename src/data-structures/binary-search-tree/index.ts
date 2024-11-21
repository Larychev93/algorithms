import {TreeNode} from './node';

export class BinarySearchTree {
  root: TreeNode | null

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    const node = new TreeNode();

    node.setValue(value);

    if (this.root === null) {
      this.root = node;

      return;
    }

    this.insertNode(node, this.root)
  }

  /**
   *       9
   *     4   20
   *    1 6  15 170
   */

  insertNode(newNode: TreeNode, currentNode: TreeNode): void {
    const currentNodeValue = currentNode.getValue() as number;
    const newNodeValue = newNode.getValue() as number;

    if (newNodeValue < currentNodeValue) {
      const currentNodeValueLeft = currentNode.getLeft();

      if (!currentNodeValueLeft) {
        currentNode.setLeft(newNode)
      } else {
        return this.insertNode(newNode, currentNodeValueLeft)
      }
    }

    if (newNodeValue > currentNodeValue) {
      const currentNodeValueRight = currentNode.getRight();

      if (!currentNodeValueRight) {
        currentNode.setRight(newNode)
      } else {
        this.insertNode(newNode, currentNodeValueRight)
      }
    }
  }

  printTree(): void {
    console.log('ROOT', JSON.stringify(this.root))
  }

  lookup(value: number, startingNode?: TreeNode,): TreeNode {
    let currentNode = startingNode || this.root;

    if (!currentNode) {
      throw 'Empty Tree!'
    }

    if (currentNode.getValue() === value) {
      return currentNode
    }

    if (value < (currentNode.getValue() as number)) {
      if (!currentNode.getLeft()) {
        throw 'No Search Result'
      }

      return this.lookup(value, currentNode.getLeft() as TreeNode)
    }

    if (value > (currentNode.getValue() as number)) {
      if (!currentNode.getRight()) {
        throw 'No Search Result'
      }

      return this.lookup(value, currentNode.getRight() as TreeNode)
    }

    throw 'No Search result'
  }

  remove(value: number, startingNode?: TreeNode): void {
    if (!this.root) {
      throw 'Empty Tree!'
    }

    let currentNode: TreeNode | null = startingNode || this.root;

    /**
     * If value is not root*
     */
    if (value < (currentNode.getValue() as number)) {
      console.log('should enter', currentNode.getValue())

      this.remove(value, currentNode?.getLeft() as TreeNode);

      return;
    }

    if (value > (currentNode.getValue() as number)) {
      this.remove(value, currentNode?.getRight() as TreeNode);

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
        console.log('should enter 2', currentNode.getValue())

        currentNode.setValue(null)

        currentNode = null;

        return;
      }

      if (!currentNode?.getLeft()) {
        currentNode?.setLeft(currentNode?.getRight())

        currentNode = null;

        return;
      }

      if (!currentNode?.getRight()) {
        currentNode?.setRight(currentNode?.getLeft())

        currentNode = null;

        return;
      }

      const minChildNode = this.findMinNode(currentNode);
      const currentRight = currentNode.getRight();

      currentRight?.setLeft(minChildNode)
      currentNode.setRight(null)
      currentNode.replace(currentRight as TreeNode)
    }
  }

  findMinNode(node: TreeNode): TreeNode {
    if (!node.getLeft()) {
      return node
    }

    return this.findMinNode(node.getLeft() as TreeNode)
  }
}


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

