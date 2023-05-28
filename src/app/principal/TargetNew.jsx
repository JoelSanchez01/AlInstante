import React from "react";
import './TargetNew.css';

function TargetNew() {
    return (
        <div className="tabla">
            <div className="fila">
                <div className="articles1">
                    <article className="one">
                        <img src="https://live.staticflickr.com/3141/2725656308_8921402be8_c.jpg"
                            alt=""/>
                        <h2><a target="_blank" href="#">Titulo</a></h2>
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum alias eius inventore veritatis praesentium vero repellendus natus quibusdam tenetur, placeat aut neque totam vitae fuga cupiditate, quam ratione eos modi! </p>
                        <p className="autor">Autor</p>
                        <p className="fecha">Fecha</p>
                    </article>
                </div>
            </div>
        </div>
    )
}
export default TargetNew;