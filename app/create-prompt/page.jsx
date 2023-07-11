"use client"
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form'

const CreatePrompt = () => {
    // form state
    const [submitting, setSubmitting] = useState(false);
    // form data
    const [post, setPost] = useState({
        prompt:"",
        tag:""
    })

    //form onSubmit handler
    const createPrompt = async (e) => {

    }
  return (
    <Form type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt}/>
  )
}

export default CreatePrompt