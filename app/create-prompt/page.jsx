"use client"
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form'

const CreatePrompt = () => {
    const router = useRouter();
    const {data : session} = useSession();
    // form state
    const [submitting, setSubmitting] = useState(false);
    // form data
    const [post, setPost] = useState({
        prompt:"",
        tag:""
    })

    //form onSubmit handler
    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true); // use for loader

        try{

            //passing front end form data to api endpoint
            const response = await fetch('/api/prompt/new',{
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                })
            })

            if (response.ok){
                router.push('/');
            }
        }catch (error){
            console.log(error);
        }finally{
            setSubmitting(false);
        }

    }
  return (
    <Form type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt}/>
  )
}

export default CreatePrompt