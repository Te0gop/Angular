import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n1: number = 0;
  Nr1: number = 0;
  Nb1: number = 0;
  resultFormula1: number | null = null;

  Ru2: number = 0;
  Rl2: number = 0;
  T2: number = 0;
  resultFormula2: number | null = null;

  Nr3: number = 0;
  Nf3: number = 0;
  m3: number = 0;
  N3: number = 0;
  resultFormula3: number | null = null;

  calculateFirstFormula() {
    if (this.Nb1 > 0) {
      this.resultFormula1 = 100 * (this.n1 - this.Nr1) / this.Nb1;
    } else {
      this.resultFormula1 = null;
      alert('Nb1 must be greater than 0');
    }
  }

  calculateSecondFormula() {
    if (this.T2 > 0) {
      this.resultFormula2 = (this.Ru2 - this.Rl2) / (0.5 * this.T2);
    } else {
      this.resultFormula2 = null;
      alert('T2 must be greater than 0');
    }
  }

  calculateThirdFormula() {
    if (this.m3 > 1 && this.N3 > 0) {
      this.resultFormula3 = 100 * (this.Nr3 - (this.Nf3 / (this.m3 - 1))) / this.N3;
    } else {
      this.resultFormula3 = null;
      alert('m3 must be greater than 1 and N3 must be greater than 0');
    }
  }

  clearFirstFormula() {
    this.n1 = 0;
    this.Nr1 = 0;
    this.Nb1 = 0;
    this.resultFormula1 = null;
  }

  clearSecondFormula() {
    this.Ru2 = 0;
    this.Rl2 = 0;
    this.T2 = 0;
    this.resultFormula2 = null;
  }

  clearThirdFormula() {
    this.Nr3 = 0;
    this.Nf3 = 0;
    this.m3 = 0;
    this.N3 = 0;
    this.resultFormula3 = null;
  }

}
