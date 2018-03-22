import React, { Component } from 'react';
import UserList from './users/UserList';
import UserGrid from './users/userGrid';
import '../App.css';
import Header from './partials/header';
import Footer from './partials/footer.js';
import { userService } from '../services/UserService';
import Load from './users/Load';
import SearchBar from './partials/Search.js';
//import UserCard from './users/userCard';
//import UserItem from './users/UserItem';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			showGrid: true,
			inputValue: '',
			filteredUsers: []
		}
	}

	componentDidMount() {
		this.fetchUsers();

		if (localStorage.getItem('showGrid')) {
			this.setState({
				showGrid: JSON.parse(localStorage.getItem('showGrid'))
			})
		}
	}

	fetchUsers = () => {
		userService.fetchUser()
			.then(userData => {
				this.setState({
					users: userData,
					filteredUsers: userData
				})
			})
	}

	updateClick = (event) => {
		this.fetchUsers();
	}

	handleClick = (event) => {
		localStorage.setItem('showGrid', !this.state.showGrid);

		this.setState((prevState) => {
			return {
				showGrid: !prevState.showGrid
			}
		});
	}


	handleChange = (event) => {
		this.setState({
			filteredUsers: this.state.users.filter(el => {
				return el.name.toLowerCase().indexOf(event.target.value) !== -1;
			}),
			inputValue: event.target.value
		});
	}


	render() {
		return (
			<div className="App">

				<Header title="Bit Persons" handleClick={this.handleClick} updateClick={this.updateClick} showList={this.state.showGrid} />

				<SearchBar handleChange={this.handleChange} inputValue={this.state.inputValue} />
				<div className="container">
					{this.state.users.length === 0 ? <Load /> : ''}

					{this.state.showGrid ? <UserGrid items={this.state.filteredUsers} /> : <UserList items={this.state.filteredUsers} />}
				</div>

				<Footer />

			</div>

		);
	}
}

export default Home;