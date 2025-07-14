import { nanoid } from "nanoid";

export const generateNanoId = (length = 8) => {
    return nanoid(length);
};
