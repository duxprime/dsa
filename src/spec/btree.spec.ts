import { BinaryTree } from '../classes/btree';
import "jasmine";

describe('Binary tree', () => {
    let btree:BinaryTree<number>;
    beforeEach(() => {
        btree = new BinaryTree();
    });

    it('should exist', () => {
        expect(btree).toBeDefined();
    });
});
