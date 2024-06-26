import { useEffect, useState } from "react"
import {useNavigate, useParams, Link} from "react-router-dom"
import {useSelector} from "react-redux"
import services from "../appwriteServices/services";
import { Button } from "../components";

const Post = () => {
    const [post, setPost] = useState("");
    const userData = useSelector(state => state.auth.userData)
    const navigate = useNavigate();
    const {slug} = useParams();
    const isAuth = post && userData ? post.userId === userData.$id : false;
    const [image, setImage] = useState("");

    useEffect(() => {
        if(slug){
            services.getPost(slug).then((aPost) => setPost(aPost)).catch((error) => console.log(error))
        }else{
            navigate("/")
        }
    },[navigate, slug])

    useEffect(() => {
        services.getFilePreview(post.featuredImage).then((file) => setImage(file))
    }, [post.featuredImage])

    const deletePost = async () => {
        services.deletePost(post.$id).then((status) => {
            if(status){
                services.deleteFile(post.featuredImage)
                navigate("/")
            }
        })
    }
    return post ? (
        <div className="py-8">
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={image}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuth && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {post.content}
                </div>
        </div>
    ) : null;

}

export default Post