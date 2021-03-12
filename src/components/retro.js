export const retroView = `
<div id="retroView" class="container">
    
    <div id="header">
    <nav id="menu">
        <div class="barra">
            <input type="checkbox"/>
                <label><i aria-hidden="true" class="fa fa-bars"></i></label>
                <ul class='principal'>
                    <li><a href="/">Inicio</a></li>
                        <li><a href="#">Alcaldías<i class="fa fa-chevron-down"></i></a>
                        <input type="checkbox"/>
                        <label><i aria-hidden="true" class="fa fa-cheron-down"></i></label>
                        <ul class="principal">
                            <ul class="menus">
                            <li><a href="#">Alvaro Obregón</a></li>
                            <li><a href="#">Azcapotzalco</a></li>
                            <li><a href="#">Coyoacan</a></li>
                            <li><a href="#">Gustavo A. Madero</a></li>
                            <li><a href="#">Iztacalco</a></li>
                            <li><a href="#">Iztapalapa</a></li>
                            <li><a href="#">Magdalena Contreras</a></li>
                            <li><a href="#">Tlahuac</a></li>
                            <li><a href="#">Tlalpan</a></li>
                            <li><a href="#">Xochimilco</a></li>
                            </ul>
                        </ul>
                        </li>
                    <li><a href="#">Los 10 más populares</a></li>
                    <li><a href="#">Favoritos</a></li>
                    <li><a href="#">Cerrar Sesión</a></li>
                </ul>

            <div class="iconos">
                <a href="#"><i aria-hidden="true" class="fa fa-home"></i></a>
            </div>

        </div>
    </nav> 
    </div>

    <div id="placeViewSingle" class="placeViewSingle">
        <h3>Bellas Artes</h3>
        <h3>Cuautémoc</h3>
        <img id="" src="" alt="" />
        <img id="placeImg" src="https://thehappening.com/wp-content/uploads/2018/06/palacio-de-bellas-artes.jpg" alt=""/>
        <div id="info">
            <p id="pPlace">Juárez s/nCentro,Ciudad de México, 06050</p>
            <h4>ACERCA DE:</h4>
            <p id="pPlace">
            El Palacio es famoso no sólo por su arquitectura, sino por su acervo
            ya que alberga 17 murales de artistas nacionales que se elaboraron
            entre 1928 y 1963. Los murales que destacan El Hombre...
            </p>
        </div>
    </div>

    <div id="postContainer">
        <textarea id="name" class="name clear inpStyle" placeholder="Usuario"></textarea>
        <textarea id="review" class="reviewText clear inpStyle" placeholder="Escribe aquí tu reseña"></textarea>
        <input type="button" id="postIt" class="postIt" value="PUBLICAR">
        <input type="button" id="editPostIt" class="editPostIt postIt" style = "display: none" value="EDITAR">
    </div>
    
    <h2>RESEÑAS</h2>
    
    <div id="reviewsContainer"></div>

    </div>
`;

// subir info a firestore
export const newReview = async (buildReview, limpiar, reLimpiar) => {
  const name = document.querySelector('#name').value;
  const post = document.querySelector('#review').value;
  console.log(name, post);
  // comenzar firebase registra posteos en fs
  await buildReview(name, post, limpiar, reLimpiar);
  //   });
};

/* 1.- sirvió se obtuvo la data
export const seeReviews = async (getReview) => {
  const reviewsContainer = document.querySelector('#reviewsContainer');
  const querySnapshot = await getReview();
  querySnapshot.forEach((doc) => {
    console.log(doc.data());

    const revs = doc.data();

    reviewsContainer.innerHTML += `
               <div id="reviewCard" class="reviewCard">
                 <p>Usuario: ${revs.name}<br>Reseña: ${revs.post}</p>
                 <input type="button" id="btnComment" class="btnComment" value="COMENTAR">
                 <button type="submit"  id="btnEdit"><img src="img/edit.png" alt="Edit" id="editIcon"></button>
                 <button type="submit"  id="btnDelete"><img src="img/delete.png" alt="Delete" id="deleteIcon"></button>
               </div>
              `;
  });
}; */

// quitar los comentarios repetidos funciona!!
export const seeReviews = async (onGetReviews) => {
  const reviewsContainer = document.querySelector('#reviewsContainer');
  // cada vez que se ejecute el get dara un dato cada vez que cambie
  await onGetReviews((querySnapshot) => { // se recibe a travez del objeto query, todos los datos
    // antes de que hagas el foreach
    reviewsContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());

      const revs = doc.data();
      revs.id = doc.id;// solo id de la review
      console.log(revs);// info de las reviews name, post y id
      reviewsContainer.innerHTML += `
                <div id="reviewCard" class="reviewCard">
                    <p>Usuario: ${revs.name}<br>Reseña: ${revs.post}</p>
                    <input type="image" id="likeIcon" class="likeIcon" data-id="${revs.id}" src="img/like.png">
                    <button data-id="${revs.id}" id="btnEdit" type="submit" class="btnEdit btnStyle">Editar</button>
                    <button id="btnDelete" class="btnDelete btnStyle" data-id="${revs.id}">Borrar</button>
                </div>
                `;
    });
  });
};

export const quitReview = (deleteReview, reviewId) => {
  deleteReview(reviewId).then(() => {
    console.log(`reseña ${reviewId} borrada`);
  });
};

export const modifyReview = (getReview, reviewId) => {
  console.log(getReview + reviewId);
  document.querySelector('#postIt').style.display = 'none';
  document.querySelector('#editPostIt').style.display = 'block';
  getReview(reviewId).then((rev) => {
    const textReview = rev.data();
    console.log(textReview);
    document.querySelector('#name').value = textReview.name;
    document.querySelector('#review').value = textReview.post;
  });
};

export const updateReview = (editReview, reviewId, limpiar, reLimpiar) => {
  console.log(editReview + reviewId);
  document.querySelector('#postIt').style.display = 'block';
  document.querySelector('#editPostIt').style.display = 'none';
  editReview(reviewId, {
    name: document.querySelector('#name').value,
    post: document.querySelector('#review').value,
  }).then(() => {
    limpiar();
    reLimpiar();
  });
};

export const likesReview = () => {
  console.log(localStorage.getItem('idUser'));// llevar a los likes
};