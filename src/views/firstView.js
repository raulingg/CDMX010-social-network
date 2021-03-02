export const firstView = `
<div id="xView" class="container">

  <div id="header" >
    <input type="image" id="btnHome" class="btnHome" src="img/home.png" />
    <img id="logoHeader" src="img/logo_mochilazo.png" alt="MXCHILAZO" />
    <input type="image" id="btnMenu" class="btnMenu" src="img/menu.png" />
    <nav id="menuOption" class="enabled-menu">
      <ul>
        <li id="toTownHall"><a href="#"></a>  Delegaciones</li> <!--X delegaciones  -->
        <li id="toTopTen"><a href="#"></a>10 más populares</li> <!--10 mas populares  -->
        <li id="toFavorite"><a href="#"></a>Favoritos</li> <!--favoritos  -->
        <li id="signOut"><a href="#"></a>Cerrar sesión</li> <!--cerrar sesion  -->
      </ul>
    </nav>
  </div>

  <div id="searchPlace">
    <input type="text" id="search" class="search" placeholder="Buscar" />
    <img id="searchIcon" src="img/bx-search.svg" alt="" />
  </div>

  <div id="sectionView">
    <h2>Quizá te interese:</h2>
  </div>

  <div id="placeView" class="placeView">
    <img id="placePhoto" src="img/palacio-bellas-artes-large.jpg" alt="" />
    <div id="rectangle" ></div>
    <h3>Bellas Artes</h3>
    <h3>Cuautémoc</h3>
    <img id="likeIcon" src="img/like.png" alt="">
  </div>

</div>
`;