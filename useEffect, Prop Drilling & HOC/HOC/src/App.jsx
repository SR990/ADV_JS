import DataDisplay from './DataDisplay';
import withDataFetching from './withDataFetching';
import withSimpleLogging from './withSimpleLogging';
import SimpleCounter from './SimpleCounter';

const url = 'https://jsonplaceholder.typicode.com/posts';

const EnhancedDataDisplay = withDataFetching(DataDisplay, url);


const LoggedCounter = withSimpleLogging(SimpleCounter);

function App() {
  return (
    <>
     <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">App Component</h1>
      <div className="max-w-3xl mx-auto bg-white p-4 rounded shadow">
        <EnhancedDataDisplay />
      </div>
    </div>

    <div className="App">
      <LoggedCounter />
    </div>
    </>
   
  );
}

export default App;
