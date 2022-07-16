import { useState } from 'react'

const Header = () => (
    <div>
      <h1>Give Feedback</h1>
    </div>
)

const ReviewCount = ({good, neutral, bad, totalReviews}) => {
  if(totalReviews === 0) {
    return(
      <div>

      </div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <tr>
            <th>Goodness</th>
            <th>Reviews</th>
          </tr>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = ({good, totalReviews}) => {
  if(totalReviews === 0) {
    return(
      <div>
        <p>No reviews yet!</p>
      </div>
    )
  }
  
  const positiveAverage = ((good/totalReviews) * 100).toFixed(2)

  return(
    <div>
      <p>Total Reviews: {totalReviews}</p>
      <p>Average Positive Rating: {positiveAverage}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalReviews, setTotal] = useState(0)



  const incrementGoodReview = newValue => {
    setGood(newValue)
  }

  const incrementNeutralReview = newValue => {
    setNeutral(newValue)
  }

  const incrementBadReview = newValue => {
    setBad(newValue)
  }

  const sumTotal = newValue => {
    setTotal(newValue)
  }  

  return (
    <div>
      <Header />
      <Button handleClick={() => {sumTotal(totalReviews + 1);incrementGoodReview(good + 1)}} text='Good' />
      <Button handleClick={() => {sumTotal(totalReviews + 1); incrementNeutralReview(neutral + 1)}} text='Neutral' />
      <Button handleClick={() => {sumTotal(totalReviews + 1); incrementBadReview(bad + 1)}} text='Bad' />
      <ReviewCount good={good} neutral={neutral} bad={bad} totalReviews={totalReviews}/>
      <Stats good={good} totalReviews={totalReviews} />
    </div>
  )
}
export default App
