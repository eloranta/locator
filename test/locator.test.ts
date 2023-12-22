import { locator } from "../src/locator";

describe("locator function", () => {
  it("should return 'AJ00AA'", () => {
    expect(locator({longitude: -180.0, latitude: 0.0})).toEqual("AJ00AA")
  })
})
describe("locator function", () => {
  it("should return 'EJ50AA'", () => {
    expect(locator({longitude: -90.0, latitude: 0.0})).toEqual("EJ50AA")
  })
})
describe("locator function", () => {
  it("should return 'JJ00AA'", () => {
    expect(locator({longitude: 0.0, latitude: 0.0})).toEqual("JJ00AA")
  })
})
describe("locator function", () => {
  it("should return 'NJ50AA'", () => {
    expect(locator({longitude: 90.0, latitude: 0.0})).toEqual("NJ50AA")
  })
})
describe("locator function", () => {
  it("should return 'AJ00AA'", () => {
    expect(locator({longitude: 180.0, latitude: 0.0})).toEqual("AJ00AA")
  })
})

