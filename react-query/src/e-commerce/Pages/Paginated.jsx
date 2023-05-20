import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Paginated = () => {


  const {data} = useQuery({
    queryKey:['products']
  })

  return (
    <div>Paginated</div>
  )
}

export default Paginated