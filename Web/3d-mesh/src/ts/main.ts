import { camera } from "./camera"
import { clear_canvas, make_canvas_fullscreen } from "./canvas"
import { draw_mesh } from "./mesh"
import { meshes } from "./meshes"

make_canvas_fullscreen()

function loop() {
	clear_canvas()
	camera.rotation.x += 0.005
	camera.rotation.y += 0.007
	for (const mesh of meshes) {
		draw_mesh(mesh)
	}

	requestAnimationFrame(loop)
}

loop()