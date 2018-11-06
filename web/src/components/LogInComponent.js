import React from 'react';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/base/base.css';
import '../styles/components/loginComponent.css';

const BaseClasses = getBEMClasses(['base']);
const LoginClasses = getBEMClasses(['login']);

class LogInComponent extends React.Component {
	componentDidMount() {
		this.props.testApiConnection();
	}

	doLogin = () => {
		const { history } = this.props;

		history.push('/admin');
	};

	render() {
		return (
			<div className={LoginClasses('wrapper')}>
				<div className={LoginClasses('container')}>
					<div className={LoginClasses('title')}>Log In</div>
					<div className={LoginClasses('content')}>
						<div className={LoginClasses('btn-container')}>
							<span
								onClick={this.doLogin}
								className={BaseClasses('btn') + ' ' + BaseClasses('btn--black')}
							>
								Log In
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LogInComponent;
