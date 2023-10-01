import { useEffect, useState } from 'react'
import { auth } from '../apis/auth'
import { MockList } from '../types'

export default function MockPage() {
  const [list, setList] = useState<MockList>([])

  useEffect(() => {
    const fetchMockData = async () => {
      const list = (await auth()).data
      setList(list)
    }

    try {
      fetchMockData()
    } catch (e) {
      console.error(e)
    }
  }, [])
  return (
    <div>
      <h1 className="bold text-3xl mb-4">MOCK DATA LIST</h1>
      <ul>
        {list.map(({ id, name }) => (
          <li key={`${id}-${name}`} className="text-center">
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}
