/*
Написать объект ToDoList, который хранит в себе задачи { ‘title’: ‘Помыть посуду’, id: 1, priority: 1 } и имеет методы:

Добавить задачу
Удалить задачу по id
Обновить имя или приоритет по Id
Отсортировать задачи по приоритету

Добавить полную валидацию данных через функцию!
*/

function updateID(tasks) {
    for (const [index, task] of tasks.entries()) {
        task.id = index + 1;
    }

    return tasks;
}

const findTask = (tasks, id) => tasks.find(task => task.id === id);

const toDoList = {
    tasks: [],
    addTask: function (title, priority) {
        if (typeof title !== 'string' || typeof priority !== 'number') {
            throw new Error("Переданы неверные аргументы!");
        }

        this.tasks.push({title, id: this.tasks.length + 1, priority});
    },
    deleteTask: function (id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            throw new Error("ID не найден!");
        }
        this.tasks.splice(index, 1);
        this.tasks = updateID(this.tasks);
    },
    updateTask: function (id, title, priority) {
        const task = findTask(this.tasks, id);

        if (typeof task === 'undefined') {
            throw new Error("Задание не найдено!");
        }

        if (title.trim() !== "" && title.length !== 0 && typeof title === 'string') {
            task.title = title;
        }

        if ((priority >= 1 && priority <= 999) && priority && typeof priority === 'number') {
            task.priority = priority;
        }
    },
    sortTasks: function () {
        this.tasks.sort((a, b) => b.priority - a.priority);
    }
}

toDoList.addTask('Помыть посуду', 1);
toDoList.addTask('Постирать вещи', 57);
toDoList.addTask('Пропылесосить', 50);
toDoList.addTask('Пропылесосить', 15);
toDoList.addTask('Пропылесосить', 35);
toDoList.addTask('Пропылесосить', 30);
toDoList.sortTasks();
toDoList.deleteTask(5);
toDoList.addTask('Постирать вещи', 157);
toDoList.addTask('Постирать вещи', 457);
toDoList.deleteTask(6);

toDoList.sortTasks();
console.log(toDoList.tasks);

toDoList.deleteTask(4);
console.log(toDoList.tasks);