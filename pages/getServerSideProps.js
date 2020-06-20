import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function GSSP() {
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
      <p>This page has a defined getServerSideProps function.</p>
      <p><Link href="/basic?ssr=false&link=true"><a>Click here to go back using the router (next/link).</a></Link></p>
      <p><a href="/basic?ssr=false&link=false">Click here to go back using a regular &lt;a&gt; tag</a></p>
      <p>Below is a log of changes to the `router.query` object:</p>
      {log.map((entry, idx) => (
        <pre key={idx}>{JSON.stringify(entry, null, 4)}</pre>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
