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
        bodyText: `<iframe width="854" height="480" src="https://www.youtube.com/embed/WU7SGn0MeP0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>` 
      },
      { 
        id: 3, 
        bodyText: `<img src="https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg" alt="Image">` 
      },
      {
        id: 4,
        bodyText: ``
      },
      {
        id: 5,
        bodyText: `<img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Wappen-ober-ingelheim-400x400.png" alt="Image">`
      },
      {
        id: 6,
        bodyText: `<img src="http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" alt="Image">`
      },
      {
        id: 7,
        bodyText: `<iframe width="854" height="480" src="https://www.youtube.com/embed/hKRUPYrAQoE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
      },
      {
        id: 8,
        bodyText: ``
      }
    ];
    return {boxs}
  }
}