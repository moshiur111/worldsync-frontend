import { useEffect, useState } from "react";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";
import { getOffset } from "../../../utils/timezone";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title = true,
  edit = false,
}) => {
  const [formValuse, setFormValues] = useState({ ...values });

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValuse.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValuse.timezone],
      }));
    }
  }, [formValuse.timezone]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "offset") {
      value = Number(value) * 60;
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValuse);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Enter Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValuse.title}
          onChange={handleChange}
          disabled={!title}
        />
      </div>

      <div>
        <label htmlFor="timezone">Enter Timezone</label>
        <select
          name="timezone"
          id="timezone"
          value={formValuse.timezone}
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
      </div>

      {(formValuse.timezone === "GMT" || formValuse.timezone === "UTC") && (
        <div>
          <label htmlFor="offset">Enter Offset</label>
          <select
            name="offset"
            id="offset"
            value={formValuse.offset}
            onChange={handleChange}
          >
            {getOffset().map((offset) => (
              <option key={offset} value={offset}>
                {offset}
              </option>
            ))}
          </select>
        </div>
      )}

      <button>{edit ? "Update" : "Create"}</button>
    </form>
  );
};

export default ClockForm;
