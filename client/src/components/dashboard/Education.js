import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileAction';


 class Education extends Component {

    onDeleletClick(id)  {
        this.props.deleteEducation(id);
    }
    render() {
        const education = this.props.education.map(edu =>(
            <tr key={edu._id}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td>{edu.fieldofstudy}</td>
                <td>
                <Moment format="YYYY/MM/DD">{edu.from}</Moment>-
                {edu.to=== null ? ('Now') : (<Moment format="YYYY/MM/DD">{edu.to}</Moment>)}
                </td>
                <td><button onClick={this.onDeleletClick.bind(this,edu._id)} className="btn btn-danger">
                    Delete
                </button>

                </td>

            </tr>
        )
           

        )
        return (
            <div>
                 <h4 className="mb-4">Education Credentials</h4>
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Degree</th>
                            <th>Field of Study</th>
                            <th>Years</th>
                            <th>Action</th>
                        </tr>
                      
                            {education}
                      
                    </thead>
                </table>
            </div>
        )
    }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation})(Education);

