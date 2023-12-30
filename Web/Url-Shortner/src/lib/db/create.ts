import { connect_to_db } from "./connect";
import { id } from "./id";
import { Redirection } from "./model";

export async function create_shortcut(
  url: string
): Promise<{ errors: string[] } | { shortcut: string }> {
  const connection = await connect_to_db();
  if (!connection) {
    return {
      errors: ["No database connection"],
    };
  }
  const shortcut = id();
  const visits = 0;
  const redirection = new Redirection({ shortcut, url, visits });

  const error = redirection.validateSync();
  if (error) {
    const errors = Object.values(error.errors).map((e) => e.message);
    return {
      errors,
    };
  }
  try {
    await redirection.save();
    return { shortcut };
  } catch (e) {
    console.log(e);
    return { errors: ["Internal server error"] };
  }
}
