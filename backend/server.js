const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDatabase = require("./db/database.js");

dotenv.config();
const app = express();

app.use(cors({
    credentials: true,
}));

app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
    res.send("Welcome to E-LIBARAY MANAGEMENT SYSTEM!");
});


//routes
app.use("/api/auth", require("./routes/authRoutes.js"));


connectDatabase();
const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
