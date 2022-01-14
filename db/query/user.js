import { Query } from "db";

export const GET_USERS = () => {
  return Query("SELECT * FROM user");
};
