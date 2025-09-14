
        document.addEventListener('DOMContentLoaded', () => {
            const previewButtons = document.querySelectorAll('.preview-btn');
            const modalOverlay = document.getElementById('modal-overlay');
            const modalImage = document.getElementById('modal-image');
            const closeModalBtn = document.getElementById('modal-close');

            previewButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault(); 
                    const imgSrc = button.getAttribute('data-img-src');
                    modalImage.src = imgSrc;
                    modalOverlay.classList.add('active');
                });
            });

            const closeModal = () => {
                modalOverlay.classList.remove('active');
            };

            closeModalBtn.addEventListener('click', closeModal);
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
        });
    