import React, { useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import useFetch from './useFetch'

const App = () => {
  console.log( "I ran" );
  const { error, isPending, data: tours } = useFetch('https://course-api.com/react-tours-project');
  
  return(
    <>
      { error && <main> { error } </main> }
      { isPending && <main> <Loading /> </main> }
      { tours && <main> <section className="container"> { console.log( tours ) } <Tours tours={ tours } /> </section> </main> }
    </>
  );
}

export default App
