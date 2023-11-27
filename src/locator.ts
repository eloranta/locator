
export function locator1(coordinates: {longitude: number; latitude: number}) {
    return "a";
}

const char = (char: string) => (offset: number) => String.fromCharCode(char.charCodeAt(0) + offset)
const easten = (longitude: number) => (longitude + 180) % 360
const northen = (longitude: number) => (longitude + 90) % 180

export function locator(coordinates: {longitude: number; latitude: number}) {
    return char("A")(easten(coordinates.longitude) / 20).toString() +
        char("A")(northen(coordinates.latitude) / 10) +
        char("0")((easten(coordinates.longitude) % 20) / 2) +
        char("0")((northen(coordinates.latitude) % 90) % 10) +
        char("A")(((easten(coordinates.longitude) % 20) % 2) * 12) +
        char("A")(((northen(coordinates.latitude) % 10) % 1) * 24)
}