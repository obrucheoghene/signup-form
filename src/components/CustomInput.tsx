interface CustomInputProps {
  label: string;
  placeholder: string;
  type?: string;
}
const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  type = 'text',
}) => {
  return (
    <div className=" input-box">
      <div>
        <label htmlFor="">{label}</label>
        <br />
        <input type={type} placeholder={placeholder} />
      </div>
      {type === 'password' && <button className=" view-btn">View</button>}
    </div>
  );
};

export default CustomInput;
