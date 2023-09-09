import { connect_to_db } from "./connect";
import { Redirection } from "./model";

const cache: Record<string, string> = {};

export async function get_url(shortcut: string) {
  if (shortcut in cache) {
    return cache[shortcut];
  }

  const connection = connect_to_db();
  if (!connection) return;

  const doc = await Redirection.findOne({ shortcut });
  if (!doc) return;

  cache[shortcut] = doc.url;

  const increment_visists = async () => {
    doc.visits++;
    await doc.save();
  };

  increment_visists();

  return doc.url;
}
