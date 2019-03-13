var express = require("express");
var app = express();

var data = [
  {
    id: 1,
    email: "jgruby0@example.com",
    familyName: "Gruby",
    givenName: "Johnna",
    role: "standard",
    smsUser: false
  },
  {
    id: 2,
    email: "bdurling@example.com",
    familyName: "Durling",
    givenName: "Brenda",
    role: "standard",
    smsUser: false
  },
  {
    id: 3,
    email: "ddoorbar2@example.com",
    familyName: "Doorbar",
    givenName: "Danila",
    role: "standard",
    smsUser: true
  },
  {
    id: 4,
    email: "csimkins3@example.com",
    familyName: "Simkins",
    givenName: "Cletus",
    role: "admin",
    smsUser: false
  },
  {
    id: 5,
    email: "efoynes4@example.com",
    familyName: "Foynes",
    givenName: "Evvy",
    role: "standard",
    smsUser: false
  },
  {
    id: 6,
    email: "dharrismith5@example.com",
    familyName: "Harrismith",
    givenName: "Dorette",
    role: "standard",
    smsUser: false
  },
  {
    id: 7,
    email: "fsnarie6@example.com",
    familyName: "Snarie",
    givenName: "Fey",
    role: "standard",
    smsUser: true
  },
  {
    id: 8,
    email: "npeschke7@example.com",
    familyName: "Peschke",
    givenName: "Nikolia",
    role: "standard",
    smsUser: false
  },
  {
    id: 9,
    email: "scrisford8@example.com",
    familyName: "Crisford",
    givenName: "Serge",
    role: "admin",
    smsUser: true
  },
  {
    id: 10,
    email: "mcunnane9@example.com",
    familyName: "Cunnane",
    givenName: "Marten",
    role: "admin",
    smsUser: false
  },
  {
    id: 11,
    email: "hdoumica@example.com",
    familyName: "Doumic",
    givenName: "Harald",
    role: "admin",
    smsUser: true
  },
  {
    id: 12,
    email: "nmcwilliamb@example.com",
    familyName: "McWilliam",
    givenName: "Nicky",
    role: "admin",
    smsUser: true
  },
  {
    id: 13,
    email: "rgosneyc@example.com",
    familyName: "Gosney",
    givenName: "Regen",
    role: "admin",
    smsUser: false
  },
  {
    id: 14,
    email: "ejenceyd@example.com",
    familyName: "Jencey",
    givenName: "Enid",
    role: "standard",
    smsUser: false
  },
  {
    id: 15,
    email: "gknotte@example.com",
    familyName: "Knott",
    givenName: "Gertrudis",
    role: "standard",
    smsUser: true
  },
  {
    id: 16,
    email: "goreillyf@example.com",
    familyName: "O'Reilly",
    givenName: "Gloria",
    role: "standard",
    smsUser: false
  },
  {
    id: 17,
    email: "smccorryg@example.com",
    familyName: "McCorry",
    givenName: "Sutton",
    role: "admin",
    smsUser: false
  },
  {
    id: 18,
    email: "mwhiteh@example.com",
    familyName: "White",
    givenName: "Martyn",
    role: "admin",
    smsUser: false
  },
  {
    id: 19,
    email: "moleki@example.com",
    familyName: "Olek",
    givenName: "Meryl",
    role: "admin",
    smsUser: false
  },
  {
    id: 20,
    email: "tnormanvillj@example.com",
    familyName: "Normanvill",
    givenName: "Tabina",
    role: "standard",
    smsUser: false
  },
  {
    id: 21,
    email: "rchyuertonk@example.com",
    familyName: "Chyuerton",
    givenName: "Rowena",
    role: "standard",
    smsUser: true
  },
  {
    id: 22,
    email: "bdunridgel@example.com",
    familyName: "Dunridge",
    givenName: "Barret",
    role: "admin",
    smsUser: false
  },
  {
    id: 23,
    email: "jvickarsm@example.com",
    familyName: "Vickars",
    givenName: "Janessa",
    role: "standard",
    smsUser: false
  },
  {
    id: 24,
    email: "imeddickn@example.com",
    familyName: "Meddick",
    givenName: "Imogen",
    role: "standard",
    smsUser: true
  },
  {
    id: 25,
    email: "elabano@example.com",
    familyName: "Laban",
    givenName: "Etienne",
    role: "admin",
    smsUser: false
  },
  {
    id: 26,
    email: "aliptrotp@example.com",
    familyName: "Liptrot",
    givenName: "Aubine",
    role: "standard",
    smsUser: true
  },
  {
    id: 27,
    email: "cmcreynoldsq@example.com",
    familyName: "McReynolds",
    givenName: "Clair",
    role: "standard",
    smsUser: true
  },
  {
    id: 28,
    email: "roverburyr@example.com",
    familyName: "Overbury",
    givenName: "Renado",
    role: "admin",
    smsUser: false
  },
  {
    id: 29,
    email: "aoneles@example.com",
    familyName: "Onele",
    givenName: "Ada",
    role: "standard",
    smsUser: true
  },
  {
    id: 30,
    email: "ccalytont@example.com",
    familyName: "Calyton",
    givenName: "Creigh",
    role: "admin",
    smsUser: false
  },
  {
    id: 31,
    email: "dfauschu@example.com",
    familyName: "Fausch",
    givenName: "Dallas",
    role: "standard",
    smsUser: false
  },
  {
    id: 32,
    email: "stharmev@example.com",
    familyName: "Tharme",
    givenName: "Sibylla",
    role: "standard",
    smsUser: true
  },
  {
    id: 33,
    email: "swimletw@example.com",
    familyName: "Wimlet",
    givenName: "Suzann",
    role: "standard",
    smsUser: true
  },
  {
    id: 34,
    email: "cbanbrookx@example.com",
    familyName: "Banbrook",
    givenName: "Codie",
    role: "standard",
    smsUser: true
  },
  {
    id: 35,
    email: "llepruvosty@example.com",
    familyName: "Le Pruvost",
    givenName: "Lin",
    role: "standard",
    smsUser: false
  },
  {
    id: 36,
    email: "slanchberryz@example.com",
    familyName: "Lanchberry",
    givenName: "Sharyl",
    role: "standard",
    smsUser: true
  },
  {
    id: 37,
    email: "tstagge10@example.com",
    familyName: "Stagge",
    givenName: "Tara",
    role: "standard",
    smsUser: true
  },
  {
    id: 38,
    email: "cfry11@example.com",
    familyName: "Fry",
    givenName: "Cornelia",
    role: "standard",
    smsUser: false
  },
  {
    id: 39,
    email: "fgreenman12@example.com",
    familyName: "Greenman",
    givenName: "Felicle",
    role: "standard",
    smsUser: false
  },
  {
    id: 40,
    email: "fleask13@example.com",
    familyName: "",
    givenName: "Fidelia",
    role: "standard",
    smsUser: true
  },
  {
    id: 41,
    email: "bbaptiste14@example.com",
    familyName: "Baptiste",
    givenName: "Brandie",
    role: "standard",
    smsUser: true
  },
  {
    id: 42,
    email: "egentile15@example.com",
    familyName: "Gentile",
    givenName: "Enoch",
    role: "admin",
    smsUser: false
  },
  {
    id: 43,
    email: "hwhittet16@example.com",
    familyName: "Whittet",
    givenName: "Hashim",
    role: "admin",
    smsUser: true
  },
  {
    id: 44,
    email: "lmeininger17@example.com",
    familyName: "Meininger",
    givenName: "Lotti",
    role: "standard",
    smsUser: false
  },
  {
    id: 45,
    email: "dtaylerson18@example.com",
    familyName: "Taylerson",
    givenName: "Dunstan",
    role: "admin",
    smsUser: true
  },
  {
    id: 46,
    email: "bferrer19@example.com",
    familyName: "Ferrer",
    givenName: "Brannon",
    role: "admin",
    smsUser: false
  },
  {
    id: 47,
    email: "broset1a@example.com",
    familyName: "Roset",
    givenName: "Brew",
    role: "admin",
    smsUser: false
  },
  {
    id: 48,
    email: "bwadsworth1b@example.com",
    familyName: "Wadsworth",
    givenName: "Bren",
    role: "admin",
    smsUser: true
  },
  {
    id: 49,
    email: "cbenitti1c@example.com",
    familyName: "Benitti",
    givenName: "Channa",
    role: "standard",
    smsUser: true
  },
  {
    id: 50,
    email: "dberndtssen1d@example.com",
    familyName: "Berndtssen",
    givenName: "Deva",
    role: "standard",
    smsUser: true
  },
  {
    id: 51,
    email: "njohanning1e@example.com",
    familyName: "Johanning",
    givenName: "Nerissa",
    role: "standard",
    smsUser: true
  },
  {
    id: 52,
    email: "mbutteris1f@example.com",
    familyName: "Butteris",
    givenName: "Margy",
    role: "standard",
    smsUser: false
  },
  {
    id: 53,
    email: "ddunston1g@example.com",
    familyName: "Dunston",
    givenName: "Dulcinea",
    role: "standard",
    smsUser: true
  },
  {
    id: 54,
    email: "kcooke1h@example.com",
    familyName: "Cooke",
    givenName: "Kimbra",
    role: "standard",
    smsUser: true
  },
  {
    id: 55,
    email: "mheathcott1i@example.com",
    familyName: "Heathcott",
    givenName: "Maurice",
    role: "admin",
    smsUser: false
  }
];

var paginate = function(list, page) {
  var pageItems = list.slice(page * 10 - 10, page * 10);

  if (!pageItems.length) {
    var lastPage = (list.length - (list.length % 10)) / 10 + 1;
    return list.slice(lastPage * 10 - 10, lastPage * 10);
  }
  return pageItems;
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/users", function(req, res) {
  var limit = parseInt(req.query.limit) || 100;
  var offset = parseInt(req.query.offset) || 0;
  var role = req.query.role;
  var page = parseInt(req.query.page) || 1;
  var response;

  if (isNaN(limit) || limit < 0 || isNaN(offset) || offset < 0) {
    res.status(400).send("Bad Request");
    return;
  }

  if (role !== undefined && role !== "") {
    response = paginate(data, page)
      .filter(function(item) {
        return item.role === role;
      })
      .slice(offset, offset + limit);

      return res.send(response);
  } else {
    response = data.slice(offset, offset + limit);
  }
  
  return res.send(paginate(response, page));
});

app.listen(3000, function() {
  console.log("API listening on port 3000!");
});
