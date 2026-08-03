

interface CarBody {
    material: string;
    state: string;
}
interface Tires {
    airPressure: number;
    condition: string;
}
interface Engine {
    horsepower: number;
    oilDensity: number;
}

interface AdditionalProps {
    partName: 'Engine' | 'Car Body' | 'Tyres';
    runDiagnostics(): string;
}