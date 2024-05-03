type Props = {}

export default function Header({ }: Props) {
  return (
    <div
      className="bg-emerald-600 w-full h-48 flex justify-center items-center py-8"
    >
      <h1 className="text-gray-100 lg:text-6xl text-4xl font-semibold italic"><span className="font-extrabold">P</span>ayble</h1>
    </div>
  )
}