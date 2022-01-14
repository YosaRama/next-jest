import { GET_USERS } from "db/query/user";

describe("User Query", () => {
  test("should return data", async () => {
    const dataResult = await GET_USERS();
    expect(dataResult).toBeDefined();
  });
});
