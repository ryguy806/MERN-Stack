import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

//Data imports
// import User from "./models/User.js";
// import { dataUser } from "./data/index.js";
// import Product from "./models/Products.js";
// import { dataProduct } from "./data/index.js";
// import ProductStat from "./models/ProductStats.js";
// import { dataProductStat } from "./data/index.js";
// import Transaction from "./models/Transaction.js";
// import { dataTransaction } from "./data/index.js";
// import OverallStat from "./models/OverallStat.js";
// import { dataOverallStat } from "./data/index.js";
// import AffiliateStat from "./models/AffiliateStat.js";
// import { dataAffiliateStat } from "./data/index.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE DB CONFIGURATION */
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);
  })
  .catch((err) => console.log(err, "Did not connect to server"));
