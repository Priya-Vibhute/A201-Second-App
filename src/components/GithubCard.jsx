import React, { useEffect, useState } from 'react'

function GithubCard() {
    let [gitHubData,setGitHubData]=useState("")
    let[repos,setRepos]=useState([])
    let[searchQuery,setSearchQuery]=useState("")

    useEffect(()=>{
    fetch("https://api.github.com/users/Priya-Vibhute")
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
        setGitHubData(data)

        fetch(data["repos_url"])
        .then(repositories=>repositories.json())
        .then(repositories=>{
          console.log(repositories)
          setRepos(repositories)
        })
       
    })
    },[])
    
  return (
    <div>
      <h1>Github</h1>
      <img src={gitHubData.avatar_url} alt="" />
      <h1>{gitHubData.login}</h1>
      <p>Follwers :{gitHubData.followers_url}</p>
      <p>Followers: {gitHubData.followers} Following :{gitHubData.following}</p>
      <a href={`https://github.com/${gitHubData.login}`}>
        Visit Profile
      </a>  
          <hr />

          <h1>Repositories</h1>
          <input type="text" name='repo_name' onChange={(e)=>{setSearchQuery(e.target.value)}}/>

          {
            repos.filter((r)=>{
              return r.full_name.toLowerCase().includes(searchQuery.toLowerCase())
            }).map((r)=>{

              return(
              <>

                     <ol>
                      <li>Repo Name: {r.full_name}</li>
                      <a href={r.html_url}>{r.full_name}</a>
                     </ol>
              </>)
            })
          }
      
      
        </div>
      
  )
}

export default GithubCard
