const sendVisitNotification = async () => {
  try {
    await fetch("/api/visit", {
      method: "POST",
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

export default sendVisitNotification;
