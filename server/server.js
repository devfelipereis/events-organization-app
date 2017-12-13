import path from "path";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { graphql } from "graphql";
import graphqlHTTP from "express-graphql";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/events-organization");
const db = mongoose.connection;

db.on("error", () => {
  console.log("Failed to connect to mongoose");
});
db.once("open", () => {
  console.log("Connected to mongoose");
});

app.use(
  "/graphql",
  graphqlHTTP(req => ({
    schema
  }))
);

// let's start the server
app.listen(3000, () => {
  console.log("Server is running!");
});
