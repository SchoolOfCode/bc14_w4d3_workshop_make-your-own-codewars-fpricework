//  Import Jest and test function
import { test, expect } from "@jest/globals";
import { chooseAFruit, sunki, waban, aiyana, sortedArray, hornOfPlenty } from "./main.js";

//👉 Write your tests below here:

test("Test if Lime is returned", () =>
{
    // ARRANGE
    const expected = "Lime";

    // ACT
    const actual = chooseAFruit(sunki, waban, aiyana);

    // ASSERT
    expect(actual).toBe(expected);
});

test("Test if hornOfPlenty array is correctly sorted", async () =>
{
    // ARRANGE
    const expected = sortedArray

    // ACT
    const actual = hornOfPlenty;

    // ASSERT
    expect(actual).toEqual(expected);
});
