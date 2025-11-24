import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datepicker/dist/react-datepicker.css";

const LabelInput = ({ label, placeholder, Icon, tag, timeList,
  // optional controlled props
  inputValue, onInputChange,
  selectedDate: controlledDate, onDateChange,
  displayText: controlledDisplayText, setDisplayText: controlledSetDisplayText,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const [displayText, setDisplayText] = useState("Time");
  const handleOptionClick = (option) => {
    if (controlledSetDisplayText) {
      controlledSetDisplayText(option);
    } else {
      setDisplayText(option);
    }
  };
  let Pickers;
  const handleClick = () => {
    console.log("object");
    return <ul className="text-left border rounded"></ul>;
  };
  return (
    <div className="  w-full  border-black pt-4">
      <label className="font-bold text-sm text-slate-blue font-open">
        {label}
      </label>

      {tag !== "Location" && visibility ? (
        <div className="max-h-96 overflow-y-auto absolute z-10  right-0 top-0 bg-white border border-gray-400 p-3 tracking-widest w-24  rounded-lg hover:cursor-pointer ">
          {timeList.map((time, index) => (
              <ul className="  text-left border" key={index}>
                <li
                  className=" text-slate-blue font-bold font-open text-md  hover:bg-green-600 text-center divide-y-2 divide-gray-800"
                  onClick={() => (
                    handleOptionClick(time.time), setVisibility(false))}>
                  {time.time}
                </li>
              </ul>
            ))}
        </div>
      ) : null}

      <div className=" w-full h-10 flex items-center justify-between  gap-5 px-3 py-2 border border-slate-blue rounded-xl mt-3 overflow-hidden font-open">
        {tag !== "Location" ? (
          <DatePicker
            className="placeholder:text-xs text-slate-blue placeholder:font-open w-full h-full bg-transparent border-transparent outline-none box-border leading-tight appearance-none"
            selected={controlledDate !== undefined ? controlledDate : selectedDate}
            onChange={(date) => {
              if (onDateChange) onDateChange(date);
              else setSelectedDate(date);
            }}
            minDate={new Date()}
          />
        ) : (
          <input
            type="text"
            value={inputValue !== undefined ? inputValue : ""}
            onChange={onInputChange}
            className=" placeholder:text-xs  placeholder:font-open w-full h-full bg-transparent border-transparent border-none focus:ring-0 outline-none box-border text-sm leading-tight appearance-none"
          />
        )}

        <span className={`border-l border-slate-blue ${tag !== 'Location'? 'pl-3': 'pl-14'}  h-full w-24 flex items-center justify-center`}>
          {tag !== 'Location'
            ? <p className=" font-bold text-slate-blue">{controlledDisplayText !== undefined ? controlledDisplayText : displayText}</p>
            : <p className=" font-bold text-slate-blue"></p>
          }
          <Icon
            className="text-slate-blue p-2  w-8 h-8 border-slate-blue hover:cursor-pointer"
            onClick={() => setVisibility(!visibility)}/>
        </span>

      </div>
    </div>
  );
};

export default LabelInput;

