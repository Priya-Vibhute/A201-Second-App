import React, { useEffect, useState } from 'react'

function GithubCard() {
    let [gitHubData,setGitHubData]=useState("")
    useState("")

    useEffect(()=>{
    fetch("https://api.github.com/users/Priya-Vibhute")
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
        setGitHubData(data)
    })
    },[])
    
  return (
    <div>
      <h1>Github</h1>
      <img src={gitHubData.avatar_url} alt="" />
      <h1>{gitHubData.login}</h1>
      <p>Follwers :{gitHubData.followers_url.length}</p>
    </div>
  )
}

export default GithubCard
