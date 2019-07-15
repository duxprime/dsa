interface TraversalCallback<T> {
    (value:T):void;
}
import { noop } from '@lib';

export class BinaryTree<T> {
    private _count = 1;

    public static fromArray<T>(arr:T[]) {
        let btree = new BinaryTree<T>();
        arr.forEach(i => {
            btree.insert(i);
        });
    
        return btree;
    }

    public value:T = null;
    public right:BinaryTree<T> = null;
    public left:BinaryTree<T> = null;

    /**
     * The number of nodes contained in the tree, including itself.
     */
    public get count() {
        return this._count;
    }

    constructor(value?:T) {
        if(typeof value !== 'undefined'){
            this.value = value;
        }
    }

    public insert = function(value) {
        if(this.value === null){
            this.value = value;
        }
        else if(value > this.value){
            this._count++;
            if(this.right === null){
                this.right = new BinaryTree();
            }
    
            this.right.insert(value);
        }
        else if(value < this.value){
            this._count++;
            if(this.left === null){
                this.left = new BinaryTree();
            }
    
            this.left.insert(value);
        }
    }

    public traverseInOrder(callback:TraversalCallback<T> = noop) {
        if(this.left){
            this.left.traverseInOrder(callback);
        }
        callback(this.value);
        if(this.right){
            this.right.traverseInOrder(callback);
        }
    }

    public traversePreOrder(callback:TraversalCallback<T> = noop){
        callback(this.value);
        if(this.left){
            this.left.traversePreOrder(callback);
        }
        if(this.right){
            this.right.traversePreOrder(callback);
        }
    }

    public traversePostOrder(callback:TraversalCallback<T> = noop){
        if(this.left){
            this.left.traversePostOrder(callback);
        }
        if(this.right){
            this.right.traversePostOrder(callback);
        }
        callback(this.value);
    }

   public traverseBreadthFirst(callback?:TraversalCallback<T>){
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