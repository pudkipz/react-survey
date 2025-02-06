
export default function Checkboxes({selected}) {
  return (
    <ul>
      <li>
        <label
          ><input
            name='spend-time'
            type='checkbox'
            value='swimming'
            checked={selected.includes('swimming')}
          />Swimming</label
        >
      </li>
      <li>
        <label
          ><input
            name='spend-time'
            type='checkbox'
            value='bathing'
            checked={selected.includes('bathing')}
            />Bathing</label
        >
      </li>
      <li>
        <label
          ><input
            name='spend-time'
            type='checkbox'
            value='chatting'
            checked={selected.includes('chatting')}
          />Chatting</label
        >
      </li>
      <li>
        <label
          ><input
            name='spend-time'
            type='checkbox'
            value='noTime'
            checked={selected.includes('noTime')}
            />I don't like to
          spend time with it</label
        >
      </li>
    </ul>
  )
}