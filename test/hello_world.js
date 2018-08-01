var HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', (accounts) => {
  describe('word method', () => {
    let obj;

    before(async () => obj = await HelloWorld.new());

    it("should set new word", async () => {
      let str = "TestTest";
      await obj.set(str);
      let result = await obj.get();
      assert.equal(result, str);
    });
  });
});
