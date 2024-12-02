import initKnex from "knex";
import configuration from "./knexfile.js";
import express from "express";
import cors from "cors";
import "dotenv/config";

const knex = initKnex(configuration);
const app = express();
const PORT = process.env.PORT || 8080;
const URL = "http://localhost:";

app.use(cors());
app.use(express.json());

app.get('/exercises', async (req, res) => {
    try {
        const exercises = await knex('exercises').select('*');
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch exercises' });
    }
});

app.get('/exercises/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const exercise = await knex('exercises').where({ id }).first();
        if (exercise) {
            res.json(exercise);
        } else {
            res.status(404).json({ error: 'Exercise not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the exercise' });
    }
});

app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });

app.listen(PORT, () => console.log(`Server is running on port ${URL}${PORT}`));
