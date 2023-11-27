import { locator } from "../src/locator";

describe("locator function", () => {
  it("should return 'JJ00AA'", () => {
    const result = locator({longitude: 0.0, latitude: 0.0})
    expect(result).toEqual("JJ00AA")
  })
})