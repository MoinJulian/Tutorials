export const canvas = document.querySelector("canvas")!
export const ctx = canvas.getContext("2d")!

export function clear_canvas() {
	ctx.save()
	ctx.setTransform(1, 0, 0, 1, 0, 0)
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.restore()
}

function adjust_canvas() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
	ctx.strokeStyle = "#fff"
	ctx.translate(canvas.width / 2, canvas.height / 2)
}

export function make_canvas_fullscreen() {
	adjust_canvas()
	window.addEventListener("resize", adjust_canvas)
}