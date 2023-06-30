export default function ErrorList(props) {
  const { errors } = props
  return (
    <div className='errors transition-element'>
      <h2 className='transition-element'>
       Sorry, it seems we have a big issue over here! :c
      </h2>
      <ol>
        {errors.map(error => (
          <li className='transition-element' key={error.id}>
            {error.errorName}
          </li>
        ))}
      </ol>
    </div>
  )
}
