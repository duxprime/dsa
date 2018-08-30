import { BinaryTree } from '../src/classes/btree';
import 'jasmine';
const arr = [
    6,
    9,
    8,
    7,
    1,
    3,
    5,
    2,
    4,
    0
];

describe('Binary tree', () => {
    let btree:BinaryTree<number>;
    beforeEach(() => {
        btree = BinaryTree.fromArray(arr);
    });

 
    it('should construct an empty binary tree', () => {
        btree = new BinaryTree();
        expect(btree.value).toBeNull();
        expect(btree.right).toBeNull();
        expect(btree.left).toBeNull();
    });

    it('should construct a binary tree with a value', () => {
        const value = 5;
        btree = new BinaryTree(5);
        expect(btree.value).toEqual(value);
        expect(btree.right).toBeNull();
        expect(btree.left).toBeNull();
    }); 

    it('should traverse in order', () => {
        const sortedArr = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ];
        let arr = [];
        btree.traverseInOrder(i => {
            arr.push(i);
        })

        expect(arr).toEqual(sortedArr);
    });
});
