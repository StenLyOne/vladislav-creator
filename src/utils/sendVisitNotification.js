const sendVisitNotification = async () => {
  try {
    await fetch("https://senderbot-9qcp.onrender.com/visit", {
      method: "POST",
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export default sendVisitNotification;
