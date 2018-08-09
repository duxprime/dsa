class BinaryTree<T> {
    public static fromArray(arr:any[]) {
        let btree = new BinaryTree();
        arr.forEach(i => {
            btree.insert(i);
        });
    
        return btree;
    }

    public value:T = null;
    public right:BinaryTree<T> = null;
    public left:BinaryTree<T> = null;

    constructor(value?:T) {
        this.value = value;
    }

    public insert = function(value) {
        if(this.value === null){
            this.value = value;
        }
        else if(value > this.value){
            if(this.right === null){
                this.right = new BinaryTree();
            }
    
            this.right.insert(value);
        }
        else if(value < this.value){
            if(this.left === null){
                this.left = new BinaryTree();
            }
    
            this.left.insert(value);
        }
    }

    public traverseInOrder(callback?:Function) {
        if(this.left){
            this.left.traverseInOrder();
        }
        callback(this.value);
        if(this.right){
            this.right.traverseInOrder();
        }
    }

   public traverseBreadthFirst(callback?:Function){
        let queue:BinaryTree<T>[] = [this];
        while(queue.length > 0){
            let node = queue.shift();
            callback(node.value);
            if(node.left){
                queue.unshift(node.left);
            }
    
            if(node.right){
                queue.unshift(node.right);
            }
        }
    };
}