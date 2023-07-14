import fetchData from "../../utils/postgres.js";

class productModel extends fetchData {
  async getAll() {
    return await this.getData("select * from books");
  }

  async post(name, descrip, author) {
    const data = await this.getData(
      `insert into books (book_name,book_descrip,book_author) 
        values($1,$2,$3) returning *`,
      name,
      descrip,
      author
    );
    if (data) return data;
  }
}

export default new productModel();
