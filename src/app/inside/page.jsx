import React from "react";
import './NewsViewCard.css'
import Image from "next/image";

function InsidePage() {
  return (
    <div className="news-view-frame">
      <article className='news-view-card'>
            <div className='news-view-card-info'>
                <span className='news-view-card-title'>Titulo noticia - Sección</span>
            </div>
            <aside>
                <Image className="news-view-card-edit" src="/edit_icon.png" width={30} height={30}/>
                <Image className="news-view-card-delete" src="/delete_icon.png" width={30} height={30}/>
            </aside>
    </article>
    </div> 
  );
}

export default InsidePage;
