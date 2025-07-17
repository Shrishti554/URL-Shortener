import HomePage from "./pages/HomePage"


const App = () => {
  // const [url, setUrl] = useState('')
  // const [shortUrl, setShortUrl] = useState('')
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState('')

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   if (!url) {
  //     setError('Please enter a URL')
  //     return
  //   }

  //   try {
  //     new URL(url)
  //   } catch {
  //     setError('Please enter a valid URL')
  //     return
  //   }

  //   setIsLoading(true)
  //   setError('')

  //   try {
  //     await new Promise(resolve => setTimeout(resolve, 1000))
  //     const mockShortUrl = `https://short.ly/${Math.random().toString(36).substring(2, 10)}`
  //     setShortUrl(mockShortUrl)
  //   } catch {
  //     setError('Failed to shorten URL. Please try again.')
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // const copyToClipboard = async () => {
  //   try {
  //     await navigator.clipboard.writeText(shortUrl)
  //   } catch (err) {
  //     console.error('Failed to copy to clipboard:', err)
  //   }
  // }

  // const resetForm = () => {
  //   setUrl('')
  //   setShortUrl('')
  //   setError('')
  // }

  return (
    <>
    <HomePage />
    </>
  )
  }

export default App