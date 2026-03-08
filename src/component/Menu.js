import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Menu() {
    const navigate = useNavigate()
    return (
        <div>
            <ul className='menu'>
                <li>
                    <a href='#/' onClick={() => navigate(-1)}>Back</a>
                </li>
                <li>
                    <a href='/'>HomeTest</a>
                    {/*a etiketi sayfayı yenilediği için Link etiketi kullanmak daha doğru olur.
                     Link etiketi sayfa yenilenmeden istediğimiz sayfaya yönlendirme yapmamızı sağlar. */}
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="users">Users</Link></li>
                <li><Link to="contact">Contact</Link></li>
                {/* navigate fonksiyonu ile istediğimiz sayfaya yönlendirme yapabiliriz.
                link ve navigate farkı: link etiketi ile yönlendirme yaparken sayfa yenilenmezken
                navigate fonksiyonu ile yönlendirme yaparken sayfa yenilenir. */}
            </ul>
        </div>
    )
}

export default Menu