import mongoose from "mongoose";

const url_regexp =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const schema = new mongoose.Schema(
  {
    shortcut: {
      type: String,
      required: [true, "Shortcut is required"],
      unique: true,
    },
    url: {
      type: String,
      required: [true, "URL is required"],
      validate: {
        validator: (url: string) => url.match(url_regexp),
        message: () => "You have to provide a valid URL",
      },
    },
    visits: {
      type: Number,
      required: [true, "Number of visits is required"],
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Redirection = mongoose.model("redirection", schema);
