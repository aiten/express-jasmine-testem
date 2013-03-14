var helper;

helper = require('./spec-helper');

describe("App", function() {
  describe("get /", function() {
    it("responds successfully", function() {
      return helper.withServer(function(r, done) {
        return r.get("/", function(err, res, body) {
          expect(res.statusCode).toEqual(200);
          return done();
        });
      });
    });
    return it("has the correct body", function() {
      return helper.withServer(function(r, done) {
        return r.get("/", function(err, res, body) {
          expect(body).toEqual("<!doctype html>\n<h1>Hello.</h1>");
          return done();
        });
      });
    });
  });
  return describe("post /", function() {
    return it("has the correct body", function() {
      return helper.withServer(function(r, done) {
        return r.post("/", "post body", function(err, res, body) {
          expect(body).toEqual("You posted!");
          return done();
        });
      });
    });
  });
});

