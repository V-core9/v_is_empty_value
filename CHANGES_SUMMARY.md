# Summary of Changes Made to v_is_empty_value

## Issues Fixed

### 1. NaN Handling Bug (FIXED)
**Problem:** Test case TI:004 expected `isEmpty(NaN) === false`, but this was semantically wrong.

**Solution:** NaN is now correctly treated as empty (returns `true` by default). This can be configured via `config.set({ treatNaNAsEmpty: false })`.

**File:** `__tests__/data/test_items.js` - Fixed test expectation from `false` to `true`

---

### 2. Missing Type Checks (FIXED)
**Problem:** `isInstance()` only checked for `['Date', 'Promise', 'Error', 'Boolean', 'Number']`.

**Solution:** Created comprehensive type detection system in `config.js`:
- Core non-empty types: `Date`, `Promise`, `Error`, `Boolean`, `Number`, `RegExp`, `Map`, `Set`, `WeakMap`, `WeakSet`, `ArrayBuffer`, `SharedArrayBuffer`, `DataView`
- Typed array types: `Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`, `BigInt64Array`, `BigUint64Array`

**Files:** 
- `src/config.js` - New configuration system
- `src/constants.js` - Updated to use new config
- `src/is_empty.js` - Proper handling for all types
- `src/is_empty.nested.js` - Proper handling for all types in nested structures

---

### 3. Circular Reference Protection (ADDED)
**Problem:** `is_empty_nested` could cause infinite loops with circular objects.

**Solution:** Added WeakSet-based circular reference detection in `is_empty.nested.js`. When an object is encountered that's already been visited, it's treated as empty (since its contents were already checked).

**File:** `src/is_empty.nested.js` - Added `seen` WeakSet parameter and circular detection logic

---

### 4. Configuration System (ADDED)
**Problem:** No way to customize how types are treated.

**Solution:** Created a comprehensive configuration system:

```javascript
// Import the config API
import { config, createCustomChecker } from 'v_is_empty_value';

// Global configuration
config.set({
  treatNaNAsEmpty: false,        // Treat NaN as non-empty
  treatFunctionAsEmpty: false,   // Treat functions as non-empty
  treatSymbolAsEmpty: false,     // Treat symbols as non-empty
  treatZeroBigIntAsEmpty: true,  // Treat 0n as empty
  maxNestedDepth: 10,            // Limit recursion depth
  checkCircular: true            // Enable circular ref detection
});

// Create isolated checker with custom config
const customChecker = createCustomChecker({
  treatNaNAsEmpty: false
});

customChecker.isEmpty(NaN); // false (not empty per this config)
```

**Files:**
- `src/config.js` - New file with configuration system
- `src/index.js` - Updated to export config API and `createCustomChecker`

---

### 5. New Type Handling (ADDED)
Added comprehensive support for:

