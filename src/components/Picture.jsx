import React from 'react'
import { useDrag } from 'react-dnd'


const Picture = ({ url, id, type, placeholder}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item:{id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: 'image',
    //     collect: (monitor) => ({
    //       isDragging: !!monitor.isDragging()
    //     })
    //   }))

    return (
        <div ref={drag} className='m-2 w-2/3'>
            {/* <img src={url} alt="" className="w-44 m-4 border border-2" /> */}
            {/* <input type={type}  className='mx-4 h-8 border px-2 text-black bg-red-100 rounded-sm' placeholder={placeholder}/> */}
            {url}
        </div>
    )
}

export default Picture