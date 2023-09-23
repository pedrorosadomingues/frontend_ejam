import Header from "@/components//header/Header"
import LogoBar from "@/components/logoBar/LogoBar"
import TextBar from "@/components/textBar/TextBar"

export default function ProductPage(): JSX.Element {
  return (
   <main className='bg-white min-h-screen' >
    <Header />
    <LogoBar />
    <TextBar />
   </main>
  )
}
