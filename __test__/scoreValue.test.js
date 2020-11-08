import { scoreValue } from "../src/client/js/formHandler"

describe("Testing the scoreValue() function", () => {
    test("Should show \'Strong positive\'", () => {
        let val = 'P+'
        expect(scoreValue(val)).toBe("Strong positive");
    });
    test("Should show \'Positive\'", () => {
        let val = 'P'
        expect(scoreValue(val)).toBe("Positive");
    });
    test("Should show \'Neutral\'", () => {
        let val = 'NEU'
        expect(scoreValue(val)).toBe("Neutral");
    });
    test("Should show \'Negative\'", () => {
        let val = 'N'
        expect(scoreValue(val)).toBe("Negative");
    });
    test("Should show \'Strong negative\'", () => {
        let val = 'N+'
        expect(scoreValue(val)).toBe("Strong negative");
    });
    test("Should show \'Without sentiment\'", () => {
        let val = 'NONE'
        expect(scoreValue(val)).toBe("Without sentiment");
    });
});