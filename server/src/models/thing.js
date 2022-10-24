module.exports = class Thing {
    static THINGS = [
        { 'id': 1, name: 'room' },
    ]

    constructor(body) {
        const thing = {...body};
        thing.id = Thing.THINGS.length + 1;
        Thing.THINGS.push(thing);
    }

    static findById(id) {
        return Thing.THINGS.find(thing => thing.id === id);
    }

    static findAll() {
        return [...Thing.THINGS];
    }
};
