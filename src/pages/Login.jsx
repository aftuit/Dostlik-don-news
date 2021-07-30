import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { connect } from 'react-redux'
import { login } from '../redux/actions/loginAction'
import SaveLoader from '../components/SaveLoader'
const Login = (props) => {
    console.log('props.history', props.history)
    return (
        <div className="login-container">
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-4 ">
                        <div className="card">
                            <div className="card-body">
                                <AvForm onSubmit={(event, errors, values) => {
                                    props.login(event, errors, values, props.history)
                                }}>
                                    <AvField type="text" name="phoneNumber" label="Your phone number" required errorMessage="To'ldirish majburiy" />

                                    <AvField type="password" name="password" label="Your password" required errorMessage="To'ldirish majburiy" />

                                    <button type="submit" className={`btn btn-success btn-block ${props.isLoading && 'disabled'}`}> {props.isLoading ? <SaveLoader /> : 'Sign in'} </button>
                                </AvForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.login.isLoading
    }
}
export default connect(mapStateToProps, { login })(Login);