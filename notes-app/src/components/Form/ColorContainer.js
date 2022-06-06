import React from 'react';

function ColorContainer({ setBody, setColor, body }) {
  return (
    <div className="colorContainer">
      <textarea
        placeholder="Enter your note here..."
        rows="5"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      ></textarea>
      <div className="selectColor">
        <div className="colors">
          <input
            type="radio"
            style={{ backgroundColor: '#9388fc' }}
            name="color"
            value="#3FC1C9"
            defaultChecked={true}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="radio"
            style={{ backgroundColor: '#ff4c4c' }}
            name="color"
            value="#FC5185"
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="radio"
            style={{ backgroundColor: '#b2b2b2' }}
            name="color"
            value="#AA96DA"
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="radio"
            style={{ backgroundColor: '#ffff72' }}
            name="color"
            value="#F07B3F"
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="radio"
            style={{ backgroundColor: '#84fc5f' }}
            name="color"
            value="#FFDE7D"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <button type="submit">Add</button>
      </div>
    </div>
  );
}

export default ColorContainer;