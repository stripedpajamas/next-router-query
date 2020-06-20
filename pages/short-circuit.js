import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ShortCircuit() {
  const [status, setStatus] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router && Object.keys(router.query).length) {
      setStatus(JSON.stringify(router.query, null, 4))
    } else {
      setStatus(JSON.stringify({ error: 'No query string!' }, null, 4))
    }
  }, [router])

  return (
    <div>
      <p>This page is designed to use the query params in some way, and to short circuit if no query params are present.</p>
      <pre>{status}</pre>
      <p><Link href="/short-circuit?hello=world"><a>Try with query params through next/link.</a></Link></p>
      <p><a href="/short-circuit?hello=world">Try with query params via an &lt;a&gt; tag.</a></p>
      <p><Link href="/short-circuit"><a>Try without query params through next/link.</a></Link></p>
      <p><a href="/short-circuit">Try without query params via an &lt;a&gt; tag.</a></p>
      <p><Link href="/basic?ssr=false&link=true"><a>Go back to basic page through next/link.</a></Link></p>
    </div>
  )
}
