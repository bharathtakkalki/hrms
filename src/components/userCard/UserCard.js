import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Avatar from '../avatar/Avatar'

export default function UserCard({key, draggableId, index, name = "Ankit Rawat", designation = "Full Stack Developer", joiningDate = "1/03/2021" }) {
    return (
        <Draggable key={key} index={index} draggableId={draggableId}>
            {(provided, snapshot) => (
                <div className="user-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Avatar />
                    <div className="user-details">
                        <label>{name}</label>
                        <p>{designation}</p>
                        <p>{joiningDate}</p>
                    </div>
                </div>
            )}
        </Draggable>
    )
}
