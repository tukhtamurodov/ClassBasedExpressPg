import pg from "pg";
import "dotenv/config";
const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});
class fetchData {
  #pool = pool;

  async getData(SQL, ...params) {
    const client = await this.#pool.connect();
    try {
      const { rows } = await client.query(SQL, params);
      return rows;
    } finally {
      client.release();
    }
  }
}

export default fetchData;
