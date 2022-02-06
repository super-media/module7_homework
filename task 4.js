function SnowboardEquip(thickness, condition, width, itemname, weight) {
  this.thickness = thickness;
  this.itemName = itemname;
  this.itemForSeason = "winter";
  this.itemForPlace = "Sochi";
  this.weight = weight;
  this.checkWillHardItemFits = function () {
    if (condition === "good" && width < 160) {
      console.log(
        `Item ${itemname} with ${thickness}cm thinkness Fit into a case and Ready for action`
      );
    }
  };
}
SnowboardEquip.prototype.checkReplaceIsNeeeded = function (
  itemname,
  weight,
  condition
) {
  if (condition === "normal" || condition === "good") {
    console.log(
      `Item ${itemname} in ${condition} condition  with weight ${weight}gr NO need to relpace`
    );
  } else if (condition === "bad") {
    console.log(
      `Item ${itemname} in ${condition} condition and NEED to be replaced`
    );
  }
};
SnowboardSoftEquip.prototype = new SnowboardEquip();
SnowboardSoftEquip.prototype.checkWillSoftItemFits = function (
  condition,
  itemname
) {
  if (condition === "good") {
    console.log(
      `SoftEqip Item ${itemname} with any thinkness easy Fit into a case and Ready for action`
    );
  } else if (condition === "bad") {
    console.log(
      `SoftEqip Item ${itemname} in ${condition} condition , but  we can still take`
    );
  }
};
let snowboard = new SnowboardEquip(2, "good", 155, "Capita Snowboard", 2500);
function SnowboardSoftEquip(itemname, weight, size, condition) {
  this.itemName = itemname;
  this.weight = weight;
  this.size = size;
  this.condition = condition;
  this.compactness = "good";
}
let gloves = new SnowboardSoftEquip("Ski gloves", 100, "small", "bad");
gloves.checkReplaceIsNeeeded("Ski gloves", 100, "bad");
gloves.checkWillSoftItemFits("bad", "Ski gloves");
snowboard.checkWillHardItemFits();
console.group("Info");
console.log(snowboard);
console.log(gloves);
console.groupEnd();
console.log(gloves.itemForSeason, gloves.itemForPlace);
