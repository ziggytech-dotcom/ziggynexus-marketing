import Image from 'next/image'

export function ZiggyNexusLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggynexus-wordmark-dark.png"
      alt="ZiggyNexus"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
