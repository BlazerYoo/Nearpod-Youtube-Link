// ==UserScript==
// @name         Nearpod Youtube Link
// @namespace    https://github.com/BlazerYoo
// @version      0.1
// @description  Extract Youtube video from Nearpod
// @author       BlazerYoo
// @match        https://app.nearpod.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("load", () => {
        addButton("Link");
    });

  function addButton(text, onclick, cssObj) {
    cssObj = cssObj || {
      position: "fixed",
      top: "2%",
      right: "15%",
      "z-index": 1000000,
      fontSize: "20px",
      backgroundColor: "white",
      color: "green",
      border: "2px solid black",
      borderColor: "#4CAF50",
      borderRadius: "5px",
      padding: "7px 15px"
    };
    let button = document.createElement("button"),
      btnStyle = button.style;
    document.body.appendChild(button);
    button.innerHTML = text;
    button.onclick = getLink;
    Object.keys(cssObj).forEach(key => (btnStyle[key] = cssObj[key]));
    return button;
  }

  function getLink() {
    if (document.getElementById("videojs-react_youtube_api") == null) {
        alert("No Youtube video here");
    } else {
        if (window.confirm("Youtube video found at:\n\n" + document.getElementById("videojs-react_youtube_api").src + "\n\nClick OK to open video.")) {
            window.open(document.getElementById("videojs-react_youtube_api").src, '_blank');
        }
    }
  }
})();
