const video = document.getElementById('webcam');
let currentStream; 

async function startCamera() {
    // 1. If a stream is already running, stop all its tracks first
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
    }

    try {
        // 2. Request the back camera
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "environment" }, 
            audio: false 
        });
        
        // 3. Save the stream to our variable and play it
        currentStream = stream;
        video.srcObject = stream;
        
    } catch (error) {
        console.error("Error accessing the camera: ", error);
        alert("Could not access camera.");
    }
}

// Initialize the camera when the page loads
startCamera();
