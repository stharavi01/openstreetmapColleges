import { Button } from 'semantic-ui-react';
import { useGlobalContext} from '../context';

const CollegeTypeButtons = () => {
const { filteredProperties } = useGlobalContext();
const handleDisplayTypeButton = () => {
console.log(filteredProperties);
}

  return (
 <div style={{marginBottom:'12px'}}>
<p style={{display:'inline-block', marginRight:'10px'}}>Colleges Type:</p>
 <Button.Group>
    <Button onClick={handleDisplayTypeButton}>Private</Button>
    <Button onClick={handleDisplayTypeButton}>Government</Button>
    <Button onClick={handleDisplayTypeButton}>Community</Button>
  </Button.Group>
    </div>
  
  )
}
export default CollegeTypeButtons