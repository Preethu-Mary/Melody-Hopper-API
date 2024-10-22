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

// // Endpoint to seed exercises (run this once or as needed)
// app.post('/seed', async (req, res) => {
//     try {
//         await knex('exercises').del(); // Clear existing data
//         await knex('exercises').insert([
//             { exercise_name: 'Ascending Scale', notes: 'C4, D4, E4, F4, G4, A4, B4, C5' },
//             { exercise_name: 'Descending Scale', notes: 'C5, B4, A4, G4, F4, E4, D4, C4' },
//             { exercise_name: 'Jumping Intervals', notes: 'C4, E4, G4, B4, D5, F5' },
//             { exercise_name: 'Back and Forth', notes: 'C4, D4, E4, D4, C4, B4, A4, B4, C5' },
//             { exercise_name: 'Arpeggio', notes: 'C4, E4, G4, C5, E5, G5' },
//             { exercise_name: 'Circle of Fifths', notes: 'C4, G4, D4, A4, E4, B4, F#4, C#5' },
//             { exercise_name: 'Random Jumps', notes: 'D4, A4, C4, F4, G4, E4, B4' },
//             { exercise_name: 'Repeated Notes', notes: 'C4, C4, D4, D4, E4, E4, F4, F4, G4' },
//             { exercise_name: 'Stepwise Motion', notes: 'C4, D4, E4, F4, G4, A4, B4' },
//             { exercise_name: 'Reverse Steps', notes: 'B4, A4, G4, F4, E4, D4, C4' },
//         ]);
//         res.json({ message: 'Exercises seeded successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to seed exercises' });
//     }
// });

app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });

app.listen(PORT, () => console.log(`Server is running on port ${URL}${PORT}`));
