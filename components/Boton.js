export default function Boton(props) {
  const text = props.text;

  return (
    <button
      className="bg-azul hover:bg-blue-700 text-blanco font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      onClick={props.onClick}
    >
      {text}
    </button>
  );
}
