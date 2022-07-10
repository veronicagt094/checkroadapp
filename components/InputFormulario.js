export default function InputFormulario(props) {
  const placeholder = props.placeholder;
  const value = props.value;

  return (
    <input
      className="bg-fondo shadow rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-2 mx-4"
      type={props.type}
      name={props.name}
      placeholder={placeholder}
      value={value}
      onChange={props.onChange}
      {...props}
    />
  );
}
