import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import services from '../appwriteServices/services.js'

const PostCard = ({$id, title, content, featuredImage}) => {

    const [image, setImage] = useState("")

    useEffect(() => {
        services.getFilePreview(featuredImage)
        .then((file) => setImage(file))
        .catch((err) => console.log(err))
    }, [featuredImage])
  return (
    <Link to={`/post/${$id}`}>
        <div>
            <div className="max-w-[200px] p-2 bg-black rounded-lg max-h-[300px] overflow-hidden">
                <img src={image && image} alt={title} className="h-36 w-full rounded-md" />
                <p className="text-pink-500 text-center mt-3 text-xl font-bold">{title}</p>
                <p className="text-white text-justify mt-2 text-sm font-semibold">{content}</p>
            </div>
        </div>
    </Link>
  )
}

export default PostCard