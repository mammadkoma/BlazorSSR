export function onLoad() {
    jalaliDatepicker.startWatch();
}

export function onUpdate() {
    let inputs = document.getElementsByClassName('dp');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', (event) => {
            inputs[i].setAttribute('maxLength', '10');
            if (event.data && isNaN(event.data) && event.data != '/')
                inputs[i].value = inputs[i].value.slice(0, -1);
        });
    }
}

export function onDispose() { }