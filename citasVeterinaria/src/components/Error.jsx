function Error({mensaje}) {
  return (
    <div className="bg-red-700 p-3 mb-3 rounded-md">
      <h1 className="text-center text-white font-bold uppercase">{mensaje}</h1>
    </div>
  )
}

export default Error
