import List from "./List"
import UserGreeting from "./UserGreeting"
import ColorPicker from "./ColorPicker";
function App(){
  const fruits = [
    { id: 3, name: 'grapes', calories: 67 },
    { id: 1, name: 'apple', calories: 95 },
    { id: 5, name: 'watermelon', calories: 30 },
    { id: 2, name: 'banana', calories: 85 },
    { id: 4, name: 'kiwi', calories: 42 }];

    const vegetables = [
      { id: 6, name: 'carrot', calories: 41 },
      { id: 7, name: 'broccoli', calories: 55 },
      { id: 8, name: 'spinach', calories: 23 },
      { id: 9, name: 'potato', calories: 77 },
      { id: 10, name: 'tomato', calories: 18 }
    ];
    

  return (
    <>
    {/* <UserGreeting isLoggedIn={false} userName='samson' /> */}
    {/* {fruits.length > 0 && <List items={fruits} category="Fruits" />}
    {vegetables.length > 0 &&<List items={vegetables} category="Vegetables" />} */}
    <ColorPicker />
    </>
  )
}

export default App