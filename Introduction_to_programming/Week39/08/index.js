/* Tehtävä 8. Tee uusi luokka Fraction, jossa on kaksi attribuuttia: _numerator ja _denominator.
Toteuta luokkaan rakentaja, getterit ja setterit, tulostusmetodi print, joka tulostaa murtoluvun muodossa:
osoittaja / nimittäjä. Toteuta luokkan myös metodi: simplify, joka sieventää murtoluvun. Esim 4/8 on sievennettynä 1/2.

Luo luokasta kaksi oliota, tulosta ne, sievennä ne ja tulosta uudelleen.
Testaa myös, että getterit ja setterit toimivat.

Voit hyödyntää sievennyksessä suurinta yhteistä tekijää (GCD) */

class Fraction {
  constructor (numerator, denominator) {
    this._numerator = numerator // osoittaja
    this._denominator = denominator // nimittäjä
  }

  get numerator () {
    return this._numerator
  }

  set numerator (numerator) {
    this._numerator = numerator
  }

  get denominator () {
    return this._denominator
  }

  set denominator (denominator) {
    this._denominator = denominator
  }

  print () {
    console.log(this._numerator + '/' + this._denominator)
  }

  simplify () {
    const gcdValue = gcd(this._numerator, this._denominator)
    this._numerator = this._numerator / gcdValue
    this._denominator = this._denominator / gcdValue

    function gcd (a, b) {
      while (b !== 0) {
        const t = b
        b = a % b
        a = t
      }
      return a
    }
  }
}
// tehdään luokasta 2 oliota
const eka = new Fraction(4, 8)
const toka = new Fraction(55, 165)
// tulostetaan
eka.print()
toka.print()
// sievennetään
eka.simplify()
toka.simplify()
// tulostetaan
eka.print()
toka.print()
// testataan getterit ja setterit
eka.denominator = 1
eka.numerator = 2
eka.print()
console.log(eka.numerator)
console.log(eka.denominator)
