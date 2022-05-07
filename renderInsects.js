export function renderInsects(insectsEl) {
    const div = document.createElement('div');
    div.classList.add('insect');

const h1 = document.createElement('h1');
h1.textContent = insectsEl.name;



    div.append(h1, );
    return div;
}