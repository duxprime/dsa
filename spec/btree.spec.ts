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
    debugger;
    let btree:BinaryTree<number>;
    beforeEach(() => {
        btree = BinaryTree.fromArray(arr);
    });

    it('should traverse in order', () => {
        debugger;
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
            console.log(i);
            arr.push(i);
        })

        expect(arr).toEqual(sortedArr);
    });
});
