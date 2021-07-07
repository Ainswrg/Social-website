import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikField from "../../../../shared/FormikField/FormikField";
import { StyledPostButton, TextArea } from "../../../../Styles";

const validationPost = Yup.object({
   newPost: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
})


const PostForm = (props) => {
   return (
      <>
         <h1>My Post</h1>
         <Formik
            enableReinitialize
            initialValues={props.initialValues}
            validationSchema={validationPost}
            onSubmit={props.handleSubmit}
         >
            <Form>
               <TextArea >
                  <FormikField
                     type="textarea"
                     label="New Post"
                     name="newPost"
                     rows="6"
                     placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
                  />
               </TextArea>
               

               <StyledPostButton type="submit">Submit</StyledPostButton>
            </Form>
         </Formik>
      </>
   );
};

export default PostForm;
