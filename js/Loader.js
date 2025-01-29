
// custom - loader
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
  
    // Check if logo image loads correctly
    logo.onload = () => {
      console.log("Logo loaded successfully.");
    };
  
    logo.onerror = () => {
      console.error("Failed to load logo. Please check the URL.");
    };
  
    // Simulate loading completion after 3 seconds (optional)
    setTimeout(() => {
      document.getElementById("loading-wrapper").style.display = "none";
    }, 2000);
  });
  