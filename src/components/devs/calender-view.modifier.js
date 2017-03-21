import axios from 'axios';
import moment from 'moment';
import $ from 'jquery';

    //API fetch function
    let calender_view_modifier = (m, id) => {
      let daysInMonth = moment(`2017-${m}`, `YYY-MM`).daysInMonth(); // get no. of days in a month
      //get the sate from current calender view
      axios.get(`https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/${m}/2017/${id()}`)
      .then(function (res) {
        let weeks_data = res.data.data.weeks;
        console.log(res.data.data);
        let pick_attribute = [];
        let color = 'red';
        // get the hours worked each day
        weeks_data.forEach(weekObj => {
          weekObj.days_in_week.forEach(day => {
            pick_attribute = moment(`2017-${m}-${day.day_number}`).format('x');
            // toggle colors
               color = day.hours >=3 && day.hours <6 ? 'orange' : color
               color = day.hours >=3 && day.hours <6 ? 'green' : color
                console.log('hasnt worked!');
                //inject number of hours worked into calender view 
                // TODO: make it work!!!!!!!!!
                $(`div[data-pick='${pick_attribute}']`).append(`<small class='${color}-text'>${day.hours}h</small>`);
          });
        });
      })
      .catch(function (error) {
          // console.log(error);
      });
    };

export default calender_view_modifier;