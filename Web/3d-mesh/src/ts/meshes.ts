import type { mesh } from "./mesh"

export const cube: mesh = [
	[
		{ x: -1, y: -1, z: -1 },
		{ x: -1, y: 1, z: -1 },
		{ x: 1, y: 1, z: -1 },
		{ x: 1, y: -1, z: -1 },
	],
	[
		{ x: -1, y: -1, z: 1 },
		{ x: -1, y: 1, z: 1 },
		{ x: 1, y: 1, z: 1 },
		{ x: 1, y: -1, z: 1 },
	],
	[
		{ x: -1, y: -1, z: -1 },
		{ x: -1, y: -1, z: 1 },
	],
	[
		{ x: 1, y: -1, z: -1 },
		{ x: 1, y: -1, z: 1 },
	],
	[
		{ x: 1, y: 1, z: -1 },
		{ x: 1, y: 1, z: 1 },
	],
	[
		{ x: -1, y: 1, z: -1 },
		{ x: -1, y: 1, z: 1 },
	],
]

export const octahedron: mesh = [
	[
		{ x: 1, y: 0, z: 0 },
		{ x: 0, y: 0, z: 1 },
		{ x: 0, y: 1, z: 0 },
	],
	[
		{ x: 0, y: 0, z: 1 },
		{ x: -1, y: 0, z: 0 },
		{ x: 0, y: 1, z: 0 },
	],
	[
		{ x: -1, y: 0, z: 0 },
		{ x: 0, y: 0, z: -1 },
		{ x: 0, y: 1, z: 0 },
	],
	[
		{ x: 0, y: 0, z: -1 },
		{ x: 1, y: 0, z: 0 },
		{ x: 0, y: 1, z: 0 },
	],
	[
		{ x: 1, y: 0, z: 0 },
		{ x: 0, y: 0, z: 1 },
		{ x: 0, y: -1, z: 0 },
	],
	[
		{ x: 0, y: 0, z: 1 },
		{ x: -1, y: 0, z: 0 },
		{ x: 0, y: -1, z: 0 },
	],
	[
		{ x: -1, y: 0, z: 0 },
		{ x: 0, y: 0, z: -1 },
		{ x: 0, y: -1, z: 0 },
	],
	[
		{ x: 0, y: 0, z: -1 },
		{ x: 1, y: 0, z: 0 },
		{ x: 0, y: -1, z: 0 },
	],
]

export const meshes = [cube, octahedron]