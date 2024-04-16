import {useForm} from 'react-hook-form'
import services from '../../appwriteServices/services.js';
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useCallback, useEffect, useState } from 'react';
import {Input, Button, Select} from '../index.js'

const PostForm = ({post}) => {
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData);
    const [image, setImage] = useState("");

    const {handleSubmit, register, watch, setValue} = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "",
        }
    });

    const submit = async(data) => {
        
        if(post){
            const file = data.image[0] ? await services.uploadFile(data.image[0]) : null;

            if(file){
                await services.deleteFile(post.featuredImage);

                const userdata = await services.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : null
                }) 

                if(userdata){
                    navigate(`/post/${userdata.$id}`)
                }
            }
        }else{
            const file = data.image[0] ? await services.uploadFile(data.image[0]) : null;
            
            if(file){
                const fileId = file.$id;
                data.featuredImage = fileId;

                const dbPost = await services.createPost({
                    ...data,
                    userId: userData.$id
                })

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if(value && typeof value === 'string'){
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-");
        }

        return "";
    }, [])

    useEffect(() => {
        const subcription = watch((value, {name}) => {
            if(name === 'title'){
                setValue('slug', slugTransform(value.title), {shouldValidate: true})
            }
        })

        return () => {
            subcription.unsubscribe()
        }

    }, [watch, setValue, slugTransform])



  return (
    <>
        <div className="max-w-[550px] px-2 py-10 bg-slate-300 rounded-xl mt-5 mb-5 mx-auto">
            <div className="mt-4 text-center mb-4">
                <img src="src/assets/instablog.svg" alt="" className="max-w-36 max-h-20 rounded-full mx-auto"/>
                <h3 className='text-2xl font-bold mb-1'>{post ? 'Update Post' : "Add Post"}</h3>
                <p className='font-semibold text-gray-600'>Please Fill all the section <a href="">Help</a></p>
            </div>
            <form action="" onSubmit={handleSubmit(submit)} className='text-center px-14'>
                <Input 
                    label="Title:" 
                    type="text" 
                    placeholder="Enter Your Title" 
                    {...register('title', {
                    required: true
                } )} />

                <Input
                    label="Slug:"
                    placeholder="Slug"
                    readOnly
                    {...register("slug", {required: true})}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), {shouldValidate: true})
                    }}
                />

                <Input
                    label="Content:"
                    type="text"
                    placeholder="Enter Your Content"
                    {...register("content", {required: true})}
                />

                {
                    post && (<img src="" alt="" className="max-w-44 max-h-20 mx-auto"/>) 
                }

                <Input
                    label="Featured Image:"
                    type="file"
                    accept= "image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", {required: !post})}
                />

                <Select 
                    label="Status"
                    options={["active", "inactive"]}
                    {...register("status", {
                        required: true
                    })}
                    />

                <Button type="submit">{post ? "Update" : "Submit"}</Button>
            </form>
        </div>
    </>
  )
}

export default PostForm