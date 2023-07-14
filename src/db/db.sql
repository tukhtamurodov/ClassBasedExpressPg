create database books;
\c books
create table books(
  book_id serial not null primary key,
  book_name varchar(64) not null,
  book_descrip varchar(128) not null,
  book_author varchar(64) not null,
  created_at timestamptz default current_timestamp,
  updated_at timestamptz,
  deleted_at timestamptz
);