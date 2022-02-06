class SnowboardEquip {
  static owner = "Dmitry Vorobev";
  static rigitiry = "high";
  constructor(thickness, condition, width, itemname, weight) {
    this.itemsForSeason = "winter";
    this.itemsForPlace = "sochi";
    this.thickness = thickness;
    this.weight = weight;
    this.itemName = itemname;
    this.condition = condition;
    this.width = width;
  }
  checkWillHardItemsFit() {
    if (this.condition === "good" && this.width < 160) {
      console.log(
        `Item ${this.itemName} with ${this.thickness}cm thinkness Fit into a case and Ready for action`
      );
    } else if (this.condition === "bad") {
      console.log(
        `Item ${this.itemName} in ${this.condition} condition,need to find another one`
      );
    } else {
      console.log(
        `Item ${this.itemName} with ${this.thickness}cm thinkness Can'T Fit into a case because width ${this.width}cm is a problem.`
      );
    }
  }
  checkReplaceIsNeeded() {
    {
      if (this.condition === "normal" || this.condition === "good") {
        console.log(
          `Item ${this.itemName} in ${this.condition} condition  with weight ${this.weight}gr NO need to relpace`
        );
      } else if (this.condition === "bad") {
        console.log(
          `Item ${this.itemName} in ${this.condition} condition and NEED to be replaced`
        );
      }
    }
  }
  get getStats() {
    return `${this.itemName}, ${this.condition} condition, ${this.weight}gr`;
  }
}
let snowboard = new SnowboardEquip(1, "good", 155, "Capita Snowboard", 3000);
class SnowBoardSoftEquip extends SnowboardEquip {
  static rigitiry = "low";
  constructor(itemname, weight, size, condition) {
    super();
    this.itemName = itemname;
    this.weight = weight;
    this.size = size;
    this.condition = condition;
    this.compactness = "good";
  }
  checkWillSoftItemFit() {
    if (this.condition === "good") {
      console.log(
        `SoftEqip Item ${this.itemName} with any thinkness easy Fit into a case and Ready for action`
      );
    } else if (this.condition === "bad") {
      console.log(
        `SoftEqip Item ${this.itemName} in ${this.condition} condition , but  we can still take`
      );
    }
  }
}

let gloves = new SnowBoardSoftEquip("Ski gloves", 100, "small", "bad");
console.group("I-N-F-O");
console.log(snowboard, gloves);
snowboard.checkReplaceIsNeeded();
snowboard.checkWillHardItemsFit();
gloves.checkWillSoftItemFit();
gloves.checkReplaceIsNeeded();
console.log(snowboard.itemsForPlace, gloves.itemsForSeason);
console.groupEnd();
console.log(SnowBoardSoftEquip.hasOwnProperty("rigitiry"));
console.log(gloves.getStats);
