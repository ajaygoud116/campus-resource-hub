// Use environment variable or default URL
const WS_URL = process.env.REACT_APP_WS_URL || "ws://localhost:5000/ws";

// Initialize WebSocket
export const socket = new WebSocket(WS_URL);

// Handle connection open
socket.onopen = () => {
  console.log("WebSocket connected to", WS_URL);
};

// Handle messages from server
socket.onmessage = (event) => {
  console.log("Message from server:", event.data);
};

// Handle connection close
socket.onclose = () => {
  console.log("WebSocket disconnected");
};

// Handle errors
socket.onerror = (error) => {
  console.error("WebSocket error:", error);
};
