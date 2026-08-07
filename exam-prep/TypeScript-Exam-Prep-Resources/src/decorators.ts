export function CriticalStrike(
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {
    if (typeof descriptor.value !== "function") {
        throw new Error("CriticalStrike can only be applied to methods");
    }

    const originalMethod = descriptor.value as (
        ...args: unknown[]
    ) => number;

    descriptor.value = function (
        this: unknown,
        ...args: unknown[]
    ): number {
        const baseDamage = originalMethod.apply(this, args);

        return baseDamage * 1.5;
    };
}