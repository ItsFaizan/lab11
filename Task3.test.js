const Task3 = require("./Task3")
test("Testing Function Power ",()=>{
    expect(Task3.Power(2,2)).toBe(4);
 });
 
 test(" Testing Function Round ",()=>{
     expect(Task3.Round(2.6)).toBe(3);
 })
 
 test(" Testing Function Ceiling ",()=>{
 
      expect(Task3.Ceil(2.4)).toBe(3);
 });