const CardImage = ({images})=>{
   
   return (
      <div className="ImageContainer">
      {
         images.map((img)=>(
            <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original//${img.poster_path}`}}  key={img.id}>
               <img src={'./images/favourite.png'} alt={'favourite'}/>
               <p>Release Date: {img.release_date || img.first_air_date}</p>
               <h3>Title: {img.title || img.name || img.original_title}</h3>

            </div>

         ))
      }
      </div>
   )
}
export default CardImage
