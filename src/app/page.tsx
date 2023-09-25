import Header from "@/components//header/Header"
import LogoBar from "@/components/logoBar/LogoBar"
import ProgressBar from "@/components/progressBar/ProgressBar"
import TextBar from "@/components/textBar/TextBar"
import Main from "@/components/main/Main"
import Footer from "@/components/footer/Footer"
import ResponsiveHeader from "@/components/header/ResponsiveHeader"
import ResponsiveStepContainer from "@/components/progressBar/components/ResponsiveStep/ReponsiveStepContainer"
import ResponsiveMain from "@/components/main/ResponsiveMain"

export default function ProductPage(): JSX.Element {
  return (
   <main className='bg-white min-h-screen' >
    <ResponsiveHeader />
    <Header />
    <LogoBar />
    <TextBar />
    <ProgressBar />
    <ResponsiveStepContainer />
    <Main />
    <ResponsiveMain />
    <Footer />
   </main>
  )
}
