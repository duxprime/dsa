export class Node<T> {
    private _children:Node<T>[] = [];
    public get children(){
        return this._children;
    }

    constructor(
        public readonly value:T,
    ){
    }

    public addChild(child:Node<T>){
        this._children.push(child);
    }
}