// content.js

function injectHTML(sign) {
    var scars = document.getElementById("contain1");
    var bbg = document.getElementById("contain2");
    if (scars) {
        scars.parentNode.removeChild(scars);
    } else if (bbg) {
        bbg.parentNode.removeChild(bbg);
    }

    var newDiv = document.createElement("div");
    if (sign === "scarsclub") {
        newDiv.id = "contain1";
        newDiv.innerHTML = `
            <h2 class="neonbar">
                Redbar <br />
                Scarsclub
            </h2>
            <h3 class="neonbar2">GIVE IT A YEAR</h3>
        `;
    } else if (sign === "bbg") {
        newDiv.id = "contain2";
        newDiv.innerHTML = `
            <span class="icon-bbg-text"></span>
            <span class="icon-bbg-chula"></span>
        `;
    }
    document.body.appendChild(newDiv);
}

function changeSign(signValue) {
    chrome.storage.sync.set({ sign: signValue }, function() {
        injectHTML(signValue);
        updateButtonOpacity(signValue);
    });
}

function updateButtonOpacity(activeButtonId) {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        if (button.id === activeButtonId + 'Button') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.sync.get(['sign'], function(data) {
        injectHTML(data.sign);
        updateButtonOpacity(data.sign);
    });
});

// Event listeners for the buttons
document.getElementById("scarsclubButton").addEventListener("click", function() {
    changeSign('scarsclub');
});

document.getElementById("bbgButton").addEventListener("click", function() {
    changeSign('bbg');
});