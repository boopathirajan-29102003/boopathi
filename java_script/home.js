{
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var closeBtn = document.querySelector(".close");
  
    function openModal(src) {
      modal.style.display = "block";
      modalImage.src = src;
    }
  
    function closeModal() {
      modal.style.display = "none";
    }
  
    closeBtn.addEventListener("click", closeModal);
  }