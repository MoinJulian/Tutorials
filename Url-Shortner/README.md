# Svt.Ink

This is a URL shortener made with SvelteKit and MongoDB.

https://svt.ink

## Schema

Redirection Schema in MongoDB:

- shortcut: `string`
- url: `string` (validated as URL)
- visits: `number` (will be incremented with each visit)
- createdAt: `timestamp`
- updatedAt: `timestamp` (gets updated with each visit)

Tutorials repositorie by ScriptRaccon, developed to dive into Data Bases and Back End developing
