// CONSTANTS
const ABILITY_COUNT = 4;

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
    image: "images/agents/sova/hero-pose.png",
    abilityImages: {
      ability1: "images/agents/sova/shock-bolt.png",
      ability2: "images/agents/sova/recon-bolt.png",
      ability3: "images/agents/sova/owl-drone.png",
      ability4: "images/agents/sova/hunter's-fury.png"
    },
    abilityDescriptions: {
      ability1: "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
      ability2: "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.",
      ability3: "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone.",
      ability4: "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active."
    }
  },
  { // Brimstone
    name: "Brimstone",
    role: Roles.CONTROLLER,
    image: "images/agents/brimstone/hero-pose.png",
    abilityImages: {
      ability1: "images/agents/brimstone/incendiary.png",
      ability2: "images/agents/brimstone/sky-smoke.png",
      ability3: "images/agents/brimstone/stim-beacon.png",
      ability4: "images/agents/brimstone/orbital-strike.png"
    },
    abilityDescriptions: {
      ability1: "Brimstone's ability 1",
      ability2: "Brimstone's ability 2",
      ability3: "Brimstone's ability 3",
      ability4: "Brimstone's ability 4"
    }
  },
  { // Phoenix
    name: "Phoenix",
    role: Roles.DUELIST,
    image: "images/agents/phoenix/hero-pose.png",
    abilityImages: {
      ability1: "images/agents/phoenix/curveball.png",
      ability2: "images/agents/phoenix/hot-hands.png",
      ability3: "images/agents/phoenix/blaze.png",
      ability4: "images/agents/phoenix/run-it-back.png"
    },
    abilityDescriptions: {
      ability1: "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
      ability2: "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
      ability3: "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
      ability4: "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health."
    }
  },
  { // Cypher
    name: "Cypher",
    role: Roles.SENTINEL,
    image: "images/agents/cypher/hero-pose.png",
    abilityImages: {
      ability1: "images/agents/cypher/cyber-cage.png",
      ability2: "images/agents/cypher/spycam.png",
      ability3: "images/agents/cypher/trapwire.png",
      ability4: "images/agents/cypher/neural-theft.png"
    },
    abilityDescriptions: {
      ability1: "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.",
      ability2: "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED.",
      ability3: "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
      ability4: "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players."
    }
  },
  { // Reyna
    name: "Reyna",
    role: Roles.DUELIST,
    image: "images/agents/reyna/hero-pose.png",
    abilityImages: {
      ability1: "images/agents/reyna/devour.png",
      ability2: "images/agents/reyna/dismiss.png",
      ability3: "images/agents/reyna/leer.png",
      ability4: "images/agents/reyna/empress.png"
    },
    abilityDescriptions: {
      ability1: "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.",
      ability2: "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.",
      ability3: "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
      ability4: "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration."
    }
  },
  { // Jett
    name: "Jett",
    role: Roles.DUELIST,
    image: "images/agents/jett/hero-pose.png",
    abilityImages: {
      ability1: "images/agents/jett/updraft.png",
      ability2: "images/agents/jett/tailwind.png",
      ability3: "images/agents/jett/cloudburst.png",
      ability4: "images/agents/jett/blade-storm.png"
    },
    abilityDescriptions: {
      ability1: "INSTANTLY propel Jett high into the air.",
      ability2: "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
      ability3: "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
      ability4: "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill."
    }
  },
  { // Yoru
    name: "Yoru",
    role: Roles.DUELIST,
    image: "images/agents/yoru/hero-pose.png",
    abilityImages: {
      ability1: "images/agents/yoru/blindside.png",
      ability2: "images/agents/yoru/gatecrash.png",
      ability3: "images/agents/yoru/fakeout.png",
      ability4: "images/agents/yoru/dimensional-drift.png"
    },
    abilityDescriptions: {
      ability1: "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.",
      ability2: "EQUIP a rift tether FIRE to send the tether forward. ALT FIRE to place a stationary tether. ACTIVATE to teleport to the tether's location. USE to trigger a fake teleport.",
      ability3: "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.",
      ability4: "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside. REACTIVATE to exit Yoru's dimension early."
    }
  },
  { // Omen
    name: "Omen",
    role: Roles.CONTROLLER,
    image: "images/agents/omen/hero-pose.png",
    abilityImages: {
      ability1: "images/agents/omen/paranoia.png",
      ability2: "images/agents/omen/dark-cover.png",
      ability3: "images/agents/omen/shrouded-step.png",
      ability4: "images/agents/omen/from-the-shadows.png"
    },
    abilityDescriptions: {
      ability1: "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.",
      ability2: "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD ALT FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.",
      ability3: "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
      ability4: "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport."
    }
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
    a.href = `view.html?agent=${encodeURIComponent(agent.name)}`;
    a.classList.add("agent-panel");

    // Add the agent image
    const img = document.createElement("img");
    img.setAttribute("src", agent.image);
    img.setAttribute("alt", "Hero image for " + agent.name);
    a.appendChild(img); // Add the image inside the anchor tag
    article.appendChild(a);

    // Add the agent name
    const h3 = document.createElement("h3");
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
  for (let i = 0; i < ABILITY_COUNT; i++) {
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

document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const agentName = urlParams.get('agent');

  if (agentName) {
    const agent = agents.find(a => a.name === agentName);

    if (agent) {
      // Populate agent details
      const section = document.createElement("section");

      // Add the agent image
      const img = document.createElement("img");
      img.classList.add("agent-image");
      img.setAttribute("src", agent.image);
      img.setAttribute("alt", "Hero image for " + agent.name);
      section.appendChild(img);

      // Add the agent name
      const h3 = document.createElement("h3");
      h3.textContent = agent.name;
      section.appendChild(h3);

      // Add the agent role
      const h4 = document.createElement("h4");
      h4.textContent = getRoleString(agent.role);
      section.appendChild(h4);

      // Add the agent ability images
      for (let i = 0; i < ABILITY_COUNT; i++) {
        const div = document.createElement("div");
        div.classList.add("ability-image");
        const abilityKey = `ability${i + 1}`;
        div.innerHTML = `<img src="${agent.abilityImages[abilityKey]}" alt="${agent.abilityDescriptions[abilityKey]}">`;
        section.appendChild(div);
      }

      // Add the agent ability descriptions
      for (let i = 0; i < ABILITY_COUNT; i++) {
        const div = document.createElement("div");
        div.classList.add("ability-description");
        const abilityKey = `ability${i + 1}`;
        div.textContent = agent.abilityDescriptions[abilityKey];
        section.appendChild(div);
      }

      // Append section to the view container
      const viewContainer = document.getElementById("view");
      if (viewContainer) {
        viewContainer.appendChild(section);
      } else {
        console.error('#view not found!');
      }
    } else {
      console.error(`Agent '${agentName}' not found!`);
    }
  } else {
    console.error('Agent name parameter missing!');
  }
});


