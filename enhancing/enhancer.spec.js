const enhancer = require('./enhancer.js');
// test away!

describe("Enhancer functions succeed", () => {
    describe("Repair Item Successful", () => {
        it("Restores item durability to 100", () => {
            const item = {
                name: "Big Sword",
                durability: 0,
                enhancement: 0
            }
            const item2 = {
                name: "Flame Bow",
                durability: 55,
                enhancement: 20
            }
            const expectedItem = {
                name: "Big Sword",
                durability: 100,
                enhancement: 0
            }

            // Check that item is repaired to expectedItem
            expect(enhancer.repair(item)).toEqual(expectedItem)

            // Check that durability is repaired even when parameter object contains other key value pairs
            expect(enhancer.repair(item2)).not.toStrictEqual(expectedItem)
            expect(enhancer.repair(item2).durability).toStrictEqual(expectedItem.durability)

            // Check that item is returned as a new object with a durability rating above 0
            expect(enhancer.repair(item)).toBeTruthy()
            expect(enhancer.repair(item).durability).toBeTruthy()
        })
    })


}) 