mocha.setup('bdd');
const expect = chai.expect;

describe('Method remove()', () => {

    it('new MyString("qwerty").remove(0)=>werty', () => {
        let res = new MyString('qwerty').remove(0);
        expect(res).to.equal('werty');
    });
    it('new MyString("qwerty").remove(2)=>qwrty', () => {
        let res = new MyString('qwerty').remove(2);
        expect(res).to.equal('qwrty');
    });
    it('new MyString("qwerty").remove(10)=>qwerty', () => {
        let res = new MyString('qwerty').remove(10);
        expect(res).to.equal('qwerty');
    });
    it('new MyString("qwerty").remove(-4)=>qwerty', () => {
        let res = new MyString('qwerty').remove(-4);
        expect(res).to.equal('qwerty');
    });
});

describe('Method insert()', () => {

    it('new MyString("qwerty").insert(0,X)=>Xwerty', () => {
        let res = new MyString('qwerty').insert(0,'X');
        expect(res).to.equal('Xwerty');
    });
    it('new MyString("qwerty").insert(2,X)=>qwXrty', () => {
        let res = new MyString('qwerty').insert(2,'X');
        expect(res).to.equal('qwXrty');
    });
    it('new MyString("qwerty").insert(10,X)=>qwertyX', () => {
        let res = new MyString('qwerty').insert(10,'X');
        expect(res).to.equal('qwertyX');
    });
    it('new MyString("qwerty").insert(-4,X)=>Xqwerty', () => {
        let res = new MyString('qwerty').insert(-4,'X');
        expect(res).to.equal('Xqwerty');
    });

});

describe('Method trimSign()', () => {

    it('new MyString("qwerty").trimSign()=>qwerty', () => {
        let res = new MyString('qwerty').trimSign();
        expect(res).to.equal('qwerty');
    });
    it('new MyString("qweeeerty").trimSign()=>qwerty', () => {
        let res = new MyString('qweeeeerty').trimSign();
        expect(res).to.equal('qwerty');
    });
    it('new MyString("qweeerttttty").trimSign()=>qwerty', () => {
        let res = new MyString('qweeerttttty').trimSign();
        expect(res).to.equal('qwerty');
    });
    it('new MyString("qwe....rty").trimSign()=>qwe.rty', () => {
        let res = new MyString('qwe....rty').trimSign();
        expect(res).to.equal('qwe.rty');
    });
});

describe('Method toggle()', () => {

    it('new MyString("qwerty").toggle()=>QWERTY', () => {
        let res = new MyString('qwerty').toggle();
        expect(res).to.equal('QWERTY');
    });
    it('new MyString("QWERTY").toggle()=>qwerty', () => {
        let res = new MyString('QWERTY').toggle();
        expect(res).to.equal('qwerty');
    });
    it('new MyString("qweRTY").toggle()=>QWErty', () => {
        let res = new MyString('qweRTY').toggle();
        expect(res).to.equal('QWErty');
    });

});

describe('Method counter()', () => {

    it('new MyString("qwerty").counter("e")=>1', () => {
        let res = new MyString('qwerty').counter('e');
        expect(res).to.equal(1);
    });
    it('new MyString("apple").counter("p")=>2', () => {
        let res = new MyString('apple').counter('p');
        expect(res).to.equal(2);
    });
    it('new MyString("avokado").counter()=>2', () => {
        let res = new MyString('avokado').counter("a");
        expect(res).to.equal(2);
    });

});

describe('Method showDate()', () => {

    it('new MyDate(20,1,1990).showDate()=>Twentieth January', () => {
        let res = new MyDate(20,1,1990).showDate();
        expect(res).to.equal('Twentieth January');
    });
    it('new MyDate(21,1,1990).showDate()=>Twenty First January', () => {
        let res = new MyDate(21,1,1990).showDate();
        expect(res).to.equal('Twenty First January');
    });

});

describe('Method isFuture()', () => {

    it('new MyDate(20,5,2056).isFuture()=>true', () => {
        let res = new MyDate(20,5,2056).isFuture();
        expect(res).to.be.true;
    });
    it('new MyDate(20,6,1990).isFuture()=>false', () => {
        let res = new MyDate(20,6,1990).isFuture();
        expect(res).to.be.false;
    });

});

describe('Method isLeapYear()', () => {

    it('new MyDate(20,6,1990).isLeapYear()=>true', () => {
        let res = new MyDate(20,6,1990).isLeapYear();
        expect(res).to.be.false;
    });
    it('new MyDate(20,6,2020).isLeapYear()=>false', () => {
        let res = new MyDate(20,6,2020).isLeapYear();
        expect(res).to.be.true;
    });

});

describe('Method nextDay()', () => {

    it('new MyDate(20,6,2020).nextDay()=>21/6/2020', () => {
        let res = new MyDate(20,6,2020).nextDay();
        expect(res).to.equal('21/6/2020');
    });
    it('new MyDate(31,1,2020).nextDay()=>1/2/2020', () => {
        let res = new MyDate(31,1,2020).nextDay();
        expect(res).to.equal('1/2/2020');
    });
    it('new MyDate(28,2,2020).nextDay()=>29/2/2020', () => {
        let res = new MyDate(28,2,2020).nextDay();
        expect(res).to.equal('29/2/2020');
    });
    it('new MyDate(28,2,2019).nextDay()=>1/3/2019', () => {
        let res = new MyDate(28,2,2019).nextDay();
        expect(res).to.equal('1/3/2019');
    });
    it('new MyDate(31,12,2020).nextDay()=>1/1/2021', () => {
        let res = new MyDate(31,12,2020).nextDay();
        expect(res).to.equal('1/1/2021');
    });
});