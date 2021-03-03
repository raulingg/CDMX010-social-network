export const firstView = `
<div id="xView" class="container">

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

  <div id="searchPlace">
  <input type="text" id="search" class="search" placeholder="Buscar" />
  <img id="searchIcon" src="img/bx-search.svg" alt="" />
  </div>

  <div id="sectionView">
    <h2>Quizá te interese:</h2>
  </div>
  <div id="dataContainer">
    <div id="placesContainer" class="placesContainer"></div>
  </div>

</div>
`;
