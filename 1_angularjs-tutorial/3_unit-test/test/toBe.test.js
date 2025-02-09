const can = {
    name: 'pamplemousse',
    ounces: 12,
};

var a = ["foo", "bar", "baz"];

var bigObject = {"foo": ['bar', 'baz']}

describe('# toBe: ', function () {
    it('#toBe1', function () {
        expect(can.ounces).toBe(12); // true
    });

    it('#toBe2', () => {
        expect(can.name).toBe('pamplemousse'); // true
    });

    it('#toBe3', () => {
        // expect(0.1 + 0.2).toBe(0.3); // false
        // expect(0.1 + 0.2).not.toBe(0.3); // true
        expect(0.1 + 0.2).toBeCloseTo(0.3); // true
    });

    it('#toBe4', () => {
        expect(10).toBeDefined(); // true
    });

    it('#toBe5', () => {
        expect('').toBeFalsy(); // true
        // expect('value').toBeFalsy(); // false
    });

    it('#toBe6', () => {
        expect(5).toBeGreaterThan(1); // true
        // expect('5').toBeGreaterThan(1); // true
    });

    it('#toBe7', () => {
        expect(5).toBeGreaterThanOrEqual(5); // true
        // expect(5).toBeGreaterThanOrEqual(4); // true
        // expect(5).toBeGreaterThanOrEqual(6); // false
    });

    it('#toBe8', () => {
        expect(5).toBeLessThan(6); // true
        // expect(5).toBeLessThan(5); // false
    });

    it('#toBe9', () => {
        expect(5).toBeLessThanOrEqual(5) // true
    });

    it('#toBe10', () => {
        expect(NaN).toBeNaN() // true
    });

    it('#toBe11', () => {
        expect(null).toBeNull() // true
    });

    it('#toBe12', () => {
        expect(1).toBeTruthy() // false
    });

    it('#toBe13', () => {
        expect(undefined).toBeUndefined() // false
    });

    it('#toBe14', () => {
        expect(a).toContain('bar') // false
    });

    it('#toBe15', () => {
        expect(bigObject).toEqual({"foo": ['bar', 'baz']});
    });

    it('#toBe16', () => {
        // expect(function() { return 'things'; }).toThrow('foo');
        // expect(function() { return 'things'; }).toThrowError(MyCustomError, 'message');
    });
});
