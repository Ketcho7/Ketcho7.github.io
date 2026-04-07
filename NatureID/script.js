const video = document.getElementById('webcam');

async function startCamera() {
    try {
        // Request video only (audio: false)
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
        
        // Set the source of the video element to the stream
        video.srcObject = stream;
    } catch (error) {
        console.error("Error accessing the camera: ", error);
        alert("Could not access camera. Please ensure you have given permission.");
    }
}

// Initialize the camera when the page loads
startCamera();
