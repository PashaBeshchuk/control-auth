import React, { useState, useEffect } from 'react';
import { withAuth } from '../hoc/withAuth';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUsersThunk, updateUsers, updateAuth } from '../redux/state-reducer';
import { searchFilmAlgorithm } from '../functions/functionsForListUsers'
import {NavLink} from "react-router-dom"

const ListUsers = ({ getUsersThunk, updateUsers, updateAuth, users }) => {
    const [ filteredUsers, setFilteredUsers ] = useState([])
    let listUsers
    useEffect(()=>{
        if(users.length === 0){
            getUsersThunk()
        }
    }, [users, filteredUsers])
    const search = (e) => {
        const listUsers = searchFilmAlgorithm(e.target.value, users)
        setFilteredUsers(listUsers)
    }
    const sortName = (e) => {
        if(e.target.innerHTML === "Имя") {
            users.sort(function(a,b){
                var nameA=a.name.last.toLowerCase(), nameB=b.name.last.toLowerCase()
                if (nameA < nameB){
                    return -1
                }    
                if (nameA > nameB) {
                    return 1
                }       
                return 0 
            })
        }
        if(e.target.innerHTML === "Дата рождения") {
            users.sort(function(a,b){
               return a.dob.age - b.dob.age
            })
        }
        updateUsers([[],[]])
        updateUsers(users)
    }
    const getListUsers = (users) => {
        const usersList = users.map((user, id) => {
            return <tr key={id}>
                <th scope="row">{id+1}</th>
                <td>{user.name.title} {user.name.first} {user.name.last}</td>
                <td><img src={user.picture.thumbnail}/></td>
                <td>{user.email}</td>
                <td>{user.dob.date}</td>
                <td>
                    <NavLink to={`/user/${id}`}>
                        <button className="btn btn-primary">Подробнее</button>
                    </NavLink>
                </td>
            </tr>
        })
        return usersList
    }

    const exit = () => {
        updateAuth(false)
    }
    if(filteredUsers.length > 0) {
        listUsers = getListUsers(filteredUsers)
    } else {
        listUsers = getListUsers(users)
    }
    
    return <div className="container">
        <input className="form-control" onChange={search} type="text" placeholder="Search" aria-label="Search"></input>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col" className="list-users-table" onClick={sortName}>Имя</th>
                <th scope="col">Фото</th>
                <th scope="col">Почта</th>
                <th scope="col"className="list-users-table" onClick={sortName}>Дата рождения</th>
                <th scope="col">Информация</th>
                </tr>
            </thead>
            <tbody>
               {listUsers}
            </tbody>
        </table>
        <div className='container col-1'>
            <button className='btn btn-danger' onClick={exit}>Exit</button>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        users:state.stateReducer.users
    }
}

export default compose(
    withAuth,
    connect(mapStateToProps, { getUsersThunk, updateUsers, updateAuth }))(ListUsers)