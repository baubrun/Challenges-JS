const f = require("./bubbleSort")



test(' number of swaps, first and last element ', () => {
    const ans = ["Array is sorted in 0 swaps.", "First Element: 1", "Last Element: 3"]
    expect(f([1, 2, 3])).toEqual(ans);
});


