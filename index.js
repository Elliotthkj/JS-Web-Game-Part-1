function newImage(img, path, left, bottom) {
  let imageName = document.createElement("img");
  imageName.src = path;
  imageName.style.position = "fixed";
  imageName.style.left = left;
  imageName.style.bottom = bottom;
  document.body.append(imageName);
  return imageName;
}

function newItem(img, path, left, bottom) {
  let imageName = newImage(img, path, left, bottom);

  imageName.addEventListener("dblclick", function () {
    imageName.remove();
  });
}
// Create new grass image
let grassImage = document.createElement("img");
grassImage.src = "assets/grass.png";
grassImage.style.position = "absolute";
grassImage.style.bottom = "0px";
grassImage.style.left = "0px";
grassImage.style.width = "100%";
grassImage.style.height = "50%";
grassImage.style.zIndex = "-1";
document.body.prepend(grassImage);

// Create new sky image
let skyImage = document.createElement("img");
skyImage.src = "assets/sky.png";
skyImage.style.position = "absolute";
skyImage.style.top = "0px";
skyImage.style.left = "0px";
skyImage.style.width = "100%";
skyImage.style.height = "50%";
skyImage.style.zIndex = "-1";
document.body.append(skyImage);


newImage("greenCharacter", "assets/green-character.gif", "100px", "100px");
newImage("pineTree", "assets/pine-tree.png", "450px", "200px");
newImage("regTree", "assets/tree.png", "200px", "300px");
newImage("pillar", "assets/pillar.png", "350px", "100px");
newImage("crate", "assets/crate.png", "150px", "200px");
newImage("well", "assets/well.png", "500px", "425px");
newItem("sword", "assets/sword.png", "500px", "405px");
newItem("shield", "assets/shield.png", "165px", "185px");
newItem("staff", "assets/staff.png", "600px", "100px ");

