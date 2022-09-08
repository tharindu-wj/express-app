const request = require("supertest"); // use to test HTTP endpoints
const app = require("../../src/app");

describe("POST /register", () => {
  beforeAll(async () => {});
  afterAll(async () => {});
  it("should return 200 when valid payload provided", async () => {
    const response = await request(app).post("/register").send({
      "First Name": "Test",
      "Last Name": "Test",
      "Email Address": "asdf@test.com",
      "Date of Birth": "1990-01-01",
    });

    expect(response.statusCode).toBe(200);
  });
  it("should return 400 when required data in provided", async () => {
    const response = await request(app).post("/register").send({
      "First Name": "Test",
      "Last Name": "Test",
      "Email Address": "asdf@test.com",
    });
    expect(response.statusCode).toBe(400);
  });
});
