let car1 = {
  color: "Red",
  company: "Maruti",
};

function purchaseCar() {
  console.log(`I have purchased ${this.color} - ${this.company}`);
}
