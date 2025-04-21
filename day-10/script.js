
async function getTodosFromAPI() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json(); 
    showTheSummary(todos); 
  }
  
  
  function calculateData(todos) {
    const totalTodos = todos.length;
  
  
    const completed = todos.filter(todo => todo.completed);
    const completedCount = completed.length;
  
    
    const percent = ((completedCount / totalTodos) * 100).toFixed(2);
  
    const userTodoCount = {};
    todos.forEach(todo => {
      const user = todo.userId;
      if (userTodoCount[user]) {
        userTodoCount[user]++;
      } else {
        userTodoCount[user] = 1;
      }
    });
  
   
    let topUser = null;
    let max = 0;
    for (let user in userTodoCount) {
      if (userTodoCount[user] > max) {
        max = userTodoCount[user];
        topUser = user;
      }
    }
  
  
    const groupedData = {
      Completed: completedCount,
      Incomplete: totalTodos - completedCount
    };
  
    
    return {
      totalTodos,
      completedCount,
      percent,
      topUser,
      max,
      groupedData
    };
  }
  

  function showTheSummary(todos) {
    const result = calculateData(todos);
  
    const content = `
      <p>✅ Completed: ${result.completedCount} / ${result.totalTodos} (${result.percent}%)</p>
      <p>🏆 Top User: User ${result.topUser} (${result.max} tasks)</p>
      <p>📦 Grouped:</p>
      <ul>
        <li>Completed: ${result.groupedData.Completed}</li>
        <li>Incomplete: ${result.groupedData.Incomplete}</li>
      </ul>
    `;
  
    document.getElementById('summary').innerHTML = content;
  }
  
  
  getTodosFromAPI();
  