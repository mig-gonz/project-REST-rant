const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img src="/images/blue-eyed-pup.jpg" alt="blue eyed puppy" />
          <div>
            Photo by <a href="https://unsplash.com/@mtsjrdl">Mathis Jrdl</a> on{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
