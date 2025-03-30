import path from "node:path";

export const SONG_DB_PATH = path.resolve("src", "db", "db-songs.json");


// absolute path in another way
const file1 = path.join(process.cwd(), "src", "db", "db-songs.json");


