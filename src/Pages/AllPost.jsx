import { useEffect, useState } from "react"
import services from "../appwriteServices/services";
import { PostCard } from "../components";

const AllPost = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        services.getPosts().then(post => setPosts(post.documents))
    }, [])

  return (
    <>
        <div className='w-full py-8'>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
    </div>
    </>
  )
}

export default AllPost