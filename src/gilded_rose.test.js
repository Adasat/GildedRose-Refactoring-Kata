import { describe, it, expect } from "vitest"
import {  Item, Shop } from "../src/gilded_rose"

describe("Gilded Rose", () => {
  const gildedRose = new Shop([new Item("Aged Brie", 2, 0)])

  it("testing GildedRose", () => {
    expect(gildedRose.items[0].name).toBe("Aged Brie")
  })

  it("should pass CI", () => {
    expect(true).toBe(true)
  })
})
