export default function LabelItemChequeo(props) {
  const text = props.text;
  const num = props.num;
  return (
    <div className="bg-fondo border rounded-lg flex flex-row text-azulOscuro text-center">
      <label className="border-r basis-1/12"> {num}</label>
      <label className="border-r basis-8/12"> {text}</label>
      <div className="border-r basis-1/12">
        <input type="radio" value="B"></input>
      </div>
      <div className="border-r basis-1/12">
        <input type="radio" value="B"></input>
      </div>
      <div className="basis-1/12">
        <input type="radio" value="B"></input>
      </div>
    </div>
  );
}
