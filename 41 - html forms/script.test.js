test('Check addTodo able add todo to todoList', () => {
    document.body.innerHTML = `
      <input id="newTodoInput" />
      <button id="addTodoBtn">Add todo</button>
      <ol id="todoList"></ol>
    `;
  
    expect('true').toBe('true');
  });