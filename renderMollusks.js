export function renderMollusks(mollusksEl) {
    const div = document.createElement('div');
    div.classList.add('mollusk');

    const h1 = document.createElement('h1');
    h1.textContent = mollusksEl.name;

    const img = document.createElement('img');
    img.src = mollusksEl.image;

    const p = document.createElement('p');
    p.textContent = `This mollusk is ${mollusksEl.native} and ${mollusksEl.length}.`;

    const h3 = document.createElement('h3');
    h3.textContent = 'Commonly found in: ';

    const ul = document.createElement('ul');
    for (let found of mollusksEl.found) {
        const li = document.createElement('li');
        li.textContent = found;
        ul.append(li);
    }

    div.append(h1, img, p, h3, ul);
    return div;
}