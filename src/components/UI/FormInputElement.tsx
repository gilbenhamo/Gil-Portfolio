interface Props {
  name: string;
  type: string;
  value: string | number;
  label:string;
  onChnage: (event:any) => void;
  placeholder: string;
}

const FormInputElement = ({
  name,
  type,
  value,
  onChnage,
  placeholder,
  label
}: Props) => {
  return (
    <label className="flex flex-col md:w-6/12 w-full lg:w-8/12">
      <span className="text-white font-medium mb-4">{label}</span>
      <input
      required
        type={type}
        name={name}
        value={value}
        onChange={onChnage}
        placeholder={placeholder}
        className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-2xl outline-none border-none font font-medium"
      />
    </label>
  );
};

export default FormInputElement;
