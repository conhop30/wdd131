// Using a Symbol to organize available roles
const Roles = {
    CONTROLLER: Symbol("Role.Controller"),
    DUELIST:    Symbol("Role.Duelist"   ),
    INITIATOR:  Symbol("Role.Initiator" ),
    SENTINEL:   Symbol("Role.Sentinel"  )
  };

// Default Constructor
// vvvvvvvvvv DO I EVEN NEED THIS? vvvvvvvvvv
function Agent(bio, name, role, image, ability1, ability2, ability3, ability4) {
    this.bio       = bio;
    this.name      = name;
    this.role      = role;
    this.image     = image;
    this.abilities = [ability1, ability2, ability3, ability4];
}

// Complete Agents
const agents = [
  { // Sova
    name: "Sova",
    role: Roles.INITIATOR,
    image: "images/agents/sova.png",
    ability1: "Sova's ability 1",
    ability2: "Sova's ability 2",
    ability3: "Sova's ability 3",
    ability4: "Sova's ability 4"
  },
  { // Brimstone
    name: "Brimstone",
    role: Roles.CONTROLLER,
    image: "images/agents/brimstone.png",
    ability1: "Brimstone's ability 1",
    ability2: "Brimstone's ability 2",
    ability3: "Brimstone's ability 3",
    ability4: "Brimstone's ability 4"
  },
  { // Phoenix
    name: "Phoenix",
    role: Roles.DUELIST,
    image: "images/agents/phoenix.png",
    ability1: "Phoenix's ability 1",
    ability2: "Phoenix's ability 2",
    ability3: "Phoenix's ability 3",
    ability4: "Phoenix's ability 4"
  },
  { // Cypher
    name: "Cypher",
    role: Roles.SENTINEL,
    image: "images/agents/cypher.png",
    ability1: "Cypher's ability 1",
    ability2: "Cypher's ability 2",
    ability3: "Cypher's ability 3",
    ability4: "Cypher's ability 4"
  },
  { // Reyna
    name: "Reyna",
    role: Roles.DUELIST,
    image: "images/agents/reyna.png",
    ability1: "Reyna's ability 1",
    ability2: "Reyna's ability 2",
    ability3: "Reyna's ability 3",
    ability4: "Reyna's ability 4"
  },
  { // Jett
    name: "Jett",
    role: Roles.DUELIST,
    image: "images/agents/jett-hero-pose.png",
    ability1: "Jett's ability 1",
    ability2: "Jett's ability 2",
    ability3: "Jett's ability 3",
    ability4: "Jett's ability 4"
  },
  { // Yoru
    name: "Yoru",
    role: Roles.DUELIST,
    image: "images/agents/yoru.png",
    ability1: "Yoru's ability 1",
    ability2: "Yoru's ability 2",
    ability3: "Yoru's ability 3",
    ability4: "Yoru's ability 4"
  },
  { // Omen
    name: "Omen",
    role: Roles.CONTROLLER,
    image: "images/agents/omen.png",
    ability1: "Omen's ability 1",
    ability2: "Omen's ability 2",
    ability3: "Omen's ability 3",
    ability4: "Omen's ability 4"
  }
]

/**********************
***********************
* GALLERY SECTION
**********************
*********************/
agents.forEach((agent) => {
  const article = document.createElement("article");

  const img = document.createElement("img");
  img.setAttribute("src", agent.image);
  img.setAttribute("alt", "Hero image for " + agent.name);
  article.appendChild(img);

  const h3 = document.createElement("h3");
  h3.textContent = agent.name;
  article.appendChild(h3);
});

document.querySelectorById('gallery').appendChild(article);

/**********************
***********************
* ROLE SECTION
**********************
*********************/

/**********************
***********************
* ABILITIES SECTION
**********************
*********************/
iAbility = 0;
agents.forEach((abilities) => {
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  h3.textContent = abilities[i];
  article.appendChild(h3);
  iAbility++;
});

/**********************
***********************
* BIO SECTION
**********************
*********************/