type Point = {x: number, y: number};
type Colors = { red: string, blue: string};

//type PartialPoint = { [ K in keyof Point]?: Point[K] };
//type PartialColor = { [ K in keyof Colors]?: Colors[K] };

type Optional<T> = {[K in keyof T]?: T[K]};

type PartialPoint = Optional<Point>
type PartialColor = Optional<Colors>


//type Optional<T> = { [K in keyof T]?: T[K]};

//type PartialPiont = Optional<Point>;
//type PartialColors = Optional<Colors>