import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Basic() {
  const [log, setLog] = useState([])
  const router = useRouter()

  useEffect(() => {
    setLog(log.concat({
      timestamp: Date.now(),
      query: router.query
    }))
  }, [router])

  return (
    <div>
      <Link href="/getServerSideProps?ssr=true"><a>Try a page with a defined getServerSideProps function.</a></Link>
      <p><a href="/short-circuit">Try a page that is supposed to short-circuit when there are query params.</a></p>
      <p>If you came here using the router (next/link), try refreshing manually.</p>
      <p>Below is a log of changes to the `router.query` object:</p>
      {log.map((entry, idx) => (
        <pre key={idx}>{JSON.stringify(entry, null, 4)}</pre>
      ))}
    </div>
  )
}
