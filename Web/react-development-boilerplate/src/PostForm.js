import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import request from 'superagent';
import {deepOrange500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles = {
    container: {
        // textAlign: 'center',
        marginTop: 60,
        marginBottom: 60,
        width: 256,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    submitButton: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 88,
        left:0,
        right:0
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

export default class PostForm extends Component  {

    constructor(props, context) {
        super(props,context);
        this.state = {
            name: "",
            githubID: "",
            contact: "",
            company: "",
            comingForDinner: false
        };
    }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleGithubIDChange(e) {
    this.setState({githubID: e.target.value});
  }
  handleContactChange(e) {
    this.setState({contact: e.target.value});
  };

  handleCompanyChange(e){
        this.setState({company: e.target.value});
  }



  handleComingChange(e, value) {
      this.setState({comingForDinner: value});
  }

  makePost(e) {
      e.preventDefault();
      console.log("aaaa");

      request
          .post("posts")
          // .post('https://rescueking.herokuapp.com/posts')
          .send({
              name: this.state.name,
              company: this.state.company,
              contact: this.state.contact,
              githubID: this.state.githubID,
              comingForDinner: this.state.comingForDinner
          })
          .set('Accept', 'application/json')
          .end(function(err, res){
          if (err || !res.ok) {
              alert('Oh no! error');
          } else {
              alert('yay got ' + JSON.stringify(res.body));
          }
      });

  }
  
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
      <form className="postForm" onSubmit={::this.makePost}>
          <div style={styles.container}>

        <TextField
            hintText="input name"
            floatingLabelText="Name"
            value={this.state.name}
            onChange={::this.handleNameChange}
        /><br/>
		<TextField
            hintText="input githubID"
            floatingLabelText="GithubID"
      		value={this.state.githubID}
      		onChange={::this.handleGithubIDChange}
      	/><br/>
          <TextField
              hintText="input your phone"
              floatingLabelText="Phone"
              value={this.state.contact}
              onChange={::this.handleContactChange}
          /><br/>

          <TextField
              hintText="input your company"
              floatingLabelText="Company"
              value={this.state.company}
              onChange={::this.handleCompanyChange}
          /><br/>

            <Checkbox
                label="Coming for dinner?"
                onCheck={::this.handleComingChange}
            /><br/>
            <RaisedButton
                type="Submit"
                label="提交"
                primary={true}
                style={styles.submitButton}
            />
              </div>
      </form>
            </MuiThemeProvider>
    );
  }

}
