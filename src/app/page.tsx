import Image from "next/image";
import {
  HeroSection,
  Header,
  Overview,
  ProductDetailsCard,
  FAQ,
  ContactUs,
  Footer,
} from "@/components/index";

const productDetailData = [
  {
    url: "/stablecoinicon.png",
    name: "The Statera Stablecoin",
    details:
      "Meet sUSD — Stability for the Midnight Economy. sUSD is the overcollateralized stablecoin that powers the Statera ecosystem. Minted through secure deposits and protected by privacy‑preserving blockchain architecture, sUSD is your gateway to staking, launchpad participation, and cross‑protocol liquidity.",
  },
  {
    url: "/launch-icon.png",
    name: "Statera Launchpad",
    details:
      "Create Tokens. Launch Sales. Build Communities.     Whether you're a startup raising capital or a creator minting a fun custom token, Statera Launchpad makes token creation instant and accessible. Features: Instant Token creation, Full Token Sale Platform, Privacy-compliant issuance",
  },
  {
    url: "/liquidstakingicon.png",
    name: "Hydra Stake - Liquid Staking Protocol",
    details:
      "Liquid Staking, Reimagined for Privacy. Hydrastake provides dual yield through stTokens that remain spendable across DeFi protocols. Earn staking rewards while keeping liquidity active.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-black">
      <Image
        src="/Ellipse.png"
        alt="ellipse"
        height={800}
        width={800}
        className="absolute -bottom-20 z-0 md:top-0 md:right-0 flex"
      />
      <div className="absolute md:top-0 right-0 z-0 flex -bottom-55">
        <Image
          src="/background.png"
          alt="background"
          width={750}
          height={750}
          className="background-fade"
        />
      </div>
      <Header />
      <HeroSection />
      <Overview />
      <div className="container flex flex-col justify-center items-center gap-16">
        {productDetailData.map((product, idx) => (
          <ProductDetailsCard
            key={idx}
            url={product.url}
            name={product.name}
            details={product.details}
            index={idx}
          />
        ))}
      </div>
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}
