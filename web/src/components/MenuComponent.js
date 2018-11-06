import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import scheduleIcon from '../assets/images/scheduler.svg';
import refIcon from '../assets/images/ref.svg';
import conferencIcon from '../assets/images/conf.svg';
import flagIcon from '../assets/images/flag.svg';
import lcfIcon from '../assets/images/lcf.svg';

import { getBEMClasses } from '../helpers/cssClassesHelper';
import '../styles/components/menuComponent.css';

const MenuClasses = getBEMClasses(['menu']);

class MenuComponent extends React.Component {
	state = {
		open: false,
	  };

	handleToggle = () => {
		this.setState({ open: !this.state.open });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	populateMenuItems =() =>{
		const MenuList =[[scheduleIcon, 'Schedule Consultation'],
		[flagIcon, 'Schedule On-Site'],
		[conferencIcon, 'Conference'],
		[refIcon, 'Referral'],
		[lcfIcon, 'Show Lead Capture']
		]

		return  MenuList.map(i => 
		<MenuItem className={MenuClasses('item')} onClick={this.handleClose}>
		<img src={i[0]} />
		{ i[1] }
		</MenuItem>)		
	}

	render() {
		const { open } = this.state;

		return (
			<div>
				<Button
					className={MenuClasses('icon-postion')}
					buttonRef={node => {
						this.anchorEl = node;
					}}
					aria-owns={open ? 'menu-list-grow' : null}
					aria-haspopup="true"
					onClick={this.handleToggle}
				>
        			{''}
				</Button>
				<div className={MenuClasses('box-postion')}>
					<Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								id="menu-list-grow"
								style={{
									transformOrigin: placement === 'bottom' ? 'left top 25px' : 'left bottom'
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={this.handleClose}>
										<MenuList className={MenuClasses('box')}>
										{this.populateMenuItems()}
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</div>
			</div>
		);
	}
}

export default MenuComponent;
