import dynamic from "next/dynamic";
const Services = dynamic(() => import("./_components/services"));
const Footer = dynamic(() => import("./_components/footer"));
const Contactus = dynamic(() => import("./_components/contactus"));
const Community = dynamic(() => import("./_components/community"));
const History = dynamic(() => import("./_components/history"));
const Intro = dynamic(() => import("./_components/intro"));
const Executive = dynamic(() => import("./_components/executive"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Intro />
      <Services />

      <History />

      <Executive />
      <Community />

      <Contactus />

      <Footer />
    </div>
  );
}
