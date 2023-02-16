const React = require("react");

function Def(html) {
  return (
    <html>
      <head lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Title</title>
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">Add Place</a>
            </li>
          </ul>
        </nav>
        {html.children}
      </body>
    </html>
  );
}

module.exports = Def;
