import React, { useRef, useState,useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import UserCard from '../../components/userCard/UserCard'
import authenticate from '../../hoc/authentication'


const userData = [
    {
        name:"Ankit Rawat",
        
    },
    {
        name:"Janani Palani",
        
    },
    {
        name:"Varun Agarwal",
        
    },
    {
        name:"Manish Soni",
        
    },
    {
        name:"Santosh S",
        
    },



]

function Recruitment() {
    const [allCandidates,setAllCandidates] = useState(userData)
    const [selectedCandidates,setSelectedCandidates] = useState([])
    const mainContainerRef = useRef()
    useEffect(() => {
        console.log(mainContainerRef)
    }, [])
    const onDragEnd = ({source,destination}) =>{
        if(destination === null) return;
        console.log(source,destination)
        let sourceArr;
        let destinationArr;
        if(source.droppableId === "UNSELECTED"){
            sourceArr = [...allCandidates]
            destinationArr=[...selectedCandidates]
            const [removed] = sourceArr.splice(source.index,1)
            destinationArr.splice(destination.index,0,removed)
    
            setAllCandidates(sourceArr)
            setSelectedCandidates(destinationArr)
        }
        
    }
    return (
        <div className="recruitment" ref={mainContainerRef} >
            <DragDropContext onDragEnd={onDragEnd} >
                <Droppable droppableId="UNSELECTED">
                {(provided, snapshot) => (
                    <div
                    id="unselected-container"
                    className="droppable-container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <h3 style={{textAlign:"center"}}>All Candidates</h3>
                        {allCandidates.map((candidate,index) =>(
                            <UserCard name={candidate.name} key={index} draggableId={`abc_${index}`} index={index}/>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
                </Droppable>
                <Droppable droppableId="SELECTED">
                {(provided, snapshot) => (
                    <div
                        id="selected-container"
                        className="droppable-container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <h3 style={{textAlign:"center"}}>Selected Candidates</h3>
                        {selectedCandidates.map((candidate,index) =>(
                            <UserCard name={candidate.name} key={index} draggableId={`def_${index}`} index={index}/>
                        ))}
                        {provided.placeholder}
                    </div>)}

                </Droppable>
            </DragDropContext>
        </div>
    )
}
export default authenticate(Recruitment)