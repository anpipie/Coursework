class ToDo {
  constructor (topic, priority) {
    this.topic = topic
    this.priority = priority
    this.id = idCounter()
  }

  set topic (topic) {
    const minTopicLength = 1
    if (topic.length < minTopicLength) {
      throw new TypeError('Topic too short. Topic must be at least 1 character.')
    } else {
      this._topic = topic
    }
  }

  set priority (priority) {
    const minPriority = 1
    const maxPriority = 10
    if (priority < minPriority || priority > maxPriority) {
      throw new TypeError('Invalid priority. Priority must be between 1 and 10.')
    } else {
      this._priority = priority
    }
  }

  get topic () {
    return this._topic
  }

  get priority () {
    return this._priority
  }
}

const idCounter = (function () {
  var total = 0
  return function () {
    total++
    return total
  }
})()

const main = () => {
  const itemDb = []
  const sortStatus = { id: 1, priority: 1, topic: 1 } // Default setting: 1 = ascending, -1 = descending
  const columns = 4
  const thTitles = { id: '#', priority: 'Priority', topic: 'Topic', action: 'Action' }
  const thIds = ['id', 'priority', 'topic', 'action']

  const sortTable = function (criteria) {
    const sortOrder = sortStatus[criteria]
    itemDb.sort(compareValues(criteria, sortOrder))
    removeTable()
    createTable()
    sortStatus[criteria] = sortStatus[criteria] * -1
  }

  function compareValues (criteria, order) {
    const key = criteria.toLowerCase()
    return function compare (a, b) {
      let result = 0
      let valueA = a[key]
      let valueB = b[key]
      if (typeof valueA === 'string') {
        valueA = valueA.toUpperCase()
      }
      if (typeof valueB === 'string') {
        valueB = valueB.toUpperCase()
      }
      if (valueA > valueB) {
        result = 1
      } else if (valueA < valueB) {
        result = -1
      }
      return result * order
    }
  }

  const createTh = function (id) {
    const newTh = document.createElement('th')
    newTh.textContent = thTitles[id]
    newTh.setAttribute('id', id)
    if (id !== 'action') {
      newTh.style.color = 'blue'
      newTh.addEventListener('click', () => sortTable(id))
    }
    return newTh
  }

  const createItemTd = function (content) {
    const newTd = document.createElement('td')
    if (typeof content !== 'undefined') {
      newTd.innerHTML = content
    }
    return newTd
  }

  function createRow (item) {
    const newRow = document.createElement('tr')
    const idTd = createItemTd(item.id)
    const priorityTd = createItemTd(item.priority)
    const topicTd = createItemTd(item.topic)
    const actionTd = document.createElement('td')
    const deleteBtn = createDelBtn(item)
    newRow.appendChild(idTd)
    newRow.appendChild(priorityTd)
    newRow.appendChild(topicTd)
    newRow.appendChild(actionTd)
    actionTd.appendChild(deleteBtn)
    return newRow
  }

  const createInput = function (name, type) {
    const newInput = document.createElement('input')
    newInput.id = name + '-input'
    newInput.placeholder = name
    newInput.class = 'form-control'
    newInput.type = type
    return newInput
  }

  const createH1 = function () {
    const body = document.getElementsByTagName('body')[0]
    const h1 = document.createElement('h1')
    h1.textContent = 'To Do!'
    body.appendChild(h1)
  }

  const createTable = function () {
    const body = document.getElementsByTagName('body')[0]
    const table = document.createElement('table')
    const headerRow = document.createElement('tr')
    const thElements = []
    const inputRow = document.createElement('tr')
    const tdElementsForInputRow = []

    // add table
    body.appendChild(table)
    table.setAttribute('class', 'table')

    // add header row and tds
    table.appendChild(headerRow)
    thIds.forEach((id) => thElements.push(createTh(id)))
    thElements.forEach((element) => headerRow.appendChild(element))

    // add todo item rows
    itemDb.forEach((item) => { table.appendChild(createRow(item)) })

    // add input row and tds
    table.appendChild(inputRow)
    for (let i = 0; i < columns; i++) {
      const newTdElement = createItemTd()
      tdElementsForInputRow.push(newTdElement)
    }

    // create and add content (input elements and add-button) for input row tds
    const priorityInput = createInput('priority', 'number')
    const topicInput = createInput('topic', 'text')
    const addBtn = createAddBtn()

    tdElementsForInputRow[0].innerHTML = ''
    tdElementsForInputRow[1].appendChild(priorityInput)
    tdElementsForInputRow[2].appendChild(topicInput)
    tdElementsForInputRow[3].appendChild(addBtn)

    for (let i = 0; i < tdElementsForInputRow.length; i++) {
      inputRow.appendChild(tdElementsForInputRow[i])
    }
  }

  const deleteItem = function (button) {
    const removeId = button.getAttribute('id') * 1
    const itemToBeDeleted = button.parentElement.parentElement
    // delete row
    itemToBeDeleted.parentElement.removeChild(itemToBeDeleted)
    // remove from db
    for (let i = 0; i < itemDb.length; i++) {
      if (itemDb[i].id === removeId) {
        itemDb.splice(i, 1)
      }
    }
  }

  const createDelBtn = function (item) {
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'delete'
    deleteBtn.setAttribute('id', item.id)
    deleteBtn.setAttribute('class', 'btn btn-danger')
    deleteBtn.addEventListener('click', () => deleteItem(deleteBtn))
    return deleteBtn
  }

  const createAddBtn = function () {
    const addBtn = document.createElement('button')
    addBtn.innerHTML = 'add'
    addBtn.setAttribute('class', 'btn btn-primary')
    addBtn.addEventListener('click', addItem)
    return addBtn
  }

  const removeTable = function () {
    const body = document.getElementsByTagName('body')[0]
    const table = document.getElementsByTagName('table')[0]
    body.removeChild(table)
  }

  const addItem = function () {
    const topic = document.getElementById('topic-input').value
    const priority = document.getElementById('priority-input').value
    try {
      const newItem = new ToDo(topic, priority)
      itemDb.push(newItem)
    } catch (err) {
      alert(err)
    }
    removeTable()
    createTable()
  }
  createH1()
  createTable()
}

window.addEventListener('load', () => {
  main()
})
