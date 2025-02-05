'use client'

import { useQuery } from '@tanstack/react-query'

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error!</div>

  return (
    <ul>
      {data.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}