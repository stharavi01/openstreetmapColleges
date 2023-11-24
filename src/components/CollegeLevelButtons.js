import { Button } from 'semantic-ui-react'
const CollegeLevelButtons = () => {
  return (
    <div>
<p style={{display:'inline-block', marginRight:'10px'}}>College Level:</p>
 <Button.Group>
    <Button>Secondary</Button>
    <Button>Higher Secondary</Button>
    <Button>College</Button>
  </Button.Group>
    </div>
  )
}
export default CollegeLevelButtons;