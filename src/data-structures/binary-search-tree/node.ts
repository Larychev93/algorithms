class TreeNode {
  private left: number | null;
  private right: number | null;
  private value: number | null;

  constructor() {
    this.left = null;
    this.right = null;
    this.value = null;
  }

  setValue(value: number): void { this.value = value; }
  setRight(value: number): void { this.right = value; }
  setLeft(value: number): void { this.left = value; }
}

export {
  TreeNode
}
