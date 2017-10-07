import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';

import { translate } from '../Intl/Intl.actions';
import InputBootstrap from '../Text/InputBootstrap';

//TODO REVER O COMPONENTE PARA N�O UTILIZAR O BOOTSTRAPINPUT E SIM O INPUTBOOTSTRAP OU SIMILAR
class Select extends Component {

    render() {

        let ops = [...this.props.options];
        if(ops && this.props.undefinedOption) {
            ops.unshift({ value: undefined, text: translate("selecione")});
        }

        const attrs = { 
            name: this.props.name, 
            type: "select",
            label: this.props.label, 
            placeholder: this.props.placeholder, 
            help: this.props.help,
            options: ops,
            required: this.props.required,
            disabled: this.props.disabled,
            formGroupClass: "form-group--select",
            onChange: this.props.onChange
        };

        return (
            <Field component={InputBootstrap} {...attrs}/>
        );
    }
}

Select.propTypes = {
    label: PropTypes.node,
    placeholder: PropTypes.node,
    help: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    undefinedOption: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func
}

Select.defaultProps = {
    undefinedOption: true,
    disabled: false,
    options: []
};

export default Select;
