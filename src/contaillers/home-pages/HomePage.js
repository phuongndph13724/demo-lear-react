import { useEffect, useState } from "react";
import Header from "../../components/headers/Header"
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate()

    const [menuHeader, setMenuHeader] = useState([
        {
            title: "Home",
            url : "/",
        },
        {
            title: "Product",
            url : "/product",
        },
        {
            title: "About",
            url : "/",
        }
    ])

    const [count, setCount] = useState(0)
    const [userInfo, setUserInfo] = useState(null)

    const changeCount = () => {
        setCount(count + 1)
    }

    const handleOnClick = (value) => {
        console.log(value);
    }

    const getUser = () => {
        const user = localStorage.getItem('userReact')
        if (user) {
            const userJson = JSON.parse(user)
            setUserInfo(userJson);
        }
        else{
            navigate('/auth/login')
        }
    }

    useEffect(() => {
        getUser()
    },[])

    return (
        <div>
            <Header userInfo={userInfo} changeCount={() => changeCount()} count={count} childFunctionClick={(e) => handleOnClick(e)} menu={menuHeader}/>
            HomePage
            <div className="flex gap-4">
                <Link to={'/auth/login'}>Login</Link>
            </div>
        </div>
    )
}
export default HomePage