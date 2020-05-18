const f = require("./addSingleNumber")



test(' 4 addUp is 10 ', () => {
    expect(f(4)).toBe(10);
})

test(' 13 addUp is  91', () => {
    expect(f(13)).toBe(91);
})

test(' 600 addUp is 180300 ', () => {
    expect(f(600)).toBe(180300);
})


