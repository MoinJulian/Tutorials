/**
 * showcase the idea of the 3d drawing
 */

import { canvas, ctx } from "./canvas"

canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.translate(canvas.width / 2, canvas.height / 2)
ctx.fillStyle = "#fff"

const camera_distance = 1
const camera_zoom = 100

function draw_point(x: number, y: number, z: number) {
	const u = (camera_zoom * x) / (camera_distance + z)
	const v = (camera_zoom * y) / (camera_distance + z)
	ctx.beginPath()
	ctx.arc(u, v, 10, 0, 2 * Math.PI)
	ctx.fill()
	ctx.closePath()
}

export function idea() {
	// draw front
	draw_point(-1, -1, 0)
	draw_point(1, -1, 0)
	draw_point(-1, 1, 0)
	draw_point(1, 1, 0)
	// draw back
	draw_point(-1, -1, 1)
	draw_point(1, -1, 1)
	draw_point(-1, 1, 1)
	draw_point(1, 1, 1)
}