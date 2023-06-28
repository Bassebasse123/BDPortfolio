import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const adapter = new JSONFile("db.json");
const db = new Low(adapter, { users: [] });
await db.read();

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is listening on port", port, "...");
});
