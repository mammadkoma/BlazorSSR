export function onUpdate() {
    let submitBtn = document.getElementById('submitBtn');
    let submitText = document.getElementById('submitText');
    let loadingText = document.getElementById('loadingText');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            setTimeout(() => {
                submitBtn.setAttribute('disabled', true);
                submitText.classList.add('d-none');
                loadingText.classList.remove('d-none');
            }, 1);
        });
    }
}