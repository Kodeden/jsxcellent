function Restaurant({ restaurant }) {
  /**
   * This function generates the proper amount of star icons
   * for each restaurant depending on the star rating. This
   * function should be called in the JSX below.
   * 
   * @param starCount This should be the 'stars' property value
   * @returns n amount of <UilStar /> elements depending on the stars value passed in
   */
  const generateStars = (starCount) => {
    return (
      [...Array(starCount)].map(() => <UilStar key={Math.random(100)} size="40" color="#ffd700" />)
    );
  }

  return (
    <div className='restaurant-container'>
      <div className='name-rating-container'>
        <div className='restaurant-name'>{restaurant.restaurantName}</div>
        <div className='restaurant-stars'>{generateStars(restaurant.stars)}</div>
      </div>
      <div className='comments-container'>
        {
          restaurant.comments.map(comment => {
            return <Comment key={comment.id} comment={comment} />
          })
        }
      </div>
    </div>
  );
}

export default Restaurant;