import { useState } from "react"

function CharacterCounter(){
    const[character, setCharacter] = useState("")

    const handleCharacter = (event) => {
        setCharacter(event.target.value)
        
    }




    return(
<div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-br from-yellow-100 to-red-100 border-4 border-yellow-500 rounded-3xl shadow-2xl space-y-4 font-bold font-sans">
      <h1 className="text-3xl text-center text-red-700 ">🎬 Blockbuster Dialogue Box 🎤</h1>
      
      <textarea
        value={character}
        onChange={handleCharacter}
        cols="30"
        rows="8"
        placeholder="Type your filmy dialogue here..."
        maxLength={150}
        className="w-full p-4 text-lg border-[2px] border-red-500 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-white shadow-inner"
      />

      <p className="text-right text-red-800 text-lg tracking-wide">
        🎟️ Characters: {character.length}/150
      </p>
    </div>
    )
}

export default CharacterCounter