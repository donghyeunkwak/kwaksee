(async () => {
  try {
    const res = await fetch('https://ipinfo.io/json?token=8a059ab5478047');
    const data = await res.json();

    const log = {
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country,
      org: data.org,
      time: new Date().toLocaleString()
    };

    console.log("📌 ScamTrap 방문 기록:", log);

    // 너가 준 Google Sheet Webhook URL
    await fetch("https://script.google.com/macros/s/AKfycbxzMGH1nodRXkPhWCEZyEQk8mr-U5S1NaEJNOXSSXIocADVSkwLkxmwa3dJO0UedFARdg/exec", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });

  } catch (e) {
    console.error("😟 위치 추적 실패:", e);
  }
})();
