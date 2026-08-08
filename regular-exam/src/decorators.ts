export function Upgraded(
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {
    const originalMethod = descriptor.value;

    if (typeof originalMethod !== "function") {
        throw new Error("Upgraded can only be applied to methods");
    }

    descriptor.value = function (...args: unknown[]) {
        const baseDamage = originalMethod.apply(this, args);

        return baseDamage * 1.75;
    };
}