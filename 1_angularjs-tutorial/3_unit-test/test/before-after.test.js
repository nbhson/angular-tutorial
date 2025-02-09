describe("simple server tests:", function() {

    beforeAll(function(done) {
        console.log('before all');
        done(); // do not forget to execute done if you use it
    });

    it("throws an error because server is not running", function(done) {
        let users = fetch("https://jsonplaceholder.typicode.com/users")
        users
        .then((httpRes) => {
            return httpRes.json()
        })
        .then((data) => {
            console.log(data);
            expect(data.length).toBe(10);
            done()
        })
    });

    afterAll(function(done) {
        console.log('after all');
        done(); // do not forget to execute done if you use it
    });
});