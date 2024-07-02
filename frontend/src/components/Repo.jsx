import React from 'react'
import { FaCodeBranch, FaCodeFork, FaCopy, FaRegStar } from 'react-icons/fa6'
import { formatMemberDate } from '../utils/functions'
import { PROGRAMMING_LANGUAGES } from '../utils/constants';
import toast from 'react-hot-toast';

function Repo({repo}) {
  const date=formatMemberDate(repo.created_at);


const handelClick=async(repo)=>{
  try{
  await navigator.clipboard.writeText(repo.html_url);
  toast.success('Repo cloned to clipboard ')
  }
  catch(error){
toast.error("failed to clone to clipboard")
  }
}


  return (
 
<li className='mb-10 ms-7'>
			<span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
			rounded-full -start-3 ring-8 ring-white'
			>
				<FaCodeBranch className='w-5 h-5 text-blue-800' />
			</span>
			<div className='flex gap-2 items-center flex-wrap'>
				<a
					href={"https://github.com/burakorkmez/mern-chat-app"}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					{repo.name}
				</a>
				<span
					className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
				>
					<FaRegStar />  {repo.stargazers_count}
				</span>
				<span
					className='bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCodeFork /> {repo.forks_count}
				</span>
				<span
        onClick={()=>handelClick(repo)}
					className='cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCopy /> Clone
				</span>
			</div>

			<time
				className='block my-1 text-xs font-normal leading-none
			 text-gray-400'
			>
				Released on {date}
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>Real Time Chat App | MERN && Socket.io && JWT</p>
			{/* <img src={"/javascript.svg"} alt='Programming language icon' className='h-8' /> */}
      {PROGRAMMING_LANGUAGES[repo.language]? (
     <img src={PROGRAMMING_LANGUAGES[repo.language]} alt='Programming language icon' className='h-8' /> ):null}
		</li>

  )
}

export default Repo
