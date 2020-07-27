import React, {useState, Component} from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = (props) => {
	const [date, setDate] = useState(new Date());
	
	const onChange = date => {
		setDate(date);
	};
	
    return(
        
        <section>
			<Calendar
				onChange = {onChange}
				value = {date}
			/>
        </section>
    );
};

export default CalendarComponent;