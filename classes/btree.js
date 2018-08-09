function BinaryTree(){
    this.value = null;
    this.right = null;
    this.left = null;
}

BinaryTree.fromArray = function(arr){
    let btree = new BinaryTree();
    arr.forEach(i => {
        btree.insert(i);
    });

    return btree;
};

BinaryTree.prototype.insert = function(value) {
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
};

BinaryTree.prototype.traverseInOrder = function(){
    if(this.left){
        this.left.traverseInOrder();
    }
    console.log(btree.value);
    if(this.right){
        this.right.traverseInOrder();
    }
}

BinaryTree.prototype.traverseBreadthFirst = function(){
    let queue = [this];
    while(queue.length > 0){
        let node = queue.shift();
        console.log(node.value);
        if(node.left){
            queue.unshift(node.left);
        }

        if(node.right){
            queue.unshift(node.right);
        }
    }
};
