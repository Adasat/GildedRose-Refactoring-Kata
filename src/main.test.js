import { describe, it, expect } from "vitest"
import { myFunction } from "./main.js"

describe.skip("Default test", () => {
  it("should work", () => {
    const result = myFunction()

    expect(result).toBe(true)
  })
})
