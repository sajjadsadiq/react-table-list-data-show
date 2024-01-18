function Item({ name, isPacked }) {
  return (
    <li className="item">
    {isPacked ? name + '✔' : name}
  </li>
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
  );
}
