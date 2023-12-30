import {
    rotate_along_x,
    rotate_along_y,
    type point2d,
    type point3d,
} from "./points"

interface camera_interface {
	distance: number
	rotation: point2d
	zoom: number
	project: (_: point3d) => point2d
}

export const camera: camera_interface = {
	distance: 5,
	rotation: { x: 0, y: 0 },
	zoom: 1000,
	project(point: point3d): point2d {
		const p = rotate_along_x(point, camera.rotation.x)
		const q = rotate_along_y(p, camera.rotation.y)
		return {
			x: (camera.zoom / (q.z + camera.distance)) * q.x,
			y: (camera.zoom / (q.z + camera.distance)) * q.y,
		}
	},
}