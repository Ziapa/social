import {Field, Form, Formik} from "formik";
import React from "react";
import {useDispatch} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";

export const LoginForm = () => {

    const dispatch = useDispatch()
    const validateFormLogin = (values: any) => {
        const errors = {}
        return errors
    }

    const submit = (values: LoginFormikType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        dispatch(loginTC(values.login, values.password, values.rememberMe))
        setSubmitting(false);
    }


    type LoginFormikType = {
        login: string
        password: string
        rememberMe: boolean
    }

    return (
        <Formik
            initialValues={{login: '', password: '', rememberMe: false}}
            validate={validateFormLogin}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <Field type="login" name="login" placeHolder="Login"/>
                    </div>
                    <div>
                        <Field type="password" name="password" placeHolder="Password"/>
                    </div>
                    <div>
                        <label>
                            <Field type="checkBox" name="rememberMe" placeHolder="Remember me"/>
                            Remember me
                        </label>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}