import "../section1.css";

const Section1 = () => {
  const stars = Array.from({ length: 100 }, (_, i) => (
    <div
      key={i}
      className="star"
      style={{
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 2}s`, // Randomize duration
        animationDelay: `${Math.random() * 2}s`, // Randomize delay
      }}
    />
  ));

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Falling stars animated background */}
      <div className="animated-star-background">{stars}</div>
      
      <div className="flex space-x-4 relative z-10">
      <label
          htmlFor="card1"
          className="card w-48 h-64 sm:w-40 sm:h-56 md:w-60 md:h-8
          0 bg-cover bg-center rounded-2xl relative"
          style={{
            backgroundImage: `url(/silder1.jpg)`,
          }}
        >
          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-60 text-black rounded-b-2xl">
            <h4 className="font-bold">HyperSonic Missiles</h4>
            <p>Gets better</p>
          </div>
        </label>

        <label
          htmlFor="card2"
          className="card w-48 h-64 sm:w-40 sm:h-56 md:w-60 md:h-80 bg-cover bg-center rounded-2xl relative"
          style={{
            backgroundImage: `url(/silder2.jpg)`,
          }}
        >
          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-60 text-black rounded-b-2xl">
            <h4 className="font-bold">HyperSonic Missiles</h4>
            <p>Gets better</p>
          </div>
        </label>

        <label
          htmlFor="card3"
          className="card w-48 h-64 sm:w-40 sm:h-56 md:w-60 md:h-80 bg-cover bg-center rounded-2xl relative"
          style={{
            backgroundImage: `url(/slider3.jpg)`,
          }}
        >
          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-60 text-black rounded-b-2xl">
            <h4 className="font-bold">HyperSonic Missiles</h4>
            <p>Gets better</p>
          </div>
        </label>

        <label
          htmlFor="card4"
          className="card w-48 h-64 sm:w-40 sm:h-56 md:w-60 md:h-80 bg-cover bg-center rounded-2xl relative"
          style={{
            backgroundImage: `url(/silder4.jpg)`,
          }}
        >
          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-60 text-black rounded-b-2xl">
            <h4 className="font-bold">HyperSonic Missiles</h4>
            <p>Gets better</p>
          </div>
        </label>
      </div>
    </div> 
  );
};

export default Section1;
