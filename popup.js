let redirectButton = document.getElementById('redirectBtn');
let loadButton = document.getElementById('loadBtn');

loadButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: "for (const e of document.getElementsByClassName('fl-coupon-load fl-fcs-add js-add-to-card confirmation-override')){e.click();}" });
  });
};