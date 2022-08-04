import React,{useState} from 'react'
import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import Result from './result';
const Home = () => {
  const[searchInput, setsearchInput]=useState('')
  const[repos, setRepos]=useState('')
const handleClick = async ()=>{
  console.log(searchInput);
  
  try{
   // const result = await axios(`https://github.com/PHP-FFMpeg/PHP-FFMpeg/issues/${searchInput}`);

    // Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: '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'
})

const result = await octokit.request('GET /repos/PHP-FFMpeg/PHP-FFMpeg/issues', {
  owner: 'PHP-FFMpeg',
  repo: 'PHP-FFMpeg'
})
   // https://api.github.com/orgs/ORG/issues
    setRepos(result);
  }
  catch(err){
    console.log(err)
  }
};
  return (
    <div className='text-center mt-3'>
      <input type="text" placeholder='Search' value={searchInput} onChange={(e)=>{setsearchInput(e.target.value)}}/>
      <br />
      <button onClick={handleClick}>Search</button>
     <Result repos={repos}/>
    </div>
  )
}
export default Home