import React from 'react';
import classnames from 'classnames';

const PulldownList = ({ field, value, label, error, onChange, options}) => {
	return (
		<div className={classnames("form-group", {'has-error': error})}>
			<label className="control-label">{label}</label>
			<select
				value={value}
				onChange={onChange}
				name={field}
				className="form-control"
			>
				<option value="" disabled> Choose Your {label} </option>
					   {options}
			</select>
			{error && <span className="help-block">{error}</span>}
		</div>	
	);
}

PulldownList.propTypes = {

	field: React.PropTypes.string.isRequired,
	value: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.array.isRequired
}

export default PulldownList;