document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       TABS (SNÍDANĚ / OBĚDY / VEČEŘE)
    ========================= */
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".food-content");

    buttons.forEach(function(button) {
        button.addEventListener("click", function () {

            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            this.classList.add("active");

            const target = this.getAttribute("data-tab");
            const activeContent = document.getElementById(target);

            if (activeContent) {
                activeContent.classList.add("active");
            }
        });
    });


    /* =========================
       KOMUNITA FORMULÁŘ
    ========================= */

    const form = document.querySelector("#community-form");
    const submitBtn = document.querySelector("#community-submit");

    const nameInput = document.querySelector("#name");
    const surnameInput = document.querySelector("#surname");
    const emailInput = document.querySelector("#email");

    // vytvoření popupu (modalu)
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.innerHTML = `
        <div class="popup-content">
            <span class="popup-close">&times;</span>
            <p>Děkujeme za registraci!<br> Bližší informace vám byly poslány do mailu.</p>
        </div>
    `;
    document.body.appendChild(popup);

    // zavření popupu
    popup.addEventListener("click", function(e) {
        if (e.target.classList.contains("popup-close") || e.target === popup) {
            popup.classList.remove("show");
        }
    });

    // VALIDACE EMAILU
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // SUBMIT
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = nameInput.value.trim();
            const surname = surnameInput.value.trim();
            const email = emailInput.value.trim();

            // kontrola
            if (name === "" || surname === "" || !isValidEmail(email)) {
                alert("Prosím vyplň všechna pole správně!");
                return;
            }

            // změna tlačítka na zelené
            submitBtn.style.background = "#4CAF50";
            submitBtn.style.color = "white";
            submitBtn.textContent = "Registrováno ✔️";

            // zobraz popup
            popup.classList.add("show");

            // vymazání formuláře
            form.reset();

            // vrácení tlačítka zpět po chvíli
            setTimeout(() => {
                submitBtn.style.background = "";
                submitBtn.style.color = "";
                submitBtn.textContent = "Zúčastnit se";
            }, 3000);
        });
    }

    /* =========================
       IMAGE MODAL
    ========================= */

    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementById("closeBtn");

    const images = document.querySelectorAll(".clickable-img");

    if (modal && modalImg && closeBtn && images.length > 0) {

        images.forEach(img => {
            img.addEventListener("click", function() {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        modal.onclick = function(e) {
            if (e.target !== modalImg) {
                modal.style.display = "none";
            }
        }
    }

    const video = document.getElementById("customVideo");
    const playBtn = document.getElementById("playBtn");
    const progress = document.getElementById("progress");
    const progressBar = document.querySelector(".progress-bar");

    // PLAY / PAUSE
    playBtn.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playBtn.style.display = "none";
        } else {
            video.pause();
            playBtn.style.display = "flex";
        }
    });

    // CLICK ON VIDEO = PAUSE
    video.addEventListener("click", () => {
        video.pause();
        playBtn.style.display = "flex";
    });

    // UPDATE PROGRESS
    video.addEventListener("timeupdate", () => {
        const percent = (video.currentTime / video.duration) * 100;
        progress.style.width = percent + "%";
    });

    // SEEK (kliknutí na bar)
    progressBar.addEventListener("click", (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = video.duration;

        video.currentTime = (clickX / width) * duration;
    });
    
});

