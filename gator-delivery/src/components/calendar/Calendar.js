import React, {useState/*, Component*/} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = (props) => {
	const [date, setDate] = useState(new Date());
	
	const [hr1, setHour1] = useState(-1);
	const [min1, setMin1] = useState(-1);
	const [sec1, setSec1] = useState(-1);
	
	const [hr2, setHour2] = useState(-1);
	const [min2, setMin2] = useState(-1);
	const [sec2, setSec2] = useState(-1);
	
	const [before, setBefore] = useState("AM");
	const [after, setAfter] = useState("PM");
	
	const onChange = date => {
		setDate(date);
	};
	/*const onClickDay = day => {
		
	};*/
	const [error, setError] = useState("");
	
	const confirmChoice = () => {
		console.log(date);
		/* check if input was not changed */
		if(date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) === date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) && hr1 === -1 || hr2 === -1 || min1 === -1 || min2 === -1 || sec1 === -1 || sec2 === -1){
			setError("Error: input not changed. Enter integers in between 0 and 12 or 0 and 59.");
			console.log("Error: input not changed. Enter integers in between 0 and 12 or 0 and 59.");
		}else{
			/* check if prev time comes before after time */
			if(date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) === date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) && before === "PM" && after === "AM"){
				setError("Error: invalid timespan. Enter times in chronological order.");
				console.log("Error: invalid timespan. Enter times in chronological order.");
			}else{
				var values = [hr1, min1, sec1, hr2, min2, sec2];
				if(date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) === date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) && before === after && (Number(hr1) != 12 && Number(hr2) != 12) && ((Number(hr1) > Number(hr2)) || ((Number(hr1) <= Number(hr2)) 
					&& (Number(min1) > Number(min2))) || ((Number(hr1) <= Number(hr2)) && 
					(Number(min1) <= Number(min2)) && (Number(sec1) > Number(sec2))) || 
					((Number(hr1) === Number(hr2)) && (Number(min1) === Number(min2)) && 
					(Number(sec1) === Number(sec2))))){
					
					setError("Error: invalid timespan. Enter times in chronological order.");
					console.log("Error: invalid timespan. Enter times in chronological order.");
				}else{
					//Check AMs
					if(date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) === date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) && before === "AM" && after === "AM" && (Number(hr1) === 12 && Number(hr2) === 12) && 
						((Number(min1) > Number(min2)) || ((Number(min1) <= Number(min2)) && (Number(sec1) > Number(sec2))) || 
						((Number(min1) === Number(min2)) && (Number(sec1) === Number(sec2))))){
						
						setError("Error: invalid timespan. Enter times in chronological order.");
						console.log("Error: invalid timespan. Enter times in chronological order.");
					}else{
						if(date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) === date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) && before === "AM" && after === "AM" && (Number(hr1) != 12 && Number(hr2) === 12)){
							
							setError("Error: invalid timespan. Enter times in chronological order.");
							console.log("Error: invalid timespan. Enter times in chronological order.");
						}else{
							//Check PMs
							if(date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) === date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) && before === "PM" && after === "PM" && (Number(hr1) === 12 && Number(hr2) != 12)){
								
								setError("Error: invalid timespan. Enter times in chronological order.");
								console.log("Error: invalid timespan. Enter times in chronological order.");
							}else{
								if(date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) === date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) && before === "PM" && after === "PM" && (Number(hr1) === 12 && Number(hr2) === 12) && 
									((Number(min1) > Number(min2)) || ((Number(min1) <= Number(min2)) && (Number(sec1) > Number(sec2))) || 
									((Number(min1) === Number(min2)) && (Number(sec1) === Number(sec2))))){
									
									setError("Error: invalid timespan. Enter times in chronological order.");
									console.log("Error: invalid timespan. Enter times in chronological order.");
								}else{
									var valid = true;
									for(var i = 0; i < values.length; i++){
										console.log(values[i]);
										if(Number(values[i]) === parseInt(Number(values[i]), 10)){
											if(i % 3 === 0 && (values[i] < 1 || values[i] > 12) || i % 3 !== 0 && (values[i] < 0 || values[i] > 59)){
												setError("Error: input is out of bounds. Enter integers in between 1 and 12 or 0 and 59.");
												console.log("Error: input is out of bounds. Enter integers in between 1 and 12 or 0 and 59.");
												valid = false;
												break;
											}
										}else{
											setError("Error: input is not an integer.");
											console.log("Error: input is not an integer.");
											valid = false;
											break;
										}
									}
									if(valid === true){
										for(i = 0; i < values.length; i++){
											//correct input
											setError("Hours added!");
											console.log("Hours added!");
											values[i] = Number(values[i]);
										}
									}
									console.log(before);
									console.log(after);
								}
							}
						}
					}
				}
			}
		}
	}
	
	function outputError() {
		return (
			<div>
				{error}
			</div>
		);
	}
	var outputError = outputError();
	
	return(
		<div>
      <div className = "donk">
				<div>
					<Calendar 
						onChange = {onChange}
						selectRange = {true}
						value = {date}
					/>
				</div>
			</div>
			<div>
				&nbsp;
			</div>
      <div className = "donk">
				Click on a date twice or select a range of dates.
			</div>
			<div>
				&nbsp;
			</div>
      <div className = "donk">
				--------------------------------------------------------------------------------------------------
			</div>
			{/* check if date is null to prevent errors */}
			{date.length > 1 && date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(",")) === date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(",")) ? (
				/* same day */
        <div className = "donk">
					<div>
						Selected day:
					</div>
					<div>
						&nbsp;
					</div>
					<div>
						&nbsp;&nbsp;&nbsp;&nbsp;{date[0].toLocaleString().substring(0, date[0].toLocaleString().indexOf(","))}
						<div>
							&nbsp;
						</div>&nbsp;&nbsp;&nbsp;&nbsp;
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "12"
							onChange={e => setHour1(e.target.value)}
						/>:
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "00"
							onChange={e => setMin1(e.target.value)}
						/>:
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "00"
							onChange={e => setSec1(e.target.value)}
						/>&nbsp;
						<select id="inputAMPM1" onChange={e => setBefore(e.target.value)}>
							<option defaultValue>AM</option>
							<option value="PM">PM</option>
						</select>&nbsp;to&nbsp;
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "11"
							onChange={e => setHour2(e.target.value)}
						/>:
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "59"
							onChange={e => setMin2(e.target.value)}
						/>:
						<input
							style = {{width: 25}}
							type = "numeric"
							placeholder = "59"
							onChange={e => setSec2(e.target.value)}
						/>&nbsp;
						<select id="inputAMPM2" onChange={e => setAfter(e.target.value)}>
							<option defaultValue>PM</option>
							<option value="AM">AM</option>
						</select>
						<div>
							&nbsp;
						</div>
					</div>
				</div>
			) : (
				/* range of dates */
				date[1] == null ? (
          <div>
						<div className = "donk">
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
          <div className = "donk">
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
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "12"
									onChange={e => setHour1(e.target.value)}
								/>:
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "00"
									onChange={e => setMin1(e.target.value)}
								/>:
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "00"
									onChange={e => setSec1(e.target.value)}
								/>&nbsp;
								<select id="inputAMPM3" onChange={e => setBefore(e.target.value)}>
									<option defaultValue>AM</option>
									<option value="PM">PM</option>
								</select>
							</div>
							<div>
								&nbsp;&nbsp;&nbsp;&nbsp;to
							</div>
							<div>
								&nbsp;&nbsp;&nbsp;&nbsp;{date[1].toLocaleString().substring(0, date[1].toLocaleString().indexOf(","))}
								&nbsp;&nbsp;--&nbsp;&nbsp;
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "11"
									onChange={e => setHour2(e.target.value)}
								/>:
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "59"
									onChange={e => setMin2(e.target.value)}
								/>:
								<input
									style = {{width: 25}}
									type = "numeric"
									placeholder = "59"
									onChange={e => setSec2(e.target.value)}
								/>&nbsp;
								<select id="inputAMPM4" onChange={e => setAfter(e.target.value)}>
									<option defaultValue>PM</option>
									<option value="AM">AM</option>
								</select>
							</div>
						</div>
						<div>
							&nbsp;
						</div>
					</div>
				)
			)}
      <div className = "donk">
				--------------------------------------------------------------------------------------------------
			</div>
			<div>
				&nbsp;
			</div>
      <div className = "donk">
				<button className="btn btn-primary" onClick = {confirmChoice}>
					Submit
				</button>
			</div>
			{/* Output Error if there is one */}
			<div>
				&nbsp;
			</div>
      <div className = "donk">
				{outputError}
			</div>
		</div>
	);
};

export default CalendarComponent;