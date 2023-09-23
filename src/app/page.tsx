import Header from "@/components//header/Header"
import LogoBar from "@/components/logoBar/LogoBar"
import ProgressBar from "@/components/progressBar/ProgressBar"
import TextBar from "@/components/textBar/TextBar"
import Main from "@/components/main/Main"

export default function ProductPage(): JSX.Element {
  return (
   <main className='bg-white min-h-screen' >
    <Header />
    <LogoBar />
    <TextBar />
    <ProgressBar />
    <Main />
   </main>
  )
}
