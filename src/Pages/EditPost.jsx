import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import services from "../appwriteServices/services";
import { PostForm } from "../components";

const EditPost = () => {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(slug){
            services.getPost(slug).then((aPost) => setPost(aPost)).catch((error) => console.log(error))
        }else{
            navigate('/')
        }
    },[navigate, slug])
  return post ? (
    <div className="py-8">
        <PostForm post={post}/>
    </div>
  ) : null
  
}

export default EditPost