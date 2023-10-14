let timeout;
let screensaverActive = false;

const container = document.getElementById("screensaver-container");
const canvas = document.getElementById("screensaver");
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
function startScreensaver() {
    if (!screensaverActive) {
        container.style.display = "block";
        screensaverActive = true;
        animate();
    }
}

function stopScreensaver() {
    if (screensaverActive) {
        container.style.display = "none";
        screensaverActive = false;
    }
}

function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(startScreensaver, 60000); // Show screensaver after 1 minute of inactivity
}

resetTimeout();

window.addEventListener("mousemove", resetTimeout);
window.addEventListener("keydown", resetTimeout);
window.addEventListener("touchstart", resetTimeout);
