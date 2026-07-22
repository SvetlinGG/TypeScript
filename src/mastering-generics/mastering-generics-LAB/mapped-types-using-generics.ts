type Point = {x: number, y: number};
type Colors = { red: string, blue: string};

type Optional<T> = { [K in keyof T]?: T[K]};

type PartialPiont = Optional<Point>;
type PartialColors = Optional<Colors>