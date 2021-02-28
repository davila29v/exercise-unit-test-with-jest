
const { sum, fromEuroToDollar } = required ('./app.js');

test("One euro should be 1.206 dollars", function() {

    const { fromEuroToDollar } = required ('./app.js') 
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
   expected(expected).toBe(dollars);
})
