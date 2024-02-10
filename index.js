import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xssClean from "xss-clean";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import compression from "compression";
import { ApiError } from "./src/utils/ApiError.js";
import globalErrorHandler from "./src/utils/errorHandler.js";

// Routes Import:
import { accountRouter } from "./src/routes/account.route.js";
import { companyRouter } from "./src/routes/company.route.js";
import { customerRouter } from "./src/routes/customers.route.js";
import { expenseRouter } from "./src/routes/expense.route.js";
import { itemsRouter } from "./src/routes/item.route.js";
import { ownerAccountRouter } from "./src/routes/ownerAccount.route.js";
import { venderRouter } from "./src/routes/vender.route.js";

// app config and export
export const app = express();

// 1) Enable Cross-Origin Resource Sharing (CORS) for specified origin, methods, and credentials
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// 2) Parse incoming JSON requests, limit size to 12kb
app.use(express.json({ limit: "12kb" }));

// 3) Parse incoming URL-encoded data, extended to support rich objects, limit size to 12kb
app.use(express.urlencoded({ extended: true, limit: "12kb" }));

// 4) Parse cookies for incoming requests
app.use(cookieParser());

// 5) Set Secure HTTP headers to enhance security
app.use(helmet());

// 6) Set request limit on our API to prevent abuse
const limiter = rateLimit({
  max: 300,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// 7) Data Sanitization against NoSQL query Injection
app.use(mongoSanitize());

// 8) Data Sanitization against Cross-Site Scripting (XSS) attacks
app.use(xssClean());

// 9) Prevent Parameter Pollution by whitelisting allowed parameters
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

// 10) Compress responses to reduce data transfer size
app.use(compression());

// Routes:
app.use("/api/v1/accounts", accountRouter);
app.use("/api/v1/companies", companyRouter);
app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/items", itemsRouter);
app.use("/api/v1/ownerAccounts", ownerAccountRouter);
app.use("/api/v1/venders", venderRouter);

// Api Error Handling:
app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
