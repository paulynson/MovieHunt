import heroimg from "../assets/image/heroimg.png";
const Header = () => {
  return (
    <div>
      <section className="container">
        <h2>MovieHunt</h2>
      </section>
      <nav className="heroContainer">
        <img src={heroimg} className="heroimg" alt="heroimg" srcset="" />
        <h1>Watch something incredible.</h1>
      </nav>
    </div>
  );
};

export default Header;
