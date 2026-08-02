export{}
type Point = {
    x: number;
    y: number;
    z: number;
}

type OptionalPoint = {
    [key in keyof Point]?: Point[key];
}

const poiunt1: Point = {
    x: 5,
    y: 10,
    z: -5
}