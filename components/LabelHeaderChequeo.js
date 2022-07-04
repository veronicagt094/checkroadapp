export default function LabelHeaderChequeo(props) {
  const text = props.text;
  const num = props.num;
  return (
    <div className="bg-blanco2 border rounded-lg text-azulOscuro text-center flex flex-row">
      <label className="border-r basis-1/12"> {num}</label>
      <label className="border-r basis-8/12"> {text}</label>
      <label className="border-r basis-1/12">B</label>
      <label className="border-r basis-1/12">R</label>
      <label className="basis-1/12">M</label>
    </div>
  );
}
