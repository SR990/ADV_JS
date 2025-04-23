import img from './assets/Spyder.jpg'

function ProfilePicture(){
    const handleClick = (e) => e.target.style.display='none'

    return(
        <img onClick={(e)=>handleClick(e)} className='img1' src={img} alt="images"></img>
        


    )
}

export default ProfilePicture