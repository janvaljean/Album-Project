import React from 'react'
import { useFetchAlbumsQuery } from '../store';

const AlbumList = ({user}) => {
   const { data, isFetching, isError } = useFetchAlbumsQuery(user);

  return (
    <div>
      {user.name} Album
    </div>
  )
}

export default AlbumList
