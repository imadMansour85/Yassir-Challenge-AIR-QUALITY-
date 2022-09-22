import moment from "moment"
const request = require("supertest")
const baseURL = "http://localhost:5000"

describe("AppController", () => {
  const gps = { lon: 2.351666, lat: 48.856613 }

  it("should return todos", async () => {
    const response = await request(baseURL).get("/most_polluted_time");

    expect(response.body).toEqual([
      {
        "_id": expect.anything(),
        "ts": expect.anything(),
        "aqius": expect.any(Number),
        "mainus": expect.any(String),
        "aqicn": expect.any(Number),
        "maincn": expect.any(String),
        "__v": 0
      }
    ]);
  });

  it("should return todos", async () => {
    const response = await request(baseURL).get(`/air_quality?lon=${gps.lon}&lat=${gps.lat}`);

    console.log(response.body);
    
    expect(response.body.result).toEqual(
      {
        "ts": expect.anything(),
        "aqius": expect.any(Number),
        "mainus": expect.any(String),
        "aqicn": expect.any(Number),
        "maincn": expect.any(String),
      }
    );
  });
});


