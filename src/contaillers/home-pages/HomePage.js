import { useState } from "react";
import Header from "../../components/headers/Header"

const HomePage = () => {
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

    const changeCount = () => {
        setCount(count + 1)
    }

    const handleOnClick = (value) => {
        console.log(value);
    }

    return (
        <div>
            <Header changeCount={() => changeCount()} count={count} childFunctionClick={(e) => handleOnClick(e)} menu={menuHeader}/>
            HomePage
        </div>
    )
}
export default HomePage