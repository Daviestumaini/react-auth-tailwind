const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// In-memory mock users — swap this out for a real DB query later
const users = [
  { id: 1, name: "Amina Yusuf", email: "amina@example.com", joinedAt: "2026-01-12" },
  { id: 2, name: "David Stumaini", email: "david@example.com", joinedAt: "2026-03-04" },
  { id: 3, name: "Grace Njoroge", email: "grace@example.com", joinedAt: "2026-05-21" },
];

app.get("/api/users", (req, res) => {
  res.json({ success: true, users });
});

app.get("/", (req, res) => {
  res.send("Charity Minds local server is running.");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});