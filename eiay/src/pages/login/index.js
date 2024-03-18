import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../../components/header'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import './login.styl'

function Login(props) {
    const navigate = useNavigate()

    const gotoHome = () => {
        navigate('/home')
    }

    return (
        <div className="P-login">
            <Header />
            <h1>Login page</h1>
            <p>login:myData = {props.myData}</p>
            <button onClick={()=> {props.getData('123456')}}>更改login的myData</button>
            <button onClick={gotoHome}>跳转Home页</button>
        </div>
    )
}

//把store里的数据映射到props
const mapStateToProps = (state) => ({
    myData: state.myData,
})

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({
    getData(data) {
        const action = actionCreators.getData(data)
        dispatch(action)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)