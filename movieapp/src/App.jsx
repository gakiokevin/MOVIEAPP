import "./App.css";
import { useState, useEffect } from "react";
import CardImage from "./card";
import Footer from "./Footer";
function App() {
  //const name = useParams();
  const [images, setImages] = useState([]);
  const [backImage, setBackgroud] = useState({});
  //const [word,setWord] = useState('')
  const API_KEY = "0de0784cab2152d2433a449bf40d639f";

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
        { mode: "cors" }
      )
        .then((response) => response.json())
        .then((data) => {
          const results = data.results;
          let filteredImages = results.filter((item, index) => {
            return index <= 11;
          });
          let bk = results[2];
          setBackgroud(bk);

          setImages(filteredImages);
        })
        .catch((err) => console.log(err));
    }, 3000);
  }, []);
  return (
    <div className="App">

      <header
        className="header"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${backImage.poster_path}')`,
        }}
      >
        <div className="wrapper">
          <div className="logo">
            <span className="logoImage"></span>
            <h3 className="logoTitle">Tuwatch</h3>
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="What do you want to watch?"
            className="searchbtn"
          />

          <h3 className="signIn">Sign in</h3>
        </div>
        <div className="movieInfo">
          <h3 className="Title">{backImage.title}</h3>
          <p className="description">{backImage.overview}</p>
          <button> Watch Trailer</button>
        </div>
      </header>
      {images.length > 0 ? <CardImage images={images} /> : <p>loading</p>}
      <Footer />
    </div>
  );
}

export default App;
