import http from "http";

import { apiResolver } from "next/dist/server/api-utils";
import supertest from "supertest";

import userHandler from "../../pages/api/user";

let server;

beforeEach(async () => {
  const requestHandler = (request, response) =>
    apiResolver(request, response, undefined, userHandler, {}, true);
  server = http.createServer(requestHandler);
});

afterEach(() => {
  server.close();
});

describe("User[GET]", () => {
  test("should return status 200", async () => {
    const result = await supertest(server).get("/api/user");
    expect(result.status).toBe(200);
  });

  test("should return true success", async () => {
    const result = await supertest(server).get("/api/user");
    const { success } = await result.body;
    expect(success).toBeTruthy();
  });

  test("should return data", async () => {
    const result = await supertest(server).get("/api/user");
    const { data } = await result.body;
    expect(data).toBeTruthy();
  });
});

describe("User[POST]", () => {
  const body = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  test("should return status 200", async () => {
    const result = await supertest(server).post("/api/user").send(body);
    expect(result.status).toBe(200);
  });

  test("should return true success", async () => {
    const result = await supertest(server).post("/api/user").send(body);
    expect(result.body.success).toBeTruthy();
  });
});
