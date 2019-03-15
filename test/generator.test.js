const expect = require("expect.js");
const generator = require("../index");
const test = generator("set_test");


describe("action contants", function() {
  it("should return request action constant", function() {
    expect(test.REQUEST).to.equal("SET_TEST_REQUEST");
  })
  it("should return success action constant", function() {
    expect(test.SUCCESS).to.equal("SET_TEST_SUCCESS");
  })
  it("should return failure action constant", function() {
    expect(test.FAILURE).to.equal("SET_TEST_FAILURE");
  })
})

describe("action creators", function() {
  it("should be type of function", function() {
    expect(typeof test.request).to.equal("function");
  })
  it("should return object when being called", function() {
    expect(typeof test.request()).to.equal("object");
  })
  it("should have a type property when being called", function() {
    expect(test.request().hasOwnProperty("type")).to.equal(true);
  })
  it("should pass the argument when success/error being called", function() {
    const success = test.success("result");
    const failure = test.failure("error message");
    expect(success.response).to.equal("result");
    expect(failure.error).to.equal("error message");
  })
})

describe("reducer", function() {
  it("should be of type function", function() {
    expect(typeof test.reducer).to.equal("function");
  })
  it("should return an object when being called", function() {
    expect(typeof test.reducer({}, test.REQUEST)).to.equal("object");
  })
})