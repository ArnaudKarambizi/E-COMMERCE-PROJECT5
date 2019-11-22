// Import the dependencies for testing

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server.js");

/*===== CONFIGURE CHAI========= */

chai.use(chaiHttp);
chai.should();

describe("app", () => {
    describe("GET/", () => {
        /*========= TESTING THE API ENDPOINTS =========*/

        it("returns all the products data", done => {
            chai.request(app)

                .get("/api/products")

                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    done();
                });
        });
        it("returns filtered products data ", done => {
            chai.request(app)

                .get("/api/productFilter/:query ")

                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    done();
                });
        });

        it(" returns contact data", done => {
            chai.request(app)

                .get("/api/contacts ")

                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    done();
                });
        });

        it("returns the homepage", done => {
            chai.request(app)

                .get("/")

                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");

                    done();
                });
        });
    });
});
