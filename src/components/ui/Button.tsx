type Props = {}

export default function Button({ }: Props) {
  return (
    <button
      className='w-full h-10 bg-green-400 flex justify-center items-center p-2 text-black font-medium text-xl rounded-lg transition-all hover:brightness-125'
    >
      Entrar
    </button>
  )
}