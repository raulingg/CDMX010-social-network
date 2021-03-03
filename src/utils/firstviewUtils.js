export const setCards = (places, placeCard) => {
  let html = '';
  places.forEach(place => {
    html += placeCard(place);
  });
  return html;
};
