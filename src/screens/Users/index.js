import React, { Component } from 'react'
import UsersTable from './components/UsersTable'

class Users extends Component {

  componentDidMount() {
    const { fetchUsers } = this.props
    fetchUsers()
  }
  render () {
    const { users } = this.props
    console.log('---------', users)
    return (
      <div>
        <UsersTable rows={users}/>
      </div>
    )
  }
}

export default Users