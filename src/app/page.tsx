import Link from 'next/link';
export default function Home() {
  return (
    <>
      <div>This is home page</div>
      <div className='flex gap-5 justify-items-center text-center'>
        <div>Below are the pages that are protected from guest</div>
        <div><Link href="/profile"><div className='text-blue-600'>Profile</div></Link></div>
        <div><Link href="/about"><div className='text-blue-600'>About</div></Link></div>
      </div>
    </>
  )
}