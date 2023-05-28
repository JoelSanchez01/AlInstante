import React from "react";
import './SideNews.css';

function SideNews(){
    return(
        <div>
            <div className="side-news">
                <div className="lista">
                <div className="elemento">
                    <div className="numero">
                        <h3>01</h3>
                    </div>
                    <div className="contenido">
                        <h4 className="titulo"><a target="_blank" href="#">Titulo de noticia</a></h4>
                        <p className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam tempora doloribus exercitationem sed natus ducimus magnam necessitatibus adipisci, similique modi temporibus cupiditate eius ex maxime! Hic doloremque quis aliquid.</p>
                        <p className="fecha">Fecha de publicación</p>
                    </div>
                </div>
                </div>
            </div>           
        </div>
    )
}
export default SideNews;