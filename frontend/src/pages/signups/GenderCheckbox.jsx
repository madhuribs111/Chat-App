const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "Male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === "Male"}
            onChange={() => onCheckboxChange("Male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "Female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === "Female"}
            onChange={() => onCheckboxChange("Female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;

// const GenderCheckbox = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Male</span>
// 					<input type='checkbox' defaultChecked className="checkbox checkbox-primary" />
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Female</span>
// 					<input type='checkbox' defaultChecked className="checkbox checkbox-primary" />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };
// export default GenderCheckbox;
