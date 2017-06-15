import { Injectable } from '@angular/core';
import { Http ,URLSearchParams} from '@angular/http';
import   'rxjs/Rx';
@Injectable()
export class YoutubeService {

  private youtubeUrl:string="https://www.googleapis.com/youtube/v3";
  private apiKey:string="AIzaSyAvc8XcCvIbQfytpXzYJwWUtMZX43PwznA";
 // AIzaSyAvc8XcCvIbQfytpXzYJwWUtMZX43PwznA

  private playList:string="UUUiiO_bccZFMVmnJ2Jj95lg";
  private nextPageToken:string="";

  private channel:string="https://www.googleapis.com/youtube/v3/channels";
  //"uploads": "UUUiiO_bccZFMVmnJ2Jj95lg",
  constructor(public http:Http)
   {

   }

   getVideos()
   {
   	let url=`${this.youtubeUrl}/playlistItems`;


   	let params=new URLSearchParams();

   	params.set('part','snippet');
   	params.set('maxResults','10');
   	params.set('playlistId',this.playList);
	  params.set('key',this.apiKey);
    if(this.nextPageToken)
    {
      params.set('pageToken',this.nextPageToken);
    }
   	return this.http.get(url, {search: params} ).map(res=>
   	{
   		console.log(res.json())
   		this.nextPageToken=res.json().nextPageToken;

       let videos:any[]=[];
       for(let video of res.json().items)
       {
         let snnipet=video.snippet;
         videos.push(snnipet);
       }
       return videos;
   	});
   }

}
