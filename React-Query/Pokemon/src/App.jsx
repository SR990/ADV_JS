import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Pokemon from './Pokemon';
function App(){
  const queryClient = new QueryClient();
  return(
   <QueryClientProvider client ={queryClient} >
    <Pokemon />


  
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
   </QueryClientProvider>
  )
}

export default App;