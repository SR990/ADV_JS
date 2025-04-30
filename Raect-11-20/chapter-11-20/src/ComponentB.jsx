import ComponentC from "./ComponentC"
function ComponentB(){
    return(
        <div className="box">
            ComponentB
            <br />
            <ComponentC />
        </div>
    )
}

export default ComponentB