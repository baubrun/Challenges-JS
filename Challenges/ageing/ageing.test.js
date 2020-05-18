const f = require("./ageing")


test('values += 1', () => {

  const data = ({
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
  })

  expect(f(data, 1)).toEqual({
    "Joel": 33,
    "Fred": 45,
    "Reginald": 66,
    "Susan": 34,
    "Julian": 14

  })
});


test("values += 19", () => {
  const data = {
    "Baby": 2,
    "Child": 8,
    "Teenager": 15,
    "Adult": 25,
    "Elderly": 71
  }
  expect(f(data, 19)).toEqual({
    "Baby": 21,
    "Child": 27,
    "Teenager": 34,
    "Adult": 44,
    "Elderly": 90
  });
})


test("values += 5", () => {
  const data = {
    "Genie": 1000,
    "Joe": 40
  }
  expect(f(data, 5)).toEqual({
    "Genie": 1005,
    "Joe": 45
  })
})