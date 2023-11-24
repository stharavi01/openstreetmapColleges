import { Button } from 'semantic-ui-react';

const CollegeTypeButtons = () => {
    


  return (
    <div style={{marginBottom:'12px'}}>
<p style={{display:'inline-block', marginRight:'10px'}}>Colleges Type:</p>
 <Button.Group>
    <Button>Private</Button>
    <Button>Government</Button>
    <Button>Community</Button>
  </Button.Group>
    </div>
  
  )
}
export default CollegeTypeButtons