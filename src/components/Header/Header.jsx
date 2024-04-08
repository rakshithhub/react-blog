import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Header = () => {

    const authStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "All Post",
            slug: "/all-post",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
    ]
  return (
    <>
        <header className="mb-12">
            <nav className='w-full bg-slate-800 p-4'>
                <div className="max-w-[1240px] mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="font-bold text-2xl text-pink-500">Logo</h1>
                    </div>
                    <ul className="flex gap-5 text-white text-lg font-semibold">
                        {
                            navItems.map((item) => (
                                item.active ? <li key={item.name}><button className="hover:text-pink-500 duration-75" onClick={() => navigate(item.slug)}>{item.name}</button></li> : null
                            ))
                        }

                        {authStatus && <li><button className="px-2 bg-pink-500 rounded-lg uppercase font-semibold hover:text-pink-500 hover:bg-transparent duration-75">Logout</button></li>}
                    </ul>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header