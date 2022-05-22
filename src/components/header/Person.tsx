import Link from 'next/link'
import React from 'react'
import apiConfig from '../../../pages/api/apiConfig'
import { PersonType } from '../../type/type'

export const Person: React.FC<{ person: PersonType; onSearch: Function }> = ({ person, onSearch }) => {
  return (
    <div className="group mx-2 my-6 hover:cursor-pointer">
      <div className="flex gap-4">
        <div className=" relative basis-2/12" onClick={() => onSearch()}>
          <Link href={`/person/${person.id}`}>
            <div className="absolute top-0 left-0 hidden h-full w-full bg-blackOver group-hover:block"></div>
          </Link>
          <img src={apiConfig.orinalImage(person.profile_path)} alt={person.name} />
        </div>
        <div className="flex basis-10/12 flex-col space-y-1 group-hover:opacity-70">
          <p className="">{person.name}</p>
          <p className="opacity-70">{person.popularity}</p>
        </div>
      </div>
    </div>
  )
}
