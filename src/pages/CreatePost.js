import React from 'react';
import "../App.css";
import * as Yup from "yup";
import {Formik, Form,Field,ErrorMessage} from "formik";

const CreatePost = () => {
    const initialValues = {
        title : "",
        postText: "",
        username: "",
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string.min(3).max(15).required(),
    });


    const onSubmit = (data)=> {
        console.log(data);

    }
  return (
    <div className='createPostPage'>
        <Formik 
        initialValues={initialValues} 
        onSubmit = {onSubmit}
        validationSchema={validationSchema}
        >
            <Form className='formContainer'>
                <label>Title:</label>
                <ErrorMessage name='title' component="span" />
                <Field 
                autocomplete = "off"
                id = "inputCreatePost" 
                name ="title" 
                placeholder= "(Example title)"
                />

                <label>Posts:</label>
                <Field 
                autocomplete = "off"
                id = "inputCreatePost" 
                name ="postText" 
                placeholder= "(Example posts)"
                />

                <label>Username:</label>
                <Field 
                autocomplete = "off"
                id = "inputCreatePost" 
                name ="username" 
                placeholder= "(Example username)"
                />
              <button type='submit'>Create Post</button>
            </Form>
        </Formik>
        
    </div>
  )
}

export default CreatePost