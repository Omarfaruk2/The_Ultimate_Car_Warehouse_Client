import React, { useCallback, useState } from 'react'
import "./Blog.css"
import { Icon } from '@iconify/react'

const Blog = () => {


    const [toggleHeart, setToggleHeart] = useState(false)

    const changeColor = useCallback(() => {
        setToggleHeart(!toggleHeart)
    }, [toggleHeart])

    return (
        <div>
            <h2 className="text-center">
                Hello boy
            </h2>
            <Icon
                className={
                    toggleHeart ? 'heart active' : 'heart'
                } onClick={changeColor}

                icon="ant-design:heart-filled" />
        </div>
    )
}

export default Blog