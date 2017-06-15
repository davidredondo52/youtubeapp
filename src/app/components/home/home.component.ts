import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos:any[]=[];
  videoSel:any;

  constructor(public youtubeService:YoutubeService) 
  {
		this.youtubeService.getVideos().subscribe(videos=>{
			this.videos=videos;
		});
  }

  ngOnInit() {
  }

  verVideo(video:any)
  {
    this.videoSel=video;
    $('#myModal').modal();
  }

  cerrarModal()
  {
     this.videoSel=null;
     $('#myModal').modal('hide');
  }

  cargarMas()
  {
      this.youtubeService.getVideos().subscribe(videos=>
      {
           /*1-Sustituye los videos
           // this.videos=videos;
           */
           //2-Los añade a continuación de los existentes
            this.videos.push.apply(this.videos,videos);
       });
  }
}
