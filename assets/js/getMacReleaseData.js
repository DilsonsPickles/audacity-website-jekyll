const releaseDataElement = document.querySelector(".assets");

async function getReleaseData() {
  let response = await fetch(
    "https://api.github.com/repos/audacity/audacity/releases/latest"
  );
  let json = await response.json();

  json.assets.forEach((asset) => {
    if (asset.name.includes("audacity-macOS")) {
      const listItemElement = document.createElement("li");
      listItemElement.classList.add("list-group-item");

      const cardItemElement = document.createElement("div");
      cardItemElement.classList.add("card");
      listItemElement.appendChild(cardItemElement);

      const cardBodyElement = document.createElement("div");
      cardBodyElement.classList.add("card-body");
      cardItemElement.appendChild(cardBodyElement);

      const cardTitleElement = document.createElement("h5");
      cardTitleElement.classList.add("card-title");
      cardTitleElement.innerHTML = asset.name;
      cardBodyElement.appendChild(cardTitleElement);

      const cardSubtitleElement = document.createElement("h6");
      cardSubtitleElement.classList.add("card-subtitle", "mb-2", "text-muted");
      cardSubtitleElement.innerHTML = "Downloads: " + asset.download_count;
      cardBodyElement.appendChild(cardSubtitleElement);

      const cardLinkElement = document.createElement("a");
      cardLinkElement.classList.add("card-link");
      cardLinkElement.href = asset.browser_download_url;
      cardLinkElement.innerHTML = "Download now";
      cardBodyElement.appendChild(cardLinkElement);

      releaseDataElement.appendChild(listItemElement);
    }
  });
}

getReleaseData();
