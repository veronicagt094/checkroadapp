import {ChakraProvider} from '@chakra-ui/react'
import '../styles/globals.css'
import {ToastContainer} from '../utils/toast'

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ChakraProvider>
  )
}

export default MyApp
