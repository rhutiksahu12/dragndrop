import React from 'react'
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import Picture from './Picture'
import Input from './Input'
import Checkbox from './Checkbox'

const FormElements = [
    // {
    //     id: 2,
    //     url: "https://images.freeimages.com/images/large-previews/d41/bear-combat-2-1332988.jpg"
    // },
    // {
    //     id: 1,
    //     url: "https://media.istockphoto.com/id/1189131891/nl/foto/een-schattige-kleine-bruine-beer-cub-poseren-in-de-weide.jpg?s=2048x2048&w=is&k=20&c=QzddREiJYpm-ufeZDWnLY_iNlfj57LSqgDWzTfGJP-8="
    // },
    {
        id: 3,
        title: 'Checkbox',
        url: <Checkbox />,
    },
    {
        id: 4,
        title: 'Text Input',
        url: <Input />
    }

]





function DragNDrop() {

    const [board, setBoard] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item) =>
            addImageToBoard(item.id)
        ,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })

    }))



    const addImageToBoard = (id) => {
        const pictureList = FormElements.filter((picture) => id === picture.id);
        setBoard((board) => [...board, pictureList[0]])
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const newForm = new FormData(e.target);
        const newFormObj = {};
        newForm.forEach((value, key) => (newFormObj[key] = value));
        console.log(newFormObj)


    }


    return (
        <>
            <div className='flex w-full h-full'>

                <form onSubmit={handleSubmit} ref={drop} className='w-3/4 bg-teal-900'>
                    {board.map((picture) => {
                        return <Picture type={picture.type} url={picture.url} id={picture.id} />
                    })}
                    <div>
                        <button className='bg'>Submit</button>
                    </div>
                </form>

                {/* elements */}

                <div className=' w-1/4'>
                    <div className=''>
                        {FormElements.map((picture) => {
                            return <Picture url={picture.url} id={picture.id} type={picture.type} placeholder={picture.placeholder} />
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DragNDrop