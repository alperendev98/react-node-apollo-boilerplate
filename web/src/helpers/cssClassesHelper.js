import BEMHelper from 'react-bem-helper';
import { processModifiers } from './utils';

export const getBEMClasses = (...classes) => {
	classes = Array.prototype.concat(...classes).filter(item => item);

	const BEMClasses = classes.map(
		className =>
			new BEMHelper({
				name: className,
				outputIsString: true
			})
	);
	return (element, modifier) =>
		BEMClasses.map(BEMClass => BEMClass(element, processModifiers(modifier))).join(' ');
};

export const addModifier = (modifiers, newModifier) => {
	let result;

	if (Array.isArray(modifiers)) {
		result = [newModifier, ...modifiers];
	} else if (typeof modifiers === 'string') {
		result = [newModifier, modifiers];
	} else if (typeof modifiers === 'object') {
		result = modifiers;
		result[newModifier] = true;
	}

	return result;
};
