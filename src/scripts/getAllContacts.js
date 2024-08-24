import * as fs from "node:fs/promises";

import { PATH_DB_CONTACTS } from "../constants/contacts.js";

const getAllContacts = async ()=> {
    const data = await fs.readFile(PATH_DB_CONTACTS, "utf-8");
    return JSON.parse(data);
};

export default getAllContacts;