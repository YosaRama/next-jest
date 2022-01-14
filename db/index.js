import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host: process.env.MYSQL_ENDPOINT,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  },
});

export async function Query(query, value) {
  try {
    const results = await db.query(query, value);
    await db.end();
    return results;
  } catch (err) {
    // throw new Error("Database connection is error", err);
    console.log(err);
  }
}

export async function QueryTransaction(queryString, value, rollbackFunc) {
  try {
    const result = await db
      .transaction()
      .query(queryString, value)
      .rollback(rollbackFunc)
      .commit();
    await db.end();
    return result;
  } catch (err) {
    console.log(err);
  }
}
