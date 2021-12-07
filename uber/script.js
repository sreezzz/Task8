class uberFare {
  constructor(Start, End) {
    this.Start = Start;
    this.End = End;
  }
  get Fare() {
    return this.clacFare();
  }
  clacFare() {
    return this.End - this.Start;
  }
}

const uberFare1 = new uberFare(10, 30);

console.log(uberFare1.Fare);
