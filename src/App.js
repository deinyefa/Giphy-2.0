import React, { Component } from "react";
import axios from "axios";
import {
	UncontrolledAlert,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
	InputGroup,
	InputGroupAddon,
	Button,
} from "reactstrap";

import Spinner from "./components/UI/Spinner/Spinner";
import Bubbles from "./containers/Bubbles";
import AppStyles from './App.module.css';

const INITIAL_STATE = {
	gifs: [],
	query: "trending",
	loading: false,
	error: "",
};

class App extends Component {
	state = {
		...INITIAL_STATE,
	};

	componentDidMount = () => {
		const { query } = this.state;
		this.callForGigs(query);
	};

	callForGigs = async query => {
		// const { query } = this.state;
		this.setState(prevState => {
			return { loading: !prevState.loading };
		});
		try {
			const data = await axios.get(
				`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ioTxJbNgaUr1DL8TVqEjAmDCeJJVwW6y&limit=1000`
			);
			this.setState({ loading: false, gifs: data.data.data });
		} catch (err) {
			this.setState({
				error:
					"Whoops, looks like something went wrong! Please try again later.",
			});
		}
	};

	onSubmitHandler = event => {
		event.preventDefault();
		this.callForGigs(this.state.query);
	};

	render() {
		const { loading, query, error, gifs } = this.state;
		let bubbles = (
			<div style={{ position: "relative", marginTop: "22em" }}>
				<Spinner />
			</div>
		);
		if (!loading) {
			bubbles = (
				<div style={{ position: "relative", marginBottom: "22em" }}>
					<Bubbles gifs={gifs} />
				</div>
			);
		}

		return (
			<div className={AppStyles.App}>
				<Form
					onSubmit={this.onSubmitHandler}
					className={`container py-5 ${AppStyles.Form}`}
					style={{
						position: "fixed",
						zIndex: "1",
						width: "500px",
						top: "10px",
						left: 0,
						right: 0,
					}}>
					<FormGroup row>
						<Label sm={2} for="search" className="sr-only">
							Search
						</Label>
						<Col cm={10}>
							<InputGroup>
								<Input
									id="search"
									type="text"
									value={query}
									onChange={event =>
										this.setState({
											query: event.target.value,
										})
									}
								/>
								<InputGroupAddon addonType="append">
									<Button color="info" type="submit">
										Search
									</Button>
								</InputGroupAddon>
							</InputGroup>
						</Col>
					</FormGroup>
				</Form>
				{error ? (
					<UncontrolledAlert color="danger">
						{error}
					</UncontrolledAlert>
				) : null}
				{bubbles}
			</div>
		);
	}
}

export default App;
