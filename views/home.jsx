const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST-rant</h1>
        <div>
          <img src="/images/shine-bright.jpg" alt="sunset on the beach" />
          <div>
            Photo by <a href="https://unsplash.com/@andrewbui"> Andrew Bui</a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
