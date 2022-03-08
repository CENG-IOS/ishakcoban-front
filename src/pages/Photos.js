import React from 'react'
import { FilterSection } from '../components/FilterSection'
const Photos = () => {

    return (
        <div className='mt-5 mb-5'>
            <FilterSection> <input
            className={"filterSectionInputForPhoto mt-5" }
            placeholder={"Çizim ara..."}
            /*onChange={inputHandler}*/
          ></input></FilterSection>

        </div>
    )
}


export default Photos;
