import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HEALTHFLOW",
    })
    .then(() => {
      console.log(`Connected to DataBase`);
    })
    .catch((err) => {
      console.log(`Error occured while connecting to Database : ${err}`);
    });
};
