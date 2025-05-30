$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(480, 630, 140, 20, "green");
    createPlatform(500, 650, 100, 90, "darkgreen");

    createPlatform(700, 550, 100, 20, "green");
    createPlatform(720, 570, 60, 20, "darkgreen");

    createPlatform(500, 420, 100, 20, "red");
    createPlatform(520, 440, 60, 20, "darkred");

    createPlatform(150, 340, 200, 20, "red");
    createPlatform(170, 360, 160, 20, "darkred");

    createPlatform(900, 650, 400, 20, "yellow");
    createPlatform(920, 670, 360, 70, "gold");

    createPlatform(1250, 550, 120, 20, "yellow");
    createPlatform(1270, 570, 80, 20, "gold");

    createPlatform(1020, 460, 120, 20, "yellow");
    createPlatform(1040, 480, 80, 20, "gold");

    createPlatform(800, 350, 120, 20, "yellow");
    createPlatform(820, 370, 80, 20, "gold");

    createPlatform(1020, 240, 320, 20, "yellow");
    createPlatform(1040, 260, 280, 20, "gold");


    // TODO 3 - Create Collectables
    createCollectable("database", 730, 300, 0.5, 0.3);
    createCollectable("database", 1250, 50, 0.5, 0.5);
    createCollectable("database", 230, 0, 1, 1);

    
    // TODO 4 - Create Cannons
    createCannon("left", 550, 2000);
    createCannon("top", 700, 1000);
    createCannon("right", 370, 1000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
