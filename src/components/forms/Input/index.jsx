export default function Input({ handleChange, name, placeholder }) {
  return (
    <input
      type='text'
      className='px-6 py-2 rounded-md'
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
    />
  );
}
