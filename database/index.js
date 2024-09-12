// import mongoose from "mongoose";

// export default async function connectToDB() {
//   try {
//     await mongoose.connect(
//       "mongodb://localhost:27017/new_user"
//     );
//     console.log("Database connected successfully");
//   } catch (e) {
//     console.log(e);
//   }
// }
import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/new_user";

let isConnected; // Track the connection status

export default async function connectToDB() {
  if (isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Database connected successfully");
  } catch (e) {
    console.log("Database connection failed:", e);
  }
}
