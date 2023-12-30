import { draw_polygon3d, type polygon3d } from "./polygons"

export type mesh = polygon3d[]

export function draw_mesh(mesh: mesh) {
	for (const polygon of mesh) {
		draw_polygon3d(polygon)
	}
}