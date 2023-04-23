export function renderInsects(insectsEl) {
    const div = document.createElement('div');
    div.classList.add('insect');

    const h1 = document.createElement('h1');
    h1.textContent = insectsEl.name;

    const img = document.createElement('img');
    img.src = insectsEl.image;

    const p = document.createElement('p');
    p.textContent = `This insect is ${insectsEl.native} and ${insectsEl.length}.`;

    const h3 = document.createElement('h3');
    h3.textContent = 'Commonly found in: ';

    const ul = document.createElement('ul');
    for (let found of insectsEl.found) {
        const li = document.createElement('li');
        li.textContent = found;
        ul.append(li);
    }

    div.append(h1, img, p, h3, ul);
    return div;
}