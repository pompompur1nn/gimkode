//░▒▓███████▓▒░  ░▒▓██████▓▒░ ░▒▓██████████████▓▒░  ░▒▓███████▓▒░       ░▒▓██████▓▒░ ░▒▓███████▓▒░ ░▒▓███████▓▒░  ░▒▓██████▓▒░ ░▒▓███████▓▒░  ░▒▓███████▓▒░ 
//░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░        
//░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░             ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░        
//░▒▓███████▓▒░ ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ░▒▓██████▓▒░       ░▒▓████████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ░▒▓██████▓▒░  
//░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░ 
//░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░ 
//░▒▓█▓▒░        ░▒▓██████▓▒░ ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓███████▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓███████▓▒░ ░▒▓███████▓▒░  ░▒▓██████▓▒░ ░▒▓█▓▒░░▒▓█▓▒░░▒▓███████▓▒░  
function getRandomCode() {
  const randomCode = Math.floor(Math.random() * 999999) + 1;
  return randomCode.toString().padStart(6, "0");
}
// who  made this API LMAOOOO no fucking ratelimits is crazy bruh
// mfs really made a cloudflare exception 😭💀
function displaycode() {
  const code = getRandomCode();
  const url = "https://www.gimkit.com/api/matchmaker/find-info-from-code";
  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0",
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.5",
    "Content-Type": "application/json",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin"
  };
  const payload = {
    code: code
  };

  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
    credentials: "include",
    referrer: "https://www.gimkit.com/join",
    mode: "cors"
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then(data => {
      const { roomId, useRandomNamePicker } = data;
      const alertMessage = `Game Code: ${code}\nRandom Name Picker Enabled: ${useRandomNamePicker} (If you need another, make sure to click the bookmarklet again or reexecute the code. It will take a second to get a new one as the crawler only goes so fast.)`;
      alert(alertMessage);
    })
    .catch(error => {
      console.log("An error occurred:", error.message);
      displaycode(); // Retry fetching data
    });
}

displaycode();
