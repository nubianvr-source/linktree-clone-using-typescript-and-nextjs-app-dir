import Image from 'next/image';
import {GitHubIcon,TwitterIcon,LinkCard} from "./icons"
import data from "../data/data.json"





export default async function HomePage() {


  return (
    <div className="flex items-center flex-col mx-auto w-full h-full justify-center pt-20 px-8 pb-10">
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={200}
        height={200}
      />
      <h1 className="font-Inter font-bold mt-4 mb-8 text-xl text-center text-black">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 text-black">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.href.includes('twitter') ? (
              <TwitterIcon />
            ) : social.href.includes('github') ? (
              <GitHubIcon />
            ) : null}
          </a>
        ))}
      </div>
      <h1 className="font-Inter font-light mt-4 mb-8 text-xl text-center text-black">Thank you for supporting us.</h1>
    </div>
  );
}
