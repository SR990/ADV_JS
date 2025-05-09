import {useQuery} from '@tanstack/react-query'

function Pokemon(){
   const {isLoading, isError, error, data} = useQuery({
        queryKey:['pokemonList'],
        queryFn: async() => await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then((response) => response.json())
            
    }
    )
    if (isLoading) {
        return <h2>Loading</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    return(
        <>
        <h1>Famous Cartoon Characters</h1>
        <ul>
            {data.results.map((poke) => (
                <li key={poke.name}>{poke.name}</li>
            ))}
        </ul>
        </>
    )
}

export default Pokemon;
