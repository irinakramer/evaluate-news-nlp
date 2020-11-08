import { checkForUrl } from "../src/client/js/urlChecker"

describe("Testing the checkForUrl() function", () => {
    test("Testing for missing https/http", () => {
        let url = 'www.irinakramer.com'
        expect(checkForUrl(url)).toBe(false);
    });
    test("Testing for missing www", () => {
        let url = 'irinakramer.com'
        expect(checkForUrl(url)).toBe(false);
    });
    test("Testing for space", () => {
        let url = 'https://www.irina kramer.com'
        expect(checkForUrl(url)).toBe(false);
    });
    test("Testing for valid url", () => {
        let url = 'https://www.irinakramer.com'
        expect(checkForUrl(url)).toBe(true);
    });
});