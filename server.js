// 36u7CkPSSlA7u02f

const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Nastya:36u7CkPSSlA7u02f@cluster0.z8d4yi0.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
