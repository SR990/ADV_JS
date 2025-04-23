function Food(){
    const Food1 = 'Apple';
    const Food2 = 'banana';

    return(
        <ul>
            <li>Orange</li>
            <li>{Food1}</li>
            <li>{Food2.toUpperCase()}</li>
        </ul>

    )

}

export default Food