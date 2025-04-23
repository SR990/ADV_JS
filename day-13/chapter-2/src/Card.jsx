import ProfilePic from "./assets/Spyder.jpg"
function Card(){
    return(
        <div className="card">
            <img className="cardImage" src={ProfilePic} alt="ProfileImage"></img>
            <h1 className="card-text1">Bro Code</h1>
            <p className="card-text2">I make silly things</p>
        </div>

    )
}

export default Card