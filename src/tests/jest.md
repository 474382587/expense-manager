# Jest

### Create your first tests

```
test('test_name', () => {
  const test_result = function_needs_to_be_tested()
  expect(test_result).toBe()//
})
```

### assertion
`toBe()` test if test result and expected value are equal --> Not applied to `Array` or `Object`    
`toEqual()` => this is equality test for `Array` or `Object`    



`expect.any()` --> match certain criteria --> `expect.any(String)`