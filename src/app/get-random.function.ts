export function getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomEl<T>(collection: T[]): T|undefined {
    const l = collection.length;
    if (l) {
        return collection[getRandomInt(l)];
    }
    return undefined;
}
