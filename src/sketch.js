let capture
let detector
let bocca
let naso
let occhiosx
let occhiodx
let occhiodxchiuso


const larghezzaNaso = 100
const larghezzaOcchiodx  = 50
const larghezzaOcchiosx = 50
const larghezzaOcchiodxchiuso = 100
//const distPolliceMignolo = dist(mignolo.x, mignolo.y, pollice.x, pollice.y);


async function preload(){

	bocca = loadImage("./bocca.png")
	naso = loadImage("./naso.png")
	occhiosx = loadImage("./occhio_sx.png")
	occhiodx = loadImage("./occhio_dx.png")
	occhiodxchiuso = loadImage("./occhio_dx_chiuso.png")
	
}

async function setup() {
	createCanvas(windowWidth, windowHeight)
	fullscreen(true)
	capture = createCapture(VIDEO)
	capture.size(640, 480)
	capture.hide()

	console.log("Carico modello...")
	detector = await createDetector()
	console.log("Modello caricato.")

}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}
async function draw() {	
	background(255)

	const larghezza = min(width, height)
	const altezza = larghezza / 3.5

	// Disegna la webcam sullo stage, a specchio
	push()
	scale(-1, 1)
	image(capture, -640, 0)
	pop()


	if (detector && capture.loadedmetadata) {
		
		const hands = await detector.estimateHands(capture.elt, { flipHorizontal: true })

		if (hands.length == 1) {
		
			const mano = hands[0]
	
			const pollice = mano.keypoints[4]
			const indice  = mano.keypoints[8]
			const medio  = mano.keypoints[10]
			const anulare  = mano.keypoints[16]
			const mignolo = mano.keypoints[20]

			//const naso1 = mano.keypoints[10]

			//image(bocca,mouseX,mouseY)
 			//const distPolliceMignolo = dist(mignolo.x, mignolo.y, pollice.x, pollice.y);
			//let larghezzaBocca = map(distPolliceMignolo, 0, capture.width, 0, bocca.width);

			const distPolliceMignoloX = abs(pollice.x - mignolo.x);
			const distPolliceMignoloY = abs(pollice.y - mignolo.y);
			const boccaWidth = distPolliceMignoloX * 2;
			const boccaHeight = distPolliceMignoloY * 2;
			image(bocca, mignolo.x - distPolliceMignoloX, mignolo.y - distPolliceMignoloY, boccaWidth, boccaHeight);
			const distAnulareIndice = dist(anulare.x, anulare.y, indice.x, indice.y);

			
			push()
			image(occhiosx, indice.x-20, indice.y-20)
			pop()

			//push()
			//scale(0.8,0.8)
			//image(occhiodx, anulare.x, anulare.y+20)
			//pop()
			
			push()
			image(naso, medio.x-20, medio.y)
			pop()
				
			//push()
			//scale(0.5,0.5)
			//image(bocca, mignolo.x, mignolo.y, pollice.x, pollice.y)
			//pop()
		
			push()
			if (distAnulareIndice > 100) {
				image(occhiodx, anulare.x-20, anulare.y-20);
			} else {
				image(occhiodxchiuso, anulare.x-20, anulare.y-20)
			}
			pop()
			console.log(distAnulareIndice)
		}	
	}
}
async function createDetector() {
	// Configurazione Media Pipe
	// https://google.github.io/mediapipe/solutions/hands
	const mediaPipeConfig = {
		runtime: "mediapipe",
		modelType: "full",
		maxHands: 1,
		solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands`,
	}
	return window.handPoseDetection.createDetector( window.handPoseDetection.SupportedModels.MediaPipeHands, mediaPipeConfig )
}