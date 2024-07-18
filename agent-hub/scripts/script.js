// CONSTANTS
const ABILITIY_COUNT = 4;

// Using a Symbol to organize available roles
const Roles = {
    CONTROLLER: Symbol("Role.Controller"),
    DUELIST:    Symbol("Role.Duelist"   ),
    INITIATOR:  Symbol("Role.Initiator" ),
    SENTINEL:   Symbol("Role.Sentinel"  )
  };

// Array of completed Agents
const agents = [
  { // Sova
    name: "Sova",
    role: Roles.INITIATOR,
    image: "images/agents/sova-hero-pose.png",
    ability1: "Sova's ability 1",
    ability2: "Sova's ability 2",
    ability3: "Sova's ability 3",
    ability4: "Sova's ability 4"
  },
  { // Brimstone
    name: "Brimstone",
    role: Roles.CONTROLLER,
    image: "images/agents/brimstone-hero-pose.png",
    ability1: "Brimstone's ability 1",
    ability2: "Brimstone's ability 2",
    ability3: "Brimstone's ability 3",
    ability4: "Brimstone's ability 4"
  },
  { // Phoenix
    name: "Phoenix",
    role: Roles.DUELIST,
    image: "images/agents/phoenix-hero-pose.png",
    ability1: "Phoenix's ability 1",
    ability2: "Phoenix's ability 2",
    ability3: "Phoenix's ability 3",
    ability4: "Phoenix's ability 4"
  },
  { // Cypher
    name: "Cypher",
    role: Roles.SENTINEL,
    image: "images/agents/cypher-hero-pose.png",
    ability1: "Cypher's ability 1",
    ability2: "Cypher's ability 2",
    ability3: "Cypher's ability 3",
    ability4: "Cypher's ability 4"
  },
  { // Reyna
    name: "Reyna",
    role: Roles.DUELIST,
    image: "images/agents/reyna-hero-pose.png",
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
    image: "images/agents/yoru-hero-pose.png",
    ability1: "Yoru's ability 1",
    ability2: "Yoru's ability 2",
    ability3: "Yoru's ability 3",
    ability4: "Yoru's ability 4"
  },
  { // Omen
    name: "Omen",
    role: Roles.CONTROLLER,
    image: "images/agents/omen-hero-pose.png",
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
const gallery = document.getElementById('gallery');

// When we are on the gallery.html page
if (gallery) {
  displayGallery();
}

/*******************************
* DISPLAY GALLERY
* Displays all of the agents.
*******************************/
function displayGallery() {
  // Display all of the agents
  agents.forEach((agent) => {
  // Start the agent process
  const article = document.createElement("article");

  // Make the agent image a link
  const a = document.createElement("a");
  a.href  = "view.html";

  // Make it so that the image and name are targeted
  a.classList.add("agent-panel");

  // Add the agent image
  const img = document.createElement("img");
  img.setAttribute("src", agent.image);
  img.setAttribute("alt", "Hero image for " + agent.name);
  a.appendChild(img); // Add the image inside the anchor tag
  article.appendChild(a);

  // Add the agent name
  const h3       = document.createElement("h3");
  h3.textContent = agent.name;
  article.appendChild(h3);
  
  gallery.appendChild(article);
  });
}

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
const abilitiesSection = document.getElementById("abilities");

// When we are on the abilities.html page
if (abilitiesSection) {
  for (let i = 0; i < ABILITIY_COUNT; i++) {
    createAbility();
  }
}

/*******************************
* CREATE ABILITY
* Creates a new ability.
*******************************/
function createAbility() {
  const article     = document.createElement("article");
  const nameInput   = document.createElement("input");
  const imageUpload = document.createElement("div");
  const image       = document.createElement("img");
  const fileInput   = document.createElement("input");
  const description = document.createElement("textarea");

  image.src        = "placeholder.jpg";
  image.alt        = "Upload Image";
  nameInput.type   = "text";
  fileInput.type   = "file";
  fileInput.name   = "myImage";
  description.rows = 5;
  description.maxLength   = 512;
  nameInput.placeholder   = "Ability Name...";
  imageUpload.className   = "image-upload";
  description.placeholder = "Write the ability description here...";

  imageUpload.appendChild(image);
  imageUpload.appendChild(fileInput);
  article.appendChild(nameInput);
  article.appendChild(imageUpload);
  article.appendChild(description);

  abilitiesSection.appendChild(article);
}

/**********************
***********************
* BIO SECTION
**********************
*********************/

/**********************
***********************
* VIEW SECTION
**********************
*********************/
const view = document.getElementById('view');

// When we are on the view.html page
if (view) {
  displayAgent(agents[1]);
}

/*******************************
* DISPLAY AGENT
* Displays the selected agent.
*******************************/
function displayAgent(agent) {
  // Start the agent process
  const section = document.createElement("section");

  // Add the agent image
  const img = document.createElement("img");
  img.setAttribute("src", agent.image);
  img.setAttribute("alt", "Hero image for " + agent.name);
  section.appendChild(img);

  // Add the agent name
  const h3       = document.createElement("h3");
  h3.textContent = agent.name;
  section.appendChild(h3);

  // Send it to the HTML
  view.appendChild(section);
}
