import data from '../data/mxchilazo.js';

export const places = data.place;

export const placeCard = (place) => {
  const component = `
    <div id="one-container">
      <img id="placeImg" src="${place.img}"class="img-container">
      <div id="rectangle">
        <h3 id="namePlace">${place.name}</h3>
        <h4 id="delegation">${place.delegation}</h4>
        <img id="likeIcon" src="img/like.png" alt="">
      </div>
    </div>
    `;
    return component;
};
