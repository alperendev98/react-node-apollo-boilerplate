import pickBy from 'lodash/pickBy';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';

export function processModifiers(modifiers) {
	return isObject(modifiers) && !isArray(modifiers) ? pickBy(modifiers) : modifiers;
}
