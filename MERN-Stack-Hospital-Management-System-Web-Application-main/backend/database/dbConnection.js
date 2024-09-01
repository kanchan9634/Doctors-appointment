import mongoose from "mongoose";

export const dbConnection = () => {
  // mongoose
  //   // .connect(process.env.MONGO_URI, {
  //   //   dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
  //   // })
  //   .connect(process.env.MONGO_URI)
  //   .then(() => {
  //     console.log("Connected to database!");
  //   })
  //   .catch((err) => {
  //     console.log("Some error occured while connecting to database:", err);
  //   });
    mongoose
    
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
