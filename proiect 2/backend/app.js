const express = require("express");
const session = require("express-session");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const app = express();
const port = 5000;


app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");

app.use(
  session({ 
    secret: "abcdefg",
    resave: true,
    saveUninitialized: false,
  })
);

// Ruta pentru pagina principala (login)
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

app.post("/login", function (req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    const user = checkUser(fields.username, fields.parola);
    if (user) {
      req.session.username = user;
      res.redirect("/home");
    } else {
      req.session.username = false;
      res.redirect("/");
    }
  });
});

// Definirea rutelor pentru paginile site-ului
app.get("/home", function (req, res) {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "../public/pagprincipala.html"));
  } else {
    res.redirect("/");
  }
});

app.get("/aventura", function (req, res) {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "../public/aventura.html"));
  } else {
    res.redirect("/");
  }
});

app.get("/filme", function (req, res) {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "../public/filme.html"));
  } else {
    res.redirect("/");
  }
});

app.get("/eroi", function (req, res) {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "../public/filme2.html"));
  } else {
    res.redirect("/");
  }
});

app.get("/istorie", function (req, res) {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "../public/istorie.html"));
  } else {
    res.redirect("/");
  }
});

app.get("/news", function (req, res) {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "../public/news.html"));
  } else {
    res.redirect("/");
  }
});

app.get("/quiz", function (req, res) {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "../public/quiz.html"));
  } else {
    res.redirect("/");
  }
});

app.get("/rezultate", function (req, res) {
  if (req.session.username) {
    res.sendFile(path.join(__dirname, "../public/quiz2.html"));
  } else {
    res.redirect("/");
  }
});

// Ruta pentru deconectare 
app.get("/logout", function (req, res) {
  res.render("logout", { nume: req.session.username });
});

// Ruta pentru deconectare efectiva (signout)
app.get("/signout", function (req, res) {
  req.session.username = false;
  res.redirect("/");
});

// Functie pentru verificarea utilizatorului
function checkUser(username, password) {
  const filePath = path.join(__dirname, "users.json");
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    const users = JSON.parse(data);

    for (let i in users) {
      if (
        users[i].username === username[0] &&
        users[i].parola === password[0]
      ) {
        return username[0];
      }
    }
  }
  return false;
}

// erori 404
app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "../public/404.html"));
});

// pornirea serverului
app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
