export const retroView = `
<div id="retroView" class="container">
    <div id="header">
        <input type="image" id="btnHome" class="btnHome" src="img/home.png" />
        <img id="logoHeader" src="img/logo_mochilazo.png" alt="MXCHILAZO" />
        <input type="image" id="btnMenu" class="btnMenu" src="img/menu.png" />
        <nav id="menuOption" class="enabled-menu">
        <ul>
            <li id="toTownHall"><a href="#"></a> Delegaciones</li>
            <!--X delegaciones  -->
            <li id="toTopTen"><a href="#"></a>10 más populares</li>
            <!--10 mas populares  -->
            <li id="toFavorite"><a href="#"></a>Favoritos</li>
            <!--favoritos  -->
            <li id="signOut"><a href="#"></a>Cerrar sesión</li>
            <!--cerrar sesion  -->
        </ul>
        </nav>
    </div>

    <div id="searchPlace">
        <input type="text" id="search" class="search" placeholder="Buscar" />
        <img id="searchIcon" src="img/bx-search.svg" alt="" />
    </div>

    <div id="placeViewSingle" class="placeViewSingle">
        <h3>Bellas Artes</h3>
        <h3>Cuautémoc</h3>
        <img id="" src="" alt="" />
        <img id="placeSinglePhoto" src="img/palacio-bellas-artes-large.jpg" alt=""/>
        <div id="info">
            <p>Juárez s/nCentro,Ciudad de México, 06050</p>
            <h4>ACERCA DE:</h4>
            <p>
            El Palacio es famoso no sólo por su arquitectura, sino por su acervo
            ya que alberga 17 murales de artistas nacionales que se elaboraron
            entre 1928 y 1963. Los murales que destacan El Hombre...
            </p>
        </div>
    </div>

    <div id="post">
        <input type="text" id="post" class="input" placeholder="Escribir reseña">
    </div>
        
    </div>
`;
