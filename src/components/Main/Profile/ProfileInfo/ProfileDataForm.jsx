import { Form, Formik } from "formik";
import Loader from "react-loader-spinner";
import FormikField from "../../../shared/FormikField/FormikField";
import { CheckBox, colors, ContainerItem, StyledButton } from "../../../Styles";

const ProfileDataForm = ({ profile, handleSubmit }) => {
   return (
      <Formik onSubmit={handleSubmit} initialValues={profile}>
         {({ status, isSubmitting }) => (
            <Form>
               {!isSubmitting && (
                  <ContainerItem margin="20px 0">
                     <StyledButton bgColor={colors.blue4}>Save</StyledButton>
                  </ContainerItem>
               )}
               {isSubmitting && (
                  <Loader
                     type="ThreeDots"
                     color={colors.blue4}
                     height={49}
                     width={100}
                  />
               )}
               <div>
                  Full name:
                  <FormikField
                     type="text"
                     name="fullName"
                     placeholder="Full name"
                  />
               </div>

               <CheckBox shadow={`0 0 10px ${colors.blue4}`} color={colors.blue4}>
                  Looking for a job:{" "}
                  <FormikField
                     type="checkbox"
                     name="lookingForAJob"
                     placeholder="Looking..."
                  />
               </CheckBox>

               <div>
                  <b>My professional skills</b>:
                  <FormikField
                     type="textarea"
                     name="lookingForAJobDescription"
                     placeholder="Description"
                  />
               </div>

               <div>
                  About me:
                  <FormikField
                     type="textarea"
                     name="aboutMe"
                     placeholder="Description"
                  />
               </div>

               <div>
                  <b>Contacts</b>:{" "}
                  {Object.keys(profile.contacts).map((key) => {
                     return (
                        <div key={key} >
                           {key} :{" "}
                           <FormikField
                              statusProfile={status}
                              type="text"
                              name={"contacts." + key}
                              placeholder="url"
                           />
                        </div>
                     );
                  })}
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default ProfileDataForm;
