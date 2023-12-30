import { camera } from "./camera"
import { ctx } from "./canvas"
import type { point2d, point3d } from "./points"

export type polygon2d = point2d[]
export type polygon3d = point3d[]

export function draw_polygon2d(polygon: polygon2d) {
	const n = polygon.length
	if (n <= 1) return
	ctx.beginPath()
	const first = polygon[0]
	ctx.moveTo(first.x, first.y)
	for (let i = 1; i < n; i++) {
		const point = polygon[i]
		ctx.lineTo(point.x, point.y)
	}
	ctx.lineTo(first.x, first.y)
	ctx.stroke()
	ctx.closePath()
}

export function draw_polygon3d(polygon: polygon3d) {
	const projected: polygon2d = polygon.map(camera.project)
	draw_polygon2d(projected)
}