// exportar de firebase para el parametro doc

export const reviewCard = (doc) => {
  const component = `
      <div id="card" class="card">
        <h3>${doc.data().name}</h3>
      </div>
      `;
  return component;
};

// <img id="placeImg" src="${place.img}"class="img-container">
//   <div id="rectangle">
//     <h3 id="namePlace">${place.name}</h3>
//     <h4 id="delegation">${place.delegation}</h4>
//     <img id="likeIcon" src="img/like.png" alt="">
//   </div>
