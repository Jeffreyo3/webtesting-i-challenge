const enhancer = require('./enhancer.js');
// test away!

describe("Enhancer functions succeed", () => {
    describe("Repair Item Successful", () => {
        it("Restores item durability to 100", () => {
            const item = {
                name: "Big Sword",
                durability: 1,
                enhancement: 0
            }
            const expectedItem = {
                name: "Big Sword",
                durability: 100,
                enhancement: 0
            }

        
            expect(enhancer.repair(item)).toEqual(expectedItem)
            expect(enhancer.repair(item).durability).toStrictEqual(expectedItem.durability)
            expect(enhancer.repair(item)).toBeTruthy()
        })
    })


}) 