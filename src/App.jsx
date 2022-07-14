import { useState } from 'react'

const Header = () => (
    <div>
      <h1>Give Feedback</h1>
    </div>
)

const SubHeader = (props) => (
  <div>
    <h2>Stats</h2>
    <p>Good Reviews: {props.goodCounter}</p>
    <p>Neutral Reviews: {props.neutralCounter}</p>
    <p>Bad Reviews: {props.badCounter}</p>
  </div>
)

const OtherStats = (props) => (
  <div>
    <p>Total Reviews: {props.totalReviews}</p>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)





const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalReviews, sumReviews] = useState(0)

  const incrementGoodReview = newValue => {
    newValue += 1
    setGood(newValue)
  }

  const incrementNeutralReview = newValue => {
    setNeutral(newValue)
  }

  const incrementBadReview = newValue => {
    setBad(newValue)
  }

  
  const totalReview = newValue => {
    newValue = (good + bad + neutral)
    sumReviews(newValue)
    console.log(totalReviews)

  }


  return (
    <div>
      <Header />
      <Button handleClick={() => {incrementGoodReview(good); totalReview()}} text='Good' />
      <Button handleClick={() => {incrementNeutralReview(neutral); totalReview()}} text='Neutral' />
      <Button handleClick={() => {incrementBadReview(bad); totalReview()}} text='Bad' />
      <SubHeader goodCounter={good} neutralCounter={neutral} badCounter={bad}/>
      <OtherStats totalReviews={totalReviews} />
    </div>
  )
}
export default App
