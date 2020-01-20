class ToDo {
  constructor(topic, priority) {
    ToDo.count++;
    this.topic = topic;
    this.priority = priority;
    this.id = ToDo.count;
  }

  get topic() {
    return this._topic;
  }

  get priority() {
    return this._priority;
  }

  set topic(newTopic) {
    if (typeof newTopic === 'string') {
      this._topic = newTopic;
    } else {
      throw new TypeError('topic must be string');
    }
  }

  set priority(newPriority) {
    if (typeof newPriority === 'number' && Math.floor(newPriority) === newPriority && newPriority >= 1 && newPriority <= 10) {
      this._priority = newPriority;
    } else {
      throw new TypeError('priority must be number between 1 and 10');
    }
  }

}

const tasks = () => {
  return ['Buy milk', 'Learn to code', 'Buy christmas gifts', 'Pay bills', 'Relax', 'Remember to eat', 'Remember to drink'];
};

const createToDoList = tasksList => {
  // starts automatically to give id numbers from 1 in each list created:
  ToDo.count = 0;
  const toDoList = new Set();

  for (const topic of tasksList) {
    const randomPriority = Math.floor(Math.random() * 10 + 1);
    const newToDoItem = new ToDo(topic, randomPriority);
    toDoList.add(newToDoItem);
  }

  return toDoList;
}; // sort by priority, lowest priority first


const sortList = set => {
  const list = Array.from(set);
  list.sort(function (a, b) {
    return a.priority - b.priority;
  });
  const sortedSet = new Set(list);
  return sortedSet;
};

const createHtmlList = setOfItems => {
  let htmlList = '<ul class="list-group">';

  for (const item of setOfItems) {
    let priorityColor = '';

    if (item.priority <= 3) {
      priorityColor = 'list-group-item-danger';
    } else if (item.priority <= 6) {
      priorityColor = 'list-group-item-success';
    } else {
      priorityColor = 'list-group-item-info';
    }

    htmlList = htmlList + '<li class="list-group-item d-flex justify-content-between align-items-center ' + priorityColor + '">' + item.id + ' - ' + item.topic + '<span class="badge badge-primary badge-pill">' + item.priority + '</span></li>';
  }

  htmlList = htmlList + '</ul>';
  return htmlList;
};

const main = () => {
  const toDoList = createToDoList(tasks());
  const sortedToDoList = sortList(toDoList);
  const htmlCode = createHtmlList(sortedToDoList);
  document.write(htmlCode);
};

main();