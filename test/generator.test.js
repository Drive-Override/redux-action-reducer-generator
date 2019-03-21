const expect = require("expect.js");
const generator = require("../src");
const test = generator("set_test");

describe("initilization", function() {
  it("should return undefined when no string passed", function() {
    expect(generator(12)).to.be.equal(undefined)
  })
  it("should return undefined when nothing passed", function() {
    expect(generator()).to.be.equal(undefined)
  })
})

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
  it("should return the default state", function() {
    const request = test.reducer(undefined, {});
    expect(request).to.equal(test.defaultState);
  })
  describe("action type request", function() {
    it("should return an object with property loading", function() {
      const request = test.reducer({}, { type: test.REQUEST });
      expect(request.hasOwnProperty("isLoading")).to.be.ok();
    })
    it("should have isLoading return true", function() {
      const request = test.reducer({}, { type: test.REQUEST });
      expect(request.isLoading).to.be.ok();
    })
  })
  describe("action type success", function() {
    it("should return an object with property loading", function() {
      const success = test.reducer({}, { type: test.SUCCESS });
      expect(success.hasOwnProperty("isLoading")).to.be.ok();
    })
    it("should return an object with property done", function() {
      const success = test.reducer({}, { type: test.SUCCESS });
      expect(success.hasOwnProperty("done")).to.be.ok();
    })
    it("should return an object with property response", function() {
      const success = test.reducer({}, { type: test.SUCCESS });
      expect(success.hasOwnProperty("response")).to.be.ok();
    })
    it("should have isLoading return false", function() {
      const success = test.reducer({}, { type: test.SUCCESS });
      expect(success.isLoading).to.be.fail;
    })
    it("should have done return true", function() {
      const success = test.reducer({}, { type: test.SUCCESS });
      expect(success.done).to.be.ok();
    })
    it("should have response return passed in state", function() {
      const response = { ok: true };
      const success = test.reducer({}, { type: test.SUCCESS, response });
      expect(success.response).to.be.equal(response);
    })
  })
  describe("action type failure", function() {
    it("should return an object with property loading", function() {
      const failure = test.reducer({}, { type: test.FAILURE });
      expect(failure.hasOwnProperty("isLoading")).to.be.ok();
    })
    it("should return an object with property done", function() {
      const failure = test.reducer({}, { type: test.FAILURE });
      expect(failure.hasOwnProperty("done")).to.be.ok();
    })
    it("should return an object with property error", function() {
      const failure = test.reducer({}, { type: test.FAILURE });
      expect(failure.hasOwnProperty("error")).to.be.ok();
    })
    it("should have isLoading return false", function() {
      const failure = test.reducer({}, { type: test.FAILURE });
      expect(failure.isLoading).to.be.fail;
    })
    it("should have done return false", function() {
      const failure = test.reducer({}, { type: test.FAILURE });
      expect(failure.done).to.be.fail;
    })
    it("should have error return new state", function() {
      const error = { message: "This is an error message!" };
      const failure = test.reducer({}, { type: test.FAILURE, error });
      expect(failure.error).to.be.equal(error);
    })
  })
})