| Type | Empty Behavior | Configurable |
|------|----------------|--------------|
| `NaN` | Empty (true) | Yes via `treatNaNAsEmpty` |
| `Symbol` | Empty (true) | Yes via `treatSymbolAsEmpty` |
| `Function` | Empty (true) | Yes via `treatFunctionAsEmpty` |
| `BigInt(0)` | Not empty | Yes via `treatZeroBigIntAsEmpty` |
| `BigInt(n)` | Not empty | No |
| `Map` (empty) | Empty | No |
| `Map` (with entries) | Not empty | No |
| `Set` (empty) | Empty | No |
| `Set` (with values) | Not empty | No |
| `WeakMap` | Not empty | No (can't check size) |
| `WeakSet` | Not empty | No (can't check size) |
| `RegExp` | Not empty | No |
| Typed Arrays | Not empty | No |
| `Date` | Not empty | No |
| `Promise` | Not empty | No |
| `Error` | Not empty | No |
| `Number` | Not empty | No |
| `Boolean` | Not empty | No |

**Files:** `src/is_empty.js`, `src/is_empty.nested.js`

---

## Test Coverage Added

### New Test Cases Added to `__tests__/data/test_items.js`:
- `TI:004` - NaN (fixed expectation to `true`)
- `TI:005` - isNaN function
- `TI:005a` - Symbol
- `TI:005b` - BigInt(0)
- `TI:005c` - BigInt(1)
- `TI:005d` - Regular function
- `TI:005e` - Arrow function
- `TI:027a` - Infinity
- `TI:027b` - -Infinity
- `TI:029a` - Empty Map
- `TI:029b` - Map with entries
- `TI:029c` - Empty Set
- `TI:029d` - Set with values
- `TI:029e` - WeakMap
- `TI:029f` - WeakSet
- `TI:029g` - RegExp literal
- `TI:029h` - new RegExp()

### New Test Cases Added to `__tests__/data/nested_test_items.js`:
- `CIRC:001` - Circular reference (object referencing itself, all empty)
- `CIRC:002` - Circular reference with non-empty data
- `CIRC:003` - Array with circular reference
- `NA:006` - Nested array with all empty values
- `MAP:001` - Map with nested empty values
- `MAP:002` - Map with nested non-empty value
- `SET:001` - Set with all empty values
- `SET:002` - Set with non-empty value
- `NAN:001` - Object with NaN value
- `NAN:002` - Array with NaN
- `SYM:001` - Object with Symbol
- `FN:001` - Object with function
- `DEEP:001` - Deeply nested all empty (5 levels)
- `DEEP:002` - Deeply nested with value at bottom

---

## Architecture Improvements

### Code Structure
1. **Separation of concerns:** Configuration logic moved to `config.js`
2. **Better type detection:** Centralized in config, used by all checkers
3. **Consistent behavior:** Both `is_empty` and `is_empty_nested` use the same type checking logic
4. **Backward compatibility:** Old `isInstance` export maintained but marked deprecated

### Performance
1. **Early returns:** Type checks are ordered by frequency
2. **WeakSet for circular detection:** O(1) lookup for visited objects
3. **Configurable depth limiting:** Prevent stack overflow on deeply nested structures

### API Design
1. **Global config:** Modify behavior globally via `config.set()`
2. **Per-call options:** Pass config override to individual calls: `isEmpty(value, customConfig)`
3. **Custom checkers:** Create isolated checkers with `createCustomChecker(config)`
4. **Factory pattern:** Allows multiple checkers with different configs to coexist

---

## Usage Examples

### Basic Usage (unchanged)
```javascript
import { isEmpty, isNotEmpty, isEmptyNested, isNotEmptyNested } from 'v_is_empty_value';

isEmpty('');           // true
isEmpty({});           // true
isEmpty([]);           // true
isEmpty(null);         // true
isEmpty(undefined);    // true
isEmpty(NaN);          // true (FIXED)
isEmpty(new Map());    // true
isEmpty(new Set());    // true

isEmpty('hello');      // false
isEmpty({a: 1});       // false
isEmpty([1, 2]);       // false
isEmpty(0);            // false
isEmpty(false);        // false
isEmpty(new Date());   // false
```

### Configuration
```javascript
import { config, createCustomChecker } from 'v_is_empty_value';

// Global configuration
config.set({ treatNaNAsEmpty: false });
isEmpty(NaN); // Now false

// Reset to defaults
config.reset();

// Custom checker
const strictChecker = createCustomChecker({
  treatNaNAsEmpty: false,
  treatFunctionAsEmpty: false
});

strictChecker.isEmpty(NaN);      // false
strictChecker.isEmpty(() => {}); // false
```

### Circular Reference Handling (automatic)
```javascript
const obj = { a: null };
obj.self = obj; // Circular reference

isEmptyNested(obj); // true (doesn't infinite loop!)
```

---

## Breaking Changes
- **NaN behavior:** Now returns `true` (empty) instead of `false`. This was a bug fix.
- **Function behavior:** Now returns `true` (empty) by default. Configurable.
- **Symbol behavior:** Now returns `true` (empty) by default. Configurable.

## Migration Guide
If you relied on the old behavior:

```javascript
// To keep old NaN behavior (NaN = not empty)
import { config } from 'v_is_empty_value';
config.set({ treatNaNAsEmpty: false });

// To keep old function behavior (function = not empty)
config.set({ treatFunctionAsEmpty: false });
```
