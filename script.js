const mainImage = document.getElementById("mainImage");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

function changeImage(img) {
  mainImage.src = img.src;
}

mainImage.addEventListener("click", () => {
  modal.style.display = "block";
  modalImage.src = mainImage.src;
});

function closeModal() {
  modal.style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".open-modal");
  const modal = document.getElementById("productModal");
  const closeBtn = document.querySelector(".close");

  if (!openBtn || !modal || !closeBtn) return;

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
