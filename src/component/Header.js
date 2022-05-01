import heroimg from "../assets/image/heroimg.jpg";

const Header = () => {
  return (
    <div>
      <section className="containers h-44 md:h-44 lg:h-44 flex items-center bg-black py-10 px-20">
        <a href="/" className="text-white border-white border-2 px-5 py-3.5 text-xl">
        MovieHunt
        </a>
        
      </section>
      <nav className="heroContainer flex relative items-center">
        <img src={heroimg} className="heroimg" alt="heroimg"/>
        <h1>Watch Something Incredible!</h1>
      </nav>
    </div>
  );
};

export default Header;
