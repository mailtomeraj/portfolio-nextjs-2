import Image from "next/image"

const Bio = () => {
  return (
    <section id="bio" className=' lg:pt-14 max-w-[1652px] flex justify-between flex-row mx-auto px-7'>
<div className='w-1/2'>
<h1 className=" text-[56px] text-c-dark font-[900]">Meraj Naqui</h1>
<span className=" text-c-blue mt-4  text-2xl font-medium uppercase -tracking-tighter">React developer</span>

<p className=" mt-9 text-[16px] font-normal text-c-dark">The more complex and the more moving parts, the more I enjoy building it! I have experience building a wide range of applications, from video games to painting portfolios, and I aim to make each project fully responsive, accessible, smooth and bug-free down to the smallest details. I love to work with people who are striving for the same high standards, so if that’s you, let’s talk. </p>
</div>

<div className=' flex justify-center relative w-1/2'>


<Image className=" w-[421px] h-[421px] rounded-full   absolute -top-7 animate-spin-slow" src="/images/large.png" alt="Bordered avatar" width={421} height={421} />
<Image className=" w-[355px] h-[365px] rounded-full   -z-10 absolute top-0 border border-c-dark" src="/images/meraj-naqui.jpg " alt="Bordered avatar" width={365} height={365} />


<div className='absolute -top-8 right-20  md:block hidden -z-20 bg-c-light-green w-[380px] h-[380px] rounded-full'></div>

</div>



    </section>
  )
}

export default Bio