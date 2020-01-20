class Student {
  constructor (fname, lname, idNumber) {
    this.firstname = fname
    this.lastname = lname
    this.idNumber = idNumber
  }

  set firstname (newFirstName) {
    if (isValidName(newFirstName)) {
      this._fname = newFirstName
    } else {
      throw new TypeError('Invalid firstname')
    }
  }

  set lastname (newLastName) {
    if (isValidName(newLastName)) {
      this._lname = newLastName
    } else {
      throw new TypeError('Invalid firstname')
    }
  }

  set idNumber (newIdNumber) {
    if (newIdNumber > 1) {
      this._idNumber = newIdNumber
    } else {
      throw new TypeError('Invalid ID number')
    }
  }

  get firstname () {
    return this._fname
  }

  get lastname () {
    return this._lname
  }

  get idNumber () {
    return this._idNumber
  }
}
function isValidName (name) {
  if ((typeof name === 'string') && (name.length > 1)) {
    return true
  } else {
    return false
  }
}

module.exports = Student
