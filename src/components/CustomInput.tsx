import { useState } from 'react';

interface CustomInputProps {
  label: string;
  placeholder: string;
  type?: string;
  isPassword?: boolean;
}
const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  type = 'text',
  isPassword = false,
}) => {
  const [viewPassord, setViewPassword] = useState(false);

  const handleViewPassword = () => {
    setViewPassword((prev) => !prev);
  };
  return (
    <div className=" input-box">
      <div>
        <label htmlFor="">{label}</label>
        <br />
        <input type={viewPassord ? 'text' : type} placeholder={placeholder} />
      </div>
      {isPassword && (
        <button className=" view-btn" onClick={handleViewPassword}>
          {viewPassord ? 'Hide' : 'View'}
        </button>
      )}
    </div>
  );
};

export default CustomInput;
