export function renderPlants(plantEl) {
    const div = document.createElement('div');
    div.classList.add('plant');

    const img = document.createElement('img');
    img.src = plantEl.image;

    div.append(img);
    return div;
}