/*******************************
* GET ROLE STRING
* Mapping Symbols to their string representations
*******************************/
function getRoleString(roleSymbol) {
  switch (roleSymbol) {
    case Roles.CONTROLLER:
      return "Controller";
    case Roles.DUELIST:
      return "Duelist";
    case Roles.INITIATOR:
      return "Initiator";
    case Roles.SENTINEL:
      return "Sentinel";
    default:
      return "Unknown Role";
  }
}

/*******************************
* DISPLAY AGENT
* Displays the selected agent.
*******************************/
function displayAgent(agent) {
  // Start the agent process
  const section = document.createElement("section");
  section.classList.add("view");

  // Add the agent name
  const h3       = document.createElement("h3");
  h3.textContent = agent.name;
  section.appendChild(h3);

  // Add the agent image
  const agentImage = document.createElement("img");
  agentImage.classList.add("agent-image");
  agentImage.setAttribute("src", agent.image);
  agentImage.setAttribute("alt", "Hero image for " + agent.name);
  section.appendChild(agentImage);

  // Add the agent role
  const h4       = document.createElement("h4");
  h4.textContent = getRoleString(agent.role);
  section.appendChild(h4);

  // Add the agent ability images
  for (let i = 0; i < ABILITY_COUNT; i++) {
    const div = document.createElement("div");
    div.classList.add("ability-image");
    const abilityKey = `ability${i + 1}`;
    div.innerHTML = `<img src="${agent.abilityImages[abilityKey]}" alt="${agent.abilityDescriptions[abilityKey]}">`;
    section.appendChild(div);
  }

  // Add the agent ability descriptions
  for (let i = 0; i < ABILITY_COUNT; i++) {
    const div = document.createElement("div");
    div.classList.add("ability-description");
    const abilityKey = `ability${i + 1}`;
    div.textContent = agent.abilityDescriptions[abilityKey];
    section.appendChild(div);
  }
  
  // Send it to the HTML
  view.appendChild(section);
}
