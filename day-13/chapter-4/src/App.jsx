import Student from "./Student"


function App(){
  return (
    <>
    <Student name='bob' age='22' isStudent={true} />
    <Student name='jack' age={32} isStudent={false} />
    <Student name='king' age={24} isStudent={true} />
    <Student name='lion' age={48} isStudent={false } />
    <Student />
    
    </>
    
  )


}

export default App