class TreeNode {
  private left: TreeNode | null;
  private right: TreeNode | null;
  private value!: number | null;

  constructor() {
    this.left = null;
    this.right = null;

    return this;
  }

  setValue(value: number | null): void { this.value = value; }
  getValue(): number | null { return this.value; }
  getRight(): TreeNode | null { return this.right; }
  getLeft(): TreeNode | null { return this.left; }
  setRight(value: TreeNode | null): void { this.right = value; }
  setLeft(value: TreeNode | null): void { this.left = value; }
  replace(node: TreeNode): void {
    const { value, right, left } = node;

    this.value = value;
    this.right = right;
    this.left = left;
  }
}

export {
  TreeNode
}
