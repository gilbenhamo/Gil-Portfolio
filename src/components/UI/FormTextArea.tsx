interface Props {
    name: string;
    rows: number;
    value: string | number;
    label:string;
    onChnage: (event:any) => void;
    placeholder: string;
  }
  
  const FormInputElement = ({
    name,
    rows,
    value,
    onChnage,
    placeholder,
    label
  }: Props) => {
    return (
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">{label}</span>
        <textarea
        rows={rows}
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
  