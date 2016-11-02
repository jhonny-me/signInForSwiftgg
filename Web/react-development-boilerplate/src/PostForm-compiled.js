'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _colors = require('material-ui/styles/colors');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    container: {
        // textAlign: 'center',
        marginTop: 60,
        marginBottom: 60,
        width: 256,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    submitButton: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 88,
        left: 0,
        right: 0
    }
};

var muiTheme = (0, _getMuiTheme2.default)({
    palette: {
        accent1Color: _colors.deepOrange500
    }
});

var PostForm = function (_Component) {
    _inherits(PostForm, _Component);

    function PostForm(props, context) {
        _classCallCheck(this, PostForm);

        var _this = _possibleConstructorReturn(this, (PostForm.__proto__ || Object.getPrototypeOf(PostForm)).call(this, props, context));

        _this.state = {
            name: "",
            githubID: "",
            contact: "",
            company: "",
            comingForDinner: false
        };
        return _this;
    }

    _createClass(PostForm, [{
        key: 'handleNameChange',
        value: function handleNameChange(e) {
            this.setState({ name: e.target.value });
        }
    }, {
        key: 'handleGithubIDChange',
        value: function handleGithubIDChange(e) {
            this.setState({ githubID: e.target.value });
        }
    }, {
        key: 'handleContactChange',
        value: function handleContactChange(e) {
            this.setState({ contact: e.target.value });
        }
    }, {
        key: 'handleCompanyChange',
        value: function handleCompanyChange(e) {
            this.setState({ company: e.target.value });
        }
    }, {
        key: 'handleComingChange',
        value: function handleComingChange(e, value) {
            this.setState({ comingForDinner: value });
        }
    }, {
        key: 'makePost',
        value: function makePost(e) {
            e.preventDefault();
            console.log("aaaa");

            _superagent2.default.post("posts")
            // .post('https://rescueking.herokuapp.com/posts')
            .send({
                name: this.state.name,
                company: this.state.company,
                contact: this.state.contact,
                githubID: this.state.githubID,
                comingForDinner: this.state.comingForDinner
            }).set('Accept', 'application/json').end(function (err, res) {
                if (err || !res.ok) {
                    alert('Oh no! error');
                } else {
                    alert('yay got ' + JSON.stringify(res.body));
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: muiTheme },
                _react2.default.createElement(
                    'form',
                    { className: 'postForm', onSubmit: this.makePost.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { style: styles.container },
                        _react2.default.createElement(_TextField2.default, {
                            hintText: 'input name',
                            floatingLabelText: 'Name',
                            value: this.state.name,
                            onChange: this.handleNameChange.bind(this)
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_TextField2.default, {
                            hintText: 'input githubID',
                            floatingLabelText: 'GithubID',
                            value: this.state.githubID,
                            onChange: this.handleGithubIDChange.bind(this)
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_TextField2.default, {
                            hintText: 'input your phone',
                            floatingLabelText: 'Phone',
                            value: this.state.contact,
                            onChange: this.handleContactChange.bind(this)
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_TextField2.default, {
                            hintText: 'input your company',
                            floatingLabelText: 'Company',
                            value: this.state.company,
                            onChange: this.handleCompanyChange.bind(this)
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_Checkbox2.default, {
                            label: 'Coming for dinner?',
                            onCheck: this.handleComingChange.bind(this)
                        }),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_RaisedButton2.default, {
                            type: 'Submit',
                            label: '\u63D0\u4EA4',
                            primary: true,
                            style: styles.submitButton
                        })
                    )
                )
            );
        }
    }]);

    return PostForm;
}(_react.Component);

exports.default = PostForm;

//# sourceMappingURL=PostForm-compiled.js.map