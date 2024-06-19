import { describe, it, expect } from "vitest"
import {  Item, Shop } from "../src/gilded_rose"




describe("Gilded Rose", () => {
  const items = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Banana', 'Sulfuras, Hand of Ragnaros']
  const sellIns = [10, 11, 12, 5, 6, 7, -2, -1, 0, 1, 2, 3, 4 ]
  const qualities = [-1, 0, 1, 49, 50, 51]

  for (const item of items) {
    for (const sellIn of sellIns) {
      for (const quality of qualities) {
        it(`${item} with sellIn ${sellIn} and quality ${quality}`, () => {

          const itemGildedRose = new Shop([new Item(item, sellIn, quality)])
          itemGildedRose.updateQuality()
          expect(itemGildedRose.items[0]).toMatchSnapshot()
        
        })
      }
    }
  }
  
})
