export function renderPlants(plantEl) {
    const div = document.createElement('div');
    div.classList.add('plant');

    const h1 = document.createElement('h1');
    h1.textContent = plantEl.name;

    const img = document.createElement('img');
    img.src = plantEl.image;

    const p = document.createElement('p');
    p.textContent = `${plantEl.phylum}, ${plantEl.class}, ${plantEl.order}, ${plantEl.family}, ${plantEl.genus}`;

    const h3 = document.createElement('h3');
    h3.textContent = 'Commonly found in: ';

    const ul = document.createElement('ul');
    for (let found of plantEl.found) {
        const li = document.createElement('li');
        li.textContent = found;
        ul.append(li);
    }

    div.append(h1, img, p, h3, ul);
    return div;
}
