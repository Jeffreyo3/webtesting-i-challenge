const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: "Big Sword",
    durability: 0,
    enhancement: 0
}
const item2 = {
    name: "Flame Bow",
    durability: 55,
    enhancement: 0
}

describe("Enhancer functions succeed", () => {
    describe("*REPAIR ITEM DURABILITY FUNCTIONS ARE SUCCESSFUL*", () => {

        const expectedItem = {
            name: "Big Sword",
            durability: 100,
            enhancement: 0
        }

        it("Check that item is repaired to 100 durability", () => {
            expect(enhancer.repair(item)).toEqual(expectedItem)
        })

        it("Check that durability is repaired even when parameter object contains other key value pairs", () => {
            expect(enhancer.repair(item2)).not.toStrictEqual(expectedItem)
            expect(enhancer.repair(item2).durability).toStrictEqual(expectedItem.durability)
        })

        it("Check that item is returned as a new object with a durability rating above 0", () => {
            expect(enhancer.repair(item)).toBeTruthy()
            expect(enhancer.repair(item).durability).toBeTruthy()
        })
    })


    describe("*ENHANCEMENT SUCCEED FUNCTIONS ARE SUCCESSFUL*", () => {

        const expectedItem = {
            name: "Big Sword",
            durability: 0,
            enhancement: 1
        }

        it("Adds +1 to enhancement on success", () => {
            expect(enhancer.succeed(item).enhancement).toEqual(item.enhancement + 1)
            expect(enhancer.succeed(item)).toEqual(expectedItem)
        })

        it("Check that enhancement is increased even when parameter object contains other key value pairs", () => {
            expect(enhancer.succeed(item2)).not.toStrictEqual(expectedItem)
            expect(enhancer.succeed(item2).enhancement).toStrictEqual(expectedItem.enhancement)
        })

        it("Check that item is returned as a new object with a enhancement rating above 0", () => {
            expect(enhancer.succeed(item)).toBeTruthy()
            expect(enhancer.succeed(item).enhancement).toBeTruthy()
        })

    })

}) 