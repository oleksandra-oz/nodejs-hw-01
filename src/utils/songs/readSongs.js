import fs from "node:fs/promises";
import { SONG_DB_PATH } from "../../constants/songs.js";

export const readSongs = async () => {
    const data = await fs.readFile(SONG_DB_PATH, "utf-8");
    // the same but longer coded
    // const buffer = await fs.readFile(SONG_DB_PATH);
    // const text = buffer.toString();
    return JSON.parse(data);



};

readSongs();
