export function onLoad() {
    jalaliDatepicker.startWatch();

    console.log('MainLayout.razor.js loaded');

    let inputs = document.getElementsByClassName('dp');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', (event) => {
            inputs[i].setAttribute('maxLength', '10');
            //if (isNaN(event.data) && event.data != '/')
            //    inputs[i].value = inputs[i].value.slice(0, -1);
        });
    }
}

export function onUpdate() { }

export function onDispose() { }