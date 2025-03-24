const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
    const shouldFail = Math.random() > 0.5;

    if (shouldFail) {
        res.status(500).json({ error: "Server error! Something went wrong." });
    } else {
        res.json({ message: "Data fetched successfully!" });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api/data`);
});
