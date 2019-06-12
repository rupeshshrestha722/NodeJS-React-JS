import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  TextFiedGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addEducation } from '../../actions/profileAction';
 class AddEducation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            school: '',
            degree: '',
            fieldofstudy: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onCheck(e) {
        this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current
        })
    }

    onChange(e){
       this.setState({[e.target.name]:e.target.value});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onSubmit(e){
        e.preventDefault();
        
        const data = {
            school: this.state.school,
            degree: this.state.degree,
            fieldofstudy: this.state.fieldofstudy,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description,
            
        }

        this.props.addEducation(data, this.props.history);

    }
    render() {
        const { errors } = this.state;

        return (
            <div className="add-education">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light" >
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Education</h1>
                        <p className="lead text-center">
                            Add any education that you have had in the past or current
                        </p>
                        <small className="d-block pb-3">* = required fields</small>
                    
                      <form onSubmit={this.onSubmit}>
                      <TextFiedGroup
                      placeholder ="* School"
                      name="school"
                      value={this.state.school}
                      onChange={this.onChange}
                      error={errors.school}
                       />
                       <TextFiedGroup
                      placeholder ="* Degree"
                      name="degree"
                      value={this.state.degree}
                      onChange={this.onChange}
                      error={errors.degree}
                       />

                       <TextFiedGroup
                      placeholder ="* fieldofstudy"
                      name="fieldofstudy"
                      value={this.state.fieldofstudy}
                      onChange={this.onChange}
                      error={errors.fieldofstudy}
                       />
                       <h6>From Date</h6>
                       <TextFiedGroup
                      type="date"
                      name="from"
                      value={this.state.from}
                      onChange={this.onChange}
                      error={errors.from}
                       />
                        <h6>To Date</h6>
                       <TextFiedGroup
                      type="date"
                      name="to"
                      value={this.state.to}
                      onChange={this.onChange}
                      error={errors.to}
                      disabled={this.state.disabled ? 'disabled' : ''}
                       />
                       <div className="form-check mb-4">
                           <input type="checkbox" className="form-check-input"
                           name="current"
                           value={this.state.current}
                           checked={this.state.current}
                           onChange={this.onCheck}
                           id="current"
                           />
                           <label htmlFor="current" className="form-check-label">
                               Current Job
                           </label>
                       </div>

                    <TextAreaFieldGroup
                      placeholder="Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                      error={errors.description}
                     info="Tell us about your Education"
                       />
                        <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                /> 
                </form>
             </div>
                       
                    </div>
                </div>
                
            </div>
        )
    }
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps, { addEducation})(withRouter(AddEducation));
