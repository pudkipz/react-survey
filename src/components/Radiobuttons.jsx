


export default function Radiobuttons({selected}) {
  return (
    <ul>
      <li>
        <input id='color-one' type='radio' name='color' value='1' checked={1 == selected} /><label
          htmlFor='color-one'
          >1</label
        >
      </li>
      <li>
        <input id='color-two' type='radio' name='color' value='2' checked={2 == selected} /><label
          htmlFor='color-two'
          >2</label
        >
      </li>
      <li>
        <input id='color-three' type='radio' name='color' value='3' checked={3 == selected} /><label
          htmlFor='color-three'
          >3</label
        >
      </li>
      <li>
        <input id='color-four' type='radio' name='color' value='4' checked={4 == selected} /><label
          htmlFor='color-four'
          >4</label
        >
      </li>
    </ul>
  )
}
