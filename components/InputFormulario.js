export default function InputFormulario(props) {
  const placeholder = props.placeholder;
  return (
    <input
      className="bg-fondo shadow rounded-2xl py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mt-2 mx-4"
      type="text"
      placeholder={placeholder}
    />
  );
}
