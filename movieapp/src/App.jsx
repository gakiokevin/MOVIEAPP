import "./App.css";
import "./Responsive.css";
import { useState, useEffect } from "react";
import CardImage from "./card";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
function App() {
  const [images, setImages] = useState([]);
  const [backImage, setBackgroud] = useState({});
  const API_KEY = "0de0784cab2152d2433a449bf40d639f";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function FetchData() {
    try {
      let data = await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
        { mode: "cors" }
      );
      let res = await data.json();

      if (data.status === 200) {
        const results = res.results;
        let filteredImages = await results.filter((item, index) => {
          return index <= 11;
        });
        let bk = results[2];
        setBackgroud(bk);
        setImages(filteredImages);
        setLoading(false);
      } else {
        console.log("server error");
      }
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      FetchData();
    }, 1500);
  }, []);
  if (error) {
    return <ErrorPage />;
  }
  if (loading) {
    return <LoadingPage />;
  }
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
        <div className="movieInfo" data-tesid='movie-card'>
          <h3 className="Title" data-testid='movie-title'>{backImage.title}</h3>
          <p className="description"  >{backImage.overview}</p>
          <button> Watch Trailer</button>
        </div>
      </header>
      <CardImage images={images} />
      <Footer />
    </div>
  );
}

export default App;
