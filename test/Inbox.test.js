const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

describe("smoke test", () => {
  it("1 + 1 should be 2", () => {
    const sum = 1 + 1;

    assert.strictEqual(sum, 2);
  });
});
