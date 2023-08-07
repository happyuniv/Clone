import Single from '../components/Single'
import { singleUser } from '../data'

export default function User() {
  return (
    <>
      <div className='user'>
        <Single {...singleUser} />
      </div>
    </>
  )
}
