const shareButton = document.getElementById("shareButton");
const toast = document.getElementById("toast");
document.getElementById("year").textContent = new Date().getFullYear();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

shareButton.addEventListener("click", async () => {
  const data = { title: "Amai Ponce", text: "Mis enlaces oficiales", url: window.location.href };
  try {
    if (navigator.share) {
      await navigator.share(data);
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    showToast("Enlace copiado");
  } catch (error) {
    if (error?.name !== "AbortError") showToast("No se pudo compartir");
  }
});
