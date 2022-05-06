export function renderPlants(plantEl) {
    const div = document.createElement('div');
    div.classList.add('plant');

    const h1 = document.createElement('h1');
    h1.textContent = plantEl.name;

    const img = document.createElement('img');
    img.src = plantEl.image;

    div.append(h1, img);
    return div;
}
