import React from 'react'

type Props = {}

const page = ({ params }: { params: { id: number } }) => {
    const { id } = params
    return (
        <div>id = {id}</div>
    )
}

export default page