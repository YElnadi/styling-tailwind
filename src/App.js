import logo from "./logo.svg";
import "./App.css";
import QuoteBox1 from "./QuoteBox1";
import QuoteBox2 from "./QuoteBox2";
import QuoteBox3 from "./QuoteBox3";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import LightSwitch from "./LightSwitch";
import Counter from "./Counter";
import Widget1 from "./Widget1";
import Widget2 from "./Widget2";
import Widget3 from "./Widget3";
import IMAGE_URLS from "./ImageCarousel/Images";
import DogCard from "./ImageCarousel/DogCard";
import NavButtons from "./ImageCarousel/NavButtons";
import { useState } from "react";
import Paragraph from "./DarkMode/Paragraph";
import CookieRecipe from "./CookiesRecipe/CookieRecipe";

const quote1 = {
  text: "One of my most productive days was throwing away 1000 lines of code.",
  author: "Ken Thompson",
  bio: "Designer of Unix Operating System",
};

const quote2 = {
  text: "A ship in port is safe, but that's not what ships are built for.",
  author: "Admiral Grace Hopper",
  bio: "Inventor of Programming Compilers",
};

const quote3 = {
  text: "If you optimize everything, you will always be unhappy.",
  author: "Donald Knuth",
  bio: "Pioneer of Algorithm Analysis",
};
function App() {
  const [imageIdx, setImageIdx] = useState(0);
  return (
    //light switch practice
    // <LightSwitch />

    //counter practice
    // <Counter/>

    //conditional rendering practice
    // <div className="flex flex-col items-center m-4">
    //   <Widget1/>
    //   <Widget2/>
    //   <Widget3/>
    // </div>

    // <div className="h-screen flex flex-col">
    //   <Header/>
    //   <SearchBar/>
    //   <Footer/>
    // </div>

    // image carousel
    // <div className="flex flex-col justify-center items-center mt-4">
    //   <div className="mb-4 text-cyan-300 text-3xl">Dog {imageIdx + 1}</div>
    //   <div className="flex justify-center items-center">
    //     <NavButtons
    //       icon={"fa-chevron-left"}
    //       show={imageIdx > 0}
    //       onClick={() => {
    //         setImageIdx(imageIdx - 1);
    //       }}
    //     />
    //     <div className="flex items-center justify-center m-4">
    //       <DogCard dog={IMAGE_URLS[imageIdx]} />
    //     </div>
    //     <NavButtons
    //       icon={"fa-chevron-right"}
    //       show={imageIdx < IMAGE_URLS.length - 1}
    //       onClick={() => {
    //         setImageIdx(imageIdx + 1);
    //       }}
    //     />
    //   </div>
    // </div>

    // responsive design
    // <div><Paragraph/></div>

    //Cookies recipes
    <>
      <div className="bg-orange-500 flex justify-center ">
        <div className="flex w-full max-w-4xl justify-between items-center px-8 py-4 text-orange-200">
          <div className="text-2xl">Yasmine's Recipe</div>
          <button className="text-lg">
            <i className="fa-solid fa-arrow-right-to-bracket mr-2 "></i>
            Sign-in
          </button>
        </div>
      </div>
      <div>
        <CookieRecipe />
      </div>
    </>

    // <div className="flex flex-col items-center ">
    //   <QuoteBox1 quote={quote1} />
    //   <QuoteBox2 quote={quote2}/>
    //   <QuoteBox3 quote={quote3}/>
    // </div>
  );
}

export default App;
