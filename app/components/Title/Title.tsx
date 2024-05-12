export default function Title(props: { text: string }) {
  return (
    <>
      <h1 className="text-xl font-bold">{props.text}</h1>
    </>
  )
}