import { useState, useEffect } from "react"

export default function ProgressBar({ total, threshold, freeGift }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (total >= threshold) {
      setProgress(100)
    } else {
      setProgress(Math.floor((total * 100) / threshold))
    }
  }, [total])

  console.log("Total, progress", total, progress)

  return (
    <div className="gift-container">
      <p>
        Add &#8377;{threshold - total} to get a FREE {freeGift.name}!
      </p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}
