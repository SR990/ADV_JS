
async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
  
    showSummary(todos);
  }
  
  
  function calculateSummary(todos) {
    const total = todos.length;
  
    
    const completedTodos = todos.filter(todo => todo.completed);
    const completedCount = completedTodos.length;
    const percentCompleted = ((completedCount / total) * 100).toFixed(2);
  
    
    const todosPerUser = {};
    todos.forEach(todo => {
      const userId = todo.userId;
      if (todosPerUser[userId]) {
        todosPerUser[userId]++;
      } else {
        todosPerUser[userId] = 1;
      }
    });
  
  
    let maxUserId = null;
    let maxCount = 0;
    for (let userId in todosPerUser) {
      if (todosPerUser[userId] > maxCount) {
        maxCount = todosPerUser[userId];
        maxUserId = userId;
      }
    }
  
    
    const grouped = {
      Completed: completedTodos.length,
      Incomplete: total - completedTodos.length
    };
  
    return {
      total,
      completedCount,
      percentCompleted,
      maxUserId,
      maxCount,
      grouped
    };
  }
  
  
  function showSummary(todos) {
    const summary = calculateSummary(todos);
  
    const html = `
      <p>✅ Completed: ${summary.completedCount} / ${summary.total} (${summary.percentCompleted}%)</p>
      <p>🏆 User with most todos: User ID ${summary.maxUserId} (${summary.maxCount} todos)</p>
      <p>📦 Grouped Todos:</p>
      <ul>
        <li>Completed: ${summary.grouped.Completed}</li>
        <li>Incomplete: ${summary.grouped.Incomplete}</li>
      </ul>
    `;
  
    document.getElementById('summary').innerHTML = html;
  }
  
 
  fetchTodos();
  