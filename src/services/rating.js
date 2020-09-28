 export function submitRating(category, id, responseData, rating, setResponseData, setActive, active, cookies) {
    fetch(`http://localhost:5000/${category}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        rating: [...responseData, {session_id: cookies, rating: rating}],
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => setResponseData([...data]))
      .catch((err) => 'Error' + err)
      setActive(!active)
  }

  export function resetRating(category, id, responseData, setResponseData, rating, setActive, active ) {
    const index = responseData.filter(responseRating => responseRating === rating)
    setResponseData([
      ...responseData.slice(0, index),
      ...responseData.slice(index + 1)])
      
    fetch(`http://localhost:5000/${category}/${id}`, {
      method: 'PATCH',
      body: 
        JSON.stringify({
        rating: [...responseData, rating],
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .catch((err) => 'Error' + err)
    setActive(!active)
  }