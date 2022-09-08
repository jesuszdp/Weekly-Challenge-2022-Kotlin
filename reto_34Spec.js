describe("Challenge 34. Lost numbers", function() {
    it("Is it an array?", function() {
        expect(function (){lostNumbers('');}).toThrow(new Error(ErrorNoArray));
        expect(function (){lostNumbers(1);}).toThrow(new Error(ErrorNoArray));
        expect(function (){lostNumbers({});}).toThrow(new Error(ErrorNoArray));
        expect(function (){lostNumbers(true);}).toThrow(new Error(ErrorNoArray));
        expect(function (){lostNumbers(false);}).toThrow(new Error(ErrorNoArray));
        expect(function (){lostNumbers(0);}).toThrow(new Error(ErrorNoArray));
        expect(function (){lostNumbers();}).toThrow(new Error(ErrorNoArray));
    });
    it("Is it an empty array?", function() {
        expect(function (){lostNumbers([]);}).toThrow(new Error(ErrorEmptyArray));
    });
    it("Is it an numeric array?", function() {
        expect(function (){lostNumbers([2,'a',1]);}).toThrow(new Error(ErrorNoNumericArray));
        //expect(function (){lostNumbers([1,'']);}).toThrow(new Error(ErrorNoNumericArray));
    });
});

