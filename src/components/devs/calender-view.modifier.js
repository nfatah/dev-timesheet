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
        weeks_data.forEach(weekObj => {
          weekObj.days_in_week.forEach(day => {
            pick_attribute = moment(`2017-${m}-${day.day_number}`).format('x');
              if(day.hours === 0){
                console.log('hasnt worked!');  
                $(`div.picker__day.picker__day--infocus[data-pick='${pick_attribute}']`).addClass('red-text');
              }else $(`div.picker__day.picker__day--infocus[data-pick='${pick_attribute}']`).addClass('green-text');
          });
        });
        // for(let i=1;i<=daysInMonth;i++){
        //   //convert dates to milisends to use for elemetquery
        //   pick_attribute = moment(`2017-${m}-${i}`).format('x');
      
        //   $(`div.picker__day.picker__day--infocus[data-pick='${pick_attribute}']`).addClass('red-text');
        //   // console.log($(`div.picker__day.picker__day--infocus[data-pick='${pick_attribute}']`));

        // }
      })
      .catch(function (error) {
          // console.log(error);
      });
    };

export default calender_view_modifier;