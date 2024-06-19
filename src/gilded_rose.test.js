import { describe, it, expect } from "vitest"
import {  Item, Shop } from "../src/gilded_rose"

function deepFor(items, sellIns, qualities, numberQuality, numberSellIn) {
  for (const item of items) {
    for (const sellIn of sellIns) {
      for (const quality of qualities) {
        const itemGildedRose = new Shop([new Item(item, sellIn, quality)])
        itemGildedRose.updateQuality()
        expect(itemGildedRose.items[0].name).toBe(item)
        expect(itemGildedRose.items[0].sellIn).toBe(numberSellIn)
        expect(itemGildedRose.items[0].quality).toBe(numberQuality)
      }
    }
  }
}


describe("Gilded Rose", () => {

  it('should decrease quality and sellIn', () => {
    const items = ['Banana', 'Apple']
    const sellIns = [10, 10]
  const qualities = [10, 10]

  //const gildedRose = new Shop([new Item("Banana", 10, 10)]) 

  deepFor(items, sellIns, qualities, 9, 9)


    
 /*  gildedRose.updateQuality()
  it("testing GildedRose", () => {
    expect(gildedRose.items[0].name).toBe("Banana")
  })

  it('should decrease quality', () => {
    expect(gildedRose.items[0].quality).toBe(9)
  })

  it('should decrease sellIn', () => {
    expect(gildedRose.items[0].sellIn).toBe(9)
  }) */
  })

  it('increase quality and sellIn in Backstage passes to a TAFKAL80ETC concert', () => {
    const items = ['Backstage passes to a TAFKAL80ETC concert']
    const sellIns = [10]
    const qualities = [10]
    deepFor(items, sellIns, qualities, 12, 9)
  })

  it('increase quality and sellIn Aged Brie', () => {
    const items = ['Aged Brie']
    const sellIns = [10]
    const qualities = [10]
    deepFor(items, sellIns, qualities, 11, 9)
  })

  it('sellIn is equal to 0', () => {
    const items = ['Aged Brie']
    const sellIns = [0]
    const qualities = [10]
    deepFor(items, sellIns, qualities, 12, -1)
  })
})
