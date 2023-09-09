import { fail } from "@sveltejs/kit";
import { create_shortcut } from "$lib/db/create.js";

export const actions = {
  default: async (event) => {
    const form_data = await event.request.formData();
    const url = form_data.get("url") as string;
    const redirection = await create_shortcut(url);

    await new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });

    if ("erros" in redirection) {
      return fail(400, { ...redirection, url });
    }
    return { ...redirection, url };
  },
};
