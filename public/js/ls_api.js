console.log("Hello motto");
let nextPageToken = ""
function getVideos(){
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCAA6IsLVfbHrP1I_lzxv09Q&maxResults=10&key=AIzaSyCWAMiPo7KnaWzkmM45AwI1Wc9gZ6tvbyk&pageToken="+nextPageToken)
    .then((result)=>{
        return result.json();
    }).then((data)=>{
        console.log(data);
        nextPageToken = data.nextPageToken;
        let videos = data.items;
        let videoContainer = document.querySelector(".youtube-container");
        for (video of videos){
        videoContainer.innerHTML+=  `
        <iframe width="400" height="400" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen>  </iframe> 
        <h4>${video.snippet.title} </h4> 
        `;
    }
})
}
getVideos();
