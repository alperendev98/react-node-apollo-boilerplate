import React from 'react';
import Menu from './MenuComponent'
import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/base/base.css';
import '../styles/components/headerComponent.css';

import magnifierIcon from '../assets/images/magnifier-tool.svg';

const BaseClasses = getBEMClasses(['base']);
const HeaderClasses = getBEMClasses(['header']);

class HeaderComponent extends React.Component {
	render() {
		return (
			<div className={HeaderClasses('container')}>
				<div className={HeaderClasses('account')}>
					<img
						className={HeaderClasses('account-icon')}
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3cF4MlqomtuIptSvbEn3QQyhlmdNEB-SAFDzXA7OcdfR2LziVw"
					/>
				</div>
				<div className = { HeaderClasses('menu') }>
					<Menu />				
				</div>
				<div className={HeaderClasses('filter')}>
					<input type="text" className={HeaderClasses('filter-box')} placeholder="Search" />
					<img className={HeaderClasses('filter-icon')} src={magnifierIcon} />
				</div>
			</div>
		);
	}
}

export default HeaderComponent;
