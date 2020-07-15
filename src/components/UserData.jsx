import React from 'react';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuth } from '../hoc/withAuth'
import { updateAuth } from '../redux/state-reducer'


const UserData = (props) => {
    const user = props.users[props.match.params.userId]
    const exit = () => {
        props.updateAuth(false)
        console.log("!!")
    }
    return (
        <div className="container">
            <h1 className="text-center">{user.name.title} {user.name.first} {user.name.last}</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Данные</th>
                            <th scope="col">Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">пол</th>
                            <td>{user.gender}</td>
                        </tr>
                        <tr>
                            <th scope="row">Дата рождения</th>
                            <td>{user.dob.date}</td>
                        </tr>
                        <tr>
                            <th scope="row">Возраст</th>
                            <td>{user.dob.age}</td>
                        </tr>
                        <tr>
                            <th scope="row">Страна</th>
                            <td>{user.location.country}</td>
                        </tr>
                        <tr>
                            <th scope="row">Город</th>
                            <td>{user.location.city}</td>
                        </tr>
                        <tr>
                            <th scope="row">Код почты</th>
                            <td>{user.location.postcode}</td>
                        </tr>
                        <tr>
                            <th scope="row">Номер телефона</th>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <th scope="row">Дата регистрации</th>
                            <td>{user.registered.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container col-1">
                <button className="btn btn-danger" onClick={exit}>Exit</button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        users:state.stateReducer.users,
        auth:state.stateReducer.auth,
    }
}
export default compose(
    withAuth,
    connect(mapStateToProps, { updateAuth }),
    withRouter,
)(UserData)
