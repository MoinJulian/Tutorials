import { model } from "mongoose";
import { customAlphabet } from "nanoid";

export const id = customAlphabet(
  "1234567890" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTEUVXYZ",
  6
);
