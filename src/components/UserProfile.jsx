import { PropTypes } from "prop-types";
import { UserFavouriteFoods } from "./UserFavouriteFoods";
import { UserUsername } from "./UserUsername";


export default function UserProfile(props){

  console.log(props);
  props.callMe();
  

  
  return (
    <div id="user-profiles">
      <UserUsername username={props.username} />

       <b>Age:</b><span>{props.age}</span>

      <UserFavouriteFoods />      
      
    </div>
  );
}

UserProfile.propTypes={
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func,
  favouriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  )

}