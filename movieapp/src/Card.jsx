import { useState } from "react";
const CardImage = ({ images }) => {
  const [clicked, setClicked] = useState(images.map(() => false));
  function favouriteMovie(index) {
    const newClick = [...clicked];
    newClick[index] = !newClick[index];
    setClicked(newClick);
  }
  return (
    <div className="ImageContainer" data-test-id="movie-card">
      {images.map((img, index) => (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original//${img.poster_path}`,
          }}
          key={img.id}
          onClick={() => favouriteMovie(index)}
          data-testid="movie-poster"
        >
          <img
            src={"dist/favourite.png"}
            alt={"favourite"}
            className={clicked[index] ? "clicked" : " "}
          />
          <p data-testid="movie-releasedate">
            Release Date: {img.release_date || img.first_air_date}
          </p>
          <h3 data-tesid="movie-title">
            Title: {img.title || img.name || img.original_title}
          </h3>
        </div>
      ))}
    </div>
  );
};
export default CardImage;
