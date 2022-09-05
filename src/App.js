import react, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [image, setImage] = useState('')

    const handleChange = () => {
        axios
            .get('https://api.generated.photos/api/v1/faces?api_key=S8GHTpwfr-rgO5fkEUnTew&order_by=random')
            .then(res => {
            const url = res.data.faces[0].urls[4][512];
            url && setImage(url);
        })
            .catch(err => {
            console.log(err.message);
        });
    };
  return (
    <div className="App">
      <h1>AI Photo Generator</h1>
        {image && <img src={image} alt="AI Face" />}
        <button type='button' onClick={handleChange}>
            New Image
        </button>
        <div className="Creatorname">Created By ©Tajeddine BOURHIM</div>
    </div>
  );
}

export default App;
