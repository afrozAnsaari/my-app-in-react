import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams();
    return (
        <div>
            I am a user {params.username}
        </div>
    )
}

export default Profile

// export default function Profile() {
//     return (
//         <div>
//             I am a Profile
//             User={username}
//         </div>
//     )
// }
