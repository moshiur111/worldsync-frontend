import { useState } from "react";

// const TIMEZONE_OFFSETS = [
//   -12.0, -11.0, -10.0, -9.5, -9.0, -8.0, -7.0, -6.0, -5.0, -4.5, -4.0, -3.5,
//   -3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 5.75, 6.0, 6.5,
//   7.0, 8.0, 8.75, 9.0, 9.5, 10.0, 10.5, 11.0, 12.0, 12.75, 13.0, 14.0,
// ];

const ClockAction = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.taret;

    if (name === "offset") {
      value = Number(value) * 60;
    }
    updateClock({
      [name]: value,
    });
  };

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>

      {local ? <button>Create</button> : <button>Delete</button>}

      {isEdit && (
        <div>
          <input
            type="text"
            name="title"
            value={clock.title}
            onChange={handleChange}
          />

          <select
            name="timezone"
            value={clock.timezone}
            onChange={handleChange}
          >
            <option value="GMT">GMT</option>
            <option value="UTC">UTC</option>
            <option value="PST">PST</option>
            <option value="EST">EST</option>
            <option value="EDT">EDT</option>
            <option value="BST">BST</option>
            <option value="MST">MST</option>
          </select>

          {(clock.timezone === "GMT" || clock.timezone === "UTC") && (
            <select
              name="offset"
              value={clock.offset / 60}
              onChange={handleChange}
            >
              {TIMEZONE_OFFSETS.map((offset) => (
                <option key={offset} value={offset}>
                  {offset}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default ClockAction;
