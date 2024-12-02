/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('exercises').del();
  await knex('exercises').insert([
      { 
        id: 1, 
        exercise_name: 'Ascending Scale', 
        notes: 'C D E F G A B C' 
      },
      { 
        id:2,
        exercise_name: 'Descending Scale', 
        notes: 'C B A G F E D C' 
      },
      { 
        id:3,
        exercise_name: 'Jumping Intervals', 
        notes: 'C E G B D F' 
      },
      { 
        id:4,
        exercise_name: 'Back and Forth', 
        notes: 'C D E D C B A B C' 
      },
      { 
        id:5,
        exercise_name: 'Arpeggio', 
        notes: 'C E G C E G' 
      },
      { 
        id:6,
        exercise_name: 'Circle of Fifths', 
        notes: 'C G D A E B F# C#' 
      },
      { 
        id:7,
        exercise_name: 'Random Jumps', 
        notes: 'D A C F G E B' 
      },
      { 
        id:8,
        exercise_name: 'Repeated Notes', 
        notes: 'C C D D E E F F G' 
      },
      { 
        id:9,
        exercise_name: 'Stepwise Motion', 
        notes: 'C D E F G A B' 
      },
      { 
        id:10,
        exercise_name: 'Reverse Steps', 
        notes: 'B A G F E D C' 
      },
  ]);
}

