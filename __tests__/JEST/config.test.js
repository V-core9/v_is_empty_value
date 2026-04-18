/**
 * Tests for configuration system - verifying live config values work correctly
 */

const { isEmpty, is_not_empty, isEmptyNested, is_not_empty_nested, config } = require('../..')

describe('Config System - Live Value Updates', () => {
  // Store original config to restore after tests
  let originalConfig

  beforeAll(() => {
    originalConfig = config.get()
  })

  afterEach(() => {
    // Reset config after each test
    config.reset()
  })

  afterAll(() => {
    // Restore original config
    config.set(originalConfig)
  })

  describe('treatNaNAsEmpty', () => {
    test('default: NaN is treated as empty', () => {
      expect(isEmpty(NaN)).toBe(true)
      expect(is_not_empty(NaN)).toBe(false)
    })

    test('when set to false: NaN is treated as NOT empty', () => {
      config.set({ treatNaNAsEmpty: false })

      expect(isEmpty(NaN)).toBe(false)
      expect(is_not_empty(NaN)).toBe(true)
    })

    test('when reset: NaN returns to default (empty)', () => {
      config.set({ treatNaNAsEmpty: false })
      expect(isEmpty(NaN)).toBe(false)

      config.reset()
      expect(isEmpty(NaN)).toBe(true)
    })
  })

  describe('treatFunctionAsEmpty', () => {
    test('default: functions are treated as empty', () => {
      expect(isEmpty(() => {})).toBe(true)
      expect(isEmpty(function () {})).toBe(true)
    })

    test('when set to false: functions are treated as NOT empty', () => {
      config.set({ treatFunctionAsEmpty: false })

      expect(isEmpty(() => {})).toBe(false)
      expect(is_not_empty(() => {})).toBe(true)
    })
  })

  describe('treatSymbolAsEmpty', () => {
    test('default: symbols are treated as empty', () => {
      expect(isEmpty(Symbol('test'))).toBe(true)
      expect(isEmpty(Symbol.iterator)).toBe(true)
    })

    test('when set to false: symbols are treated as NOT empty', () => {
      config.set({ treatSymbolAsEmpty: false })

      expect(isEmpty(Symbol('test'))).toBe(false)
    })
  })

  describe('treatZeroBigIntAsEmpty', () => {
    test('default: BigInt 0n is NOT empty', () => {
      expect(isEmpty(0n)).toBe(false)
      expect(isEmpty(1n)).toBe(false)
    })

    test('when set to true: BigInt 0n is treated as empty', () => {
      config.set({ treatZeroBigIntAsEmpty: true })

      expect(isEmpty(0n)).toBe(true)
      expect(is_not_empty(0n)).toBe(false)
      // Non-zero BigInt should still be non-empty
      expect(isEmpty(1n)).toBe(false)
    })
  })

  describe('nested functions respect config', () => {
    test('nested: NaN respects treatNaNAsEmpty', () => {
      const obj = { a: { b: NaN } }

      // Default: NaN is empty, so nested object is empty
      expect(isEmptyNested(obj)).toBe(true)

      config.set({ treatNaNAsEmpty: false })

      // Now NaN is not empty, so nested object is not empty
      expect(isEmptyNested(obj)).toBe(false)
    })

    test('nested: functions respect treatFunctionAsEmpty', () => {
      const obj = { a: () => {} }

      // Default: function is empty
      expect(isEmptyNested(obj)).toBe(true)

      config.set({ treatFunctionAsEmpty: false })

      // Now function is not empty
      expect(isEmptyNested(obj)).toBe(false)
    })
  })

  describe('multiple config changes', () => {
    test('can change multiple settings at once', () => {
      config.set({
        treatNaNAsEmpty: false,
        treatFunctionAsEmpty: false,
        treatSymbolAsEmpty: false
      })

      expect(isEmpty(NaN)).toBe(false)
      expect(isEmpty(() => {})).toBe(false)
      expect(isEmpty(Symbol('test'))).toBe(false)
    })

    test('is_not_empty functions reflect config changes', () => {
      config.set({ treatNaNAsEmpty: false })

      expect(is_not_empty(NaN)).toBe(true)
      expect(is_not_empty_nested({ a: NaN })).toBe(true)
    })
  })
})

