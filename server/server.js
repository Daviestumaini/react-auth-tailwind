import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    firstName: "Amina",
    lastName: "Yusuf",
    username: "amina_y",
    email: "amina@example.com",
    phone: "0712345678",
    dob: "1998-03-14",
    gender: "female",
    createdAt: "2026-01-12",
  },
  {
    id: 2,
    firstName: "David",
    lastName: "Stumaini",
    username: "davidstu",
    email: "david@example.com",
    phone: "0798765432",
    dob: "1995-11-02",
    gender: "male",
    createdAt: "2026-03-04",
  },
  {
    id: 3,
    firstName: "Grace",
    lastName: "Njoroge",
    username: "gracen",
    email: "grace@example.com",
    phone: "0722334455",
    dob: "2000-07-19",
    gender: "female",
    createdAt: "2026-05-21",
  },
];

app.get("/api/users", (req, res) => {
  res.json({ success: true, users });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});