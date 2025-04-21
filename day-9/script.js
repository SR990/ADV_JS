
async function fetchTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();

    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const percentDone = ((completed / total) * 100).toFixed(2);

    const userCount = todos.reduce((acc, t) => {
      acc[t.userId] = (acc[t.userId] || 0) + 1;
      return acc;
    }, {});
    const maxUserId = Object.keys(userCount).reduce((a, b) =>
      userCount[a] > userCount[b] ? a : b
    );

    const grouped = todos.reduce((acc, t) => {
      const key = t.completed ? 'Completed' : 'Incomplete';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

 
    document.getElementById("summary").innerHTML = `
      <p>✅ Completed: ${completed} / ${total} (${percentDone}%)</p>
      <p>🏆 User with most todos: User ID ${maxUserId} (${userCount[maxUserId]} todos)</p>
      <p>📦 Grouped Todos:</p>
      <ul>
        <li>Completed: ${grouped.Completed}</li>
        <li>Incomplete: ${grouped.Incomplete}</li>
      </ul>
    `;
  }

  fetchTodos();
