import PropTypes from "prop-types"

function List(props){
    // const fruits = [
    //     { id: 3, name: 'grapes', calories: 67 },
    //     { id: 1, name: 'apple', calories: 95 },
    //     { id: 5, name: 'watermelon', calories: 30 },
    //     { id: 2, name: 'banana', calories: 85 },
    //     { id: 4, name: 'kiwi', calories: 42 }
    //   ];

    //   fruits.sort((a,b) => a.name.localeCompare(b.name)) // sort Alphabetical order
        //  fruits.sort((a,b)=> b.name.localeCompare(a.name)) //sort reverse
        // fruits.sort((a,b) => a.calories - b.calories) //sort numerical
        // fruits.sort((a,b) => b.calories - a.calories) //numbers reverse

     const listItem = props.items   
     const cat = props.category
     
     const itemsList = listItem.map(item => 
                            <li key={item.id}>{item.name} : {item.calories}</li>)
    


                            return (
                                <div className="container">
                                  <h1 className="market-title">🥕 {cat} Market</h1>
                                  <ul className="veggie-list">
                                    {itemsList}
                                  </ul>
                                </div>
                              )


}

List.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  };
List.defaultProps = {
    items :"Stock completed",

}
export default List