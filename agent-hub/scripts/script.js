// Symbols
const Roles = {
    CONTROLLER: Symbol("Role.Controller"),
    DUELIST:    Symbol("Role.Duelist"   ),
    INITIATOR:  Symbol("Role.Initiator" ),
    SENTINEL:   Symbol("Role.Sentinel"  ),
  };

// Default Constructor
function Person(bio, name, role, image, ability1, ability2, ability3, ability4) {
    this.bio      = bio;
    this.name     = name;
    this.role     = role;
    this.image    = image;
    this.ability1 = ability1;
    this.ability2 = ability2;
    this.ability3 = ability3;
    this.ability4 = ability4;
}

// Default agents
const person1 = new Person("Sova's bio information.","Sova", "Smith", 25);
const person2 = new Person("Bob", "Johnson", 32);

/**********************
***********************
* ROLE SECTION
**********************
*********************/
const roleSelect = document.getElementById("roleSelect");

roleSelect.addEventListener("change", function() {
  const selectedRole = this.value; // Get the selected value (string)

  if (selectedRole) {  // Check if a role is selected
    // Perform actions based on the selected role (e.g., display info)
    console.log("Selected role:", selectedRole);
  } else {
    // Handle cases where no role is selected (optional)
    console.log("Please select a role.");
  }
});

