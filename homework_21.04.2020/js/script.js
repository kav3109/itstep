class MyString extends String {

    constructor(str) {
        super();
        this._str = str;
    }

    get str() {
        return this._str;
    }
    set str(x) {
        this._str = x;
    }

    remove(index) {
        if(+index > this.str.length || +index < 0) return this.str;
        return this.str.slice(0,index)+this.str.slice(index+1);
    }

    insert(index, sign) {

    }

    // insert(index, sign) – вставка переданного символа по
    // указанному индексу; если в качестве индекса передали от-
    // рицательное число, то добавляется символ в начало стро-
    // ки, если число больше, чем длина строки, то добавляется
    // символ в конец строки;

}