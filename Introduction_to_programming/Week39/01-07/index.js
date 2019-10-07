/* Tehtävä 1. Luo luokka Person, jossa on kaksi attribuuttia: _fname ja _lname. Tee luokkaan rakentaja (constructor), jossa asetetaan nämä arvot. Kokeile luoda olio tästä luokasta, ja tulosta konsoliin _fname ja _lname. Alaviivaa käytetään usein attribuutin edessä korostamaan sen attribuuttisuutta.

Rakentajan tehtävänä on alustaa olio haluttuun alkutilaan.  Sitä kutsutaan automaattisesti, kun luokasta luodaan olio ja sen nimi on aina: constructor. Luokkaan voidaan vapaasti kirjoittaa muitakin metodeja (methods).

Lisää luokkaan hello-metodi, joka tervehtii ja kertoo _fnamen ja _lnamen. Esim:
"Moro, olen Keke Kodaaja". Kutsu metodia olion kautta. Huomaa sulkeet metodin kutsun perässä. */

class Person {
  constructor (fname, lname) {
    this._fname = fname
    this._lname = lname
    console.log('Person rakentaja: ' + this._lname)
  }

  get fname () {
    return this._fname
  }

  // vaihtoehto, ei suositeltava:
  // getFname () {
  //   return this._fname
  // }

  get lname () {
    return this._lname
  }

  set fname (fname) {
    this._fname = fname
  }

  set lname (lname) {
    this._lname = lname
  }

  hello () {
    console.log('Moro, olen ' + this._fname + ' ' + this._lname)
  }

  static hi () {
    console.log('Moro!')
  }
}

class Student extends Person {
  constructor (fname, lname, number) {
    super(fname, lname)
    this._number = number
  }

  get number () {
    return this._number
  }

  set number (number) {
    this._number = number
  }
}

class Employee extends Person {
  constructor (fname, lname, salary) {
    super(fname, lname)
    this._salary = salary
    console.log('Employee constructor: ' + this._lname)
  }

  get salary () {
    return this._salary
  }

  set salary (salary) {
    this._salary = salary
  }

  hello () {
    super.hello()
    console.log('Palkkani on ' + this._salary)
  }
}

class Teacher extends Employee {
  constructor (fname, lname, salary, teachingField) {
    super(fname, lname, salary)
    this._teachingField = teachingField
  }

  get teachingField () {
    return this._teachingField
  }

  set teachingField (teachingField) {
    this._teachingField = teachingField
  }
}

const keke = new Person('Keke', 'Kodaaja')

keke.hello()
console.log(keke._lname) // JS ei kapseloi, eli tämä tulostaa nimen!!

/* Tehtävä 2. Lisää luokkaa staattinen metodi: hi(), joka tulostaa konsoliin: "Moro!" ja kutsu sitä.
Kokeile kutsua olion kautta. Miten käy?
Staattisia metodeita kutsutaan suoraan luokan nimen kautta. Tällöin ei tarvitse luoda luokasta oliota,
eikä olion kautta myöskään voi kutsua staattista metodia. */

// keke.hi() // Ei toimi.
Person.hi() // Toimii

/* Tehtävä 3. Lisää uusi luokka Employee, joka periytyy luokasta Person.
Lisää uuteen luokkaan attribuutti _salary ja alusta se rakentajassa. Luo Employee-tyyppinen olio. Miten käy?
Olio-ohjelmointiin liittyy usein myös periytymismekanismi (inheritance). Tällöin voidaan luoda esimerkiksi kategorioita
ja uudelleenkäyttää koodia. JS:n periytyminen tapahtuu varatulla sanalla extends.

Aliluokan rakentajassa pitää ensin kutsua kantaluokan rakentajaa varatulla sanalla super, ennen this-sanan käyttöä.
Kantaluokalle lähetetään kantaluokan osa oliosta, ja aliluokka alustaa oman osansa.
Muokkaa nyt tehtävää niin, että kantaluokalle annetaan fname ja lname. luo Employee-olio ja kutsu sen hello() metodia.
Mitä tulostuu? */

const maija = new Employee('Maija', 'Mainio', 3500)
maija.hello()

/* Tehtävä 4. Ylimääritellään  (overload/override) kantaluokan metodi hello() aliluokassa Employee.
Kutsu ensin kantaluokan metodia (jotta tulostuu etunimi ja sukunimi) ja tulosta lisäksi palkka.
Testaa toimintaa Employee-oliolla.

Aliluokka voi käyttää kantaluokan metodeja sellaisenaan, tai ne  voidaan ylimääritellä.
Voidaan tehdä myös versio, joka ensin kutsuu kantaluokan rutiinia ja sitten tekee joitain aliluokalle tyypillistä. */

// process.stdout.write() tulostaa samalle riville

/* Tehtävä 5. Lisää sekä kantaluokkaan Person että aliluokkaan Employee getteri ja setteri jotaista attribuuttia kohden.
Luo kaksi oliota, toinen Person-tyyppinen ja toinen Employee-tyyppinen. Kästtele attribuutteja näiden metodien kautta.
Mitä huomaat aliluokan gettereistä ja settereistä?

Luokat mahdollistavat myös gettereiden ja settereiden käytön. Nämä ovat metodeja, joilla voidaan käsitellä attribuutteja.
Getteri palauttaa attribuutin arvon, ja setteri asettaa sen haluttuun arvoon. Getterien ja setterien avulla voidaan
lisätä toiminnallisuutta attribuuttien käsittelyn yhteyteen. Getterit koodataan varatulla sanalla get, ja setterit
varatulla sanalla set. Esimerkiksi getteri attribuutille _fname  voi olla:
get fname()

ja setteri:

set fname(fname)

Huom: gettereitä tai settereitä kutsuttaessa olion kautta, ei käytetä funktion sulkeita. Muissa metodeissa käytetään. */

// console.log(keke.getFname())
console.log(keke.fname)
console.log(keke.lname)
keke.fname = 'Keijo'
keke.lname = 'Koodari'
keke.hello()
maija.salary = 4000
maija.hello()

/* Tehtävä 6. Käytä instanceof-operaattoria ja tutki, mitä luokkaa/luokkia Employee-luokasta tehty olio edustaa.
Voit esim. tehdä if-rakenteen, jossa tuostetaan olion nimi ja sen luokan nimi. Mitä huomaat aliluokasta? */

if (keke instanceof Person) {
  console.log('Keke on Person')
}

if (maija instanceof Person && maija instanceof Employee) {
  console.log('Maija on Person ja Employee')
}

/* Tehtävä 7. Lisää luokkahierarkiaan vielä luokat Student (erityisenä attribuuttina _number)
ja Teacher (erityisattribuuttina _teachingField) sekä rakentajat, getterit ja setterit.
Testaa toimintaa luomalla näistä luokista olioita ja kutsumalla gettereitä ja settereitä.
Millainen on periytymishierarkia? */

const olli = new Teacher('Oppinen', 'Olli', 3230, 'ojankaivuu')
const outi = new Student('Outi', 'Opintie', 12456)

olli.teachingField = 'matematiikka'
outi.number = 98765

console.log(outi.number)
console.log(olli.teachingField)
