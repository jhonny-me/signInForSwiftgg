import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';


/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class DialogExampleDialogDatePicker extends React.Component {

    static propTypes = {
        onSave: PropTypes.func,
        value: PropTypes.date
    }

    static defaultProps = {
        value: new Date()
    }
    
    state = {
        open: false,
        date: new Date(),
        time: new Date(),
        picked: this.props.value
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleDateChange = (e, value) => {

        this.state.picked.setFullYear(value.getFullYear(),value.getMonth(),value.getDate());
        this.setState({date: value});
    };
    handleTimeChange = (e, value) => {
        this.state.picked.setHours(value.getHours());
        this.state.picked.setMinutes(value.getMinutes());
        this.setState({time: value});
    };

    handleSave = () => {
        this.props.value = this.state.picked
        this.props.onSave(this.state.picked)
        this.handleClose()
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSave}
            />,
        ];

        return (
            <div>
                <TextField
                    hintText="pick date and time"
                    value={this.state.picked.toLocaleString()}
                    onFocus={this.handleOpen}
                />
                <Dialog
                    title="Date & Time Picker"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Pick your date and time from below input.
                    <DatePicker
                        value={this.state.date}
                        onChange={::this.handleDateChange}
                        hintText="Date Picker"
                    />
                    <TimePicker
                        value={this.state.time}
                        onChange={::this.handleTimeChange}
                        hintText="Time Picker"
                    />
                    {this.state.picked.toLocaleString()}
                </Dialog>
            </div>
        );
    }
}