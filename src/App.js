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
  return (
    //light switch practice
    // <LightSwitch />

    //counter practice
    // <Counter/>

    //conditional rendering practice
    <div className="flex flex-col items-center m-4">
      <Widget1/>
      <Widget2/>
      <Widget3/>
    </div>

    // <div className="h-screen flex flex-col">
    //   <Header/>
    //   <SearchBar/>
    //   <Footer/>
    // </div>
    // <div className="flex flex-col items-center ">
    //   <QuoteBox1 quote={quote1} />
    //   <QuoteBox2 quote={quote2}/>
    //   <QuoteBox3 quote={quote3}/>
    // </div>
  );
}

export default App;
