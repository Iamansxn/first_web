import "./Menu.css";
export const Menu = () => {
  return (
    <div className="sbn sbn01">
      <p>Food</p>
      <ul>
        <li>
          <input type="radio" id="html" name="fav_language" value="Breakfast" />
            <label htmlFor="html">Breakfast</label>
        </li>
        <li>
          <input type="radio" id="html" name="fav_language" value="Lunch" /> 
          <label htmlFor="html">Lunch</label>
        </li>
        <li>
          <input type="radio" id="html" name="fav_language" value="Dinner" /> 
          <label htmlFor="html">Dinner</label>
        </li>
      </ul>
    </div>
  );
};
