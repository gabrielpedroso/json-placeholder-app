export default function Title(props: { text: string }) {
  return (
    <>
      <h1 className="text-xl font-bold px-4">{props.text}</h1>
    </>
  )
}