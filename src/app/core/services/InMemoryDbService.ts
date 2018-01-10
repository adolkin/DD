import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const boxs =
    [
      { 
        id: 1, 
        bodyText: `<h1><center>h1Tag</center></h1> 
          <p><i><u>Html Tag</u></i></p>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>` 
      },
      { 
        id: 2, 
        bodyText: `<iframe width="400" height="400" src="https://www.youtube.com/embed/ASj81daun5Q?list=RDASj81daun5Q" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>` 
      },
      { 
        id: 3, 
        bodyText: `<img src="https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg" alt="Image" width="512" height="256">` 
      }
    ];
    return {boxs}
  }
}