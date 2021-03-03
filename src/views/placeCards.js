import data from '../data/mxchilazo.js';

export const places = data.place;

export const placeCard = (place) => {
  const component = `
    <div id="one-container">
      <h2 id="namePlace">${place.name}</h2>
      <h3 id="delegation">${place.delegation}</h3>
      <img id="placeImg" src="${place.img}"class="img-container">
      <img id="likeIcon" src="img/like.png" alt="">
    </div>
    `;
    return component;
};
