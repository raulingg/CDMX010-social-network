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
        <img id="placeImg" src="img/palacio-bellas-artes-large.jpg" alt=""/>
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

    <div id="postContainer">
        <textarea id="name" class="name" placeholder="Usuario"></textarea>
        <textarea id="review" class="reviewText" placeholder="Escribe aquí tu reseña"></textarea>
        <input type="button" id="postIt" class="postIt" value="PUBLICAR">
    </div>
    
    <h2>RESEÑAS</h2>
    
    <div id="reviewsContainer"></div>

    </div>
`;
