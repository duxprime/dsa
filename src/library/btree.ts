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

    public value?:T;
    public right?:BinaryTree<T>;
    public left?:BinaryTree<T>;

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

    public insert(value) {
        if(this.value === undefined){
            this.value = value;
        }
        else if(value > this.value){
            this._count++;
            if(this.right === undefined){
                this.right = new BinaryTree();
            }
    
            this.right.insert(value);
        }
        else if(value < this.value){
            this._count++;
            if(this.left === undefined){
                this.left = new BinaryTree();
            }
    
            this.left.insert(value);
        }
    }

    public traverseInOrder(callback:TraversalCallback<T> = noop) {
        if(this.left){
            this.left.traverseInOrder(callback);
        }

        if(this.value){
            callback(this.value);
        }

        if(this.right){
            this.right.traverseInOrder(callback);
        }
    }

    public traversePreOrder(callback:TraversalCallback<T> = noop){
        if(this.value){
            callback(this.value);
        }

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

        if(this.value){
            callback(this.value);
        }
    }

   public traverseBreadthFirst(callback?:TraversalCallback<T>){
        let queue:BinaryTree<T>[] = [this];
        while(queue.length > 0){
            let node = queue.shift();
            if(!node){
                continue;
            }

            if(callback && node.value){
                callback(node.value);
            }
            
            if(node.left){
                queue.unshift(node.left);
            }
    
            if(node.right){
                queue.unshift(node.right);
            }
        }
    };
}