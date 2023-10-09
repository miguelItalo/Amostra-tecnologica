const buttonOpen = document.querySelectorAll('.btn-empresa')
const modal = document.querySelector("dialog")

function openModal() {
      buttonOpen.onclick = modal.showModal()
}

buttonOpen.forEach(function (button) {
    button.addEventListener("click", function () {
        var modal = this.getAttribute("data-modal");
        openModal(modal);
    });
});