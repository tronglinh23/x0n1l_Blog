import Posts from './components/Posts'

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hi👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">x0n1L 🚀</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
}
