export type point3d = {
	x: number
	y: number
	z: number
}

export type point2d = {
	x: number
	y: number
}

export function rotate_along_y(p: point3d, angle: number): point3d {
	return {
		x: p.x * Math.cos(angle) - p.z * Math.sin(angle),
		y: p.y,
		z: p.x * Math.sin(angle) + p.z * Math.cos(angle),
	}
}

export function rotate_along_x(p: point3d, angle: number): point3d {
	return {
		x: p.x,
		y: p.y * Math.cos(angle) - p.z * Math.sin(angle),
		z: p.y * Math.sin(angle) + p.z * Math.cos(angle),
	}
}