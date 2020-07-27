import React, {useState, Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = (props) => {
	const [date, setDate] = useState(new Date());
	const onChange = date => {
		setDate(date)
	};
	/*const onClickDay = day => {
		
	};*/
	
	const confirmChoice = () => {
		console.log(date[0])
	}
	return(
		<div>
			<div style = {{boxShadow: "5px 5px 10px #4aa7ff"}}>
				<Calendar 
					onChange = {onChange}
					selectRange = {true}
					value = {date}
				/>
			</div>
			<div>
				&nbsp;
			</div>
			<div>
				Click on a date twice or select a range of dates.
			</div>
			<div>
				&nbsp;
			</div>
			<div>
				--
			</div>
			{/* check if date is null to prevent errors */}
			{date.length > 1 && date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) == date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) ? (
				/* same day */
				<div>
					<div>
						Selected day:
					</div>
					<div>
						&nbsp;
					</div>
					<div>
						&nbsp;&nbsp;&nbsp;&nbsp;{date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(","))}
						&nbsp;&nbsp;--&nbsp;&nbsp;
						{date[0].toLocaleString().substring(date[0].toLocaleString().indexOf(",") + 2, date[0].toLocaleString().length)}
						&nbsp;to&nbsp; 
						{date[1].toLocaleString().substring(date[1].toLocaleString().indexOf(",") + 2, date[1].toLocaleString().length)}
					</div>
				</div>
			) : (
				/* range of dates */
				date[1] == null ? (
					<div>
						<div>
							Selected day(s):
						</div>
						<div>
							&nbsp;
						</div>
						<div>
							None. Please select the same date or a different date.
						</div>
					</div>
				) : (
					<div>
						<div>
							<div>
								Selected days:
							</div>
							<div>
								&nbsp;
							</div>
							<div>
								&nbsp;&nbsp;&nbsp;&nbsp;{date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(","))}
								&nbsp;&nbsp;--&nbsp;&nbsp;
								{date[0].toLocaleString().substring(date[0].toLocaleString().indexOf(",") + 2, date[0].toLocaleString().length)}
							</div>
							<div>
								&nbsp;&nbsp;&nbsp;&nbsp;to
							</div>
							<div>
								&nbsp;&nbsp;&nbsp;&nbsp;{date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(","))}
								&nbsp;&nbsp;--&nbsp;&nbsp;
								{date[1].toLocaleString().substring(date[1].toLocaleString().indexOf(",") + 2, date[1].toLocaleString().length)}
							</div>
						</div>
						<div>
							&nbsp;
						</div>
					</div>
				)
			)}
			<div>
				--
			</div>
			<div>
				&nbsp;
			</div>
			<div><button onClick = {confirmChoice}>Submit</button></div>
		</div>
	);
};

export default CalendarComponent;