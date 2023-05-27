import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import changeScaryLetters from './lettersLib'

function BasicExample() {

  const [result, setResult] = useState('')

  const [value, setValue] = useState("");

  const [link, setLink] = useState('')

  const onChange = (event) => setValue(event.target.value);

  const buttonPressed = () => {
    setResult(changeScaryLetters(value))
    
    let stringUrl = "http://www.google.com/search";
    let url = new URL(stringUrl);
    let params = url.searchParams;
    params.append("q", changeScaryLetters(value));

    setLink(url.toString())
  }

  let width = {
    "max-width": 1000,
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Питання</Form.Label>
        <Form.Control type="inoutText" placeholder="Питання" as="textarea" rows={5} value={value} onChange={onChange} />
      </Form.Group>
      
      <Button variant="primary" onClick={buttonPressed}>
        Зроби мені збс!
      </Button>
    
      <Button className="m-2" variant="primary" onClick={() => setValue('')}>
        Очистити
      </Button>
      <br></br>
      <br></br>
      {
        link && <div>
          <Form.Group className="mb-3" controlId="iidi">
            <Form.Label>Результат</Form.Label>
            <Form.Control type="result" placeholder="Результат"  as="textarea" rows={5} value={result}/>
          </Form.Group>
          
          <Card className="p-4">
            <p >{link && <div>"Google link: " <a href={link}>{link}</a></div>}</p>
          </Card>
      </div>
      }
     
    </Form>
  );
}

export default BasicExample;