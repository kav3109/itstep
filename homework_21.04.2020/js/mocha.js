mocha.setup('bdd');
const assert = chai.assert;

describe('Method remove()', () => {

    it('new MyString(\'qwerty\').remove(0)=>werty', () => {
        let res = new MyString('qwerty').remove(0);
        assert.equal(res, 'werty');
    });
    it('new MyString(\'qwerty\').remove(2)=>qwrty', () => {
        let res = new MyString('qwerty').remove(2);
        assert.equal(res, 'qwrty');
    });
    it('new MyString(\'qwerty\').remove(10)=>qwerty', () => {
        let res = new MyString('qwerty').remove(10);
        assert.equal(res, 'qwerty');
    });
    it('new MyString(\'qwerty\').remove(-4)=>qwerty', () => {
        let res = new MyString('qwerty').remove(-4);
        assert.equal(res, 'qwerty');
    });
});

describe('Method insert()', () => {

    it('new MyString(\'qwerty\').remove(0)=>werty', () => {
        let res = new MyString('qwerty').remove(0);
        assert.equal(res, 'werty');
    });
    it('new MyString(\'qwerty\').remove(2)=>qwrty', () => {
        let res = new MyString('qwerty').remove(2);
        assert.equal(res, 'qwrty');
    });
    it('new MyString(\'qwerty\').remove(10)=>qwerty', () => {
        let res = new MyString('qwerty').remove(10);
        assert.equal(res, 'qwerty');
    });
    it('new MyString(\'qwerty\').remove(-4)=>qwerty', () => {
        let res = new MyString('qwerty').remove(-4);
        assert.equal(res, 'qwerty');
    });
});