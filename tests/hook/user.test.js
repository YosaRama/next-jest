import { renderHook, act } from "@testing-library/react-hooks";
import { useUsers } from "hook/user";
// jest.mock("../../hook/user.js");

describe("User Hook", () => {
  const data = {
    name: "Putu",
    email: "putu@gmail.com",
  };

  test("should return data", async () => {
    const { result, rerender, waitFor, waitForNextUpdate } = renderHook(() =>
      useUsers({ queryString: "" })
    );

    console.log(result.current);

    expect();
  });
});
