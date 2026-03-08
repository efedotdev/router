import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

function UserDetail() {
    const { id } = useParams();
    const location = useLocation();
    const [user, setUser] = useState(location.state)
    const [isError, setIsError] = useState(false)
    // useLocation ile kullanıcıya tıklanarak gelen veriyi alabiliriz.
    //  Böylece api çağrısı yapmadan kullanıcı detayına erişebiliriz. 
    //console.log(location)
    useEffect(() => {
        console.log("Mevcut Location Objesi:", location)
    }, [id,location])

    useEffect(() => {
        setIsError(false);
        if ((!user || user.id !== parseInt(id))) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => {

                    if (!res.ok) {
                        throw new Error("Kullanıcı bulunamdı")
                    }

                    return res.json()
                })
                .then((data) => setUser(data))
                .catch((err) => {
                    console.log("Hata detayı:", err);
                    setIsError(true);
                })
        }

    }, [id, user])

    return (
        <div>
            <h2>User Detail</h2>



            {isError ? <div>MAKS USER SAYISINA ULAŞTINIZ
                <hr />
                <Link to={`/users`} >Listeye dön</Link>
            </div>
                : <div>
                    {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
                    <hr />
                    <Link to={`/users/${parseInt(id) + 1}`} >Next User</Link>
                </div>}
            {/* <Link to={`/users/${parseInt(id) + 1}`} >Next User</Link> */}
        </div>
    )
}

export default UserDetail