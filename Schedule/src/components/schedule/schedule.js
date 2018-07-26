import React, { Component } from '../../../../../../.cache/typescript/2.9/node_modules/@types/react';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';
import {connect} from 'react-redux';

class Schedule extends Component {
    renderCourses () {
        const data = this.props.courses

        return data.map((course, index) => {
            if(course.enrolled && this.amountEnrolled !=5){
                this.amountEnrolled++;
                return <ScheduleCourse course={...course} key={index}/>
            }
        })
    }


    render () {
        this.amountEnrolled=0
        return (
            <div className="schedule">
                <h1 className="schedule__title">My Schedule</h1>
                {this.renderCourses}
                <ProgressTracker amountPossible={5} amount enrolled={this.amountEnrolled}/>
                <Gradient/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        courses:state.courses
    }
}

export default connect(mapStatetoProps)(Schedule);