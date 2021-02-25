import React from 'react'
import authenticate from '../../hoc/authentication'

function Recruitment() {
    return (
        <div>
            This is Recruitment
        </div>
    )
}
export default authenticate(Recruitment)